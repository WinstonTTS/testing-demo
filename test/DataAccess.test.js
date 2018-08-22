const assert = require('assert')
const DataAccess = require('../DataAccess')

describe('DataAccess', () => {
  describe('getPost()', () => {
    it('should return a post', () => {
      return DataAccess.getPost(1)
        .then((data) => {
          assert.equal(1, JSON.parse(data).id)
        })
    })
  })
})
