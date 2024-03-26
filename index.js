// Write your solution here!
const cats = ["Milo","Otis","Garfield"];
(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });
function destructivelyAppendCat(name){
 cats.push("Ralph")
}
(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });
function destructivelyPrependCat(name){
 cats.unshift("Bob")
}
(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });
function destructivelyRemoveLastCat(name){
 cats.pop("Ralph")
}
function destructivelyRemoveFirstCat(name){
 cats.shift("Bob")
}
(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });
function appendCat(name){
 const copyCats = [...cats, "Broom"];
 return copyCats;
}
(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });
function prependCat(name){
 const copyCats = ["Arnold", ...cats];
 return copyCats;
}
(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

function removeLastCat(name){
   return cats.slice(0, -1)
}
(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

function removeFirstCat(name){
   return cats.slice(1)
}
 

