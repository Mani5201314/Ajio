import Carousel from "react-bootstrap/Carousel";
import "../../Style/Carousels/Carousels.css";

function Carousels3() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          src="/img/2slide1.avif"
          width={1050}
          alt=""
        />
      </Carousel.Item>
      <Carousel.Item>
        <img src="/img/2slide2.avif" width={1050} id="" alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="/img/2slide3.avif" width={1050} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="/img/2slide4.webp"
          style={{ borderRadius: "50px", paddingLeft: "15px" }}
          width={1050}
          alt=""
        />
      </Carousel.Item>
      <Carousel.Item>
        <img src="/img/2slide5.avif" width={1050} alt="" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousels3;
