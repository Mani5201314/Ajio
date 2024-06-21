import Carousel from "react-bootstrap/Carousel";

function Carousels10() {
  return (
    <div>
      <div>
        <img src="/img/Toe.avif" width={1050} alt="" />
      </div>
      <div>
        <Carousel>
          <Carousel.Item interval={1000} className="d-flex">
            <img src="/img/10slide1.avif" width={260} height={350} alt="" />
            <img src="/img/10slide2.avif" width={260} height={350} alt="" />
            <img src="/img/10slide3.avif" width={260} height={350} alt="" />{" "}
            <img src="/img/10slide4.avif" width={260} height={350} alt="" />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img src="/img/10slide5.avif" width={260} height={350} alt="" />
            <img src="/img/10slide6.avif" width={260} height={350} alt="" />
            <img src="/img/10slide7.avif" width={260} height={350} alt="" />{" "}
            <img src="/img/10slide1.avif" width={260} height={350} alt="" />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Carousels10;
