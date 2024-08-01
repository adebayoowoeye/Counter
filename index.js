let counter = document.getElementById("count-el");
let increasebtn = document.getElementById("increment-btn");
let savebtn = document.getElementById("save-btn");
let saveEl = document.getElementById("save-el");
let count = 0;

increasebtn.addEventListener("click", function() {
  count++;
  counter.textContent = count;
  
});

savebtn.addEventListener("click", function() {
    saveEl.textContent += " " + count + " - ";
    count = 0;

});
