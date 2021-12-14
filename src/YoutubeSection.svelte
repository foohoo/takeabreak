<script lang="ts">
    import YouTube from 'svelte-youtube';
    import gapi from 'gapi-client';
    $: videoResponses = [];

    const options = {
    height: '100',
    width: '100'
  };

    export let hidden = false;

    function onClientLoad() {
        gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
    }
    // Called automatically when YouTube API interface is loaded (see line 9).
    function onYouTubeApiLoad() {
        gapi.client.setApiKey('AIzaSyAGyePXAypEPUysjmvVpu4HByxCJu4byEU');
        search();
    }

    // Called when the search button is clicked in the html code
    function search() {
        // Use the JavaScript client library to create a search.list() API call.
        var request = gapi.client.youtube.search.list({
        part: 'snippet',
        q:"cat"
    });
        // Send the request to the API server, call the onSearchResponse function when the data is returned
        // request.execute(onSearchResponse);
    }
    // Triggered by this line: request.execute(onSearchResponse);
    function onSearchResponse(response) {
        response.result.items.forEach(video => videoResponses.push(video.id.videoId));
        videoResponses = videoResponses;
        console.log(videoResponses);
    }

    gapi.load('client', onClientLoad);
</script>

{#if hidden}
    <div class="videoBlock">
        {#each videoResponses as id}
            <YouTube videoId={id} {options} />
        {/each}
    </div>
{/if}

<style>
    .videoBlock {
        display: inline;
    }
</style>