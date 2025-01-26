import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import TelInputSS from './TelInputSS';
import WhiteInput from './WhiteInput';

const ForgetPassword = ({ handleCloseForgetForm }) => {

  const style_forget = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '500px',
    height: '660px',
    bgcolor: 'background.paper',
    border: '0px solid #000',
    borderRadius: '2px',
    boxShadow: 24,
    overflow: 'hidden',
    background: '#0b1c1f',
    backgroundSize: 'cover',
    display: 'flex',
    gap: '4px',
    padding: '16px 24px',
    flexDirection: 'column',
  };

  const [mobile, setMobile] = useState('');
  const [isOTPSent, setIsOTPSent] = useState(false);

  return (
    <div style={style_forget} className='ease-in-out'>
      <button className='text-xl absolute translate(-50%, -50%) right-4 top-2' onClick={handleCloseForgetForm}>
        <FontAwesomeIcon icon={faXmark} className='text-white text-sm' />
      </button>
      <img src='./images/logo.png' className='height-[46px] w-[200px] mx-auto' />
      <div className={`w-full rounded-md text-center text-[#155724] p-[1px] text-[13px] bg-[#d4edda] ${isOTPSent ? 'visible' : 'invisible'}`}>
        OTP sent success !
      </div>
      <TelInputSS
        id="tel-input"
        name="tel-input"
        status="secondary"
        inputValue={mobile}
        textAlign={'left'}
        fontSize={"16px"}
        fontWeight={'500'}
        onInputChange={(e) => setMobile(e.target.value)}
        className={'w-2/3 mt-[10px] mb-[13px]'}
      />
      {isOTPSent ? <></> : <button className='get-otp-btn duration-300 w-full p-[11px] text-[15px] bg-[#f36c20] text-white' onClick={() => setIsOTPSent(!isOTPSent)}>GET OTP</button>}
      {isOTPSent ?
        <>
          <WhiteInput
            status={"secondary"}
            fontSize={"16px"}
            placeholder={"OTP"}
            fontWeight={'500'}
            textAlign={'left'}
            className={'pl-[10px] mt-[14px]'}
          />
          <p className="text-[#f00] text-[13px] mt-[24px]">(Must be contains alphanumeric and more than 6 letters)</p>
          <WhiteInput
            type={"password"}
            status={"secondary"}
            fontSize={"16px"}
            placeholder={"Password"}
            fontWeight={'500'}
            textAlign={'left'}
            className={'pl-[10px] mt-[10px]'}
          />
          <WhiteInput
            type={"password"}
            status={"secondary"}
            fontSize={"16px"}
            placeholder={"Confirm Password"}
            fontWeight={'500'}
            textAlign={'left'}
            className={'pl-[10px] mt-[28px]'}
          />
          <button className='get-otp-btn duration-300 w-full p-[11px] mt-[16px] text-[15px] bg-[#f36c20] text-white' onClick={() => setIsOTPSent(!isOTPSent)}>UPDATE PASSWORD</button>
        </>
        : <></>}
    </div>
  );
};

export default ForgetPassword;