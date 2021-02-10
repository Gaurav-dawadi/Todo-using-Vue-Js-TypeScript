<template>
    <form @submit.prevent='submitForm'>
        <input type="text" placeholder="Enter Your Name" v-model="name">
        <button>Add</button>
    </form>
</template>

<script>
export default {
    data(){
        return{
            name:''
        }
    },
    methods:{
        submitForm(){
            this.$emit('add-list', this.name)
            this.name = ''
        }
    } 
}
</script>

<style scoped>
input{
    margin: 10px;
}
</style>