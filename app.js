var x = function (str) {
    return '55';
};
var xVoid = function (str) {
};
var user = { name: 'Valera', age: 41, status: true, gender: 'male', city: 'Odessa' };
// console.log(user.age);
var user_2 = { name: 'Vova', city: 'Lviv' }; // можно частично прописывать поля
var user_3 = {
    name: 'Valera',
    age: 41,
    status: true,
    gender: 'male',
    city: 'Odessa',
    data: [15, 26]
};
var user_4 = {
    name: 'Valera',
    age: 41,
    status: true,
    gender: 'male',
    city: 'Odessa',
    data: 'Любая строка'
};
var user_5 = { name: 'Valera', age: 41, status: true, gender: 'male', city: 'Odessa', data: false };
var dogLover = {
    name: 'Valera', age: 41, status: true, gender: 'male',
    city: 'Odessa',
    data: { nameDog: 'Rex', ageDog: 3 }
};
// console.log(dogLover.data);
var User = /** @class */ (function () {
    // id:number;
    // name:string;
    // age:number
    function User(id, name, age) {
        // this.id = id;
        // this.name = name;
        // this.age = age;
        this.id = id;
        this.name = name;
        this.age = age;
    }
    return User;
}());
var userClass = new User(1, 'Max', 24); // экземпляр класса
var Rectangle = /** @class */ (function () {
    function Rectangle(a, b) {
        this.a = a;
        this.b = b;
    }
    Rectangle.prototype.area = function () {
        return this.a * this.b; // формула площади
    };
    Rectangle.prototype.perimeter = function () {
        return this.a * 2 + this.b * 2; // формула периметра
    };
    Rectangle.prototype.hello = function () {
        console.log('Privet Medved');
    };
    return Rectangle;
}());
var rectangle = new Rectangle(5, 10); // экземпляр класса
// console.log(rectangle.area());
// console.log(rectangle.perimeter());
var Rectangle_2 = /** @class */ (function () {
    function Rectangle_2(a, b) {
        this.a = a;
        this.b = b;
    }
    Rectangle_2.prototype.area = function () {
        return this.a * this.b; // формула площади
    };
    Rectangle_2.prototype.perimeter = function () {
        return this.a * 2 + this.b * 2; // формула периметра
    };
    return Rectangle_2;
}());
var shapes = [new Rectangle(5, 10), new Rectangle_2(2, 6)];
for (var _i = 0, shapes_1 = shapes; _i < shapes_1.length; _i++) {
    var shape = shapes_1[_i];
    console.log(shape.area());
    console.log(shape.perimeter());
}
