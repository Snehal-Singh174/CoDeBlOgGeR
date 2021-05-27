import React from 'react'
import GoogleLogin from 'react-google-login'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectSignedIn, setSignedIn, setUserData } from '../features/userSlice';
import '../style/home.css'; 

export default function HomePage() {
    const dispatch = useDispatch()
    const login = (response) => {
        console.log(response);
        dispatch(setSignedIn(true))
        dispatch(setUserData(response.profileObj))
    };

    const isSignedIn = useSelector(selectSignedIn);
    return (
        <div className="home_page" style={{display:isSignedIn? "none" : ""}}>
           {!isSignedIn ? (
                <div className="login_message">
                <h2>📝PUSH YOUR MIND,HERE</h2> 
                <p>Create beautiful blog and show the world your view. Just sign
                    up and start reading some quality blogs.    
                </p>   
                <GoogleLogin clientId="758824335176-g53d0s48ohach00kig4lu5tnd49bau0p.apps.googleusercontent.com" render={(renderProps) => (
                   <button
                   onClick={renderProps.onClick}
                   disabled={renderProps.disabled}
                   className="login_button"
                   >
                       Login with Google 
                   </button>
                )}
                onSuccess={login}
                onFailure={login}
                isSignedIn={true}
                cookiePolicy={"single_host_origin"}
                />
            </div>
           ) : ("")
        }
        </div>
    )
}
