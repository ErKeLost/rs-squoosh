const { plus100, plus } = require('./index')

console.assert(plus100(0) === 100, 'Simple test failed')
const res = plus(123456)
console.log(res)
console.info('Simple test passed')
