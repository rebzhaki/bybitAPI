let message: string = "here";
console.log("==>", message);

// let employee: {
//   firstName: string;
//   lastName: string;
//   age: number;
//   jobTitle: string;
// } = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 25,
//   jobTitle: "Web Developer",
// };
// console.log(employee);

// function add(a: number | string, b: number | string) {
//   if (typeof a === "number" && typeof b === "number") {
//     console.log(a + b);

//     return a + b;
//   }
//   if (typeof a === "string" && typeof b === "string") {
//     console.log(a.concat(b));
//     return a.concat(b);
//   }
//   throw new Error("Parameters must be numbers or strings");
// }

// add("4", "2");

// const max = 100;
// let counter = 0;

// counter < max ? counter++ : (counter = 1);
// console.log(counter); // 100

// interface Person {
//   firstName: String;
//   middleName?: String;
//   lastName: String;
// }
// function getFullName(person: Person) {
//   return `${person.firstName} ${person.lastName}`;
// }

// let person = {
//   firstName: "John",
//   lastName: "Doe",
// };
// let jane = {
//   firstName: "Jane",
//   middleName: "K.",
//   lastName: "Doe",
//   age: 22,
// };

// console.log(getFullName(person));

// interface StringFormat {
//   (str: string, isUpper: boolean): void;
// }
// let format: StringFormat;

// format = (data, isUpper) => {
//   console.log(isUpper ? data.toLocaleUpperCase() : data.toLocaleLowerCase());
// };

// format("hi", true);

// function add(a: number, b: number): number {
//   console.log(a + b);
//   return a + b;
// }
// add(2, 4);

// let add: (x: number, y?: number, z?: number) => number;

// add = function (a, b) {
//   if (b !== undefined) {
//     console.log(a + b);

//     return a + b;
//   }
//   console.log(a);

//   return a;
// };
// add(3);

// function applyDiscount(price: number, discount = 0.05): number {
//   return price * (1 - discount);
// }

// console.log(applyDiscount(100, 0.4)); // 95

// function getTotal(...numbers: number[]): number {
//   let total = 0;
//   numbers.forEach((num) => (total += num));
//   console.log(total);

//   return total;
// }
// getTotal(1, 2);

//function overloading
// function add(a: number, b: number): number;
// function add(a: string, b: string): string;
// function add(a: any, b: any): any {
//   console.log(a + b);

//   return a + b;
// }

// add(10, 30);

class Counter {
  private current: number = 0;
  count(): number;
  count(target: number): number[];
  count(target?: number): number | number[] {
    if (target) {
      let values = [];
      for (let start = this.current; start <= target; start++) {
        values.push(start);
      }
      this.current = target;
      return values;
    }
    // console.log(++this.current);

    return ++this.current;
  }
}
let counter = new Counter();

console.log(counter.count()); // return a number
console.log(counter.count(20)); // return an array
