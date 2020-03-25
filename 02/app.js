const btnCalculate = document.querySelector('.cart__btn-calculate');
// console.log(btnCalculate);
const InputList = document.getElementsByClassName('cart__item');
const arr = [...InputList];


const test = (a) =>{
    console.log('funkcja test działa', arr);
    for each (el in arr) {
        console.log(index);
      }
} 


btnCalculate.addEventListener('click', test); 

// przypisać zmienne do cen, ilości produktów i .cart__total-price

