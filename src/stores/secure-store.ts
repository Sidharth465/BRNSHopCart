import EncryptedStorage from 'react-native-encrypted-storage';

export const zustandEncryptedStorage = {
  getItem: async (name: string) => {
    const value = await EncryptedStorage.getItem(name);
    return value ? JSON.parse(value) : null;
  },
  setItem: async (name: string, value: any) => {
    await EncryptedStorage.setItem(name, JSON.stringify(value));
  },
  removeItem: async (name: string) => {
    await EncryptedStorage.removeItem(name);
  },
};
