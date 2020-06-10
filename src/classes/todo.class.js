export class Todo {

    static fromJson({ id, tarea, completado, creado }) {
        const temTodo = new Todo();
        temTodo.id = id;
        temTodo.tarea = tarea;
        temTodo.completado = completado;
        temTodo.creado = creado;
        return temTodo;
    }

    constructor(tarea) {
        this.tarea = tarea;
        this.id = new Date().getTime();
        this.completado = false;
        this.creado = new Date();
    }
}