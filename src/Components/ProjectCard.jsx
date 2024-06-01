import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, url, email}) => {
  return (
    <a href={url} className="text-none">
      <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <span>{email}</span>



        </div>
      </div>
    </Col>
    </a>
  )
}