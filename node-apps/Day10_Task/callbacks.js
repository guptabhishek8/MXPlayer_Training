//CallBack
function printText(txt, cb){
    console.log(txt);
    cb();
}

printText("Printing text of main function", function(){
    console.log("callback is called");
})