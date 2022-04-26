const app = new Vue({

    el: '#app',
    data: {
        title: "GYM with Vue",
        tasks: [],
        newTask: ''
    },
    methods: {
        updateLS(){
            localStorage.setItem('gym-local', JSON.stringify(this.tasks));
        },

        addTask(){
            this.tasks.push({
                name: this.newTask,
                done: false
            })
            this.newTask = '';
            this.updateLS();
        },

        taskDone(index){
            this.tasks[index].done = !this.tasks[index].done; 
            this.updateLS();
        },

        deleteTask(index){
            this.tasks.splice(index, 1);
            this.updateLS();
        }
    },

    created(){
        let dataDB = JSON.parse(localStorage.getItem('gym-local'));

        if (dataDB === null){
            this.tasks = [];
        } else {
            this.tasks = dataDB;
        }
    } 

})