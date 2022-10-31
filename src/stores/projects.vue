handleScroll(event, first second) { const y = event.deltaY ; if (y > 0) {
this.first = true; this.second = false } else{ this.first = false; this.second =
true } }, handleKeyDown(event, first,second) { if (event.key === 'ArrowDown') {
this.first = true; this.second = false } else{ this.first = false; this.second =
true } },
