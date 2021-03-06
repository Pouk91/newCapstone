'use strict'

const store = require('../store.js')

const resetFormField = () => {
  $('form#sign-up').trigger('reset')
  $('form#sign-in').trigger('reset')
  $('form#sign-out').trigger('reset')
  $('form#change-password').trigger('reset')
  $('form#create-repair').trigger('reset')
  $('form#update-repair').trigger('reset')
  $('form#delete-repair').trigger('reset')
}

const signUpSuccess = (data) => {
  $('#messageBanner').text('Sign up successful!')
  setTimeout(function () { $('#messageBanner').text('') }, 4000)
  resetFormField()
}

const signUpFailure = (data) => {
  $('#messageBanner').text('Wrong credentials try again.')
  setTimeout(function () { $('#messageBanner').text('') }, 4000)
  resetFormField()
}

const signInSuccess = (data) => {
  store.user = data.user
  $('#messageBanner').text('Sign in successful!')
  setTimeout(function () { $('#messageBanner').text('') }, 4000)
  $('#sign-up').addClass('hide-elements')
  $('#sign-in').addClass('hide-elements')
  $('#change-password').removeClass('hide-elements')
  $('#sign-out').removeClass('hide-elements')
  $('#create-repair').removeClass('hide-elements')
  resetFormField()
}

const signInFailure = (data) => {
  $('#messageBanner').text('Wrong credentials try again!')
  setTimeout(function () { $('#messageBanner').text('') }, 4000)
  resetFormField()
}

const changePasswordSuccess = (data) => {
  $('#messageBanner').text('Change Password Succesful!')
  setTimeout(function () { $('#messageBanner').text('') }, 4000)
  resetFormField()
}

const changePasswordFailure = (data) => {
  $('#messageBanner').text('Couldn\'t Change Password!')
  setTimeout(function () { $('#messageBanner').text('') }, 4000)
  resetFormField()
}

const signOutSuccess = (data) => {
  $('#messageBanner').text('See You Next Time!')
  setTimeout(function () { $('#messageBanner').text('') }, 4000)
  $('#content').empty()
  $('#change-password').addClass('hide-elements')
  $('#sign-out').addClass('hide-elements')
  $('#sign-in').removeClass('hide-elements')
  $('#sign-up').removeClass('hide-elements')
  $('#create-repair').addClass('hide-elements')
  $('#update-repair').addClass('hide-elements')
  $('#delete-repair').addClass('hide-elements')
  resetFormField()
}

const signOutFailure = (data) => {
  resetFormField()
}

module.exports = {
  resetFormField,
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
