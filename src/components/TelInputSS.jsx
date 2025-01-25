import React, { useState } from 'react';
import WhiteInput from './WhiteInput';


const countries = [
  { name: "India", code: "+91", flag: "https://flagcdn.com/in.svg" },
  { name: "United States", code: "+1", flag: "https://flagcdn.com/us.svg" },
  { name: "United Kingdom", code: "+44", flag: "https://flagcdn.com/gb.svg" },
  // Add more countries as needed
];

const CountrySelector = ({ selectedCountry, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (country) => {
    onSelect(country);
    setIsOpen(false);
  };

  return (
    <div className="country-selector">
      <div className="selector-header" onClick={() => setIsOpen(!isOpen)}>
        <img src={selectedCountry.flag} alt={selectedCountry.name} className="flag" />
        <span>{selectedCountry.code}</span> {/* Only show the code */}
      </div>
      {isOpen && (
        <div className="country-list">
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
  );
};
const TelInputSS = ({ id, name, inputValue, onInputChange, className }) => {

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
    <div className='relative'>
      <WhiteInput
        id={"mobile_no"}
        type={"text"}
        value={inputValue}
        fontSize={'12px'}
        onChange={onInputChange}
        placeholder={'Mobile no'}
        className={'pb-4 pt-8 mb-8 font-bold'}
      />
      <CountrySelector selectedCountry={selectedCountry} onSelect={handleCountrySelect} />
    </div>
  );
};

export default TelInputSS;