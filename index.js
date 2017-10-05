const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(a){
  kittens.push(a)
  return kittens
}

function destructivelyPrependKitten(a){
  kittens.shift("Milo")
  kittens.shift(a)
  return kittens
}
