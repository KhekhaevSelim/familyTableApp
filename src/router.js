import {createRouter, createWebHashHistory} from "vue-router";
import AddForm from "./components/AddForm.vue";
import PreviewComponent from "./components/PreviewComponent.vue";

export default createRouter({
    history : createWebHashHistory(),
    routes : [
        { path: '/addForm', component: AddForm, alias : "/" },
        { path: '/preview', component: PreviewComponent },
    ]
})