document.onkeydown = (e) => inputKeys(e);

function inputKeys(button){
    var elem = document.getElementById("result-textbox");
    if(button instanceof KeyboardEvent){
        switch(button.key){
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            case '0':
            case '-':
            case '+':
            case '.':
            case '*':
            case '/':
                elem.value += button.key;
                break;
            case "Backspace":
            case "Delete":
                elem.value = elem.value.substring(0,elem.value.length-1);
                break;
            case '=':
            case "Enter":
                calculate(elem);
                break;
        }
    }else{
        switch(button.textContent){
            case '=':
                calculate(elem);
                break;
            case 'C':
                elem.value = "";
                break;
            default:
                elem.value += button.textContent;
                break;
        }
        button.blur();//Removes focus from button
    }
}

function calculate(elem){
    elem.value = eval(elem.value);
}

