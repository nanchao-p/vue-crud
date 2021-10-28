import axios from 'axios'
import Vue from 'vue'
import VueFlashMessage from 'vue-flash-message'
import 'vue-flash-message/dist/vue-flash-message.min.css'


Vue.use(VueFlashMessage, {
    messageOptoins: {
        timeout: 3000,
        pauseOnInteract: true
    }
})

const vm = new Vue();
const baseUrl = 'http://localhost:3000/tasks/'

const handleError = fn => (...params) =>
    fn(...params).catch(error => {
        vm.flash(`${error.response.status} : ${error.response.statusText}`, 'error')
    })

export const api = {
    createtask: handleError(async payload => {
        const res = await axios.post(baseUrl, payload)
        return res.data;
    }),
    gettasks: handleError(async () => {
        const res = await axios.get(baseUrl);
        return res.data;
    }),
    deletetask: handleError(async id => {
        const res = await axios.delete(baseUrl + id);
        return res.data;
    }),
    gettask: handleError(async id => {
        const res = await axios.get(baseUrl + id);
        return res.data;
    })
    
}