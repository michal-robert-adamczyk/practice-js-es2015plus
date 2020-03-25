const btnCalculate = document.querySelector('.cart__btn-calculate');
// console.log(btnCalculate);
// const InputList = document.getElementsByClassName('cart__item');
// const arr = [...InputList];


const test = (a) =>{
    
    const list= document.getElementsByClassName("cart__item");
    [].forEach.call(list, itteration = el => {
        console.log(el.querySelector('input').dataset.price);

    });
} 


btnCalculate.addEventListener('click', test); 

// przypisać zmienne do cen, ilości produktów i .cart__total-price

