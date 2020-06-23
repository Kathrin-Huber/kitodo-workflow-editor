import de from './de_DE';
import en from './en_EN';

export default function customTranslate(template, replacements) {
    replacements = replacements || {};
      
    var availableLanguages = ["de", "en"];
    
    // switch (availableLanguages.indexOf(language)) {    
    //     default: {
    //         template = de[template] || template;
    //         break; 
    //     }
    //     case 1: {
    //         template = en[template] || template;
    //         break;
    //     }
    // }
    
   var localizedString = de[template];
   
   if (localizedString == undefined) {
     console.log(template);
   }
   
   template = de[template] || template;
   
  
    
  return template.replace(/{([^}]+)}/g, function(_, key) {
    return replacements[key] || '{' + key + '}';
  });
}