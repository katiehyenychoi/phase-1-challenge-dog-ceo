document.addEventListener("DOMContentLoaded", (event) => {
    console.log('%c HI', 'color: firebrick')

    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

    let dogDiv = document.querySelector("#dog-image-container");
    let dogUl = document.querySelector("div")

    fetch(imgUrl)
        .then(res => res.json())
        .then((dogResp) => {
            console.log(dogResp);
            let dogImg = document.createElement("img")
            dogImg.src = dogResp.message[0]

            dogDiv.append(dogImg)




        })

})


