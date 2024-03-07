function chai() {
    console.log(`DB CONNECTED`);

}

//chai()

(function chai() {
    console.log(`DB CONNECTED`);
})();

//global scopa ki wajese jo pollution hota hai usko hatane ke liye we use iife

(function aurcode() {
    console.log(`DB CONNECTED TWO`);
}) ();

( () => {
    console.log(`DB CONNECT`);
})();       // ; beacuse of this sometimes it give error

( (name) => {
    console.log(`DB CONNECT ${name}`);
})('aklanta')