import App from './App.vue'
import {createApp} from 'vue'
import AddTask from './components/AddTask.vue'
import DisplayTask from './components/DisplayTask.vue'


const app = createApp(App)

app.component('add-task', AddTask)
app.component('display-task', DisplayTask)

app.mount('#app')
