document.addEventListener("DOMContentLoaded", (event) => {
    console.log('%c HI', 'color: firebrick')

    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    const breedUrl = "https://dog.ceo/api/breeds/list/all"

    let dogDiv = document.querySelector("#dog-image-container");
    let breedsUl = document.querySelector("#dog-breeds");
    fetch(imgUrl)
        .then(res => res.json())
        .then((dogResp) => {
            // console.log(dogResp);
            dogResp.message.forEach((item) => {
                let dogImg = document.createElement("img")
                dogImg.src = item;
                dogDiv.append(dogImg)
            })
        })

    fetch(breedUrl)
        .then(res => res.json())
        .then((resp) => {
            // console.log(Object.keys(resp.message));
            Object.keys(resp.message).forEach((breedName) => {
                let blankLi = document.createElement("li")
                blankLi.append(breedName)
                breedsUl.append(blankLi)
            })
        })




})





