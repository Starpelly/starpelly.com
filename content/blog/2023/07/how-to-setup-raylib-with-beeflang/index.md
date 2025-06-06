+++
title = 'How to Setup raylib with BeefLang'
date = 2023-07-30T04:25:52-04:00
+++
I said I would write another tutorial someday.

<a href="https://twitter.com/CFWhitehead/status/1313831781750112257">

{{< img src="raylib-with-beef/cftweet.png" >}}

</a>

Honestly, Beef has been one of my most favorite languages to work with in the past few months, even more than C#!

Beef is compiled with no GC, and while I could probably write a whole post on how much I ***loathe*** garbage collectors, just know it makes the language *really* fast.

If you're already familiar with C# (as I was), you can start using Beef pretty much instantly.

More info on it <a href="https://www.beeflang.org/docs/foreward/">here</a>.

<br>

Hoping to increase awareness of the language, I've created a very small and simple guide that demonstrates how to use one of my favorite game frameworks, <a href="https://www.github.com/raysan5/raylib">Raylib</a>, alongside one of my favorite languages.

I'm not going to go over the more advanced stuff. The <a href="https://www.beeflang.org/docs/">Beef Documentation</a> covers most questions you may have.
You can also join the <a href="https://discord.gg/rnsc9YP">BeefLang Discord server</a> and ask for help there.

<br>

# Tutorial

First, <a href="https://www.beeflang.org/#nightly">Download and install Beef</a>. If you're reading before version 1.0, I would recommend using the Nightly Releases. They may already include fixes for bugs you could encounter and the latest features.

Now that you have Beef installed, open the **Beef IDE**, and you should see something that looks like this:

{{< img src="raylib-with-beef/firsttimestartup.png" >}}


<small>(Recent Projects blocked out for secrecy...)</small>

Click the "Create Workspace" button, and select the folder you want to create your workspace in.
*Note: The name of the folder is what the initial startup project will be called.*

A workspace in Beef is similar to a solution in C#, it contains all the projects inside your main project.

Press "Ctrl+Shift+S" to save your solution and everything in it.

{{< img src="raylib-with-beef/createdproject.png" >}}

Currently your project is empty. If you try to run your project by pressing "F5", the IDE will ask if you want to auto-generate startup code because there is none. Select **"Yes"**.

{{< img src="raylib-with-beef/startupcodegen.png" >}}

If you press "F5" now, a console window will appear and quickly disappear. Congratulations, you have just created your first Beef program!

Let's install Raylib so that we can use it with Beef.

Raylib is written in C, so to use it we're going to have to write some bindings for it. Luckily, I already did that <a href="https://github.com/Starpelly/raylib-beef">which you can clone from GitHub.</a>

Extract the code to a folder and keep it in a safe place.
We only need the "raylib-beef" folder for all purposes covered in this tutorial, so don't worry about any of the other folders or files.

Right-click on "Workspace" *(not the tab)* and select **"Add Existing Project"**.

{{< img src="raylib-with-beef/addexisting.png" >}}

Go to the safe place where you stored the "raylib-beef" folder, and inside of it, and double-click on the **"BeefProj.toml"** file.

{{< img src="raylib-with-beef/importproject.png" >}}

You should now see "raylib-beef" in your workspace panel.

Right-click on your main project and select **"Properties..."**.

{{< img src="raylib-with-beef/properties.png" >}}

From there, select **"Dependencies"** from under the **"General"** dropdown and click the checkbox next to "raylib-beef".

{{< img src="raylib-with-beef/dependency.png" >}}

You are now ready to use Raylib with Beef! I wrote a sample program that draws the raylib-beef logo to the window.

Copy and paste this into "**Program.bf**" under your main project and press "F5" to run.

```cs
using System;
using RaylibBeef;
using static RaylibBeef.Raylib;

namespace example; // Replace with your project name.

class Program
{
	public static int Main(String[] args)
	{
		InitWindow(800, 600, "Raylib Beef 4.5");

		var beefMain = Color(165, 47, 78, 255);
		var beefOutline = Color(243, 157, 157, 255);

		while (!WindowShouldClose())
		{
			BeginDrawing();
			
			ClearBackground(RAYWHITE);

			DrawRectangle(GetScreenWidth() / 2 - 128, GetScreenHeight() / 2 - 128, 256, 256, beefOutline);
			DrawRectangle(GetScreenWidth() / 2 - 112, GetScreenHeight() / 2 - 112, 224, 224, beefMain);

			DrawText("raylib", GetScreenWidth() / 2 - 44, GetScreenHeight() / 2, 50, beefOutline);
			DrawText("beef", GetScreenWidth() / 2 - 62, GetScreenHeight() / 2 + 46, 50, beefOutline);

			DrawRectangle(GetScreenWidth() / 2 + 54, GetScreenHeight() / 2 + 54, 42, 42, beefOutline);
			DrawRectangle(GetScreenWidth() / 2 + 62, GetScreenHeight() / 2 + 62, 26, 26, RAYWHITE);

			DrawCircle(GetMouseX(), GetMouseY(), 20, beefOutline);
			DrawCircle(GetMouseX(), GetMouseY(), 8, beefMain);

			DrawFPS(20, 20);

			EndDrawing();
		}
		CloseWindow();

		return 0;
	}
}
```

{{< img src="raylib-with-beef/done.png" >}}

Have fun!