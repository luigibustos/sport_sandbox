//https://sports.api.decathlon.com/sports/:id:
// const related = card.relationships.related; // returns an array
// array of objects with (data.id)
// Components to take the related data,
// var arr1 = [1, 2, 3, 4],
//   arr2 = [2, 4],
//   res = arr1.filter((item) => arr2.includes(item));
// console.log(res);
// idArr.filter((id) => data.includes({ id: id }));

// Promise.all = [p1, p2, p3,]

//   Promise.all(
//     idArr.map((id) => {

//         return new Promise ((resolve) => {fetch(`https://sports.api.decathlon.com/sports/${id}`)
//           .then((res) => {return new res.json()})
//           .then((res) => setRelatedSports(res.data))
//           .catch("logError")
//     })
//     }
//   ).then((res) => {
//     console.log("promise res", res);
//   });
//   let SportsRelated = idArr.forEach((id) => {
//     console.log(id);
//     fetch(`https://sports.api.decathlon.com/sports/${id}`)
//       .then((res) => res.json())
//       .then((res) => {
//         setRelatedSports(res.data);
//         console.log(res.data.attributes.name);
//       });
//   });
