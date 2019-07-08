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

function $loadWindow(win) {
	return new DOM42(win);
}

var $widget = {
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
				this.elem.style.top = y.toString() + 'px';
				this.elem.style.left = x.toString() + 'px';
				if(w != undefined) {
					this.elem.style.width = w.toString() + 'px';
				}
				if(h != undefined) {
					this.elem.style.height = h.toString() + 'px';
				}
			},
			setStyle(s) {
				s = s.split(';');
				var style = {};
				for(var i in s) {
					if(s[i] != '') {
						style[s[i].split('=')[0]] = s[i].split('=')[1];
					}
				}
				this.elem.style = {...this.elem.style, ...style};
			}
		}
	},
	Label(text, size) {
		var elem = document.createElement('p');
		if(size != undefined) {
			elem.style.fontSize = size.toString() + 'px';
		}
		elem.innerText = text;
		return {
			elem: elem,
			setPosition(x, y) {
				this.elem.style.position = 'absolute';
				this.elem.style.top = y.toString() + 'px';
				this.elem.style.left = x.toString() + 'px';
			},
			setStyle(s) {
				s = s.split(';');
				var style = {};
				for(var i in s) {
					if(s[i] != '') {
						style[s[i].split('=')[0]] = s[i].split('=')[1];
					}
				}
				this.elem.style = {...this.elem.style, ...style};
			}
		}
	},
	Entry(type, size) {
		var elem = document.createElement('input');
		if(type != undefined) {
			elem.type = type;
		}
		if(size != undefined) {
			elem.style.fontSize = size.toString() + 'px';
		}
		return {
			elem: elem,
			setPosition(x, y) {
				this.elem.style.position = 'absolute';
				this.elem.style.top = y.toString() + 'px';
				this.elem.style.left = x.toString() + 'px';
			},
			setText(text) {
				this.elem.value = text;
			},
			getText(text) {
				return this.elem.value;
			},
			setStyle(s) {
				s = s.split(';');
				var style = {};
				for(var i in s) {
					if(s[i] != '') {
						style[s[i].split('=')[0]] = s[i].split('=')[1];
					}
				}
				this.elem.style = {...this.elem.style, ...style};
			}
		}
	}
}