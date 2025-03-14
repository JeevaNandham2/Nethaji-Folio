import { Col } from "react-bootstrap";
import { FaPlay } from "react-icons/fa"; // 🎯 Importing FontAwesome Play Icon

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br />
          <a href={link || "#"} className="btn-primary" target="_blank" rel="noopener noreferrer">
            <FaPlay className="btn-icon" /> Watch Now
          </a>
        </div>
      </div>
    </Col>
  );
};
