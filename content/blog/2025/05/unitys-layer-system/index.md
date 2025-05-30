+++
title = "Unity's Terrible Layer System"
date = 2025-05-30T10:58:34-04:00
+++

In Motionmelody, I wanted the ability to separate scenes into their own concept called "Screens." Screens are self-contained scenes that render all their UI, sprites, whatever, into a render texture, which can then be displayed. I wanted to do this to make transitions between scenes smoother and so I could add sexy animations.

In Unity, you can't render things on a per-object basis, you can only render by "layers." Normally, this wouldn't be a problem in itself, but there are only 32 available layers!

{{< img src="image1.png" >}}

And what's worse is that an object can only have one layer applied to it at a time! You can't "mix and match" them!

{{< img src="image2.png" >}}

So, I guess we just won't do that, then. Fuck Unity.