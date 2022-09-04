import { createStore } from 'vuex'

// Create a new store instance.
export default createStore({
    state() {
        return {
            langIsSelected: false,
            selectedLang: 'EN',
            Languages: {
                EN: {
                    appTitle: 'Create Digital Business Card for free!',
                    scanCard: 'SCAN CARD',
                    addPerson: 'ADD PERSON',
                    addUrl: 'ADD URL',
                    addText: 'ADD TEXT',
                    tutorialButton: 'TUTORIAL',
                    startWriteButton: 'Start Write',
                    startScanButton: 'Scan Card',
                    scanAgainButton: 'Scan again',
                    scanResult: {
                        title: 'Some information about the card',
                        serialNumber: 'Serial number:',
                        data: 'Data:'
                    },
                    personWarningMessage: "You don't have to fill everything.",
                    inputName: 'Name',
                    inputPhone: 'Phone',
                    inputEmail: 'Email',
                    inputTitle :'Title',
                    inputWebsite: 'Website',
                    inputURL: 'URL',
                    inputText: 'Text Message',
                    tutorial: {
                        title: 'How do I convert my card to a digital business card?',
                        description: "First go to the ADD PERSON to. Enter the information you want to type. You don't have to fill them all. Then press the 'start write' button. Touch your card with NFC tag to your phone. Done!"
                    },
                    touchScreen: 'Touch the Card...'
                },
                TR: {
                    appTitle: 'Ücretsiz olarak dijital kartvizit oluşturun!',
                    scanCard: 'KART TARA',
                    addPerson: 'KİŞİ EKLE',
                    addUrl: 'LİNK EKLE',
                    addText: 'METİN EKLE',
                    tutorialButton: 'NASIL KULLANILIR?',
                    startWriteButton: 'İşlemi Başlat',
                    startScanButton: 'Kart Tara',
                    scanAgainButton: 'Tekrar Tara',
                    scanResult: {
                        title: 'Kart Hakkında Bazı Bilgiler',
                        serialNumber: 'Seri Numara:',
                        data: 'Veri:'
                    },
                    personWarningMessage: "Hepsini doldurmak zorunda değilsiniz.",
                    inputName: 'İsim',
                    inputPhone: 'Telefon',
                    inputEmail: 'Email',
                    inputTitle :'Başlık',
                    inputWebsite: 'Website',
                    inputURL: 'LİNK',
                    inputText: 'Metin',
                    tutorial: {
                        title: 'Kartımı nasıl dijital kartvizite dönüştürürüm?',
                        description: "Önce KİŞİ EKLE'ye gidin. Yazmak istediğiniz bilgileri girin. Hepsini doldurmak zorunda değilsin. Ardından 'yazmaya başla' düğmesine basın. NFC etiketli kartınızı telefonunuza dokundurun. Tamamlandı!"
                    },
                    touchScreen: 'Kartı Dokundurun...'
                }
            }
        }
    },
    mutations: {
        setLang(state, payload) {
            state.langIsSelected = true
            state.selectedLang = payload
        }
    },
    getters: {
        getText: (state) => (text) => {
            if (!text) return null
            if (text.includes('.')) {
                // Get all keys with array
                const keys = text.split('.')

                // Get first key and check.
                let condition = state.Languages[state.selectedLang][keys[0]]
                if (!condition) return null

                for (let i = 1; i < keys.length; i++) {
                    condition = condition[keys[i]]
                    if (!condition) return null
                    if (!condition[keys[i + 1]]) return condition
                }
            } else {
                return state.Languages[state.selectedLang][text]
            }
        }
    }
})