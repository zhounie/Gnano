import { createStore } from 'vuex'

import system from './modules/system';


export interface State {
    locale: string;
    collapse: boolean;
    menu: {path: string; name: string; icon: string}[]
}


const store = createStore<State>({
    modules: {
        system
    }
})


export default store;