/**
 * followers reducer
 *
 * the main (and only) reducer for the app
 */
//import libraries
import _ from 'underscore'
// we will set the inital state of followers to the json file normally this
// would be an api call i also uploaded the images to an s3 bucket since it is
// more realistic and the img src prop is calculated at bundle time like all
// other requires
const urlPrefix = 'https://s3-us-west-2.amazonaws.com/rgchallenge/'

const initialList = require('../data/follower-suggestions.json');
const fixedUrl = _.map(initialList, (item) => {
  item.image = urlPrefix.concat(item.image)
  return item
})

const followers = (state = initialList, action) => {
  switch (action.type) {
    case 'TOGGLE_FOLLOW':
      return state.map(person => (person.id === action.id)
        ? {
          ...person,
          following: !person.following
        }
        : person)
    default:
      return state
  }
}

export default followers