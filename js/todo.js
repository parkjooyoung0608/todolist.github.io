const toDoFrom = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = []; //newToDo가 생길때마다 toDos로 push하고 싶어! *새로고침해도 안없어지게 저장하고 싶어!*
// todo array의 내용들을 localStorage에 저장하고 싶은데 문제는 array는 저장할 수 없다.
// localStorage는 오직 텍스트(string)만 저장 가능
// const일 경우 버그!! 어플을 시작할때 (새로고침)하면 화면에 표시는 되지만 새로운 todo를 만들게되면 localstorage에 안남고 덮어버린다.
// 이유!! toDos가 항상 빈 array이기 때문에! 빈 array에 push하게 되서 그렇다!
// 새로운것만 저장하고 이전에 있는 건 저장하지 않는다. => let으로 변경

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    //JSON.stringify() : 어떤것이던 간에 string으로 만들어준다.
    //toDos의 array값은 저장될때 숫자로 저장된다. but 우리는 array형태로 저장되기를 바란다.-> ""안에 들어가면서 array형태로 저장된다.
    //따라서 JSON.stringify를 사용하면 array값이 ""를 감싸면서 배열형태로 나타난다.
    //localStorage는 무조건 string으로 저장해야한다!!!★
    //그러면 string으로 저장한 localStorage정보를 다시 array 데이터로 가져와서 사용하려면?!?!?
    //JSON.parse()를 사용하면 된다. string을 없애주는 역활이다.
    // JSON.parse(localStorage.getItem("todos"))
    //=> ['1', '2', '3'] => 실제로 사용가능한 array로 반환한다.
    
}

function deleteToDo(event){
    //중요한 포인트! 어떤 삭제 버튼이 클리된건지 알게하기 위해서!
    // ()안에 들어가는 event는 밖에서 사용한 정보를 가져오는 것을 뜻함.
    // => 여기서는 paintToDo안에서 deleteToDo click 이벤트를 사용했기 때문에 click하면서 발생하는 event값을 가져올 수 있음!
    
    //console.log(event) 어떤 정보를 가져오는지 확인하고 싶다면 console.log활용!
    // 이말은 즉! target이 무엇인지 체크 가능하다는 뜻! 정보안에 target의 정보도 들어있다!!
    // target : parentNode or parentElement -> 타겟의 부모! 즉 클릭한 버튼의 부모 li를 찾아야 한다.
    
    //console.log(event.target.parentElement.innerText);
    // event target 지금 클릭할때 사용된 정보의 target의 paentElement 부모 엘리먼트의 innerText의 값은?

    const li = event.target.parentElement;
    li.remove();
    //이렇게하면 li는 지워지지만 localstorage에는 남아있다.
    // 따라서! ToDos의 각각의 li에게 id를 주고싶은데.. [{id:12212, text:"drink"}] 이런형식으로! 
    //그렇다면 랜덤으로 ID를 만들어 주는 방법은?! Date.now() 활용하기 => (1000/1초를 주는 함수) 핸덤숫자처럼 나옴
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id) );
    // => 우리가 클릭한 li.id와 다른 toDo는 남겨두고싶다
    // type도 같아야한다! 작동이 안된다면 type이 다른걸수도!! -> li.id를 숫자로 변경하자.
    saveToDos();
}

function paintToDo(newTodo){ //4. 내가 적은 Todo를 받아오는 함수
    //console.log("내가 할일", newTodo); // handleToDoSubmit함수의 newTodo값을 받아옴!!
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span"); //삭제하는 button을 만들기 위해 But!! li의 삭제버튼이기 때문에 li안에 있어야 한다.
    span.innerText = newTodo.text;
    //console.log(li) // li안에 span자식 안에 newTodo(내가쓴글)이 innerText로 들어가있는 모양
    const button = document.createElement("button");
    button.innerText="✖"
    button.addEventListener("click",deleteToDo)
    
    li.appendChild(span); //li의 안에 마지막위치에 span 넣기
    li.appendChild(button);
    //5. 이제 이걸 ul안에 자식으로 li가 들어가도록 넣어주어야 한다.
    toDoList.appendChild(li); // 6. ul안에 li를 자식(Child)로 넣는다. append의 경우 마지막에 추가된다.

}

