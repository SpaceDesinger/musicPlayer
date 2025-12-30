type AttachmentDto = {
    url: string
}

type TrackListItemsOutputAttributes = {
    title: string
    attachments: Array<AttachmentDto>
}

export type TrackListItemResource = {
    id: string
    attributes: TrackListItemsOutputAttributes
}

export type GetTrackListOutput = {
    data:Array<TrackListItemResource>
}

export type TrackDetailsResource = {
    id: string
    attributes: {
        title: string
        lyrics: string | null
    }
}
export type GetTrackDetailsOutput = {
    data: TrackDetailsResource
}

export const getTrack = (trackId : string) : Promise<GetTrackDetailsOutput> => {
    return  fetch(`https://musicfun.it-incubator.app/api/1.0/playlists/tracks/${trackId}`, {
        headers: {
            'api-key': '8bf30e94-5f54-44e4-89c2-1b908cf6d86b'
        }
    }).then(res => res.json())

}

export const getTracks = () : Promise<GetTrackListOutput> => {
    return  fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
        headers: {
            'api-key': '8bf30e94-5f54-44e4-89c2-1b908cf6d86b'
        }
    }).then(res => res.json())
}