
/**
 * Expose 'insert'
 */

module.exports = insert;


/**
 * Insert a node into the DOM tree 
 * at a specified position.
 * 
 * Examples:
 *
 *   insert('<span>hello</span>', el);
 *   insert(btn, el, 'beforebegin');
 *
 * @param  {String} child    
 * @param  {HTMLElement} parent 
 * @param  {String} position
 * @api public
 */

function insert(child, parent, position) {
  var pos = position || 'beforeend';
  if(typeof child === 'string') {
    insert.html(child, parent, pos);
  } else {
    insert.element(child, parent, pos);
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

insert.html = function(child, parent, position) {
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

insert.element = function(child, parent, position) {
  if(parent.insertAdjacentElement) {
    parent.insertAdjacentElement(position, child);
  } else {
    switch (position) {
      case "beforebegin":
        parent.parentNode.insertBefore(child, parent);
        break;
      case "afterbegin":
        parent.insertBefore(child, parent.firstChild);
        break;
      case "beforeend":
        parent.appendChild(child);
        break;
      case "afterend":
        parent.parentNode.insertBefore(child, parent.nextSibling);
        break;
    }
  }
};