function handleToDoSubmit(event){
    event.preventDefault(); // 새로고침 X
    const newTodo = toDoInput.value; //3. input value를 비우기 전에 값을 저장하기 
    toDoInput.value=""; //2. submit(enter)할때마다 빈칸넣기
    const newTodoObj = {
        text:newTodo,
        id: Date.now(),
    }
    toDos.push(newTodoObj); //7. 새로운 newToDo가 생기면 toDos array로 정보를 push! 올려줘!
    paintToDo(newTodoObj); // 5. 여기서 나온newTodo의 값을 4번 함수에게 보낸다!!!!
    saveToDos(); //8. localStorage setItem으로 얻은 정보들을 submit하면 실행해줘라!! application key value에 저장해라!
}

toDoFrom.addEventListener("submit", handleToDoSubmit);


//1. function을 사용해서 만드는 방법!
//function sayHello(item){ 
    // submit eventlistener가 event(argument)를 그냥 제공해 주는 것처럼
    // javascript는 지금 처리되고 있는 item 또한 그냥 제공해준다.

    //console.log("this is the turn of", item);
    //=> 제공되는 아이템들이이 쫘르르륵~!
//}

const savedToDos = localStorage.getItem(TODOS_KEY);
//console.log(savedToDos); => 여기까지는 그냥 string인걸 볼 수 있다.
if(savedToDos!==null){
    const parsedToDos = JSON.parse(savedToDos);
    //console.log(parsedToDos); => 여기는 사용가능한 array로 바뀐걸 볼 수 있다.
    toDos = parsedToDos;
    // toDos에 parsedToDos를 넣어서 전에 있던 toDo들을 복원한다.

    // array는 각각의 item들로 function을 실행할 수 있기 때문에 forEach를 사용할수 있다.
    // 각각의 item들에 sayHello 함수를 실행시켜줘!
    //parsedToDos.forEach(sayHello); => 1. function을 사용할 경우

    //2. 짧은 함수 단축키같은 기능으로 사용할 경우
    //parsedToDos.forEach((item) => console.log("this is the turn of", item));
    // array에 저장된 각각의 item들을 =>(arrow function)를 실행한다.

    parsedToDos.forEach(paintToDo);
}

//** X버튼 누르면 삭제되게 하기 위해선 .filter() 사용
//- filter은 forEach와 비슷하다.
//- 반드시 true를 리턴해야된다.

// function sexyFilter(){return true};
// [1,2,3,4].filter(sexyFilter);
// => [1,2,3,4] 전부 출력

// function sexyFilter(){return false}; 
// [1,2,3,4].filter(sexyFilter);
// => [] 빈 array가 출력

//function sexyFilter(item){return item !== 3}
//=> item이 3이 아니면 true를 리턴해
// 이렇게 했을때 [1,2,3,4,5].filter(sexyFilter) 를 실행하면
// => [1,2,4,5]만 나옴

// const arr = ["pizza","banana","tomato"]
// function sexyFilter(food){return food !== "banana"}
// arr.filter(sexyFilter)
// => ["pizza","tomato"] 출력됨

// 이해해야된다!! 한번 더!
// const todos = [{text:"lalala"},{text:"lololo"}]
// function sexyFilter(todo){return todo.text !== "lololo"}
// todos.filter(sexyFilter) => text:"lalala"만 출력됨

// sexyFilter(4); 를 했을 경우 
// javascript에서 자동으로 밑에처럼 출력할 것
// sexyFilter(1); = 1
// sexyFilter(2); = 2
// sexyFilter(3); = x => 3만 제외될 것
// sexyFilter(4); = 4
// 만약 새 array에서 object를 유지하고 싶으면 (만약 새 array에도 1,2,3,4를 포함하고 싶으면) true 리턴해야됨
// 반대로 false를 리턴하면 그 item은 새 array에 포함되지 않을 것이다.