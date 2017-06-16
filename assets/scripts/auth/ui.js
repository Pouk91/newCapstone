'use strict'

const store = require('../store.js')

const signUpSuccess = (data) => {
  $('#messageBanner').text('Sign up successful!')
  setTimeout(function () { $('#messageBanner').text('') }, 4000)
}

const signUpFailure = (data) => {
  $('#messageBanner').text('Wrong credentials try again.')
  setTimeout(function () { $('#messageBanner').text('') }, 4000)
}

const signInSuccess = (data) => {
  store.user = data.user
  $('#messageBanner').text('Sign in successful!')
  setTimeout(function () { $('#messageBanner').text('') }, 4000)
}

const signInFailure = (data) => {
  $('#messageBanner').text('Wrong credentials try again!')
  setTimeout(function () { $('#messageBanner').text('') }, 4000)
}

const changePasswordSuccess = (data) => {
  $('#messageBanner').text('Change Password Succesful!')
  setTimeout(function () { $('#messageBanner').text('') }, 4000)
}

const changePasswordFailure = (data) => {
  $('#messageBanner').text('Same password try again!')
  setTimeout(function () { $('#messageBanner').text('') }, 4000)
}

const signOutSuccess = (data) => {
  $('#messageBanner').text('See You Next Time!')
  setTimeout(function () { $('#messageBanner').text('') }, 4000)
  $('.content').empty()
}

const signOutFailure = (data) => {
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
