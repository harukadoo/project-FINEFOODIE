document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("menu_btn").addEventListener("click", function() {
    document.querySelector("header .menu").classList.toggle("open")
	})
})