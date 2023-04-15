//https://api.quotable.io/random
fetch("https://api.quotable.io/random").then(res=>res.json()).then(data=>{
    var content=data.content;
    document.querySelector("#quote").innerHTML=content;
})