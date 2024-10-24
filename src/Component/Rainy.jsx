import raining from "../img/raining.jpeg";
import raining1 from "../img/raining1.jpeg";
import raining2 from "../img/raining2.jpg";
import raining3 from "../img/raining3.jpeg";
import raining4 from "../img/raining4.jpg";
import raining8 from "../img/raining8.webp";
function Rainy() {
    return (
        <>
            <div className="Winter">
                <div className="winter-box">
                    <div className="image"><img src={raining } /></div>
                    <div className="image"><img src={raining1 } /></div>
                    <div className="image"><img src={raining2 } /></div>
                </div>
                <div className="winter-box">
                    <div className="image"><img src={raining3 } /></div>
                    <div className="image"><img src={raining4 } /></div>
                    <div className="image"><img src={raining8 } /></div>
                </div>
            </div>
        </>
    )
}
export default Rainy;