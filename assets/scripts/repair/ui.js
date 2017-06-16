'use strict'

const store = require('../store.js')
const showRepairsTemplate = require('../templates/repairs.handlebars')

const createRepairSuccess = (data) => {
  console.log('succes')
  $('#messageBanner').text('Repair Created!')
  setTimeout(function () { $('#messageBanner').text('') }, 4000)
  // console.log(data, 'createRepairs')
}

const createRepairFailure = (data) => {
  console.log(data)
}

const getRepairsSuccess = (data) => {
// //   $('#messageBanner').text('Here are your workouts')
//   setTimeout(function () { $('#messageBanner').text('') }, 4000)
  $('.content').empty()
  const showRepairsHTML = showRepairsTemplate({ repairs: data.repairs })
  $('.content').append(showRepairsHTML)
//   $('.content').removeClass('hide-elements')
  console.log('Success', data)
}
//
const getRepairsFailure = (data) => {
//   $('#messageBanner').text('No workouts saved, enter some to start!')
//   setTimeout(function () { $('#messageBanner').text('') }, 4000)
  console.log('Failure', data)
}

const updateRepairSuccess = (data) => {
//   $('#messageBanner').text('Workout Updated!')
  // setTimeout(function () { $('#messageBaner').text('') }, 4000)
//   $('.content').addClass('hide-elements')
  console.log('Success', data)
}

const updateRepairFailure = (data) => {
//   $('#messageBanner').text('Sorry ID not found. Click get workouts for one!')
//   setTimeout(function () { $('#messageBanner').text('') }, 4000)
  console.log('Fail', data)
}
//
const deleteRepairSuccess = (data) => {
//   $('#messageBanner').text('Workout Deleted!')
//   setTimeout(function () { $('#messageBanner').text('') }, 4000)
//   $('.content').addClass('hide-elements')

  console.log('Success')
}
//
const deleteRepairFailure = (data) => {
//   $('#messageBanner').text('Sorry ID not found. Click get workouts for one!')
//   setTimeout(function () { $('#messageBanner').text('') }, 4000)

  console.log('Failure')
}

module.exports = {
  createRepairSuccess,
  createRepairFailure,
  getRepairsSuccess,
  getRepairsFailure,
  updateRepairSuccess,
  updateRepairFailure,
  deleteRepairSuccess,
  deleteRepairFailure
}
