let promise = new Promise(function (resolve, reject) { // let's just set x for this example
    let x = 20;
    if (10 > 10) {
    resolve(x); // on success
    } else {
    reject("Too low"); // on error }
    }});


    promise.then( function (value) {
    console.log("Success:", value) })
    .catch(function (error) { console.log("Error:", error);
})


function addOne(val){
    return val + 1;
}

function total(a, b, callback){
    const sum = a + b;
return callback(sum);
}

console.log(total(4, 5, addOne()));
