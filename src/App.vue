<template>
  <h1>ToDo List</h1>
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
    }
  },
}
</script>