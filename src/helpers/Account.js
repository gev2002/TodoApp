import _ from "lodash";
import AsyncStorage from '@react-native-async-storage/async-storage';


class Account {
    static #token = null
    static getToken = async () => {
        if (_.isNull(this.#token)) {
            this.#token = await AsyncStorage.getItem('token');
        }
        return this.#token;
    };
    static setToken = async(token) => {
        this.#token = token;
        return AsyncStorage.setItem('token', token).catch(console.error);
    };
    static delete = async () => {
        await AsyncStorage.removeItem('token').catch(console.error)
        this.#token = null;
        return true;
    };
}

export default Account