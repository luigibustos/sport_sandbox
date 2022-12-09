import { useState, useEffect } from "react";
// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Loading from "./Loading";

const RelatedSportCards = (props) => {
  //   const [singleSport, setSingleSport] = useState([]);
  const [idArr, setIdArr] = useState(null);
  const getSingleSportData = () => {
    fetch(
      `https://sports.api.decathlon.com/sports/${props.sportDetailsId}`
    ).then((response) =>
      response.json().then((response) => {
        // console.log("Single Sport Obj", response.data);
        // setSingleSport(response.data);
        relatedSportIDs(response.data);
      })
    );
  };
  useEffect(() => {
    getSingleSportData();
  }, []);

  const relatedSportIDs = (jsonData) => {
    let idArr = [];
    // console.log("Related Sport ID", jsonData);
    const idList = jsonData.relationships.related;
    for (let i = 0; i < idList.length; i++) {
      idArr.push(idList[i].data.id);
      //   console.log(idArr);
    }
    getRelatedSportsData(idArr);
    return idArr;
  };

  async function getRelatedSportsData(storedIDs) {
    let finalArr = [];
    // console.log("Get Related Sports Data with these IDs", storedIDs);
    for (let i = 0; i < storedIDs.length; i++) {
      //   console.log(`https://sports.api.decathlon.com/sports/${storedIDs[i]}`);
      const response = await fetch(
        `https://sports.api.decathlon.com/sports/${storedIDs[i]}`
      );
      const relatedSport = await response.json();
      console.log("Completed Fetch", relatedSport.data);
      finalArr.push(relatedSport.data);
    }
    return setIdArr(finalArr);
  }

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {idArr ? (
        idArr.map((id, idx) => {
          //   console.log(id.relationships.images.data[0]);
          return (
            <div key={idx}>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={
                    id.relationships.images.data[0]
                      ? id.relationships.images.data[0].url
                      : "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="
                  }
                  alt={id.attributes.name}
                />
                <Card.Body>
                  <Card.Title>{id.attributes.name}</Card.Title>
                  {/* <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text> */}
                  {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
              </Card>
            </div>
          );
        })
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default RelatedSportCards;
