import Carousel from "react-bootstrap/Carousel";
import Loading from "./Loading";
import { useState, useEffect } from "react";

const CarouselHome = () => {
  const url = "https://sports.api.decathlon.com/sports/?parents_only=true";
  const [images, setImages] = useState(null);
  async function getImages() {
    try {
      const response = await fetch(url);
      const imageData = await response.json();
      setImages(imageData.data);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getImages();
  });

  return images ? (
    <Carousel style={{ padding: "1rem 3rem" }}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={images[0].relationships.images.data[0].url}
          alt="First slide"
        />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={images[15].relationships.images.data[0].url}
          alt="Second slide"
        />

        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={images[8].relationships.images.data[0].url}
          alt="First slide"
        />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  ) : (
    <Loading />
  );
};

export default CarouselHome;
