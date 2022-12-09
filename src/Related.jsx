import { useState, useEffect } from "react";
import Loading from "./Loading";
const RelatedSports = () => {
  const [related, setRelated] = useState(null);
  // const [relatedSportsData, setRelatedSportsData] = useState([]);
  const getRelatedSports = () => {
    fetch(`https://sports.api.decathlon.com/sports/281`)
      .then((res) => res.json())
      .then((res) => {
        setRelated(res.data);
        relatedIDArr();
        // promiseFunc();
      })
      .catch(console.error);
  };

  useEffect(() => {
    getRelatedSports();
  }, []);

  function relatedIDArr() {
    let idArr = [];
    if (related) {
      const relatedSports = related.relationships.related;
      for (let i = 0; i < relatedSports.length; i++) {
        idArr.push(relatedSports[i].data.id);
        console.log(idArr);
      }
    } else {
      console.log("Loading Data");
    }
    return idArr;
  }

  // function promiseFunc() {
  //   // console.log("Testing Promise Func");
  //   const finalArr = [];
  //   Promise.all(
  //     idArr.map((id) => {
  //       // console.log("Map Id", id);
  //       return new Promise((resolve) => {
  //         fetch(`https://sports.api.decathlon.com/sports/${id}`).then(
  //           (response) => {
  //             // console.log("Response", response);
  //             return new Promise(() => {
  //               response.json().then((relatedSports) => {
  //                 console.log("Related Sports Promise", relatedSports.data);
  //                 finalArr.push(relatedSports.data);
  //                 console.log(finalArr);
  //                 // setRelatedSportsData(
  //                 //   (current, sport = relatedSports.data) => [...current, sport]
  //                 // );
  //                 resolve();
  //               });
  //             });
  //           }
  //         );
  //       });
  //     })
  //   );
  //   // console.log(finalArr);
  //   if (finalArr) {
  //     setRelatedSportsData(finalArr);
  //     console.log(finalArr);
  //   }
  // }

  console.log("Object", related);
  // console.log("idArr", relatedIDArr());
  return (
    <div>
      <h1>hi</h1>
    </div>
    //   <h1>Hi</h1>
    //   {relatedSportsData ? (
    //     relatedSportsData.map((relatedSport, idx) => {
    //       return (
    //         <div key={idx}>
    //           {/* <img
    //             src={relatedSport.relationships.images.data[0]}
    //             alt={relatedSport.attributes.name}
    //           /> */}
    //           <h1>{relatedSport.attributes.name}</h1>
    //         </div>
    //       );
    //     })
    //   ) : (
    //     <Loading />
    //   )}

    // </div>
  );
};

export default RelatedSports;
