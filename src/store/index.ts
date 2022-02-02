import { createStore } from 'vuex'

import system from './modules/system';


export interface State {
    locale: string;
}


const store = createStore<State>({
    modules: {
        system
    }
})


export default store;