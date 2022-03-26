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
    export let posts;
</script>

<div class="container container_4">
    <Navbar></Navbar>

    <div class="grid_3">
        <div class="contenttitle" style="background-image:url('assets/bannerHome.png')">
            <h1>Starpelly</h1>
        </div>
        <div class="contentpad">

            {#each posts as post}
            <div class="article">
                <div class="articledate">
                    <div class="articleday">{post.date}</div>
                </div>
                <div class="articletitle">
                    <a rel="prefetch" href="blog/{post.slug}">{post.title}</a>
                </div>
                <div class="articlebody">
                    {@html post.html}
                </div>
            </div>
            {/each}
            
        <div id="disqus_thread"></div>
        <script>
            (function() { // DON'T EDIT BELOW THIS LINE
            var d = document, s = d.createElement('script');
            s.src = 'https://starpelly.disqus.com/embed.js';
            s.setAttribute('data-timestamp', +new Date());
            (d.head || d.body).appendChild(s);
            })();
        </script>
        <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>

    </div>

</div>
<p style="margin-left: 8px;">Last Updated: March 26th, 2022</p>
</div>