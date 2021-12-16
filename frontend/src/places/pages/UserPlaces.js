import React from 'react';
import { useParams } from 'react-router-dom';
import PlaceList from '../components/PlaceList';


const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Empire State Building',
        description: 'Most famous building in the world',
        imageUrl: 'https://lh5.googleusercontent.com/p/AF1QipOMAB7d2AGdQu-A6PU4jFMUfVAESsKvHwMmlZwf=w408-h272-k-no',
        address: '20 W 34th St, New York, NY 10001, United States',
        location:{
            lat: 40.7484405,
            lng: -73.9856644
        },
        creator: 'u1' 
    },
    {
        id: 'p2',
        title: 'test',
        description: 'Most famous building in the world',
        imageUrl: 'https://lh5.googleusercontent.com/p/AF1QipOMAB7d2AGdQu-A6PU4jFMUfVAESsKvHwMmlZwf=w408-h272-k-no',
        address: '20 W 34th St, New York, NY 10001, United States',
        location:{
            lat: 40.7490988,
            lng: -73.9850454
        },
        creator: 'u2'  
    }
];

const UserPlaces = () => {
    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId)
    return <PlaceList items={loadedPlaces}/>
};

export default UserPlaces;