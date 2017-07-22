
// we will set the inital state of followers to the json file
// normally this would be an api call
const initialList = require('../data/follower-suggestions.json');

const followers = (state = initialList, action) => {
  switch (action.type) {
    case 'FOLLOW':
      return state.map(person =>
        (person.id === action.id) 
          ? {...person, following: !person.following}
          : person
      )
    default:
      return state
  }
}

export default followers