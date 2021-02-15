const Tarea = require("./tarea");
require('colors');

class Tareas{

    _listado= {};

    get _listadoArr(){
        const listado =[]
        Object.keys(this._listado).forEach(key => {
            const tarea=this._listado[key];
            listado.push(tarea);
        })
        return listado;
    }

    constructor(){
        this._listado={};
    }
   
    borraTarea (id = ''){
    
    if(this._listado[id]){
        delete this._listado[id];
    }
    }

    cargarTareasFromArray (tareas =[]){
        tareas.forEach(tarea=>{
        this._listado[tarea.id]=tarea;
        })

    }

    crearTarea (desc =''){
        const tarea = new Tarea(desc);
        this._listado[tarea.id]=tarea;
    }
    
    
    listadoCompleto(){
        let i=1;
        this._listadoArr.forEach(({desc, completadoEn})=>{
            if(completadoEn){
                console.log(`${i++}. ${desc} ${'completada'.green}`)
            }else{
         console.log(`${i++}. ${desc} ${'sin completar'.red}`)     
            }
        })
        
    }

    listarTareasCompletadas(){
        let i=1;
        this._listadoArr.forEach(({desc, completadoEn})=>{
            if(completadoEn){
                console.log(`${i++}. ${desc} ${'completada'.green}`)
            }
        })

    }
    listarTareasNoCompeltadas(){
        let i=1;
        this._listadoArr.forEach(({desc, completadoEn})=>{
            if(completadoEn==null){
                console.log(`${i++}. ${desc} ${'No completada'.red}`)
            }
        })
    }

    toggleCompletadas(ids= []){
        ids.forEach(id=>{
            const tarea= this._listado[id];
            if(!tarea.completadoEn){
                //si esta en null
                tarea.completadoEn= new Date().toISOString();
            }
        });

     this._listadoArr.forEach(tarea=>{
        if(!ids.includes(tarea.id)){
            const tarea= this._listado(id);
            tarea.completadoEn=null;
        }
        })

    }

}

module.exports= Tareas;