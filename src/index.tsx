import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { IntlProvider } from "react-intl";
import { getLanguage } from "./helpers/useLanguage";
import ptBR from "./locales/pt-BR.json";
import en from"./locales/en.json";
import es from "./locales/es.json";


const messages = { 'en': en, 'pt-BR': ptBR, 'es': es };
const language  = getLanguage();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <IntlProvider locale={language} messages={messages[language]}>
    <App />
  </IntlProvider>
)