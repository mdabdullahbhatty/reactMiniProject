import React, { useContext, useRef, useState } from 'react'
import { Link } from 'react-router'
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, GithubAuthProvider  } from "firebase/auth";
import { app } from '../../firebase/firebase.config';
import { userContext } from '../../contexts/ProfileContext';




const LoginM = () => {
    const {saveUserProfile} = useContext(userContext);
    const useForm = useRef('')
    const [user, setUser] = useState('')
    const [errorMassage, setErrorMessage] = useState('')
    const [loginSucces, setLoginSucces] = useState('')
    console.log(user);
    
    const githubProvider = new GithubAuthProvider();
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth(app);

    const signInGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const userInfo = result.user;
            setUser(userInfo);
            saveUserProfile({
                name: userInfo.displayName,
                email: userInfo.email,
                userPhoto: userInfo.photoURL
            })
        })
    }

    const signInGithub = () => {
        signInWithPopup(auth, githubProvider)
        .then(result => {
            const user = result.user;
            saveUserProfile({
                name: user.displayName,
                email: user.email,
                userPhoto: user.photoURL
            })
            
        }) 
    }

    const loginHandaler = (e) => {
        e.preventDefault()
        const form = useForm.current;
        setErrorMessage('')
        setLoginSucces('')

        const email = e.target.email.value;
        const password = e.target.password.value;

        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user;

            alert('Are you sure you want to Login? Press OK.')
            setLoginSucces('Login Successful')
            
            form.reset();
        }).catch(error => {
           setErrorMessage(error.message);
        })
        
        
        
    }

    const [showPassword, setPassword] = useState(false)
    return (
        <div className='flex justify-center items-center h-[100vh]' style={{ backgroundImage: 'url(./src/assets/login-img.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>

           

            <div className='bg-white p-8 text-green-800 text-center max-w-sm  rounded-sm'>

               
                <form ref={useForm} onSubmit={loginHandaler} className=''>

                    <h4 className='text-2xl font-bold underline underline-offset-4'>Login</h4>

                    <input
                        placeholder='email'
                        className='w-full border px-3 py-2 focus:ring-2 focus:ring-green-700 rounded-md mt-5'
                        type="email"
                        name="email"
                        id=""

                    />

                    <div className='flex items-center relative mt-3'>
                        <input
                            placeholder='password'
                            className='w-full border px-3 py-2 focus:ring-2 focus:ring-green-700 rounded-md'
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            id=""

                        />

                        <FaEye onClick={() => setPassword(!showPassword)} className={`${showPassword ? 'hidden' : 'absolute right-3'}`} />
                        <FaEyeSlash onClick={() => setPassword(!showPassword)} className={`${showPassword ? 'absolute right-3' : 'hidden'}`} />

                    </div>

                    <p className='text-right cursor-pointer hover:font-semibold underline'>Forgate Password</p>

                    <button
                        type="submit"
                        className='w-full bg-green-700 py-2 rounded hover:bg-green-800 cursor-pointer text-white font-semibold mt-3'
                    >
                        Login
                    </button>
                    {
                        errorMassage && <p> {errorMassage} </p>
                    }
                    {
                        loginSucces && <p className='animate-bounce mt-2'> {loginSucces} </p>
                    }
                </form>

                <div className='space-y-3'>
                    <button
                        className='w-full bg-red-700 py-2 rounded hover:text-gray-400 cursor-pointer text-white font-semibold mt-3'
                        onClick={signInGoogle}


                    >
                        Login with Google
                    </button>

                    <button
                        className='w-full bg-black py-2 rounded hover:text-gray-400 cursor-pointer text-white font-semibold'
                        onClick={signInGithub}

                    >
                        Login with Github
                    </button>
                </div>

                <p
                    className='text-green-800'
                > Don't have an account?
                    <Link to={'/register'}
                        className='hover:underline ml-1 font-semibold'
                    > Register Here
                    </Link></p>

            </div>
        </div>
    )
}

export default LoginM