
const arr=["😂"," 😆 ","😅","😁","🤣"];

let emojiBox=document.getElementById("emoji");
let jokeBox=document.getElementById("joke");
const btn=document.getElementById("btn");

const url="https://v2.jokeapi.dev/joke/Any?type=single";

const getJoke=()=>{
     emojiBox.innerHTML=arr[(Math.floor(Math.random() * arr.length))];
     fetch(url)
     .then(res=>res.json())
      .then(data=>{
        jokeBox.textContent= `${data.joke}`;
      })
}

btn.addEventListener("click",getJoke);