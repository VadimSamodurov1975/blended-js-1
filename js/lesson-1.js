//! Запропонуйте користувачу ввести число за допомогою prompt().
//! Перевірте, чи дорівнює змінна number числу 10:
//! Якщо так – виведіть повідомлення 'Вірно' у alert().
//!    Якщо ні – виведіть 'Невірно'.

//? Підказка: prompt завжди повертає рядок (String), тому перед перевіркою
//? перетворіть значення на число за допомогою Number().

// const userNumber = prompt("Input number");
// if (Number(userNumber) === 18) {
//     alert("Вірно");
// }
// else {
//     alert("Невірно");
// }

//! У змінній min лежить випадкове число від 0 до 59.
//! Визначте, в яку чверть години потрапляє
//! це число (у першу, другу, третю чи четверту).
//! Виведіть в alert відповідне повідомлення, наприклад:
//! "10 входить в першу чверть"

//? const min = Math.floor(Math.random() * (59 - 0) + 0);

// const min = Math.floor(Math.random() * (59 - 0) + 0);
// if (min >= 0 && min <= 15) {
//     alert(`${min} входить в першу чверть`);
// }
// else if (min > 15 && min <= 30) {
//     alert(`${min} входить в другу чверть`);
// }
// else if (min > 30 && min <= 45) {
//     alert(`${min} входить в третю чверть`);
// }
// else if (min > 45 && min <= 59) {
//     alert(`${min} входить в четверту чверть`);
// }

//! Змінна num може набувати 4 значення: '1', '2', '3' або '4'
//! (запитуй це значення у користувача через prompt).
//! Якщо вона має значення '1', то у змінну result запишіть 'зима',
//! якщо має значення '2' - 'весна' і так далі.
//? Розв'яжіть завдання через switch-case.
//? Не забудьте про дефолтне значення, на випадок, якщо користувач
//? введе в prompt щось інше. В такому випадку result має набувати значення:
//? "Вибачте, але ви маєте ввести значення від 1 до 4 включно".
//! Значення змінної result виведіть в консоль.

// const num = prompt("Input number 1, 2, 3 or 4");
// let result;
// switch (num) {
//     case "1":
//         result = "winter";
//         break;
//     case "2":
//         result = "spring";
//         break;
//     case "3":
//         result = "summer";
//         break;
//     case "4":
//         result = "autumn";
//         break;
//     default:
//         result = "Вибачте, але ви маєте ввести значення від 1 до 4 включно";
//         break;
// }
// console.log(result);

//! Отримуйте від користувача число (кількість хвилин) через prompt
//! і виводьте у консоль рядок у форматі годин та хвилин.
//! Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
//? Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'):
//? <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples>

// const userNumber = prompt("Input minutes");
// const hour = Math.floor(Number(userNumber) / 60);
// const minutes = Number(userNumber) % 60;

// console.log(`${String(hour).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`);

//! Напишіть код, який запитуватиме у користувача
//! логін за допомогою prompt і виводить результат в консоль браузера

//! Після цього додайте перевірку введеного користувачем значення:
//! Якщо відвідувач вводить "Адмін",
//! то prompt запитує пароль (не забудьте зберігти його у змінну для подальшої перевірки).
//! Якщо нічого не ввели або натиснули Cancel,
//! Вивести в alert строку "Скасовано"
//! В іншому випадку вивести в alert рядок "Я вас не знаю"

//! Пароль перевіряти так:
//! Якщо введено пароль "Я головний",
//! то вивести в alert рядок "Добрий день!",
//! в іншому випадку вивести в alert рядок "Невірний пароль!"

// const login = prompt("Input login");
// console.log(login);

// const pasw = "Я головний";
// if (login === "Адмін") {
//     const userPasw = prompt("Input passward");
//     if (userPasw === pasw) {
//         alert("Добрий день!");
//     }
//     else {
//         alert("Невірний пароль!");
//     }
// }
// else if (login === null || login === "") {
//     alert('Скасовано');
// }
// else {
//     alert("Я вас не знаю");
// }

//! Використайте цикл while, щоб вивести в console всі числа від 0 до 20 включно.
// let count = 0;
// while (count <= 20) {
//     console.log(count);
//     count++;
// }

// !Напишіть функцію getNumbers(min, max), що приймає 2 параметри -
//! мінімальне і максимальне число відповідно.
//! Напишіть цикл всередині функції, який виводить у консоль
//! всі числа від max до min за спаданням.
//! Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі
//! і поверніть її з функції.

// function getNumbers(min, max) {
//     let total = 0;
//     while (max >= min) {
//         console.log(max);
//         if (max % 2 === 0) {
//             total += max;
//         }
//         max -= 1;
//     }
//     return total;
// }

//! Напишіть функцію min(a, b), яка приймає 2 числа і повертає меньше з них.
//! Потрібно додати перевірку, що функція отримує саме числа, в іншому випадку
//! повертати з функції рядок - 'Not a number!'.

// function min(a, b) {
//     if (typeof a === 'number' && typeof b === 'number') {
//         if (a < b) {
//             return a;
//         }
//         else if (a > b) {
//             return b;
//         }
//     }
//     else {
//         return "Not a number!"
//     }
// }

// console.log(min(12234324532, 3465345654));


//! Напишіть функцію isAdult(age), яка  приймає число - вік користувача і повертає true,
//! якщо параметр age більше чи дорівнює 18.
//! В іншому випадку вона запитує підтвердження через confirm
//! і повертає його результат (true/false).
// const age = prompt("Input your age");

// function isAdult(age) {    
//     if (age >= 18) {
//         return true;
//     }
//     else {
//         return (confirm("A you sure?"));
//     } 
// }

// console.log(isAdult(age));


//! Напишіть функцію fizzBuzz(num), яка приймає число і перевіряє кожне число від 1 до num:
//! Якщо число ділитися  без остачі на 3 - виводить в консоль 'fizz',
//! якщо ділиться  без остачі на 5 - виводить в консоль 'buzz',
//! якщо ділиться  без остачі і на 3, і на 5 - виводить в консоль 'fizzbuzz'.
function fizzBuzz(num) {
    for (let i = 1; i <= num; i++) {        
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('fizzbuzz'); 
        }
        else if (i % 3 === 0) {
            console.log('fizz');            
        }
        else if (i % 5 === 0) {
            console.log('buzz');
        }
    }
}

fizzBuzz(16)