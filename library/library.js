var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var printPlaylists = function() {
  for (var i in library.playlists){
    var playlist = library.playlists[i].id + ": " + library.playlists[i].name + " - " + library.playlists[i].tracks.length + " tracks"
    console.log(playlist)
  }
}
// printPlaylists()


// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function () {
  for (var i in library.tracks){
    var tracks = library.tracks[i].id + ": " + library.tracks[i].name + " by " + library.tracks[i].artist + " (" + library.tracks[i].album + ") "
    console.log(tracks)
  }
}
// printTracks()



// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {
    var playlist = playlistId + ": " + library.playlists[playlistId].name + " - " + library.playlists[playlistId].tracks.length + " tracks"
    console.log(playlist)
  for (var i in library.playlists[playlistId].tracks){
    var trackInfo = library.playlists[playlistId].tracks[i] //i.e. trackInfo="t01" etc
    var tracklist = library.playlists[playlistId].tracks[i] + ": "
                  + library.tracks[trackInfo].name + " by "
                  + library.tracks[trackInfo].artist + " ("
                  + library.tracks[trackInfo].album + ")"
    console.log(tracklist)
  }
}
// printPlaylist('p01')


// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) { // trackId= "t01" etc playlistId = "p01" etc
  for(i in library.playlists) {
    library.playlists[i].tracks.push(trackId)
  }
console.log(library.playlists[playlistId].tracks)
}
// addTrackToPlaylist('t01', 'p02');


// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

// adds a track to the library

var addTrack = function (name, artist, album) {
  var newId = uid()
  library.tracks[newId] = {
    id: newId,
    name: name,
    artist: artist,
    album: album,
  }
  console.log(library.tracks)
}
// addTrack("You're still the one", "Shania Twain", "Come On Over")

// adds a playlist to the library

var addPlaylist = function (name) {
  var newId = uid();
  library.playlists.newId = {
    id: newId,
    name: name,
    tracks: []
  }
  console.log(library.playlists)
}
// addPlaylist("Shania's Greatest Hits")


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

function testinput(re, str) {
  var midstring;
  if (str.search(re) != -1) {
    midstring = ' contains ';
  } else {
    midstring = ' does not contain ';
  }
  console.log(str.search(re));
  console.log(str + midstring + re);
}
// testinput("happens", "what happens now")


var printSearchResults = function(query) {
  var found = []
  for (var i in library.tracks){ // for every track
    for (var a in library.tracks[i]){ // for every item in track
      var results = library.tracks[i][a].search(query)
      if (results >= 0){
        found.push(library.tracks[i][a])
        // console.log(found)
      }
    }
  }
return found
// return values using a function to return each item in array found;
}
console.log(printSearchResults("Co"))











