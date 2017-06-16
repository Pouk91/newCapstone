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
    .catch(ui.createRepairFailure)
}

// const onGetRepairs = function (event) {
//   // console.log('success')
//   event.preventDefault()
//   // const data = getFormFields(this)
//   api.getRepairs()
//   .then(ui.getRepairsSuccess)
//   .catch(ui.getRepairsFailure)
// }
//
// const onUpdateRepair = function (event) {
//   event.preventDefault()
//   const data = getFormFields(this)
//   const id = data.id
//   // console.log(data.id)
//   api.updateRepair(id, data)
//   .then(ui.updateRepairSuccess)
//   .catch(ui.updateRepairFailure)
// }
//
// const onDeleteRepair = function (event) {
//   event.preventDefault()
//   const data = getFormFields(this)
//   // console.log(data.id)
//   api.deleteRepair(data.id)
//     .then(ui.deleteRepairSuccess)
//     .catch(ui.deleteRepairFailure)
// }

// event handlers
const addHandlers = () => {
  $('#create-repair').on('submit', onCreateRepair)
  // $('#get-workouts').on('submit', getRepairs)
  // $('#update-workout').on('submit', onUpdateRepair)
  // $('#delete-workout').on('submit', onDeleteRepair)
}

module.exports = {
  addHandlers
}
