window.addEventListener("DOMContentLoaded", () => {
    const boxLogin = document.querySelector(".loginContainer")
    const showPassword = document.querySelector(".showPassword")
    const boxCreate = document.querySelector(".createContainer")
    const showBoxSignUp = document.getElementById("createContainer")
    const showBoxLogin = document.getElementById("btnCancel")

    showBoxSignUp.addEventListener("click", () => {
        boxLogin.classList.add("hidden")
        boxCreate.classList.remove("hidden")
    })

    showBoxLogin.addEventListener("click", () => {
        boxCreate.classList.add("hidden")
        boxLogin.classList.remove("hidden")
    })


    showPassword.addEventListener("click", () => {
        showPassword.classList.toggle("show-pass")        
    })

})