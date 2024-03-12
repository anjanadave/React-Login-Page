import React, { useState } from 'react';

const Login = ({onLoginSuccess}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        onLoginSuccess();
      };
  return (
    <>
      <div className="w-[40vw] h-[60vh] bg-gray-600 rounded-lg mt-[20vh] ml-[30vw]">
        <h1 className='text-center text-white text-5xl pt-10'>Login</h1>
        <input type="email" placeholder='Write Email here...' className='h-[7vh] w-[30vw] rounded-lg ml-[5vw] mt-[5vh] pl-5' value={email} onChange={(e) => setEmail(e.target.value)}/><br></br>
        <input type='password' placeholder='password' className='h-[7vh] w-[30vw] rounded-lg ml-[5vw] mt-[5vh] pl-5'value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button type='button' className='h-[7vh] w-[30vw] rounded-lg ml-[5vw] mt-[5vh] pl-5 bg-gray-800 text-white text-xl' onClick={handleLogin}>Login</button>
      </div>
    </>
  )
}

export default Login;
