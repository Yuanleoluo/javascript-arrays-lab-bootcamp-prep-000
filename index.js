const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(a){
  kittens.push(a)
  return kittens
}
kittens = ["Milo", "Otis", "Garfield"]
function destructivelyPrependKitten(a){

  kittens.shift(a)
  return kittens
}
