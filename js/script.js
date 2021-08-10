let billinput = document.getElementById("billinput");
    fivePercent = document.getElementById("five");
    tenPercent = document.getElementById("ten");
    fifteenPercent = document.getElementById("fifteen");
    twenyFive = document.getElementById("twenyFive");
    fifty = document.getElementById("fifty");
    custominput = document.getElementById("custominput");
    peapleinput = document.getElementById("peapleinput");

    amountResult = document.getElementById("amountResult");
    totalResult = document.getElementById("totalResult");
    resetBtn = document.getElementById("resetBtn");

function removeActiveClass(){
    let theBtn = document.querySelectorAll(".btn");

    theBtn.forEach((btn)=>{
        btn.classList.remove("active");
    })
}
var tipChoose;


fivePercent.onclick = function(){
    tipChoose=0.05;
    removeActiveClass();
    this.classList.add("active");
 };

 tenPercent.onclick = function(){
    tipChoose=0.1;
    removeActiveClass();
    this.classList.add("active");
 };
 fifteenPercent.onclick = function(){
    tipChoose=0.15;
    removeActiveClass();
    this.classList.add("active");
 };
 twenyFive.onclick = function(){
     tipChoose=0.25;
     removeActiveClass();
    this.classList.add("active");
 };
 fifty.onclick = function(){
     tipChoose=0.50;
     removeActiveClass();
    this.classList.add("active");
 };
 
resetBtn.onclick = function(){
    
    if(billinput.value!="" && custominput.value !="" && peapleinput.value!=""){

        amountResult.textContent =parseFloat(parseFloat(billinput.value)*(parseInt(custominput.value)/100)/parseInt(peapleinput.value)).toFixed(2);

        totalResult.textContent ="$" +parseFloat(parseFloat(billinput.value)/parseInt(peapleinput.value)+parseFloat(amountResult.textContent)).toFixed(2);
        
        amountResult.textContent ="$"+ amountResult.textContent;
        
    }else if(custominput.value ==""){

        amountResult.textContent =parseFloat(parseFloat(billinput.value)* tipChoose /parseInt(peapleinput.value)).toFixed(2);
                
        totalResult.textContent ="$"+parseFloat( parseFloat(billinput.value) / parseInt(peapleinput.value)+ parseFloat(amountResult.textContent)).toFixed(2);

        amountResult.textContent ="$"+ amountResult.textContent;

    }
    billinput.value="";
    custominput.value="";
    peapleinput.value="";
    
    
};
