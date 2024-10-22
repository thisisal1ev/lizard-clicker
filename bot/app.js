import { Markup, Telegraf } from 'telegraf'

const token = env('TOKEN')
const webAppUrl = 'https://lizard-clicker-xi.vercel.app/'

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
