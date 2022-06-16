import React from 'react';
import bannerImage from '../../../images/Personal site.gif';
const Banner = () => {
    return (
        <div>
            <section class="dark:bg-gray-800 dark:text-gray-100">
                <div class="container flex flex-col justify-center p-3 mx-auto sm:py-10 lg:py-6 lg:flex-row lg:justify-between">
                    <div class="flex flex-col justify-center p-4 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 class="text-5xl leading-tight font-bold lg:leading-tight sm:text-5xl">Welcome to <span className='text-primary'>"Origin Cloud Technologies Private Limited"</span>
                        </h1>
                        <p class="mt-6 mb-8 text-lg sm:mb-12">Dictum aliquam porta in condimentum ac integer
                            <br class="hidden md:inline lg:hidden" />turpis pulvinar, est scelerisque ligula sem
                        </p>
                        <div>
                            <button className='btn btn-primary rounded-none'>Get Started</button>
                        </div>
                    </div>
                    <div class="flex items-center justify-center p-6 mt-2 h-80 sm:h-80 lg:h-full xl:h-112 2xl:h-128">
                        <img src={bannerImage} alt="" class="object-contain h-96 sm:h-80 lg:h-full xl:h-112 2xl:h-128" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;