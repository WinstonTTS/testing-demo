const rp = require('request-promise')

module.exports = {
  getPost: function(postId) {
    return rp(`http://jsonplaceholder.typicode.com/posts/${postId}`)
  },
}
