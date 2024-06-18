import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { SendEmail } from '../components/SendEmail';


const Profile = () => {
    const { user, isAuthenticated } = useAuth0();

    if (!isAuthenticated) {
        return null;
    }

    const welcomeMessage = `Welcome ${user.name}! 
    New Login to Mazhibus successful with email ${user.name} `;

    return (
        <div className="container  ">
            <p className="text-base pt-4 text-white">Name: <b>{user.name}</b></p>
            <p className="text-base text-white ">Email: {user.email}</p>
            <SendEmail name={user.name} emailid={user.email} message={welcomeMessage} />
        </div>
    );
};

export default Profile;
