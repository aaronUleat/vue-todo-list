
// Initialize Firebase
var config = {
    apiKey: "AIzaSyD6yOomvtxEtSk_N2o9RcHnMtpZpdc6yhM",
    authDomain: "vueproject-a1163.firebaseapp.com",
    databaseURL: "https://vueproject-a1163.firebaseio.com",
    storageBucket: "vueproject-a1163.appspot.com",
    messagingSenderId: "51178992495"
};
firebase.initializeApp(config);
var db = firebase.database();

Vue.component('todo-list', {
    template: '#todo-template',
    data: function () {
        return {
            nuevaTarea: null,
            editandoTarea: null
        };
    },
    props: ['tareas'],
    methods: {
        agregarTarea: function (tarea) {

            db.ref('tareas/').push({
                titulo: tarea, completado: false
            });

            this.nuevaTarea = '';
        },

        eliminarTarea: function (tarea) {
            db.ref('tareas/' + tarea['.key']).remove();
        },

        editarTarea: function (tarea) {
            db.ref('tareas/' + tarea['.key']).update({
                titulo: tarea.titulo
            });
        },

        actualizarEstadoTarea: function (estado, tarea) {
            db.ref('tareas/' + tarea['.key']).update({
                completado: estado ? false : true
            });
        }
    }
});

var vm = new Vue({
    el: 'body',
    ready: function () {
        db.ref('tareas/').on('value', function (snapshot) {
            vm.tareas = [];
            var objeto = snapshot.val();
            for (var propiedad in objeto) {
                vm.tareas.unshift({
                    '.key': propiedad,
                    completado: objeto[propiedad].completado,
                    titulo: objeto[propiedad].titulo
                });
            }
        });
    },
    data: {
        nuevaTarea: null,
        editandoTarea: null,
        tareas: []

    }

});
//# sourceMappingURL=main.js.map
