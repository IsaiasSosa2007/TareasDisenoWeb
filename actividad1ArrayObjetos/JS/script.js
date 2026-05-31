/*
Se deberán ingresar los siguientes datos por formulario:
Nombre y apellido del empleado, categoría y antigüedad

El sueldo bruto será de $ 1840, si la categoría es "A"; si la categoría es "B" será $ 1080; y $ 2000, si la categoría es "C".

La jubilación será el 11% del sueldo Bruto
El sindicato será el 4% del sueldo Bruto
La Obra Social será el 3% del sueldo Bruto
Se entregará un premio de $ 100 a los empleados cuya antigüedad supere los 17 años
El sueldo neto se obtendrá sumando al Bruto el premio y restando los aportes (jubl.sind. Y O.Social)
Si la antigüedad es menor a 15 colocar un formato de fuente rojo, si es superior a 20 colocar la fuente en color azul.

Se deberá mostrar:
Sueldo neto de la categoria C
Cantidad de empleados por categoria
Mostrar la liquidación de todos los empleados
Mostrar la liquidación de los empleados de la categoria A
Mostrar empleados y netos de aquellos que superen los $ 1200 de netos
Mostrar empleados que superen los 6 años de antigüedad
Buscar un empleado por su nombre y desplegar su liquidación. De no existir mostrar un mensaje
*/
let tbody = document.getElementById('tbody');

for(let i = 0; i < 10; i++){

    let tr = document.createElement('tr');

    tr.id=`tr${i+1}`;

    let tdNom = document.createElement('td');
    let tdCat = document.createElement('td');
    let tdAnt = document.createElement('td');

    let inputNom = document.createElement('input');
    let inputCat = document.createElement('input');
    let inputAnt = document.createElement('input');

    inputNom.type = "text";
    inputCat.type = "text";
    inputAnt.type = "number";

    inputNom.id = `inputNom${i+1}`;
    inputCat.id = `inputCat${i+1}`;
    inputAnt.id = `inputAnt${i+1}`;

    tdNom.appendChild(inputNom);
    tdCat.appendChild(inputCat);
    tdAnt.appendChild(inputAnt);

    tr.appendChild(tdNom);
    tr.appendChild(tdCat);
    tr.appendChild(tdAnt);

    tbody.appendChild(tr);

}

function agregarValores(){
    document.getElementById('inputNom1').value="Flores Carina";
    document.getElementById('inputCat1').value="A";
    document.getElementById('inputAnt1').value=8;

    document.getElementById('inputNom2').value="Garcia Carlos";
    document.getElementById('inputCat2').value="A";
    document.getElementById('inputAnt2').value=17;

    document.getElementById('inputNom3').value="Palacios Javier";
    document.getElementById('inputCat3').value="B";
    document.getElementById('inputAnt3').value=9;

    document.getElementById('inputNom4').value="Pereyra Esteba";
    document.getElementById('inputCat4').value="C";
    document.getElementById('inputAnt4').value=17;

    document.getElementById('inputNom5').value="Rios Gisella";
    document.getElementById('inputCat5').value="A";
    document.getElementById('inputAnt5').value=19;

    document.getElementById('inputNom6').value="Rodriguez Mirta";
    document.getElementById('inputCat6').value="B";
    document.getElementById('inputAnt6').value=20;

    document.getElementById('inputNom7').value="Silva Jorge";
    document.getElementById('inputCat7').value="C";
    document.getElementById('inputAnt7').value=25;

    document.getElementById('inputNom8').value="Suarez Alberto";
    document.getElementById('inputCat8').value="A";
    document.getElementById('inputAnt8').value=5;

    document.getElementById('inputNom9').value="Torres Roxana";
    document.getElementById('inputCat9').value="C";
    document.getElementById('inputAnt9').value=10;

    document.getElementById('inputNom10').value="Vila Ana Maria";
    document.getElementById('inputCat10').value="B";
    document.getElementById('inputAnt10').value=30;
}


let empleados=[];
let tablaLLenada=false;
function agregarAlArray(){
    for(let i=0;i<10;i++){
        let nom=document.getElementById(`inputNom${i+1}`).value;
        let cat=document.getElementById(`inputCat${i+1}`).value;
        let ant=document.getElementById(`inputAnt${i+1}`).value;
        let bruto=0;

        if(cat=='A'){
            bruto=1840;
        }
        else if(cat=='B'){
            bruto=1080;
        }
        else if(cat=='C'){
            bruto=2000;
        }
        let jubil=bruto*(11/100);
        let sind=bruto*(4/100);
        let obraSoc=bruto*(3/100);
        let prem=0;
        if(ant>17){
            prem=100;
        }
        let neto= bruto+prem-jubil-sind-obraSoc;

        const truncarDosDecimales = num => Math.floor(num * 100) / 100;
        
        jubil   = truncarDosDecimales(jubil);
        sind    = truncarDosDecimales(sind);
        bruto   = truncarDosDecimales(bruto);
        obraSoc = truncarDosDecimales(obraSoc);
        prem    = truncarDosDecimales(prem);
        neto    = truncarDosDecimales(neto);


        let datos={
            nombre:nom,
            categoria:cat,
            antiguedad:ant,
            sueldoBruto:bruto,
            jubilacion:jubil,
            sindicato:sind,
            obraSocial:obraSoc,
            premio:prem,
            sueldoNeto:neto
        }
        if(nom==""||cat==""){
            console.log("no hay datos que mostrar");
            //alert("no hay datos que mostrar")
            break;
        }
        else {
            empleados.push(datos);
            console.log(empleados[i]);
        }
    }

    let i=1;
    empleados.forEach(datosEmpleado => {
        
        let tr=document.getElementById(`tr${i}`)
        
        let tdBruto=document.createElement('td');
        let tdJubil=document.createElement('td');
        let tdSind=document.createElement('td');
        let tdObrSoc=document.createElement('td');
        let tdPrem=document.createElement('td');
        let tdNeto=document.createElement('td');

        tdBruto.id=`bruto${i}`
        tdJubil.id=`jubilacion${i}`
        tdSind.id=`sind${i}`
        tdObrSoc.id=`obraSoc${i}`
        tdPrem.id=`premio${i}`
        tdNeto.id=`neto${i}`

        tdBruto.textContent=datosEmpleado.sueldoBruto;
        tdJubil.textContent=datosEmpleado.jubilacion;
        tdSind.textContent=datosEmpleado.sindicato;
        tdObrSoc.textContent=datosEmpleado.obraSocial;
        tdPrem.textContent=datosEmpleado.premio;
        tdNeto.textContent=datosEmpleado.sueldoNeto;
        
        tr.appendChild(tdBruto);
        tr.appendChild(tdJubil);
        tr.appendChild(tdSind);
        tr.appendChild(tdObrSoc);
        tr.appendChild(tdPrem);
        tr.appendChild(tdNeto);

        let tbody=document.getElementById('tbody');
        tbody.appendChild(tr);

        i++;
    });
    tablaLLenada=true;

}

document.getElementById('agregarValores').addEventListener('click', agregarValores)

document.getElementById('agregar').addEventListener('click', function(){
    if(tablaLLenada){
        console.log("La tabla ya esta completa");
    }
    else{agregarAlArray();}
})