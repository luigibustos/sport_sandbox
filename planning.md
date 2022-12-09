# Project 2
## Overview 

## Basic Structure

### Reusable Components
1. Nav 
2. Footer
3. Loading Comp 
4. 404 Comp

### Pages
1. Home / App.js
    1. Nav*
    1. Main Section - Intro to Homepage, website, video or picture 
    1. Media Section - Videos/Pictures/clickable links -> 
    1. Footer*
2.  Sport Details Page
    1. Nav*
    1. Sport Title
        1. Example: sport.attributes.name
    1. Sport Description
        1. Example: sport.attributes.description
    1. Sport Image
        1. Example: sport.relationships.images.data[0].url
    1. Related Sports
        1. Example: sports.relationships.related
    1. Footer* 
    


## API - Decathlon Developers Sports API
Fetch URL https://sports.api.decathlon.com/sports/?parents_only=true

Documentation https://developers.decathlon.com/products/sports/docs

### Important API Keys
1. name
2. description
3. id
4. icon

## Project 2 Proposal

## Project Description 

> A short description of your project.
All Sports { AS }, 

## Link to the API you plan to use
> Primary API link: https://sports.api.decathlon.com/sports/?parents_only=true

## Example data response you plan to use

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
> Copy and paste or drag and drop your images here.

## User Stories

We want our user experience to be one of sports excitement. In our website you can look over hundreds of different kinds of sports and find fun facts and details about the sport. When you click on an image card it will send you to the sports detail page that shows you a description, images, and related sports that are similar in nature. This is an encyclopedia of sports knowledge from fun fatcs to world records. You will be able to look at where the sports are prominent within your area

## User Stories Update: 

- As a user, I want to view a list of sports at the home page and select the sport I am interested in learning about.  
- As a user, when I click on a sport on the homepage, the website will take me to a Sport Details page that displays more information about the sport and example pictures of the sport. 
- As a user, when I am viewing the sport details page, I want to be able to view the related sports and click the related sport cards to learn more about the related sport. 


### MVP Goals

1. Create Two Pages
    1. Home Page 
        1. Nav
        2. Carousel
        3. Sport Image Cards
        4. Footer
    2. Sport Details Page
        1.
2. Create _at least_ four componenets
    1. Navigation 
    2. Image Carousel
    3. Sport Cards
    4. Footer
    5. 404 Not Found
    6. Loading componenet

### Stretch Goals (if applicable)

1. Adding an API that displays the prominent sports around your area but also in other areas you would like to search.
2. Adding an API that displays historical facts about that sport such as world records, popular players, and most wins/loses.
3.Have a comparison on which sports are the most active or expend the most energy. Ones that use the most endurance or are more mentally challenging. 