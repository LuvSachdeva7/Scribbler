
function close_signup_modal() {
    var signup_modal = document.getElementById("signup_page");
    signup_modal.style.display = "none";
}
function open_signup_modal() {
    var signin_modal = document.getElementById("signin_page");
    signin_modal.style.display = "none";
    var signup_modal = document.getElementById("signup_page");
    signup_modal.style.display = "block";
}
function close_signin_modal() {
    var signin_modal = document.getElementById("signin_page");
    signin_modal.style.display = "none";
}
function open_signin_modal() {

    var signin_modal = document.getElementById("signin_page");
    signin_modal.style.display = "block";
}
function close_createposts_modal() {
    var createposts = document.getElementById("create_posts_page")
    createposts.style.display = "none";
}
function open_createposts_modal() {
    var createposts = document.getElementById("create_posts_page")
    createposts.style.display = "block";

}
