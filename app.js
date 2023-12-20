let button = document.getElementById("check");
let buttonRemove = document.getElementById("remove");
let innerText = document.getElementById("input");

let list = [
    "Балабай",
    "Мадина",
    "Талгат",
    "Бибигуль",
    "Нурасыл",
    "Еркежан",
    "Нургазы",

];
let paragraph = document.createElement("p");
paragraph.textContent = `Список людей: ${list}`;
paragraph.style.background = "grey";
document.body.append(paragraph);

/*1- push */
button.addEventListener("click", myFunction);
function myFunction() {
    list.push(innerText.value);
    paragraph.textContent = `Список людей: ${list}`;
}

/*2- pop */
buttonRemove.addEventListener("click", functionRemove);
function functionRemove() {
    list.pop();
    paragraph.textContent = `Список людей: ${list}`;
}

/* 3- concat */
var countries = ["Казахстан", "Корея", "Турция"];
var cities = ["Алматы", "Актау", "Астана"];
let paragraphCountries = document.createElement("p");
paragraphCountries.textContent = `Список стран: ${countries}`;
document.body.append(paragraphCountries);
let paragraphCities = document.createElement("p");
paragraphCities.textContent = `Список стран: ${cities}`;
document.body.append(paragraphCities);
let buttonJoin = document.getElementById("join");
buttonJoin.addEventListener("click", functionConcat);
function functionConcat() {
    let all = countries.concat(cities);
    let paragraphJoined = document.createElement("p");
    paragraphJoined.textContent = `Список стран и городов: ${all}`;
    document.body.append(paragraphJoined);
}

/* 4- reverse */
let buttonReverse = document.getElementById("checkReverse");
let innerTextReverse = document.getElementById("inputReverse");
buttonReverse.addEventListener("click", functionReverse);
function functionReverse() {
    let split = innerTextReverse.value.split(" ");
    split.reverse();
    let reversedText = split.join(" ");
    let paragraphReverse = document.createElement("p");
    paragraphReverse.textContent = `Перевернутый текст: ${reversedText}`;
    document.body.append(paragraphReverse);
}

/* 5- map */
var names = ["Нургазы", "Мерей", "Сауле", "Айдархан"];
let paragraphMapList = document.createElement("p");
paragraphMapList.textContent = `Изначальный текст ${names}`;
document.body.append(paragraphMapList);
var nameLengths = names.map(function (name) {
    return name.length;
});
let paragraphMap = document.createElement("p");
paragraphMap.textContent = `Преобразование текста в количество символов: ${nameLengths}`;
document.body.append(paragraphMap);

/*6- slice */
let paragraphSlice = document.createElement("p");
paragraphSlice.textContent = `метод slice: ${names.slice(2)}`;
document.body.append(paragraphSlice);

/*7- shift */
let shifted = names.shift();
let paragraphShifted = document.createElement("p");
paragraphShifted.textContent = `метод shifted: ${names}`;
document.body.append(paragraphShifted);
let paragraphShiftedDeleted = document.createElement("p");
paragraphShiftedDeleted.textContent = `Удаленный элемент: ${shifted}`;
document.body.append(paragraphShiftedDeleted);


/*let arr=["Талгат","Бибигуль","Нурасыл","Еркежан"]
let newArr=[...arr, "Нургазы"]
console.log(newArr)*/

/*function sum(...nums) {
let result=0;
for (num of nums) {
    result+=num;
}
console.log(result)
}*/

/*let arr=["Сауле","Мадина","Балабай","Талгат","Бибигуль","Нурасыл","Еркежан"]
for(i in arr){
    console.log(i)
}
for(el of arr){
    console.log(el)}*/






/*
let arr = ["Балабай", "Мадина", "Нургазы", "Талгат", "Бибигуль", "Нурасыл", "Еркежан"]
function deleteStud(deleteName) {
    let namberof = indexof(deleteName)
    arr.splice(namberof, 1)
    console.log(arr)
}
deleteStud("Нургазы")*/


