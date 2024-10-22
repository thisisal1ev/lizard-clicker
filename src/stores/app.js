import { getOrCreateUser } from '@/api/app'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
	state: () => ({
		user: {},
		tasks: [],
	}),
	actions: {
		async init() {
			this.user = await getOrCreateUser()
		},
	},
})
