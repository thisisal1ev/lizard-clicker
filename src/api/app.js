import supabase from '@/services/supabase'
import { useTelegram } from '@/services/telegram'

const { user } = useTelegram()

const MY_ID = user?.id ?? 4252

export async function fetchTasks() {
	const { data } = await supabase.from('tasks').select('*')
	return data
}

export async function getOrCreateUser() {
	const potentialUser = await supabase
		.from('users')
		.select()
		.eq('telegram', MY_ID)

	if (potentialUser.data.length !== 0) {
		return potentialUser.data[0]
	}

	const newUser = {
		telegram: MY_ID,
		friends: {},
		tasks: {},
		score: 0,
	}

	await supabase.from('users').insert(newUser)
	return newUser
}

export async function updateScore() {
	await supabase.from('users').update({ score }).eq('telegram', MY_ID)
}
