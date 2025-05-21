import React, { useContext, useRef, useState } from 'react'
import { Link } from 'react-router'
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { GoogleAuthProvider, getAuth, signInWithPopup, updateProfile, GithubAuthProvider, signOut } from "firebase/auth";
import { app } from '../../firebase/firebase.config';
import { userContext } from '../../contexts/ProfileContext';


const RegisterM = () => {

    const { registerUser, saveUserProfile } = useContext(userContext);
    const [sucsessMessage, setSucsessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isTermsAccepted, setIsTermsAccepted] = useState(false)
    const formRef = useRef(null);
    const [user, setUser] = useState(null);
    const regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

    const auth = getAuth(app)
    const provider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider();

    const signINgoogle = () => {

        setSucsessMessage('');
        setErrorMessage('');

        signInWithPopup(auth, provider)
            .then(result => {
                const userInfo = result.user;

                saveUserProfile({
                    name: userInfo.displayName,
                    email: userInfo.email,
                    userPhoto: userInfo.photoURL
                })

                setSucsessMessage('Register Sucsessfully...')
            }).catch(error => {
                setErrorMessage('Sorry, Mr. I have no user', error)
            })
    }

    const githubHandler = () => {

        setSucsessMessage('');
        setErrorMessage('');

        signInWithPopup(auth, gitProvider)
            .then(gitresponse => {
                const gitInfo = gitresponse.user;
                setUser(gitInfo)


                saveUserProfile({
                    name: gitInfo.displayName,
                    email: gitInfo.email,
                    userPhoto: gitInfo.photoURL,

                })
                setSucsessMessage('Register Sucsessfully...')
            }).catch(error => {
                setErrorMessage('Sorry, No information was found by github.')
            })
    }

    const signUpHandaler = (e) => {
        
        e.preventDefault();

        const form = formRef.current;
        const fulName = e.target.fullName.value;
        const moNumber = e.target.Number.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const conPass = e.target.Conpassword.value;

        setSucsessMessage(null)
        setErrorMessage(null)

        if (password !== conPass) {
            alert('Sorry, Password do not Match');
            return;
        }
        else if(!regularExpression.test(conPass)){
            setErrorMessage('Password Must be at least 6 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.')
            return;
        }
        if(!isTermsAccepted){
            setErrorMessage('Please accept the Terms & Condition');
            return;
        }

        setSucsessMessage('Prosesing...')

        registerUser(email, password)
            .then(userCredential => {
                const userInformation = userCredential.user;
                updateProfile(userInformation, {
                    displayName: fulName

                }).then(() => {
                    setUser(userInformation)
                }).then(() => {
                    saveUserProfile({
                        name: userInformation.displayName,
                        email: userInformation.email,

                    })
                })
                
                setSucsessMessage('Register Sucsessfully...')
                form.reset();
            }).catch(error => {
                setSucsessMessage('')
                setErrorMessage('Sorry, Mr. I have no user', error)

            });


    }

    const signOutGoogle = () => {
        signOut(auth)
            .then(result => {
                setUser(result)
            }).catch(error => console.log('error'))
    }

    const [showPass, setShowPass] = useState(false)
    const [confirmPass, setConfirmPass] = useState(false)

    return (
        <div className='flex justify-center items-center h-[130vh]' style={{ backgroundImage: 'url(./src/assets/login-img.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>

            <div className={`bg-white p-8 text-white text-center max-w-sm md:max-w-1/3  space-y-4 rounded-sm ${user ? 'block' : 'block'}`} >


                <form ref={formRef} onSubmit={signUpHandaler} className='space-y-3 backdrop-opacity-60 text-black'>

                    <h4
                        className='text-2xl font-bold text-green-700'
                    >
                        Register
                    </h4>

                    <input
                        placeholder='Full Name'
                        className='w-full border px-3 py-2 focus:ring-2 focus:ring-green-700 rounded-md '
                        type="text"
                        name="fullName"

                        id=""
                    />

                    <input
                        placeholder='Mobile No.'
                        className='w-full border px-3 py-2 focus:ring-2 focus:ring-green-700 rounded-md text-black'
                        type="number"
                        name="Number"

                        id=""
                    />

                    <input
                        placeholder='E-mail'
                        className='w-full border px-3 py-2 focus:ring-2 focus:ring-green-700 rounded-md text-black'
                        type="email"
                        name="email"

                        id="email"
                    />

                    <div className='flex relative items-center'>
                        <input
                            placeholder='password'
                            className='w-full border px-3 py-2 focus:ring-2 focus:ring-green-700 rounded-md left-3 text-black'
                            type={showPass ? "text" : "password"}
                            name="password"

                            id=""
                        />
                        <FaEye onClick={() => setShowPass(!showPass)} className='absolute right-3 hover:cursor-pointer' />
                        <FaEyeSlash onClick={() => setShowPass(!showPass)} className={`${showPass ? 'absolute right-3 hover:cursor-pointer' : 'hidden'}`} />
                    </div>

                    <div className='flex relative items-center'>
                        <input
                            placeholder='Confirm Password'
                            className='w-full border px-3 py-2 focus:ring-2 focus:ring-green-700 rounded-md text-black'
                            type={confirmPass ? "text" : "password"}
                            name="Conpassword"

                            id=""
                        />
                        <FaEye onClick={() => setConfirmPass(!confirmPass)} className='absolute right-3 hover:cursor-pointer' />

                        <FaEyeSlash onClick={() => setConfirmPass(!confirmPass)} className={`${confirmPass ? 'absolute right-3 hover:cursor-pointer' : "hidden"}`} />
                    </div>

                    <div className='flex justify-between text-green-700'>
                        <p><input className='cursor-pointer' onChange={(e) => setIsTermsAccepted(e.target.checked)} checked={isTermsAccepted} type="checkbox" id='termsAndCon' /> <label className='cursor-pointer' htmlFor="termsAndCon">Terms &</label> <Link to={'/termAndcondition'} className='hover:text-gray-800 underline font-semibold cursor-pointer hover:underlini-2'>condition</Link></p>
                        <p className='hover:text-semibold hover:underline hover:text-gray-800 cursor-pointer'>Forgate Password</p>
                    </div>

                    <button
                        type="submit"
                        className='w-full bg-green-700 py-2 rounded hover:bg-green-800 cursor-pointer text-white font-semibold'

                    >
                        Register
                    </button>

                    {
                        sucsessMessage && <p className='w-full bg-cyan-400 text-black font-semibold py-2 rounded-md animate-bounce'> {sucsessMessage} </p>
                    }

                    {
                        errorMessage && <p className='w-full bg-cyan-400 text-red-600 font-semibold py-2 rounded-md animate-bounce'> {errorMessage} </p>
                    }

                    {/* Divider */}
                    <div className='flex items-center my-6'>
                        <div className='flex-grow h-px bg-gray-700 mr-2'></div>
                        <p className='text-sm text-gray-500'>OR</p>
                        <div className='flex-grow h-px bg-gray-700 ml-2'></div>
                    </div>
                    {/* Divider */}


                </form>

                <div
                    className='space-y-3'
                >
                    <button
                        className='w-full bg-red-700 py-2 rounded hover:text-gray-400 cursor-pointer text-white font-semibold'
                        onClick={signINgoogle}
                    >
                        Login with Google
                    </button>

                    <button
                        className='w-full bg-black py-2 rounded hover:text-gray-400 cursor-pointer text-white font-semibold'
                        onClick={githubHandler}
                    >
                        Login with Github
                    </button>
                </div>

                <p
                    className='text-green-800'
                >
                    Have an account?
                    <Link
                        to={'/login'}
                        className='hover:underline ml-1 font-semibold'
                    >
                        Login Here

                    </Link>
                </p>
            </div>

            {/* <div className={`${user ? 'block' : 'hidden'}`} >
                    {
                        user && <div className='flex flex-col justify-center items-center'>


                            <div className='text-center text-white font-semibold'>
                                <div className='flex flex-col items-center justify-center'><img className='border rounded-full m-1 w-[40px] h-[40px]' src={user.photoURL} alt="" /></div>
                                <h1 className='border py-2 px-3 rounded-md m-1'> {user.displayName} </h1>
                                <h1 className='border py-2 px-3 rounded-md m-1'> {user.email} </h1>
                                <h1 className='border py-2 px-3 rounded-md m-1'> {user.number} </h1>
                            </div>

                            <button
                                className='border rounded-md text-center bg-yellow-600 text-white px-4 py-2 hover:bg-amber-700 mt-5'
                                onClick={signOutGoogle}
                            > SignOut </button>
                        </div>
                    }
                </div> */}

        </div>
    )
}

export default RegisterM