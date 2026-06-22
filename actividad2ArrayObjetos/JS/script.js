/*
Esta actividad deberá realizarse utilizando html, css, javascript, Funciones de javascript, arrays de objetos. Los datosAMostrar son ingresados por el usuario a través
de un formulario html y el resultado se informa en el mismo, ya sea por una tabla o simples campos, como usted considere lo más óptimo para el cliente
*/
/*
IVA 21%: multiplicar el PRECIO por el 21%
PRECIO CONTADO: Precio + IVA
INTERES 10%: Calcular el 10$]% del PRECIO CONTADO multiplicando el precio por 10 %
PRECIIO CON INTERES: Sumarle el precio contado + el interés
VALOR EN 24 CUOTAS: Dividir el PRECIO CON INTERRES POR 24
VALOR EN 36 CUOTAS: Dividir el PRECIO CON INTERES POR 36

Se deben ingresar los siguiente datos por cada presupuesto:
Vehículo, nombre y apellido del cliente y precio de lista del automotor (puede repetirse el vehículo y el cliente en distintas operaciones)

Se deberá mostrar:
Todos los vehículo presupuestados a un determinado cliente (éste dato es ingresado desde un formulario)
Aquellos Vehículos cuyo precio de lista sea superior a un valor que usted considere
*/

let clientes = [];

document.getElementById("inVehiculo").value = "Chevrolet Corsa City";
document.getElementById("inCliente").value = "Isaias Sosa";
document.getElementById("inPrecio").value = "100";

function truncar(numero) {
  numero = numero * 100;
  numero = Math.floor(numero);
  numero = numero / 100;
  return numero;
}
let i = 0;
function ingresarDatos() {
  const vehiculo = document.getElementById("inVehiculo").value;
  const cliente = document.getElementById("inCliente").value;
  const precio = parseFloat(document.getElementById("inPrecio").value);

  let datosCliente = {
    vehiculo: vehiculo,
    nombre: cliente,
    precio: precio,
  };

  if (clientes.length == 0) {
    document.getElementById("clientes").innerHTML +=
      `<option value="${cliente}">${cliente}</option>`;
  } else if (cliente.toUpperCase() != clientes[i - 1].nombre.toUpperCase()) {
    document.getElementById("clientes").innerHTML +=
      `<option value="${cliente}">${cliente}</option>`;
  } else {
    console.log("Cliente ingresado es el mismo que el anterior");
  }
  i++;

  clientes.push(datosCliente);
  console.log(clientes);
}

let divTabla = document.getElementById("divTabla");
let table = document.createElement("table");
table.id = `tabla`;
let thead = document.createElement("thead");
let tbody = document.createElement("tbody");

