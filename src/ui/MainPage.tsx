import TracksList from "./TracksList.tsx";
import TrackDetails from "./TrackDetails.tsx";

import {useTrackSelection} from "../bll/useTrackSelection.tsx";

type TrackId = string | null;
const MainPage = () => {

    const {trackId,setTrackId} = useTrackSelection()

    const handleTrackSelect = (id: TrackId): void => {
        setTrackId(id)
    }
    return (
        <div style={{display: 'flex', columnGap: '20px'}}>
            <TracksList onTrackSelect={handleTrackSelect}
                        selectedTrackId={trackId}/>
            <TrackDetails trackId={trackId}/>
        </div>
    );
};

export default MainPage;