+++
title = 'Custom Stroke In After Effects'
date = 2021-04-08T04:25:52-04:00
+++

If you didn't know, After Effects has these things called "Layer Styles". These are similar, but are NOT the same as effects. As layer styles are applied after everything else.

<img src="/assets/Images/tutorials/custom stroke/1.png" style="width: 90%; display: block; margin-left: auto; margin-right: auto;" alt="">

I will go more in-depth about layer styles in a future tutorial, but this should give you the basics of all you really need to know right now.  

Clicking on stroke you can see that it will apply a very simple "outline" effect. If you've ever used a program like Photoshop this might seem familiar.  

However you seem to notice something when motion blur is applied.

<img src="/assets/Images/tutorials/custom stroke/2.png" style="width: 90%; display: block; margin-left: auto; margin-right: auto;" alt="">

The motion blur does not effect the stroke style we added. :(  
Luckily for us effects are here to not make us bang our head against the table.  

Copy my settings here:

<img src="/assets/Images/tutorials/custom stroke/3.png" style="width: 50%; display: block; margin-left: auto; margin-right: auto;" alt="">

All this basically does is "mask" the transparent part of our clip with blue, Keylight will key out the blue, and the "Screen Matte" will expand the key-ed out background and replace it with the "Replace Colour". You can mess with the settings if you want. I would also recommend creating a user-made-preset since you might be using this a lot.  

Seeing as the effect is now applied BEFORE the motion blur, it will now be effected by it.

<img src="/assets/Images/tutorials/custom stroke/4.png" style="width: 100%; display: block; margin-left: auto; margin-right: auto;" alt="">