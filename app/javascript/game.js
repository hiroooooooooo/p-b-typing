const game = () => {
  // ページを限定する
  if (document.getElementById('target')) {

    const target = document.getElementById('target');
    const ready = document.getElementById("ready");
    const start = document.getElementById("start");
    const result = document.getElementById("result");
    const replay = document.getElementById('replay');
    const sound = document.getElementById('sound');
    const countDown = document.getElementById('count-down');
    // 効果音
    const p = document.getElementById('p');
    const b = document.getElementById('b');
    // 効果音のオンオフ
    const on = document.getElementById('on');
    const off = document.getElementById('off');
    const genre = document.getElementById("genre").textContent
    console.log("genre="+genre);
    let hiragana = document.getElementById("hiragana");
    // 関数内で使用
    let checkTexts = [];
    // お試しプレイの配列用
    let num = 0;
    // カントダウンのオンオフ用
    let countOn = true;
    let soundOn = true;

    const otameshiKana = [
      'こんにちは',
      'はじめまして',
      'ピービータイピングといいます',
      'よろしくおねがいします',
      'タイピングのれんしゅう',
      'がんばってください',
      'おうえんしています',
      'すこしずつでいいので',
      'おぼえていきましょう',
      'おためしプレイありがとう'
    ];

    const otameshiTarget = [
      // 'PAPABUBURE',
      'KONNNITIWA',
      'HAJIMEMASITE',
      'PI-BI-TAIPINNGUTOIIMASU',
      'YOROSIKUONEGAISIMASU',
      'TAIPINNGUNORENNSYUU',
      'GANNBATTEKUDASAI',
      'OUENNSITEIMASU',
      'SUKOSIZUTUDEIINODE',
      'OBOETEIKIMASYOU',
      'OTAMESIPUREIARIGATOU'
    ];

    
    const textList = [
      'Hello World',
      'Hello Hello',
      'How are you?',
      'This is my App'
    ];
    
    // カウントダウン関数
    function countTimer(){
      let time = 2; 
      ready.style.visibility ="hidden";
      countDown.style.visibility = "visible";
      let countStart = setInterval(function(){
        countDown.innerHTML = time;
        time--;
        // console.log(time);
        if(time < 0){
          clearInterval(countStart);
          countDown.style.visibility = "hidden";
          start.style.visibility = "visible";
        }},1000);
    }

    // 文字入力の検知用関数
    function keyDown(e) {
      if ( e.key === " " ) {
        countTimer();
      }
      // 小文字でも入力可能にする
      let komoji = checkTexts[0].textContent.toLowerCase();
      if(e.key === checkTexts[0].textContent || e.key === komoji) {
        checkTexts[0].className = 'add-color';
        checkTexts.shift();
        if(!checkTexts.length) createText();
      }
    }

    // genre=otameshiの場合
    if ( genre === "otameshi" ) {

      createTextOtameshi();
      
      function createTextOtameshi() {
        if ( num === 10 ) {
          start.style.visibility = "hidden";
          sound.style.visibility = "hidden";
          result.style.visibility = "visible";
          replay.style.visibility = "visible";
          return;
        }
        hiragana.textContent = otameshiKana[num];
        target.textContent = '';
        checkTexts = otameshiTarget[num].split('').map(function(value) {
          let span = document.createElement('span');
          span.textContent = value;
          target.appendChild(span);
          return span;
        });
        num++;
      }

      document.addEventListener('keydown', (e) => {
        // キャンセル可能な処理か確認
        // console.log(e.cancelable);
        e.preventDefault();
        
        if ( e.key === "Escape") {
          location.href = "/"
        }

        if ( e.key === " " ) {
          if (countOn) {
            countTimer();
            countOn = false;
          }
        }
        let komoji = checkTexts[0].textContent.toLowerCase();
        if(e.key === checkTexts[0].textContent || e.key === komoji) {
          if (soundOn) {
            if (e.key === "p" || e.key === "P") {
              p.currentTime = 0;
              p.play();
            }
            if (e.key === "b" || e.key === "B") {
              b.currentTime = 0;
              b.play();
            }
          }
          checkTexts[0].className = 'add-color';
          checkTexts.shift();
          if(!checkTexts.length) createTextOtameshi();
        }
      });

      on.addEventListener('click', () => {
        soundOn = true;
        on.blur();
        on.style.color = "white";
        off.style.color = "black";
        on.style.background = "gray";
        off.style.background = "white";
      });
      off.addEventListener('click', () => {
        soundOn = false;
        off.blur();
        off.style.color = "white";
        on.style.color = "black";
        off.style.background = "gray";
        on.style.background = "white";
      });
    }

    // createText();

    // function createText() {
    //   console.log("createTextOtameshi");
      
    //   // 乱数の作成
    //   const rnd = Math.floor(Math.random() * textList.length);
    //   // 前の文字列が残ってしまうので、空文字を入れてリセット。初期化？
    //   target.textContent = '';

    //   // splitメソッドで文字列を分解
    //   // mapメソッドを使うことにより、1文字ずつに対して処理を実行できる
    //   // valueに分割された1文字1文字が入る
    //   checkTexts = textList[rnd].split('').map(function(value) {
    //   // spanタグを作成
    //   let span = document.createElement('span');
    //   // 分割されたvalueを当てる
    //   span.textContent = value;
    //   target.appendChild(span);

    //   // このreturnによって、checkTextsの配列に格納
    //     return span;
    //   });
    // }

    

    // document.addEventListener('keydown', (e) => {
    // // 別の書き方の例
    // // document.addEventListener('keydown', keyDown);
    // // function keyDown(e) {
    //   if ( e.key === " " ) {
    //     ready.style.visibility = "hidden";
    //     start.style.visibility = "visible";
    //   }

    //   // 小文字でも入力可能にする   
    //   let komoji = checkTexts[0].textContent.toLowerCase();

    //   if(e.key === checkTexts[0].textContent || e.key === komoji) {
    //     checkTexts[0].className = 'add-color';
    //     checkTexts.shift();
    //     if(!checkTexts.length) createText();
    //   }
    // });

  }
}

window.addEventListener("load", game);