import { defineStore } from 'pinia'
import debounce from 'lodash.debounce'
import { updateScore } from '@/api/app'

const baseLevelScore = 25
const debouncedUpdateScore = debounce(updateScore, 500)
// const debounced = debounce((score)=>{

// },500)

const levels = new Array(20)
	.fill(0)
	.map((_item, i) => baseLevelScore * Math.pow(2, i))

const levelScores = levels.map((_item, level) => {
	let sum = 0

	for (let [index, value] of levels.entries()) {
		if (index >= level) {
			return sum + value
		}
		sum += value
	}

	return sum
})

function computedLevelByScore(score) {
	for (let [index, value] of levelScores.entries()) {
		if (score <= value) {
			return {
				level: index,
				value: levels[index],
			}
		}
	}
}

export const useScoreStore = defineStore('score', {
	state: () => ({
		score: 0,
	}),
	getters: {
		level: state => computedLevelByScore(state.score),
		currentScore(state) {
			if (this.level.level === 0) {
				return state.score
			}
			return state.score - levelScores[this.level.level - 1]
		},
	},
	actions: {
		add(score = 1) {
			this.score += score
			debouncedUpdateScore(this.score)
		},
		setScore(score) {
			this.score = score
		},
	},
})
