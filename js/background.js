const images = ["선호찡1.jpg","선호찡2.jpg","선호찡3.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)]

// element를 만들어줘!
const bgImage = document.createElement("img");
// <img> 출력

// 만들어진 <img>에 scr를 추가해줘!
bgImage.src = `img/${chosenImage}`;
// <img src="img/선호찡3.jpg"> 출력


// 이제 마지막! body에 추가해줘
document.body.appendChild(bgImage)
// appendChild는 body에 html을 추가한다.