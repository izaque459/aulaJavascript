function clicou(){
	document.getElementById("agradecimento").innerHTML="Obrigado por clicar";
}
function redirecionar(){
	window.open('https://www.google.com.br/');
}
function trocar(elemento){
	elemento.innerHTML="Obrigado por passar o mouse";
}
function voltar(elemento){
	elemento.innerHTML="Passe o mouse aqui.";
}
function load(){
	alert("Carregada");
}
function change(elemento){
	alert("valor escolhido: "+elemento.value);
}