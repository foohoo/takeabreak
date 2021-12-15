import gapi from 'gapi-client';

function onClientLoad() {
    gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
}

function onYouTubeApiLoad() {
    gapi.client.setApiKey('AIzaSyAGyePXAypEPUysjmvVpu4HByxCJu4byEU');
}

function search() {
    console.log("search starting");
    var request = gapi.client.youtube.search.list({
        part: 'snippet',
        q:"cat" 
    });

    var v = request.execute(onSearchResponse);

    return v;
}
function onSearchResponse(response) {
    let videoResponses = [];
    response.result.items.forEach(video => videoResponses.push(video.id.videoId));
    console.log(`search: ${videoResponses}`);
    return videoResponses;
}

gapi.load('client', onClientLoad);

export default search;