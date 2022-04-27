import Vuex from 'vuex'
import { createStore } from 'vuex'

export const store = createStore({
    state() {
        return {
            user: undefined
        }
    },

    actions: {
        register({commit}, data) {
            fetch('https://pure-caverns-82881.herokuapp.com/api/v54/users', {
                headers: {
                    'X-Access-Token': '3e7c3a2d3116eb08ad9e1dfd34fb548fd3796a8987d72a624b7e879cc40a7966',
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