import React from 'react';
// import AnimatedLogo from "../assets/images/logo-animated.gif";
import PepsiLoader from "../assets/images/pepsi.gif";

function Loader() {
    return ( 
        <div className='loader'>
            <img className='logo' src={PepsiLoader} alt='apple loader' />
        </div>
     );
}

export default Loader;