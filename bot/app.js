import { Markup, Telegraf } from 'telegraf'

const token = '7821592967:AAF7uVBg-qj_xMwGXWn2v_qtOprbFzr_j1k'
const webAppUrl = 'https://lizard-clicker-pro-by-aliyev.web.app/'

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
