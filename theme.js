// FinanceIQ — Global Theme Manager
// Include this in <head> of every page. Runs instantly to prevent flash.

(function () {
  const t = localStorage.getItem('fiq-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', t);
})();

document.addEventListener('DOMContentLoaded', function () {
  const t = localStorage.getItem('fiq-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', t);

  document.addEventListener('click', function (e) {
    if (!e.target.closest('.theme-toggle')) return;
    const cur = document.documentElement.getAttribute('data-theme');
    const next = cur === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('fiq-theme', next);
  });
});
