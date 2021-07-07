const game = () => {
  // ページを限定する
  if (document.getElementById('text-abc')) {

    const ready = document.getElementById("ready");
    const start = document.getElementById("start");
    const end = document.getElementById("end");
    const target = document.getElementById('text-abc');


    const playWord = [
      'こんにちは',
      'はじめまして',
      'ピービータイピングといいます',
      'よろしくおねがいします',
      'タイピングのれんしゅう',
      'がんばってください',
      'おうえんしています',
      'たのしみながら',
      'レベルアップしてください'
    ];

    const playList = [

    ];

    
    const textList = [
      'Hello World',
      'Hello Hello',
      'How are you?',
      'This is my App'
    ];
    let checkTexts = [];

    createText();

    function createText() {
      console.log("createText確認");
      
      // 乱数の作成
      const rnd = Math.floor(Math.random() * textList.length);
      // 前の文字列が残ってしまうので、空文字を入れてリセット。初期化？
      target.textContent = '';

      // splitメソッドで文字列を分解
      // mapメソッドを使うことにより、1文字ずつに対して処理を実行できる
      // valueに分割された1文字1文字が入る
      checkTexts = textList[rnd].split('').map(function(value) {
      // spanタグを作成
      let span = document.createElement('span');
      // 分割されたvalueを当てる
      span.textContent = value;
      target.appendChild(span);

      // このreturnによって、checkTextsの配列に格納
        return span;
      });
    }

    // 正解数のカウント用
    let count = 0;

    document.addEventListener('keydown', (e) => {
      console.log(`押したキーは「${e.key}」です`);
      if ( e.key === " " ) {
        console.log("if文内");
        ready.style.visibility = "hidden";
        start.style.visibility = "visible";
      }
    });

    // keydownを使うと、文字を入力されたらイベント発火
    document.addEventListener('keydown', keyDown);
    // 入力されたキーはeに格納される
    function keyDown(e) {
      console.log("keyDown確認");
      // console.log(e.key);
      // if(e.key === checkTexts[0]) {
      if(e.key === checkTexts[0].textContent) {
        count++;
      // console.log('正解');
        checkTexts[0].className = 'add-color';
      // shiftメソッドで次々、順番に色を変える
      // 配列の0番目を消す
        checkTexts.shift();

        if(!checkTexts.length) createText();
      }
    }
  }
}

window.addEventListener("load", game);