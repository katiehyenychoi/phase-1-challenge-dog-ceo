document.addEventListener("DOMContentLoaded", (event) => {
    console.log('%c HI', 'color: firebrick')

    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'

    let dogDiv = document.querySelector("#dog-image-container");
    let breedUl = document.querySelector("#dog-breeds")
    let dropdown = document.querySelector("#breed-dropdown")

    fetch(imgUrl)
        .then(res => res.json())
        .then((dogResp) => {
            // console.log(dogResp);
            dogResp.message.forEach((Image) => {

                let dogImg = document.createElement("img")
                dogImg.src = Image
                dogDiv.append(dogImg)
            })
        })


    fetch(breedUrl)
        .then(res => res.json())
        .then((response) => {
            // console.log(response)
            Object.keys(response.message).forEach((breedName) => {
                let blankLi = document.createElement("li")
                blankLi.innerText = breedName //same as // blankLi.append(breedName)
                breedUl.append(blankLi)

                blankLi.addEventListener("click", (event) => {
                    blankLi.style.color = "red"
                })
            })
        })


    dropdown.addEventListener("change", (event) => {
        fetch(breedUrl)
            .then(res => res.json())
            .then((response) => {
                let dogBreedsArr = Object.keys(response.message);
                // console.log(typeof dogBreedsArr) // object

                let filteredArray = dogBreedsArr.filter((breed) => {
                    return breed.startsWith(event.target.value)
                })
                breedUl.innerText = ""

                filteredArray.forEach((breed) => {
                    let blankLi = document.createElement("li")
                    blankLi.innerText = breed
                    breedUl.append(blankLi)
                    blankLi.addEventListener("click", (event) => {
                        blankLi.style.color = "red"
                    })
                })
            })
    })



})


