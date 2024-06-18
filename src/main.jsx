import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Auth0Provider
        domain= {import.meta.env.VITE_DOMAIN}
        clientId= {import.meta.env.VITE_CID}
        redirectUri={window.location.origin}>
        <App />
    </Auth0Provider>
);