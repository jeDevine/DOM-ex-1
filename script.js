function main() {
    //grow-me
    let growingP = document.querySelector("#grow-me");
    growingP.classList.add("big");

    //shrink-me
    let shrinkP = document.querySelector("#shrink-me");
    shrinkP.classList.remove("big");

    //all <li> and log their text content to console
    let lists = document.querySelectorAll("li");
    for (let i = 0; i < lists.length; i++) {
        console.log(lists[i]);
    }

    //set href to "https://www.example.com" update text nowhere to somewhere
    let theLink = document.querySelector(".link");
    theLink.setAttribute("href", "https://www.example.com");
    let theAnchor = document.querySelector("a");
    theAnchor.innerText = "somewhere";    

    //set display of "hide-me" to none
    let hider = document.querySelector("#hide-me");
    hider.style.display = "none";

    //set display of "show-me" to block
    let shower = document.querySelector("#show-me");
    shower.style.display = "block";

    //get the text the user enters and use it to set a welcome message in the <h1> "Welcome Grant!"
    let userName = document.querySelector("#name").value;
    let welcome = document.querySelector("h1");
    welcome.innerText = `Welcome ${userName}!`;
    
}