<script>
	export let status;
	export let error;

	const dev = process.env.NODE_ENV === 'development';

    import ContentPad from '../components/ContentPad.svelte';
    import Navbar from '../components/Navbar.svelte'
</script>

<div class="container container_4">
    <Navbar></Navbar>

    <div class="grid_3">
        <ContentPad title="{status}">
            <div class="article">
				{#if status == 404}
				    <p>I have no idea what you were looking for but if there is meant to be something here please message me.</p>
				{:else}
					<p>This is probably a bad thing and you should message me about this.</p>
                	<p>Error: </p>{error.message}
				{/if}

                <br>
                <br>


				<h1>Starpelly#0255</h1>
            </div>
        </ContentPad>
    </div>
</div>