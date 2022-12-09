import { useState, useEffect } from "react";
const Tags = ({ id }) => {
  const url = "https://sports.api.decathlon.com/sports/";
  const [cardTags, setCardTags] = useState([]);
  async function getTagData() {
    try {
      const response = await fetch(url + id);
      const sportData = await response.json();
      setCardTags(sportData.data);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getTagData();
  }, []);
  console.log(cardTags);
  const tagsData = cardTags.relationships.tags.data;
  return (
    <div>
      <h1>Tags List:</h1>
      {tagsData.map((tag) => {
        return <p>{tag}</p>;
      })}
    </div>
  );
};

export default Tags;
