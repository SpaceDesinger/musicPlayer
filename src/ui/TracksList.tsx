import TrackItem from "./TrackItem.tsx";
import {useTracks} from "../bll/useTracks.tsx";
import styles from './TracksList.module.css';


type Props = {
    onTrackSelect : ( id : string | null) => void
    selectedTrackId : string | null
}



const TracksList = ({onTrackSelect , selectedTrackId} : Props) => {

    const {tracks} = useTracks()
    
    if (tracks === null) {
        return (
            <div>
                <span>Loading...</span>
            </div>
        )
    }
    if (tracks.length === 0) {
        return (
            <div>
                <span>No tracks</span>
            </div>
        )
    }

    const handleResetClick = () => {
        onTrackSelect?.(null)
    }
    const handelClick = (trackId :string) => {
        onTrackSelect?.(trackId)
    }
    return (
        <div>
            <button onClick={handleResetClick}>reset</button>
            <hr/>
            <ul className={styles.tracks}>
                {tracks.map((track) => {
                    return (
                       <TrackItem  key={track.id}
                                   track={track}
                                   isSelected={track.id === selectedTrackId}
                                   onSelect={handelClick}/>
                    )
                })}
            </ul>
        </div>
    );
};

export default TracksList;