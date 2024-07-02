// Making three albums  number of tracks

function make_Album1(artistName: string, albumTitle: string){
    return{artistName,albumTitle}
}

let  album1 = make_Album1('Ali Zafar', 'PSL song');
let album2 = make_Album1('Atif Aslam', 'IPL song');
let  album3 = make_Album1('Asim Azhar', 'CPL song');

console.log(album1);
console.log(album2);
console.log(album3);

// Making three albums  number of tracks

function make_Album2(artistName: string, albumTitle: string, albumTrack?:number){
    return{artistName,albumTitle,albumTrack}
}

let  album4 = make_Album2('Ali Zafar', 'PSL song', 30);
let album5 = make_Album2('Atif Aslam', 'IPL song',20);
let  album6 = make_Album2('Asim Azhar', 'CPL song',10 );

console.log(album4);
console.log(album5);
console.log(album6);

