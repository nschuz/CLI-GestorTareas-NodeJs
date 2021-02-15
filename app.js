const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const { inquirerMenu , pausa , leerInput ,listadoTareasBorrar , confirmar , mostrarListadoChekList } = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/Tareas');


require('colors');
//const {mostrarMenu , pausa} = require('./helpers/mensajes');

console.clear();
//va ser asincrono
const main = async ()=>{

    let opt=''
    const tareas = new Tareas();
    const tareasDB = leerDB();
    if(tareasDB){
        //Establecer las tareas
        tareas.cargarTareasFromArray(tareasDB);
    }
    //await pausa();

     do {
         //await esperate hasta que tenga una resolucion 
         //mostar menu resolver mensaje

    opt = await inquirerMenu();
        //console.log({opt})

     /*    const tarea = new Tarea('Comprar comida');
        const tareas = new Tareas();
        tareas._listado[tarea.id]=tarea;
        console.log(tarea);
        console.log(tareas);
 */
        switch (opt) {
            case '1':
                const desc = await leerInput('Descripcion: ');
                tareas.crearTarea(desc);
                break;
            case '2' :
            tareas.listadoCompleto()    
            //console.log(tareas._listadoArr);
            break;

            case '3':
            tareas.listarTareasCompletadas();
            break;

            case '4':
            tareas.listarTareasNoCompeltadas();

            break;
            
            case '5':
               const ids= await mostrarListadoChekList(tareas._listadoArr);
                tareas.toggleCompletadas(ids);
    
                break;

            case '6':
                const id = await listadoTareasBorrar(tareas._listadoArr);
                if(id!=='0'){
                    const ok= await confirmar('Estas seguro?')
                    if(ok){
                        tareas.borraTarea(id);
                        console.log('Tarea Borrada'.rainbow)
                    }
                }
                
    
                break;

            default:
                break;
        }

        guardarDB(JSON.stringify(tareas._listadoArr));
        await pausa();

    } while (opt !== '0'); 

   // pausa();
}



main();