import React from 'react'
import { useNavigate } from 'react-router-dom';
export default function HeaderNav(props) {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // to navigat back
  };
  return (
    <div>
      <div className="bg-fbg ">
      <div className="flex text-white justify-center align-middle p-8">
        
          <button onClick={handleBack} className="p-2 absolute left-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-circle-arrow-left"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M16 12H8" />
              <path d="m12 8-4 4 4 4" />
            </svg>
          </button>
        
        <div className="px-6 py-1">
         {props.title}
          
        </div>
      </div>
      
      
    </div>
    </div>
  )
}
