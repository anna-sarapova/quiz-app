import Vuex from 'vuex'
import { createStore } from 'vuex'

export const store = createStore({
    state() {
        return {
            user: undefined
        }
    },

    getters: {
        something() {

        }
    },

    actions: {
        register({commit}, data) {
            fetch('https://pure-caverns-82881.herokuapp.com/api/v54/users', {
                headers: {
                    'X-Access-Token': '266e46777f10157b3a8d16fc3a096eb5a30d9a3e85e1c0e875f80b4b3b413dc5',
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify({data})
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not OK');
                    }
                    return response.json()
                })
                .then(info => {
                    commit('registerUser', info)
                    console.log('Success:', info);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
    },

    mutations: {
        registerUser(state, data) {
            state.user = data
        }
    }
})