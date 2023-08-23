// import moment here; use this package in each function

const moment = require('moment');


const today = () => {
  // write code for dates.today
  return moment().format("dddd");
}

const calendar = () => {
  // write code for dates.calendar
  return moment().format("MMM D, YYYY");

// May 29, 2019
// 

}

const currentTime = () => {
  // write code for dates.currentTime
  
  return moment().format("hh:mm:ss A");

  // 03:21:51 PM

}

module.exports = {
  today,
  calendar,
  currentTime
}