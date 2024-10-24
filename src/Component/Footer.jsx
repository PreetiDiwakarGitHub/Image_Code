import React from 'react';
import { Link } from 'react-router-dom';
function Footer(){
    return(
        <>
        <div>
            <div className="footer">
                <ul>
                    <li><Link to = "/">Home</Link></li>
                    <li><Link to = "/Winter">Winter</Link></li>
                    <li><Link to = "/Summer">Summer</Link></li>
                    <li><Link to = "/Spring">Spring</Link></li>
                    <li><Link to = "/Autumn">Autumn</Link></li>
                </ul>
            </div>
        </div>
        </>
    );
}

export default Footer;