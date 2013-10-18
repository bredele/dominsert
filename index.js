
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

function insert(parent, child, position) {
  if(typeof element === 'string') {
  	parent.insertAdjacentHTML(position || 'beforeend', child);
  } else {
  	adjacent(parent, child, position);
  }
}


