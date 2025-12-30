import {useTrackDetails} from "../bll/useTrackDetails.tsx";
import styles from './TrackDetail.module.css';

type Props = {
    trackId:string | null
}

const TrackDetails = ({trackId}:Props ) => {

   const {trackDetails} = useTrackDetails(trackId)

    return (
        <div className={styles.track}>
            <h2>Details</h2>
            {!trackDetails && !trackId && <p>Track is not selected</p>}
            {!trackDetails && trackId && <p>loading...</p>}
            {trackDetails && trackId && trackId !== trackDetails.id && <p>loading...</p>}
            {trackDetails && <div>
                <h3>{trackDetails.attributes.title}</h3>
                <h4>Lyrics</h4>
                <p>{trackDetails.attributes.lyrics ?? 'no lyrics'}</p>
            </div>}
        </div>
    );
};

export default TrackDetails;