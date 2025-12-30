import type {TrackListItemResource} from "../dal/api.ts";
import styles from './TracksList.module.css';
import clsx from "clsx";

type Props = {
    track: TrackListItemResource
    onSelect: (id: string) => void
    isSelected: boolean
}

const TrackItem = ({track, onSelect, isSelected}: Props) => {
    const handleClick = () => onSelect?.(track.id)

    const className = clsx({
        [styles.track] : true,
        [styles.selected] : isSelected
    })

    return (
        <li className={className}>
            <div onClick={handleClick}>
                {track.attributes.title}
            </div>
            <audio controls src={track.attributes.attachments[0].url}></audio>
        </li>
    );
};

export default TrackItem;