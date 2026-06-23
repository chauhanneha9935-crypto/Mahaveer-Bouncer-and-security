import os
import time
import math
import numpy as np
from PIL import Image

try:
    import cv2
except ImportError:
    print("Error: OpenCV (cv2) is not installed. Please install opencv-python.")
    exit(1)

# Paths to the image assets
ASSETS_DIR = r"c:\Users\chauh\OneDrive\Desktop\service\mahaveer-bouncer\src\assets"
OUTPUT_PATH = r"c:\Users\chauh\OneDrive\Desktop\service\mahaveer-bouncer\public\bodyguard_operations.mp4"

# Let's inspect the files we can use
image_filenames = [
    "bodyguard3.png",
    "bodyguard2.png",
    "guard1.jpg",
    "guard2.jpg",
    "tactical_bouncer_unit.png",
    "trained_professionals.png",
    "verified_staff.png",
    "bodyguard1.avif"  # AVIF might not load depending on PIL plugins, we'll try/except
]

# Resolution of the output video (3:4 ratio for the Hero container)
WIDTH = 540
HEIGHT = 720
FPS = 30
TOTAL_DURATION = 30  # seconds
TOTAL_FRAMES = TOTAL_DURATION * FPS

def load_images():
    valid_images = []
    for fname in image_filenames:
        fpath = os.path.join(ASSETS_DIR, fname)
        if not os.path.exists(fpath):
            print(f"Skipping {fname}: File does not exist")
            continue
        try:
            # Try to open with Pillow
            img = Image.open(fpath)
            img.verify()  # Verify it's a valid image
            
            # Re-open because verify() closes file pointers/corrupts further operations
            img = Image.open(fpath)
            # Convert to RGB numpy array
            img_rgb = img.convert("RGB")
            img_np = np.array(img_rgb)
            # Convert to BGR for OpenCV
            img_bgr = cv2.cvtColor(img_np, cv2.COLOR_RGB2BGR)
            valid_images.append((fname, img_bgr))
            print(f"Loaded successfully: {fname} (Shape: {img_bgr.shape})")
        except Exception as e:
            print(f"Could not load image {fname}: {e}")
    return valid_images

def apply_ken_burns(img, frame_idx, duration_frames, zoom_start=1.0, zoom_end=1.18, pan_dir=(1, -1)):
    """
    Applies Ken Burns zoom and pan effect to a single frame.
    """
    h, w = img.shape[:2]
    progress = frame_idx / float(duration_frames)
    
    # Calculate current zoom factor
    zoom = zoom_start + (zoom_end - zoom_start) * progress
    
    # Calculate crop box size
    crop_w = int(w / zoom)
    crop_h = int(h / zoom)
    
    # Calculate pan offset
    max_dx = w - crop_w
    max_dy = h - crop_h
    
    # Smooth pan using sine interpolation
    pan_progress = math.sin(progress * math.pi / 2.0)
    
    dx = int(max_dx * pan_progress * (0.5 + 0.5 * pan_dir[0]))
    dy = int(max_dy * pan_progress * (0.5 + 0.5 * pan_dir[1]))
    
    # Ensure crop dimensions are within bounds
    x1 = max(0, min(w - crop_w, dx))
    y1 = max(0, min(h - crop_h, dy))
    x2 = x1 + crop_w
    y2 = y1 + crop_h
    
    cropped = img[y1:y2, x1:x2]
    resized = cv2.resize(cropped, (WIDTH, HEIGHT), interpolation=cv2.INTER_LINEAR)
    return resized

