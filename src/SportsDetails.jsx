import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RelatedSports from "./RelatedSports";

const SportsDetails = () => {
  const [sport, setSport] = useState(null);
  const { id } = useParams();
  async function getSport() {
    try {
      const response = await fetch(
        `https://sports.api.decathlon.com/sports/${id}`
      );
      const sportData = await response.json();
      console.log(sportData.data);
      setSport(sportData.data);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getSport();
  }, []);
  //   console.log("sportDetailsId", sport.id);
  return sport ? (
    <div>
      <img
        src={sport.relationships.images.data[0].url}
        alt={sport.attributes.name}
        style={{ width: "600px" }}
      />
      <h1>{sport.attributes.name}</h1>
      <p>{sport.attributes.description}</p>
      <h2>Related Sports:</h2>
      <RelatedSports sportDetailsId={sport.id} />
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default SportsDetails;
