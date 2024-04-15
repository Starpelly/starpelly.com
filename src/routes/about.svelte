<script>
    import Navbar from '../components/Navbar.svelte'
    import ContentPad from '../components/ContentPad.svelte';
</script>

<div class="container container_4">
    <Navbar></Navbar>

    <div class="grid_3">
        <ContentPad>
            <div class="article">
                <div class="articletitle">
                    <a href=" ">
                        About</a>
                </div>
                <div class="articlebody">
                    <p>My name is Braedon, I made this site cause I had the domain and the old site looked boring as hell.
                        I'm a visual effects artist and computer programmer. I'm an American interested in making and sharing open source software and video games.
                        <br>
                        <br>
                        I'm also a devout Christian and might make a few posts on theology.
                    </p>
                    <br>
                    <h1>
                        Work
                    </h1>
                    <p>
                        I have been creating video games and software since I was about 13 years old. And I haven't really been able to stop since.
                    </p>
                    <br>
                    <h1>
                        Contact
                    </h1>
                    <p>
                        Do you want to high five? Ask me a question? Tell me how much of a piece of shit I am? Are you a game company and want to send me a cease and desist?
                        <br>
                        Message me on GitHub @Starpelly
                    </p>
                    <br>
                    <h1>
                        Advertising on starpelly.com
                    </h1>
                    <p>
                        I'd prefer to have a 100% ad-free website. We aren't consoomers around here.
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
        </ContentPad>
    </div>
</div>