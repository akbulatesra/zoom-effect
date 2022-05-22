const container = document.getElementById("container");
const pic = document.querySelector("img");
//mouse resimin uzerine geldiginde zoom yapasini sagliyor
container.addEventListener("mousemove", (e) => {
    const x = e.clientX - e.target.offsetLeft;
    const y= e.clientY - e.target.offsetTop;

    console.log(x,y)

    pic.style.transformOrigin = `${x}px ${y}px`;
    pic.style.transform = "scale(2)"
})
// mouse resmin uzerinden ayrildigi zaman eski haline dönmesini sagliyor
container.addEventListener("mouseleave", () => {
    pic.style.transformOrigin = "center center"
    pic.style.transform = "scale(1)"
})
// resimin uzerinde cift tiklandiginde ekranda yazi belirmesini sagliyor
container.addEventListener("dblclick", (e) =>{
    const winner = document.createElement("span");
    winner.classList.add("winner");
    const myText = document.createTextNode("Tebrikler Kediyi Buldunuz!");
    winner.appendChild(myText);
    container.appendChild(winner);

})