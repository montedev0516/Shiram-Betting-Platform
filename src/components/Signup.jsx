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
  //   e.preventDefault(); // Prevent default form submission behavior

  //   if (!name || !email || !mobile || !password) {
  //     Swal.fire({
  //       icon: 'error',
  //       title: 'Error',
  //       text: 'Please enter all fields: Name, Email, Mobile, and Password.',
  //     });
  //     return; // Exit function if any field is empty
  //   }

  //   try {
  //     const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  //     const user = userCredential.user;

  //     // Successful signup, redirect and display message
  //     navigate('/', { replace: true }); // Redirect to home page
  //     Swal.fire({
  //       icon: 'success',
  //       title: 'Signup Successful!',
  //       text: `Welcome, ${name}!`, // Use name for personalized greeting
  //     });

  //     // Optionally clear fields after successful signup
  //     setName('');
  //     setEmail('');
  //     setMobile('');
  //     setPassword('');
  //   } catch (error) {
  //     const errorMessage = error.message;
  //     console.error('Signup error:', errorMessage);
  //     Swal.fire({
  //       icon: 'error',
  //       title: 'Signup Error',
  //       text: errorMessage, // Display actual error message (consider sanitization)
  //     });
  //   }
  // };

  const handleSignup = async (e) => {
    console.log("Sign Up");
    e.preventDefault();
  }

  return (

    // <div className='h-screen w-full flex items-center justify-center bg-[#17a2b8]'>
    //   <form onSubmit={handleSignup} className="w-full max-w-md space-y-4">
    //     <div className="mb-4">
    //       <label style={{ // Inline style to set focus ring color
    //         outlineColor: '#4F46E5', // Replace with your desired blue color
    //       }} className=" text-gray-700 text-sm font-bold mb-2 focus-within:ring-indigo-600 flex items-center gap-2" to="name">
    //         Name
    //       </label>
    //       <input
    //         className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-blue-500 focus:border-blue-500"
    //         id="name"
    //         type="text"
    //         placeholder="Enter your name"
    //         value={name}
    //         onChange={(e) => setName(e.target.value)} // Update name state
    //       />

    //       <div className="mb-4 mt-4">
    //         <label className="flex items-center gap-2 text-gray-700 text-sm font-bold mb-2" to="mobile">
    //           Mobile Number
    //         </label>
    //         <input
    //           className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-blue-500 focus:border-blue-500"
    //           id="number"
    //           type="number"
    //           placeholder="Enter your mobile"
    //           value={mobile}
    //           onChange={(e) => setMobile(e.target.value)} // Update email state
    //         />
    //         <div className="mb-4"></div>
    //         <label className="flex items-center gap-2 text-gray-700 text-sm font-bold mb-2" to="email">
    //           Email
    //         </label>
    //         <input
    //           className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-blue-500 focus:border-blue-500"
    //           id="email"
    //           type="email"
    //           placeholder="Enter your email"
    //           value={email}
    //           onChange={(e) => setEmail(e.target.value)} // Update email state
    //         />
    //       </div>
    //       <div className="mb-6">
    //         <label className="flex items-center gap-2 text-gray-700 text-sm font-bold mb-2" to="password">
    //           Password
    //         </label>
    //         <input
    //           className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:ring-blue-500 focus:border-blue-500"
    //           id="password"
    //           type="password"
    //           placeholder="Enter your password"
    //           value={password}
    //           onChange={(e) => setPassword(e.target.value)} // Update password state
    //         />
    //       </div>
    //       <div className="flex items-center justify-center gap-2">
    //         <button
    //           type="submit"
    //           className="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    //         >
    //           Signup
    //         </button>
    //       </div>
    //     </div>
    //   </form>
    // </div>

    <div className='bg-[#0078b1] h-[100vh] w-full flex justify-center items-center'>
      <div className='w-[430px] h-[90%] border-gray-200 border-2 rounded-lg p-6 flex flex-col justify-center'>
        <img src="./images/logo.png" className='bg-contain mx-auto w-[200px]' />

        <TelInputSS
          id="tel-input"
          name="tel-input"
          inputValue={mobile}
          onInputChange={(e) => setMobile(e.target.value)}
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
        <p className='text-[#f00] text-[12px] mt-[4px]'>(Must be contained alphanumeric and more than 6 letters)</p>

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
        <button className='mx-auto mt-[32px] bg-[#f36c20] w-[92px] h-[44px] text-[16px] text-white rounded-[4px]'>GET OTP</button>
        <div className='mx-auto mt-[24px] w-2/3 flex gap-4'>
          <div className="text-white py-1 underline font-[500]"><Link to="/home">Already have account?</Link></div>
          <div className="text-white py-1 underline font-[500]"><Link to="/login">Log In</Link></div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
