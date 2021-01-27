var intervalID = window.setInterval(printDate, 1000)
function printDate(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}


