var heart_btn=document.getElementsByClassName('heart')
var plus_btn=document.getElementsByClassName('plus-btn')
var quant=document.getElementsByClassName('Quant')
var minus_btn=document.getElementsByClassName('minus-btn')
var item=document.getElementsByClassName('Item')
var dlt=document.getElementsByClassName('delete')
 var total_price=[1379,176,249]
var finalprice=document.getElementById('finalPrice')  
for(let i=0;i<heart_btn.length;i++){
    heart_btn[i].addEventListener('click',function(){
        if (heart_btn[i].style.color=='red'){
            heart_btn[i].style.color='black'}
        else {
            (heart_btn[i].style.color='red')
        }
}
)
    plus_btn[i].addEventListener('click',function(){
        quant[i].value=Number(quant[i].value) +1;
        finalprice.value=Number(finalprice.value)+Number(total_price[i]);

    })
    minus_btn[i].addEventListener('click',function(){
        if ((Number(quant[i].value))>1){
            quant[i].value=Number(quant[i].value) -1
            finalprice.value=Number(finalprice.value)-Number(total_price[i]);
        }
        

})
    dlt[i].addEventListener('click',function(){
        item[i].style.display="none"
        finalprice.value=Number(finalprice.value)-(Number(total_price[i])*Number(quant[i].value));
    })

}

