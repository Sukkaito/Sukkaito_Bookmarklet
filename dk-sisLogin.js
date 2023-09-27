/**
 * 
 * @file    One-click login at dk-sis.hust.edu.vn
 * @author  Sukkaito
 * @since   1.0
 */

let mssv = "";
let pw = "";

let usrNameField = document.getElementById("tbUserName");
let pwField = document.getElementById("tbPassword");
usrNameField.value = mssv;
usrNameField.onchange();
pwField.value = pw;
pwField.onchange();
document.getElementById("ccCaptcha_TB_I").value = prompt("Captcha");
document.forms['ctl01'].requestSubmit();
