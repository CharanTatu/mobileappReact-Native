
const responce = {
    data: [
        { name: "macbook-pro", price: 40000 },
        { name: "Hp", price: 7000 },
        { name: "Lenovo", price: 3000 },
        { name: "Lenovo", price: 5000 },
    ]
}

const result = responce.data;
const getdata = result.map((get) => get.price)
const sum = getdata.reduce((Intislvalue, a) => Intislvalue + a, 0);
console.log(sum);
