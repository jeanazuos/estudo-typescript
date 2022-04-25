"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Rodar tsc --init pra criar o arquivo de configuração
// Rodar tsc sempre pra compilar a aplicação ou tsc -w
let x = 11;
x = 10111;
console.log(x);
// inferencia x annotation
let y = 12; // inferencia
let z = 20; // annotation
// Tipos básicos
let firstName = "Jean";
let age = 30;
const isAdmin = true;
// Descobrir o tipo de uma variável
console.log(typeof firstName);
// object
const myNumbers = [1, 2, 3];
console.log(myNumbers);
console.log(myNumbers.length);
// tuplas
let myTuple;
myTuple = [5, "teste", ["a", "b"]];
console.log(myTuple);
// object literals -> {prop : value}
const user = {
    name: "Pedro",
    age: 18
};
console.log("User ", user, "Just name ", user.name);
// any (isso vai contra a filosofia do typescript pois aceita qualquer coisa)
let a = 0;
console.log("any antes ", a);
a = "teste";
console.log("any depois ", a);
// union type - unir tipos pra criar tipos mais complexos (melhor solução do que usar any)
let id = "10";
id = 200;
console.log("union type ", id);
const userId = 10;
const productId = "12345";
// enum
// Ex: Tamanho de ropupas (size: Médio, size: Pequeno)
var Size;
(function (Size) {
    Size["P"] = "Pequeno";
    Size["M"] = "M\u00E9dio";
    Size["G"] = "Grande";
})(Size || (Size = {}));
const camisa = {
    name: "camisa gola V",
    size: Size.G,
};
console.log("Testando enum ", camisa);
// literal types
let teste;
teste = null;
console.log("Literal types ", teste);
// funcoes - tipar argumentos
function sum(a, b) {
    return a + b;
}
console.log("funcoes - tipar argumentos ", sum(1, 1));
// funcoes - tipar o retorno
function sayHelloTo(name) {
    return `Hello ${name}`;
}
console.log("funcoes - tipar o retorno ", sayHelloTo("Mateus"));
// funcoes - tipar funcoes que nao retornam nada
function logger(msg) {
    console.log(msg);
}
logger("Teste!");
// funcoes - Argumentos opcionais
function greeting(name, greet) {
    if (greet) {
        console.log(`Olá ${greet} ${name}`);
        return;
    }
    console.log(`Olá ${name}`);
}
greeting("José");
greeting("Pedro", "Sr.");
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
console.log(sumNumbers({ n1: 1, n2: 2 }));
function muliplyNumbers(nums) {
    return nums.n1 * nums.n2;
}
const someNumbers = {
    n1: 5,
    n2: 10
};
console.log(muliplyNumbers(someNumbers));
// narrowing - checagem de tipos
function doSomething(info) {
    if (typeof info === "number") {
        console.log(`O número é ${info}`);
        return;
    }
    console.log("Não foi passado um número");
}
doSomething(5);
doSomething(true);
// generics
function showArraysItems(arr) {
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`);
    });
}
const a1 = [1, 2, 3];
const a2 = ["a", "b", "c"];
showArraysItems(a1);
showArraysItems(a2);
// Classes
class User {
    constructor(name, role, isApproved) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }
    showUserName() {
        console.log(`O nome do usuário é ${this.name}`);
    }
    showUserRole(canShow) {
        if (canShow) {
            console.log(`O perfil do usuário é ${this.role}`);
            return;
        }
        console.log("Informação restrita");
    }
}
const zeca = new User("zéca", "Admin", true);
console.log(zeca);
zeca.showUserName();
zeca.showUserRole(true);
class Car {
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }
    showBrand() {
        console.log(`A marca do carro é ${this.brand} e ele possui ${this.wheels} rodas`);
    }
}
const fusca = new Car("VW", 4);
fusca.showBrand();
// heranca
class SuperCar extends Car {
    constructor(brand, wheels, engine) {
        super(brand, wheels);
        this.engine = engine;
    }
}
const a4 = new SuperCar("Audi", 4, 2);
console.log(a4);
a4.showBrand();
// Decorators - Precisa habilitar no tsconfig
// Constructor decorator
function BaseParameters() {
    return function (constructor) {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.id = Math.random;
                this.createdAt = new Date();
            }
        };
    };
}
let Person = class Person {
    constructor(name) {
        this.name = name;
    }
};
Person = __decorate([
    BaseParameters()
], Person);
const sam = new Person("Sam");
console.log(sam);
