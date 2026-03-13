let x = 10;   // Global scope

function test() {
    let y = 20;   // Function scope

    if (true) {
        let z = 30;   // Block scope
        console.log(x);
        console.log(y); 
        console.log(z); 
    }

    console.log(x); 
    console.log(y);
    // console.log(z); //error
}

test();