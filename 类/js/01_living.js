function F() {
  this.name = "123";
  // this === 实例对象
  console.log(this);
}
F.prototype.name1 = "name1";
const f = new F();
// 实例对象
console.log(f);
// 实例对象的__proto__ === 实例对象的构造函数的prototype === 构造函数的prototype
console.log(f.__proto__);
console.log(f.constructor.prototype);
console.log(F.prototype);
// 都指向同一个堆内存引用，true
console.log(f instanceof F);
