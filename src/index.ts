// Rodar tsc --init pra criar o arquivo de configuração
// Rodar tsc sempre pra compilar a aplicação ou tsc -w
let x: number = 11;

x = 10111;
console.log(x);


// inferencia x annotation
let y = 12 // inferencia
let z: number = 20; // annotation

// Tipos básicos
let firstName: string = "Jean"
let age: number = 30
const isAdmin: boolean = true

// Descobrir o tipo de uma variável
console.log(typeof firstName);

// object
const myNumbers: number[] = [1,2,3]
console.log(myNumbers);
console.log(myNumbers.length);

// tuplas
let myTuple: [number, string, string[]]
myTuple = [5, "teste", ["a", "b"]]

console.log(myTuple);

// object literals -> {prop : value}
const user: {name: string, age: number} = {
    name:"Pedro",
    age:18
}
console.log("User ", user, "Just name ", user.name)

// any (isso vai contra a filosofia do typescript pois aceita qualquer coisa)
let a: any = 0;
console.log("any antes ", a)
a = "teste";
console.log("any depois ", a)

// union type - unir tipos pra criar tipos mais complexos (melhor solução do que usar any)
let id: string | number = "10"
id = 200
console.log("union type ", id)

// type alias (Criar meus proprios tipos e definir quais tipos ele aceita)
type myIdType = number | string
const userId: myIdType = 10
const productId: myIdType = "12345"

// enum
// Ex: Tamanho de ropupas (size: Médio, size: Pequeno)
enum Size {
    P = "Pequeno",
    M = "Médio",
    G = "Grande"
}

const camisa = {
    name: "camisa gola V",
    size: Size.G,
};
console.log("Testando enum ", camisa);

// literal types
let teste: "autenticado" | null
teste = null;
console.log("Literal types ", teste)

// funcoes - tipar argumentos
function sum(a:number, b:number){
    return a+b;
}
console.log("funcoes - tipar argumentos ", sum(1,1))

// funcoes - tipar o retorno
function sayHelloTo(name: string): string {
return `Hello ${name}`
}
console.log("funcoes - tipar o retorno ", sayHelloTo("Mateus"))

// funcoes - tipar funcoes que nao retornam nada
function logger(msg:string): void{ 
    console.log(msg);
}
logger("Teste!");

// funcoes - Argumentos opcionais
function greeting(name:string, greet?: string): void{
    if (greet){
        console.log(`Olá ${greet} ${name}`);
        return;
    }
    console.log(`Olá ${name}`);
}
greeting("José")
greeting("Pedro", "Sr.")

// interfaces
interface MathFuncionParams {
    n1: number,
    n2: number
}

function sumNumbers(nums: MathFuncionParams){
    return nums.n1 + nums.n2;
}
console.log(sumNumbers({n1:1,n2:2}))

function muliplyNumbers(nums: MathFuncionParams){
    return nums.n1*nums.n2;
}

const someNumbers: MathFuncionParams = {
    n1: 5,
    n2: 10
}
console.log(muliplyNumbers(someNumbers));

// narrowing - checagem de tipos
function doSomething(info: number | boolean) {
    if (typeof info === "number"){
        console.log(`O número é ${info}`);
        return;
    }
    console.log("Não foi passado um número");
}
doSomething(5);
doSomething(true);

// generics
function showArraysItems<T>(arr: T[]) {
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
    name
    role
    isApproved

    constructor(name: string, role: string, isApproved: boolean) {
        this.name = name
        this.role = role
        this.isApproved = isApproved
    }

    showUserName() { 
        console.log(`O nome do usuário é ${this.name}`)
    }

    showUserRole(canShow: boolean):void { 
        if(canShow){
            console.log(`O perfil do usuário é ${this.role}`);
            return;
        }
        console.log("Informação restrita");
    }
}

const zeca = new User("zéca", "Admin", true)

console.log(zeca);
zeca.showUserName();
zeca.showUserRole(true);



// interface em classes
interface IVehicle {
    brand: string
    showBrand(): void
}

class Car implements IVehicle{
    brand
    wheels

    constructor(brand: string, wheels: number) {
        this.brand = brand
        this.wheels = wheels
    }
    showBrand(): void {
        console.log(`A marca do carro é ${this.brand} e ele possui ${this.wheels} rodas`)
    }
}

const fusca = new Car("VW", 4)

fusca.showBrand();

// heranca
class SuperCar extends Car {
    engine

    constructor(brand: string, wheels: number, engine: number) {
     super(brand, wheels)
     this.engine = engine   
    }
}
const a4 = new SuperCar("Audi", 4, 2)
console.log(a4);
a4.showBrand();

// Decorators - Precisa habilitar no tsconfig
// Constructor decorator
function BaseParameters() {
    return function <T extends {new (...args: any[]): {}}>(constructor: T){
        return class extends constructor {
            id = Math.random;
            createdAt = new Date();
        }
    }
}

@BaseParameters()
class Person {
    name;
    constructor(name: string){
        this.name = name;
    }
}

const sam = new Person("Sam");
console.log(sam);