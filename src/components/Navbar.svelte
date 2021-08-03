<script>
    import { onMount } from 'svelte'

    onMount(async () => {
        choosePic();
    })

    let pic;

    var myPix = new Array("assets/pfpcrop.png","assets/otherpelly.jpg","https://i.redd.it/hsrm38mlf2o41.jpg","https://i.pinimg.com/originals/d7/57/22/d7572276e80bd31449710f6a28c3b6b1.jpg","https://emoji.gg/assets/emoji/JackBlackStop.png"
    ,"https://i1.sndcdn.com/artworks-000205278199-77zuj6-t500x500.jpg","https://pbs.twimg.com/profile_images/997268877636550656/x0qmi5nO_400x400.jpg","https://steamuserimages-a.akamaihd.net/ugc/449582555676740346/108CA9A47F1B19C7655DA67935ED03944DFBD41F/"
    ,"https://i.ytimg.com/vi/sDzmXF2SQf4/maxresdefault.jpg", "https://i.imgur.com/OBg0cHi.gif","https://i.makeagif.com/media/4-11-2017/Apquga.gif","https://wiki.nerd.nu/images/thumb/c/ca/OoOOooer.gif/500px-OoOOooer.gif"
    ,"https://preview.redd.it/9hlskc5c6nc41.gif?width=640&crop=smart&s=8211a5a62294612779e8b7fef222fb22b3e69dc1","https://media.tenor.com/images/7219604c50d8c562f2848bf0ffc626f6/tenor.gif","https://i.ytimg.com/vi/i6wUBD5vBeo/hqdefault.jpg"
    ,"https://media.suthlbr.com/products/images/30001/2967891_ep_1514387985_2.jpg","https://i.ytimg.com/vi/qbcnIenjKWg/hqdefault.jpg","https://static0.thegamerimages.com/wordpress/wp-content/uploads/2020/05/Xbox-Series-X-Fridge-Meme.jpg?q=50&fit=crop&w=740&h=389"); /* i'll add more eventually  */

    function choosePic() {
        let randomNum = Math.floor((Math.random() * myPix.length));
        pic = myPix[randomNum];
    }
</script>

<div class="navbarwrap">
    <img src="assets/mayo.gif" style="margin-left: -15px; margin-bottom: -6px;" alt="">
    <div id="logocnt">
        <a href="https://www.starpelly.com">
            <img class="bruh" id="myPicture" alt="" src="{pic}" />
        </a>
    </div>
    <div class="grid_1">
        <div class="pad2">
            <div>
                <a class="sociallink" style="background-image:url('assets/Images/social/youtube32.png');" title="YouTube" target="_blank" href="https://youtube.com/Starpelly" alt=""> </a>
                <a class="sociallink" style="background-image:url('assets/Images/social/instagram32.png');" title="Instagram" target="_blank" href="https://instagram.com/Starpelly_" alt=""> </a>
                <a class="sociallink" style="background-image:url('assets/Images/social/github32.png');" title="Github" target="_blank" href="https://github.com/starpelly"> </a>
            </div>
        </div>
    </div>

    <div class="grid_1">
        <div class="pad2">
            <a class="links" href="about" style="color: white">About Me</a>
            <br>
            <a class="links" href="projects" style="color: white">Projects</a>
            <br>
        </div>
    </div>

    <div class="grid_1">
        <div class="pad2">
            <a class="links" href="videos" style="color: white">Videos</a>
            <br>
            <a class="links" href="files" style="color: white">Project Files</a>
            <br>
            <a class="links" href="about-after-effects" style="color: white">About After Effects</a>
            <br>
     </div>
    </div>

    <div class="grid_1">
        <div class="pad2">
            <a class="menulink" href="/" style="background-image:url('../assets/Images/tabs/homepage.png')">
            </a>
            <a class="menulink" href="https://www.newgrounds.com" style="background-image:url('assets/Images/tabs/newgrounds.gif')">
            </a>
            <a class="menulink" href="https://store.steampowered.com/app/322170/Geometry_Dash/" style="background-image:url('assets/Images/tabs/gd.gif')">
            </a>
            <a class="menulink" href="https://www.nicovideo.jp/" style="background-image:url('assets/Images/tabs/niconico.gif')">
            </a>
            <a class="menulink" href="https://www.smwcentral.net/" style="background-image:url('assets/Images/tabs/smw.gif')">
            </a>
            <a class="menulink" href="otomad" style="background-image:url('assets/Images/tabs/otomad.gif')">
            </a>
            <a class="menulink" href="https://www.youtube.com/watch?v=ddWJatRxfz8" style="background-image:url('assets/Images/tabs/octagon.gif')">
            </a>
            <a class="menulink" href="https://www.youtube.com/watch?v=OYG8Ul276-w" style="background-image:url('assets/Images/tabs/terry.gif')">
            </a>
            <a class="menulink" href="https://www.reddit.com/r/unixporn" style="background-image:url('assets/Images/tabs/unixporn.png')">
            </a>
            <a class="menulink" href="https://myanimelist.net/anime/30721/Hacka_Doll_The_Animation" title='not "amazing" but not bad either, also it has a trap in it so who cares. ¯\_(ツ)_/¯ ' style="background-image:url('assets/Images/tabs/hackadoll.png')">
            </a>
            <a class="menulink" style="background-image:url('assets/Images/tabs/killmebaby.png')" href=" ">
            </a>
            <a class="menulink" href="https://knowyourmeme.com/" style="background-image:url('assets/Images/tabs/kym.png')">
            </a>
            <a class="menulink" style="background-image:url('assets/Images/tabs/typescript.png')" href=" ">
            </a>
     </div>
    </div>
</div>