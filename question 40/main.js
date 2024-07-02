// Making three albums  number of tracks
function make_Album1(artistName, albumTitle) {
    return { artistName: artistName, albumTitle: albumTitle };
}
var album1 = make_Album1('Ali Zafar', 'PSL song');
var album2 = make_Album1('Atif Aslam', 'IPL song');
var album3 = make_Album1('Asim Azhar', 'CPL song');
console.log(album1);
console.log(album2);
console.log(album3);
// Making three albums  number of tracks
function make_Album2(artistName, albumTitle, albumTrack) {
    return { artistName: artistName, albumTitle: albumTitle, albumTrack: albumTrack };
}
var album4 = make_Album2('Ali Zafar', 'PSL song', 30);
var album5 = make_Album2('Atif Aslam', 'IPL song', 20);
var album6 = make_Album2('Asim Azhar', 'CPL song', 10);
console.log(album4);
console.log(album5);
console.log(album6);
