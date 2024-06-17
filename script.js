let imgbox=document.querySelector("#imgbox")
let qrImage=document.querySelector("#qrImage")
let qrText=document.querySelector("#qrText")


function GenerateQR(){
    if(qrText.value.length>0){
        qrImage.src=" https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrText.value
        imgbox.classList.add("show-img")
    }else{
       qrText.classList.add("error")
       
       setTimeout(()=>{
        qrText.classList.remove("error")
       
       },1000)
    }

}