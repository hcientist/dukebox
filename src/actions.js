export const Action = Object.freeze({
  LoadedArtists: "LoadedArtists",
  LoadedAlbums: "LoadedAlbums",
  StartedWaiting:"StartedWaiting",
  StoppedWaiting: "StoppedWaiting",
});

export function loadedArtists(artists) {
  return {type: Action.LoadedArtists, payload: artists};
}

export function loadedAlbums(albums) {
  return {type: Action.LoadedAlbums, payload: albums};
}

export function showProgress() {
  return {type: Action.StartedWaiting};
}

export function hideProgress() {
  return {type: Action.StoppedWaiting};
}

function assertResponse(response) {
  if (response.status >= 200 || response.status < 300) {
    return response;
  } else {
    throw new Error(`${response.status}: ${response.statusText}`);
  }
}

export function fetchArtists() {
  console.log('fetchArtists')
  return (dispatch) => {
    dispatch(showProgress());
    fetch(`https://dukebox.twodee.org:8443/artists`)
      .then(assertResponse)
      .then((response) => response.json())
      .then((data) => {
        
        dispatch(loadedArtists(data));
            dispatch(hideProgress());
      });
  };
}

export function fetchAlbums(artist) {
  console.log('fetchArtists')
  return (dispatch) => {
    dispatch(showProgress());
    fetch(`https://dukebox.twodee.org:8443/artists/${artist}`)
      .then(assertResponse)
      .then((response) => response.json())
      .then((data) => {
        
        dispatch(loadedAlbums(data));
            dispatch(hideProgress());
      });
  };
}
