# DOM42 documentation

## Introduction

DOM42 is a library which makes it easier to create GUI for
Windows93 apps. It doesn't require any HTML or CSS, but all Apps
which use the library will require the user to have it installed.

## Creating and loading a window

In the start you need to create a window and load it as a DOM42
object. This can be done 2 ways:

**WAY 1.**
```javascript
var win = $window({...});
var root = new DOM42(win);
```
**OR WAY 2.**
```javascript
var root = $window42({...});
```
DOM42 objects has 2 methods:
 * root.add(widget)
 * root.remove(widget)

## Adding widgets to a window

First you need to create a new widget.
To do that do the following:
```javascript
var btn = $widget.Button("Hello!");
/* see list of all widgets below */
```
However, $widget object has a method called $widget.Export().
This method will make all widgets global.
So instead you could do
```javascript
$widget.Export()
var btn = Button("Hello!");
```

### Widgets & their methods
Below you can see the list of all widgets.
Optional arguments will be marked with <...>.
 * Label(text, <size>)
   * setPosition(x, y)
   * setStyle(object)
 * Button(text)
   * onClick(function)
   * setPosition(x, y, <w>, <h>)
   * setStyle(object)
 * Input(<type>, <size>)
   * getText()
   * setText(text)
   * setPosition(x, y, <w>, <h>)
   * setStyle(object)
 * Entry(<size>)
   * getText()
   * setText(text)
   * setPosition(x, y, <w>, <h>)
   * setStyle(object)
 * Section()
   * setPosition(x, y, <w>, <h>)
   * setStyle(object)
 * IFrame(src)
   * setPosition(x, y, <w>, <h>)
   * setStyle(object)

Section is a div element and it canbe turned to DOM42 object
by doing the following:
```javascript
var sct = $widget.Section();
var root2 = new DOM42(sct);
```
