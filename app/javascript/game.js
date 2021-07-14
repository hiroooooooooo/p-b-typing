const startApp = () => {
  // ページを限定する
  if (document.getElementById('target')) {

    const target = document.getElementById('target');
    const ready = document.getElementById("ready");
    const start = document.getElementById("start");
    const result = document.getElementById("result");
    const replay = document.getElementById('replay');
    const sound = document.getElementById('sound');
    const countTime = document.getElementById('count-time');
    const p = document.getElementById('p');
    const b = document.getElementById('b');
    const soundOn = document.getElementById('sound-on');
    const soundOff = document.getElementById('sound-off');
    const genre = document.getElementById("genre").textContent
    console.log("genre="+genre);
    // const userName = document.getElementById("user-name").textContent
    const userName = document.getElementById("user-name")
    // let userName = document.getElementById("user-name")
    // if (!userName) userName=""
    // console.log("userName="+userName);
    // console.log("userName="+userName.textContent);
    let hiragana = document.getElementById("hiragana");
    let countStart = true;
    let soundSwitch = true;
    let genreKana = [];
    let genreTarget = [];
    // 関数内で使用
    let checkTexts = [];
    // お試しプレイ回数
    let num = 0;
    // 入力文字数
    let charNum = 0;

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
      let countStart = setInterval(function(){
        countTime.innerHTML = time;
        time--;
        // console.log(time);
        if(time < 0){
          clearInterval(countStart);
          countTime.style.visibility = "hidden";
          start.style.visibility = "visible";
        }},1000);
    }

    // サウンドオン関数
    function startSound() {
      soundSwitch = true;
      soundOn.blur();
      soundOn.style.color = "white";
      soundOn.style.background = "dimgray";
      soundOff.style.color = "black";
      soundOff.style.background = "white";
    }

    // サウンドオフ関数
    function stopSound() {
      soundSwitch = false;
      soundOff.blur();
      soundOff.style.color = "white";
      soundOff.style.background = "dimgray";
      soundOn.style.color = "black";
      soundOn.style.background = "white";
    }

    // データ保存関数
    function saveData() {
      console.log("saveData内");
      const XHR = new XMLHttpRequest();
      XHR.open("POST", "/games", true);
      // これがないとデータを正しく受信できない
      XHR.setRequestHeader('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
      XHR.responseType = "json";

      XHR.send(`point=${charNum}`);
      
      XHR.onload = () => {
        if (XHR.readyState === 4 && XHR.status === 200) {
          console.log("処理");
          const point = document.getElementById("point");
          const level = document.getElementById("level");
          // point.insertAdjacentHTML("afterend", buildHTML(XHR));
          // level.insertAdjacentHTML("afterend", buildHTML(XHR));
        } else {
          alert(`Error ${XHR.status}: ${XHR.statusText}`);
          return null;
        };
      };
    }

    // お試しプレイ用関数
    function createTrialText() {
      charNum += target.textContent.length;
      console.log(charNum);



      // 一時的に1に変更、後で10に！
      if ( num === 1 ) {
      // if ( num === 10 ) {
        start.style.visibility = "hidden";
        sound.style.visibility = "hidden";
        result.style.visibility = "visible";
        replay.style.visibility = "visible";

        // 実装中ここから
        if (userName) {
          saveData();
        }
        // 実装中ここまで

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

    // コンテンツ用関数
    function createText() {
      charNum += target.textContent.length;
      console.log(charNum);
      if ( num === 10 ) {
        start.style.visibility = "hidden";
        sound.style.visibility = "hidden";
        result.style.visibility = "visible";
        replay.style.visibility = "visible";

        // 実装中ここから
        // if (userName) {
        //   saveData();
        // }
        // 実装中ここまで

        return;
      }
      const rnd = Math.floor(Math.random() * genreKana.length);
      // const rnd = Math.floor(Math.random() * (`${genre}Kana`).length);
      // hiragana.textContent = pokemonKana[rnd];
      hiragana.textContent = genreKana[rnd];
      // 前の文字列が残ってしまうので空文字を入れてリセット
      target.textContent = '';
      // checkTexts = pokemonTarget[rnd].split('').map(function(value) {
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
        if (countStart) {
          countDown();
          countStart = false;
        }
      }
      // 小文字でも正解にする
      let komoji = checkTexts[0].textContent.toLowerCase();
      if(e.key === checkTexts[0].textContent || e.key === komoji) {
        if (soundSwitch) {
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

    // ここがスタート
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