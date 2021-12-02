import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchArtists } from "./actions";

export function Artists() {
  const artists = useSelector((state) => state.artists);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchArtists());
  }, [dispatch]);

  return (
    <>
      <h1>Artists</h1>
      <ol className="artists">
        {artists.map((artist) => (
          <li key={artist}><Link to={`/albums/${artist}`}>{artist}</Link></li>
        ))}
      </ol>
    </>
  );
}
