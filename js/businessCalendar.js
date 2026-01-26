/**
 * Business Calendar
 * © 2026 QWEL.DESIGN (https://qwel.design)
 * Released under the MIT License.
 * See LICENSE file for details.
 */

import Calendar from './calendar.js';

export default class BusinessCalendar extends Calendar {
  async makeCalendar(year, month) {
    super.makeCalendar(year, month);

    this.options.url ||= `${location.protocol}//${location.hostname}/`;
    this.options.delay ||= 0;
    const url = this.options.url;

    // 過去のデータをクリーン
    const today = new Date();
    let date = today.setDate(today.getDate() + this.options.delay);
    date = new Date(date).toISOString().split('T')[0];
    const postData = new FormData;
    postData.set('date', date);
    fetch(`${url}php/api.php?method=delete`, {
      method: 'POST',
      body: postData
    });

    // データを取得して、状態値を反映
    const res = await fetch(`${url}php/api.php?method=fetch&year=${year}&month=${month + 1}`);
    const data = await res.json();
    this._setStatus(data);
  }

  _handleEvents() {
    super._handleEvents();

    // モードの選択受付
    const mode = document.querySelector('.calendar__mode');
    if (!mode) return;
    mode.addEventListener('change', () => {
      this._elem.classList.toggle('is-editMode');
    });

    // セルのデータ操作受付
    this._body.addEventListener('click', (event) => this._cellClickHandler(event));
  }

  _setStatus(data) {
    const elems = this._body.querySelectorAll('[data-date]');
    elems.forEach((td) => {
      const date = td.dataset.date;
      const week = td.dataset.week;

      // 予約開始日
      const today = new Date();
      const startDate = today.setDate(today.getDate() + this.options.delay);

      // 週のデフォルト値 (予約開始日以前は)
      // startDdate以前は0, 以降、土日が1, それ以外は2
      let state = (new Date(date) < startDate) ? 0 : (week == 5 || week == 6) ? 1 : 2;

      // データがあれば、状態値を上書き
      if (new Date(date) > startDate) {
        data.forEach((dt) => {
          if (dt.date == date) state = dt.state;
        });
      }

      td.dataset.state = state;
    });
  }

  _cellClickHandler(event) {
    // 編集モード時のみ受付
    if (!(this._elem.classList.contains('is-editMode'))) return;

    const target = event.target;
    const date = target.dataset.date;

    // 予約開始日以前は受付しない
    const today = new Date();
    const startDate = today.setDate(today.getDate() + this.options.delay);
    if (new Date(date) < startDate) return;
    
    // 状態値を更新
    let state = target.dataset.state;
    state = (state + 1) % 3;
    target.dataset.state = state;

    // データの更新をPUT
    const url = this.options.url;

    if (date) {
      const postData = new FormData;
      postData.set('date', date);
      postData.set('state', state);

      fetch(`${url}php/api.php?method=insert`, {
        method: 'POST',
        body: postData
      });
    }
  }
}
