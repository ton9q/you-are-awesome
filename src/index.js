const createEnumerableProperty = (property) => {
  return property;
};

const createNotEnumerableProperty = (property) => {
  Object.defineProperty(Object.prototype, property, {
    value: "value", enumerable: false
  });

  return property;
};

const createProtoMagicObject = () => {
  function f() {};
  f.prototype = f.__proto__;

  return f;
};

var counter1 = 0; // variable for incrementor()

const incrementor = () => {
  counter1++;

  return incrementor;
};

incrementor.valueOf = _ => counter1;

var counter2 = 0; // variable for asyncIncrementor()

const asyncIncrementor = () => {
  return new Promise(resolve => {
    resolve(++counter2);
  });
};

const createIncrementer = () => {
  function* increment() {
    var value = 0;

    while(value < 10) {
      yield ++value;
    }
  } 

  return increment();
};

const returnBackInSecond = (param) => {
  return new Promise(resolve => {
    setTimeout( _ => {
      resolve(param);
    }, 1000);
  });
};

const getDeepPropertiesCount = (obj) => {
  let count = Object.keys(obj).length;

  for (let property in obj) {
    if (typeof obj[property] === "object"){
      count += getDeepPropertiesCount(obj[property]);
    }
  }

  return count;
};

const createSerializedObject = () => {
  return {name: "Anton", surname: "Kuchma",
    toString: function() {
      return this.name + " " + this.surname;
    }, 
    toJSON: function() {
      return this.name + " " + this.surname;
    }
  };
};

const sortByProto = (array) => {
  return array.sort((a, b) => a - b);
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;