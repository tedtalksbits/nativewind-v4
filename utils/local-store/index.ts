import * as SecureStore from 'expo-secure-store';
import { getRandomId } from '@/utils/random';

export class GenericStoreAPI<T> {
  private storeKey: string;

  constructor(key: string) {
    this.storeKey = key;
  }

  async getAll(): Promise<T[]> {
    const data = await SecureStore.getItemAsync(this.storeKey);
    return data ? JSON.parse(data) : [];
  }

  async getItem(id: string): Promise<T | undefined> {
    const items = await this.getAll();
    return items.find((item: any) => item.id === id);
  }

  async createItem(newItem: Partial<T>): Promise<T[]> {
    try {
      let items = await this.getAll();
      const updatedItems = [...items, newItem as T];
      await SecureStore.setItemAsync(
        this.storeKey,
        JSON.stringify(updatedItems)
      );
      return updatedItems;
    } catch (error) {
      console.error('Failed to create item:', error);
      throw error;
    }
  }

  async deleteItem(id: string): Promise<T[]> {
    const items = await this.getAll();
    const updatedItems = items.filter((item: any) => item.id !== id);
    await SecureStore.setItemAsync(this.storeKey, JSON.stringify(updatedItems));
    return updatedItems;
  }

  async deleteAll(): Promise<void> {
    await SecureStore.deleteItemAsync(this.storeKey);
  }

  async updateItem(update: Partial<T> & { id: string }): Promise<T[]> {
    const items = await this.getAll();
    const index = items.findIndex((item: any) => item.id === update.id);
    if (index === -1) return items;

    const updatedItem = { ...items[index], ...update };
    items[index] = updatedItem as T;
    await SecureStore.setItemAsync(this.storeKey, JSON.stringify(items));
    return items;
  }
}
