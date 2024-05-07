window.addEventListener("DOMContentLoaded", () => {
    const boxLogin = document.querySelector(".loginContainer")
    const showPassword = document.querySelector(".showPassword")
    const inputPassword = document.querySelector(".inputPassword")
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

// Aqui esta nossa funçao para mostrar a senha
    showPassword.addEventListener("click", () => {
        if (inputPassword.type === 'password') {
            inputPassword.type = 'text';
            showPassword.src = "/src/imgs/visibility_off.png"
        } else {
            inputPassword.type = 'password';
            showPassword.src = "/src/imgs/visibility_FILL0.png"
        }     
    })





    // Vamos criar a funcao para criar conta de usuario
    function createUser(name, email, password) {
        
    }

})