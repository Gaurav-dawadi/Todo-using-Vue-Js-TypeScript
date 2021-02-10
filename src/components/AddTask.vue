<template>
    <div class="form-wrapper">
        <form @submit.prevent='submitForm'>
            <input type="text" placeholder="Enter Task" v-model="name">
        </form>
    </div>
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
.form-wrapper{
    margin-top: 5em;
    margin-bottom: 3em;
}
form{
    display: flex;
    align-items: center;
    justify-content: center;
}
input{
    height: 3em;
    width: 30em;
}
button{
    background-color: teal;
    color: aliceblue;
    width: 7em;
    height: 3em;
    margin-left: 2em;
}
</style>