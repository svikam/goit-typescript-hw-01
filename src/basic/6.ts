// Створіть інтерфейс User для типізації об'єктів, які містять такі властивості.
// Зверніть увагу, що адреса є необов'язковою властивістю.
// const mango = {
//     name: 'Mango',
//     age: 30,
//     email: 'john@example.com',
//     address: {
//         city: 'New York',
//         country: 'USA'
//     }
// };
// const poly = {
//     name: 'Mango',
//     age: 30,
//     email: 'john@example.com'
// };

interface IAddress {
    city: string;
    country: string;
}

interface IUser {
    name: string;
    age: number;
    email: string;
    address?: IAddress; 
}

const mango: IUser = {
    name: 'Mango',
    age: 30,
    email: 'john@example.com',
    address: {
        city: 'New York',
        country: 'USA'
    }
};

const poly: IUser = {
    name: 'Mango',
    age: 30,
    email: 'john@example.com'
};