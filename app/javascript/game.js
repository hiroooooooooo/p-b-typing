const startApp = () => {
  let gameData = null;
  // データ作成関数
  function createGameData() {
    const XHR = new XMLHttpRequest();
    XHR.open("POST", "/games", true);
    XHR.setRequestHeader('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
    XHR.responseType = "json";
    XHR.send();
    XHR.onload = () => {
      if (XHR.readyState === 4) {
        if (XHR.status === 200 || XHR.status === 204) {
          gameData = XHR.response.game;
        } else {
          alert(`Error ${XHR.status}: ${XHR.statusText}`);
          return null;
        }
      }
    }
  }
  createGameData();

  // ページを限定する
  if (document.getElementById('target')) {

    const target = document.getElementById('target');
    const ready = document.getElementById("ready");
    const start = document.getElementById("start");
    const finish = document.getElementById("finish");
    const replay = document.getElementById('replay');
    const sound = document.getElementById('sound');
    const countTime = document.getElementById('count-time');
    const p = document.getElementById('p');
    const b = document.getElementById('b');
    const soundOn = document.getElementById('sound-on');
    const soundOff = document.getElementById('sound-off');
    const genre = document.getElementById("genre").textContent
    console.log("genre="+genre);
    const finishInfo = document.getElementById("finish-info");
    let hiragana = document.getElementById("hiragana");
    let countState = true;
    let genreKana = [];
    let genreTarget = [];
    // 関数内で使用
    let checkTexts = [];
    // カウント用
    let num = 0;
    // 入力文字数
    let charNum = 0;
    let levelUp = false;
    let gameStart = false;
    
    // お試しプレイ
    const trialKana = [
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
    const trialTarget = [
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

    // ポケモン
    const pokemonKana = [
      "フシギダネ","フシギソウ","フシギバナ","ヒトカゲ","リザード",
      "リザードン","ゼニガメ","カメール","カメックス","キャタピー",
      "トランセル","バタフリー","ビードル","コクーン","スピアー",
      "ポッポ","ピジョン","ピジョット","コラッタ","ラッタ",
      "オニスズメ","オニドリル","アーボ","アーボック","ピカチュウ",
      "ライチュウ","サンド","サンドパン","ニドランめす","ニドリーナ",
      "ニドクイン","ニドランおす","ニドリーノ","ニドキング","ピッピ",
      "ピクシー","ロコン","キュウコン","プリン","プクリン",
      "ズバット","ゴルバット","ナゾノクサ","クサイハナ","ラフレシア",
      "パラス","パラセクト","コンパン","モルフォン","ディグダ",
      "ダグトリオ","ニャース","ペルシアン","コダック","ゴルダック",
      "マンキー","オコリザル","ガーディ","ウインディ","ニョロモ",
      "ニョロゾ","ニョロボン","ケーシィ","ユンゲラー","フーディン",
      "ワンリキー","ゴーリキー","カイリキー","マダツボミ","ウツドン",
      "ウツボット","メノクラゲ","ドククラゲ","イシツブテ","ゴローン",
      "ゴローニャ","ポニータ","ギャロップ","ヤドン","ヤドラン",
      "コイル","レアコイル","カモネギ","ドードー","ドードリオ",
      "パウワウ","ジュゴン","ベトベター","ベトベトン","シェルダー",
      "パルシェン","ゴース","ゴースト","ゲンガー","イワーク",
      "スリープ","スリーパー","クラブ","キングラー","ビリリダマ",
      "マルマイン","タマタマ","ナッシー","カラカラ","ガラガラ",
      "サワムラー","エビワラー","ベロリンガ","ドガース","マタドガス",
      "サイホーン","サイドン","ラッキー","モンジャラ","ガルーラ",
      "タッツー","シードラ","トサキント","アズマオウ","ヒトデマン",
      "スターミー","バリヤード","ストライク","ルージュラ","エレブー",
      "ブーバー","カイロス","ケンタロス","コイキング","ギャラドス",
      "ラプラス","メタモン","イーブイ","シャワーズ","サンダース",
      "ブースター","ポリゴン","オムナイト","オムスター","カブト",
      "カブトプス","プテラ","カビゴン","フリーザー","サンダー",
      "ファイヤー","ミニリュウ","ハクリュー","カイリュー","ミュウツー",
      "ミュウ"
    ];
    const pokemonTarget = [
      "HUSIGIDANE","HUSIGISOU","HUSIGIBANA","HITOKAGE","RIZA-DO",
      "RIZA-DONN","ZENIGAME","KAME-RU","KAMEKKUSU","KYATAPI-",
      "TORANNSERU","BATAHURI-","BI-DORU","KOKU-NN","SUPIA-",
      "POPPO","PIJONN","PIJOTTO","KORATTA","RATTA",
      "ONISUZUME","ONIDORIRU","A-BO","A-BOKKU","PIKATYUU",
      "RAITYUU","SANNDO","SANNDOPANN","NIDORANNMESU","NIDORI-NA",
      "NIDOKUINN","NIDORANNOSU","NIDORI-NO","NIDOKINNGU","PIPPI",
      "PIKUSI-","ROKONN","KYUUKONN","PURINN","PUKURINN",
      "ZUBATTO","GORUBATTO","NAZONOKUSA","KUSAIHANA","RAHURESIA",
      "PARASU","PARASEKUTO","KONNPANN","MORUFONN","DHIGUDA",
      "DAGUTORIO","NYA-SU","PERUSIANN","KODAKKU","GORUDAKKU",
      "MANNKI-","OKORIZARU","GA-DHI","UINNDHI","NYOROMO",
      "NYOROZO","NYOROBONN","KE-SYI","YUNNGERA-","HU-DHINN",
      "WANNRIKI-","GO-RIKI-","KAIRIKI-","MADATUBOMI","UTUDONN",
      "UTUBOTTO","MENOKURAGE","DOKUKURAGE","ISITUBUTE","GORO-NN",
      "GORO-NYA","PONI-TA","GYAROPPU","YADONN","YADORANN",
      "KOIRU","REAKOIRU","KAMONEGI","DO-DO-","DO-DORIO",
      "PAUWAU","JUGONN","BETOBETA-","BETOBETONN","SYERUDA-",
      "PARUSYENN","GO-SU","GO-SUTO","GENNGA-","IWA-KU",
      "SURI-PU","SURI-PA-","KURABU","KINNGURA-","BIRIRIDAMA",
      "MARUMAINN","TAMATAMA","NASSI-","KARAKARA","GARAGARA",
      "SAWAMURA-","EBIWARA-","BERORINNGA","DOGA-SU","MATADOGASU",
      "SAIHO-NN","SAIDONN","RAKKI-","MONNJARA","GARU-RA",
      "TATTU-","SI-DORA","TOSAKINNTO","AZUMAOU","HITODEMANN",
      "SUTA-MI-","BARIYA-DO","SUTORAIKU","RU-JURA","EREBU-",
      "BU-BA-","KAIROSU","KENNTAROSU","KOIKINNGU","GYARADOSU",
      "RAPURASU","METAMONN","I-BUI","SYAWA-ZU","SANNDA-SU",
      "BU-SUTA-","PORIGONN","OMUNAITO","OMUSUTA-","KABUTO",
      "KABUTOPUSU","PUTERA","KABIGONN","HURI-ZA-","SANNDA-",
      "FAIYA-","MINIRYUU","HAKURYU-","KAIRYU-","MYUUTU-",
      "MYUU"
    ];
    
    // カウントダウン関数
    function countDown(){
      countTime.textContent = 3;
      let time = 2; 
      ready.style.visibility ="hidden";
      countTime.style.visibility = "visible";
      let countState = setInterval(function(){
        countTime.innerHTML = time;
        time--;
        // console.log(time);
        if(time < 0){
          clearInterval(countState);
          countTime.style.visibility = "hidden";
          start.style.visibility = "visible";
        }},1000);
    }

    // 効果音オン関数
    function startSound() {
      sessionStorage.setItem("flag", "on");
      flag = "on"
      soundOn.blur();
      soundOn.style.color = "white";
      soundOn.style.background = "dimgray";
      soundOff.style.color = "black";
      soundOff.style.background = "white";
    }

    // 効果音オフ関数
    function stopSound() {
      // soundSwitch = false;
      sessionStorage.setItem("flag", "off");
      flag = "off"
      soundOff.blur();
      soundOff.style.color = "white";
      soundOff.style.background = "dimgray";
      soundOn.style.color = "black";
      soundOn.style.background = "white";
    }

    // XHRで使う関数その1
    const buildHTMLLevelKeep = (XHR) => {
      gameData = XHR.response.game;
      const html = `
        <div class="game-data">
          <div class="game-data-point">
            ${charNum}<span>P</span>ゲット！次のレベルアップまで残り${200 - gameData.point}<span>P</span>
          </div>
          <div class="game-data-level">
            現在のレベルは${gameData.level}です
          </div>
        </div>`;
      return html;
    };

    // XHRで使う関数その2
    const buildHTMLLevelUp = (XHR) => {
      gameData = XHR.response.game;
      const html = `
        <div class="game-data">
          <div class="game-data-levelup">
            ★レベルアップおめでとうございます★
          </div>
          <div class="game-data-point">
            ${charNum}Pゲット！次のレベルアップまで残り${200 - gameData.point}P
          </div>
          <div class="game-data-level">
            現在のレベルは${gameData.level}です
          </div>
        </div>`;
      return html;
    };

    // データ保存関数
    function saveData() {
      const XHR = new XMLHttpRequest();
      XHR.open("PATCH", `/games/${gameData.id}`, true);
      // これがないとデータを正しく受信できない
      XHR.setRequestHeader('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
      XHR.responseType = "json";
      let level = gameData.level;
      let point = gameData.point + charNum;


      if (point >= 200) {
      // if (point >= 20) {
        level += 1;
        levelUp = true;
        point -= 200;
        // point -= 20;
      }
      let count = gameData.count + charNum;
      XHR.send(`level=${level}&point=${point}&count=${count}`);
      XHR.onload = () => {
        if (XHR.readyState === 4 && XHR.status === 200) {
          const finishResult = document.getElementById("finish-result");
          if (levelUp) {
            finishResult.insertAdjacentHTML("beforebegin", buildHTMLLevelUp(XHR));
          } else {
            finishResult.insertAdjacentHTML("beforebegin", buildHTMLLevelKeep(XHR));
          }
        } else {
          alert(`Error ${XHR.status}: ${XHR.statusText}`);
          return null;
        };
      };
    }

    // お試しプレイ用、入力文作成関数
    function createTrialText() {
      charNum += target.textContent.length;
      if ( num === 10 ) {
      // if ( num === 1 ) {
        gameStart = false;
        start.style.visibility = "hidden";
        sound.style.visibility = "hidden";
        finish.style.visibility = "visible";
        replay.style.visibility = "visible";
        if (gameData) {
          saveData();
          finishInfo.style.visibility = "hidden"
        }
        return;
      }
      hiragana.textContent = trialKana[num];
      target.textContent = '';
      checkTexts = trialTarget[num].split('').map(function(value) {
        let span = document.createElement('span');
        span.textContent = value;
        target.appendChild(span);
        return span;
      });
      num++;
    }

    // コンテンツ用、入力文作成関数
    function createText() {
      charNum += target.textContent.length;
      if ( num === 10 ) {
        gameStart = false;
        start.style.visibility = "hidden";
        sound.style.visibility = "hidden";
        finish.style.visibility = "visible";
        replay.style.visibility = "visible";
        if (gameData) {
          saveData();
          finishInfo.style.visibility = "hidden"
        }
        return;
      }
      const rnd = Math.floor(Math.random() * genreKana.length);
      hiragana.textContent = genreKana[rnd];
      // 前の文字列が残ってしまうので空文字を入れてリセット
      target.textContent = '';
      checkTexts = genreTarget[rnd].split('').map(function(value) {
        let span = document.createElement('span');
        span.textContent = value;
        target.appendChild(span);
        // このreturnによって、checkTextsの配列に格納
        return span;
      });
      num++;
    }

    // キーダウン関数
    function keyDown(e) {
      e.preventDefault();
      if ( e.key === "Escape") {
        location.href = "/"
      }
      if ( e.key === " " ) {
        if (countState) {
          countDown();
          countState = false;
          gameStart = true;
        }
      }
      if (gameStart) {
        // 小文字でも正解にする
        let komoji = checkTexts[0].textContent.toLowerCase();
        if(e.key === checkTexts[0].textContent || e.key === komoji) {
          // if (soundSwitch) {
          if (flag === "on") {
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
          if(!checkTexts.length) {
            if ( genre === "trial" || genre === "" ) {
              createTrialText();
            } else {
              createText();
            }
          }
        }
      }
    }

    // ここからスタート
    let flag = sessionStorage.getItem("flag");
    if (flag === null || flag === "on") {
      startSound();
    } else {
      stopSound();
    }
    if ( genre === "trial" || genre === "" ) {
      createTrialText();
      document.addEventListener('keydown', keyDown);
      soundOn.addEventListener('click', startSound);
      soundOff.addEventListener('click', stopSound);
    } else if (genre === "pokemon") {
      genreKana = pokemonKana;
      genreTarget = pokemonTarget;
      createText();
      document.addEventListener('keydown', keyDown);
      soundOn.addEventListener('click', startSound);
      soundOff.addEventListener('click', stopSound);
    }

  }
}
window.addEventListener("load", startApp);