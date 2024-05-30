import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Signin = () => {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post("http://localhost:3001/login", { email, password })
            .then(result => {
                console.log(result)
                if (result.data === "success") {
                    navigate('/')
                }

            })
            .catch(err => {
                console.log(err);
            })
    }


    return (
        <div className='h-screen flex flex-col justify-center items-center'>
            <label htmlFor="signup-form" className='mb-4 text-lg font-semibold'>
                Sign in to Start Cross-selling
            </label>
            <form id="signup-form" className='grid' onSubmit={handleSubmit}>
                <label htmlFor="email" className='sr-only'>Email</label>
                <input
                    id="email"
                    name="email"
                    className='border-2 border-gray-200 p-2 rounded-lg my-3'
                    type="email"
                    placeholder='Enter your valid Email'
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
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <button
                    type="submit"
                    className='border-2 border-green-500 rounded-lg py-2 px-6 bg-green-500 text-white hover:bg-green-200 hover:text-green-500 w-1/2 self-center'>
                    Sign in
                </button>
            </form>
            <div>
                <Link to='/register'>Register</Link>
            </div>
        </div>
    )
}

export default Signin
