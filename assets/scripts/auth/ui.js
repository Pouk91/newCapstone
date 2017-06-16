'use strict'

const store = require('../store.js')
// const showWorkOutsTemplate = require('../templates/workouts.handlebars')

const resetFormField = function () {
  document.getElementById('sign-up').reset()
  document.getElementById('sign-in').reset()
  document.getElementById('change-password').reset()
  document.getElementById('sign-out').reset()
}

const signUpSuccess = (data) => {
  console.log('Success')
  // $('#messageBanner').text('Sign up successful!')
  // setTimeout(function () { $('#messageBanner').text('') }, 4000)
  resetFormField()
}

// On signup failure message appears for 2 seconds
const signUpFailure = (data) => {
  console.log('Fail')
  // $('#messageBanner').text('Wrong credentials try again.')
  // setTimeout(function () { $('#messageBanner').text('') }, 4000)
  resetFormField()
}

const signInSuccess = (data) => {
  store.user = data.user
  console.log('Success')
  // $('#messageBanner').text('Sign in successful!')
  // setTimeout(function () { $('#messageBanner').text('') }, 4000)
  resetFormField()
}

const signInFailure = (data) => {
  // $('#messageBanner').text('Wrong credentials try again!')
  // setTimeout(function () { $('#messageBanner').text('') }, 4000)
  resetFormField()
  console.log('Fail')
}

const changePasswordSuccess = (data) => {
  // $('#messageBanner').text('Change Password Succesful!')
  // setTimeout(function () { $('#messageBanner').text('') }, 4000)
  resetFormField()
  console.log('Success')
}

const changePasswordFailure = (data) => {
  // $('#messageBanner').text('Same password try again!')
  // setTimeout(function () { $('#messageBanner').text('') }, 4000)
  resetFormField()
  console.log('Fail')
}

const signOutSuccess = (data) => {
  // $('#messageBanner').text('See You Next Time!')
  // setTimeout(function () { $('#messageBanner').text('') }, 4000)
  resetFormField()
  console.log('Success')
}

const signOutFailure = (data) => {
  resetFormField()
  console.log('Fail')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
