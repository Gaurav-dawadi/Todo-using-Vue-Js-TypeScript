<template>
  <div>Todo List</div>
  <AddTask @submit-task="taskAdd" />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import AddTask from './components/AddTask.vue'

@Options({
  components:{
    AddTask,
  },
})
export default class App extends Vue{
  taskList = Array 

  // taskList: {id: string, task: string}[]

  taskAdd(value){
    const newTask = {
      id: new Date().toISOString(),
      task: value as String
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
