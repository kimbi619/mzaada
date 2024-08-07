import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

import translationEN from './assets/locales/en/en.json'
import translationFR from './assets/locales/fr/fr.json'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom'
import ScrollToTop from './addons/ScrollToTop';

const root = ReactDOM.createRoot(document.getElementById('root'));
export const tabTitle = (title) => {
  return (document.title = title)
}
const resources = {
  en: {
    translation: translationEN
  },
  fr: {
    translation: translationFR
  },
};


i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['en', 'fr'],
    detection: {
      order: ['cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
      caches: ['cookie'],
    },
    resources,
    fallbackLng: "fr",
    debug: true,
    // backend: {
    //   loadPath: '/assets/locales/{{lng}}/translation.json',
    // },
    react: { useSuspense: false },
});

root.render(
  <React.StrictMode>
    <Router>
      <ScrollToTop />
      <App />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
