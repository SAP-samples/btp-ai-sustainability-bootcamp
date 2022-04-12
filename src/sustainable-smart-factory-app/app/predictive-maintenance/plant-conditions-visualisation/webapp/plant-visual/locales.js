document.loc_german = {
	months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
	monthsShort: "Jan._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
	weekdays: "Sonntag_Montag_Dienstag_Mattwoch_Donnerstag_Freitag_Samstag".split("_"),
	weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
	weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
	longDateFormat: {
		LT: "HH:mm",
		LTS: "HH:mm:ss",
		L: "DD.MM.YYYY",
		LL: "D. MMMM YYYY",
		LLL: "D. MMMM YYYY HH:mm",
		LLLL: "dddd, D. MMMM YYYY HH:mm"
	},
	calendar: {
		sameDay: "[heute um] LT [Uhr]",
		sameElse: "L",
		nextDay: "[morgen um] LT [Uhr]",
		nextWeek: "dddd [um] LT [Uhr]",
		lastDay: "[gestern um] LT [Uhr]",
		lastWeek: "[letzten] dddd [um] LT [Uhr]"
	},
	relativeTime: {
		future: "in %s",
		past: "vor %s",
		s: "ein paar Sekunden",
		m: "%d", //t,
		mm: "%d Minuten",
		h: "%d", //t,
		hh: "%d Stunden",
		d: "%d", //t,
		dd: "%d", //t,
		M: "%d", //t,
		MM: "%d", //t,
		y: "%d", //t,
		yy: "%d" //t
	},
	ordinalParse: /\d{1,2}\./,
	ordinal: "%d.",
	week: {
		dow: 1,
		doy: 4
	}
};

document.loc_port = {
				months: "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),
				monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
				weekdays: "Domingo_Segunda-Feira_Terça-Feira_Quarta-Feira_Quinta-Feira_Sexta-Feira_Sábado".split("_"),
				weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
				weekdaysMin: "Dom_2ª_3ª_4ª_5ª_6ª_Sáb".split("_"),
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "DD/MM/"/*YYYY"*/,
					LL: "D [de] MMMM [de] "/*YYYY"*/,
					LLL: "D [de] MMMM [de] "/*YYYY [às] HH:mm"*/,
					LLLL: "dddd, D [de] MMMM [de] "/*YYYY [às] HH:mm"*/
				},
				calendar: {
					sameDay: "[Hoje às] LT",
					nextDay: "[Amanhã às] LT",
					nextWeek: "dddd [às] LT",
					lastDay: "[Ontem às] LT",
					lastWeek: "[Última] dddd [às] LT" /*function() {
						return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
					}*/,
					sameElse: "L"
				},
				relativeTime: {
					future: "em %s",
					past: "%s atrás",
					s: "poucos segundos",
					m: "um minuto",
					mm: "%d minutos",
					h: "uma hora",
					hh: "%d horas",
					d: "um dia",
					dd: "%d dias",
					M: "um mês",
					MM: "%d meses",
					y: "um ano",
					yy: "%d anos"
				},
				ordinalParse: /\d{1,2}º/,
				ordinal: "%dº"
			};