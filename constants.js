const arrayToInt = function(array){
    return parseInt(array.reduce((prev, current) => prev + '' + current));
}


export{};