/*Constantes*/
const btnGenerate = document.getElementById("btn-generate");
const inputText = document.getElementById("input-text");
const qrCodeDiv = document.getElementById("qrcode");
const btnClear = document.getElementById("btn-clear");

btnGenerate,addEventListener("click",()=>{
    const inputValue = inputText.value; //Obtenemos el valor del texto
    if(inputValue) {
        qrCodeDiv.innerHTML = ""; // Limpiamos el div del QR
        const qrcode = new QRCode(qrCodeDiv, {
            text: inputValue, // El texto a mostrar en el QR
            width: 200,
            height: 200,
        })
    }
})

btnClear.addEventListener("click",()=>{
    inputText.value = "";
    qrCodeDiv.innerHTML = "";
    })
    