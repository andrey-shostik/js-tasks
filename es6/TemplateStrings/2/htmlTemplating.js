function html(...html) {
  // Your code here
  var arr = [];

  for (var i = 0; i < html[0].length; i++) {
    for (var j = 0; j < mustEscape.length; j++) {
      if (html[0][i].indexOf(mustEscape[i]) !== -1) {
        arr.push(escapeHTML(html[0][i]));
      } else {
        arr.push(html[0][i]);
      }
    }
  }


  console.log(arr)

  return
}

const mustEscape = '<>&"'
console.log(html`<You should escape the ${mustEscape.length} characters “${mustEscape}” in HTML/>`)

function escapeHTML(string) {
  return String(string).replace(/"/g, "&quot;").replace(/</g, "&lt;")
    .replace(/>/g, "&gt;").replace(/&/g, "&amp;")
}
