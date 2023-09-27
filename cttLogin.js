/**
 * 
 * @file    One-click login at ctt.hust.edu.vn
 * @author  Sukkaito
 * @since   1.0
 */

let email = "<Your email>";
let pw = "<Password>";

document.getElementById("userNameInput").value = email;
document.getElementById("passwordInput").value = pw;
document.getElementById("kmsiInput").value = false; //Disables autologin
Login.submitLoginRequest();
