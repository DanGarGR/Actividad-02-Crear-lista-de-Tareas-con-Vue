const { createApp } = Vue;

createApp({
  data() {
    return {
      newTask: '',
      tasks: [
        { text: 'Realizar Tarea de frameworks', completed: false },
        { text: 'Realizar modelado 3D del salón', completed: false },
        { text: 'Entregar justificante en rectoría', completed: false }
      ]
    };
  },
  computed: {
    progress() {
      if (this.tasks.length === 0) return 0;
      return (this.completedTasks / this.tasks.length) * 100;
    },
    completedTasks() {
      return this.tasks.filter(task => task.completed).length;
    }
  },
  methods: {
    addTask() {
      if (this.newTask.trim() !== '') {
        this.tasks.push({ text: this.newTask, completed: false });
        this.newTask = '';
      }
    },
    toggleTask(index) {
      this.tasks[index].completed = !this.tasks[index].completed;
    },
    deleteTask(index) {
      this.tasks.splice(index, 1);
    }
  }
}).mount('#app');
