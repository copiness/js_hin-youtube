// for in

const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
   // console.log(`${key} shortcut for ${myObject[key]}`);
}

const programming = ["js", "rb", "py","java","cpp"]

for (const key in programming) {
    //console.log(key);
    //console.log(programming[key]);
}

// const map = new Map()
// map.set('IN','India')
// map.set('USA', "United states of America") //here map is not iterable
// map.set('Fr', 'France')
// map.set('IN','India')

// for (const key in map) {
//     console.log(key);
// }

