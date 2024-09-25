// nameSpace不仅可以包含类型代码，还可以包含实际代码
namespace Utils {
  export function isString(value:any) {
    return typeof value === 'string';
  }
  isString('a'); // true
}

// 外部使用
Utils.isString('a'); // true

// 别名

import isMyString = Utils.isString;

// namespace可以嵌套


// 外部使用需要export

// 使用别名用import =

// 如果namespace放在一个单独的文件里，那么引入这个文件需要使用三斜杠语法
//// <reference path="a.ts" />


// 多个同名namespace会自动合并，合并时只有export的成员才会被合并


// 命名空间还可以和同名函数合并，但要求先创建出一个函数对象
// 命名空间也可以和同名class合并，但要求先创建出一个class对象
// 命名空间还可以和同名Enum合并，Enum成员与命名空间成员不允许同名




