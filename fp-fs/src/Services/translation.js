// https://dev.to/adrai/how-to-properly-internationalize-a-react-application-using-i18next-3hdb

import i18n from 'i18next';
import {
    initReactI18next
} from 'react-i18next';



i18n
    .use(initReactI18next)
    .init({
        lng: navigator.language,
        fallbackLng: 'en-US',
        resources: {

            'en-US': {
                translation: {
                    Resultaten: 'Results',
                    Uploaden: 'Upload',
                    Stemming: 'Voting',
                    Genomineerden: 'Nominees',
                    Winnaars: 'Winners',
                    Alles: 'All',
                    searchformPlaceholder: 'Search by title, student, tag...'
                }
            },

            'nl': {
                translation: {
                    Resultaten: 'Resultaten',
                    Uploaden: 'Uploaden',
                    Stemming: 'Stemming',
                    Genomineerden: 'Genomineerden',
                    Winnaars: 'Winnaars',
                    Alles: 'Alles',
                    searchformPlaceholder: 'Zoek op titel, student, tag...'

                }
            },


            'fr': {
                translation: {
                    Resultaten: 'Résultats',
                    Uploaden: 'Télécharger',
                    Stemming: 'Voter',
                    Genomineerden: 'Nominés',
                    Winnaars: 'Gagnants',
                    Alles: 'Tout',
                    searchformPlaceholder: 'Recherche par titre, étudiant, tag...'
                }
            }
        }
    })

export default i18n;