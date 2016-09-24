var f = document.getElementsByTagName('form');
f[0].addEventListener('submit', function (e) {
  e.preventDefault();
  var s = document.getElementsByTagName('input')[0].value.toLowerCase();
  var c = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
    'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
    'w', 'x', 'y', 'z'];
  for (i = 0; i < s.length; i++) {
    var ind = c.indexOf(s[i]);
    if (ind !== -1) {
      c.splice(ind, 1);
    }
  }
  spns = document.getElementsByTagName('span');
  spns[0].innerText = c.length === 0;
  for (i = 0; i < c.length; i++) {
    spns[1].textContent = spns[1].textContent + ', ' + c[i];
  }
});