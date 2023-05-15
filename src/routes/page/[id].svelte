<script context="module">

    export async function preload(page) {
        return {
            uid: page.params,
            posts: await this.fetch(`blog.json`).then(r => r.json())
        }
	}
</script>

<script>
    import Navbar from '../../components/Navbar.svelte'
	import ContentPad from '../../components/ContentPad.svelte';
    
    export let uid;
    export let posts;
    
    export let id = uid.id - 1;
    console.log(posts[0].title);
    
    export let postCount = posts.length - (id * 4);
    
    if (postCount > 4)
    postCount = 4;
    
    export let pageIndex = id * 4;

    // This is stupid, will upgrade to a newever version of Sveltekit in the future.
    function OnPageLoad(page)
    {
        location.reload();
        location.replace(`/page/${page}`)
    }
</script>

<div class="container container_4">
    <Navbar></Navbar>

    <div class="grid_3">
        <ContentPad>
            {#each {length: postCount} as _, i}
            <div class="article">
                <div class="articledate">
                    <div class="articleday">{posts[i + pageIndex].date}</div>
                </div>
                <div class="articletitle">
                    <a rel="prefetch" href="blog/{posts[i + pageIndex].slug}">{posts[i + pageIndex].title}</a>
                </div>
                <div class="articlebody">
                    {@html posts[i + pageIndex].html}
                </div>
            </div>
            {/each}
        </ContentPad>

        <div class="lowcp contentholder">
            {#if id + 1 < Math.ceil(posts.length / 4)}
                <a href="page/{id + 2}" on:click={() => OnPageLoad(id + 2)}>← Go back</a>
            {/if}

            <span id="pages">Page {id + 1} of {Math.ceil(posts.length / 4)}</span>

            {#if id + 1 > 1}
            <a href="page/{id}" on:click={() => OnPageLoad(id)}>Go forward →</a>
            {/if}
        </div>
    </div>

</div>