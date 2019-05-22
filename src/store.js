import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        editor: {
            name: 'Dynamic Editor',
            containers: {},
        },
    },
    getters: {
        containers: (state, getters) => {
            const containers = [];
            console.log('Container keys ', Object.keys(state.editor.containers));
            Object.keys(state.editor.containers).map(
                containerId => containers.push(state.editor.containers[containerId]),
            );
            return containers;
        },
    },
    mutations: {
        ADD_CONTAINER(state, container) {
            console.log('container ', container);
            // eslint-disable-next-line no-param-reassign
            state.editor.containers[container.getId()] = container;
        },
    },
    actions: {

    },
});
