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