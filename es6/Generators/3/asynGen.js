drive(function*() {
    var localLinks = [];
    var promise = get('http://marijnhaverbeke.nl/').then(function (data) {
      var words = [];
      localLinks = data.match(/<a href=[\"|\'](?!http)(?!mail)(.*?)[\"|\']/ig);
        for (let i = 0; i < localLinks.length; i++) {
        get('http://marijnhaverbeke.nl/' + localLinks[i].slice(9, -1)).then(function (data) {
          words[i] = data.match(/Piranha/ig);
          if (words[i]) {
            console.log('http://marijnhaverbeke.nl/' + localLinks[i].slice(9, -1));
          }
        });
      }
    });
  yield promise;
})

function drive(generator) {
  let iterator = generator()
  function resume(result) {
    console.log(result);
    if (result.done) return
    result.value.then(
      value => resume(iterator.next(value)),
      error => resume(iterator.throw(error)))
  }
  resume(iterator.next())
}

function get(url) {
  return new Promise((succeed, fail) => {
    var req = new XMLHttpRequest()
    req.open("GET", url, true)
    req.addEventListener("load", () => {
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
