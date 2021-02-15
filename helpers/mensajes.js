const { resolve } = require('path');

require('colors');

//esta funcion va regresar una promesa
const mostrarMenu = ()=>{
   //El cuerpo de mi promesa
    return new Promise ((resolve)=>{

        console.clear();
console.log("==========================".green)
console.log("Selecciona una opcion".green)
console.log("==========================".green);

console.log(`${'1.'.green} Crear Tareas`);
console.log(`${'2.'.green} Listar Tareas`);
console.log(`${'3.'.green} Listar tarea completadas`);
console.log(`${'4.'.green} Listar tareas pendientes`);
console.log(`${'5.'.green} Complentar tareas(s)`);
console.log(`${'6.'.green} Borrar Tareas`);
console.log(`${'0.'.green} Salir \n`);

const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
readLine.question('Selecciona una opcion: ',(opt)=> {
readLine.close();
//ahora si podemos mandar el resolve
resolve(opt);
})
    });


}

const pausa= ()=>{
  return new Promise ((resolve) =>{
    const readLine = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    readLine.question(`\nPresione ${'ENTER'.blue} para continuar \n`,(opt)=> {
    readLine.close();
    resolve()
    })
  })
}

module.exports={
    mostrarMenu,
    pausa

}