<template>
    <div>
        {{task}}
        <button>Update</button>
        <button>Delete</button>
    </div>
</template>

<script lang="ts">

import {Vue, Options} from "vue-class-component"

@Options({
    props: {
        id: String,
        task: String
    }
})
export default class DisplayTask extends Vue{

}
</script>