function detectCollision(objects, { x: xp, y: yp }) {
  for (let i = 0; i < objects.length; i++) {
    let { x, y, width, height } = objects[i]
    if (xp >= x && xp <= x + width &&
        yp >= y && yp <= y + height)
      return objects[i]
  }
}

const myObjects = [
  {x:  10, y: 20, width: 30, height: 30},
  {x: -40, y: 20, width: 30, height: 30},
  {x:   0, y:  0, width: 10, height:  5
]

console.log(detectCollision(myObjects, {x: 4, y: 2}))
le.log(detectCollision(myObjects, {
  x: 4,
  y: 2
}))
le.log(detectCollision(myObjects, {
  x: 4,
  y: 2
}))
