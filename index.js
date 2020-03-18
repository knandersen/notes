import data from './RunningNotes.md';
import styles from './index.css';

let style = document.createElement('style');
style.innerHTML = styles;

let root = document.getElementById("root");

root.innerHTML = data;
root.appendChild(style);
