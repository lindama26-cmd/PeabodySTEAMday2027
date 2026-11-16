'use strict';
document.documentElement.classList.add('js');
const menu = document.querySelector('.menu-toggle');
const navigation = document.getElementById('navigation');
if (menu && navigation) {
  menu.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') !== 'true';
    menu.setAttribute('aria-expanded', String(open));
    navigation.classList.toggle('open', open);
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
      menu.setAttribute('aria-expanded', 'false');
      navigation.classList.remove('open');
      menu.focus();
    }
  });
}
const ideaFilters = Array.from(document.querySelectorAll('[data-filter]'));
const ideas = Array.from(document.querySelectorAll('.idea-card'));
ideaFilters.forEach(button => button.addEventListener('click', () => {
  const category = button.dataset.filter;
  let count = 0;
  ideaFilters.forEach(item => {
    const active = item === button;
    item.classList.toggle('selected', active);
    item.setAttribute('aria-pressed', String(active));
  });
  ideas.forEach(card => {
    const visible = category === 'all' || card.dataset.category === category;
    card.hidden = !visible;
    if (visible) count++;
  });
  const status = document.getElementById('idea-count');
  if (status) status.textContent = `${count} ${count === 1 ? 'idea' : 'ideas'} to explore`;
}));
for (const group of document.querySelectorAll('.data-filter-group')) {
  const selects = Array.from(group.querySelectorAll('select[data-field]'));
  const records = Array.from(group.querySelectorAll('.filter-record'));
  const status = group.querySelector('.results-count');
  const empty = group.querySelector('.empty-state');
  function applyFilters() {
    let count = 0;
    for (const record of records) {
      const matches = selects.every(select => {
        const field = select.dataset.field;
        const value = select.value;
        const actual = record.dataset[field] || '';
        if (value === 'all') return true;
        if (field === 'grade' && group.dataset.group === 'schedule') return actual.split(' ').includes(value);
        return actual === value;
      });
      record.hidden = !matches;
      if (matches) count++;
    }
    const label = group.dataset.group === 'schedule' ? (count === 1 ? 'schedule entry' : 'schedule entries') : (count === 1 ? 'role group' : 'role groups');
    if (status) status.textContent = `${count} ${label}`;
    if (empty) empty.hidden = count > 0;
  }
  selects.forEach(select => select.addEventListener('change', applyFilters));
  const reset = group.querySelector('.reset-filters');
  if (reset) reset.addEventListener('click', () => {
    selects.forEach(select => { select.value = 'all'; });
    applyFilters();
  });
  applyFilters();
}
