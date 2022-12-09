## Project Description 
All Sports { AS }, is an online encyclopedia for sports. Through this web application, a user can learn about new sports and view images and details about the sport they select. 

## Link to the API you plan to use
> API link https://sports.api.decathlon.com/sports/?parents_only=true

## Example data response you plan to use
Example Call: 
```
  const url = 'https://sports.api.decathlon.com/sports/?parents_only=true'
    const [ data, setData ] = useState([])
    async function getSportData() {
        try {
            const response = await fetch(url)
            const sportsData = await response.json()
            // console.log(sportsData)
            setData(sportsData)
    } catch(err) {
        console.log(err)
    }
}
    useEffect(() => {
        getSportData()
    }, [])
```
Example Data: 
```json
{
            "id": 282,
            "type": "sports",
            "attributes": {
                "name": "Road cycling",
                "description": "Recreational and touring activity, but also a very competitive sport, road cycling is practiced in groups with an individual classification. You have to show all your endurance to ride long distances, but also be very tactical to protect yourself from the wind and conserve some energy. Will you have enough power for the final sprint?",
                "parent_id": null,
                "decathlon_id": 282,
                "slug": "road-cycling",
                "locale": "en",
                "weather": [],
                "icon": "https://sports-api-production.s3.amazonaws.com/uploads/sport/icon/282/282.svg"
            },
            "relationships": {
                "children": [
                    {
                        "data": {
                            "id": 258,
                            "type": "sports"
                        },
                        "links": {
                            "self": "/sports/258"
                        }
                    },
                    {
                        "data": {
                            "id": 283,
                            "type": "sports"
                        },
                        "links": {
                            "self": "/sports/283"
                        }
                    },
                    {
                        "data": {
                            "id": 19,
                            "type": "sports"
                        },
                        "links": {
                            "self": "/sports/19"
                        }
                    }
                ],
                "parent": {
                    "data": {}
                },
                "group": {
                    "data": {
                        "id": 11,
                        "type": "groups"
                    },
                    "links": {
                        "self": "/groups/11"
                    }
                },
                "related": [
                    {
                        "data": {
                            "id": 258,
                            "type": "sports",
                            "weight": "0.555975993818598"
                        },
                        "links": {
                            "self": "/sports/258"
                        }
                    },
                    {
                        "data": {
                            "id": 659,
                            "type": "sports",
                            "weight": "0.385238922015507"
                        },
                        "links": {
                            "self": "/sports/659"
                        }
                    },
                    {
                        "data": {
                            "id": 285,
                            "type": "sports",
                            "weight": "0.38307271996933"
                        },
                        "links": {
                            "self": "/sports/285"
                        }
                    },
                    {
                        "data": {
                            "id": 662,
                            "type": "sports",
                            "weight": "0.330794383545505"
                        },
                        "links": {
                            "self": "/sports/662"
                        }
                    },
                    {
                        "data": {
                            "id": 20,
                            "type": "sports",
                            "weight": "0.309739191449537"
                        },
                        "links": {
                            "self": "/sports/20"
                        }
                    },
                    {
                        "data": {
                            "id": 656,
                            "type": "sports",
                            "weight": "0.307542969962419"
                        },
                        "links": {
                            "self": "/sports/656"
                        }
                    },
                    {
                        "data": {
                            "id": 660,
                            "type": "sports",
                            "weight": "0.281105997162769"
                        },
                        "links": {
                            "self": "/sports/660"
                        }
                    },
                    {
                        "data": {
                            "id": 19,
                            "type": "sports",
                            "weight": "0.269129736675578"
                        },
                        "links": {
                            "self": "/sports/19"
                        }
                    },
                    {
                        "data": {
                            "id": 661,
                            "type": "sports",
                            "weight": "0.232396505753174"
                        },
                        "links": {
                            "self": "/sports/661"
                        }
                    },
                    {
                        "data": {
                            "id": 281,
                            "type": "sports",
                            "weight": "0.22137501389301"
                        },
                        "links": {
                            "self": "/sports/281"
                        }
                    }
                ],
                "context": {
                    "data": {}
                },
                "tags": {
                    "data": [
                        "road-bicycle-racing",
                        "city-biking",
                        "cyclist",
                        "touring",
                        "city-bike",
                        "urban-cycling",
                        "racing-cyclist",
                        "bike",
                        "road",
                        "racing",
                        "race",
                        "EN_PLAYLIST_workout-solo",
                        "EN_PLAYLIST_wheels-on",
                        "EN_PLAYLIST_cardio",
                        "EN_PLAYLIST_explore-travel"
                    ]
                },
                "images": {
                    "data": [
                        {
                            "url": "https://sports-api-production.s3.amazonaws.com/uploads/sport/images/282/roadcycling.jpg",
                            "variants": [
                                {
                                    "thumbnail": {
                                        "url": "https://sports-api-production.s3.amazonaws.com/uploads/sport/images/282/thumbnail_roadcycling.jpg"
                                    },
                                    "medium": {
                                        "url": "https://sports-api-production.s3.amazonaws.com/uploads/sport/images/282/medium_roadcycling.jpg"
                                    }
                                }
                            ]
                        }
                    ]
                }
            },
            "links": {
                "self": "/sports/282"
            }
        },
        {
            "id": 284,
            "type": "sports",
            "attributes": {
                "name": "Hybrid biking",
                "description": "Combining features of road bikes and mountain bikes, hybrid biking is what you need to ride into the city, on long roads and even venture on more winding paths. Excellent recreational sport, the hybrid bike is also required during competitions, for example in cyclocross, practiced on outdoor circuits with obstacles.",
                "parent_id": null,
                "decathlon_id": 284,
                "slug": "hybrid-biking",
                "locale": "en",
                "weather": [],
                "icon": "https://sports-api-production.s3.amazonaws.com/uploads/sport/icon/284/284.svg"
            },
            "relationships": {
                "children": [
                    {
                        "data": {
                            "id": 659,
                            "type": "sports"
                        },
                        "links": {
                            "self": "/sports/659"
                        }
                    },
                    {
                        "data": {
                            "id": 23,
                            "type": "sports"
                        },
                        "links": {
                            "self": "/sports/23"
                        }
                    }
                ],
                "parent": {
                    "data": {}
                },
                "group": {
                    "data": {
                        "id": 11,
                        "type": "groups"
                    },
                    "links": {
                        "self": "/groups/11"
                    }
                },
                "related": {
                    "data": {}
                },
                "context": {
                    "data": {}
                },
                "tags": {
                    "data": [
                        "cyclocross",
                        "road-bike",
                        "touring-bike",
                        "mountain-bike",
                        "trekking-bike",
                        "cross-bike",
                        "commuter-bike",
                        "city-bike",
                        "comfort-bike",
                        "cycling",
                        "cyclist",
                        "EN_PLAYLIST_wheels-on",
                        "EN_PLAYLIST_cardio",
                        "EN_PLAYLIST_explore-travel"
                    ]
                },
                "images": {
                    "data": [
                        {
                            "url": "https://sports-api-production.s3.amazonaws.com/uploads/sport/images/284/hybrid.jpg",
                            "variants": [
                                {
                                    "thumbnail": {
                                        "url": "https://sports-api-production.s3.amazonaws.com/uploads/sport/images/284/thumbnail_hybrid.jpg"
                                    },
                                    "medium": {
                                        "url": "https://sports-api-production.s3.amazonaws.com/uploads/sport/images/284/medium_hybrid.jpg"
                                    }
                                }
                            ]
                        }
                    ]
                }
            },
            "links": {
                "self": "/sports/284"
            }
        },
```

