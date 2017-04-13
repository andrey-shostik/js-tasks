function get(url) {
  return new Promise((succeed, fail) => {
    var req = new XMLHttpRequest()
    req.open("GET", url, true)
    req.addEventListener("load", (data) => {
      if (req.status < 400)
        succeed(req.responseText)
      else
        fail(new Error("Request failed: " + req.statusText))
    })
    req.addEventListener("error", () => {
      fail(new Error("Network error"))
    })
    req.send(null)
  })
}

get('http://marijnhaverbeke.nl/')
.then(function (data) {
  var words = [];
  var localLinks = data.match(/<a href=[\"|\'](?!http)(?!mail)(.*?)[\"|\']/ig);

  for (let i = 0; i < localLinks.length; i++) {
    get('http://marijnhaverbeke.nl/' + localLinks[i].slice(9, -1)).then(function (data) {
      words[i] = data.match(/Piranha/ig);
      if (words[i]) {
        console.log('http://marijnhaverbeke.nl/' + localLinks[i].slice(9, -1));
      }
    });
  }
});
