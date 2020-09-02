import de from './de_DE';
import en from './en_EN';

export default function customTranslate(template, replacements) {
	replacements = replacements || {};

	var localizedString = de[template];
	if (localizedString == undefined || localizedString == ' ') {
		console.log("Keine deutsche Übersetzung für '" + template + "' vorhanden!");
	}

	var availableLanguages = ["de", "en"];

	switch (availableLanguages.indexOf(language)) {
		default: {
			template = de[template] || template;
			break;
		}
		case 1: {
			template = en[template] || template;
			break;
		}
	}

	return template.replace(/{([^}]+)}/g, function(_, key) {
		return replacements[key] || '{' + key + '}';
	});
}