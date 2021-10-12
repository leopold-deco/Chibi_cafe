import './carousels.scss';
import carousel1 from '../../assets/carrousel/carrousel1.jpg';
import carousel2 from '../../assets/carrousel/carrousel2.jpg';
import carousel3 from '../../assets/carrousel/carrousel3.jpg';
import carousel4 from '../../assets/carrousel/carrousel4.jpg';
import carousel5 from '../../assets/carrousel/carrousel5.jpg';
import carousel6 from '../../assets/carrousel/carrousel6.jpg';
import carousel7 from '../../assets/carrousel/carrousel7.jpg';

export default function Carousels() {
    return (
        <div className="carousels">
            <div className="slider">
                <div className="slides slides1">
                    <div className="slide">
                    <img src="https://images.pexels.com/photos/290975/pexels-photo-290975.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="café" />
                    </div>
                    <div className="slide">
                    <img src="https://cdn.pixabay.com/photo/2015/11/12/17/42/tea-1040677_960_720.jpg" alt="thé et infusion" />
                    </div>
                    <div className="slide">
                    <img src={carousel7} alt="sablés" />
                    </div>
                </div>
            </div>
            <div className="slider">
                <div className="slides slides2">
                    <div className="slide">
                        <img src={carousel1} alt="café" />
                    </div>
                    <div className="slide">
                        <img src={carousel2} />
                    </div>
                    <div className="slide">
                    <img src={carousel3} alt="sablés" />
                    </div>
                </div>
            </div>
            <div className="slider last">
                <div className="slides last slides3">
                    <div className="slide">
                    <img src={carousel4} alt="café" />
                    </div>
                    <div className="slide">
                    <img src={carousel5} />
                    </div>
                    <div className="slide">
                    <img src={carousel6} alt="sablés" />
                    </div>
                </div>
            </div>
        </div>
    )
}
