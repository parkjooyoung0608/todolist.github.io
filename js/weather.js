
const API_KEY="d4b6c9764a32ae69aa442d8c7ceabfc8";
//URL 부르는 방법



//코드 10줄로 user의 위치를 알 수 있어!! 엄청나지?!?!?
function onGeoOk(position){
    // console.log(position); => 위치 정보를 가지고 있음!!
    // 열어보면 latitude, longitude 좌표정보가 있음. 고대로 긁어오면 된다.
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("You live it", lat, lon);
    // 좌표를 장소로 변환해야함!
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
    // fetch는 promise 이다. 
    // promise는 당장 뭔가 일어나지 않고 시간이 좀 걸린 뒤에 일어나는 것
    // ex. 서버에게 뭘 물어봤는데 서버가 응답하는 데 5분 걸린다면 서버의 응답을 기다려야 한다.
}
function onGeoError(){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);
// 이것만 부르면 브라우저에서 위치 좌표를 줄거야. -> wifi gps 위치 등등
//(잘 실행됐을때 실행 될 함수, 에러가 발생했을 때 실행 될 함수)