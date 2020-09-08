import React from 'react';
import Logo from "./hold1.png";
import './Welcome.scss';

const Welcome = ({element}) => {

    return(
        <main>
        <section className="welcome">
        <div ref={element}> 
        <img id="login" src={Logo} alt="logo" className="welcome--logo" />
        </div>
            

        </section>
        </main>

    );
}

export default Welcome;