const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(a){
  kittens.push(a)
  return kittens
}

function destructivelyPrependKitten(a){
  kittens.unshift(a)
  return kittens
}

destructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens
}
