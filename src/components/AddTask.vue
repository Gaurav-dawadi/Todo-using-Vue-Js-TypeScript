<template>
    <div class='input-wrapper'>
        <form @submit.prevent="addTask">
            <input type="text" placeholder="Enter Task" v-model="task">
        </form>
    </div>
</template>

<script lang='ts'>
import {Vue, Options} from 'vue-class-component'

@Options({
    emits: ['submit-task']
})
export default class AddTask extends Vue{
    task = ''

    //This function doesnot return anything. So used void
    addTask(): void{
        this.$emit('submit-task', this.task)
        this.task = ''
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