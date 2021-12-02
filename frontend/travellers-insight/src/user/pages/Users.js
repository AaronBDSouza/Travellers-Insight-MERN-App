import React from 'react';
import UsersList from '../components/UsersList';

const Users = () => {
    const USERS = [
        {
            id:'1234', 
            name:'Max', 
            image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
            places:3
        }
    ];

    return <UsersList items={USERS}/>;
};

export default Users;