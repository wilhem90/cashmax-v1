import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


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
    // function createUser(name, email, password) {
    //     const firebaseConfig = {
    //         apiKey: "AIzaSyDovhE50Mzo6TeVAxTayFDSuHP5dnMtlgs",
    //         authDomain: "cashmax-v1.firebaseapp.com",
    //         projectId: "cashmax-v1",
    //         storageBucket: "cashmax-v1.appspot.com",
    //         messagingSenderId: "381446748900",
    //         appId: "1:381446748900:web:f4481d87c4e7c7de300af1"
    //     }

    //     // Initialize Firebase
    //     const app = initializeApp(firebaseConfig);
    //     const auth = getAuth(app);
    //     const db = getFirestore(app);

    //     // Example of using Firebase auth
    //     signInWithEmailAndPassword(auth, email, password)
    //         .then((userCredential) => {
    //             // Signed in
    //             const user = userCredential.user;
    //             console.log(user);
    //             // ...
    //         })
    //         .catch((error) => {
    //             const errorCode = error.code;
    //             const errorMessage = error.message;
    //             console.log(errorCode);
    //             // ...
    //         });

    // }

    // createUser("wilhemmaxime90@gmail.com", "@Wilhem90" )




// Configuração do Firebase
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Inicializar o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Definir função para criar usuário
function createUser(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
}

// Exemplo de uso da função
createUser("wilhemmaxime90@gmail.com", "@Wilhem90")
    .then((userCredential) => {
        // Novo usuário criado
        const user = userCredential.user;
        console.log('Usuário criado:', user);
    })
    .catch((error) => {
        // Erro ao criar usuário
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Erro ao criar usuário:', errorCode, errorMessage);
    });


})