import { ADD_FOOD, DELETE_FOOD } from '../actions/Types';

const INITIAL_STATE = {
  test: null,
  foodlist: [{
    name: 'Apple',
    avatar_url: 'https://storage.googleapis.com/emojibuff.appspot.com/i/go/1f34e.png',
    subtitle: 'Very good'
  },
  {
    name: 'Banana',
    avatar_url: '//s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/banana.png',
    subtitle: 'Also good'
  },]
}

const foodReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_FOOD:
      return {
        ...state,
        foodlist: state.foodlist.concat({
          name: action.data,
          avatar_url: null,
          subtitle: ''
        })
      }
    case DELETE_FOOD:
      return {
        ...state,
        foodlist: state.foodlist.filter((item) =>
          item.key !== key)
      }
    default:
      return state;
  }
}

export default foodReducer;
