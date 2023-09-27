/**
 * 
 * @file    One-click class registration at dk-sis.hust.edu.vn
 * @author  Sukkaito
 * @since   1.0
 */

var classIDs = '735934'; //List of classIDs, seperated with space.
const delay = 500; //Delay between requests.

/**
* Add classes to register list and log responses.
* @param {String} classID  ClassID to register.
*/
function Reg(classID) {
	document.querySelector("input[id*='ClassRegister'][type='text']").value = classID;    
  document.querySelector("input[value*='ĐK lớp']").click();
	let resp = document.querySelector("span[style*='color:Red']").innerHTML;
	console.log(resp);
}

/**
* One-time main funtion.
*/
(function () {
	for (classIDs = classIDs.trim(); classIDs.includes("  ");) classIDs = classIDs.replaceAll("  ", " ");
	classIDs = classIDs.split(" ");
	
	let n = classIDs.length;
	for (let i = 0; i < n; ++i) {
		setTimeout(Reg, delay*(i-1), classIDs[i]);
	}
  document.querySelector("input[value*='Yes']").click(); //Send registered classes
}());