def draw_hud(frame, frame_idx):
    """
    Draws tactical HUD elements on top of the frame.
    """
    hud = frame.copy()
    
    # 1. Subtle horizontal scanline scrolling effect
    scan_y = int((frame_idx * 4) % HEIGHT)
    cv2.line(hud, (0, scan_y), (WIDTH, scan_y), (10, 220, 10), 1)
    
    # Overlay scanning alpha tint
    overlay = np.zeros_like(frame)
    # Give a very subtle green tint to the entire frame
    overlay[:, :] = (12, 35, 12)
    # Blend with original
    cv2.addWeighted(hud, 0.90, overlay, 0.10, 0, hud)
    
    # Colors
    GREEN = (0, 230, 0)
    RED = (0, 0, 255)
    WHITE = (240, 240, 240)
    AMBER = (0, 165, 255)
    
    # Blinking REC dot
    # Blinks twice a second (every 15 frames at 30fps)
    rec_is_on = (frame_idx // 15) % 2 == 0
    if rec_is_on:
        cv2.circle(hud, (30, 35), 6, RED, -1)
    
    # REC label
    cv2.putText(hud, "REC", (45, 40), cv2.FONT_HERSHEY_SIMPLEX, 0.45, WHITE, 1, cv2.LINE_AA)
    cv2.putText(hud, "CAM-01", (45, 55), cv2.FONT_HERSHEY_SIMPLEX, 0.35, GREEN, 1, cv2.LINE_AA)
    
    # Timecode HH:MM:SS:FF
    total_seconds = frame_idx // FPS
    frames = frame_idx % FPS
    hours = total_seconds // 3600
    minutes = (total_seconds % 3600) // 60
    seconds = total_seconds % 60
    tc_str = f"{hours:02d}:{minutes:02d}:{seconds:02d}:{frames:02d}"
    cv2.putText(hud, tc_str, (WIDTH - 120, 38), cv2.FONT_HERSHEY_SIMPLEX, 0.40, AMBER, 1, cv2.LINE_AA)
    cv2.putText(hud, "LIVE STREAM", (WIDTH - 120, 52), cv2.FONT_HERSHEY_SIMPLEX, 0.30, GREEN, 1, cv2.LINE_AA)
    
    # Bounding Box / Face Target Tracker
    # Let's place a tracking target box in the middle of the frame that moves slightly with a noise-like sine wave
    t = frame_idx / 30.0
    bx = int(WIDTH // 2 + math.sin(t * 1.5) * 15)
    by = int(HEIGHT // 2.5 + math.cos(t * 2.1) * 12)
    bw, bh = 140, 160
    
    # Draw corners of a target tracking box
    x1, y1 = bx - bw // 2, by - bh // 2
    x2, y2 = bx + bw // 2, by + bh // 2
    
    # Corners
    length = 20
    # Top-left corner
    cv2.line(hud, (x1, y1), (x1 + length, y1), GREEN, 2)
    cv2.line(hud, (x1, y1), (x1, y1 + length), GREEN, 2)
    # Top-right corner
    cv2.line(hud, (x2, y1), (x2 - length, y1), GREEN, 2)
    cv2.line(hud, (x2, y1), (x2, y1 + length), GREEN, 2)
    # Bottom-left corner
    cv2.line(hud, (x1, y2), (x1 + length, y2), GREEN, 2)
    cv2.line(hud, (x1, y2), (x1, y2 - length), GREEN, 2)
    # Bottom-right corner
    cv2.line(hud, (x2, y2), (x2 - length, y2), GREEN, 2)
    cv2.line(hud, (x2, y2), (x2, y2 - length), GREEN, 2)
    
    # Target text label
    cv2.putText(hud, "TRK_LOCK: VIP_BODYGUARD", (x1, y1 - 18), cv2.FONT_HERSHEY_SIMPLEX, 0.35, GREEN, 1, cv2.LINE_AA)
    cv2.putText(hud, "SYS_CONFIRM: 99.8%", (x1, y1 - 6), cv2.FONT_HERSHEY_SIMPLEX, 0.30, GREEN, 1, cv2.LINE_AA)
    
    # Bottom HUD Status
    cv2.rectangle(hud, (15, HEIGHT - 45), (WIDTH - 15, HEIGHT - 15), (0, 0, 0), -1)
    cv2.rectangle(hud, (15, HEIGHT - 45), (WIDTH - 15, HEIGHT - 15), (40, 40, 40), 1)
    
    cv2.putText(hud, "SIGNAL: STABLE", (25, HEIGHT - 27), cv2.FONT_HERSHEY_SIMPLEX, 0.35, GREEN, 1, cv2.LINE_AA)
    cv2.putText(hud, "FPS: 60  ISO: 400", (160, HEIGHT - 27), cv2.FONT_HERSHEY_SIMPLEX, 0.35, WHITE, 1, cv2.LINE_AA)
    cv2.putText(hud, "SECURE OPERATIONAL FEED", (WIDTH - 180, HEIGHT - 27), cv2.FONT_HERSHEY_SIMPLEX, 0.32, AMBER, 1, cv2.LINE_AA)
    
    # Telemetry coordinate changes
    lat_val = 28.6139 + math.sin(t * 0.05) * 0.001
    lon_val = 77.2090 + math.cos(t * 0.05) * 0.001
    gps_str = f"GPS: {lat_val:.5f} N, {lon_val:.5f} E"
    cv2.putText(hud, gps_str, (25, HEIGHT - 52), cv2.FONT_HERSHEY_SIMPLEX, 0.30, WHITE, 1, cv2.LINE_AA)
    
    return hud

def main():
    print("Loading image assets...")
    images = load_images()
    if not images:
        print("Error: No images loaded. Exiting.")
        return
    
    num_imgs = len(images)
    print(f"Successfully loaded {num_imgs} images for compiling video.")
    
    # Calculate frames per image
    # We want a 30-second loop. With N images, each image gets 30 / N seconds.
    # We also want smooth cross-fading of about 1 second (30 frames) between them.
    sec_per_img = TOTAL_DURATION / num_imgs
    frames_per_img = int(sec_per_img * FPS)
    
    print(f"Each image will display for approx {sec_per_img:.2f} seconds ({frames_per_img} frames)")
    
    # Set up video writer. We try a couple of codecs for maximum browser compatibility.
    # 'avc1' is the preferred browser-compatible H.264 MP4 codec.
    # 'mp4v' is a fallback.
    codecs_to_try = ['avc1', 'mp4v', 'XVID', 'MJPG']
    out = None
    
    for codec in codecs_to_try:
        try:
            fourcc = cv2.VideoWriter_fourcc(*codec)
            out = cv2.VideoWriter(OUTPUT_PATH, fourcc, FPS, (WIDTH, HEIGHT))
            if out.isOpened():
                print(f"VideoWriter successfully opened with codec: '{codec}'")
                break
            else:
                print(f"Codec '{codec}' failed to open. Trying next...")
        except Exception as e:
            print(f"Exception trying codec '{codec}': {e}")
            
    if not out or not out.isOpened():
        print("Error: Could not open VideoWriter with any available codec.")
        return

    # Pan directions for each image to vary Ken Burns effect
    pan_dirs = [
        (1, 1),    # slide 1: pan right and down
        (-1, 1),   # slide 2: pan left and down
        (1, -1),   # slide 3: pan right and up
        (-1, -1),  # slide 4: pan left and up
        (1, 0),    # slide 5: pan right
        (0, -1),   # slide 6: pan up
        (0, 1),    # slide 7: pan down
        (-1, 0)    # slide 8: pan left
    ]

    try:
        print("Rendering frames...")
        for frame_idx in range(TOTAL_FRAMES):
            # Determine which two images we are blending (current and next)
            # Cycle through the images
            img_progress = (frame_idx / float(TOTAL_FRAMES)) * num_imgs
            idx1 = int(img_progress) % num_imgs
            idx2 = (idx1 + 1) % num_imgs
            
            # Local progress within the current image slot
            local_frame = frame_idx % frames_per_img
            
            # Ken Burns setup for image 1 and image 2
            img1_bgr = images[idx1][1]
            img2_bgr = images[idx2][1]
            
            pan1 = pan_dirs[idx1 % len(pan_dirs)]
            pan2 = pan_dirs[idx2 % len(pan_dirs)]
            
            frame1 = apply_ken_burns(img1_bgr, local_frame, frames_per_img, zoom_start=1.0, zoom_end=1.15, pan_dir=pan1)
            
            # If we are in the transition zone (last 30 frames of the current image slot), we cross-fade
            transition_duration = 30  # 1 second
            transition_start = frames_per_img - transition_duration
            
            if local_frame >= transition_start:
                # Calculate crossfade weight (alpha goes from 0.0 to 1.0)
                alpha = (local_frame - transition_start) / float(transition_duration)
                # Next image starts from frame 0 of its zoom/pan
                frame2 = apply_ken_burns(img2_bgr, local_frame - transition_start, frames_per_img, zoom_start=1.0, zoom_end=1.15, pan_dir=pan2)
                # Blend the frames
                blended = cv2.addWeighted(frame1, 1.0 - alpha, frame2, alpha, 0)
            else:
                blended = frame1
                
            # Draw overlay HUD
            hud_frame = draw_hud(blended, frame_idx)
            
            # Write to output
            out.write(hud_frame)
            
            if (frame_idx + 1) % 100 == 0:
                print(f"Rendered {frame_idx + 1}/{TOTAL_FRAMES} frames...")
                
        print("Rendering complete!")
    finally:
        out.release()
        print(f"Saved video to: {OUTPUT_PATH}")

if __name__ == "__main__":
    main()
