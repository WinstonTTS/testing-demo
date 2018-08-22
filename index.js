const DataAccess = require('./DataAccess')
const TimeStamp = require('./TimeStamp')

DataAccess.getPost(2)
  .then((data) => {
    console.log(data)

    const currentTime = TimeStamp.getTime()
    console.log(currentTime)
  })
