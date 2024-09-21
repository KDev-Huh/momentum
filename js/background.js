const images = [
    "0.jpg",
    "1.jpeg",
    "2.jpg",
    "3.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const container = document.getElementById("container");

container.style.backgroundImage = `url('./img/${chosenImage}')`;

// const bgImage = document.createElement("img");
// bgImage.src = `../img/${chosenImage}`;

// document.body.appendChild(bgImage);