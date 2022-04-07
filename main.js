/* console.log("Hello World")
console.error("this is an error")
console.warn("This is a warning") */
/*
// VARIABLES can be done in 3 ways var, let, const
// but we don't use var because it takes only first var if we have multiple var
let age = 27; // we can reassign if we use let
age = 30;
console.log(age);

// const is for constant value that we don't change
// const newage = 36;
// newage = 39;
// console.log(newage)  //error came because it can't re-assigned
*/
// DATA TYPES STRING, NUMBERS(FLOAT, INTEGER), BOOLENA, NULL, UNDEFINED, SYMBOL
/* 
const name = "Pavan"; //string
const score = 123;
const rating = 4.5;
const iscool = true;
const x = null;
const y = undefined;
let z;

console.log(typeof z);

//CONCATINATION (TO ADD)
console.log("My name is " + name + " and I scored " + score + " runs ");
console.log(" The movie rating is " + rating);

//Templete string
const statistics = ` My name is ${name} and I scored ${score} runs`
console.log(statistics)
console.log(`The movie rating is ${rating}`) 
*/

/*
//STRING PROPERTIES AND METHODS
const s = "Hello World welcome to Javascript learning!"
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0, 5).toUpperCase());
console.log(s.split(""));
console.log(s.split(" "));
*/

/*
// ARRAYS - VARIABLES THAT HOLDS MULTIPLE VALUES
const numbers = new Array(1,2,3,4,5,6);
console.log(numbers);

const multitype = ["Pavan", "Jagadish", 27, 25, true, 3.9, ["nikil", "rani"], 23, 21];
multitype[2] = "Malli"
console.log(multitype[0].toUpperCase());
console.log(typeof multitype[6][0]);
console.log(multitype);
multitype.push(99);
multitype.unshift(27);
console.log(multitype);
console.log(Array.isArray(multitype));
console.log(Array.isArray(multitype[1]));
console.log(multitype.indexOf("Malli"));
*/

/*
//OBJECT LITERALS
const person = {
    firstname: "Pavan",
    lastname: "Kumar",
    age: "27",
    hobbies: ["cricket", "music", "gaming"],
    address: {
        houseno: 28-12-8,
        street: "suryabagh",
        city: "vizag"
    }
}

console.log(person.firstname, person.lastname);
console.log(person.hobbies[1]);
console.log(person.address.city);

//TO CONVERT ABOVE ONJECT LITERALS INTO VARIABLES
const {firstname, lastname, hobbies, address: {street}} = person;
console.log(hobbies[1]);
console.log(street);
person.email = "ddpavan333@gmail.com";
console.log(person);
*/

/*
//CREATE AN ARRAY WITH ObJECTS AND ACCESSING THE ELEMENTS IN THE OBJECT
const todos = [
    {
        id: 1,
        text:"Take out Trash",
        isCompleted: true,
    },
    {
        id: 2,
        text:"Meeting with Boss",
        isCompleted: true,
    },
    {
        id: 3,
        text:"Playing Game",
        isCompleted: false,
    }
];

console.log(todos[1].text);

//TO CONVERT ABOVE ARRAY INTO JSON FORMAT
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);
*/

/*
//FOR, WHILE LOOPS
for(let i = 0; i <= 6; i++) {
    console.log(i);
}
for(let i = 0; i <= 6; i++) {
    console.log(`For loop num: ${i}`);
}

let i = 0;
while(i < 6) {
    console.log(`while loop num: ${i}`);
    i++;
}
*/
/*
const todos = [
    {
        id: 1,
        text:"Take out Trash",
        isCompleted: true,
    },
    {
        id: 2,
        text:"Meeting with Boss",
        isCompleted: true,
    },
    {
        id: 3,
        text:"Playing Game",
        isCompleted: false,
    }
];
*/
/*
for(i = 0; i < todos.length; i++) {
    console.log(todos[i].text);
}
for(let i of todos) {
    console.log(i.id);
}
*/

/*
//HIGH ORDER ARRAY METHODS - FOREACH, MAP, FILTER
//FOREACH
todos.forEach(function(i) {
    console.log(i.text);
});

//MAP
const todoid = todos.map(function(i) {
    return i.id
});

console.log(todoid);

const todotext = todos.map(function(i) {
    return i.text
});
console.log(todotext);

//FILTER
const todocompleted = todos.filter(function(i) {
    return i.isCompleted === true;
}).map(function(i) {
    return i.text;
});

console.log(todocompleted);

// FILEER AND MAP FOR EMPLOYEE
const employee = [
    {
        name: "Pavan",
        experience: 6.5,
        company: "WSP",
    },
    {
        name: "Naidu",
        experience: 5,
        company: "CDM",
    },
    {
        name: "Nagur",
        experience: 7,
        company: "WSP",
    },
    {
        name: "Bhanu",
        experience: 6,
        company: "Arcadis",
    },
    {
        name: "Chitti",
        experience: 7.3,
        company: "WSP",
    },
    {
        name: "Sarath",
        experience: 9,
        company: "WSP",
    }
]

const expemployee = employee.filter(function(i) {
    return i.experience >= 6;
}).map(function(i) {
    return i.name;
});

console.log(expemployee);
*/

