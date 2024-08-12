const result = document.getElementById("result");
let count = 0
//setting count is not to be ++, --
function main(data){
    if(data === "clear") {
        result.innerText = ""
        count = 0
    }
    else if(data === "equal") {
        result.innerText = eval(result.innerText)
        count = 0
    }
    else if(data === "delete") {
        result.innerText = result.innerText.slice(0, -1)
        count = 0   
    }
    else {
        // this is +, -, *, /, %
        if(count == 0) {
            result.innerText = result.innerText + data
        }
        count = 1
    }
}
function number(data) {
    switch(data) {
        case '0': result.innerText = result.innerText + 0 
                  count = 0
                  break;
        case '1': result.innerText = result.innerText + 1 
                  count = 0
                  break;
        case '2': result.innerText = result.innerText + 2 
                  count = 0
                  break;
        case '3': result.innerText = result.innerText + 3 
                  count = 0
                  break;
        case '4': result.innerText = result.innerText + 4
                  count = 0
                  break;
        case '5': result.innerText = result.innerText + 5
                  count = 0
                  break;
        case '6': result.innerText = result.innerText + 6
                  count = 0
                  break;
        case '7': result.innerText = result.innerText + 7 
                  count = 0
                  break;
        case '8': result.innerText = result.innerText + 8 
                  count = 0
                  break;
        case '9': result.innerText = result.innerText + 9 
                  count = 0
                  break;
    }
}

function operator(data) {
    if(data == "square") {
        let square = result.innerText.slice(-1) ** 2
        result.innerText = result.innerText.slice(0, -1)
        result.innerText = result.innerText + square
    }
    else if(data == "cube") {
        let cube = result.innerText.slice(-1) ** 3
        result.innerText = result.innerText.slice(0, -1)
        result.innerText = result.innerText + cube    
    }
    else if(data == "squareRoot") {
        let squareRoot = Math.sqrt(result.innerText.slice(-1))
        result.innerText = result.innerText.slice(0, -1)
        result.innerText = result.innerText + squareRoot 
    }
    else if(data == "cubeRoot") {
        let cubeRoot = Math.cbrt(result.innerText.slice(-1))
        result.innerText = result.innerText.slice(0, -1)
        result.innerText = result.innerText + cubeRoot    
     }
}

