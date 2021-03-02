/*
You will create a 'Now Playing' wall for a theatre to show movies they are showing
They will be able to update the now playing list with new movies when they want to

1. You will need arrays to store the movie titles and poster image links
2. Display each movie in the array with it's poster
  - forEach loops are very useful here, but you can still do without it
3. Create a simple input section for new movies
4. New movies should become the first element of the array
5. The last movie in the array should be removed when adding a new movie
6. Once a movie is added, the page should refresh with the new movies showing

GOOD LUCK 🤹‍♂️
*/

// 1. Create arrays for movie title and poster links
// 2. Create button that updates the page
    // a. add new title and links to arrays
    // b. delete last elements on arrays
    // c. show it on the page using innerHTML
const number = [1,2,3,4,5,6]
    
const movie = ['Star War', 'Black Panther', 'Avengers: Endgame', 'Parasite', 'A star is born','Soul']

const movieURL = ['https://i.ebayimg.com/images/g/UoYAAOSwDkpbHUo-/s-l300.jpg', 'https://i.pinimg.com/originals/4f/89/3c/4f893ce0705c9a0e32336da67e098051.jpg', 'https://images-na.ssl-images-amazon.com/images/I/81ai6zx6eXL._AC_SL1304_.jpg', 'https://pbs.twimg.com/media/ETz39rqUEAApz40.jpg', 'https://images-na.ssl-images-amazon.com/images/I/51R-TU6VaTL._AC_UL600_SR405,600_.jpg', 'https://i.pinimg.com/originals/7a/90/de/7a90de9d8398afeb256242cb96df1627.png', 'https://images-na.ssl-images-amazon.com/images/I/71wtexfLmDL._AC_SL1200_.jpg' ]



document.querySelector(".sixMovie").innerHTML = `<div class="movieContainer"><p class="number">${number[0]}</p><img src="${movieURL[0]}"><p class="name">${movie[0]}</p></div> <div class="movieContainer"><p class="number">${number[1]}</p><img src="${movieURL[1]}"><p class="name">${movie[1]}</p></div> <div class="movieContainer"><p class="number">${number[2]}</p><img src="${movieURL[2]}"><p class="name">${movie[2]}</p></div> <div class="movieContainer"> <p class="number">${number[3]}</p><img src="${movieURL[3]}"><p class="name">${movie[3]}</p></div> <div class="movieContainer"><p class="number">${number[4]}</p><img src="${movieURL[4]}"><p class="name">${movie[4]}</p></div> <div class="movieContainer"><p class="number">${number[5]}</p><img src="${movieURL[5]}"><p class="name">${movie[5]}</p><div>`


function Add(){


    var NewName= document.querySelector("#NewName").value;
    movie.unshift(NewName)
    movie.pop()

    var NewWeb= document.querySelector("#NewWeb").value;
    movieURL.unshift(NewWeb)
    movieURL.pop()

    document.querySelector(".sixMovie").innerHTML = `<div class="movieContainer"><p class="number">${number[0]}</p><img src="${movieURL[0]}"><p class="name">${movie[0]}</p></div> <div class="movieContainer"><p class="number">${number[1]}</p><img src="${movieURL[1]}"><p class="name">${movie[1]}</p></div> <div class="movieContainer"><p class="number">${number[2]}</p><img src="${movieURL[2]}"><p class="name">${movie[2]}</p></div> <div class="movieContainer"> <p class="number">${number[3]}</p><img src="${movieURL[3]}"><p class="name">${movie[3]}</p></div> <div class="movieContainer"><p class="number">${number[4]}</p><img src="${movieURL[4]}"><p class="name">${movie[4]}</p></div> <div class="movieContainer"><p class="number">${number[5]}</p><img src="${movieURL[5]}"><p class="name">${movie[5]}</p><div>`

}


// when you push the add button....
// 1. Get the value from the inputs and store them in variables
// 2. Update the arrays
//      - Add new movie to front
//      - Delete the last one
// 3. Update your page