+++
title = 'Motionmelody Plus Lua'
date = 2024-07-04T11:21:50-04:00
+++

In Motionmelody, I've been designing a system for loading and writing Lua scripts that can be executed in-game.
It includes a fully-featured script editor so you won't have to use Visual Studio Code or anything.

In the future I'm planning on adding a debugger and maybe an intellisense-like system.

{{< img src="image1.png" >}}

I was mostly inspired by NotITG and the amount of bullshit you're able to do in that game. Hopefully you'll be able to make some cool stuff with it.

Here's the full example script as just an example of what the Lua API is like:
```lua
local drawLines = {}
local currentLine = {}
local drawingLine = false
local drawColor = { 0, 0, 0 }
local drawColorIndex = 9;

local function isPointInRectangle(px, py, x, y, w, h)
    -- Check if the point is within the bounds of the rectangle
    if px >= x and px <= (x + w) and py >= y and py <= (y + h) then
        return true
    else
        return false
    end
end

local function drawPalette(r, g, b, i)
	local rectX = -640 + ((32 + 16) * i) - 32;
	local rectY = 360 - 32 - 16;
	local rectWidth = 32;
	local rectHeight = 32;
	
	if (i == drawColorIndex) then
		melody.graphics.setColor(0, 0, 0);
		melody.graphics.drawRectangle(rectX - 4, rectY - 4, rectWidth + 8, rectHeight + 8, 12);
	end
	
	if (isPointInRectangle(melody.player.getX(), melody.player.getY(), rectX, rectY, rectWidth, rectHeight)) then
		drawColor = { r, g, b, 1 }
		drawColorIndex = i;
	end
	
	melody.graphics.setColor(r, g, b);
	melody.graphics.drawRectangle(rectX, rectY, rectWidth, rectHeight, 8);
end

function OnDraw()
	melody.graphics.setZLayer(4);

	for i, line in ipairs(drawLines) do
		local color = line[5];
		melody.graphics.setColor(color[1], color[2], color[3]);
		melody.graphics.drawLine(line[1], line[2], line[3], line[4]);
	end
	
	if (drawingLine) then
		melody.graphics.setColor(drawColor[1], drawColor[2], drawColor[3]);
		melody.graphics.drawLine(currentLine[1], currentLine[2], currentLine[3], currentLine[4]);
	end
	
	drawPalette(1, 0, 0, 1);
	drawPalette(1, 0.5, 0, 2);
	drawPalette(1, 1, 0, 3);
	drawPalette(0.8, 1, 0, 4);
	drawPalette(0, 1, 0, 5);
	drawPalette(0, 0.5, 1, 6);
	drawPalette(0, 0, 1, 7);
	drawPalette(0.5, 0, 1, 8);
	drawPalette(0, 0, 0, 9);
	drawPalette(1, 1, 1, 10);
	
	-- reset button
	local resetX = 640 - 166 - 16;
	local resetY = 360 - 64 - 16;
	local resetWidth = 166;
	local resetHeight = 64;
	
	if (isPointInRectangle(melody.player.getX(), melody.player.getY(), resetX, resetY, resetWidth, resetHeight)) then
		if (melody.input.isMouseButtonPressed(0)) then
			drawLines = {}
		end
		melody.graphics.setColor(0.6, 0.6, 0.6, 0.5);
	else
		melody.graphics.setColor(0.2, 0.2, 0.2, 0.5);
	end
	melody.graphics.drawRectangle(resetX, resetY, resetWidth, resetHeight, 16);
end

function OnUpdate()
	if (melody.input.isMouseButtonPressed(0)) then
		currentLine = { melody.player.getX(), melody.player.getY(), melody.player.getX(), melody.player.getY(), drawColor }
		drawingLine = true;
	end
	
	if (melody.input.isMouseButtonDown(0)) then
		currentLine[3] = melody.player.getX();
		currentLine[4] = melody.player.getY();
	end
	
	if (melody.input.isMouseButtonReleased(0)) then
		table.insert(drawLines, currentLine);
		currentLine = {}
		drawingLine = false;
	end
end
```