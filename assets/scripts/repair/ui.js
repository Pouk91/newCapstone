'use strict'

const store = require('../store.js')
// const showWorkOutsTemplate = require('../templates/workouts.handlebars')

const resetFormField = function () {
  document.getElementById('create-repair').reset()
  document.getElementById('update-repair').reset()
  document.getElementById('delete-repair').reset()
  document.getElementById('get-repairs').reset()
}

const createRepairSuccess = (data) => {
  console.log('succes')
  $('#messageBanner').text('Workout Created!')
  setTimeout(function () { $('#messageBanner').text('') }, 4000)
  resetFormField()
  // store.workout = data.workout
  console.log(data, 'createRepairs')
}

const createRepairFailure = (data) => {
  resetFormField()
  console.log(data)
}

// const getRepairsSuccess = (data) => {
//   $('#messageBanner').text('Here are your workouts')
//   setTimeout(function () { $('#messageBanner').text('') }, 4000)
//   $('.content').empty()
//   const showWorkOutsHtml = showWorkOutsTemplate({ workouts: data.workouts })
//   $('.content').append(showWorkOutsHtml)
//   $('.content').removeClass('hide-elements')
//   resetFormField()
//   console.log(data)
// }
//
// const getRepairsFailure = (data) => {
//   $('#messageBanner').text('No workouts saved, enter some to start!')
//   setTimeout(function () { $('#messageBanner').text('') }, 4000)
//   resetFormField()
// }
//
// const updateRepairSuccess = (data) => {
//   $('#messageBanner').text('Workout Updated!')
//   setTimeout(function () { $('#messageBanner').text('') }, 4000)
//   $('.content').addClass('hide-elements')
//   resetFormField()
//   console.log('Success')
// }
//
// const updateRepairFailure = (data) => {
//   $('#messageBanner').text('Sorry ID not found. Click get workouts for one!')
//   setTimeout(function () { $('#messageBanner').text('') }, 4000)
//   resetFormField()
//   console.log('Fail')
// }
//
// const deleteRepairSuccess = (data) => {
//   $('#messageBanner').text('Workout Deleted!')
//   setTimeout(function () { $('#messageBanner').text('') }, 4000)
//   $('.content').addClass('hide-elements')
//   resetFormField()
//   console.log('Success')
// }
//
// const deleteRepairFailure = (data) => {
//   $('#messageBanner').text('Sorry ID not found. Click get workouts for one!')
//   setTimeout(function () { $('#messageBanner').text('') }, 4000)
//   resetFormField()
//   console.log('Failure')
// }

module.exports = {
  createRepairSuccess,
  createRepairFailure
  // getRepairsSuccess,
  // getRepairsFailure,
  // updateRepairSuccess,
  // updateRepairFailure,
  // deleteRepairSuccess,
  // deleteRepairFailure
}
