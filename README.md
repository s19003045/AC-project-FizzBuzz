# **FizzBuzz 測試練習 :)**

---

## 說明

FizzBuzz 程式是經典的面試考題之一。我們會將一個大於 0 的整數傳到 fizzBuzz() 函式，並且該函式可以依下面的規則回傳結果

若該整數能被 3 整除，回傳 Fizz；
若該整數能被 5 整除，回傳 Buzz；
若該整數能被 3 和 5 同時整除，回傳 FizzBuzz；
若都不能整除，回傳該整數。

---

## 目的

**熟練軟體測試之〈單元測試〉**

單元測試（Unit Test）：針對個別的類別和方法，測試執行結果符合預期。通常會由撰寫功能的人自行撰寫單元測試，因為開發者最清楚程式碼的內部結構。

---

## 工具及參考

**測試工具：Mocha(js 的框架) 和 Chai(一種斷言庫)**
[Mocha](https://mochajs.org/)
[單元測試：Mocha、Chai 和 Sinon](https://cythilya.github.io/2017/09/17/unit-test-with-mocha-chai-and-sinon/)

---

## 構思

- [case 1] input: 9, expect output : Fizz
- [case 2] input: 10, expect output : Buzz
- [case 3] input: 15, expect output : FizzBuzz
- [case 4] input: 8, expect output : 8

---

## 實作

[**fizzBuzz.js**](https://github.com/s19003045/AC-project-FizzBuzz/blob/master/js/fizzbuzz.js)，程式碼如下：

```js
function fizzBuzz(num) {
  let str = "";
  if (num % 3 === 0) {
    str += "Fizz";
  }
  if (num % 5 === 0) {
    str += "Buzz";
  }
  if (str != "") {
    return str;
  } else {
    return num;
  }
}
```

[**fizz_buzz.js**](https://github.com/s19003045/AC-project-FizzBuzz/blob/master/test/fizzbuzz_spec.js)，程式碼如下：

```js
// [case 1] input: 9, expect output: Fizz
// [case 2]input: 10, expect output: Buzz
// [case 3]input: 15, expect output: FizzBuzz
// [case 4]input: 8, expect output: 8
var should = chai.should();
describe("function fizzbuzz", function() {
  it("[case 1] input: 9, expect output: Fizz", function() {
    let num = 9;
    let result = fizzBuzz(num);
    result.should.be.equal("Fizz");
  });
  it("[case 2]input: 10, expect output: Buzz", function() {
    let num = 10;
    let result = fizzBuzz(num);
    result.should.be.equal("Buzz");
  });
  it("[case 3] input: 15, expect output: Fizz", function() {
    let num = 15;
    let result = fizzBuzz(num);
    result.should.be.equal("FizzBuzz");
  });
  it("[case 4] input: 8, expect output: 8", function() {
    let num = 8;
    let result = fizzBuzz(num);
    result.should.be.equal(num);
  });
});
```
