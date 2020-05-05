const btnCalculate = document.querySelector('.cart__btn-calculate');


const ArrayToSum = []


const orderPrice = x => {

    //metoda .getElementsByClassName daje mi HTMLCollection
    const list = document.getElementsByClassName("cart__item");
    // console.log(list);

    // HTMLCollection przekształcam w tablicę przy pomocy operatora rozproszenia
    const ArrayList = [...list];
    // console.log(ArrayList);

    //Posługując się .forEach przeprowadzam iterację po tablicy z elementami inputu
    ArrayList.forEach(el => {

        //wyciągam interesujące mnie warotści do nowej tablicy, której użyję do liczenia sumy
        ArrayToSum.push(el.querySelector('input').dataset.price*el.querySelector('input').value);    
    })

    console.log(ArrayToSum);


// metodą . reduce obliczam sumę elementów tablicy ArrayToSum
    const sum = ArrayToSum.reduce((prev, n) => {
     return prev + n;
    });
    const ToPay = document.querySelector('.cart__total-price')
    ToPay.innerText=sum;
}


btnCalculate.addEventListener('click', orderPrice);

