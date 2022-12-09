import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Loading from "./Loading";
// import Tags from "./Tags";
import CarouselHome from "./Carousel";
import { Link } from "react-router-dom";

const Sports = () => {
  const url = "https://sports.api.decathlon.com/sports/?parents_only=true";
  const [data, setData] = useState([]);
  async function getSportData() {
    try {
      const response = await fetch(url);
      const sportsData = await response.json();
      // console.log("overall data", sportsData.data);
      setData(sportsData.data);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getSportData();
  }, []);
  //   console.log(data);

  return (
    <div>
      <CarouselHome />
      <Container fluid className="cards">
        {data.map((sport, idx) => {
          const sportImgs = sport.relationships.images.data[0].url;
          return data ? (
            <Link to="/related" key={idx}>
              <div className="card">
                <Card border="info" style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src={sportImgs}
                    alt={sport.attributes.name}
                    style={{ width: "100%" }}
                  />
                  <Card.Body>
                    <Card.Title>{sport.attributes.name}</Card.Title>
                    {/* <Card.Text>{sport.attributes.description}</Card.Text> */}
                    {/* <Card.Text>
                    <Tags id={sport.id} />
                  </Card.Text> */}
                    <Button variant="outline-secondary">
                      Learn More About: {sport.attributes.name}
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            </Link>
          ) : (
            <Loading />
          );
        })}
      </Container>
    </div>
  );
};

export default Sports;
