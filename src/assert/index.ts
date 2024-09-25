// 类型断言
// 写法1
type T = 'a' | 'b' | 'c';
let foo = 'a'

let bar = foo as T

// 写法2
let baz: T = <T>foo

// 断言并不意味着可以把某个值断言为任意类型
// 值类型与断言类型必须满足 expr 是 T的子类型， 或者T是expr的子类型

// as const会将字面量的类型断言为不可变类型，缩小成 TypeScript 允许的最小类型。
// 注意，as const断言只能用于字面量，不能用于变量。另外，as const也不能用于表达式
// 由于as const会将数组变成只读元组，所以很适合用于函数的 rest 参数。
      // 如果函数定义了固定数量的参数，如果在函数调用时，使用扩展运算符(...)结构一个数组作为参数，那么这个数组必须是元组，因为ts需要知道元组的长度
      // 这种场景也是as const使用的场景，将数组变成只读元组


// 非空断言， 提高非空断言，提示那些可能为空的变量，告诉ts他们一定不为空。在变量明后面加！



// 函数断言
function isString(value:unknown):void {
  if (typeof value !== 'string')
    throw new Error('Not a string');
}

function isString1(value:unknown):asserts value is string { // 3.7后新的返回类型 assets is 都是关键字，这个告诉ts 这个函数的返回值必须是string，但其实这个函数最终返回的还是void
  if (typeof value !== 'number')
    throw new Error('Not a number');
}
function assertIsDefined<T>(
  value:T
):asserts value is NonNullable<T> {
  if (value === undefined || value === null) {
    throw new Error(`${value} is not defined`)
  }
}
// 判断一个参数保证为真，assets简写形式
function assert(x:unknown):assets x {
  //...
}


// 类型保护函数
function isString2(value: unknown):value is string {// is作为运算符，判断左右两边的类型是否相等
  return typeof value === 'string';
}


// NonNullable