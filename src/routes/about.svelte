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
                        I'm a visual effects artist and computer programmer. I'm an american interested in making and sharing open source software and video games.
                    </p>
                    <br>
                    <h1>
                        Work
                    </h1>
                    <p>
                        I have been creating video games and software since I was about 13 years old. And I haven't really been able to stop since. One of my biggest projects yet is <a href="https://github.com/starpelly/starflow">Starflow</a>,
                        a video game engine created for a video game company I co-founded called Boxsubmus. We haven't finished a game yet as of 3/4/2022, but we are working hard. As we are still students who have to balance things.
                    </p>
                    <br>
                    <h1>
                        Contact
                    </h1>
                    <p>
                        Do you want to high five? Ask me a question? Tell me how much of a piece of shit I am? Are you a game company and want to send me a cease and desist?
                        <br>
                        Message me on Discord at Starpelly#0255, or on GitHub @Starpelly
                    </p>
                    <br>
                    <h1>
                        Advertising on starpelly.com
                    </h1>
                    <p>
                        I'd prefer to have a 100% ad-free website. That kinda defeats the point of the whole "open-source" software thing. We aren't consoomers around here.
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