// let buttons = document.querySelectorAll('.buttons');
// let screen = document.querySelector('#screen');
// let submit = document.querySelector('#submit');
// let back = document.querySelector('#back');
// let clr = document.querySelector('#clr');

// buttons.forEach(function (item) {
//     item.addEventListener('click', function () {

//         if (item.innerHTML == ('+' || '-' || '*' || '/')) {
//             item.innerHTML = ' ' + item.innerHTML + ' ';
//         }
//         screen.value += item.innerHTML;

//         // let number;
//         // number += item.innerHTML;
//         // let operation;
//         // if (item.innerHTML == ('+' || '-' || '*' || '/')) {
//         //     operation = item.innerHTML;
//         // }
//         // let number2;
//         // number2 += item.innerHTML;
//     });
// });

// back.addEventListener('click', function () {
//     screen.value = screen.value.slice(0, screen.value.length - 1);
// });

// clr.addEventListener('click', function () {
//     screen.value = '';
// });

// submit.addEventListener('click', function (e) {
//     e.preventDefault();

//     try {
//         screen.value = `${screen.value} = ${eval(screen.value)}`;
//     } catch (error) {
//         screen.value = 'Please enter valid number';
//         // console.log(error);
//     }
// });

let buttons = document.querySelectorAll('.buttons');
let screen = document.querySelector('#screen');
let submit = document.querySelector('#submit');
let back = document.querySelector('#back');
let clr = document.querySelector('#clr');

buttons.forEach(function (item) {
    item.addEventListener('click', function () {
        // if (item.innerHTML.includes('+') || item.innerHTML.includes('-') || item.innerHTML.includes('*') || item.innerHTML.includes('*')) {
        //     item.innerHTML = ' ' + item.innerHTML + ' ';
        // };
        if (/[-+*/]/.test(item.innerHTML)) {
            item.innerHTML = ` ${item.innerHTML} `;
        }
        screen.value += item.innerHTML;
    });
});

back.addEventListener('click', () => {
    // screen.value.split(' ')
    screen.value = screen.value.slice(0, screen.value.length - 1);
});

clr.addEventListener('click', () => {
    screen.value = '';
})

submit.addEventListener('click', function (e) {
    e.preventDefault();

    try {
        screen.value = `${screen.value} = ${eval(screen.value)}`;
    }
    catch (error) {
        screen.value = 'Enter valid number';
    }
});


