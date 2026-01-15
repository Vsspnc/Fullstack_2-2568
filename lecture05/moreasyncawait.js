function who() {
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve("🤡");
        }, 200);
    });
}
function what() {
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve("lurks");
        }, 300);
        });
}

function where() {
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve("in the shadows");
        }, 500);
    });
}

async function message() {
    const w = await who();
    const h = await what();
    const r = await where();
    console.log(`${w} ${h} ${r}`);
}

console.log("We are looking for:");
message();
console.log("Hello?")
