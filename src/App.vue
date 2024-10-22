<template>
	<main class="game" v-if="loaded">
		<div class="page">
			<RouterView />
		</div>
		<TheMenu />
	</main>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { RouterView } from 'vue-router'
import TheMenu from './components/TheMenu.vue'
import { useAppStore } from '@/stores/app'
import { useTelegram } from './services/telegram'

const app = useAppStore()
const loaded = ref(false)
const tg = useTelegram()

app.init().then(() => {
	loaded.value = true
})

onMounted(() => {
	tg.ready()

	tg.expand()
})
</script>
