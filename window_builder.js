//DOM42 objects enable adding widgets to windows
class DOM42 {
	constructor(win) {
		this.win = win;
		this.add = function(obj) {
			this.win.el.body.appendChild(obj.elem);
		}
		this.remove = function(obj) {
			this.win.el.body.removeChild(obj.elem);
		}
	}
}

/*
Instead of var root = new DOM42($window({...}));
you can do var root = $window42({...});

but if you want to have access to your window
as $window and DOM42 object, do this:

var win = $window({...});
var root = new DOM42(win);
*/
function $window42(a) {
	return new DOM42($window(a));
}

//All widgets go here
var $widget = {
	msr: 'px',
	//positionBy("pixel") = size in pixels, positionBy("relative") = size relative to size of window (100 = window height / width)
	positionBy(t) {
		ptype = {'pixel': 'px', 'relative': '%'};
		$widget.msr = ptype[t];
	},
	Export() {
		/*
		This function makes all $widgets global
		so instead of $widget.Button you can do
		just Button
		*/
		for(var item in this) {
			eval(item + '=' + '$widget.' + item);
		}
	},
	Button(text) {
		var elem = document.createElement('button');
		elem.innerText = text;
		return {
			elem: elem,
			onClick(f) {
				this.elem.onclick = f;
			},
			setPosition(x, y, w, h) {
				this.elem.style.position = 'absolute';
				this.elem.style.top = y.toString() + $widget.msr;
				this.elem.style.left = x.toString() + $widget.msr;
				if(w != undefined) {
					this.elem.style.width = w.toString() + $widget.msr;
				}
				if(h != undefined) {
					this.elem.style.height = h.toString() + $widget.msr;
				}
			},
			setStyle(s) {
				this.elem.style = {...this.elem.style, ...style};
			}
		}
	},
	Label(text, size) {
		var elem = document.createElement('p');
		if(size != undefined) {
			elem.style.fontSize = size.toString() + $widget.msr;
		}
		elem.innerText = text;
		return {
			elem: elem,
			setPosition(x, y) {
				this.elem.style.position = 'absolute';
				this.elem.style.top = y.toString() + $widget.msr;
				this.elem.style.left = x.toString() + $widget.msr;
			},
			setStyle(s) {
				this.elem.style = {...this.elem.style, ...style};
			}
		}
	},
	Entry(size) {
		var elem = document.createElement('textarea');
		if(size != undefined) {
			elem.style.fontSize = size.toString() + $widget.msr;
		}
		return {
			elem: elem,
			setPosition(x, y, w, h) {
				this.elem.style.position = 'absolute';
				this.elem.style.top = y.toString() + $widget.msr;
				this.elem.style.left = x.toString() + $widget.msr;
				if(w != undefined) {
					this.elem.style.width = w.toString() + $widget.msr;
				}
				if(h != undefined) {
					this.elem.style.height = h.toString() + $widget.msr;
				}
			},
			setText(text) {
				this.elem.value = text;
			},
			getText(text) {
				return this.elem.value;
			},
			setStyle(s) {
				this.elem.style = {...this.elem.style, ...style};
			}
		}
	},
	Input(type, size) {
		var elem = document.createElement('input');
		if(type != undefined) {
			elem.type = type;
		}
		if(size != undefined) {
			elem.style.fontSize = size.toString() + $widget.msr;
		}
		return {
			elem: elem,
			setPosition(x, y, w, h) {
				this.elem.style.position = 'absolute';
				this.elem.style.top = y.toString() + $widget.msr;
				this.elem.style.left = x.toString() + $widget.msr;
				if(w != undefined) {
					this.elem.style.width = w.toString() + $widget.msr;
				}
				if(h != undefined) {
					this.elem.style.height = h.toString() + $widget.msr;
				}
			},
			setText(text) {
				this.elem.value = text;
			},
			getText(text) {
				return this.elem.value;
			},
			setStyle(s) {
				this.elem.style = {...this.elem.style, ...style};
			}
		}
	},
	Section() {
		var elem = document.createElement('div');
		elem.style.border = '2px inset';
		elem.style.overflow = 'auto';
		return {
			elem: elem,
			el: {body: elem},  //So a section could be turned into DOM42 element
			setPosition(x, y, w, h) {
				this.elem.style.position = 'absolute';
				this.elem.style.top = y.toString() + $widget.msr;
				this.elem.style.left = x.toString() + $widget.msr;
				if(w != undefined) {
					this.elem.style.width = w.toString() + $widget.msr;
				}
				if(h != undefined) {
					this.elem.style.height = h.toString() + $widget.msr;
				}
			},
			setStyle(s) {
				this.elem.style = {...this.elem.style, ...style};
			}
		}
	}
}
