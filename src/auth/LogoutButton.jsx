 
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "./Profile";
 
const LogoutButton = () => {
    const { logout, isAuthenticated } = useAuth0();
 
    if (isAuthenticated) {
        return (
            <>
            <Profile />
            <button className="bg-sky-800 py-3 px-10 text-white rounded-3xl fixed bottom-24 left-1/2 transform -translate-x-1/2"
    onClick={() => logout({ returnTo: "https://mazhibus.netlify.app/" })}>
    Log Out
</button>


                <br />
            </>
        );
    }
};
 
export default LogoutButton;