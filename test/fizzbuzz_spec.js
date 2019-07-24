// [case 1] input: 9, expect output: Fizz
// [case 2]input: 10, expect output: Buzz
// [case 3]input: 15, expect output: FizzBuzz
// [case 4]input: 8, expect output: 8
var should = chai.should()
describe("function fizzbuzz", function () {
  it("[case 1] input: 9, expect output: Fizz", function () {
    let num = 9
    let result = fizzBuzz(num)
    result.should.be.equal('Fizz')
  })
  it("[case 2]input: 10, expect output: Buzz", function () {
    let num = 10
    let result = fizzBuzz(num)
    result.should.be.equal('Buzz')
  })
  it("[case 3] input: 15, expect output: Fizz", function () {
    let num = 15
    let result = fizzBuzz(num)
    result.should.be.equal('FizzBuzz')
  })
  it("[case 4] input: 8, expect output: 8", function () {
    let num = 8
    let result = fizzBuzz(num)
    result.should.be.equal(num)
  })
})


