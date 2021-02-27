//=========== [6kyu] Dubstep ===========//

function songDecoder(song){
    regex = /(WUB)+/g
    let newSong = song.replace(regex, ' ').split('')
    if(newSong[0]== ' ')
        newSong.splice(0, 1)
    if(newSong[newSong.length-1] == ' ')
        newSong.splice(newSong.lastIndexOf(' '), 1)
    return newSong.join('')
}

  console.log(songDecoder("AWUBBWUBC"))