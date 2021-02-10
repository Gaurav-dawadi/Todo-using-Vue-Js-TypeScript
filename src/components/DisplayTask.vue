<template>
    <div class="task-wrapper">
        <div class="main-task">{{task}}</div>
        <div class="button-wrapper">
            <button>Update</button>
            <button>Delete</button>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        task: String
    },
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