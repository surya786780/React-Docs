import React from 'react';
import { useNavigate } from 'react-router-dom';

function About(){

        let navigate = useNavigate();
        return(
          <div>
              <h2>About Page</h2>
              <br/>
              <button onClick={() => {
                navigate("/profile");
              }}>
                Profile
              </button>
          </div>
        )
      
}
export default About;