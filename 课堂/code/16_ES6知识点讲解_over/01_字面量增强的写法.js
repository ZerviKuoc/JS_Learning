var name = "why"
var age = 18

var obj = {
  // 1.property shorthand(属性的简写)
  name,
  age,

  // 2.method shorthand(方法的简写)
  foo: function() {
    console.log(this)
  },
  bar() {
    console.log(this)
  },
  baz: () => {
    console.log(this)
  },

  // 3.computed property name(计算属性名)
  [name + 123]: 'hehehehe'
}

obj.baz() // {} 箭头函数 this ，默认调用
obj.bar()
obj.foo()
console.log("=====================================");
obj[name + 123] = "hahaha"
console.log(obj)
