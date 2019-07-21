/*
WINDOWS93 CONSOLE
 - create: new $console(title)
 - print: obj.print(text) or obj.print(text, color)
 - input: obj.input(text, callback)
*/

class $console {
	constructor(title) {
		//Create element and set stile for console
		this.el = document.createElement('div');
		this.el.style.width = '100%';
		this.el.style.height = '100%';
		this.el.style.backgroundColor = 'white';
		this.el.style.border = '2px inset';
		this.el.style.overflowY = 'auto';
		this.el.style.overflowX = 'hidden';
		this.el.style.font = '12px Consolas';
		
		//Create a window with given title and add el to it.
		$window({title: title}).el.body.appendChild(this.el);
		
		//Print function
		this.print = function(text, color) {
			//If color entered, then create a span
			if(color != undefined) {
				var s = document.createElement('span');
				s.style.color = color;
				s.innerText = text.split(' ').join(String.fromCharCode(160)) + '\n';
				this.el.appendChild(s);
			} else {
				this.el.innerText += text.split(' ').join(String.fromCharCode(160)) + '\n';
			}
			//Scroll to bottom of printed text
			this.el.scrollTop = this.el.scrollHeight;
		}
		
		//Input function
		this.input = function(text, cb, bas) {
			//print text and create an input field
			this.el.innerText += text.split(' ').join(String.fromCharCode(160));
			this.el.scrollTop = this.el.scrollHeight;
			var inp = document.createElement('input');
			inp.style.width = '50%';
			inp.style.outline = 'none';
			inp.style.border = 'none';
			inp.style.height = '12px';
			inp.style.font = '12px Consolas';
			var term = this;
			var calb = cb;
			//When enter clicked, run callback
			inp.onkeydown = function(e) {
				if(e.keyCode == 13) {
					term.print(inp.value);
					calb(inp.value, bas);
				}
			}
			this.el.appendChild(inp);
			inp.select();
		}
	}
}
