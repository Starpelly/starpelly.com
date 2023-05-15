<script>
    export let title = "Starpelly";
</script>

<div class="contentholder">
    <div class="contenttitle" style="background-image:url('assets/bannerHome.png')">
        <h1>{title}</h1>
    </div>
    <div class="contentpad">
        <slot/>
        <p style="visibility: hidden;">a</p>
    </div>
</div>