import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const Signin = ({ handleLoginClose, handleClickForgetPassword }) => {

  const style_login = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '52vh',
    height: '99vh',
    bgcolor: 'background.paper',
    border: '0px solid #000',
    borderRadius: '10px',
    boxShadow: 24,
    overflow: 'hidden',
    backgroundImage: 'url("./images/login-back-1.jpg")',
    backgroundSize: 'cover',
    display: 'flex',
    gap: '4px',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div style={style_login} className='ease-in-out'>
      <button className='black text-xl absolute translate(-50%, -50) right-5 top-5' onClick={handleLoginClose}>
        <FontAwesomeIcon icon={faXmark} />
      </button>
      <img src='./images/logo.png' className='height-[50px] w-[215px] mb-4' />
      <input
        onChange={(e) => setEmailText(e.target.value)}
        type="text"
        id="email"
        name="email"
        placeholder="Username"
        className="py-2 pl-3 border rounded-sm text-xs focus-within:ring-indigo-600 lg:w-7/12 w-3/4"
        style={{ // Inline style to set focus ring color
          outlineColor: '#4F46E5',
        }}
      />
      <input
        onChange={(e) => setPasswordText(e.target.value)}
        type="text"
        id="email"
        name="email"
        placeholder="Password"
        className="py-2 pl-3 border rounded-sm text-xs focus-within:ring-indigo-600 lg:w-7/12 w-3/4"
        style={{ // Inline style to set focus ring color
          outlineColor: '#4F46E5',
        }}
      />
      <button className='py-2 pl-3 rounded-sm text-[14px] text-white bg-[#0078b1] focus-within:ring-indigo-600 lg:w-7/12 w-3/4 mt-6'>LOGIN</button>
      <button className='py-2 pl-3 rounded-sm text-[14px] text-white bg-[#0078b1] focus-within:ring-indigo-600 lg:w-7/12 w-3/4 mt-[3px]'>LOGIN WITH DEMO ID</button>
      <button className='py-2 pl-3 rounded-sm text-[14px] text-black bg-[#0078b1] focus-within:ring-indigo-600 lg:w-7/12 w-3/4 mt-[3px] underline' onClick={handleClickForgetPassword}>Forget Password?</button>
    </div>
  );
};

export default Signin;