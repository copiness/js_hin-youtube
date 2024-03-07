let a = 300

if (true) {
    let a = 10
    const b = 20
    var c = 30
    //console.log("INNER: ", a);
}

//console.log(a);
//console.log(b);
//console.log(c);

function one(){
    const username = "aklanta"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);

   two()
}

//one()

if (true) {
    const username = "aklanta"
    if(username === "aklanta") {
        const website =" youtube"
        //console.log(username+website);
    }
    //console.log(website);
}

//console.log(username);

// ++++++++++++++++++ interesting ++++++++++++++++++ //
addone(5) //it not give err
function addone(num) {
    return num+1
}



addTwo(5)  //it give error 
const addTwo = function(num) {
    return num+2
}

