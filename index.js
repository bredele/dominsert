
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
 * @param  {HTMLElement} parent 
 * @param  {String} child    
 * @param  {String} position
 * @api public
 */

function insert(parent, child, position) {
  var pos = position || 'beforeend';
  if(typeof child === 'string') {
    insert.html(parent, child, pos);
  } else {
    insert.element(parent, child, pos);
  }
}


/**
 * Insert adjacent HTML.
 * Simple insertAdjacentHTML wrapper.
 * 
 * @param  {HTMLElement} parent 
 * @param  {String} child    
 * @param  {String} position [description]
 * @api public
 */

insert.html = function(parent, child, position) {
  parent.insertAdjacentHTML(position, child);
};


/**
 * Insert adjacent HTML element.
 * 
 * @param  {HTMLElement} parent 
 * @param  {HTMLElement} child    
 * @param  {String} position [description]
 * @api public
 */

insert.element = function(parent, child, position) {
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


