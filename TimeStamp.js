const Moment = require('moment')

function getTime() {
  const currentTime = new Moment()

  return currentTime.format('h:mm:ss a')
}

module.exports = {
  getTime: getTime
}
