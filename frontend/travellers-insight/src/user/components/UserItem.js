import React from 'react';
import './UserItem.css';

const UserItem = props => {
    return(
        <li className="user-item">
            <div className="user-item__image">
                <img src={props.image} alt={props.name} />
            </div>
        </li>
    );
};

export default UserItem;