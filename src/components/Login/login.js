import React, {Component} from 'react';
import './login.css';
import configData from "../../config.json";

class Login extends Component {
    render() {
        if (configData.ENV === "DEV"){
            return(
                <div>
                    <meta http-equiv="refresh" content={`0; URL=https://accounts.spotify.com/authorize?client_id=8dd16f29afcd4475a2e14131e2e0004d&redirect_uri=${configData.DEV_REDIRECT_URL}&scope=user-top-read&response_type=token&state=12`}/>
                </div>
            )
        }
        else {
            return(
                <div>
                    <meta http-equiv="refresh" content={`0; URL=https://accounts.spotify.com/authorize?client_id=8dd16f29afcd4475a2e14131e2e0004d&redirect_uri=${configData.PROD_REDIRECT_URL}&scope=user-top-read&response_type=token&state=12`}/>               
                </div>
            )
        }
    }
}

export default Login;