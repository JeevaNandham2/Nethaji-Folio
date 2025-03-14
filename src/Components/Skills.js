import meter1 from "../assets/img/video_10647765.png";
import meter2 from "../assets/img/video-editor_11904564.png";
import meter3 from "../assets/img/portrait_17368077.png";
import meter4 from "../assets/img/video5.jpg"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

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
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>What I Do</h2>
                        <p>"Equipped with a versatile skill set in motion graphics, VFX, graphic design, video editing, and content creation, I turn ideas into visually compelling and impactful creations.".<br></br>  </p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>cinematographer</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>VideoEditing</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>photography</h5>

                            </div>
                            <div className="item">
                                <img src={meter4} alt="Image" />
                                <h5>vfx and MotionGraphics</h5>
                                
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        
    </section>
  )
}