'use strict'
// const store = require('../store.js')
const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')

const onCreateRepair = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  console.log('data is ', data)
  api.createRepair(data)
    .then(ui.createRepairSuccess)
    .then(onGetRepairs)
    .catch(ui.createRepairFailure)
}

const onGetRepairs = function (event) {
  if (event) {
    event.preventDefault()
  }
  api.getRepairs()
    .then(ui.getRepairsSuccess)
    .catch(ui.getRepairsFailure)
}

const onUpdateRepair = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  console.log('data is ', data)
  const id = data.repair.id
  api.updateRepair(id, data)
    .then(ui.updateRepairSuccess)
    .then(onGetRepairs)
    .catch(ui.updateRepairFailure)
}

const onDeleteRepair = function (event) {
  event.preventDefault()
  const repairId = $(event.target).attr('repairId')
  console.log('data is ', repairId)
  api.deleteRepair(repairId)
    .then(ui.deleteRepairSuccess)
    .then(onGetRepairs)
    .catch(ui.deleteRepairFailure)
}

// event handlers
const addHandlers = () => {
  $('#create-repair').on('submit', onCreateRepair)
  $('#get-repairs').on('submit', onGetRepairs)
  $('#update-repair').on('submit', onUpdateRepair)
  $('#content').on('click', '.delete-repair-button', onDeleteRepair)
  $('#create-repair').addClass('hide-elements')
  $('#update-repair').addClass('hide-elements')
  $('#delete-repair').addClass('hide-elements')
}

module.exports = {
  addHandlers,
  onGetRepairs
}
