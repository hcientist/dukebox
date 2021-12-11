import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchAlbums } from "./actions";

export function Albums() {
  const params = useParams();
  const albums = useSelector((state) => state.albums);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAlbums(params.artist));
  }, [dispatch]);
  return (
    <>
      <h1>Albums for {params.artist}</h1>
      {albums.map((album) => (<li key={album}>{album}</li>))}
    </>
  );
}
