let mobiles = {

    select:{},

    Iphone:{
        v12:{
            ram:4,
            rom:32,
            price:23232,
        },
        v13:{
            ram:5,
            rom:33,
            price:73232,
        },
        v14:{
            ram:4,
            rom:32,
            price:23232,
        },
        v15:{ ram:4,
            rom:32,
            price:23232,

        },

    },
    Samsung: {
        note1:{
            ram:4,
            rom:32,
            price:23232,
        },
        note2:{
            ram:4,
            rom:32,
            price:23232,
        },
        note3:{
            ram:4,
            rom:32,
            price:23232,
        },
        note3:{
            ram:4,
            rom:32,
            price:23232,
        },

    },
  
    Infinix:{
hot11:{
    ram:4,
    rom:32,
    price:23232,
},
hot12:{
    ram:4,
    rom:32,
    price:23232,
},
hot13:{
    ram:4,
    rom:32,
    price:23232,
},
    }
};


 let mobileName  =  document.getElementById('input1');
let model =  document.getElementById('input2');


function fillMainKeys() {
    let mainKeys = Object.keys(mobiles);
    mobileName.innerHTML = "";
    for (let i = 0; i < mainKeys.length; i++) {
        mobileName.innerHTML += `<option>
         ${mainKeys[i]}</option>`};
};

fillMainKeys()

function fillNestedDropDown() {
     model.disabled = false;
    let nestedKeys = Object.keys(mobiles[mobileName.value]);

  model.innerHTML = "";
    for (let i = 0; i < nestedKeys.length; i++) {
       model.innerHTML += `<option>
         ${nestedKeys[i]}</option>`};
};



function searchVal(){
  let res =  mobiles[mobileName.value][model.value] ;
  console.log(res);

  let para = document.getElementById('getValue');
  //get values only
//   document.getElementById("getValue").innerHTML = Object.values(res);

  //get the whole string with value and variable
//   document.getElementById("getValue").innerHTML = JSON.stringify(res);

let a = Object.keys(res);
let b = Object.values(res);
para.innerHTML = "";
  
for (let i = 0; i < a.length; i++) {
    para.innerHTML += ` 
    <h5 class="bg-light">
      <span> ${a[i]}</span> : ${b[i]}
    </h5>
       `  
}





};




