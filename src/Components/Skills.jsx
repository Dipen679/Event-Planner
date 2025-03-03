import meter1 from "../assets/img/woman.png";
import meter2 from "../assets/img/cool.png";
import meter3 from "../assets/img/party-people.png";
import meter4 from "../assets/img/family.png";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import NavBar from "../NavBar";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
	<>
    <section className="skill" id="categories">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Categories</h2>
                        <p>We Provide<br></br>The Following Extensive and Exquisite Events</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Kitty Party</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Birthday Party </h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Office Party</h5>
                            </div>
                            <div className="item">
                                <img src={meter4} alt="Image" />
                                <h5>G20</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
	</>
  )
}
export default Skills;