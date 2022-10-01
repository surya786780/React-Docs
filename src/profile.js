import React from 'react';
import {useNavigate,useParams} from 'react-router-dom'
function Profile(){
    let {username} = useParams();
    let navi = useNavigate();
    return (
        <div>
            <h2>Profile page</h2>
            {/* <h2>This is {username} profile</h2> */}
            <br />
            <button onClick={() => {
                navi("/home")
            }}>
            Home
            </button>
        </div>
    );
}

export default Profile;