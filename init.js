/**
 * Auto Copyright
 * このファイルは QWEL Project の一部です。
 * Part of the QWEL Project © QWEL.DESIGN 2025
 * Licensed under GPL v3 – see https://qwel.design/
 */

class AutoCopyright {
  constructor(startYear, companyName, elem) {
    elem ||= document.querySelector('.footer__copyright');
    if (elem) elem.innerHTML = this.generate(startYear, companyName);
  }

  generate(startYear, companyName) {
    const currentYear = new Date().getFullYear();
    return `&copy; ${startYear} - ${currentYear} ${companyName}`;
  }
}

new AutoCopyright(2019, 'QWEL.DESIGN');



import BusinessCalendar from './js/businessCalendar.js';
new BusinessCalendar({
  startOnMon: true,
  url: 'https://tools.qwel.design/business-calendar/'}
);
