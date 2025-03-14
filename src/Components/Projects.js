import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/projImg1 Post.gif";
import projImg2 from "../assets/img/VFX.gif";
import projImg3 from "../assets/img/INFLUENCER.gif";
import projImg4 from "../assets/img/YOUTUBE VIDEOS.gif";
import projImg5 from "../assets/img/THUMBNAILS.gif";
import projImg6 from "../assets/img/PHOTOSHOOT.gif";
import projImg7 from "../assets/img/WEDDING VIDEOS.gif"
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "COMMERCIAL SHOPS",
      description: "A modern, stylish commercial shop designed to elevate your business.",
      imgUrl: projImg1,
      link : "https://drive.google.com/drive/folders/1ltOq10J1J_jxb8ZifXoXjQzmG4K6Q-ea?usp=sharing"
    },
    {
      title: "VFX & MotionGraphics",
      description: "Dynamic VPX motion graphics that captivate and elevate your brand.",
      imgUrl: projImg2,
      link : "https://drive.google.com/drive/folders/1TJpDQ5pWS0ekjF6Ygq78Bu_uaXnD89Rw"
    },
    {
      title: "CONTENT CREATION",
      description: "Creative content that inspires, engages, and drives results.",
      imgUrl: projImg3,
      link : "https://drive.google.com/drive/folders/1DBNNYvDcagwLHKnOHdVkaIAlr6c1I8Lv"
    },
    {
      title: "YOUTUBE VIDEOS",
      description: "🎬 Transforming ideas into captivating YouTube videos that engage, inspire, and leave a lasting impact! 🚀✨",
      imgUrl: projImg4,
      link : "https://youtu.be/OH0ksqcZVpk"
    },
    {
      title: "THUMBNAIL",
      description: "🔥 Scroll-Stopping Thumbnails That Boost Views & Engagement! 🎬🚀 ",
      imgUrl: projImg5,
      link :"https://drive.google.com/drive/folders/1Jee3y4KawPfzg4FI9xvknV7z29yx0obp?usp=sharing"
    },
    {
      title: "PHOTOGRAPHY",
      description: "📸 Capturing Moments, Creating Memories – One Click at a Time! ✨ ",
      imgUrl: projImg6,
      link:"https://drive.google.com/drive/folders/1cDNHg5yZsl4RL8WqnyiWi7YnySeRJDvi?usp=drive_link"
    },
    {
      title: "WEDDING",
      description: "🌟 Cherish Every Smile, Every Tear, Every Moment – Perfectly Captured! ",
      imgUrl: projImg7,
      link : "https://drive.google.com/drive/folders/1XWlL55VXvF1t8KeXCvxI4Zh1-rBXptUN?usp=drive_link"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Services</h2>
                <p> 📢 Elevate Your Visual Storytelling with Expert Video Editing! 🎬✨
                In today’s fast-paced digital world, captivating visuals are the key to grabbing attention and leaving a lasting impression. Whether you need cinematic storytelling, dynamic transitions, seamless edits, or eye-catching effects, I bring your ideas to life with precision and creativity...</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                                
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      
    </section>
  )
}