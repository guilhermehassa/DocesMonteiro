

function enviarWhatsapp(){
  var destinatario = "5513982183485";
  var nome = document.querySelector('#nome').value;
  var telefone = document.querySelector('#telefone').value;
  var preData = document.querySelector('#data').value;

  var dataArray = preData.split('-');
  var data = dataArray[2]+'/'+dataArray[1]+'/'+dataArray[0];

  var mensagem = document.querySelector('#mensagem').value;


  var texto = "Contato de *"+nome+"* - via Site\n\n"+mensagem+"\n\nPara: "+data;
  texto = window.encodeURIComponent(texto);
  
  window.open("https://api.whatsapp.com/send?phone=" + destinatario + "&text=" + texto, "_blank");
	//Obs.. use "_system", no lugar de blank, caso você esteja usando Phonegap / Cordova / Ionic ou qualquer um baseado em webview;
}