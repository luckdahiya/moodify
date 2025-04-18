import React, { useState, useRef, useEffect } from 'react';
import './CustomDropdown.css';

export default function CustomDropdown({ options, value, onChange, placeholder }) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (opt) => {
    onChange(opt);
    setOpen(false);
  };

  return (
    <div className="cd-wrapper" ref={wrapperRef}>
      <div className="cd-control" onClick={() => setOpen((o) => !o)}>
        {value || placeholder}
        <span className={`cd-arrow ${open ? 'open' : ''}`}>▾</span>
      </div>
      {open && (
        <div className="cd-options">
          {options.map((opt) => (
            <div
              key={opt}
              className={`cd-option ${opt === value ? 'selected' : ''}`}
              onClick={() => handleSelect(opt)}
            >
              {opt.charAt(0).toUpperCase() + opt.slice(1)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
