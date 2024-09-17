// 属性可以在顶层声明， 也可以同时给出类型，如果声明时未给出类型， 则ts认为是any
class PersonOne {
  firstName: string
  lastName: string
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName
    this.lastName = lastName
  }
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`
  }
}

// 如果声明时，给出了具体值， ts会推断其类型
class PersonTwo {
  firstName = ''
  lastName = ''
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName
    this.lastName = lastName
  }
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`
  }
}
// 编译选项 strictPropertyInitialization 是否开启初始值检查， 如果避免报错可以使用非空断言
class Point {
  x!: number;
  y!: number;
}

// 属性修饰符
// readonly,

class PersonThree {
  // readonly 可以同时在初始化赋值，和构造函数中赋值，如果构造函数中有赋值，以构造函数中的值为准
  // 其他地方均不可再赋值
  readonly firstName:string = 'my first name'
  constructor(firstName: string) {
    this.firstName = firstName
  }
}

// 类的方法类型和构造函数与普通方法一样
// 可以使用重载，参数默认值等


// 存取器方法
// 类只有get方法，没有set方法，证明该属性只读
// 可访问下 get 和 set要保持一致

// 属性索引

class Mycls {
  // 类的方法其实是属性值为方法的属性， 所以属性索引定义时，需要定义属性索引时，需要包含方法定义
  [s:string]: boolean | ((s:string) => boolean)
  fn () {
    return false
  }
  get(s:string) {
    return this[s] as boolean
  }

}
class Mycls2 {
  [s:string]: boolean
  // 属性存储器视为属性
  get isInstance () {
    return false
  }
}

// 类的interface接口
// implements

interface Country {
  name:string;
  capital:string;
}
// 或
type Country1 {
  name: string;
  capital: string;
}

class MyCountry implements Country { // 或者 Country1
  name: string
  capital: string
  constructor(name: string, capital: string) {
    this.name = name
    this.capital = capital
  }
} 

// 可选属性
interface A {
  x: number;
  y?: number;
}

class B implements A {
  x = 0;
}

const b = new B();
// b.y = 10; // 报错

// implements声明并不能替代class的类型声明，只要类的类型通过interface或type的检查即可， 对于一些接口或type中的可选属性，类中如果需要使用就需要声明
// implements后面可以接类，ts会将类视为接口
class C implements B {
  x = 100
  y? = 200
}

// 类可以声明接口未定义属性


// interface 描述的属性或方法都是公开的



// 实现多个接口

// interface B extends A {}

// 可访问下修饰符

class Greeter {}

// public

// private

// protected: 只能在类的内部使用该成员，实例无法使用该成员，但是子类内可以使用

// 实例属性的简写形式
class Point3 {
  constructor(public x: number, public y: number) {
    // public不可省略
  }
}
// 除了public修饰符，构造方法的参数名只要有private、protected、readonly修饰符，都会自动声明对应修饰符的实例属性。