document.addEventListener("DOMContentLoaded", function () {
    let boxContainer = document.getElementById("box-container");
    let boxCount = localStorage.getItem("boxCount");
    let filledBoxes = 0; 

    for (let i = 0; i < boxCount; i++) {
        let box = document.createElement("div");
        box.classList.add("box");
        box.style.border = "2px solid #d3d3ab"; 
        if (i === 0) { 
            box.style.borderTop = "none";
        }
    
        box.textContent = ""; 
        boxContainer.appendChild(box);
    }
    

    document.querySelector("button").addEventListener("click", function () {
        let inputField = document.getElementById("na");
        let inputValue = inputField.value.trim();

        if (inputValue !== "") {
            let boxes = document.querySelectorAll(".box");


            if (filledBoxes >= boxes.length) {
                alert("Stack is full");
                return;
            }

            let targetBox = boxes[boxes.length - 1 - filledBoxes]; 

            
            let movingElement = document.createElement("div");
            movingElement.classList.add("moving-number");
           
            movingElement.textContent = inputValue;
            document.body.appendChild(movingElement);

            
            let targetBoxRect = targetBox.getBoundingClientRect();

            
            movingElement.style.position = "absolute";
            movingElement.style.left = `${
                targetBoxRect.left + window.scrollX + targetBoxRect.width / 2 - movingElement.offsetWidth / 2
            }px`;
            
            movingElement.style.top = `0px`; 
            movingElement.style.transition = "top 2s ease-in-out"; 
            movingElement.style.color="white";

            
            setTimeout(() => {
                movingElement.style.top = `${targetBoxRect.top + window.scrollY}px`;
            }, 50);

            
            setTimeout(() => {
                document.body.removeChild(movingElement);

                
                let span = document.createElement("span");
                span.textContent = inputValue;
                span.style.display = "block";
                span.style.whiteSpace = "normal";
                span.style.wordBreak = "break-word";
                targetBox.style.color = "yellow"; 
                

                targetBox.innerHTML = ""; 
                targetBox.appendChild(span); 

                filledBoxes++; 
            }, 2500); 
            
            inputField.value = "";
        }
    });
});
let perr = document.getElementById('per');

perr.addEventListener('click', function() {
   
    let popup = document.createElement('div');
    popup.style.position = 'fixed';
    popup.style.top = '0';
    popup.style.left = '0';
    popup.style.width = '100%';
    popup.style.height = '100%';
    popup.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; 
    popup.style.display = 'flex';
    popup.style.justifyContent = 'center';
    popup.style.alignItems = 'center';


    let box = document.createElement('div');
    box.style.background = 'white';
    box.style.border = "4px solid green";
    box.style.padding = '30px';
    box.style.width = '200px';
    box.style.textAlign = 'center';
    box.style.borderRadius = '10px';
    box.style.boxShadow = '0px 4px 10px rgba(0,0,0,0.3)';

    let button1 = document.createElement('button');
    button1.textContent = "Push";
    button1.style.margin = '10px';
    
    button1.addEventListener('click', function() {
        window.open("push.html", "_blank"); 
    });
    
    document.body.appendChild(button1);

    

   

    let button2 = document.createElement('button');
    button2.textContent = "Pop";
    button2.style.margin = '10px';
    
    button2.addEventListener('click', function() {
        window.open("pop.html", "_blank"); 
    });
    
    document.body.appendChild(button2);
    
    let closeButton = document.createElement('button');
    closeButton.textContent = "Close";
    closeButton.style.display = 'block';
    closeButton.style.margin = '10px auto';
    closeButton.addEventListener('click', function() {
        popup.remove(); 
    });

  
    box.appendChild(button1);
    box.appendChild(button2);
    box.appendChild(closeButton);
    popup.appendChild(box);
    document.body.appendChild(popup);
});





