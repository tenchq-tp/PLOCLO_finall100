import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    en: {
        translation: {
            "login": "Login",
            "Insert Data": "Insert Data"
        }
    },
    ch: {
        translation: {
            "login": "登入",
            "Insert Data": "插入數據",
            "Edit Data": "編輯數據",
            "About": "關於"
            
        }
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
