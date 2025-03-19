const Playlist = require('../Models/Playlist');

class PlaylistController{
    static show(){
        Playlist.show();
    }
    static add(){
        console.log("add controller");
    }
    static remove(){
        console.log("remove controller");
    }
    static make(){
        console.log("make controller");
    }
}
module.exports = PlaylistController;