import fall from "../img/fall.jpeg";
import fall1 from "../img/fall1.jpeg";
import Autumn1 from "../img/Autumn1.jpeg";
import Autumn3 from "../img/Autumn3.jpeg";
import Autumn4 from "../img/Autumn4.jpeg";
import Autumn5 from "../img/Autumn5.jpeg";
function Autumn() {
    return (
        <>
            <div className="Winter">
                <div className="winter-box">
                    <div className="image"><img src={fall} /></div>
                    <div className="image"><img src={fall1} /></div>
                    <div className="image"><img src={Autumn5}/></div>
                </div>
                <div className="winter-box">
                    <div className="image"><img src={Autumn1 } /></div>
                    <div className="image"><img src={Autumn3 } /></div>
                    <div className="image"><img src={Autumn4 } /></div>
                </div>
                

            </div>
        </>
    )
}
export default Autumn;