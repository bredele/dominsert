
/**
 * Expose 'insert'
 */

module.exports = insert;


function adjacent(el, child, position) {
	if(el.insertAdjacentElement) {
		el.insertAdjacentElement(position, child);
	} else {
		switch (position) {
			case "beforebegin":
				el.parentNode.insertBefore(child, el);
				break;
			case "afterbegin":
				el.insertBefore(child, el.firstChild);
				break;
			case "beforeend":
				el.appendChild(child);
				break;
			case "afterend":
				el.parentNode.insertBefore(child, el.nextSibling);
				break;
		}
	}
}

/**
 * insert constructor.
 * @api public
 */

function insert(child, position, parent) {
	var pos = position || 'beforeend';
  if(typeof child === 'string') {
    insert.html(child, pos, parent);
  } else {
    insert.element(child, pos, parent);
  }
}


/**
 * Insert adjacent HTML.
 * Simple insertAdjacentHTML wrapper.
 * 
 * @param  {String} child    
 * @param  {String} position [description]
 * @param  {HTMLElement} parent 
 * @api public
 */

insert.html = function(child, position, parent) {
	parent.insertAdjacentHTML(position, child);
};


/**
 * Insert adjacent HTML element.
 * 
 * @param  {HTMLElement} child    
 * @param  {String} position [description]
 * @param  {HTMLElement} parent 
 * @api public
 */

insert.element = function(child, position, parent) {
	adjacent(parent, child, position);
};


