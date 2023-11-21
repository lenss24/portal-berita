import React from 'react';
import {Head} from '@inertiajs/inertia-react';
import Navigation from '@/Components/Navigation';
import NewsCard from '@/Components/NewsCard';

export default function Welcome(props) {
    return (
        <>
            <Head title={props.title}/>

            <Navigation data={props}/>

            <div
                className="flex md:flex-col min-h-screen bg-neutral-800 text-white sm:items-center sm:pt-0">
                <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                    <h1 className="text-4xl mb-10 mt-20 text-center font-bold">Selamat Datang di CuyNews!</h1>
                </div>

                <NewsCard news={props.news}/>
            </div>
        </>
    );
}
