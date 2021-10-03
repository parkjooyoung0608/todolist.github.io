const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
// string오타는 잡아주지 않지만 변수명 오타는 자바스크립트에서 잡아준다.

function onLoginSubmit(event) { //자바스크립트가 가지고 있는 event 정보를 사용한다는 의미의 (event)
    event.preventDefault(); //자바스크립트 정보 (event-다른이름도 가능)에 있는 브라우저가 이벤트 기본동작을 못하도록 막는 정보
    loginForm.classList.add(HIDDEN_CLASSNAME); 
    const username = loginInput.value; //input에 입력한 value(값)을 username에 저장
    localStorage.setItem(USERNAME_KEY, username) // localstorage에 키와 함께 input에 적은 value값을 저장한다.
    paintGreetings(username); //마지막으로 paintgreetings함수를 호출하는데 input값을 인자로 넣을 것이다.
}

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
// 키에 저장된 value값을 savedUsername에 저장한다.

if(savedUsername === null){
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    //show the greetings
    paintGreetings(savedUsername);
    // value값이 더이상 null이 아닐때.
    // 다시 paintGreetings 함수로 가지만 이번에는 input 값을 가져오는게 아니다!!
    // 이번에는 paintGreetings함수가 local storage로부터 유저 정보를 받는다.
}