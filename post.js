count=0;
function like(){
    count=count+1;
    document.getElementById("like").innerText="Liked";
    document.getElementById("counter").innerHTML=count+" "+"person liked it";
}
function edit(){
    document.getElementById("edit").innerText="Save";
    document.getElementsByClassName("post-text")[0].style.border="2px solid blue";
    document.getElementsByClassName("post-text")[0].contentEditable="true";
    document.getElementsByClassName("title")[0].style.border="2px solid blue";
    document.getElementsByClassName("title")[0].contentEditable="true";

    
}