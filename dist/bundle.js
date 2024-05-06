/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("window.addEventListener(\"DOMContentLoaded\", () => {\r\n    const boxLogin = document.querySelector(\".loginContainer\")\r\n    const showPassword = document.querySelector(\".showPassword\")\r\n    const boxCreate = document.querySelector(\".createContainer\")\r\n    const showBoxSignUp = document.getElementById(\"createContainer\")\r\n    const showBoxLogin = document.getElementById(\"btnCancel\")\r\n\r\n    showBoxSignUp.addEventListener(\"click\", () => {\r\n        boxLogin.classList.add(\"hidden\")\r\n        boxCreate.classList.remove(\"hidden\")\r\n    })\r\n\r\n    showBoxLogin.addEventListener(\"click\", () => {\r\n        boxCreate.classList.add(\"hidden\")\r\n        boxLogin.classList.remove(\"hidden\")\r\n    })\r\n\r\n\r\n    showPassword.addEventListener(\"click\", () => {\r\n        showPassword.classList.toggle(\"show-pass\")        \r\n    })\r\n\r\n})\n\n//# sourceURL=webpack://cashmax-v1/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;