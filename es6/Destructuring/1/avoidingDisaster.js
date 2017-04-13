function go(options = {
  speed: 5,
  enable: {
    hyperdrive: true,
    frobnifier: false
  }
}) {
  let {
    speed = 4, enable: {
      hyperdrive = false,
      frobnifier
    }
  } = options;

  console.log("speed=", speed,
    "hyperdrive:", hyperdrive,
    "frobnifier:", frobnifier)
}

go({
  speed: 5,
  enable: {
    hyperdrive: true,
    frobnifier: false
  }
})
