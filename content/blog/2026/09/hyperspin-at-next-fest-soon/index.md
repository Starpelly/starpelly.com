+++
title = 'Hyperspin at Next Fest: In about a month'
date = 2026-09-04T06:11:02-04:00
+++

Steam Next Fest is about a month and a half away, which means I need to submit Hyperspin for Valve's approval roughly two weeks before it actually starts. And that got me thinking: "Hey, why not document my progress here? That could be a fun little thingyy"... So I'll be updating this post daily with how things are going.

# Day 1 - 9/4/26

I didn't do much besides work on maps. I also worked on improving the editor UX for a bit. For whatever reason clicking on objects would only select them when the mouse button was *released* instead of *pressed*. I have no idea why, but that was changed. It feels *so much better* to use now.

# Day 2 - 9/5/26

Not much work done today besides simple code changes and starting work on a new song. I've added a new feature for text objects where you can coordinate using either coordinates (x & y components) or radial coordinates (distance & angle). I don't feel very productive right now, which makes me feel kinda sad!

Side tangent: I've recently found out about this thing called "GPT-6 Astra", which people can use to make shitty tech demos or whatever. I've already given my thoughts on AI generated stuff a couple blog posts ago, but let me just make the point again (in case I haven't...), I will never support, nor pay for any product which uses "Generative AI" in any front-facing way (art, music, etc..). If I find out a game I'm playing uses AI in this manner, I will put it down immediately, leave a negative review, and refund it if possible as quickly as possible. It is an insult to life itself.

{{< img src="lifeitself.png" style="max-width: 450px;" >}}

# Day 3 - 9/6/26

No work done today. I had to do yard work.

# Day 4 - 9/7/26

Worked on maps, streamed on Twitch. I don't do that often anymore!

# Day 5 - 9/8/26

The map I made yesterday might not even make it into the game because of Shirobon's licensing changes. I'll need to review that. Sad. I've been doing miscellaneous editor improvements today, but I've mostly been working on Skia bindings for Beef to use in the game.

# Day 6 - 9/9/26

Worked on editor stuff. Again, not much work today. I've been feeling very depressed lately, which sucks.

# Day 7 - 9/10/26

It sucks that I've been going through a depressive episode lately. I absolutely do not want to work on this game right now, which is very unfortunate given the circumanstances. I'm hoping I can at least get the discipline to finish it...

# Day 8 - 9/11/26

I've been feeling a lot better today and I've actually done enough work to get a new song off the ground. It's very unconventional and I'm not sure if people will like it... Oh well!
{{< img src="dearest.png" >}}

# Day 9 - 9/12/26

Didn't have much of a chance to work on much today, I was at work (like my actual real job) for most of it. Sadge.

# Day 10 - 9/13/26

My job called me today for an emergency so I ended up spending about 5 hours at work today instead of working on the game. Unfortunate. But nevertheless, I was able to get a lot done today and I'm feeling quite happy about it!

I've been working on redesigning the editor UI because it was just so ugly, and after about 12 hours of work, it now looks much better!

{{< img src="new_editor_ui.png" >}}

I had to recompile dear imgui and modify it to make this look possible, which was kind of a pain because dear imgui isn't that well designed, but it was *so* worth it. It looks so much nicer than before. Eventually I want to look into recreating the editor from scratch, maybe during or after Early Access, but for now, this will work great! I'm feeling good about the game now.

# Day 11 - 9/14/26

Boring day. Just worked on text and stuff. Slowly going through my todo list.

# Day 12 - 9/15/26

I've pushed out a new update to the Playtesting server today. Felt good about that. Mudstep has supposedly started working on the last two songs for the game so that's exciting.

# Day 13 - 9/16/26

Spent very little time actually working on the game. I spent most of today planning out the songs and systems I need to polish on my todo list. As it turns out I'm very close to finishing the game!

# Day 14 - 9/17/26

Had to work (my actual other job) today, not much done besides more planning.

# Day 15 - 9/18/26

Most of the game is done at this point, I'm just working through polishing things up. Today I've decided that the title screen needs a new design. I wanted to make it look like some of the promotional art used on the store page. Doing things like this is just a few million little tweaks all the time and I'm not done. But I think it's coming along well.

{{< img src="day_15/storepage.png" caption="Promotional art" >}}
{{< img src="day_15/wip_newtitle.png" caption="In engine" >}}

The arena behind the logo is actually a map playing in real time. Thanks to the custom game engine this was surprisingly simple to hook up! I still need to make it loop properly and stuff. We'll see how it goes.

# Day 16 - 9/19/26

I've been experimenting more with the new title screen. I decided to try out a new logo and lean further into the "Wii Play" look the game is going for. Wii Play is one of my favorite aesthetics, so I really wanted to take inspiration from it.

{{< img src="day_16/new_logo.png" >}}

I also pushed out a new update today. I'm hoping to push out an update every two days as a productivity goal while we make it over the finish line!

# Day 17 - 9/20/26

Worked on the title screen some more.

# Day 18 - 9/21/26

Didn't really work today.

# Day 19 - 9/22/26

I spend one half of the day adding folders to song select, this was somehow missing even though it's a quite essential feature. So, I'm glad that's finally in.

I spent the other half optimizing the editor. The results are fantastic! We've gotten super intense maps up from 100FPS to **1000FPS**! I had to design a texture packer module for the engine to make this work, but I'm glad I've finally gotten that out of the way.

<div style="column-count: 2; column-gap: 4px; margin-top: 1.5em; margin-bottom: 4px;">
    {{< img src="day_19/before.png" style="margin-bottom: 4px;" caption="before" >}}
    {{< img src="day_19/after.png" style="margin-bottom: 4px;" caption="after" >}}
</div>

The texture packer module also allowed me to optimize some screens that previously needed to create a new batch for each texture instance. That sped up the game a lot.