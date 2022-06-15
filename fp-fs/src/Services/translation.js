// https://dev.to/adrai/how-to-properly-internationalize-a-react-application-using-i18next-3hdb

import i18n from 'i18next';
import {
    initReactI18next
} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';



i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        lng: "en",
        fallbackLng: 'en',
        resources: {
            nl: {
                translation: {
                    Resultaten: 'resultaten',
                    Uploaden: 'uploaden'

                }
            },
            en: {
                translation: {
                    Resultaten: 'results',
                    Uploaden: 'upload'
                }
            },


            fr: {
                translation: {
                    Resultaten: 'résultats',
                    Uploaden: 'télécharger'
                }
            }
        }
    })

export default i18n;