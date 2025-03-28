document.getElementById("button").addEventListener("click", function () {
    let inputValue = document.getElementById("yourid").value;
    
    if (inputValue && Number(inputValue) > 0) {
        localStorage.setItem("boxCount", inputValue.trim()); 
                window.location.href = "2page.html"; 
    } else {
        alert("Please enter a valid number");
    }
});
let an = document.getElementById("venaki");


an.addEventListener("mouseenter", function() {
    an.style.transform = "scale(1.1)";
    an.style.backgroundColor = "#ff6347";
    an.style.boxShadow = "0px 4px 10px rgba(255, 99, 71, 0.5)";
});


an.addEventListener("mouseleave", function() {
    an.style.transform = "scale(1)";
    an.style.backgroundColor = "orangered";
    an.style.boxShadow = "none";
});

let fixButton = document.getElementById("button");


fixButton.addEventListener("mouseenter", function () {
    fixButton.style.transform = "translate(100px) scale(1.1)"; 
    fixButton.style.backgroundColor = "#FFC107";
    fixButton.style.boxShadow = "0px 4px 10px rgba(255, 193, 7, 0.5)";
});


fixButton.addEventListener("mouseleave", function () {
    fixButton.style.transform = "translate(100px) scale(1)"; 
    fixButton.style.backgroundColor = "#FFD600"; 
    fixButton.style.boxShadow = "none";
});
