const command = process.argv[2];
const params = process.argv.slice(3);
const PlaylistController = require('./Controllers/PlaylistController');

switch(command){
    case 'add':
        PlaylistController.add(params)
        break;
    case 'remove':
        PlaylistController.remove(params)
        break;
    case 'make':
        PlaylistController.make(params);
        break;
    case 'showPlaylist':
        PlaylistController.show(params)
        break;
    default:
        console.log("Invalid");
        break;
}