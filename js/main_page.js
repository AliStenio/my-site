function TestFunction(){
	document.getElementById("socialMedia").style.height = "180px";
	document.getElementById("socialMedia").style.left = "0";
	setTimeout('document.getElementById("instButton").style.display = "flex";', 500);
	setTimeout('document.getElementById("telegramButton").style.display = "flex";', 500);
	setTimeout('document.getElementById("whatsappButton").style.display = "flex";', 500);


}
function TestFunction2(){
	document.getElementById("socialMedia").style.height = "60px";
	document.getElementById("socialMedia").style.left = "-15px";
	setTimeout('document.getElementById("instButton").style.display = "none";', 200);
	setTimeout('document.getElementById("telegramButton").style.display = "none";', 200);
	setTimeout('document.getElementById("whatsappButton").style.display = "none";', 200);
}
