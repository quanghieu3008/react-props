function myFunction(param) {
    if (typeof param === "function") {
        param("CallBack oke")

    }
}
function myCallback(value) {
    console.log("'Value:", value);

}

myFunction(myCallback)