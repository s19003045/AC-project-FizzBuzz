// [case 1] input: 9, expect output: Fizz
// [case 2]input: 10, expect output: Buzz
// [case 3]input: 15, expect output: FizzBuzz
// [case 4]input: 8, expect output: 8
var should = chai.should()
describe("function fizzbuzz", function () {
  it("it should return 'Fizz' when number can be divide by 3", function () {
    let num = 9
    let result = fizzBuzz(num)
    result.should.be.equal('Fizz')
  })
  it("it should return 'Bizz' when number can be divide by 5", function () {
    let num = 10
    let result = fizzBuzz(num)
    result.should.be.equal('Buzz')
  })
  it("it should return 'FizzBuzz' when number can be divide by 3 and divide by 5", function () {
    let num = 15
    let result = fizzBuzz(num)
    result.should.be.equal('FizzBuzz')
  })
  it("it should return number equal to input when number can not be divide by 3 or divide by 5", function () {
    let num = 8
    let result = fizzBuzz(num)
    result.should.be.equal(num)
  })
})


