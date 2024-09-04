
const getPersonName = function (person: { firstName: string; lastName: string }) {
  return `${person.firstName} ${person.lastName}`;
};
// 使用类型别名定义函数
type fn = (person: { firstName: string; lastName: string }) => string;

const getPersonName2: fn = function (person) {
  return `${person.firstName} ${person.lastName}`;
};

const getPersonName3: typeof getPersonName = function (person) {
  return `${person.firstName} ${person.lastName}`;
}
// 使用对象定义
type Fn2 = {
  (person: { firstName: string; lastName: string }): string
}
const getPersonName4:Fn2 = function (person) {
  return `${person.firstName} ${person.lastName}`;
}

// 箭头函数
const repeat = (
  str: string,
  times: number
):string => str.repeat(times);

// 作为函数参数
function greet(
  fn:(a:string)=> void
) {
  fn('world')
}

// 可选参数
// 这里的y的实际类型是number | undefined
function addNumber(x: number, y?: number) {
  return y ? x + y : x
}
addNumber(1)
addNumber(1, 2)
function addNumber1(x: number, y: number|undefined) {
  return y ? x + y : x
}
// 注意这里undefined不能省略
addNumber1(1, undefined)
addNumber1(1, 2)

// 默认参数
function buildName(firstName: string, lastName = 'Smith') {
  return `${firstName} ${lastName}`;
}

// 参数解构，机构对象，或数组/元组后面声明其类型
function fjg({ firstName, lastName }: { firstName: string; lastName: string }) {
  return `${firstName} ${lastName}`
}

// 重命名
function fjg2({firstName:fist, lastName:last}: {firstName: string; lastName: string}) {
  return `${fist} ${last}`
}

function f(
  [x, y]: [number, number]
) {
  // ...
}

// 剩余参数，在js剩余参数后面加上rest类型
function buildName2(firstName: string, ...restOfName: string[]) {
  return `${firstName} ${restOfName.join(' ')}`;
}

// 函数重载
function add(x: number, y: number): number;
function add(x: string, y: string): string;
function add(x: number | string, y: number | string): number | string {
  if (typeof x === 'string' && typeof y === 'string') {
    return x + y;
  } else if (typeof x === 'number' && typeof y === 'number') {
    return x + y;
  }
  throw new Error('Parameters must be both numbers or both strings');
}

// 对象方法重载
class Person {
  firstName: string;
  lastName: string;
  getName(type: number): string;
  getName(name: 'first' | 'last'): string;
  getName(nameOrType: number | string): string {
    if (typeof nameOrType === undefined) {
      return `${this.lastName} ${this.firstName}`
    }
    else if (nameOrType === 1 || nameOrType === 'first') {
      return this.firstName
    } else if (nameOrType === 2 || nameOrType === 'last') {
      return this.lastName
    }
  }
}
// 构造函数
class Animal {
  numLegs:number
}
type AnimalConstructor = new () => Animal;

type F = {
  new (str:string): object;
}