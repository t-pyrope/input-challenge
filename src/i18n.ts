import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
        inputChallenge: 'Add inputs !',
        deleteAll: "delete all",
        addColorField: 'Add color field',
        addDateField: 'Add date field',
        addEmailField: 'Add email field',
        addNumberField: 'Add number field',
        addRangeField: 'Add range field',
        addTextField: "Add text field",
        text: 'text',
        number: 'number',
        color: 'color',
        date: 'date',
        email: 'email',
        range: 'range'
    },
  },
  ru: {
    translation: {
        inputChallenge: 'Добавь инпуты !',
        addColorField: 'Поле с цветом',
        addDateField: 'Поле с датой',
        addEmailField: 'Поле с имэйлом',
        addNumberField: 'Числовое поле',
        addRangeField: 'Поле с диапазоном',
        addTextField: "Текстовое поле",
        deleteAll: "удалить все",
        text: 'текст',
        number: 'число',
        color: 'цвет',
        date: 'дата',
        email: 'имэйл',
        range: 'диапазон'
    },
  },
  cs: {
    translation: {
        inputChallenge: 'Přidej inputy !',
        addColorField: 'Pole s barvou',
        addDateField: 'Pole s datem',
        addEmailField: 'Pole s emailem',
        addNumberField: 'Číselné pole',
        addRangeField: 'Pole se škálou',
        addTextField: "Textové pole",
        deleteAll: "smazat vše",
        text: 'text',
        number: 'číslo',
        color: 'barva',
        date: 'datum',
        email: 'email',
        range: 'škála'
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
