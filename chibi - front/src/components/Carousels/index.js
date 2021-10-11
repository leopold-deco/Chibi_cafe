import './carousels.scss';

export default function Carousels() {
    return (
        <div style={{display: 'flex'}}>
            <div className="slider">
                <div className="slides">
                    <div className="slide">
                    <img src="https://images.pexels.com/photos/290975/pexels-photo-290975.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="café" />
                    </div>
                    <div className="slide">
                    <img src="https://cdn.pixabay.com/photo/2015/11/12/17/42/tea-1040677_960_720.jpg" alt="thé et infusion" />
                    </div>
                    <div className="slide">
                    <img src="https://images.pexels.com/photos/2934200/pexels-photo-2934200.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="sablés" />
                    </div>
                </div>
            </div>
            <div className="slider">
                <div className="slides">
                    <div className="slide">
                        <img src="https://www.allbranded.fr/out/shop-fr/pictures/generated/product/1/480_480_80/93990_06.jpg" alt="café" />
                    </div>
                    <div className="slide">
                        <img src="https://cdn.pixabay.com/photo/2015/11/12/17/42/tea-1040677_960_720.jpg" alt="thé et infusion" />
                    </div>
                    <div className="slide">
                    <img src="https://images.pexels.com/photos/2934200/pexels-photo-2934200.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="sablés" />
                    </div>
                </div>
            </div>
            <div className="slider">
                <div className="slides">
                    <div className="slide">
                    <img src="https://images.pexels.com/photos/290975/pexels-photo-290975.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="café" />
                    </div>
                    <div className="slide">
                    <img src="https://cdn.pixabay.com/photo/2015/11/12/17/42/tea-1040677_960_720.jpg" alt="thé et infusion" />
                    </div>
                    <div className="slide">
                    <img src="https://images.pexels.com/photos/2934200/pexels-photo-2934200.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="sablés" />
                    </div>
                </div>
            </div>
        </div>
    )
}
