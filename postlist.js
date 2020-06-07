
function delete_post(){
    
    // var post=document.getElementById("this.id");
    // console.log("Delete is clicked")
    // post.style.display="none";
}

function luv(clicked_icon){
    console.log(clicked_icon)
    var clicked=document.getElementById(clicked_icon);
    var r1=clicked.closest(".post-layout");
    console.log(r1);
    r1.style.display="none";
    // clicked.style.display="none";
    // var modal1=document.getElementById("modal")
    // console.log("Delete is clicked");
    // modal1.style.display="block";
    

}