// Generate a random graph
const graph = []
for (let i = 0; i < 50; i++)
  graph.push({value: Math.random(), edges: []})
for (let i = 0; i < 100; i++) {
  let from = graph[Math.floor(Math.random() * graph.length)]
  let to   = graph[Math.floor(Math.random() * graph.length)]
  if (from.edges.indexOf(to) != -1) continue
  from.edges.push(to)
}

function connectedValue(node, values) {
  if (values === undefined) values = new Set();
  console.log(node);


  if (values.has(node.value)) {
    console.log(values);
    return values;
  }

  values.add(node.value);

  if (node.edges.length > 0) {
    for (var i = 0; i < node.edges.length; i++) {
      connectedValue(node.edges[i], values);
    }
  } else {
    return values;
  }
}

connectedValue(graph[0]);
connectedValue(graph[24]);
connectedValue(graph[49]);
