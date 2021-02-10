<template>
    <div>
        <div class="main-task">{{task}}</div>
        <div class="main-button">
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
div{
    margin: 10px;
    display: flex;
}
.main-task{
    margin: 1em;
}
.main-button{
    margin: 1em;
}
button{
    margin-left: .5em;
}
</style>