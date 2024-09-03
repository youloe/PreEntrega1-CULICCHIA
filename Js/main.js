let cantidadAlumnos = parseInt(prompt("¿Cuántos alumnos vas a  ingresar?"));


let sumaNotas = 0;


for (let i = 1; i <= cantidadAlumnos; i++) {
 
  let nota = parseFloat(prompt("ingresa la calificacion del estudiante " + i + ":"));
  
  
  sumaNotas += nota;
}


let promedio = sumaNotas / cantidadAlumnos;


console.log("La nota final promedio de los estudiantes es: " + promedio.toFixed(2));
