class Class {
  static #foo: number = 42;

  static get foo() {
    return Class.#foo;
  }
}
