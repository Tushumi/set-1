 
  const colors = [
    {
      value: "rgb(5, 199, 5)"
    },
    {
      value: "red"
    },
    {
      value: "black"
    },
    {
      value: "green"
    },
    {
      value: "yellow"
    },
    {
      value: "gray"
    }
  ];



let colorBtnHTML = '';

colors.forEach(color => {
  colorBtnHTML += `
    <div class="color-btn" style="background-color:${color.value};"  data-color="${color.value}"></div>
  `
});

const colorBtnCOntainer =  document.querySelector('.color-buttons-container .buttons').innerHTML = colorBtnHTML;



const motorColor = document.querySelector('.motor-based-color');
const colorBtns = document.querySelectorAll('.color-btn');

colorBtns.forEach(colorBtn => {
  const BtncolorValue = colorBtn.getAttribute('data-color');

  colorBtn.addEventListener('click',()=> {
    motorColor.style.backgroundColor = BtncolorValue
  });
});



const generateRandomClrBtn = document.querySelector('.generate-random-clr-btn');

let iteration = 30; 
const speedOfGenerate = 100;  

generateRandomClrBtn.addEventListener('click', ()=>{
  const intervalId = setInterval(()=>{
    const red = Math.round(Math.random() * 250);
    const green = Math.round(Math.random() * 255);
    const blue  =  Math.round(Math.random() * 250);
    const randomColor =  `rgb(${red}, ${green}, ${blue})`;

    motorColor.style.backgroundColor = randomColor;

  
    iteration--;
    if(iteration <= 0){
      clearInterval(intervalId);
      iteration = 30;
    }
  }, speedOfGenerate);
});



const resetButton = document.querySelector('.reset-btn');

resetButton.addEventListener('click', ()=>{
  motorColor.style.backgroundColor = "";
})