/*
//CONDITIONS IF, ELSE, ELSEIF
const x = 3;

if (x === 3) {
    console.log(`x is equal to ${x}`);
}   else if (x > 3) {
    console.log(`x is greater than ${x}`);
}   else  {
    console.log(`x is lessthan ${x}`)
}

const y = 12;
const z = 14;
if(y > 10 || z > 15) {
    console.log("y is morethan 10 or z is lessthan 15")
}

//TERINARY OPERATOR
const color = x > 5 ? "orange" : "red";
console.log(color)

switch (color) {
    case "red":
        console.log("color is red")
        break;
    case "orange":
        console.log("color is blue");
        break;
    default:
        console.log("color is NOT red or blue");
        break;
}
*/

/*
//FUNCTIONS
function addnum(num1, num2) {
    return num1 + num2;
}
console.log(addnum(3,6));

// ARROW FUNCTIONS
const subnum = (num1, num2) => num1 - num2;
console.log(subnum(9,6));

todos.forEach((i) => console.log(i.text));
todos.map((i) => console.log(i.text));
*/

/*
//CONSTRUCTOR FUNCTION
function Person(firstname, lastname, dob) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.dob = new Date(dob);
    this.getbirthyear = function() {
        return this.dob.getFullYear();
    }
    this.getfullname = function() {
        return `${this.firstname} ${this.lastname}`;
    }
}



//INSTANTIATE OBJECT
const person1 = new Person("Pavan", "kumar", "08-23-1994");
const person2 = new Person("Pavan", "cheeku", "11-25-1995")
console.log(person1);
console.log(person2.dob.getFullYear());
console.log(person1.getbirthyear());
console.log(person1.getfullname());

function Member(firstname, lastname, dob) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.dob = new Date(dob);
    Member.prototype.birthyear = function() {
        return this.dob.getFullYear;
    }
}

const member1 = new Member("jagadish", "duddu", "05-09-1996")

console.log(member1);



//CLASS WILL ALSO ADD EXTRA FUNCTIONS IN PROTOTYPE
class Person {
    constructor(firstname, lastname, dob) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.dob = new Date(dob);
    }
    birthyear() {
        return this.dob.getFullYear();
    }

    fullname() {
        return `${this.firstname} ${this.lastname}`;
    }
}

//INSTANTIATE OBJECT
const person1 = new Person("pavan", "kumar", "08-23-1994");
const person2 = new Person("siva", "kumar", "11-25-1995");

console.log(person1);
*/

/*
//SINGLE ELEMENT SELECTOR
console.log(document.getElementById("my-form"));
console.log(document.querySelector("h1")); //use always
console.log(document.querySelector(".container"));

//MULTI ELEMENT SELECTOR
console.log(document.querySelectorAll(".item")); //use always
console.log(document.getElementsByClassName("item")); // this is HTML collection not array
console.log(document.getElementsByTagName("li"));
*/
/*
//ITERATION FOR LIST ELEMENTS
const items = document.querySelectorAll(".item");
items.forEach((i) => console.log(i));
*/
/*
const ul = document.querySelector(".items");

// ul.remove();
// ul.lastElementChild.remove();
ul.firstElementChild.textContent = "Hello";
ul.children[1].innerText = "Pavan";
ul.lastElementChild.innerHTML = "<h1> Hello </h1>"

const btn = document.querySelector(".btn");
btn.style.background = "red";
*/
/*
//EVENT
const btn = document.querySelector(".btn");

// btn.addEventListener("click", (e) => {
//     console.log("click");
// });

btn.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("#my-form").style.background = "red";
    console.log(e.target.className);

});
*/

//DOM SERIES (DOCUMENT OBJECT MODEL)
// EXAMINING THE DOCUMENT OBJECT
// console.dir(document);

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// // document.title = "123";
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[3]);
// console.log(document.forms);
// console.log(document.forms[0][1]);
// console.log(document.links);
// console.log(document.images);

//SELECTORS
//GETELEMENTBYID
// console.log(document.getElementById("my-form"));
// var myform = document.getElementById("my-form");
// console.log(myform);

// console.log(document.getElementById("header-title"));
// var headertitle = document.getElementById("header-title");
// var header = document.getElementById("main-header");
// console.log(headertitle);

