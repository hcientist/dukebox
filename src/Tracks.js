import { useSelector } from "react-redux"

export function Tracks() {
    const tracks = useSelector(state=>state.tracks)
    return <>
        <h1>Tracks</h1>
        {tracks}
        </>
}