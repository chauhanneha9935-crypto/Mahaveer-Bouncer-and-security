import React, { useState } from 'react';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '', companyName: '', mobileNumber: '', email: '',
    serviceRequired: '', numberOfStaffRequired: '', city: '', message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Inquiry Data Submitted Safely: ", formData);
    alert("Thank you! Your strategic deployment inquiry has been sent safely.");
    
    // Optional: Reset form fields after successful click handling
    setFormData({
      name: '', companyName: '', mobileNumber: '', email: '',
      serviceRequired: '', numberOfStaffRequired: '', city: '', message: ''
    });
  };

  return (
    <section id="booking" className="py-24 bg-[#0a0a0a] text-neutral-100 relative overflow-hidden">
      {/* Background Matrix Grid Layout Accent Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#141414_1px,transparent_1px),linear-gradient(to_bottom,#141414_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30 pointer-events-none"></div>
      
      {/* Soft Luxury Ambient Gold Lighting Blips */}
      <div className="absolute top-1/4 left-[-20%] w-[35rem] h-[35rem] bg-amber-500/5 rounded-full blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-[-20%] w-[35rem] h-[35rem] bg-amber-600/5 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-3xl mx-auto px-4 relative z-10">
        {/* Core Form Base Frame */}
        <div className="bg-[#121212] border border-zinc-900 rounded-3xl p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all hover:border-amber-500/10">
          
          <div className="text-center mb-10">
            <span className="text-amber-500 text-xs font-black tracking-widest uppercase bg-amber-500/10 px-4 py-1.5 rounded border border-amber-500/20 shadow-sm">
              Deployment Request
            </span>
            <h2 className="text-3xl font-black text-white uppercase mt-4 tracking-tight">
              Inquiry & Booking
            </h2>
            <p className="text-zinc-400 text-sm mt-2 font-semibold">
              Fill the structural requirement form below to receive immediate deployment rates.
            </p>
            <div className="h-0.5 w-12 bg-amber-500 mx-auto mt-4 rounded-full"></div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Name Input */}
              <div className="text-left">
                <label className="block text-xs font-black text-zinc-300 uppercase tracking-wider mb-2">Name *</label>
                <input 
                  required 
                  type="text" 
                  value={formData.name}
                  placeholder="Enter full name"
                  className="w-full p-3.5 bg-black border border-zinc-800 rounded-xl text-white font-medium placeholder-zinc-700 focus:outline-none focus:border-amber-500 transition-colors" 
                  onChange={e => setFormData({...formData, name: e.target.value})} 
                />
              </div>
              
              {/* Company Name Input */}
              <div className="text-left">
                <label className="block text-xs font-black text-zinc-300 uppercase tracking-wider mb-2">Company Name</label>
                <input 
                  type="text" 
                  value={formData.companyName}
                  placeholder="Enter business entity"
                  className="w-full p-3.5 bg-black border border-zinc-800 rounded-xl text-white font-medium placeholder-zinc-700 focus:outline-none focus:border-amber-500 transition-colors" 
                  onChange={e => setFormData({...formData, companyName: e.target.value})} 
                />
              </div>
              
              {/* Mobile Number Input */}
              <div className="text-left">
                <label className="block text-xs font-black text-zinc-300 uppercase tracking-wider mb-2">Mobile Number *</label>
                <input 
                  required 
                  type="tel" 
                  value={formData.mobileNumber}
                  placeholder="Enter 10-digit number"
                  className="w-full p-3.5 bg-black border border-zinc-800 rounded-xl text-white font-medium placeholder-zinc-700 focus:outline-none focus:border-amber-500 transition-colors" 
                  onChange={e => setFormData({...formData, mobileNumber: e.target.value})} 
                />
              </div>
              
              {/* Email Input */}
              <div className="text-left">
                <label className="block text-xs font-black text-zinc-300 uppercase tracking-wider mb-2">Email Address *</label>
                <input 
                  required 
                  type="email" 
                  value={formData.email}
                  placeholder="name@company.com"
                  className="w-full p-3.5 bg-black border border-zinc-800 rounded-xl text-white font-medium placeholder-zinc-700 focus:outline-none focus:border-amber-500 transition-colors" 
                  onChange={e => setFormData({...formData, email: e.target.value})} 
                />
              </div>
              
              {/* Service Required Dropdown Selector */}
              <div className="text-left">
                <label className="block text-xs font-black text-zinc-300 uppercase tracking-wider mb-2">Service Required *</label>
                <select 
                  required 
                  value={formData.serviceRequired}
                  className="w-full p-3.5 bg-black border border-zinc-800 rounded-xl text-white font-medium focus:outline-none focus:border-amber-500 transition-colors cursor-pointer appearance-none"
                  style={{ backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' stroke='%23f59e0b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M6 9l6 6 6-6'/></svg>")`, backgroundPosition: 'right 0.75rem center', backgroundSize: '1.25rem', backgroundRepeat: 'no-repeat' }}
                  onChange={e => setFormData({...formData, serviceRequired: e.target.value})}
                >
                  <option value="" className="text-zinc-700">Select Service Unit</option>
                  <option value="Guard" className="text-white bg-neutral-900">Security Guard Services</option>
                  <option value="Bouncer" className="text-white bg-neutral-900">Bouncer Services</option>
                  <option value="VIP" className="text-white bg-neutral-900">Personal Protection (VIP)</option>
                  <option value="Event" className="text-white bg-neutral-900">Event Security Plans</option>
                </select>
              </div>
              
              {/* Number of Staff Input */}
              <div className="text-left">
                <label className="block text-xs font-black text-zinc-300 uppercase tracking-wider mb-2">Number of Staff Required</label>
                <input 
                  type="number" 
                  value={formData.numberOfStaffRequired}
                  placeholder="e.g. 5"
                  min="1"
                  className="w-full p-3.5 bg-black border border-zinc-800 rounded-xl text-white font-medium placeholder-zinc-700 focus:outline-none focus:border-amber-500 transition-colors" 
                  onChange={e => setFormData({...formData, numberOfStaffRequired: e.target.value})} 
                />
              </div>

            </div>

            {/* City Input */}
            <div className="text-left">
              <label className="block text-xs font-black text-zinc-300 uppercase tracking-wider mb-2">Target Deployment City *</label>
              <input 
                required 
                type="text" 
                value={formData.city}
                placeholder="e.g. New Delhi, Mumbai"
                className="w-full p-3.5 bg-black border border-zinc-800 rounded-xl text-white font-medium placeholder-zinc-700 focus:outline-none focus:border-amber-500 transition-colors" 
                onChange={e => setFormData({...formData, city: e.target.value})} 
              />
            </div>

            {/* Message Area */}
            <div className="text-left">
              <label className="block text-xs font-black text-zinc-300 uppercase tracking-wider mb-2">Operational Message Details</label>
              <textarea 
                rows="4" 
                value={formData.message}
                placeholder="Describe your special deployment perimeter or schedules..."
                className="w-full p-3.5 bg-black border border-zinc-800 rounded-xl text-white font-medium placeholder-zinc-700 focus:outline-none focus:border-amber-500 transition-colors resize-none" 
                onChange={e => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>

            {/* Clickable Luxury Submit Action Button Trigger */}
            <button 
              type="submit" 
              className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-black py-4 rounded-xl shadow-lg shadow-amber-500/10 transition-all duration-300 tracking-wider text-sm uppercase transform active:scale-[0.99] cursor-pointer"
            >
              Submit Deployment Request ➔
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}