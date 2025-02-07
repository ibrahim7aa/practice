import { createApp } from 'vue'; // Correct import for Vue
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'; // Main app component
import "./assets/tailwind.css";
import "./main.css"
import FoodItems from './components/FoodItems.vue'
import AnimalCollection from './components/AnimalCollection.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/animals', component: AnimalCollection },
        { path: '/food', component: FoodItems },
    ]
});
const app = createApp(App)

app.use(router);
app.component('food-items', FoodItems);
app.component('animal-collection', AnimalCollection);

app.mount('#app')


