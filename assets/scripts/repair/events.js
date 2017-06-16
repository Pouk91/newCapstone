'use strict'
// const store = require('../store.js')
const getFormFields = require(`../../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onCreateRepair = function (event) {
  // console.log('success')
  event.preventDefault()
  const data = getFormFields(this)
  console.log(data)
  api.createRepair(data)
    .then(ui.createRepairSuccess)
    .then(onGetRepairs)
    .catch(ui.createRepairFailure)
}

const onGetRepairs = function (event) {
  // console.log('success')
  if (event) {
    event.preventDefault()
  }
  // const data = getFormFields(this)
  api.getRepairs()
    .then(ui.getRepairsSuccess)
    .catch(ui.getRepairsFailure)
}

const onUpdateRepair = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  const id = data.repair.id
  // debugger;
  api.updateRepair(id, data)
    .then(ui.updateRepairSuccess)
    .then(onGetRepairs)
    .catch(ui.updateRepairFailure)
}

const onDeleteRepair = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  // console.log(data.id)
  api.deleteRepair(data.repair.id)
    .then(ui.deleteRepairSuccess)
    .then(onGetRepairs)
    .catch(ui.deleteRepairFailure)
}

// event handlers
const addHandlers = () => {
  $('#create-repair').on('submit', onCreateRepair)
  $('#get-repairs').on('submit', onGetRepairs)
  $('#update-repair').on('submit', onUpdateRepair)
  $('#delete-repair').on('submit', onDeleteRepair)
  $('#create-repair').addClass('hide-elements')
  $('#update-repair').addClass('hide-elements')
  $('#delete-repair').addClass('hide-elements')
}

module.exports = {
  addHandlers,
  onGetRepairs
}
