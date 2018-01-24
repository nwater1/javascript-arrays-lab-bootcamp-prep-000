const app = "I don't do much."

function destructivelyAppendKitten(name) {
  kittens.push(name)
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  kittens.shift(0)
}

function appendKitten(name) {
  [...kittens, name]
}

function prependKitten(name) {
  [name, ...kittens]
}

function removeLastKitten() {
  kittens.slice(0)
}