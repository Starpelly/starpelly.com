<script context="module">
    export function preload() {
		return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>

<script>
    import { onMount } from 'svelte';

    import Navbar from '../components/Navbar.svelte'
    import ContentPad from '../components/ContentPad.svelte';
    export let posts;
    export let postCount = posts.length;

    if (postCount > 4)
        postCount = 4;
</script>

<div class="container container_4">
    <Navbar></Navbar>

    <div class="grid_3">
        <ContentPad>
            {#each {length: postCount} as _, i}
            <!--<a href="blog/{posts[i].slug}#disqus_thread"></a>-->
            <div class="article">
                <div class="articledate">
                    <div class="articleday">{posts[i].date}</div>
                </div>
                <div class="articletitle">
                    <a rel="prefetch" href="blog/{posts[i].slug}">{posts[i].title}</a>
                </div>
                <div class="articlebody">
                    {@html posts[i].html}
                </div>
            </div>
            {/each}
        </ContentPad>

        {#if postCount < posts.length}
        <div class="lowcp contentholder">
            <a href="page/2" style="text-decoration:none">← Wander back</a>
            <span id="pages">Page 1 of {Math.ceil(posts.length / 4)}</span>
        </div>
        {/if}
    </div>

<p style="margin-left: 247px;">Last Updated: July 20th, 2023</p>
</div>