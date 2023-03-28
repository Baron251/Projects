let name = ' '

  
function respond(name) {
  // enter your name through name parameter
  if (name === 'darth vader')
    console.log("Noooooo! That's impossible!")
  } if (name === 'lex luthor') {
    console.log("Be gone, you villian!!!")
  } else {
    console.log("Hello luke skywalker, you are a wonderful friend!")
}
console.log("Start")
name = 'darth vader'
respond(name);

// should print 'Noooooo! That's impossible!'
name = 'lex luthor'
respond(name);

// should print 'Be gone, you villian!!!'
name = 'luke skywalker'
respond(name);

// should print 'Hello luke skywalker, you are a wonderful friend!'
