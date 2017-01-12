//Creating Objects in different ways:
//1. using object literals
//2. using constructor function
//3. using create function
//4. using ECMA Script 6 classes

//------------1. using object literals------------
var cat = {
    name: 'fluffy1',
    color: 'brown1',
    
};
cat.tail = 'long';
cat.speak=function(){display("meeoowww1")};
display(cat); //tail and speak are also included
cat.speak();

//------------2. using constructor function------------
function Catt(name,color){
  this.name = name,
  this.color = color
  this.speak =function(){display('meeooowww2')}
}
var Catty=new Catt('fluffy2','brown2');
display(Catty)

//------------3. using create function------------
var Catty3 = Object.create(Object.prototype,{
  name:{
    value:'fluffy3',
    enumerable:true,
    writable:true,
    configurable:true
  },
  color:{
    value:'brown3',
    enumerable:true,
    writable:true,
    configurable:true
  }  
})
display(Catty3)

//------------using ECMA Script 6 classes------------

class Cats{
  constructor(name,color){
    this.name=name;
    this.color=color
  }
  speak(){
    display('neeooowww4')
  }
}
var Catty4=new Cats('fluffy4','brown4');
display(Catty4)


//------------------Prototypical Inheritence using classes--------------
class Animal{
  constructor(voice){
    this.voice=voice || 'grunts';
  }
  
  speak(){
    display(this.voice)
  }
}

class Cat extends Animal{
  constructor(name, color){
    super('meow');
    this.name=name;
    this.color=color;
  }
}

var fluffy=new Cat('Fluffy', 'White');
display(fluffy)
display(fluffy.constructor)//this constructor is a class
//fluffy.speak()
display(Object.keys(fluffy.__proto__.__proto__))//members of classes are not enumerable
//consider them as being private members
display(fluffy.__proto__.__proto__.hasOwnProperty('speak'))//since inumerable, cannot be found in keys, but present as property

