window.addEventListener("DOMContentLoaded", function() {

        let tabs = document.querySelectorAll(".tabs div");
    let contents = document.querySelectorAll(".content div");

    for(let tab of tabs) {
        tab.addEventListener("click", function() {
            let activeElement = document.querySelector(".active");
            activeElement.classList.remove("active");
            this.classList.add("active");


            let index = this.getAttribute("data-id");
            for(let content of contents) {
                if (content.getAttribute("data-id") == index) {
                    content.classList.add("show");
                } else {
                    content.classList.remove("show")
                }
            }
        })    
    }

    


    let sliderImg = document.getElementById("sliderImg");
    let previous = document.getElementById("prev");
    let next = document.getElementById("next");
    let sliderContainer =document.querySelector(".slider-container");

    let images = [
        "/src/image/1.jpg",
        "/src/image/2.webp",
        "/src/image/3.webp",
        "/src/image/4.webp",
        "/src/image/5.jpg",
        "/src/image/7.jpg",
        "/src/image/8.jpg"
    ]

    
    let index = 0;

    function Slider() {
        if(index<0) {
            index = images.length - 1;
        } else if (index>=images.length) {
            index=0
        }
        sliderImg.src=images[index];
    }


    previous.addEventListener("click", function() {
        index--;
        Slider();
    });

    next.addEventListener("click", function() {
        index++;
        Slider();
    })

    let autoPlay = setInterval(function() {
        index++;
        Slider();
    },3000);

    sliderContainer.addEventListener("mouseover", function() {
        clearInterval(autoPlay);
    });

    sliderContainer.addEventListener("mouseout", function() {
        autoPlay = setInterval(function() {
            index++;
            Slider();
        },3000)
    })


   
    

const todoName = document.getElementById("input");
const addButton = document.getElementById("add-btn");
const newTask = document.getElementById("display-todo");


addButton.addEventListener("click", function addTask() {
    const taskText = todoName.value.trim();
    
    if (taskText !== "") {
        const divItem = document.createElement("div");
        divItem.classList.add("task-item");
        divItem.textContent = taskText;


        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-btn");
        deleteButton.addEventListener("click", () => {
            divItem.remove();
        });

        divItem.appendChild(deleteButton);
        newTask.appendChild(divItem);
        todoName.value = ""; 
    }
});


todoName.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});


})
