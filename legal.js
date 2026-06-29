'use strict';

const LEGAL_THEME_KEY = 'stock-alert-theme';

function readSavedTheme() {
  try { return localStorage.getItem(LEGAL_THEME_KEY) || 'light'; } catch { return 'light'; }
}

function applyLegalTheme(theme) {
  const dark = theme === 'dark';
  document.body.classList.toggle('dark', dark);
  const button = document.querySelector('#themeButton');
  button.setAttribute('aria-pressed', String(dark));
  button.setAttribute('aria-label', dark ? 'ライトモードに切り替える' : 'ダークモードに切り替える');
  button.querySelector('.theme-icon').textContent = dark ? '☀' : '☾';
  button.querySelector('.theme-text').textContent = dark ? 'ライト' : 'ダーク';
}

document.querySelector('#themeButton').addEventListener('click', () => {
  const next = document.body.classList.contains('dark') ? 'light' : 'dark';
  try { localStorage.setItem(LEGAL_THEME_KEY, next); } catch { /* 保存できない場合も表示切替は続けます。 */ }
  applyLegalTheme(next);
});

applyLegalTheme(readSavedTheme());
