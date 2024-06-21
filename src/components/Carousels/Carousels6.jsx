import Carousel from "react-bootstrap/Carousel";
import "../../Style/Carousels/Carousels.css";

function Carousel6() {
  return (
    <div>
      <div>
        <img src="/img/Fab.avif" width={1050} alt="" />
      </div>

      <Carousel>
        <Carousel.Item>
          <img
            src="/img/5slide1.avif"
            style={{ borderRadius: "50px", paddingLeft: "15px" }}
            width={1050}
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item>
          <img src="/img/5slide2.avif" width={1050} id="" alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="/img/5slide3.avif" width={1050} alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="/img/5slide4.avif"
            style={{ borderRadius: "50px", paddingLeft: "15px" }}
            width={1050}
            alt=""
          />
        </Carousel.Item>
        <Carousel.Item>
          <img src="/img/5slide5.avif" width={1050} alt="" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carousel6;
