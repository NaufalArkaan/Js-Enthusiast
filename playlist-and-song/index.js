const command = process.argv[2];
const params = process.argv.slice(3);
const PlaylistController = require('./Controllers/PlaylistController');

switch(command){
    case 'add':
        PlaylistController.add()
        break;
    case 'remove':
        PlaylistController.remove()
        break;
    case 'make':
        PlaylistController.make();
        break;
    case 'showPlaylist':
        PlaylistController.show()
        break;
    default:
        console.log("Invalid");
        break;
}