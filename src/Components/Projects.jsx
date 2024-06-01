import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
// import projImg1 from "../assets/img/project-img1.png";
// import projImg2 from "../assets/img/project-img2.png";
// import projImg3 from "../assets/img/project-img3.png";
import sagar from "../assets/devs/sagar.jpeg"
import siam from "../assets/devs/siam.jpeg"
import bipen from "../assets/devs/bipen.jpeg"
import dhruv from "../assets/devs/dhruv.jpeg"
import pie from "../assets/img/pie.png"
import NavBar from "../NavBar";


import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
// import PieChart from "./Piechart";
// import { AppPie } from "./Piechart.jsx";

// import 'bootstrap';

export const Projects = () => {

  const projects = [
    {
      title: "Dipen Merchant",
      description: "Event Host",
      imgUrl:  bipen,
      url: "https://www.linkedin.com/in/dipen-merchant-a07591259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      email:"dipenmerchant7@gmail.com"
    },
    {
      title: "Saaim Ansari",
      description: "Venue Manager",
      imgUrl: siam,
      url: "https://www.linkedin.com/in/saaim-ansari-b06024223?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      email:"saaim0003@gmail.com"
    },
    {
      title: "Sagar Bora",
      description: "Event Planner",
      imgUrl: sagar,
      url: "https://www.linkedin.com/in/sagar-bora-974a9426a/",
      email: "sagarbora081003@gmail.com"
    },
    {
      title: "Dhruv Bajoria",
      description: "Resort Manager",
      imgUrl: dhruv,
      url: "https://www.linkedin.com/in/dhruv-bajoria-aa5a9722a/",
      email:"dhurvbajoria0@gmail.com"
    },
    

  ];

  return (
	<>	
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>About US </h2>
                <p>MidaasEvents was founded in 2023 by Four passionate event enthusiasts, Saaim Sagar, Dipen and  Dhruv.As the company's reputation grew, so did its clientele and services. MidaasEvents expanded its offerings to include corporate events, charity fundraisers, and large-scale conferences.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Co-ordinators</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">History</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Achiements</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp " : ""}>
                    <Tab.Pane eventKey="first">
                      <Row className="flex about-us-card-container">
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
                    <Tab.Pane eventKey="second">
                      <p>Midaas Events stands as a trusted name in the event industry, known for crafting memorable and immersive experiences that leave a lasting impact. With a dynamic team of event professionals and a passion for innovation, MidaasEvents looks forward to shaping the future of event planning.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Hello this i sthird section</p>
                      <img src={pie} alt="piechart" className="piechart-image" />
                      <p>Hello this i sthird section</p>

                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
	</>
  )
}
export default Projects;