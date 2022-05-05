import EncryptedStorage from 'react-native-encrypted-storage';

/**
 * Loads something from storage and runs it thru JSON.parse.
 *
 * @param key The key to fetch.
 */
export const load = async (key) => {
    try {
        const getValue = await EncryptedStorage.getItem(key);
        console.log('Val',getValue)
        return JSON.parse(getValue);
    } catch {
        return null;
    }
}

/**
 * Saves an object to storage.
 *
 * @param key The key to fetch.
 * @param value The value to store.
 */
export const save = async (key, value) => {
    try {
        await EncryptedStorage.setItem(key, JSON.stringify(value));
        return true;
    } catch {
        return false;
    }
}


/**
 * Burn it all to the ground.
 */
export const clear = async () => {
    try {
        await EncryptedStorage.clear();
        return true;
    } catch {
        return false;
    }
}

export default {
    clear,
    load,
    save,
};
