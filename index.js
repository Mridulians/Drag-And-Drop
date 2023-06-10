console.log("hello")


// here we are selecting the 3 items of our page i.e leftbox , rightbox , and list of items.

let lists = document.getElementsByClassName("list");

let rightBox = document.getElementById("right");


let leftBox = document.getElementById("left");

let button = document.getElementById("btn");


for(list of lists){
    list.addEventListener("dragstart", function(e){
        let selected  = e.target;


         // this function is used to drap the items from left to right  box 
        rightBox.addEventListener("dragover" , function(e){
            e.preventDefault();
        });

       
        // this function is used to drop the dragged item in right box.
        rightBox.addEventListener("drop" ,function(e){
            rightBox.appendChild(selected);
            selected  =  null;
        });

        
         // this function is used to drap the items from right to  left  box 
        leftBox.addEventListener("dragover" , function(e){
            e.preventDefault();
        });

        
        // this function is used to drop the dragged item in left box.
        leftBox.addEventListener("drop" ,function(e){
            leftBox.appendChild(selected);
            selected  =  null;
        });

        
    })

}