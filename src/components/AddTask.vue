<template>
    <div class='input-wrapper'>
        <form @submit="addTask">
            <input type="text" placeholder="Enter Task">
        </form>
    </div>
</template>


<script lang='ts'>
import {Vue} from 'vue-class-component'


export default class AddTask extends Vue{
    task = String

    addTask(){
        this.$emit('submit-task',this.task)
    }
}
</script>


<style scoped>
.input-wrapper{
    margin-top: 5em;
}
input{
    height: 3em;
    width: 30em;
    padding: .5em;
}
</style>