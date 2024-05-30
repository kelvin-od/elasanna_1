import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    
    const [name, setName] = useState()
    const [company, setCompany] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        

        axios.post('http://localhost:3001/register', { name, company, email, password })
            .then(result => {
                navigate('/login');
            })
            .catch(err => {
                console.log(err);
            });
    };

    return (
        <div className='h-screen flex flex-col justify-center items-center'>
            <label htmlFor="signup-form" className='mb-4 text-lg font-semibold'>
                Register your Account to Start Cross-selling
            </label>
            <form id="signup-form" className='grid' onSubmit={handleSubmit}>
                <div className='flex'>
                    <label htmlFor="name" className='sr-only'>First Name</label>
                    <input
                        id="name"
                        name="name"
                        className='border-2 border-gray-200 p-2 rounded-lg my-3 mr-2'
                        type='text'
                        placeholder='First Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <label htmlFor="company" className='sr-only'>Company Name</label>
                <input
                    id="company"
                    name="company"
                    className='border-2 border-gray-200 p-2 rounded-lg my-3'
                    type="text"
                    placeholder='Enter your Agribusiness/Company Name'
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    required
                />
                <label htmlFor="email" className='sr-only'>Email</label>
                <input
                    id="email"
                    name="email"
                    className='border-2 border-gray-200 p-2 rounded-lg my-3'
                    type="email"
                    placeholder='Enter your valid Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <label htmlFor="password" className='sr-only'>Password</label>
                <input
                    id="password"
                    name="password"
                    className='border-2 border-gray-200 p-2 rounded-lg my-3'
                    type="password"
                    placeholder='Enter a strong Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <label htmlFor="confirm-password" className='sr-only'>Confirm Password</label>
                <input
                    id="confirm-password"
                    name="confirmPassword"
                    className='border-2 border-gray-200 p-2 rounded-lg my-3'
                    type="password"
                    placeholder='Confirm Password'
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
                <button
                    type="submit"
                    className='border-2 border-green-500 rounded-lg py-2 px-6 bg-green-500 text-white hover:bg-green-200 hover:text-green-500 self-center'>
                    Register
                </button>
            </form>
            <Link to="/login" className='mt-4 text-blue-500 hover:underline'>Sign in</Link>
        </div>
    );
};

export default Signup;
