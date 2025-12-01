const statuss = 200;

if (statuss === 200){
    console.log("Ok")
}
else if (statuss === 400){
    console.log("Error")
}else{
    console.log("Unknow")
}

switch (statuss){
    case 200:
        console.log("OK")
        break
    case 400:
        console.log("Error")
    default:
        console.log("unknow")
}

const message = (statuss === 200)? 'OK!' : "Error";
console.log(message);
