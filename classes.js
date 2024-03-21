// 2 ways to create classes in javascript
// 1. declaration way
class User {
  // private properties are created using #
  static #id = 20;
  #name;

  constructor(id, name) {
    this.#name = name;
  }

  // getter and setter
  static getId() {
    return this.#id;
  }

  getName() {
    return this.#name;
  }

  setId(id) {
    this.#id = id;
  }

  setName(name) {
    this.#name = name;
  }

  static get id() {
    return this.#id;
  }

  get Name() {
    return this.#name;
  }

  static staticGetId() {
    return this.#id;
  }
}
let user = new User(1, "avinash");
console.log(user);
console.log(User.getId());
console.log(user.id);
console.log(User.staticGetId());

// 2. singleton classes
class Random {
  static #singleTonInstance;
  static #isInternalConstructing = false;

  constructor() {
    if (!Random.#isInternalConstructing) {
      throw new Error("singleton cannot be created");
    }
    Random.#isInternalConstructing = false;
  }

  static getInstance() {
    Random.#isInternalConstructing = true;
    Random.#singleTonInstance = new Random();
    return Random.#singleTonInstance;
  }
}

// let random = new Random();
let random = Random.getInstance();
console.log(random);
random = Random.getInstance();
console.log(random);
// 2. anonymous assignment
