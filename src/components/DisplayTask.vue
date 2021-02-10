<template>
    <div class="task-wrapper">
        <div class="main-task">{{task}}</div>
        <div class="button-wrapper">
            <button>Update</button>
            <button @click="removeItem">Delete</button>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        id:String,
        task: String
    },
    methods:{
        removeItem(){
            this.$emit('remove-item', this.id)
        }
    }
}
</script>

<style scoped>
.task-wrapper{
    display: flex;
    align-items: flex-start;
    justify-content: center;
    margin-bottom: 2em;
}
.main-task{
    margin-right: 3em;
}
.button-wrapper button{
    margin-right: 1em;
}
</style>