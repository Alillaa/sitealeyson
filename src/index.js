// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // React 18 ve sonrası için client API
// import ReactDOM from 'react-dom'; // React 17 ve öncesi için

import './index.css'; // Opsiyonel: Eğer index.js'e özel global stilleriniz varsa
// Genellikle App.css yeterli olur ve App.js'de import edilir.
// Eğer bu dosya yoksa veya App.css'i tercih ediyorsanız bu satırı kaldırabilirsiniz.

import App from './App'; // Ana uygulama bileşenimiz
import reportWebVitals from './reportWebVitals'; // Performans ölçümü için (opsiyonel)

// React 18 ve sonrası için root oluşturma ve render etme
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);


reportWebVitals();
