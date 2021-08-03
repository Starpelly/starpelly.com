<script>
    import Navbar from '../components/Navbar.svelte'
</script>

<div class="container container_4">
    <Navbar></Navbar>

    <div class="grid_3">
        <div class="contenttitle" style="background-image:url('assets/bannerHome.png')">
            <h1>Starpelly</h1>
        </div>
        <div class="contentpad">
            <div class="article">
                <div class="articletitle">
                    <a href=" ">
                        About</a>
                </div>
                <div class="articlebody">
                    <p>My name is Braedon, I made this site cause I had the domain and the old site looked boring as hell.
                        I'm a video editor and visual effects guy. Not much else to say.
                    </p>
                </div>
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
    </div>
</div>