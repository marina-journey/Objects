//Repeate class work

// const cat = {
//     color: 'brown',
//     name: 'Timon',
//     age: 7,
// };

// console.log(cat);

// let globalId = 1;

// const createUser = (id, name, age, gender) => {
//     return {
//         id: globalId++,
//         name,
//         age,
//         gender,
//     };
// };

// const createUser = (id, name, age, gender) => ({
//         id: globalId++,
//         name,
//         age,
//         gender,
// });

// console.log(createUser(1, 'Alex', 25, 'male'));
// console.log(createUser(2, 'Marry', 30, 'female'));
// console.log(createUser(3, 'John', 18, 'male'));

// const user1 = createUser(1, 'Alex', 25, 'male');
// const user2 = createUser(2, 'Marry', 30, 'female');
// const user3 = createUser(3, 'John', 18, 'male');

// console.log(user1.name);

// for (const key in user1) {
//     if (user1.hasOwnProperty(key)) {
//         const value = user1[key];
//         console.log(value, key);
//     };
// };

// const newUser = Object.assign(user1, user3);
// console.log(newUser);

// const user5 = createUser(5, 'Kevin', 27, 'male');
// const user6 = createUser(6, 'Kat', 33, 'female');
// const user7 = user5;

// console.log(user5 === user6); // False
// console.log(user7 === user6); // False
// console.log(user5 === user7); // True
// user7.citizenship = 'ukr';

// console.log(user5, user7);

//Home work
const sportsman = {
    sport: 'tennis',
    name: 'Elina',
    age: 25,
    gender: 'female',
    country: 'Ukraine',
};
console.log(sportsman);

function copySportsman(obj) {
    let clone = {};
    for (let key in obj) {
    clone[key] = obj[key]; 
    }
    return clone;
};

console.log(copySportsman(sportsman));

function strNumber (obj) {
    let number = 0;
    for (const key in obj) {
        if (typeof obj[key] === 'string') {
        number++;
        };
    };
    return number;
};

console.log(strNumber(sportsman));