<script context="module">
	export async function preload({ params }) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await this.fetch(`blog/${params.slug}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { post: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	import Navbar from '../../components/Navbar.svelte'
	import ContentPad from '../../components/ContentPad.svelte';
	export let post;
</script>

<div class="container container_4">
    <Navbar></Navbar>

    <div class="grid_3">
        <ContentPad>
			<div class="article">
				<div class="articledate">
					<div class="articleday">{post.date}</div>
				</div>
				<div class="articletitle">
					<a href=" ">
						{post.title}</a>
				</div>
				<div class="articlebody">
					{@html post.html}
				</div>
	
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
		</ContentPad>
	</div>
</div>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>