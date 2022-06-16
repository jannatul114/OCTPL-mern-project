import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { toast } from 'react-toastify'
import Loading from '../../Shared/Loading/Loading';
import useProfile from '../../hooks/useProfile';
import swal from 'sweetalert';
const Login = () => {
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);


    const handleUserLogin = (event) => {
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password)
    }
    useEffect(() => {
        if (error || googleError) {
            toast.error(error || googleError)
        }
    }, [error, googleError])

    useProfile(user)

    if (loading || googleLoading) {
        <Loading />
    }
    const handleGoogleSign = () => {
        signInWithGoogle()
        if (googleUser) {
            swal("Successfully Login", "Good job!", "success");
        }
    }

    if (user || googleUser) {
        navigate('/home')
        console.log(user);
    }

    return (
        <div>
            <section class="h-screen">
                <div class="container px-6 py-12 h-full">
                    <div class="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                        <div class="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                                class="w-full"
                                alt="Phone image"
                            />
                        </div>
                        <div class="md:w-8/12 lg:w-5/12 lg:ml-20">
                            <form onSubmit={handleUserLogin}>
                                <h1 className='my-4 font-semibold text-4xl text-primary text-center'>Login</h1>
                                <div class="mb-6">
                                    <input name='email'
                                        type="text"
                                        class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="Email address"
                                    />
                                </div>


                                <div class="mb-6">
                                    <input name='password'
                                        type="password"
                                        class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="Password"
                                    />
                                </div>



                                <p className='py-3 '>Don't have any account? <Link className='text-primary' to={'/registar'}>Registar</Link> </p>
                                <p
                                    class="text-blue-600 py-5 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out cursor-pointer"
                                >Forgot password?</p>

                                <button
                                    type="submit"
                                    class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                >
                                    Sign in
                                </button>
                                <div
                                    class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                                >
                                    <p class="text-center font-semibold mx-4 mb-0">OR</p>
                                </div>
                            </form>
                            <button onClick={handleGoogleSign}
                                class="bg-white px-7 py-3 text-gray font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center border-2 border-primary"


                                role="button"
                                data-mdb-ripple="true"
                                data-mdb-ripple-color="light"
                            >

                                <img className='mr-3' src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png" width={'30px'} alt="" /> Continue with Google
                            </button>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;