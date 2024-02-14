const inputWeight=document.getElementById('weight')
const inputheight=document.getElementById('height')
const weighSpan=document.getElementById('weight-val')
const heightSpan=document.getElementById('height-val')
const bmiResult=document.getElementById('result')
const category=document.getElementById('category')
// const rangeInput = document.getElementById("height");








function bmiCalculate(){
    // console.log(inputWeight.value)
  let  inputWeightValue=inputWeight.value
  weighSpan.innerHTML=inputWeightValue+'kg'

  let inputheightValue=inputheight.value 
  heightSpan.innerHTML=inputheightValue +'cm'

  let bmi=(inputWeightValue/(Math.pow(inputheightValue/100,2))).toFixed(1)
  bmiResult.innerHTML=bmi
//   console.log(bmi)

if(bmi<18.5){
    category.innerHTML='under Weight'
    bmiResult.style.color='yellow'

}else if(bmi>=18.5 && bmi<=24.9 ){
    category.innerHTML='Normal Weight'
    bmiResult.style.color='green'

}else if(bmi>=25 && bmi<=29.9){
    category.innerHTML='over Weight'
    bmiResult.style.color='orange'
}else{
    category.innerHTML='obese'
    bmiResult.style.color='red'
}
}






inputWeight.addEventListener('input',bmiCalculate)
inputheight.addEventListener('input',bmiCalculate)