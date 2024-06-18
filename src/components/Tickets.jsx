import React from 'react';
import HeaderNav from './HeaderNav';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import GetTicketDetails from './GetTicketDetails';

export default function Tickets() {
  const { user, isAuthenticated } = useAuth0();

  return (
    <div className='h-screen bg-dbg '>
      <HeaderNav title="Tickets" />
      <div className="bg-fbg ">
        <div className='rounded-t-3xl bg-dbg text-white'>
          {isAuthenticated ? (
            <div className='text-center pb-20 pt-2'>
              <GetTicketDetails emailId={user.email}/>
            </div>
          ) : (
            <div className='text-center pt-8'>
              <p>Please <Link to="/accounts" className='text-rose-500 underline'>Login</Link> to view ticket/s</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
