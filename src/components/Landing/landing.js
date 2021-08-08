import React, {Component} from 'react';
import './landing.css';

class Landing extends Component {

    render() {
        return(
            <div className="djify">
                <div id="login">
				    <h1>Receiptify</h1>
				    <h2>Top Track Generator</h2>
                    <a href="/login" className="login-btn">Log in with Spotify</a>
				    {/* <p class="info">
					    This website was inspired by the Instagram account <a href="https://www.instagram.com/albumreceipts/">@albumreceipts</a>!
                    </p>
				    <p></p>
				    <p class="info">
					    Made by <a href="https://michellexliu.me">Michelle Liu</a>. <br/>
					    <a href="https://paypal.me/mchelleliu" target="_blank">PayPal</a> |
					    <a href="https://venmo.com/Michelle-Liuu" target="_blank">Venmo</a>
				    </p>
				    <p class="info">
					    *If nothing is happening when you try to log in with Apple Music, it may be because pop-ups are blocked on your browser or device. Enable them and try again!<br/>
					    <a href="https://support.google.com/chrome/answer/95472?co=GENIE.Platform%3DiOS&amp;hl=en" target="_blank">Allowing pop-ups in Chrome</a> |
					    <a href="https://kb.wisc.edu/helpdesk/page.php?id=40874" target="_blank">Allowing pop-ups in Safari (iOS)</a>
				    </p> */}
			    </div>
            </div>
        )
    }
}

export default Landing;