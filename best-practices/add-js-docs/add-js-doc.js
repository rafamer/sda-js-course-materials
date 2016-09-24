'use strict';

function addClass(element, className) {
  if (element.className.indexOf(className) === -1) {
    element.className += ' ' + className;
  }
}

function removeClass(element, className) {
  var regexp = new RegExp('(?:^|\\s)' + className + '(?!\\S)', 'g');
  element.className = element.className.replace(regexp, '');
}

function hasClass(element, classValue) {
  return element.className.indexOf(classValue) !== -1;
}

function sizeToZoomLevel(size) {
  return Math.ceil(Math.log(size) / Math.log(2)) - 8;
}


function isInteger(variable) {
  return typeof variable === 'number' && isFinite(variable) && variable % 1 === 0;
}

function isNonEmptyString(variable) {
  return typeof variable === 'string' && variable.trim().length !== 0;
}

function buildLinkHTML(point, innerHtml, className) {
  var classString = (className) ? ' class="' + className + '"' : '';

  return '<a href="' + point.link + '" title="' + point.name + '" data-article-title="' + point.link_title + '"' + classString + ' target="_blank">' +
    innerHtml + '</a>';
}
