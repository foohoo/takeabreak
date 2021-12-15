<script lang="ts">
    import YouTube from 'svelte-youtube';
    import { fade } from 'svelte/transition';

    export let videoResponses = [];
    export let hidden = false;

    console.log(`youtubesecion: ${videoResponses}`);
</script>

{#if !hidden}
    <div class="videoBlock">
        <!-- {#each videoResponses as id} -->
            <span transition:fade="{{duration: 2000 }}" class="video"><YouTube videoId={videoResponses[0]}/></span>
            <span transition:fade="{{duration: 2000 }}" class="video"><YouTube videoId={videoResponses[1]}/></span>
        <!-- {/each} -->
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