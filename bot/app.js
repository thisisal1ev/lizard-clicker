import { Markup, Telegraf } from 'telegraf'

const token = process.env.VUE_APP_TOKEN
const webAppUrl = process.env.VUE_APP_WEB_APP_URL

const bot = new Telegraf(token)

bot.command('start', ctx => {
	ctx.reply(
		'Hello! Press to start the Game!',
		Markup.inlineKeyboard([
			Markup.button.webApp('Open game', `${webAppUrl}?ref=${ctx.payload}`),
		])
	)
})

bot.launch()