let thVehiculo = document.createElement("th");
let thCliente = document.createElement("th");
let thPrecio = document.createElement("th");
let thIva = document.createElement("th");
let thPrecioContado = document.createElement("th");
let thInteres = document.createElement("th");
let thPrecioConInteres = document.createElement("th");
let thValor24Cuotas = document.createElement("th");
let thValor36Cuotas = document.createElement("th");
function mostrarDatos() {
  let determinadoCliente = document.getElementById("inMostrarDe").value;

  if (determinadoCliente == "") {
    //alert(`No se ha seleccionado ningun cliente`);
    console.log(`No se ha seleccionado ningun cliente`);
  } else {
    let datosAMostrar = [];

    clientes.forEach((cliente) => {
      if (determinadoCliente.toUpperCase() === cliente.nombre.toUpperCase()) {
        let iva = cliente.precio * (21 / 100);
        let precioContado = cliente.precio + iva;
        let interes = precioContado * (10 / 100);
        let precioConInteres = precioContado + interes;
        let valor24Cuotas = precioConInteres / 24;
        let valor36Cuotas = precioConInteres / 36;

        iva = truncar(iva);
        precioContado = truncar(precioContado);
        interes = truncar(interes);
        precioConInteres = truncar(precioConInteres);
        valor24Cuotas = truncar(valor24Cuotas);
        valor36Cuotas = truncar(valor36Cuotas);

        datosAMostrar.push({
          nombre: cliente.nombre,
          vehiculo: cliente.vehiculo,
          precio: cliente.precio,
          iva: iva,
          precioContado: precioContado,
          interes: interes,
          precioConInteres: precioConInteres,
          valor24Cuotas: valor24Cuotas,
          valor36Cuotas: valor36Cuotas,
        });
      } else {
        console.log(
          `Nombre (${cliente.nombre}) no coincide con cliente determinado (${determinadoCliente})`,
        );
      }
    });

    thVehiculo.textContent = `Vehiculo`;
    thCliente.textContent = `Cliente`;
    thPrecio.textContent = `Precio`;
    thIva.textContent = `IVA`;
    thPrecioContado.textContent = `Precio contado`;
    thInteres.textContent = `Interes 10%`;
    thPrecioConInteres.textContent = `Precio con interes`;
    thValor24Cuotas.textContent = `Valor en 24 cuotas`;
    thValor36Cuotas.textContent = `valor en 36 cuotas`;

    thead.appendChild(thVehiculo);
    thead.appendChild(thCliente);
    thead.appendChild(thPrecio);
    thead.appendChild(thIva);
    thead.appendChild(thPrecioContado);
    thead.appendChild(thInteres);
    thead.appendChild(thPrecioConInteres);
    thead.appendChild(thValor24Cuotas);
    thead.appendChild(thValor36Cuotas);

    let divMasCarosQue = document.getElementById("masCarosQue");
    let h2 = document.createElement("h2");
    let masCaro = 40;
    h2.textContent = `Vehiculos mas caros que $${masCaro}:`;
    divMasCarosQue.appendChild(h2);

    datosAMostrar.forEach((element) => {
      let tr = document.createElement("tr");
      let td = document.createElement("td");
      let tdVehiculo = document.createElement("td");
      let tdCliente = document.createElement("td");
      let tdPrecio = document.createElement("td");
      let tdIva = document.createElement("td");
      let tdPrecioContado = document.createElement("td");
      let tdInteres = document.createElement("td");
      let tdPrecioConInteres = document.createElement("td");
      let tdValor24Cuotas = document.createElement("td");
      let tdValor36Cuotas = document.createElement("td");

      tdCliente.textContent = element.nombre;
      tdVehiculo.textContent = element.vehiculo;
      tdPrecio.textContent = element.precio;
      tdIva.textContent = element.iva;
      tdPrecioContado.textContent = element.precioContado;
      tdInteres.textContent = element.interes;
      tdPrecioConInteres.textContent = element.precioConInteres;
      tdValor24Cuotas.textContent = element.valor24Cuotas;
      tdValor36Cuotas.textContent = element.valor36Cuotas;

      tr.appendChild(tdVehiculo);
      tr.appendChild(tdCliente);
      tr.appendChild(tdPrecio);
      tr.appendChild(tdIva);
      tr.appendChild(tdPrecioContado);
      tr.appendChild(tdInteres);
      tr.appendChild(tdPrecioConInteres);
      tr.appendChild(tdValor24Cuotas);
      tr.appendChild(tdValor36Cuotas);

      tbody.appendChild(tr);

      let p = document.createElement("p");
      if (element.precio > masCaro) {
        p.textContent = `${element.vehiculo} $${element.precio}`;
        divMasCarosQue.appendChild(document.createElement("br"));
        divMasCarosQue.appendChild(p);
      }
    });

    if (divMasCarosQue.value == "") {
      let p = document.createElement("p");
      p.textContent = `No hay ningun vehiculo más caro que $${masCaro}`;
      divMasCarosQue.appendChild(p);
    }

    table.appendChild(thead);
    table.appendChild(tbody);
    divTabla.appendChild(table);
  }
}

document
  .getElementById("botonIngresar")
  .addEventListener("click", ingresarDatos);
document
  .getElementById("mostrarDeterminado")
  .addEventListener("click", mostrarDatos);
