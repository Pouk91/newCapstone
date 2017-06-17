'use strict'

const config = require('../config.js')
const store = require('../store.js')

const createRepair = (data) => {
  console.log('data is ', data)
  return $.ajax({
    url: config.apiOrigin + '/repairs',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const getRepairs = () => {
  return $.ajax({
    url: config.apiOrigin + '/repairs',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateRepair = (id, data) => {
  console.log('id is ', id)
  console.log('data is ', data)
  return $.ajax({
    url: config.apiOrigin + '/repairs/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const deleteRepair = (id) => {
  console.log('id is ', id)
  return $.ajax({
    url: config.apiOrigin + '/repairs/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createRepair,
  getRepairs,
  updateRepair,
  deleteRepair
}
