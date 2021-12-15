<script lang="ts">
    import YouTube from 'svelte-youtube';

    export let videoResponses = [];
    export let hidden = false;

    console.log(`youtubesecion: ${videoResponses}`);
</script>

{#if !hidden}
    <div class="videoBlock">
        {#each videoResponses as id}
            <!-- <span class="video"><YouTube videoId="xNyhuMxyjdw"/></span> -->
            <!-- <span class="video"><YouTube videoId="xNyhuMxyjdw"/></span> -->
            <span class="video"><YouTube videoId={id}/></span>
        {/each}
    </div>
{/if}

<style>
    .videoBlock {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .video {
        padding: 0.5em;
    }
</style>