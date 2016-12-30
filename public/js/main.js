var app = new Vue({
    el: 'body',
    data: {
        nuevaTarea: null,
        editandoTarea: null,
        tareas: [{ titulo: 'Salir a corror', completado: false }, { titulo: 'Ir a la Farmacia', completado: false }]
    },

    methods: {
        agregarTarea: function (tarea) {
            this.tareas.unshift({
                titulo: tarea, completado: false
            });
            this.nuevaTarea = '';
        },

        eliminarTarea: function (indice) {
            this.tareas.splice(indice, 1);
        },

        editarTarea: function () {
            console.info(tarea);
        }
    }
});
//# sourceMappingURL=main.js.map
