// ts和支持所有es语法
// ts支持导入导出类型

export type Bool = true | false;

// import 语句既可以导入类型，也可以导入变量

// 为了区分ts，可以使用以下方式

// import { type A, a } from './a'
// import type { a } from './a'

// 同样export也可以使用以下方法用来区分导入正常变量还是类型

// export { type A, type B  }
// export type { A, B}

