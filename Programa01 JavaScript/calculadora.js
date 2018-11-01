		window.onload=function(){
		var coloramarillo = function() {
			this.style.background = "Yellow";
		}
		var colorblanco = function() {
			this.style.background = "white";
		}
		var operando1=document.getElementById("operando1");
		operando1.addEventListener("focus",coloramarillo);
		operando1.addEventListener("focusout",colorblanco)

		var operando2=document.getElementById("operando2");
		operando2.addEventListener("focus",coloramarillo);
		operando2.addEventListener("focusout",colorblanco)

		var operador= ""
		var numeros= function() {
			var valor= this.value;

		if (operador=="") {
			var valorInput=document.getElement("operando1").value;
			if (valorInput==0) {
				document.getElementById("operando1").value="";
			}
				document.getElementById("operando1").value+=valor;
			
		}
		else {
			var valorInput=document.getElement("operando2").value;
			if (valorInput==0) {
				document.getElementById("operando2").value="";
			}
				document.getElementById("operando2").value+=valor;
			
		}
		}
		var uno=document.getElementById("uno")
		uno.addEventListener("Click",numeros)

}
		
