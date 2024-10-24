import winter from "../img/winter.jpeg";
import winter1 from "../img/winter1.jpeg";
import winter2 from "../img/winter2.jpeg";
import winter3 from "../img/winter3.jpeg";
import winter4 from "../img/winter4.jpeg";
import winter5 from "../img/winter5.jpeg";
import winter6 from "../img/winter6.jpeg";
function Winter() {
    return (
        <>
            <div className="Winter">
                <div className="winter-box">
                    <div className="image"><img src={winter} /></div>
                    <div className="image"><img src={winter1} /></div>
                    <div className="image"><img src={winter2} /></div>
                </div>
                <div className="winter-box">
                    <div className="image"><img src={winter3} /></div>
                    <div className="image"><img src={winter4} /></div>
                    <div className="image"><img src={winter6} /></div>
                </div>
                <div className="winter-box">
                    <div className="image"><img src={winter5} /></div>
                </div>
            </div>
        </>
    );
}
export default Winter;