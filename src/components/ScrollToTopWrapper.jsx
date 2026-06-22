import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTopWrapper manages window positioning context.
 * It resets the browser viewport to coordinate (0,0) instantly
 * whenever a user executes a route transition across pages.
 */
export default function ScrollToTopWrapper({ children }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children;
}