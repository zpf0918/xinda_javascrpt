function now() {
  return 21
}

function later() {
  answer = answer * 2;
  console.log("meaning of life:", answer)
}

var answer = now()

setTimeout(later, 1000)