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
                    searchformPlaceholder: 'Search by title, student, tag...',
                    WebEnApp: 'Web and App',
                    SmartTechnologies: 'Smart Technologies',
                    Motion: 'Motion',
                    ExtendedReality: 'Extended Reality'
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
                    searchformPlaceholder: 'Zoek op titel, student, tag...',
                    WebEnApp: 'Web en App',
                    SmartTechnologies: 'Smart Technologies',
                    Motion: 'Motion',
                    ExtendedReality: 'Extended Reality'

                }
            },


            'fr': {
                translation: {
                    Resultaten: 'Résultats',
                    Uploaden: 'Télécharger',
                    Stemming: 'Votez',
                    Genomineerden: 'Nominés',
                    Winnaars: 'Gagnants',
                    Alles: 'Tout',
                    searchformPlaceholder: 'Recherche par titre, étudiant, tag...',
                    WebEnApp: 'Web et Application',
                    SmartTechnologies: 'Smart Technologies',
                    Motion: 'Motion',
                    ExtendedReality: 'Extended Reality'
                }
            },

            'de': {
                translation: {
                    Resultaten: 'Ergebnisse',
                    Uploaden: 'hochladen',
                    Stemming: 'Abstimmung',
                    Genomineerden: 'nominiert',
                    Winnaars: 'Gewinner',
                    Alles: 'alles',
                    searchformPlaceholder: 'Suche nach Titeln, Schülern, Tags...',
                    WebEnApp: 'Web und App',
                    SmartTechnologies: 'Smart Technologies',
                    Motion: 'Motion',
                    ExtendedReality: 'Extended Reality'
                }

            }

        }
    })

export default i18n;