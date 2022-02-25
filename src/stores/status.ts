import { writable } from 'svelte/store';

export const status = writable<'error' | 'loading' | 'success' | ''>('');
