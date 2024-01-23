import React from 'react';
import homeLogo from '../../assets/png/home.png'
import './Home.css';


function Home() {
    return (
        <>
            <div className="bg-gray-800 flex justify-center h-screen">
                <div className='container grid grid-cols-2  text-white '>
                    <div className="flex flex-col gap-12 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold align-items-center'>Seja bem vinde!</h2>

                        <div className="flex justify-around gap-4">

                            <button className='rounded bg-white text-blue-800 py-2 px-4'>Ver Categorias</button>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img src={homeLogo} alt="" className='w-3/3 border-r-amber-50' />

                    </div>
                </div>
            </div>

        </>
    );
}

export default Home;