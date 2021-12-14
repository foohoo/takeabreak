<script lang="ts">
    import YouTube from 'svelte-youtube';
    import gapi from 'gapi-client';
    $: videoResponses = [];

    let options = {
    height: '500',
    width: '900'
  };

    export let hidden = false;

    function onClientLoad() {
        gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
    }

    function onYouTubeApiLoad() {
        gapi.client.setApiKey('AIzaSyAGyePXAypEPUysjmvVpu4HByxCJu4byEU');
        search();
    }

    function search() {
        var request = gapi.client.youtube.search.list({
        part: 'snippet',
        q:"cat"
    });
        // request.execute(onSearchResponse);
    }
    function onSearchResponse(response) {
        response.result.items.forEach(video => videoResponses.push(video.id.videoId));
        videoResponses = videoResponses;
        console.log(videoResponses);
    }

    gapi.load('client', onClientLoad);
</script>

{#if !hidden}
    <div class="videoBlock">
        <!-- {#each videoResponses as id} -->
            <YouTube videoId="xNyhuMxyjdw" {options} />
        <!-- {/each} -->
    </div>
{/if}

<style>
    .videoBlock {
        display: inline;
        text-align: center;
    }
</style>