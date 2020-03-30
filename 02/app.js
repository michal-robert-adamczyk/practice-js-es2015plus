const btnCalculate = document.querySelector('.cart__btn-calculate');
// console.log(btnCalculate);
// const InputList = document.getElementsByClassName('cart__item');
// const arr = [...InputList];

const ArrayToSum = []


const test = x =>{
    
    const list= document.getElementsByClassName("cart__item");
    [].forEach.call(list, itteration = el => {
        ArrayToSum.push(el.querySelector('input').dataset.price*el.querySelector('input').value);
    });
    const sum = ArrayToSum.reduce((prev, n) => {
       return prev + n;
    });
    console.log(sum);
    const ToPay = document.querySelector('.cart__total-price')
    ToPay.innerText=sum;
} 


btnCalculate.addEventListener('click', test); 

// przypisać zmienne do cen, ilości produktów i .cart__total-price

