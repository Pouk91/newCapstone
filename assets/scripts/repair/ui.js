'use strict'

const store = require('../store.js')
const showRepairsTemplate = require('../templates/repairs.handlebars')

const resetFormField = () => {
  $('form#sign-up').trigger('reset')
  $('form#sign-in').trigger('reset')
  $('form#sign-out').trigger('reset')
  $('form#change-password').trigger('reset')
  $('form#create-repair').trigger('reset')
  $('form#update-repair').trigger('reset')
  $('form#delete-repair').trigger('reset')
}

const createRepairSuccess = (data) => {
  $('#messageBanner').text('Repair Created!')
  setTimeout(function () { $('#messageBanner').text('') }, 4000)
  resetFormField()
}

const createRepairFailure = (data) => {
  $('#messageBanner').text('Failed to create Repair!')
  setTimeout(function () { $('#messageBanner').text('') }, 4000)
  resetFormField()
}

const getRepairsSuccess = (data) => {
  $('#content').empty()
  const showRepairsHTML = showRepairsTemplate({ repairs: data.repairs })
  $('#content').append(showRepairsHTML)
  resetFormField()
}

const getRepairsFailure = (data) => {
  resetFormField()
}

const updateRepairSuccess = (data) => {
  $('#messageBanner').text('Repair Updated!')
  setTimeout(function () { $('#messageBaner').text('') }, 4000)
  resetFormField()
}

const updateRepairFailure = (data) => {
  $('#messageBanner').text('Couldn\'t Update Repair!')
  setTimeout(function () { $('#messageBanner').text('') }, 4000)
  resetFormField()
}

const deleteRepairSuccess = (id) => {
  console.log('id is ', id)
  $('#messageBanner').text('Repair Deleted!')
  setTimeout(function () { $('#messageBanner').text('') }, 4000)
  // $('#content').addClass('hide-elements')
  resetFormField()
}

const deleteRepairFailure = (data) => {
  $('#messageBanner').text('Provide an ID!')
  setTimeout(function () { $('#messageBanner').text('') }, 4000)
  resetFormField()
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
