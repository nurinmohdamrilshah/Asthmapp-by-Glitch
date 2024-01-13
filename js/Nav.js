// Function to Navigate Between Webpages
function Nav(){
    let navi = [];

// 1. maintenance needed to keep track page links, ID must remain unique on every page
    let nav_link = {
        "signUpPageBtn":"SignUp.html",
        "forgotPasswordPageBtn":"ForgotPassword.html",
        "signInPageBtn":"index.html",
        "backPageBtn":"index.html",
    };
// 2. maintenance needed to keep track page links, ID must remain unique on every page
    const forgotPasswordBtn = document.getElementById("forgotPasswordPageBtn") || '';
    const signInPageBtn = document.getElementById("signInPageBtn") || '';
    const signUpPageBtn = document.getElementById("signUpPageBtn") || '';
    const backPageBtn = document.getElementById("backPageBtn") || '';
// 3. maintenance needed to keep track page links, ID must remain unique on every page
    navi.push(forgotPasswordBtn,signInPageBtn, signUpPageBtn, backPageBtn);


    navi.forEach( (btn) => {
        if(btn) {
            btn.addEventListener("click", function(e){
                const id = btn.getAttribute("id");
                window.location.href = nav_link[id];
            });
        }
    })
}

export default Nav;