## Visual of your component hierarchy
```
App
        ├── Homepage/
        │   ├── NavBar
        │   ├── SportCarousel
        │   ├── SportsCards
        │   └── Footer
        └── SportDetails/
            ├── NavBar
            ├── SportCarousel
            ├── RelatedSports
            └── Footer
```
## Wire Frames

Homepage:
![Screen Shot 2022-12-05 at 5 25 05 PM](https://user-images.githubusercontent.com/102126687/205792329-ead10e59-2582-4742-9db8-9770b7c5a817.png)

Sports Details Page: 
![Screen Shot 2022-12-05 at 5 25 12 PM](https://user-images.githubusercontent.com/102126687/205792354-4b3bff12-4fb4-4a5d-8548-554712985bf1.png)

Loading Component: 
![Screen Shot 2022-12-05 at 5 30 06 PM](https://user-images.githubusercontent.com/102126687/205792380-31425742-972d-4f4d-85a2-e72744945199.png)

404 Component: 
![Screen Shot 2022-12-05 at 5 30 11 PM](https://user-images.githubusercontent.com/102126687/205792407-e9b1c4eb-6172-441d-ba51-31c1406a3ebe.png)

## User Stories
We want our user experience to be one of sports excitement. In our website you can look over hundreds of different kinds of sports and find fun facts and details about the sport. When you click on an image card it will send you to the sports detail page that shows you a description, images, and related sports that are similar in nature. This is an encyclopedia of sports knowledge from fun fatcs to world records. You will be able to look at where the sports are prominent within your area

### MVP Goals
1. Create Two Pages
2. Create _at least_ four componenets
    1. Navigation 
    2. Image Carousel
    3. Sport Cards
    4. Footer
    5. 404 Not Found
    6. Loading componenet
3. Pull data from an external
4. Render API data into Cards

### Stretch Goals (if applicable)
1. Adding an API that displays the prominent sports around your area but also in other areas you would like to search.
2. Adding an API that displays historical facts about that sport such as world records, popular players, and most wins/loses.
3.Have a comparison on which sports are the most active or expend the most energy. Ones that use the most endurance or are more mentally challenging. 