import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  if (!isAuthenticated) {
    return (
      <div className="flex justify-center">
        <button
        className='bg-sky-800 flex justify-center mt-4 py-3 px-6 text-white rounded-3xl w-48'
        onClick={() => loginWithRedirect()}
      >
        Log In / Sign Up
      </button>
      </div>
    );
  }

  return null; // Return null if the user is authenticated or provide other appropriate feedback
};

export default LoginButton;
