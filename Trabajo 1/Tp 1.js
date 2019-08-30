//EJercicio 1
//var nombre=prompt("ingrese el nombre")
//var edad = prompt("ingrese la edad")
//document.write("La edad de: "+ nombre + " Es "+ edad);

//Ejercicio 2
 /*num1 = prompt ('introdusca el primer nuemero');
 num2 = prompt ('introdusca el segundo numero ');

 document.write("<br/>La suma es: " + (num1+num2));
 document.write("<br/>La resta es: "+ (num1 - num2));
 document.write("<br/>La multiplicacion es " + (num1 * num2));
 if (num2 != 0){
   document.write("<br/>La division es: "+ (num1/num2))
 }else{
   document.write("<br/>no se puede dividir por ")
 }*/

//EJercicio 5 tablas
function generar_tabla() {
    var fecha = new Date()
    myTable += "<tr><td style='width: 100px;text-align: lefth;'>" + fecha.getFullYear() + "</td>";
    myTable += "<td style='width: 100px;text-align: lefth;'>" + fecha.getYear() + "</td>";
    myTable += "<td style='width: 100px;text-align: lefth;'>" + fecha.getMonth() + "</td>";
    myTable += "<td style='width: 100px;text-align: lefth;'>" + fecha.getDate() + "</td>";
    myTable += "<td style='width: 100px;text-align: lefth;'>" + fecha.getHours() + "</td>";
    myTable += "<td style='width: 100px;text-align: lefth;'>" + fecha.getMinutes() + "</td>";
    myTable += "<td style='width: 100px;text-align: lefth;'>" + fecha.getSeconds() + "</td>";
    myTable += "<td style='width: 100px;text-align: lefth;'>" + fecha.getMilliseconds() + "</td>";
    myTable += "<td style='width: 100px;text-align: lefth;'>" + fecha.getTime() + "</td>";
    myTable += "</tr>";
    myTable += "</table>";
    document.getElementById('tablePrint').innerHTML = myTable;
}


function creartabla() {
    var arrayFecha = new Array()
    var fecha = new Date()
    arrayFecha.push(new Array(fecha.getFullYear(), fecha.getYear(), fecha.getMonth(), fecha.getDate(),
        fecha.getHours(), fecha.getMinutes(), fecha.getSeconds(), fecha.getMilliseconds(),
        fecha.getTime()));
    return arrayFecha;
}
function getCells(data, type) {
    return data.map(cell => `<${type}>${cell}</${type}>`).join('');
}
function createBody(data) {
    return data.map(row => `<tr>${getCells(row, 'td')}</tr>`).join('');
}
function createTable(data) {
    let cabeceras = ['getFullYear', 'getYear', 'getMonth', 'getDate', 'getHours', 'getMinutes', 'getSeconds', 'getMilliseconds', 'getTime'];
    return `
<table>
<thead>${getCells(cabeceras, 'th')}</thead>
<tbody>${createBody(data)}</tbody>
</table>
`;
}
document.body.insertAdjacentHTML('beforeend', createTable(creartabla()));
