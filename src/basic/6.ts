interface User {
    name: string;
    age: number;
    email: string;
    address?: Neobyazatelnyi;
};

interface Neobyazatelnyi {
    city: string;
    country: string;
}

const mango: User = {
    name: "Mango",
    age: 30,
    email: "john@example.com",
    address: {
        city: "New York",
        country: "USA",
    }
}

const poly: User = {
    name: "Mango",
    age: 30,
    email: "john@example.com",
}