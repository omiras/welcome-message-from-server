const greetings = require('greetings')

function greetDevelopers(list) {
  
    for (student of list) {
      student.greeting = `${greetings()} ${student.firstName}, what do you like the most about ${student.language}?`
    }
    
    return list
  }

  module.exports = greetDevelopers;
