var cursor = document.querySelector(".cursor");
var main = document.querySelector("#intro"); 
var ele = document.querySelectorAll(".ele");
var img = document.querySelector(".ele img");

main.addEventListener("mousemove", (dets) => {
    cursor.style.left = dets.x  +"px";
    cursor.style.top = dets.y +"px";
    
    if(dets.y >= 353){
        cursor.style.opacity = 0;
    }else {
        cursor.style.opacity = 1;
    }
})

ele.forEach(e => {
    console.log(e.childNodes[3]);

    e.addEventListener("mousemove", (val) => {
        e.childNodes[3].style.left = val.x + "px";
    })

    e.addEventListener("mouseenter", () => {
        e.childNodes[3].style.opacity = 1;
    })
    e.addEventListener("mouseleave", () => {
        e.childNodes[3].style.opacity = 0;
    })
});