//METHODS
// headertitle.textContent = "Hello"
// headertitle.innerText = "bye"
// console.log(headertitle.textContent); // this is not considering style in id
// console.log(headertitle.innerText); //this is paying attention to style also
// headertitle.innerHTML = "<h3>Hello</h3>";

// headertitle.style.borderBottom = "solid 4px black";
// header.style.borderBottom = "solid 4px red";

// //GET ELEMENTS BY CLASS NAME - SELECTING MULTIPLE ITEMS
// var listitem = document.getElementsByClassName("item");
// console.log(listitem);
// console.log(listitem[1]);
// listitem[2].textContent = "Hello 3";
// listitem[1].style.fontWeight = "bold";
// listitem[0].style.backgroundColor = "red";

// //GIVES ERROR FOR CHANGING EACH ITEM BACKGROUND COLOR
// // listitem.style.backgroundColor = "#f4f4f4";

// for (var i = 0; i < listitem.length; i++) {
//     listitem[i].style.backgroundColor = "yellow";
// }

//GET ELEMENTS BY TAG NAME - SELECTING MULTIPLE TAGS
// var li = document.getElementsByTagName("li");
// console.log(li);
// console.log(li[1]);
// li[2].textContent = "Hello 3";
// li[1].style.fontWeight = "bold";
// li[0].style.backgroundColor = "red";

// //GIVES ERROR FOR CHANGING EACH ITEM BACKGROUND COLOR
// // listitem.style.backgroundColor = "#f4f4f4";

// for (var i = 0; i < li.length; i++) {
//     li[i].style.backgroundColor = "yellow";
// }

//QUERY SELECTOR -  FOR SELECTING ANY ONE ITEM OF ID, CLASS, TAG
// var header = document.querySelector("#main-header");
// header.style.borderBottom = "solid 3px red";

// var email = document.querySelector('input[id="email"]');
// email.value = "enter email";

// var Name = document.querySelector('input[id="name"]');
// Name.value = "enter name";

// var submit = document.querySelector('input[type="submit"]');
// submit.value = "send";

// var item = document.querySelector(".item");
// item.style.color = "red";

// var lastitem = document.querySelector(".item:last-child");
// lastitem.style.color = "orange";

// var nthitem = document.querySelector(".item:nth-child(2)");
// nthitem.style.color = "yellow";

// QUERY SELECTOR ALL
// var titles = document.querySelectorAll(".title");
// console.log(titles);
// titles[0].textContent = "Hello World";
// titles[1].textContent = "Login";

// var odd = document.querySelectorAll("li:nth-child(odd)");

// for (var i = 0; i < odd.length; i++) {
//     odd[i].style.backgroundColor = "yellow";
// }

// var even = document.querySelectorAll("li:nth-child(even)");

// for (var i = 0; i < even.length; i++) {
//     even[i].style.backgroundColor = "red";
// }


//TRAVERSING THE DOM
// var form = document.querySelector("#my-form");
// var title = document.querySelector(".title");
// var items = document.querySelector(".items");
// var msg = document.querySelector(".msg");
//PARENT NODE
// console.log(form.parentNode);
// console.log(title.parentNode);
// title.parentNode.style.color = "red";
// console.log(title.parentNode.parentNode);

// //PARENT ELEMENT - PARENT ELEMENT AND PARENT NODE ARE ALMOST SAME
// console.log(title.parentElement)

//CHILD NODES
// console.log(title.childNodes);
// console.log(items.childNodes); //THIS WILL INCLUDE BREAK ALSO AS A NODE

// console.log(items.children);
// console.log(items.children[1]);
// items.children[1].style.backgroundColor = "orange";
// items.children[1].textContent = "Hello";

// console.log(form.children);


// //FIRST CHILD
// console.log(items.firstChild);
// //FIRST ELEMENT CHILD
// console.log(items.firstElementChild);
// items.firstElementChild.textContent = "Pavan";
// console.log(form.firstElementChild);

// //LAST CHILD
// console.log(items.lastChild);
// //LAST ELEMENT CHILD
// console.log(items.lastElementChild);
// items.lastElementChild.style.backgroundColor = "yellow";

// //NEXTSIBLING
// console.log(form.nextSibling);

// //NEXT ELEMENT SIBLING
// console.log(form.nextElementSibling);
// console.log(msg.nextElementSibling);

// //PREVIOUS ELEMENT SIBLING
// console.log(msg.previousSibling);
// console.log(msg.previousElementSibling);
// msg.previousElementSibling.style.color = "red";

// CREATE ELEMENT
// var newdiv = document.createElement("div");

// newdiv.className = "Hello"; //add class

// newdiv.id = "Hello1"; //add ID

// //ADD ATTRIBUTE
// newdiv.setAttribute("title", "Hello Div");

