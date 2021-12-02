import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { Action } from "./actions";

const initialState = {
  artists: [],

  // These a Balmorhea's albums...
  albums: [],

  // These are the tracks of Rivers Arms...
  tracks: [],

  // Add a flag to your Redux store that indicates whether or not the app has a background task in progress
  isWaiting: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case Action.LoadedArtists:
      return {
        ...state,
        artists: action.payload,
      };
    case Action.LoadedAlbums:
      return {
        ...state,
        albums: action.payload,
      };
    case Action.StartedWaiting:
      return {
        ...state,
        isWaiting: true,
      };
    case Action.StoppedWaiting:
      return {
        ...state,
        isWaiting: false,
      };
    default:
      return state;
  }
  return initialState;
};

export const store = createStore(reducer, initialState, applyMiddleware(thunk));
