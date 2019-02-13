import Components from './components';


declare global {
    interface Window { MM: any; }
}

window.MM = window.MM || {};
window.MM.components = new Components();
window.MM.components.findComponents();
