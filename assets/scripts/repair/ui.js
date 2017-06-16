'use strict'

const store = require('../store.js')
const showRepairsTemplate = require('../templates/repairs.handlebars')

const resetFormField = function () {
  document.getElementById('sign-up').reset()
  document.getElementById('sign-in').reset()
  document.getElementById('change-password').reset()
  document.getElementById('sign-out').reset()
  document.getElementById('create-repair').reset()
  document.getElementById('update-repair').reset()
  document.getElementById('delete-repair').reset()
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
  $('.content').empty()
  const showRepairsHTML = showRepairsTemplate({ repairs: data.repairs })
  $('.content').append(showRepairsHTML)
  resetFormField()
}

const getRepairsFailure = (data) => {
  resetFormField()
}

const updateRepairSuccess = (data) => {
  $('#messageBanner').text('Repair Updated!')
  setTimeout(function () { $('#messageBaner').text('') }, 4000)
//   $('.content').addClass('hide-elements')
  resetFormField()
}

const updateRepairFailure = (data) => {
  $('#messageBanner').text('Couldn\'t Update Repair!')
  setTimeout(function () { $('#messageBanner').text('') }, 4000)
  resetFormField()
}

const deleteRepairSuccess = (data) => {
  $('#messageBanner').text('Repair Deleted!')
  setTimeout(function () { $('#messageBanner').text('') }, 4000)
  // $('.content').addClass('hide-elements')
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
