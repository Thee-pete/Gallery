import React from 'react';
import { useNavigate } from 'react-router-dom';
import IntroSection from './components/IntroSection';
import PhotosList from './components/PhotosList';

function AlbumPage() {

    const loggedInUser =  localStorage.getItem('user');
    console.log(loggedInUser);
    const navigate = useNavigate();

    return (<>
        {loggedInUser ? (<div className='container flex flex-col w-screen'>
           
            <IntroSection/>
            <PhotosList/>
            
        </div>):(
            <div className='container flex flex-col w-screen items-center'>
                <h1 className='text-4xl text-center'>You are not authorized to view this page. Please Go back to login</h1>
                <button onClick={()=>{
                    navigate('/');
                }} className='bg-primary text-white mt-4 p-4 w-[50%]'>GO BACK TO LOG IN</button>
            </div>)}
     
    </>
    );
}

export default AlbumPage;