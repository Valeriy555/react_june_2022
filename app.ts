const x = (str: string): number | string => {

    return '55'
}

const xVoid = (str: string): void => {
}

interface IUser {
    name: string,
    age: number,
    status: boolean,
    gender: string,
    city: string,
}

const user: IUser = {name: 'Valera', age: 41, status: true, gender: 'male', city: 'Odessa'}
// console.log(user.age);

const user_2: Partial<IUser> = {name: 'Vova', city: 'Lviv'} // можно частично прописывать поля
// console.log(user_2.city);

interface IUser_2<T> { // интерфейс с дженериком <T>
    name: string,
    age: number,
    status: boolean,
    gender: string,
    city: string,
    data: T // дженерик
}

const user_3: IUser_2<number[]> = {
    name: 'Valera',
    age: 41,
    status: true,
    gender: 'male',
    city: 'Odessa',
    data: [15, 26]
}
const user_4: IUser_2<string> = {
    name: 'Valera',
    age: 41,
    status: true,
    gender: 'male',
    city: 'Odessa',
    data: 'Любая строка'
}
const user_5: IUser_2<boolean> = {name: 'Valera', age: 41, status: true, gender: 'male', city: 'Odessa', data: false}

interface IDog {
    nameDog: string
    ageDog: number
}

const dogLover: IUser_2<IDog> = { // тут как дженерик используем другой интерфейс IDog
    name: 'Valera', age: 41, status: true, gender: 'male',
    city: 'Odessa',
    data: {nameDog: 'Rex', ageDog: 3}
}

// console.log(dogLover.data);

class User {

    // id:number;
    // name:string;
    // age:number

    constructor(private id: number, public name: string, public age: number) {
        // this.id = id;
        // this.name = name;
        // this.age = age;

    }

}

const userClass = new User(1, 'Max', 24) // экземпляр класса

// console.log(userClass.name);

interface IShapeActions {
    area: () => number,
    perimeter: () => number
}

interface IGreeting {
    hello: ()=> void
}

class Rectangle implements IShapeActions, IGreeting{ // класс с имплементацией интерфейсов
    constructor(private  a:number, private b: number) {
    }

    area(): number {
        return this.a*this.b; // формула площади
    }

    perimeter(): number {
        return this.a*2+this.b*2 ; // формула периметра
    }

    hello(): void {
        console.log('Privet Medved');
    }
}

const rectangle = new Rectangle(5,10); // экземпляр класса
// console.log(rectangle.area());
// console.log(rectangle.perimeter());

class Rectangle_2 implements IShapeActions{
    constructor(private a:number, private b:number) {
    }
    area(): number {
        return this.a*this.b; // формула площади
    }

    perimeter(): number {
        return this.a*2+this.b*2 ; // формула периметра
    }
    
}

const shapes: IShapeActions[] = [new Rectangle(5,10), new Rectangle_2(2,6)]

for (let shape of shapes) {
    console.log(shape.area());
    console.log(shape.perimeter());
}



