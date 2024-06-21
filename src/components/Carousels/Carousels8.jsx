import Carousel from "react-bootstrap/Carousel";
import "../../Style/Carousels/Carousels.css";

function Carousel8() {
  return (
    <div>
      <div>
        <img src="/img/hot2.avif" width={1050} alt="" />
      </div>

      <Carousel>
        <Carousel.Item>
          <img
            src="/img/7slide1.avif"
            style={{ borderRadius: "50px", paddingLeft: "15px" }}
            width={1050}
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item>
          <img src="/img/7slide2.avif" width={1050} id="" alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="/img/7slide3.avif" width={1050} alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="/img/7slide4.avif"
            style={{ borderRadius: "50px", paddingLeft: "15px" }}
            width={1050}
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item>
          <img src="/img/7slide5.avif" width={1050} alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="/img/7slide6.avif" width={1050} alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="/img/7slide7.avif" width={1050} alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="/img/7slide8.avif" width={1050} alt="" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carousel8;
