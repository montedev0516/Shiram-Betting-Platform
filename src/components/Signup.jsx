import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';
import WhiteInput from './WhiteInput';
import TelInputSS from './TelInputSS';
import '../assets/Pages/effect.scss';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [refernalCode, setRefernalCode] = useState('');
  const auth = getAuth();
  const navigate = useNavigate();

  const handleMobileChange = (newValue) => {
    setMobile(newValue);
  }

  const handleSignup = async (e) => {
    console.log("Sign Up");
    e.preventDefault();
  }

  return (

    <div className='bg-[#0078b1] h-[100vh] w-full flex justify-center items-center'>
      <div className='w-[430px] h-[90%] border-gray-200 border-2 rounded-lg p-6 flex flex-col justify-center'>
        <img src="./images/logo.png" className='bg-contain mx-auto mt-2 mb-8 w-[200px]' />

        <TelInputSS
          id="tel-input"
          name="tel-input"
          inputValue={mobile}
          onInputChange={(e) => setMobile(e.target.value)}
          className={'mt-4 mb-8'}
        />

        <WhiteInput
          id={"password"}
          type={"password"}
          value={password}
          fontSize={'12px'}
          onChange={(e) => setPassword(e.target.value)}
          placeholder={'Choose your password'}
          className={'pb-4 font-bold'}
        />
        <p className='text-[#f00] text-[12px] mt-[4px] mb-[9px]'>(Must be contained alphanumeric and more than 6 letters)</p>

        <WhiteInput
          id={"refernalCode"}
          type={"text"}
          value={refernalCode}
          fontSize={'12px'}
          onChange={(e) => setRefernalCode(e.target.value)}
          placeholder={'Referral code (optional)'}
          className={'pb-4 pt-8 font-bold'}
        />

        <p className='text-white text-[12px] font-bold mt-[16px]'>By continuing you will receive a one-time verification code to your phone number by SMS.</p>
        <button className='mx-auto mt-[20px] bg-[#f36c20] w-[92px] h-[44px] text-[16px] text-white rounded-[4px]'>GET OTP</button>
        <div className='mx-auto mt-[18px] w-2/3 flex gap-4'>
          <div className="text-white py-1 underline font-[500]"><Link to="/home">Already have account?</Link></div>
          <div className="text-white py-1 underline font-[500]"><Link to="/login">Log In</Link></div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
