<template>
  <div>Todo List</div>
  <AddTask @submit-task="taskAdd" />
  <DisplayTask 
    v-for="x in taskList"
    :key="x.id"
    :id="x.id"
    :task="x.task"
  ></DisplayTask>
</template>

<script lang="ts">

import { Options, Vue } from 'vue-class-component';
import AddTask from './components/AddTask.vue';
import DisplayTask from './components/DisplayTask.vue';

interface TaskList {
  id: string;
  task: string; 
}

@Options({
  components: {
    AddTask,
    DisplayTask,
  }, 
})
export default class App extends Vue {
  taskList: TaskList[] = []
  // taskList: Array<TaskList> = []
  // taskList: object[] = []
  // taskList: Array<object> = []

  taskAdd(value: string){
    const newTask = {
      id: new Date().toISOString(),
      task: value 
    }
    this.taskList.push(newTask)
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
