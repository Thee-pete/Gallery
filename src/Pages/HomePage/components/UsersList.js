import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import AppContext from '../../../context/AppContext';
import UserItem from './UserItem';
import Loading from '../../../components/Loading';

function UsersList() {

    const {baseUrl} = useContext(AppContext);
    const [avUsers, setAvUsers] = useState([]);
    const {isLoading, setIsLoading} = useContext(AppContext);


    const getData = async ()=>{
        setIsLoading(true);
        const res = await axios.get(`${baseUrl}users`);
        console.log(res);
        setAvUsers(res.data);
        setIsLoading(false);
    }; 
    useEffect(()=>{
        getData();

    },[]);
    return (
        <>
            {isLoading? (<Loading/>):(
                <div className='md:mt-20 mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 md:px-4  px-0'>
                    {avUsers.map((avUser)=>{
                        return (<UserItem key={avUser.id}  avUser={avUser}/>);
                    })}
                </div>
            )}
        </>
    
    );
}

export default UsersList;