import { Carousel } from "react-bootstrap";

import { Link } from "react-router-dom";

function Banner() {
  return (
    <>
      <div className="banner-sec">
        <Carousel>
          <Carousel.Item>
            <img
              src="https://images.pexels.com/photos/3756962/pexels-photo-3756962.jpeg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Headphones</h3>
              <Link to="/" className="btn-comm">
                Shop Now
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://images.pexels.com/photos/3756947/pexels-photo-3756947.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Headphones</h3>
              <Link to="/" className="btn-comm">
                Shop Now
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="third-slide">
            <img src={"assets/images/banner-img3.png"} alt="Third slide" />

            <Carousel.Caption>
              <h3>Dresses</h3>
              <Link to="/" className="btn-comm">
                Shop Now
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default Banner;
