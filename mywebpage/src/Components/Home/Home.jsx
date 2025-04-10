import { useState } from "react";
import "./Home.css";
import { useNavigate } from 'react-router-dom';

function Home() {
  const [activeSide, setActiveSide] = useState(null);

  const handleMouseMove = (e) => {
    const container = e.currentTarget;
    const containerWidth = container.offsetWidth;
    const mouseX = e.nativeEvent.offsetX;

    if (mouseX < containerWidth * 0.5 && activeSide !== "left") {
      setActiveSide("left");
    } else if (mouseX >= containerWidth * 0.5 && activeSide !== "right") {
      setActiveSide("right");
    }
  };

  const handleMouseLeave = () => {
    setActiveSide(null);
  };

const navigate = useNavigate()

  const handleClick = () => {
    navigate('/developer')
  }


  return (
    <div className="container-profile">

        <div className="matrix-container">
          <h1 className="matrix-text" data-text="PAULO FONSECA">
            PAULO FONSECA
          </h1>
          <div className="rain"></div>

      </div>

      <div
        className="subcontainer-profile"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div
            onClick={handleClick}
          className={`half left ${activeSide === "left" ? "active" : ""}`}
        ></div>
        <div
          className={`half right ${activeSide === "right" ? "active" : ""}`}
        ></div>
      </div>
    </div>
  );
}

export default Home;
