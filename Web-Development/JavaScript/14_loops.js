 //for of loop

 //[{},{},{}]

 const l = [1,2,3,4,5]
// for(const iterator of object){
     
// }

// for(const num of l){
//     console.log(num)
// }

//MAPS

const map = new Map()
map.set('IN', "India")
map.set('USA',"United states of America")

//console.log(map)

// for(const [key,value] of map){
//     console.log(key, ':-', value);
// }

const myobj = {
    'Game1' : 'NFS',
    'game2' : 'spiderman'
}

//for(const [iteration] of object){
    
//}

//for(const [key,value] of myobj){
    //console.log(key, ':-', value);
//}  //this is not iteratable
//ye tareeka nhi hai object ko iterate krne ka

const m = {
    js: 'javascript',
    cpp: 'cpp',
    rb : 'ruby',
    swift : 'swift'
}

//forin loop
for (const key in m) {
      console.log(`${key} shortcut is for ${m[key]}`)
}

//forin in arrays

const pgm =  ["js","cpp","rb","py","java"]
for( const key in pgm){
    console.log(pgm[key])
}

