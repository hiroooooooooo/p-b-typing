const { formDisableSelector } = require("@rails/ujs");

const textList = [
  'Hello World',
  'Good',
  'I love JavaScript',
  'This is MyApp',
  'Welcome'
];

const rnd = Math.floor(Math.random() * textList.length);

// subject=件名
const subject = document.getElementById('test');
subject.textContent = textList[rnd];

// 初期化処理
// init=初期化
function init() {
  const rnd = Math.floor(Math.random() * textList.length);

  subject.textContent = textList[rnd];
  // subject.textContent = '';
  form.input.value = '';
  form.input.focus();
}

let count = 0;
// let state = true;

const form = document.forms.typing;
if (form.input.value === subject.textContent) {
  count++;

}