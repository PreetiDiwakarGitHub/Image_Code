// import background from "../img/background.jpg";
// function Home(){
//     return(
//         <>
//         <div className="Home_main">
//             <div>
//                 <img src={background}/>
//             </div>
//         </div>
//         </>
//     )
// }
// export default Home;


import React from 'react';
import background from "../img/background.jpg"; // Importing the image

function Home() {
    return (
        <>
            <div className="Home_main" style={{ backgroundImage: `url(${background})` }}>
            <h1>
                welcome to seasons gallery
            </h1>
            <h3>
            Each season brings its own beauty; let this gallery inspire you to find joy in every moment!
            </h3>
            </div>
            
        </>
    );
}

export default Home;
