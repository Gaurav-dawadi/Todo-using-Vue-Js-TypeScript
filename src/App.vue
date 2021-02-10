<template>
  <div class="header-wrapper">
    <h1>ToDo List</h1>
  </div>
  <add-task @add-list='onAddTask'></add-task>
  <display-task
    v-for="x in taskList"
    :key='x.id'
    :task='x.task'
  ></display-task>
</template>

<script>
export default {
  data(){
    return{
      taskList:[]
    }
  },
  methods:{
    onAddTask(value){
      const newTask = {
        id: new Date().toISOString(),
        task: value
      }
      this.taskList.push(newTask)
      localStorage.setItem('todo-task', JSON.stringify(this.taskList))
    }
  },
  mounted(){
      if (localStorage.getItem('todo-task')){
          this.taskList = JSON.parse(localStorage.getItem('todo-task'));
      }
  }
}
</script>

<style>
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.header-wrapper{
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5em;
  background-color: darkcyan;
  color: white;
}
</style>