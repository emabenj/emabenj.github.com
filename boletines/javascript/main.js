let links = document.querySelectorAll(".close");

links.forEach(function(link){
	link.addEventListener("click",function(evento){
		evento.preventDefault();

		let content = document.querySelector(".content");

		content.classList.remove("animate__fadeInDown");
		content.classList.remove("animate__animated");

		content.classList.add("animate__animated");
		content.classList.add("animate__fadeOutUp");

		setTimeout(function(){
			location.href ="/boletines";
		},600);

		

		return false;
	});
});
