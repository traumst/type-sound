// aliases
var log = console.log.bind('console')
var dir = console.dir.bind('console')
var bad = console.error.bind('console')
// local lib
var sound = require('./sounds')
// public npm
//var c = require('colors');
var player = require('play-sound')(opts = {})
var play = player.play.bind(player)


log('###########################################################')
log('')

const readline = require('readline');
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);
process.stdin.on('keypress', (str, key) => {
  if (key.ctrl && key.name === 'c') {
    process.exit();
  } else {
    // play a sound
    type(key)
  }
})

// play sounds
function type(key){
  try{
    log(key.sequence + ' => ' + sound.t1)
    play(sound.t1)
  }catch(err){
    bad(err)
  }
}
