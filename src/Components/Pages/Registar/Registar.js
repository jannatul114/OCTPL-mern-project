import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { async } from '@firebase/util';
import swal from 'sweetalert';
import Loading from '../../Shared/Loading/Loading';
import { toast } from 'react-toastify';
import useProfile from '../../hooks/useProfile';
const Registar = () => {
    // const location = useLocation()
    const navigate = useNavigate();
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    useProfile(user || googleUser)


    const handleCreateUser = async (event) => {
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(name, email, password);
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name })
        if (user) {
            swal("Successfully Login", "Good job!", "success");
        }
    }

    useEffect(() => {
        if (error || updateError || googleError) {
            toast.error(error || updateError || googleError)
        }
    }, [error, updateError, googleError])



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
                            <form onSubmit={handleCreateUser}>
                                <h1 className='my-4 font-semibold text-4xl text-primary text-center'>Register</h1>
                                <div class="mb-6">
                                    <input
                                        type="text"
                                        name='name'
                                        class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="Name" required
                                    />
                                </div>
                                <div class="mb-6">
                                    <input
                                        type="text"
                                        name='email'
                                        class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="Email address" required
                                    />
                                </div>


                                <div class="mb-6">
                                    <input
                                        type="password"
                                        name='password'
                                        class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        placeholder="Password" required
                                    />
                                </div>


                                <p className='py-3 '>Already have an account? <Link className='text-primary' to={'/login'}>Login</Link> </p>


                                <button
                                    type="submit"
                                    class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg- focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                >
                                    Register
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

export default Registar;