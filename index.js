let today = new Date();



let month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";

let m = today.getMonth();

let date = today.getDate() + " " + month[m] + ", " + today.getFullYear();
console.log(date);
document.getElementsByClassName('date')[0].textContent = date;




function getSelectValue(){
    let selectedValue = document.getElementById("unit-converter").value.toLowerCase();
    document.getElementById("result").innerHTML = "You have selected " + selectedValue + " conversion";

    if(selectedValue === 'temperature'){
        
            document.getElementById("main-op1").innerHTML = "Celcius";
            document.getElementById("main-op2").innerHTML = "Kelvin";
            document.getElementById("main-op3").innerHTML = "Fahrenheit";

            document.getElementById("sub-op1").innerHTML = "Kelvin";
            document.getElementById("sub-op2").innerHTML = "Fahrenheit";
            document.getElementById("sub-op3").innerHTML = "Celcius";

    }else if( selectedValue == 'currency'){
            document.getElementById("main-op1").innerHTML = "VND";
            document.getElementById("main-op2").innerHTML = "USD";
            document.getElementById("main-op3").innerHTML = "Pound";

            document.getElementById("sub-op1").innerHTML = "USD";
            document.getElementById("sub-op2").innerHTML = "VND";
            document.getElementById("sub-op3").innerHTML = "Pound";

    }else{
        document.getElementById("main-op1").innerHTML = "Km";
        document.getElementById("main-op2").innerHTML = "Mm";
        document.getElementById("main-op3").innerHTML = "Miles";


        document.getElementById("sub-op2").innerHTML = "Mm";
        document.getElementById("sub-op3").innerHTML = "Miles";
        document.getElementById("sub-op1").innerHTML = "Km";        
    }

}



document.getElementById("main-unit").addEventListener("keyup", () =>{
  /*   let mainSelect = document.querySelector('.main-unit-option'); */
    let primary = document.querySelector(".main-unit-options");
    let second = document.querySelector(".second-unit-options");
    let mainUnit = primary.options[primary.selectedIndex].textContent.toLowerCase();
    let secondUnit= second.options[second.selectedIndex].textContent.toLowerCase();
  
    let numberInput = document.getElementById('main-unit').value;
    numberInput = parseInt(numberInput);

    if(mainUnit === 'celcius'){
        if(secondUnit === 'kelvin'){

            document.getElementById('second-unit').value = numberInput + 273.15;
        }else if(secondUnit === 'fahrenheit'){

            document.getElementById('second-unit').value = (numberInput * 9/5) + 32;
        }else{
            document.getElementById('second-unit').value = numberInput;
        }
    } else if(mainUnit === 'kelvin'){
        if(secondUnit === 'celcius'){
            document.getElementById('second-unit').value = numberInput - 273.15;
        }else if(secondUnit === 'fahrenheit'){
            document.getElementById('second-unit').value = (numberInput - 32) * 5/9 + 273.15;
        }else{
            document.getElementById('second-unit').value = numberInput;
        }

    }else{
        if(secondUnit === 'kelvin'){
       
            document.getElementById('second-unit').value = (numberInput - 32) * 5/9 + 273.15;

        }else if(secondUnit === 'celcius'){
            document.getElementById('second-unit').value = (numberInput - 32) * 5/9;
        }else{
            document.getElementById('second-unit').value = numberInput;
        }


    }


    if(mainUnit === 'vnd'){
        if(secondUnit === 'usd'){
            document.getElementById('second-unit').value = numberInput * 0.000043;

        }else if(secondUnit === 'pound'){
            document.getElementById('second-unit').value = numberInput *   0.000033;
        
        }else{
            document.getElementById('second-unit').value = numberInput;
        }

    }


});
 
