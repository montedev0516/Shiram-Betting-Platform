import React, { useState } from 'react';

const WhiteInput = ({ id, type, value, onChange, placeholder, fontSize, className, textAlign, fontWeight, status }) => {
  const [isFocused, setIsFocused] = useState(false);

  // Determine the border color based on focus
  const borderColor = isFocused ? '#f36c20' : '#ddd'; // Change to your desired color
  const textColor = isFocused ? '#fff' : value ? (status == 'primary' ? '#000' : '#fff') : '#fff'; // Black text if not focused and has value, white otherwise
  const boxShadowCustom = isFocused ? '0px 1px #00000055': '';

  return (
    <div style={{ position: 'relative', width: '100%', zIndex: 'unset' }}>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onFocus={() => setIsFocused(true)} // Set focus state to true
        onBlur={() => setIsFocused(false)} // Set focus state to false
        style={{
          fontSize: fontSize || '14px', // Set desired font size
          backgroundColor: 'inherit',
          outline: 'none',
          textAlign: textAlign || 'center',
          width: '100%',
          fontWeight: fontWeight || '900',
          boxShadow: boxShadowCustom,
          borderBottom: `1px solid ${borderColor}`, // Change border color based on focus
          color: textColor, // Change text color based on focus and value
        }}
        className={`duration-300 ${className}`} // Optional: Add a class for additional styling
      />
      <style jsx>{`
        input::placeholder {
          color: ${'#ddd'}; /* Set the placeholder color to match text color */
          opacity: 1; /* Ensure the placeholder is fully opaque */
        }
      `}</style>
    </div>
  );
};

export default WhiteInput;