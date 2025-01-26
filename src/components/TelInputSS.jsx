import React, { useState } from 'react';
import WhiteInput from './WhiteInput';


const countries = [
  { name: "India", code: "+91", flag: "https://flagcdn.com/in.svg" },
  { name: "United States", code: "+1", flag: "https://flagcdn.com/us.svg" },
  { name: "United Kingdom", code: "+44", flag: "https://flagcdn.com/gb.svg" },
  // Add more countries as needed
];

const CountrySelector = ({ selectedCountry, onSelect, status }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (country) => {
    onSelect(country);
    setIsOpen(false);
  };

  return (
    <div className={`country-select-container top-[38%] ${status == 'secondary' ? 'left-[15%]' : 'left-[10%]'}`}>
      <div className="country-selector">
        <div className="selector-header" onClick={() => setIsOpen(!isOpen)}>
          <img src={selectedCountry.flag} alt={selectedCountry.name} className="flag" />
          <span className='text-white'>{selectedCountry.code}</span> {/* Only show the code */}
        </div>
        {isOpen && (
          <div className="country-list" style={{zIndex: '100'}}>
            {countries.map((country, index) => (
              <div
                key={index}
                className="country-option"
                onClick={() => handleSelect(country)}
              >
                <img src={country.flag} alt={country.name} className="flag" />
                <span>{country.name} ({country.code})</span> {/* Show flag, name, and code */}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const TelInputSS = ({ inputValue, onInputChange, className, fontSize, textAlign, fontWeight, status }) => {

  const [selectedCountry, setSelectedCountry] = useState({
    name: "India",
    code: "+91",
    flag: "https://flagcdn.com/in.svg"
  });

  const [phoneNumber, setPhoneNumber] = useState('');
  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
  };

  return (
    <div className={`relative ${className} z-10`}>
      <WhiteInput
        id={"mobile_no"}
        type={"text"}
        status={status || 'primary'}
        value={inputValue}
        textAlign={textAlign || "center"}
        fontWeight={fontWeight || '900'}
        fontSize={fontSize || '12px'}
        onChange={onInputChange}
        placeholder={'Mobile no'}
        className={`font-bold ${status == 'secondary' ? 'pb-2 pl-[35%]' : 'pb-4 pl-[15%]' }`}
      />
      <CountrySelector selectedCountry={selectedCountry} onSelect={handleCountrySelect} status={status} />
    </div>
  );
};

export default TelInputSS;