// // CREATE TEXT NODE
// var newdivtext = document.createTextNode("Hello World");

// //ADD TEXT TO DIV
// newdiv.appendChild(newdivtext);

// //ADD NEW DIV INTO DOM
// var myform = document.querySelector("#my-form");
// var h1 = document.querySelector(".title1");

// console.log(newdiv)

// myform.insertBefore(newdiv, h1);
// newdiv.style.fontSize = "50px";

//EVENTS
// var button = document.getElementById("button").addEventListener("click", function(){
//     console.log(123);
// });

// var button = document.getElementById("button").addEventListener("click", buttonClick);


// function buttonClick(p){
    // console.log("Button Clicked");
    // document.getElementById("header-title").textContent = "Changed";
    // document.querySelector("#main-header").style.backgroundColor = "red"
    // console.log(p);
    // console.log(p.target);
    // console.log(p.target.id);
    // console.log(p.target.className);
    // console.log(p.target.classList);
    // var output = document.getElementById("output");
    // output.innerHTML = "<h3>"+p.target.id+"</h3>"
    // console.log(p.type);

    // console.log(p.clientX);
    // console.log(p.clientY);
    // console.log(p.offsetX);
    // console.log(p.offsetY);

    // console.log(p.altKey);
    // console.log(p.ctrlKey);
    // console.log(p.shiftKey);
// }

// var button = document.getElementById("button");
// var box = document.getElementById("box");
// button.addEventListener("click", runevent);
// button.addEventListener("dblclick", runevent);
// button.addEventListener("mousedown", runevent);
// button.addEventListener("mouseup", runevent);

// box.addEventListener("mouseenter", runevent);
// box.addEventListener("mouseleave", runevent);

// box.addEventListener("mouseover", runevent);
// box.addEventListener("mouseout", runevent);

// box.addEventListener("mousemove", runevent);

// var iteminput = document.querySelector('input[type="text"]');
// var form = document.querySelector("#my-form");
// var select = document.querySelector("select");

// iteminput.addEventListener("keydown", runevent);
// iteminput.addEventListener("keyup", runevent);
// iteminput.addEventListener("keypress", runevent);

// iteminput.addEventListener("focus", runevent);
// iteminput.addEventListener("blur", runevent);

// iteminput.addEventListener("cut", runevent);
// iteminput.addEventListener("paste", runevent);

// iteminput.addEventListener("input", runevent);

// select.addEventListener("change", runevent);
// form.addEventListener("submit", runevent);




// function runevent(e) {
//     e.preventDefault();
//     console.log("Event Type: "+e.type);

    // console.log(e.target.value);
    // document.getElementById("output").innerHTML = "<h2>"+e.target.value+"</h2>";


    // output.innerHTML = "<h3>MouseX: "+e.offsetX+" </h3><h3>MouseY: "+e.offsetY+ "</h3>";

    // box.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",40)";
    // document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",40)";
//}





//NEW PROJECT
var form = document.getElementById("addform");
var itemlist = document.getElementById("items");
var filter = document.getElementById("filter");

//FORM SUBMIT EVENT
form.addEventListener("submit", additem);

//DELETE EVENT
itemlist.addEventListener("click", removeitem);

//FILTER EVENT
filter.addEventListener("keyup", filteritems);





//ADD ITEM
function additem(e){
    e.preventDefault();

    //GET INPUT VALUE
    var newitem = document.getElementById("item").value;

    //CREATE NEW LI ELEMENT
    var li = document.createElement("li");
    //ADD CLASS NAME TO IT
    li.className = "list-group-item";
    //ADD TEXT NODE WITH INPUT VALUE
    li.appendChild(document.createTextNode(newitem));

    //CREATE DEL BUTTON
    var deletebtn = document.createElement("button");

    //ADD CLASS NAME TO IT
    deletebtn.className = "btn btn-danger btn-sm float-right delete";

    //APPEND TEXT NODE
    deletebtn.appendChild(document.createTextNode("x"));

    //APPEND BUTTON TO LI
    li.appendChild(deletebtn);

    //APPEND LI TO LIST
    itemlist.appendChild(li);
}

//REMOVE ITEM
function removeitem(e){
    if(e.target.classList.contains("delete")){
        if(confirm("Are you sure")){
            var li = e.target.parentElement;
            itemlist.remove(li);
        }
    }
}

// FILTER ITEMS
function filteritems(e){
    //convert text to lowercase
    var text = e.target.value.tolowerCase();
   //get LIs
   var items = itemlist.getElementsByTagName("li");
   //convert to an array
   Array.from(items).forEach(function(i){
       var itemname = itemlist.firstChild.textContent;
       if(itemname.toLowerCase().indexOf(text) != -1){
           i.style.display = "block";
       } else {
           i.style.display = "none";
       }
   })
}





