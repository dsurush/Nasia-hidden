'use strict'

const cardsEl = document.querySelector('[data-id="card"]');
const TabsEl = cardsEl.querySelector('[data-id="tabs"]');
const TabspanEl = cardsEl.querySelector('[data-id="tab-panes"]');

const NasiaEl = TabsEl.querySelector('[data-tab="nasia"]');
const AlifMobiEl = TabsEl.querySelector('[data-tab="alifmobi"]');

const NasiaTabEl = TabspanEl.querySelector('[data-tabpane="nasia"]');
const AlifmobiTabEl = TabspanEl.querySelector('[data-tabpane="alifmobi"]');

const tabWidget = {
    rootEl: cardsEl,
    NasiaEl,
    AlifMobiEl,
    NasiaTabEl,
    AlifmobiTabEl,
};
tabWidget.NasiaTabEl.hidden = false;
tabWidget.AlifmobiTabEl.hidden = true;

tabWidget.AlifMobiEl.onclick = () => {
    tabWidget.AlifmobiTabEl.hidden = true;
    tabWidget.NasiaTabEl.hidden = false;
};

tabWidget.NasiaEl.onclick = () => {
    tabWidget.AlifmobiTabEl.hidden = false;
    tabWidget.NasiaTabEl.hidden = true;
};
