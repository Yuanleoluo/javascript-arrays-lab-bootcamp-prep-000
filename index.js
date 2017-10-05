const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(a){
  var b = [...kittens, a]
  return b
}

function destructivelyPrependKitten(a){
  kittens.shift(a)
  return kittens
}
