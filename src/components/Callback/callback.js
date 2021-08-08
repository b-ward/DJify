import React, {Component} from 'react';
import './callback.css';
import getTopSpotify from './topSpotify';
import {Button, Spinner} from 'react-bootstrap';

class Landing extends Component {
    constructor(props){
        super(props);
        this.state = {
            topSpotify: [],
            loadingResults: false
        };
    }

    submit(timePeriod) {
        if (this.props.location.hash){
            //Get hash returned by Spotify and extract the accessToken out of it
            var accessToken = this.props.location.hash.replace("#access_token=", "").split('&token_type')[0];
            getTopSpotify(accessToken,timePeriod).then((topSpotifyDataTransformed) => {
                console.log(topSpotifyDataTransformed)
                this.setState({topSpotify:topSpotifyDataTransformed, loadingResults: false});
                console.log(this.state)
            });
        }
        else {
            console.log("You need to login")
        }
    }

    render() {
        return(
            <div className="djify">
                <div className="row" style={{width: '100%', margin: 'auto'}}>
                    <div style={{width: '100%'}}>
                        <div className="trainGame-title"><h1>DJify</h1></div>
                    </div>
                </div>

                <Button style={{marginTop: '-3px'}} onClick={() => {this.setState({loadingResults: true}); this.submit('short_term')}}>1 month</Button>
                <Button style={{marginTop: '-3px'}} onClick={() => {this.setState({loadingResults: true}); this.submit('medium_term')}}>6 months</Button>
                <Button style={{marginTop: '-3px'}} onClick={() => {this.setState({loadingResults: true}); this.submit('long_term')}}>All time</Button>
                {this.state.loadingResults === true &&
                    <div>
                        <br></br>
                        <Spinner animation="border" role="status">
                            <span className="sr-only">Loading...</span>
                        </Spinner>
                    </div>
                }
                <div className="result" style={{whiteSpace: 'pre-line'}}>
                {this.state.topSpotify.map(function(topSpotifyItem, idx){
                    console.log(topSpotifyItem)
                    return (<li key={idx}>{topSpotifyItem.artist} - {topSpotifyItem.songName}</li>)
                })}
                </div>
            </div>
        )
    }
}

export default Landing;