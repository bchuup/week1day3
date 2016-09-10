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

library["printPlaylists"] = function() {
  for (var playlistId in this.playlists){
    var playlist = this.playlists[playlistId]
    // console.log(playlistId)
    console.log(playlist.id + ": " + playlist.name + " - " + playlist.tracks.length + " tracks")
  }
}
// library.printPlaylists();


// prints a list of all tracks
library["printTracks"] = function() {
  for (var trackId in this.tracks){
    var track = this.tracks[trackId]
    console.log(track.id + ": " + track.name + " by " + track.artist + " (" + track.album + ") ")
  }
}
// library.printTracks()

// printTracks()

// prints a list of tracks for a given playlist
library["printPlaylist"] = function(playlistId) {
  var playlist = playlistId + ": " + this.playlists[playlistId].name + " - " + this.playlists[playlistId].tracks.length + " tracks"
  console.log(playlist)
  for (var trackId of this.playlists[playlistId].tracks){
    var tracklist = this.playlists[playlistId].tracks[trackId] + ": "
                  + this.tracks[trackId].name + " by "
                  + this.tracks[trackId].artist + " ("
                  + this.tracks[trackId].album + ")"
    console.log(tracklist)
  }
}
// library.printPlaylist('p01')


// adds an existing track to an existing playlist
library["addTrackToPlaylist"] = function(trackId, playlistId) {
  this.playlists[playlistId].tracks.push(trackId)
  console.log(this.playlists[playlistId].tracks)
}
// library.addTrackToPlaylist('t03', 'p01')


// generates a unique id
var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

// adds a track to the library
library["addTrack"] = function(name, artist, album) {
  var newId = uid()
  this.tracks[newId] = {
    id: newId,
    name: name,
    artist: artist,
    album: album,
  }
  console.log(this.tracks)
}
// library.addTrack("You're still the one", "Shania Twain", "Come On Over")

// adds a playlist to the library
library["addPlaylist"] = function(name) {
  var newId = uid()
  this.playlists[newId] = {
    id: newId,
    name: name,
    tracks: []
  }
  console.log(this.playlists)
}
// library.addPlaylist("Shania's Greatest Hits")



// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

library["printSearchResults"] = function(query) {
  var found = []
  for (var trackId in this.tracks){ // for every track
    for (var trackProperties in this.tracks[trackId]){ // for every property in track
      var results = this.tracks[trackId][trackProperties].search(query)
      if (results >= 0){
        found.push(this.tracks[trackId])
        console.log(this.tracks[trackId][trackProperties])
      }
    }
  }
  return found
}
library.printSearchResults("Co")










