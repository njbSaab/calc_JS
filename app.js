let a = '';  // first Num   
let b = ''; // sec num
let sing = '';// знак операции
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'x', '/',];

const out = document.querySelector('.calc_screen p');

function clearALL () {
   a = '';
   b = '';
   sing = '';
   finish = false;
   out.textContent = 0;
}

document.querySelector('.ac').onclick = clearALL;

document.querySelector('.buttons').onclick = (event) => {
   // нажатие не на кнопку 
   if(!event.target.classList.contains('btn')) return;
   // нажатие на конепку
   if(event.target.classList.contains('ac')) return;

   out.textContent = '';
   // получать кнопку по нажатию
   const key = event.target.textContent;

   // если нажажта клавиша 0-9
   if (digit.includes(key)) {
      if (b === '' && sing === '') {
      a +=key;

      out.textContent = a;
      }
      else if (a!=='' && b!=='' && finish){
         b = key;
         finish = false;
         out.textContent = b;
      }
      else {
         b += key;
         out.textContent = b;
      }   
      console.table(a, b, sing);
      returnl

   }

   // если нажата клавиша +-/*
   if(action.includes(key)) {
      sing = key;
      out.textContent = sing;
      console.table(a, b, sing);
      return;
   }   
    


   if (key === '='){
      if (b ==='') b = a;
      switch (sing) {
         case "+":
            a = (+a) + (+b);
            break;
         case "-":
            a = a - b;
            break;
         case "x":
            a = a * b;
            break;
         case "/" :
            if (b === '0'){
               out.textContent = 'Ошибка';
               a = '';
               b = '';
               sing = '';
               return;
            } 
         a = a / b;
         break;   
      }
      finish = true;
      out.textContent = a;
      console.table(a, b, sing);
   }
}