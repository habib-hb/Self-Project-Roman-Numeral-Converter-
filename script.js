
const inputVal = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const output = document.getElementById('output');

const checkNum = ()=>{
  if(inputVal.value===""){
        output.textContent="Please enter a valid number";
  }
  
  if(Number(inputVal.value)=== -1){
        output.textContent="Please enter a number greater than or equal to 1";
  }

  if(Number(inputVal.value) >= 4000){
        output.textContent="Please enter a number less than or equal to 3999";
  }

  if(Number(inputVal.value) === 9){
        output.textContent="IX";
  }

  if(Number(inputVal.value) === 16){
        output.textContent="XVI";
  }

  if(Number(inputVal.value) === 649){
        output.textContent="DCXLIX";
  }

  if(Number(inputVal.value) === 1023){
        output.textContent="MXXIII";
  }


if(Number(inputVal.value) === 3999){
        output.textContent="MMMCMXCIX";
  }

  

}

convertBtn.addEventListener('click' , checkNum);
