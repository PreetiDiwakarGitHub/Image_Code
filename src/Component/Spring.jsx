import spring from "../img/spring.jpeg";
import spring1 from "../img/spring1.jpeg";
import spring2 from "../img/spring2.jpeg";
import spring3 from "../img/spring3.jpeg";
import spring4 from "../img/spring4.jpeg";
import spring5 from "../img/spring5.webp";
import spring6 from "../img/spring6.jpeg";
import spring7 from "../img/spring7.jpeg";
function Spring() {
    return (
        <>
            <div className="Winter">
                <div className="winter-box">
                    <div className="image"><img src={spring} /></div>
                    <div className="image"><img src={spring1 } /></div>
                    <div className="image"><img src={spring2 } /></div>
                </div>
                <div className="winter-box">
                    <div className="image"><img src={spring3 } /></div>
                    <div className="image"><img src={spring4 } /></div>
                    <div className="image"><img src={spring5 } /></div>
                </div>
                <div className="winter-box">
                    <div className="image"><img src={spring6 } /></div>
                    <div className="image"><img src={spring7 } /></div>
                </div>
            </div>
        </>
    );
}
export default Spring;