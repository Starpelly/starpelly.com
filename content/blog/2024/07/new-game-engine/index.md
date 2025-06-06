+++
title = 'New Game Engine'
date = 2024-07-28T03:21:16-04:00
+++

While Motionmelody has been fun to make, the one thing that I regret every single day is the fact that I have to use this shitty, slow, bug-prone garbage collected game engine. You may have heard of it, it's called Unity.

{{< img src="image1.png" >}}

In the future, after Motionmelody is released and we officially start production of our next game, I will be writing an article about everything I hate about Unity and why we're using and maintaining our own game engine for the foreseeable future.

I've started writing the new engine a couple months ago, and it's going well so far. It currently has hot-reloading of data assets, it can render text, basic 3d models, what isn't there to like? It makes me wonder why we didn't do this in the first place...

Of course, we aren't planning on writing our games in C++, so we need to have a proper "scripting language" to script our games in. I chose Beef, the only acceptable language for this.

A big part of this process is calling C++ from Beef, and calling Beef from C++. So while that's easy enough to do manually for a few functions, as our engine gets bigger and bigger, it's not feasible with the amount of stuff we'll eventually want to bind.

## APIGen

I wrote a tool called APIGen. It allows you to define API functions, which then creates a transition layer between C++ and Beef. It looks like this:

```cpp
API_FUNCTION(APITable_Drawing_Clear)
void Clear(const Color &color);

API_FUNCTION(APITable_Drawing_DrawLine)
void DrawLine(float x1, float y1, float x2, float y2, const Color &color);
```

APIGen will read these files and generate .json files, which, inside of them is just a list of functions and information about them.

```json
{
    "functions": [
        {
            "name": "Clear",
            "returnType": "void",
            "tableIndex": 5,
            "params": [
            {
                "type": "Color",
                "name": "color",
                "const": true,
                "pointer": false,
                "reference": true
            }
            ],
            "pointer": false,
            "reference": false,
            "private": false
        },
        {
            "name": "DrawLine",
            "returnType": "void",
            "tableIndex": 6,
            "params": [
                {
                    "type": "float",
                    "name": "x1",
                    "const": false,
                    "pointer": false,
                    "reference": false
                },
                {
                    "type": "float",
                    "name": "y1",
                    "const": false,
                    "pointer": false,
                    "reference": false
                },
                {
                    "type": "float",
                    "name": "x2",
                    "const": false,
                    "pointer": false,
                    "reference": false
                },
                {
                    "type": "float",
                    "name": "y2",
                    "const": false,
                    "pointer": false,
                    "reference": false
                },
                {
                    "type": "Color",
                    "name": "color",
                    "const": true,
                    "pointer": false,
                    "reference": true
                }
            ],
            "pointer": false,
            "reference": false,
            "private": false
        }
    ]
}
```

The next part after this is generating bindings for Beef using these .json files. This is technically a different tool but for simplicity's sake, I'm just gonna call it "APIGen Stage 2".

I wrote another C# script that reads these .json files and generates the appropriate code files for us to use in our scripting library, which we then use in our game!

```cs
/// ===========================================================
/// Auto-generated by the Trinket API generator. Do not modify!
/// ===========================================================
using System;

using internal Trinket.EngineAPI;

namespace Trinket;

public static class Drawing
{
	[Inline]
	public static void Clear(Color color)
	{
		function void(in Color color) func = (.)EngineAPI.callTable[5];
		func(color);
	}
	
	[Inline]
	public static void DrawLine(float x1, float y1, float x2, float y2, Color color)
	{
		function void(float x1, float y1, float x2, float y2, in Color color) func = (.)EngineAPI.callTable[6];
		func(x1, y1, x2, y2, color);
	}
}
```

This system might change a bit as we develop the engine more but I'm proud of how it works right now. It's probably better than how Unity manages it, for sure.

{{< img src="image2.png" >}}