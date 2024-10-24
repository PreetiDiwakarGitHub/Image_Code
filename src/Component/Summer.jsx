import summer from "../img/summer.jpeg";
import summer1 from "../img/summer1.jpeg";
import summer2 from "../img/summer2.jpeg";
import summer3 from "../img/summer3.jpeg";
import summer4 from "../img/summer4.jpeg";
import summer5 from "../img/summer5.jpg";
import summer6 from "../img/summer6.webp";

function Summer() {
    return (
        <>
            <div className="Winter">
                <div className="winter-box">
                    <div className="image"><img src={summer} /></div>
                    <div className="image"><img src={summer1} /></div>
                    <div className="image"><img src={summer2} /></div>
                </div>
                <div className="winter-box">
                    <div className="image"><img src={summer3} /></div>
                    <div className="image"><img src={summer4} /></div>
                    <div className="image"><img src={summer5} /></div>
                </div>
                <div className="winter-box">
                    <div className="image"><img src={summer6} /></div>
                </div>
            </div>
        </>
    )
};
export default Summer