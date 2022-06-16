import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useQuery } from 'react-query';
import './ProfileDetailse.css';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading/Loading';
const ProfileDetailse = () => {
    const [user] = useAuthState(auth);

    const { data: updatedUser, isLoading, refetch } = useQuery(['dbuser'], () => fetch(`http://localhost:5000/users/${user.email}`).then(res =>
        res.json())
    )
    if (isLoading) {
        return <Loading />
    }

    const handleEditProfile = event => {
        event.preventDefault()
        const name = event.target.name.value || updatedUser?.email || '';
        const city = event.target.city.value || updatedUser?.city || '';
        const state = event.target.state.value || updatedUser?.state || '';
        const company = event.target.company.value || updatedUser?.company || '';
        const occupation = event.target.occupation.value || updatedUser?.occupation || '';
        const language = event.target.language.value || updatedUser?.language || '';
        const phone = event.target.phone.value || updatedUser?.phone || '';
        const experiance = event.target.experiance.value || updatedUser?.experiance || '';
        const country = event.target.country.value || updatedUser?.experiance || '';
        const projectName = event.target.projectName.value || updatedUser?.projectName || '';
        const projectNote = event.target.notes.value || updatedUser?.notes || '';
        const start = event.target.start.value || updatedUser?.start || '';
        const end = event.target.end.value || updatedUser?.end || '';
        const detailse = event.target.detailse.value || updatedUser?.detailse || '';
        const users = { name, city, state, company, occupation, language, phone, experiance, country, projectName, projectNote, start, end, detailse };
        fetch(`http://localhost:5000/users/${user.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',

            },
            body: JSON.stringify(users)
        })
            .then(res => res.json())
            .then(data => {
                refetch()
                console.log(data);
                toast.success('successfully updated')
                event.target.reset()
            })

    }
    return (
        <div>
            <div class="bg-gray-100 h-full">
                <div class="container mx-auto my-5 p-5">
                    <div class="md:flex no-wrap md:-mx-2 ">

                        <div class="w-full md:w-1/2 md:mx-2">

                            <div class="bg-white rounded-3xl p-3 shadow-lg my-3">
                                <div class="image overflow-hidden flex justify-center ">
                                    {
                                        user ? <img height={'200px'} width={'220px'} src={user?.photoURL} alt="" /> : <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTdmrjoiXGVFEcd1cX9Arb1itXTr2u8EKNpw&usqp=CAU" alt="" />
                                    }
                                </div>

                                <div class="my-4">
                                    <h1 className='text-primary py-3 text-2xl text-center font-bold'>{updatedUser?.name ? updatedUser?.name : 'Not Available'}</h1>
                                </div>
                                <div className='flex justify-between'>
                                    <div class="my-2">
                                        <h1 className='py-3 text-sm p-2 font-bold'>Email:  <span className='text-primary py-3 text-sm p-2 font-bold'>{user ? user?.email : 'Not Available'}</span> </h1>
                                    </div>
                                    <div class="my-2">
                                        <h1 className='py-3 text-sm p-2 font-bold'>Phone:  <span className='text-primary py-3 text-sm p-2 font-bold'>{updatedUser?.phone ? updatedUser?.phone : 'Not Available'}</span> </h1>
                                    </div>
                                </div>
                                <div class="my-2">
                                    <h1 className='py-3 text-sm p-2 font-bold'>Address:  <span className='text-primary py-3 text-sm p-2 font-bold'>{updatedUser?.state ? updatedUser.state : 'Not Available'} , {updatedUser?.city ? updatedUser.city : 'Not Available'} , {updatedUser?.country ? updatedUser?.country : 'Not Available'}</span> </h1>
                                </div>
                                <div class="my-2">
                                    <h1 className='py-3 text-sm p-2 font-bold'>Company: <span className='text-primary py-3 text-sm p-2 font-bold'>{updatedUser?.company ? updatedUser?.company : 'Not Available'}</span> </h1>
                                </div>
                                <div class="my-2">
                                    <h1 className='py-3 text-sm p-2 font-bold'>Occupation: <span className='text-primary py-3 text-sm p-2 font-bold'>{updatedUser?.occupation ? updatedUser?.occupation : 'Not Available'}</span> </h1>
                                </div>
                                <div className='flex justify-between'>
                                    <div class="my-2">
                                        <h1 className='py-3 text-sm p-2 font-bold'>Experiance: <span className='text-primary py-3 text-sm p-2 font-bold'>{updatedUser?.experiance ? updatedUser?.experiance : 'Not Available'}</span> </h1>
                                    </div>
                                    <div class="my-2">
                                        <h1 className='py-3 text-sm p-2 font-bold'>Language: <span className='text-primary py-3 text-sm p-2 font-bold'>{updatedUser?.language ? updatedUser?.language : 'Not Available'}</span> </h1>
                                    </div>
                                </div>

                                <div className='my-3'>
                                    <div>
                                        <h1 className='text-2xl text-center text-primary font-bold'>Projects</h1>
                                    </div>
                                    <h1 className='py-3 text-sm p-2 font-bold'>Project Name: <span className='text-gray-600 py-3 text-sm p-2 font-bold'>  {updatedUser?.projectName ? updatedUser?.projectName : 'Not Available'}</span> </h1>
                                    <h1 className='my-3 text-sm m-2 font-bold text-gray-600'>Project Note:  {updatedUser?.projectNote ? updatedUser?.projectNote : 'Not Available'}</h1>
                                    <h1 className='my-3 text-sm m-2 font-bold text-gray-600'>Start date:  {updatedUser?.start ? updatedUser?.start : 'Not Available'}</h1>
                                    <h1 className='my-3 text-sm m-2 font-bold text-gray-600'>End date:  {updatedUser?.end ? updatedUser?.end : 'Not Available'}</h1>
                                </div>

                            </div>





                        </div>

                        <div class="w-full md:w-9/12 mx-2 h-69">
                            <div class="bg-white py-5 px-2 shadow-xl my-4 rounded-xl">
                                <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                                    <span clas="text-green-500">
                                        <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </span>
                                    <span class="tracking-wide text-xl">About</span>
                                </div>
                                <div class="text-gray-700 mt-3 p-3">
                                    <form onSubmit={handleEditProfile}>
                                        <div class="grid md:grid-cols-2 text-sm lg:gap-3">
                                            <div>
                                                <h2 className='my-2 font-bold text-lg text-primary'>Name:</h2>
                                                <input type="text" placeholder="Name" name='name' class="input input-bordered w-full max-w-xs" />
                                            </div>
                                            <div>
                                                <h2 className='my-1 font-bold text-lg text-primary'>Phone:</h2>
                                                <input type="text" placeholder="Phone No" name='phone' class="input input-bordered w-full max-w-xs" />
                                            </div>
                                            <div>
                                                <h2 className='my-2 text-center font-bold text-lg text-primary'>Address:</h2>
                                                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>

                                                    <input type="text" placeholder="Country" name='country' class="input input-bordered w-full max-w-xs" />

                                                    <input type="text" placeholder="City" name='city' class="input input-bordered w-full max-w-xs" />

                                                    <input type="text" placeholder="State" name='state' class="input input-bordered w-full max-w-xs" />
                                                </div>
                                            </div>


                                            <div>
                                                <h2 className='my-1 font-bold text-lg text-primary'>Company:</h2>
                                                <input type="text" placeholder="Company" name='company' class="input input-bordered w-full max-w-xs" />
                                            </div>
                                            <div>
                                                <h2 className='my-1 font-bold text-lg text-primary'>Occupation:</h2>
                                                <input type="text" placeholder="Occupation" name='occupation' class="input input-bordered w-full max-w-xs" />
                                            </div>
                                            <div>
                                                <h2 className='my-1 font-bold text-lg text-primary'>Years Of Experiance:</h2>
                                                <input type="text" placeholder="Year" name='experiance' class="input input-bordered w-full max-w-xs" />
                                            </div>
                                            <div>
                                                <h2 className='my-1 font-bold text-lg text-primary'>Language:</h2>
                                                <input type="text" placeholder="Language" name='language' class="input input-bordered w-full max-w-xs" />
                                            </div>
                                        </div>

                                        <h1 className='text-center text-2xl font-bold text-primary mt-4'>Projects</h1>
                                        <div>
                                            <h2 className='my-1 font-bold text-lg text-primary'>Project Name:</h2>
                                            <input type="text" placeholder="Project Name" name='projectName' class="input input-bordered w-full max-w-xs" />
                                        </div>
                                        <div className='my-2'>
                                            <h2 className='my-1 font-bold text-lg text-primary'>Project Detailse:</h2>
                                            <textarea class="textarea textarea-bordered w-full" name='detailse' placeholder="Project Detailse"></textarea>
                                        </div>
                                        <div className='my-2'>
                                            <h2 className='my-1 font-bold text-lg text-primary'>Notes:</h2>
                                            <textarea class="textarea textarea-bordered w-full" name='notes' placeholder="Project Notes"></textarea>
                                        </div>
                                        <div className='my-2' >
                                            <h2 className='my-1 font-bold text-lg text-primary text-center'>Duration</h2>
                                            <div className='my-2 grid grid-cols-1 lg:grid-cols-2'>
                                                <input type="text" placeholder="Start date" name='start' class="input input-bordered w-full max-w-xs" />
                                                <input type="text" placeholder="End Date" name='end' class="input input-bordered w-full max-w-xs" />
                                            </div>
                                        </div>
                                        <div className='flex justify-end'>
                                            <input type={'submit'} value={"Save"} className='btn btn-primary mt-10 text-white' />
                                        </div>
                                    </form>
                                </div>

                            </div>







                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileDetailse;