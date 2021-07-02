"use strict"
const   INTERVAL = 50;  //１コマ間隔
const   SECOND = 1000 / INTERVAL;   //1秒
const   Rome1 = [['a'],['i','yi'],['u','wu','whu'],['e'],['o'],
                ['ka','ca'],['ki'],['ku','cu','qu'],['ke'],['ko','co'],
                ['sa'],['si','shi','ci'],['su'],['se','ce'],['so'],
                ['ta'],['ti','chi'],['tu','tsu'],['te'],['to'],
                ['na'],['ni'],['nu'],['ne'],['no'],
                ['ha'],['hi'],['hu','fu'],['he'],['ho'],
                ['ma'],['mi'],['mu'],['me'],['mo'],['ya'],['yu'],['yo'],
                ['ra'],['ri'],['ru'],['re'],['ro'],['wa'],['wo'],['nn'],
                ['ga'],['gi'],['gu'],['ge'],['go'],
                ['za'],['zi','ji'],['zu'],['ze'],['zo'],
                ['da'],['di'],['du'],['de'],['do'],
                ['ba'],['bi'],['bu'],['be'],['bo'],
                ['pa'],['pi'],['pu'],['pe'],['po'],
                ['la','xa'],['li','xi'],['lu','xu'],['le','xe'],['lo','xo'],
                ['ltu','xtu'],['lya','xya'],['lyu','xyu'],['lyo','xyo'],['vu']];
const   Kana1 = [['あ','ア'],['い','イ'],['う','ウ'],['え','エ'],['お','オ'],   //0-4
                ['か','カ'],['き','キ'],['く','ク'],['け','ケ'],['こ','コ'],    //5-9
                ['さ','サ'],['し','シ'],['す','ス'],['せ','セ'],['そ','ソ'],    //10-14
                ['た','タ'],['ち','チ'],['つ','ツ'],['て','テ'],['と','ト'],    //15-19
                ['な','ナ'],['に','ニ'],['ぬ','ヌ'],['ね','ネ'],['の','ノ'],    //20-24
                ['は','ハ'],['ひ','ヒ'],['ふ','フ'],['へ','ヘ'],['ほ','ホ'],    //25-29
                ['ま','マ'],['み','ミ'],['む','ム'],['め','メ'],['も','モ'],    //30-34
                ['や','ヤ'],['ゆ','ユ'],['よ','ヨ'],                            //35-37
                ['ら','ラ'],['り','リ'],['る','ル'],['れ','レ'],['ろ','ロ'],    //38-42
                ['わ','ワ'],['を','ヲ'],['ん','ン'],                            //43-45
                ['が','ガ'],['ぎ','ギ'],['ぐ','グ'],['げ','ゲ'],['ご','ゴ'],    //46-50
                ['ざ','ザ'],['じ','ジ'],['ず','ズ'],['ぜ','ゼ'],['ぞ','ゾ'],    //51-55
                ['だ','ダ'],['ぢ','ヂ'],['づ','ヅ'],['で','デ'],['ど','ド'],    //56-60
                ['ば','バ'],['び','ビ'],['ぶ','ブ'],['べ','ベ'],['ぼ','ボ'],    //61-65
                ['ぱ','パ'],['ぴ','ピ'],['ぷ','プ'],['ぺ','ペ'],['ぽ','ポ'],    //66-70
                ['ぁ','ァ'],['ぃ','ィ'],['ぅ','ゥ'],['ぇ','ェ'],['ぉ','ォ'],    //71-75
                ['っ','ッ'],['ゃ','ャ'],['ゅ','ュ'],['ょ','ョ'],['ヴ','ヴ']     //76-80
];
const   Rome2 = [['ye'],['wha'],['wi','whi'],['we','whe'],['who'],
                ['kya'],['kyi'],['kyu'],['kye'],['kyo'],['kwa'],
                ['sya','sha'],['syi'],['syu','shu'],['sye','she'],['syo','sho'],
                ['swa'],['swi'],['swu'],['swe'],['swo'],
                ['tya','cya','cha'],['tyi','cyi'],['tyu','cyu','chu'],
                ['tye','cye','che'],['tyo','cyo','cho'],
                ['tsa'],['tsi'],['tse'],['tso'],
                ['tha'],['thi'],['thu'],['the'],['tho'],
                ['twa'],['twi'],['twu'],['twe'],['two'],
                ['nya'],['nyi'],['nyu'],['nye'],['nyo'],
                ['hya'],['hyi'],['hyu'],['hye'],['hyo'],
                ['fa'],['fi','fyi'],['fe','fye'],['fo'],['fya'],['fyu'],['fyo'],
                ['mya'],['myi'],['myu'],['mye'],['myo'],
                ['rya'],['ryi'],['ryu'],['rye'],['ryo'],
                ['gya'],['gyi'],['gyu'],['gye'],['gyo'],['gwa'],
                ['ja','zya','jya'],['zyi','jyi'],['ju','zyu','jyu'],
                ['je','zye','jye'],['jo','zyo','jyo'],
                ['dya'],['dyi'],['dyu'],['dye'],['dyo'],
                ['dha'],['dhi'],['dhu'],['dhe'],['dho'],
                ['dwa'],['dwi'],['dwu'],['dwe'],['dwo'],
                ['bya'],['byi'],['byu'],['bye'],['byo'],
                ['pya'],['pyi'],['pyu'],['pye'],['pyo'],
                ['va'],['vi','vyi'],['ve','vye'],['vo'],['vya'],['vyu'],['vyo']
];
const   Kana2 = [['いぇ','イェ'],['うぁ','ウァ'],['うぃ','ウィ'],['うぇ','ウェ'],['うぉ','ウォ'],
                ['きゃ','キャ'],['きぃ','キィ'],['きゅ','キュ'],['きぇ','キェ'],['きょ','キョ'],['くぁ','クァ'],
                ['しゃ','シャ'],['しぃ','シィ'],['しゅ','シュ'],['しぇ','シェ'],['しょ','ショ'],
                ['すぁ','スァ'],['すぃ','スィ'],['すぅ','スゥ'],['すぇ','スェ'],['すぉ','スォ'],
                ['ちゃ','チャ'],['ちぃ','チィ'],['ちゅ','チュ'],['ちぇ','チェ'],['ちょ','チョ'],
                ['つぁ','ツァ'],['つぃ','ツィ'],['つぇ','ツェ'],['つぉ','ツォ'],
                ['てゃ','テャ'],['てぃ','ティ'],['てゅ','テュ'],['てぇ','テェ'],['てょ','テョ'],
                ['とぁ','トァ'],['とぃ','トィ'],['とぅ','トゥ'],['とぇ','トェ'],['とぉ','トォ'],
                ['にゃ','ニャ'],['にぃ','ニィ'],['にゅ','ニュ'],['にぇ','ニェ'],['にょ','ニョ'],
                ['ひゃ','ヒャ'],['ひぃ','ヒィ'],['ひゅ','ヒュ'],['ひぇ','ヒェ'],['ひょ','ヒョ'],
                ['ふぁ','ファ'],['ふぃ','フィ'],['ふぇ','フェ'],['ふぉ','フォ'],
                ['ふゃ','フャ'],['ふゅ','フュ'],['ふょ','フョ'],
                ['みゃ','ミャ'],['みぃ','ミィ'],['みゅ','ミュ'],['みぇ','ミェ'],['みょ','ミョ'],
                ['りゃ','リャ'],['りぃ','リィ'],['りゅ','リュ'],['りぇ','リェ'],['りょ','リョ'],
                ['ぎゃ','ギャ'],['ぎぃ','ギィ'],['ぎゅ','ギュ'],['ぎぇ','ギェ'],['ぎょ','ギョ'],['ぐぁ','グァ'],
                ['じゃ','ジャ'],['じぃ','ジィ'],['じゅ','ジュ'],['じぇ','ジェ'],['じょ','ジョ'],
                ['ぢゃ','ヂャ'],['ぢぃ','ヂィ'],['ぢゅ','ヂュ'],['ぢぇ','ヂェ'],['ぢょ','ヂョ'],
                ['でゃ','デャ'],['でぃ','ディ'],['でゅ','デュ'],['でぇ','デェ'],['でょ','デョ'],
                ['どぁ','ドァ'],['どぃ','ドィ'],['どぅ','ドゥ'],['どぇ','ドェ'],['どぉ','ドォ'],
                ['びゃ','ビャ'],['びぃ','ビィ'],['びゅ','ビュ'],['びぇ','ビェ'],['びょ','ビョ'],
                ['ぴゃ','ピャ'],['ぴぃ','ピィ'],['ぴゅ','ピュ'],['ぴぇ','ピェ'],['ぴょ','ピョ'],
                ['ヴぁ','ヴァ'],['ヴぃ','ヴィ'],['ヴぇ','ヴェ'],['ヴぉ','ヴォ'],
                ['ヴゃ','ヴャ'],['ヴゅ','ヴュ'],['ヴょ','ヴョ']
];
const   Kaku = [['0','０'],['1','１'],['2','２'],['3','３'],['4','４'],['5','５'],['6','６'],['7','７'],
                ['8','８'],['9','９'],[',','、'],['.','。'],['-','ー'],['!','！'],['?','？']
                ];
const   keyboard = [['1','2','3','4','5','6','7','8','9','0','-'],
                    ['q','w','e','r','t','y','u','i','o','p'],
                    ['a','s','d','f','g','h','j','k','l'],
                    ['z','x','c','v','b','n','m',',','.']];
const   Shiftkeyboard = [['!','','','','','','','','','0',''],
                    ['Q','W','E','R','T','Y','U','I','O','P'],
                    ['A','S','D','F','G','H','J','K','L'],
                    ['Z','X','C','V','B','N','M','','','?']];
const   gKey = new Uint8Array( 0x100 ); //キー入力バッファ
const   eText = new Array("よみこみにしっぱいしました"); //謎
const   RomeText = [['']];  //タイプ例文[行](お蔵入り)
const   TypeText = [['']];  //タイプ例配列[行][列]

var winwidth = window.innerWidth;   //画面の横幅
var winheight = window.innerHeight; //画面の縦幅

let     state = "Title";    //SelectMode Ready Start Game Finish Result
let     GameMode = 0;       //0:タイムアタック 1:時間制限
let     TimeLimit = 60*3;    //時間制限の場合のタイムリミット(秒)
let     HeartNumMax = 3;    //ハート指定数
let     Heart = HeartNumMax;    //ハート残数
let     kc = "";    //キー
let     KC = -1;    //キーコード
let     MouseSelect = new Array(7); //マウスの選択ボタン(T,F)
let QuestionText = eText;            //問題文
let bs = 0;     //ブロックサイズ
let QuesNum = 0;    //列目
let QuesLin = 0;    //行目
let QuesText = Array.from(QuestionText[QuesLin]);   //現在の問題文1行
let Ques = QuesText[QuesNum];                       //現在の問題文字
let Ans = "";           //回答
let AllNumWord = 0;     //全文字数
let NumType = 0;        //タイプした回数
let NumWord = 0;        //タイプした文字数
let Miss = 0;           //ミスした回数
let TopTime = 0;        //コマ
let Time = 0;           //秒
let StartTime = 3;      //カウントダウン
let TimerOn = true;     //
let PlayTimes = 1;      //プレイ回数

let option = [true,true,true,true,true];   //各設定オンオフ
            //文章、タイプ例、回答、秒数、効果音
let OpenOption = false;

var SEType = new Array(10); //正解している時(bool)
var SEMiss = new Array(10); //ミスした時(bool)
var SETypeOn = 0;           //次に鳴らす正解音の番号
var SEMissOn = 0;           //次に鳴らすミス音の番号
for(let s=0; s < 10; s++){  //同じ音を10コ生成
    SEType[s] = new Audio('ImageSound/Type.wav'); //正解している時
    SEMiss[s] = new Audio('ImageSound/miss.mp3'); //ミスした時
}
var SEFinish = new Audio('ImageSound/win.mp3');   //終わったとき
SEFinish.volume = 0.1;

var mX;  //X座標
var mY;  //Y座標
//描画
function Paint()
{
    var   ca = document.getElementById('typing');   //typingキャンバスの要素を取得
    var   g = ca.getContext('2d');                  //2D描画コンテキストを取得
    // var winwidth = window.innerWidth;
    // var winheight = window.innerHeight;
    ca.width = winwidth;                            //描画画面の横幅をブラウザサイズに合わせる
    ca.height = winheight;                          //描画画面の縦幅をブラウザサイズに合わせる
    if(winwidth > winheight){ bs = winheight / 17; }    //縦幅が横幅より小さいとき1マスを縦幅/17にする
    else{ bs = winwidth / 17; }                         //横幅が縦幅以下のとき1マスを横幅/17にする
    g.font = bs+"px monospace";                      //フォント設定
    g.fillStyle = "black";                          
    // g.fillRect(0,0,bs,bs);           //ブラウザサイズの16分の1の四角を描画
    if(state == "Title"){               //タイトル画面の描画
        g.fillStyle = "yellow";                 //黄色の
        g.fillRect(0,bs*(2.3),winwidth,bs*2);   //テキスト2行分の塗りつぶし枠
        g.font = bs*3+"px monospace";           //フォントをbsの3倍に
        g.fillText("↑",bs/10,bs*2.5);           //矢印で「ファイルを選択」を指す
        g.fillStyle = "lightgreen";             //黄緑の
        g.fillRect(0,bs*(4.3),winwidth,bs*8.5); //テキスト8行分の塗りつぶし枠
        g.fillStyle = "orange";                 //オレンジの
        g.fillRect(0,bs*(12.3),winwidth,bs*4);  //テキスト4行分の塗りつぶし枠
        g.fillStyle = "black";                  //黒色の
        g.font = bs+"px monospace";                      //フォントの大きさをbsに
        g.fillText("タイピングゲーム",bs*2,bs*(1.5));   //タイトル
        g.font = bs / 3 * 2 + "px monospace";           //フォントの大きさをbsの3分の2に
        g.fillText("左上の「ファイルを選択」から",bs/2,bs*3);   //*説明文
        g.fillText("タイピングしたい文章のファイルを開いてください",bs/2,bs*4);
        g.fillText("　　　　　　 〜文章のルール〜",bs,bs*5);
        g.fillText("・使える文字は",bs,bs*6);
        g.fillText("　＊全角ひらがな・カタカナ、半角アルファベット",bs/2,bs*7);
        g.fillText("　＊全半角の「,」「.」「-」「!」「?」・数字(0〜9)",bs/2,bs*8);
        g.fillText("　　　のみ（他の文字は空白になる）",bs/2,bs*9);
        g.fillText("・全角15字を超えると自動で改行されます",bs/2,bs*10);
        g.fillText("・ご自身の改行も反映されます",bs/2,bs*11);
        g.fillText("・空白はタイピングしません",bs/2,bs*12);
        g.fillText("　　　　　　〜タイピングのルール〜",bs/2,bs*13);
        g.fillText("キーは[a〜z][0〜9][,][.][-]",bs/2,bs*13.8);
        g.fillText("　　　[!([Shift]+[1])][?([Shift]+[/])]を使用",bs/2,bs*14.6);
        g.fillText("[Esc]キーで中断(スペースで再開)・設定の変更",bs/2,bs*15.4); //*
    }else if(state == "SelectMode"){    //ゲームモード選択画面の描画
        g.fillStyle = "skyblue";                //水色の
        g.fillRect(bs*2,bs*2,bs*7,bs*1.3);      //タイムアタックボタン
        g.fillRect(bs*2,bs*5,bs*7,bs*1.3);      //時間制限ボタン
        g.fillRect(bs*2,bs*8,bs*7,bs*1.3);      //体力制ボタン
        g.fillRect(bs*3,bs*13.5,bs*10,bs*1.5);  //決定ボタン　↓選択中はオレンジで
        if(MouseSelect[0]){ g.fillStyle = "orange"; }else{ g.fillStyle = "yellow"; }
        g.fillText("タイムアタック",bs*2,bs*3); //ボタン名
        if(MouseSelect[1]){ g.fillStyle = "orange"; }else{ g.fillStyle = "blue"; }
        g.fillText("時間制限",bs*2,bs*6);       //ボタン名
        if(MouseSelect[5]){ g.fillStyle = "orange"; }else{ g.fillStyle = "deeppink"; }
        g.fillText("体力制",bs*2,bs*9);         //ボタン名
        if(MouseSelect[4]){ g.fillStyle = "red"; g.fillRect(bs*3,bs*13.5,bs*10,bs*1.5); }
        if(MouseSelect[4]){ g.fillStyle = "white"; }else{ g.fillStyle = "red"; }
        g.fillText("決定(スペースキー)",bs*3.5,bs*14.6);    //ボタン名↑選択中は白で
        g.fillStyle = "black";                              //黒色の
        g.fillText("ゲームモードを選んでください",bs*1,bs*1);   //説明文
        g.strokeStyle = "red";                                  //赤の
        g.strokeRect(bs*1.9,bs*1.9+GameMode*bs*3,bs*7.2,bs*1.5);  //選択枠
        g.font = bs/3*2+"px monospace";                      //フォントをbsの3分の2に
        g.fillText("(「↑」「↓」で選ぶ)",bs*10,bs*2);            //選択操作説明
        g.fillText("文章を最後までタイピングし、",bs*2.5,bs*4); //タイムアタック説明文1
        g.fillText("そのタイムを競います",bs*2.5,bs*4.7);       //*2
        g.fillText("指定した時間内に何字打てるかを競います",bs*2.5,bs*7);   //時間制限説明文1
        g.fillText("途中で文章の最後まで打つと最初に戻ります",bs*2.5,bs*7.7); //*2
        g.fillText("指定した回数分ミスすると即終了です",bs*2.5,bs*10);  //体力制説明文1
        g.fillText("途中で文章の最後まで打つと最初に戻ります",bs*2.5,bs*10.7);  //*2
        if(GameMode >= 1){      //時間制限か体力制を選んでいる場合
            if(GameMode==1){ g.fillStyle = "blue"; }else{ g.fillStyle = "deeppink"; }
            g.fillRect(bs*2.3,bs*11,bs*11,bs*2.2);  //数値設定枠
            g.fillStyle = "skyblue";        //水色の
            g.fillRect(bs*4,bs*12,bs,bs); //左ボタン
            g.fillRect(bs*10,bs*12,bs,bs); //右ボタン
            g.fillStyle = "white";          //白色の　↓それぞれの説明文
            if(GameMode==1){ g.fillText("制限時間を指定してください",bs*2.5,bs*11.7); }
            else{ g.fillText("ライフの数を指定してください",bs*2.5,bs*11.7); }
            g.font = bs + "px monospace";   //フォントをbsに
            if(GameMode == 1){              //時間制限の場合
                let mint = Math.floor(TimeLimit/60);    //分の変数
                if(TimeLimit%60!=0){ g.fillText(mint+"分"+Math.floor(TimeLimit%60)+"秒",bs*6,bs*12.8); }
                else{ g.fillText(mint+"分",bs*7,bs*12.8); }   //制限時間表示　↑:秒が0なら表示しない    
                g.strokeStyle = "blue";                         //青の
            }else if(GameMode == 2){        //体力制の場合
                if(HeartNumMax==1){ g.fillText("サドンデス",bs*5,bs*12.8);  //1ならばこう表示
                }else{ g.fillText(HeartNumMax,bs*7,bs*12.8); }  //それ以外はその数値を表示
                g.strokeStyle = "deeppink";                     //濃いピンクの
            }
            g.beginPath();     //新しいパスを開始
            g.moveTo(bs*2,bs*(2.6+GameMode*3)); //*ゲームモード選択ボタンから
            g.lineTo(bs*1,bs*(2.6+GameMode*3)); // 数値設定枠まで
            g.lineTo(bs*1,bs*12);               // 線を引く
            g.lineTo(bs*2.3,bs*12);
            g.moveTo(bs*2.3,bs*12);
            g.closePath();
            g.stroke();                         //*
            g.fillText("ー 　　　　　　　 ＋",bs*2.5,bs*12.85); //2つのボタンの端に表示
            if(MouseSelect[2]){ g.fillStyle = "orange"; }else{ g.fillStyle = "black"; }
            g.fillText("←",bs*4,bs*12.85);  //ボタン名 ↑選択中はオレンジ
            if(MouseSelect[3]){ g.fillStyle = "orange"; }else{ g.fillStyle = "black"; }
            g.fillText("→",bs*10,bs*12.85); //ボタン名 ↑選択中はオレンジ

        }
    }else if(state == "Ready"){                 //準備完了画面の描画
        g.font = bs + "px monospace";       //フォントをbsに
        g.fillText("スペースキーでゲームスタート！",bs*1,bs*6); //真ん中あたりに表示
        g.fillStyle = "orange";             //オレンジの
        g.fillText("スペースキー",bs*1,bs*6);   //上の「スペースキー」だけ別の色
        g.fillStyle = "black";              //黒の
        g.font = bs / 6 * 5 + "px monospace";   //フォントをbsの6分の5に
        g.fillText("ゲームの準備が完了しました！",bs*1,bs*1);   //上に表示
        //ゲームモード、その詳細を表示
        if(GameMode==0){ g.fillText("ゲームモード：タイムアタック",bs*1,bs*2); }
        else if(GameMode==1){
            g.fillText("ゲームモード：時間制限",bs*1,bs*2);
            let minute = Math.floor(TimeLimit/60);  //分
            let second = Math.floor(TimeLimit%60);  //秒 ↓制限時間表示　(秒は0なら表示しない)
            if(second!=0)g.fillText("制限時間　　："+minute+"分"+second+"秒",bs*1,bs*3);
            g.fillText("制限時間　　："+minute+"分",bs*1,bs*3); //
        }else if(GameMode == 2){
            g.fillText("ゲームモード：体力制",bs*1,bs*2);
            g.fillText("ライフの数　："+HeartNumMax,bs*1,bs*3); //体力の数
        }
        g.fillStyle = "green";  //緑の 
        if(MouseSelect[5]){ //マウスで選択中    ↓文字と枠の色を逆転
            g.fillRect(bs*0.8,bs*10,bs*11.2,bs*1.3);
            g.fillStyle = "white";
        }
        g.fillText("設定の変更（「Esc」キー）",bs*1,bs*11);
        g.font = bs / 3 * 2 + "px monospace";       //フォントをbsの3分の2に
        g.fillStyle = "black";  //黒の
        g.fillText("↑ 文章の表示、効果音など",bs*1.5,bs*12);    //設定の説明文
        g.fillStyle = "purple"; //紫の
        if(MouseSelect[6]){ //マウスでポイント中    ↓文字と枠の色を逆転
            g.fillRect(bs*0.3,winheight-bs*2.8,bs*16,bs*1.2);
            g.fillStyle = "white";
        }   //↑画面下に表示↓　戻るボタン
        g.fillText("←ゲームモード選択に戻る（「BackSpace」キー）",bs*0.5,winheight-bs*2);
        if( OpenOption ){       //設定の変更・プレビュー表示
            g.font = bs / 6 * 5 + "px monospace";   //フォントをbsの6分の5に
            g.fillStyle = "white";  //白で
            g.fillRect(0,0,winwidth,winheight-bs*3);    //戻るボタンより上を真っ白に
            g.fillStyle = "gray";   //グレーの
            g.fillRect(bs*1,bs*0.5,bs*14,bs*6.5);   //設定枠
            g.fillStyle = "white";  //白の ↓設定項目
            g.fillText("　　　　　　　切り替え",bs*1.5,bs*1.5);
            g.fillText("キーボード表示(1キー)",bs*1.5,bs*2.5);
            g.fillText("タイプ例の表示(2キー)",bs*1.5,bs*3.5);
            g.fillText("回答の表示　　(3キー)",bs*1.5,bs*4.5);
            g.fillText("経過時間の表示(4キー)",bs*1.5,bs*5.5);
            g.fillText("効果音　　　　(5キー)",bs*1.5,bs*6.5);
            for(let o = 0; o < option.length; o++ ){
                g.fillStyle = "yellow"; //オンの場合黄色
                if(MouseSelect[o]){ g.fillStyle = "orange"; }   //マウスで選択中オレンジ
                if(option[o]){ g.fillText("ＯＮ",bs*12.5,bs*(2.5+o)); } //オンの場合に表示
                else{   //オフの場合
                    g.fillStyle = "blue";   //青で
                    if(MouseSelect[o]){ g.fillStyle = "orange"; }   //マウスで選択中オレンジ
                    g.fillText("ＯＦＦ",bs*12,bs*(2.5+o));
                }
            }
            g.fillStyle = "black";  //黒の
            g.fillText("プレビュー",bs*1,bs*7.8);   //タイトル名
            g.strokeStyle = "black";                //黒の(線)
            g.strokeRect(bs*5.5,bs*7.2,bs*9,bs*5);  //プレビューの枠線
            g.fillRect(bs*5.8,bs*7.5,bs*8.2,bs/3);  //進度バー
            g.font = bs / 2 + "px monospace";       //フォントをbsの半分に
            g.fillText("Testぶんデス",bs*5.8,bs*9);    //文章
            if(option[1]){ g.fillText("testbundesu",bs*5.8,bs*9.5); }    //タイプ例
            if(option[2]){ g.fillText("b",bs*5.8,bs*10); }              //回答
            if(option[3]){ g.fillText("56秒",bs*13,bs*8.5); }           //時間
            if(option[3] && GameMode == 1){ g.fillText("残り",bs*12,bs*8.5); }
            g.fillText("Escキー:中断・設定",bs*9.5,bs*12);  //↑タイムアタックの場合のみ表示
            if(option[0]){
                for(let n = 0; n < 10; n++){
                    g.strokeRect(bs*(6+n*0.4),bs*10.2,bs*0.25,bs*0.25);
                    g.strokeRect(bs*(6.1+n*0.4),bs*10.5,bs*0.25,bs*0.25);
                    if(n<9)g.strokeRect(bs*(6.2+n*0.4),bs*10.8,bs*0.25,bs*0.25);
                    g.strokeRect(bs*(6.3+n*0.4),bs*11.1,bs*0.25,bs*0.25);
                }
                g.strokeRect(bs*5.75,bs*11.1,bs*0.4,bs*0.25);
                g.fillStyle = "turquoise";
                g.font = bs / 3 + "px monospace";       //フォントをbsの半分に
                g.fillText("u",bs*8.45,bs*10.425);      //
                g.font = bs / 2 + "px monospace";       //フォントをbsの半分に
            }
            g.fillStyle = "gray";                   //グレーの
            if(GameMode == 2){ g.fillText("ライフ数→",bs*2.9,bs*8.3); } //ハートの説明
            g.fillText("文章→",bs*3.9,bs*9);    //文章の位置説明
            g.fillText("タイプ例→",bs*2.9,bs*9.5);   //タイプ例の位置説明
            g.fillText("回答(1文字ずつ)→",bs*1,bs*10);  //回答の位置説明
            g.fillText("↑",bs*13,bs*9);                 //時間の位置説明
            if(GameMode == 0){ g.fillText("経過時間",bs*12,bs*9.5); }   //ゲームモード
            else if(GameMode == 1){ g.fillText("残り時間",bs*12,bs*9.5); }  //ごとの
            else if(GameMode == 2){ g.fillText("経過時間",bs*12,bs*9.5); }  //説明
            g.fillText("↑",bs*10,bs*8.3);       //進度バーの位置説明
            g.fillText("進度バー",bs*9.8,bs*9); //進度バーの位置説明
            g.fillStyle = "orange";                 //オレンジの
            g.fillText("Test",bs*5.8,bs*9);    //タイプ済み文章
            if(option[1]){ g.fillText("testb",bs*5.8,bs*9.5); }  //タイプ済み(中)タイプ例
            g.fillStyle = "turquoise";  //神宮寺くん色の
            g.fillText("    ぶ",bs*5.8,bs*9);   //出題中文字
            g.fillStyle = "yellow";                 //黄色の
            g.fillRect(bs*5.8,bs*7.5,bs*2,bs/3);    //進度バーの現在まで
            g.fillStyle = "black";                  //黒の　↓説明文
            g.fillText("※ゲーム中でもEscキーで中断・設定の変更ができます",bs*0.8,bs*13);
            g.font = bs + "px monospace";           //フォントをbsに
            g.fillText("スペースキーでゲームスタート！",bs*1,bs*14.3);  //説明文
            g.fillStyle = "orange";                 //オレンジで
            g.fillText("スペースキー",bs*1,bs*14.3);    //「スペースキー」のみ別の色
            g.fillStyle = "green";                  //緑で
            g.font = bs / 2 + "px monospace";       //フォントをbsの半分に
            g.fillText("Escキー",bs*9.5,bs*12);     //「Escキー」のみ別の色
            g.fillText("　　　　　　　Escキー",bs*0.8,bs*13);   //「Escキー」のみ別の色
            if(GameMode == 2){      //体力制の場合
                g.fillStyle = "deeppink";   //岩橋くん色の
                g.strokeStyle = "red";      //赤の(線)　↓ハートを３つ表示
                for(let h=0; h<3; h++){ PaintHeart(g,bs*(5.8+h*0.5),bs*7.9,bs/60); }
            }
        }       //↓カウントダウン、ゲーム、終了時
    }else if(state == "Start" || state == "Game" || state == "Finish"){
        let space = 0;  //文章の空白の大きさ
        g.fillStyle = "orange";     //オレンジの　↓文章表示
        for(let i = 0; i < QuesText.length; i++){   //出題文の文字数回繰返し
            if( i == QuesNum ){ g.fillStyle = "turquoise"; }    //出題文字の時神宮寺くん色
            else if( i > QuesNum ){ g.fillStyle = "black"; }    //それより先の時は黒
            g.fillText(QuesText[i],bs*(1+space),bs*3);  //文字を空白をあけて表示
            // g.fillText(code,bs*(2+i*2),bs*4);
            // if( (code >= 97 && code <= 122) || (code >= 65 && code <= 91) || code == 32)
            let code = QuesText[i].charCodeAt(0);   //文字コード
            if( code <= 255 ){ space += 0.5; }  //半角なら0.5bs加算
            else{ space += 1.0; }   //それ以外なら1bs加算
        }
        // g.fillStyle = "black";  //黒の
        // g.fillText(RomeText[QuesLin],bs*1,bs*5);    //ローマ字例
        // g.fillText(TypeText[QuesLin],bs*1,bs*7);    //ローマ字例
        // g.fillText(Ques,bs*1,bs*7);    //問題
        // g.fillText(kc.charCodeAt(0),bs*1,bs*7);    //問題
        // g.fillText(kc,bs*1,bs*8);    //問題
        // g.fillText(KC,      bs*2,bs*7);    //キーコード表示
        space = 0;  //文字の空白の大きさを0に戻す
        g.fillStyle = "orange"; //オレンジの
        for(let t = 0; t < TypeText[QuesLin].length; t++){  //タイプ例数回繰返し
            if(option[1]==false){ break; }  //offの場合飛ばす
            if( t >= QuesNum ){ g.fillStyle = "black"; }    //出題中とその先の文字は黒
            if( TypeText[QuesLin][t] != null ){ //内容が存在する場合
                for(let y = 0; y < TypeText[QuesLin][t].length; y++){   //文字数回繰返し
                    if( t >= QuesNum ){ g.fillStyle = "black"; }    //出題中とその先の文字は黒
                    if(t == QuesNum && TypeText[QuesLin][t].substr(0,y+1) == Ans.substr(0,y+1)){
                        g.fillStyle = "orange";
                    }   //↑回答中文字でタイプ例とAnsが一致している場合→変色
                    g.fillText(TypeText[QuesLin][t].substr(y,y+1),bs*(1+space),bs*5);
                    space += 0.5; //←スペース加算　↑空白をあけて文字表示
                }
                // space += TypeText[QuesLin][t].length * 0.5;            //スペース加算
            }
        }
        // g.fillText(kc,      bs*2,bs*5);
        g.fillStyle = "black";  //黒の
        g.font = bs + "px monospace";   //フォントをbsに
        if(option[2]){ g.fillText(Ans,     bs*2,bs*6); }    //タイプ回答表示
        g.font = bs / 4 * 3 + "px monospace";   //↓タイムアタック,体力制の場合経過時間を表示
        if(option[3] && GameMode %2 == 0){g.fillText(""+Time+"秒", bs*14,bs*1+bs/4); }
        if(option[3] && GameMode == 1){     //時間制限の場合
            if(TimeLimit - Time <= 10){ g.fillStyle = "red"; }  //残り10秒以下なら赤で
            g.fillText("残り"+(TimeLimit - Time)+"秒", bs*11,bs*1+bs/4);    //残り時間表示
        }
        g.fillStyle = "black";  //黒の
        g.fillText("Escキー:中断・設定",bs*10,winheight-bs*2);  //画面右下に表示
        g.fillRect(bs*1,0,bs*14,bs/2);  //進度バー表示
        g.fillStyle = "green";          //緑の
        g.fillText("Escキー",bs*10,winheight-bs*2); //「Escキー」のみ別の色
        g.fillStyle = "yellow"; //黄色の　↓bs*14*今の行/全行数
        g.fillRect(bs*1,0,bs*QuesLin*14/QuestionText.length,bs/2);  //進度バー表示(進度長)
        if(GameMode == 2){  //体力制の場合　ハートの描画
            g.fillStyle = "deeppink";   //岩橋くん色で
            g.strokeStyle = "red";      //赤で(線)
            for(let h = 1; h <= Heart; h++){    //体力の数だけ
                PaintHeart(g,bs*h,bs/2,bs/30);  //ハートを描画
                if(Heart > 10){ //体力が10より多い場合
                    g.fillStyle = "black";  //黒で
                    g.fillText("×"+Heart,bs*2,bs*1.2);  //ハートの数を数値で表示
                    break;                  //ハート１つで終了
                }
            }
        }
        //キーボード表示
        if(option[0]){
            g.strokeStyle = "black";
            for(let k = 0; k < 11; k++){ g.strokeRect(bs*(1+k*1.2),bs*7,bs,bs); }   //1~9,0枠
            for(let k = 0; k < 10; k++){ g.strokeRect(bs*(1.5+k*1.2),bs*8.2,bs,bs); }   //q~p枠
            for(let k = 0; k <  9; k++){ g.strokeRect(bs*(1.8+k*1.2),bs*9.4,bs,bs); }   //a~l枠
            for(let k = 0; k < 10; k++){ g.strokeRect(bs*(2.4+k*1.2),bs*10.6,bs,bs); }  //z~/枠
            g.strokeRect(bs*0.4,bs*10.6,bs*1.8,bs); //Shiftキー左枠
            g.fillStyle = "yellow";
            let board = keyboard;   //通常キーボードに設定　↓押しているときShift状態に設定
            if(gKey[16] == 1){ g.fillRect(bs*0.4,bs*10.6,bs*1.8,bs); board = Shiftkeyboard; }
            g.fillStyle = "black";
            g.font = bs + "px 'ＭＳ ゴシック'";
            for(let n = 0; n < board.length; n++){
                let s=0; if(n==0){s=1.25;}else if(n==1){s=1.8;}
                else if(n==2){s=2.1}else{s=2.7;}
                for(let k = 0; k < board[n].length; k++){
                    if(Ques == board[n][k]){    //問題とキーが一致の場合
                        g.fillStyle = "turquoise";  //変色
                    }else if(TypeText[QuesLin][QuesNum]/*.substr(Ans.length,1)*/ != null &&
                    TypeText[QuesLin][QuesNum].substr(Ans.length,1) == board[n][k]){
                        g.fillStyle = "turquoise";  //↑ローマ字例の答え中の文字とキーが一致の場合
                    }else if((((Ques=="っ"||Ques=="ッ")&&SmallTSU(Ans+Ans))||
                            ((Ques=="ん"||Ques=="ン")&&Ans=="n"))&&    //
                            TypeText[QuesLin][QuesNum+1] != null &&
                            TypeText[QuesLin][QuesNum+1].substr(0,1) == board[n][k]){  //1文字目=キー
                            g.fillStyle = "turquoise";
                    }
                    if(kc == board[n][k]){ g.fillStyle = "red"; }
                    g.fillText(board[n][k],bs*(s+k*1.2),bs*(7.85+n*1.2));
                    g.fillStyle = "black";
                }
            }
            g.font = bs/3*2 + "px 'ＭＳ ゴシック'";
            g.fillText("Shift",bs*0.5,bs*11.4);
        }   //キーボード表示終了
        //ステイト別処理
        g.font = bs * 3 + "px monospace";   //フォントをbsの3倍に
        if(state == "Game" && Time < 1){    //ゲーム中かつスタート直後の時
            g.fillStyle = "rgba(0,0,255,"+(1-TopTime/SECOND)+")";   //徐々に透明に
            g.fillText("START!",bs*4,bs*7);     //真ん中に表示
        }
        if(state == "Start"){   //カウントダウン
            g.fillStyle = "blue";   //青で
            g.fillText(StartTime,bs*7,bs*7);    //カウントダウン表示 ↓進度バーでメーター表示
            g.fillRect(bs*1,0,(StartTime*bs*14/3- TopTime*bs*14/3/SECOND),bs/2);
        }
        if(TimerOn == false){   //ゲーム中断中
            g.font = bs + "px monospace";   //フォントをbsに
            g.fillStyle = "white";          //白で
            g.fillRect(0,bs*1.5,winwidth,winheight);    //画面の時間表示から下を真っ白に
            g.fillStyle = "lightgray";   //グレーの
            g.fillRect(bs*1,bs*1.3,bs*14,bs*3);  //説明枠
            g.fillStyle = "gray";   //グレーの
            g.fillRect(bs*1,bs*4.8,bs*14,bs*5.7);  //設定枠
            g.fillStyle = "green";  //緑で
            g.fillText("中断中",bs*6,bs*2.6);
            g.fillStyle = "red";  //赤で
            g.fillText("再開(スペースキー)",bs*3.5,bs*4);
            g.fillStyle = "white";  //白で　↓設定項目
            g.fillText("キーボード表示(1キー)",bs*1.5,bs*6);
            g.fillText("タイプ例の表示(2キー)",bs*1.5,bs*7);
            g.fillText("回答の表示　　(3キー)",bs*1.5,bs*8);
            g.fillText("経過時間の表示(4キー)",bs*1.5,bs*9);
            g.fillText("効果音　　　　(5キー)",bs*1.5,bs*10);
            for(let o = 0; o < option.length; o++ ){    //設定項目数回繰返し
                g.fillStyle = "yellow"; //黄色で
                if(MouseSelect[o]){ g.fillStyle = "orange"; }
                if(option[o]){ g.fillText("ＯＮ",bs*12.5,bs*(6+o)); }   //オンの場合表示
                else{   //オフの場合
                    g.fillStyle = "blue";   //青で
                    if(MouseSelect[o]){ g.fillStyle = "orange"; }
                    g.fillText("ＯＦＦ",bs*12,bs*(6+o));    //オフと表示
                }
            }
        }
        if(state == "Finish"){  //終了
            g.font = bs + "px monospace";   //フォントをbsに
            g.fillStyle = "blue";      //水色の
            g.fillRect(0,bs*2,winwidth,bs*10);  //終了お知らせ枠
            g.fillStyle = "white";          //黒の
            g.fillText("スペースキーで結果表示",bs*3,bs*6); //説明文
            g.fillStyle = "yellow";         //黄色で
            g.fillText("スペースキー",bs*3,bs*6); //部分を別の色に
            if(GameMode == 0){ g.fillRect(bs*1,0,bs*14,bs/2); } //進度バーを満タンに
            g.font = bs * 3 / 2 + "px monospace";   //フォントをbsの3分の2に
            g.fillStyle = "white";          //黒の
            g.fillText("終了",bs*7,bs*4);   //上真ん中に表示
        }
    }else if(state == "Result"){        //結果画面の描画
        let minute = Math.floor(Time / 60); //分
        let second = Math.floor(Time % 60); //秒
        g.fillText("結果",bs*4,bs*1);
        g.fillText("文字数    :"+NumWord+"字",bs*1,bs*2);
        g.fillText("タイプ数  :"+(NumType-Miss)+"回",bs*1,bs*3);
        g.fillText("ミス数    :"+Miss+"回",bs*1,bs*4);
        g.fillText("時間      :"+Time+"秒 ("+minute+"分"+second+"秒)",bs*1,bs*5);
        g.fillText("正解率    :"+Math.floor(100*(NumType-Miss)/NumType)+"%",bs*1,bs*6);
        g.fillText("タイプ速度:"+((NumType-Miss)/Time).toFixed(2)+"回/秒",bs*1,bs*7);
        if(GameMode>=1) //時間制、体力制の場合↓を表示
        g.fillText("進度率    :"+Math.floor(NumWord*100/AllNumWord)+"%",bs*1,bs*8);
        g.fillStyle = "red";
        g.fillText("文章を変えてもういちど",bs*1,bs*9.5);
        g.fillText("   →画面を更新(F5キー)",bs*1,bs*10.5);
        g.fillStyle = "blue";
        g.fillText("ゲームモードを変えてもういちど",bs*1,bs*12);
        g.fillText("   →Enterキー",bs*1,bs*13);
    }
}
//ハート描画(g,x座標,y座標,単位)
function PaintHeart(g,x,y,unit)
{
    g.beginPath();
    g.moveTo(x+13*unit,y+(20+3)*unit);
    g.lineTo(x+0*unit,y+(5+3)*unit);
    g.lineTo(x+3*unit,y+(0+3)*unit);
    g.lineTo(x+8*unit,y+(0+3)*unit);
    g.lineTo(x+13*unit,y+(5+3)*unit);
    g.lineTo(x+18*unit,y+(0+3)*unit);
    g.lineTo(x+23*unit,y+(0+3)*unit);
    g.lineTo(x+26*unit,y+(5+3)*unit);
    g.lineTo(x+13*unit,y+(20+3)*unit);
    g.fill();
    g.stroke();
}
//マウス(MOVE)イベント
window.onmousemove = function(e)
{
    //座標を取得する
    mX = e.pageX;  //X座標
    mY = e.pageY - 38;  //Y座標
    if(state == "SelectMode"){
        for(let s = 0; s < MouseSelect.length; s++){ MouseSelect[s] = false; }
        if( mX>=bs*2 && mX<=bs*9 && mY>=bs*2 && mY <= bs*3.3 ){
            MouseSelect[0] = true;  //タイムアタックボタン
        }else if(mX>=bs*2 && mX<=bs*9 && mY>=bs*5 && mY <= bs*6.3){
            MouseSelect[1] = true;  //時間制限ボタン
        }else if(mX>=bs*3 && mX<=bs*13 && mY>=bs*13.5 && mY <= bs*15){
            MouseSelect[4] = true;  //決定ボタン
        }else if(mX>=bs*2 && mX<=bs*9 && mY>=bs*8 && mY <= bs*9.3){
            MouseSelect[5] = true;  //体力制ボタン
        }else if(GameMode >= 1){    //制限時間,体力数設定
            if( mX>=bs*4 && mX<=bs*5 && mY>=bs*12 && mY <= bs*13 ){
                MouseSelect[2] = true;  //左ボタン
            }else if(mX>=bs*10 && mX<=bs*11 && mY>=bs*12 && mY <= bs*13 ){
                MouseSelect[3] = true;  //右ボタン
            }                
        }
    }else if(state == "Ready"){
        for(let s = 0; s < MouseSelect.length; s++){ MouseSelect[s] = false; }
        if(OpenOption){
            for(let s = 0; s < 5; s++){
                if( mX>=bs*1.5 && mX<=bs*14.5 && mY>=bs*(1.9+s) && mY <= bs*(2.6+s) ){
                    MouseSelect[s] = true;  //ボタン
                }else{ MouseSelect[s] = false; }
            }
        }else if(mX>=bs*0.8 && mX <= bs*12 && mY >= bs*10 && mY <= bs*11.3 ){
            MouseSelect[5] = true;  //設定ボタン
        }
        if(mX>=bs*0.3 && mX<=bs*15.3 && mY>=winheight-bs*3 && mY <= winheight-bs*1.8 ){
            MouseSelect[6] = true;  //もどるボタン
        }
    }else if(state == "Game" && TimerOn==false){    //ゲーム中断中の設定
        for(let s = 0; s < MouseSelect.length; s++){
            if( mX>=bs*1.5 && mX<=bs*14.5 && mY>=bs*(5.2+s) && mY <= bs*(6+s) ){
                MouseSelect[s] = true;  //ボタン
            }else{ MouseSelect[s] = false; }
        }
    }
}
//マウス(DOWN)イベント
window.onmousedown = function(e)
{
    //座標を取得する
    mX = e.pageX;  //X座標
    mY = e.pageY;  //Y座標
    if(state == "SelectMode"){  //モード選択画面の場合
        if(MouseSelect[0]){ GameMode = 0; }         //タイムアタックに変更
        else if(MouseSelect[1]){ GameMode = 1; }    //時間制限に変更
        else if(MouseSelect[5]){ GameMode = 2; }    //体力制に変更
        else if(MouseSelect[4]){                    //決定
            for(let s = 0; s < MouseSelect.length; s++){ MouseSelect[s] = false; }
            state = "Ready"; //準備完了画面へ
        }else if(GameMode == 1){                    //時間制限を選択中
            if(MouseSelect[2] && TimeLimit >= 60   ){ TimeLimit -= 30; }
            else if(MouseSelect[3] && TimeLimit <= 99*60){ TimeLimit += 30; }
        }else if(GameMode == 2){                    //体力制を選択中
            if(MouseSelect[2] && HeartNumMax > 1 ){ HeartNumMax -= 1; }
            else if(MouseSelect[3] && HeartNumMax < 100){ HeartNumMax += 1; }
        }
    }else if(state == "Ready"){ //準備完了画面の場合
        for(let s = 0; s < option.length; s++ ){
            if(OpenOption == false){ break; }   //設定が開いていれば続行
            if(MouseSelect[s]){ option[s] = !option[s]; }   //選択中の設定をオンオフ逆転
        }
        if(MouseSelect[5] && OpenOption == false){  //設定の変更
            OpenOption = true;  //設定の開閉をオン
        }else if(MouseSelect[6]){                   //ゲームモード選択に戻る
            OpenOption = false; //設定の開閉をオフ
            state = "SelectMode";   //モード選択画面に移動
        }
    }else if(state == "Game" && TimerOn == false){  //ゲーム中断中
        for(let s = 0; s < option.length; s++ ){
            if(MouseSelect[s]){ option[s] = !option[s]; }   //選択中の設定をオンオフ逆転
        }
    }
}
//キー入力（DOWN）イベント
window.onkeydown = function( ev )
{
    gKey[ ev.keyCode ] = 1;
    kc = ev.key;
    KC = ev.keyCode;
    if(state == "Title"){
    }else if(state == "SelectMode"){
        if(kc == " "){              //スペースキー
            for(let s = 0; s < MouseSelect.length; s++){ MouseSelect[s] = false; }
            state = "Ready";    //準備完了画面へ
        }else if(kc == "ArrowUp" && GameMode > 0){      //↑キー
            GameMode --;           //ゲームモードのタイムアタックを選択
        }else if(kc == "ArrowDown" && GameMode < 2){    //↓キー
            GameMode ++;           //ゲームモードの時間制限を選択
        }
        if(GameMode == 1){  //時間制限を選択している場合
            if(kc == "ArrowRight" && TimeLimit <= 99*60){   //→キー & カンスト
                TimeLimit += 30;
            }else if(kc == "ArrowLeft" && TimeLimit >= 60){ //←キー & カンスト
                TimeLimit -= 30;
            }
        }else if(GameMode == 2){
            if(kc == "ArrowLeft" && HeartNumMax > 1 ){ HeartNumMax -= 1; }
            else if(kc == "ArrowRight" && HeartNumMax < 100){ HeartNumMax += 1; }
        }
    }else if(state == "Ready"){
        if(kc == " "){      //スペースキーの場合
            Heart = HeartNumMax;
            StartTime = 3;
            for(let s = 0; s < MouseSelect.length; s++){ MouseSelect[s] = false; }
            state = "Start";
        }else if(kc == "Escape"){ //Escキーの場合
            OpenOption = true;
        }else if(kc == "Backspace"){
            OpenOption = false;
            for(let s = 0; s < MouseSelect.length; s++){ MouseSelect[s] = false; }
            state = "SelectMode";
        }
        if(OpenOption){
            if(KC >= 49 && KC <= 53){   //1~5キーの場合
                option[KC-49] = !option[KC-49]; //オンオフ反転
            }
        }
    }else if(state == "Game"){
        if(KC == 27){   //Escキーの場合
            TimerOn = false; //中断
            return;
        }else if(KC == 32){ //スペースキーの場合
            TimerOn = true;
            return;
        }
        if(TimerOn == false){   //中断中の場合
            if(KC >= 49 && KC <= 53){   //1~5キーの場合
                option[KC-49] = !option[KC-49]; //オンオフ反転
            }
            return;
        }
        let SETypeflg = false;
        let SEMissflg = false;
        if( CanKey(KC) != false ){  //a~z,[,],[-],[.]ならば
            Ans += kc;              //回答に入力したキーを加算
            NumType++;              //タイプ数加算
        }
        if(Ques == null){
            QuesNum++;
        }else if(CanKey(KC) == false){      //
            if(KC != 16){ //ただしShiftキーはのぞく
                Miss++;
                Heart--;
                SEMissflg = true;
            }
        }else if(Check(Ans,Ques)){                            //一文字で正解の場合
            // QuesText[QuesNum] = "";
            if(QuesText[QuesNum+1]!=null){
                let bigsmall = Ques + QuesText[QuesNum+1];
                for(let q = 0; q < Kana2.length; q++){  //Roma2の中で
                    if(bigsmall == Kana2[q][0] || bigsmall == Kana2[q][1]){   //今タイプした文字がKana2だった場合
                        for(let r = 71; r <= 79; r++){  //小文字の中で
                            if(r==76){ continue; }  //「っ」「ッ」はのぞく ↓2文字目の小文字を検索
                            if(bigsmall.substr(1) == Kana1[r][0] || bigsmall.substr(1)==Kana1[r][1]){
                                TypeText[QuesLin][QuesNum+1] = Rome1[r][0]; //小文字のタイプ例記入
                                break;
                            }
                        }
                        break;
                    }
                }
            }
            TypeText[QuesLin][QuesNum] = Ans;
            Ans = "";
            QuesNum++;
            NumWord++;
            Ques = QuesText[QuesNum];
            SETypeflg = true;
        }else if(Check2(Ans,Ques,QuesText[QuesNum+1])){ //「大文字＋小文字」がきて正解の場合(「しゃ」など)
            TypeText[QuesLin][QuesNum] = Ans;
            TypeText[QuesLin][QuesNum+1] = "";  //前回小文字が分離独立していた場合消える
            Ans = "";
            QuesNum+=2;
            NumWord+=2;
            Ques = QuesText[QuesNum];
            SETypeflg = true;
        }else if( (Ques == "っ" || Ques == "ッ") && SmallTSU(Ans) ){      //子音が2連続きて正解の場合
            Ans = Ans.slice(1);
            TypeText[QuesLin][QuesNum] = Ans;
            QuesNum++;
            NumWord++;
            Ques = QuesText[QuesNum];
            SETypeflg = true;
        }else if( ( Ques == "ん" || Ques == "ン" ) && ChildSound(Ans) ){    //「n」の後に子音がきて正解の場合
            Ans = Ans.slice(1);
            QuesNum++;
            NumWord++;
            Ques = QuesText[QuesNum];
            SETypeflg = true;
        }else if(kc=="a"||kc=="i"||kc=="u"||kc=="e"||kc=="o"||kc=="Delete"){
            Ans = "";
            Miss++;
            Heart--;
            SEMissflg = true;
        }else if(QuesText[QuesNum+1]!=null && PossibleTHU(Ans,Ques,QuesText[QuesNum+1]) ){
            //「っ」「ッ」を２つの子音でタイプする状況の除外
            SETypeflg = true;
        }else if(QuesText[QuesNum+1]!=null && Possible2(Ans,Ques,QuesText[QuesNum+1])){
            //次の文字が有りひらカタかな正解途中の場合の除外
            SETypeflg = true;
        }else if( Possible1(Ans,Ques)){
            //次の文字が無くかなで正解途中の場合の除外
            SETypeflg = true;
        }else if( alphabet(Ques) ){ //問題がアルファベットでミスした場合
            Ans = "";
            Miss++;
            Heart--;
            SEMissflg = true;
        }else{
            Ans = "";
            Miss++;
            Heart--;
            SEMissflg = true;
        }
        while(Ques == " " || Ques == "　" || Ques == "" ){
            QuesNum++;
            Ques = QuesText[QuesNum];
        }
        if(option[4] && SETypeflg){ //タイプ音再生
            SEType[SETypeOn].play();
            SETypeOn++;
            if(SETypeOn >= SEType.length){ SETypeOn = 0; }
            kc = "";
        }
        else if(option[4] && SEMissflg){    //ミス音再生
            SEMiss[SEMissOn].play();
            SEMissOn++;
            if(SEMissOn >= SEMiss.length){ SEMissOn = 0; }
        }
        //一行終了判別
        while(QuesNum >= QuesText.length || Ques == null){
            if(QuesLin + 1 >= QuestionText.length ){    //全行終了
                if(GameMode == 0){  //タイムアタックの場合
                    state = "Finish";
                    if(option[4])SEFinish.play(0.1);
                    return;
                }else if(GameMode >= 1){    //時間制、体力制
                    QuesLin = 0;
                    QuesNum = 0;
                    QuesText = Array.from(QuestionText[QuesLin]);   //所定の行(1行目)の文を出題中にする
                    Ques = QuesText[QuesNum];   //出題中の文の所定の列(1文字目)の文字をタイピング中にする 
                    return;   
                }
            }
            QuesLin++;                                      //次の行へ
            QuesText = Array.from(QuestionText[QuesLin]);   //今の行の文字列に切り替え
            QuesNum = 0;                                    //回答中の文字を0文字目にもどす
            Ques = QuesText[0];                             //出題中の文字を0文字目にもどす
        }
        if(GameMode == 2 && Heart <= 0){    //体力制
            state = "Finish";
            if(option[4])SEFinish.play(0.1);
        }
    }else if(state == "Finish"){
        if(kc == " "){
            if(Time <= 0){ Time = 1; }
            state = "Result";
        }
    }else if(state == "Result"){
        if(kc == "Enter"){
            QuesLin = 0;
            QuesNum = 0;
            QuesText = Array.from(QuestionText[QuesLin]);   //所定の行(1行目)の文を出題中にする
            Ques = QuesText[QuesNum];   //出題中の文の所定の列(1文字目)の文字をタイピング中にする    
            NumWord = 0;
            NumType = 0;
            Miss = 0;
            Time = 0;
            PlayTimes++;
            state = "SelectMode";
        }

    }
}
//キー入力（UP）イベント
window.onkeyup = function( ev )
{
    gKey[ ev.keyCode ] = 0;
    kc = "";
}
//ステイト処理
function State()
{
    if(state == "Start"){
        TopTime++;
        if(TopTime >= SECOND){
            StartTime--;
            TopTime = 0;
            if(StartTime <= 0){
                StartTime = 3;
                state = "Game";
            }
        }
    }else if(state=="Game"){
        if(TimerOn){
            TopTime ++;
            if(TopTime >= SECOND){
                Time++;
                TopTime = 0;
            }    
        }
        if(GameMode == 1){  //時間制
            if(Time >= TimeLimit){
                state = "Finish";
                if(option[4])SEFinish.play(0.1);
            }
        }
    }
}
//タイマーイベント発生時の処理
function Timer()
{
    winwidth = window.innerWidth;
    winheight = window.innerHeight;
    State();
    Paint();
}
//ブラウザ起動イベント
window.onload = function()
{
    document.body.addEventListener("mousemove",function(e){
    });
    this.document.body.addEventListener("mouseleave",function(e){
    });
    setInterval( function(){ Timer() },INTERVAL)       //33ms間隔でWmTimer()を呼び出させる(約30.3fps)
}

//「ん＋子音」判定
function ChildSound( a )
{
    if(a=="nk"||a=="ns"||a=="nt"||a=="nh"||a=="nm"||a=="nr"
    ||a=="nw"||a=="ng"||a=="nz"||a=="nj"||a=="nd"||a=="nb"||a=="np"){
        return true;
    }
}
//「っ」判定
function SmallTSU( a )
{
    if(a=="qq"||a=="ww"||a=="rr"||a=="tt"||a=="yy"||a=="pp"||a=="ss"||a=="dd"||a=="ff"||a=="gg"
    ||a=="hh"||a=="jj"||a=="kk"||a=="ll"||a=="zz"||a=="xx"||a=="cc"||a=="vv"||a=="bb"||a=="mm")
    { return true; }
}
//不可能判定
function impossible( a )
{
    if( a.length == 1 ){ return false; }
    if(a!="wh"&&a!="sh"&&a!="ch"&&a!="ts"&&a!="lt"&&a!="ly"&&a!="xt"&&a!="xy"&&a!="ky"&&a!="kw"
    &&a!="sy"&&a!="sw"&&a!="ty"&&a!="cy"&&a!="th"&&a!="tw"&&a!="ny"&&a!="hy"&&a!="fy"&&a!="my"
    &&a!="ry"&&a!="gy"&&a!="zy"&&a!="jy"&&a!="dy"&&a!="dh"&&a!="dw"&&a!="by"&&a!="py")
    { return true; }
}
function PossibleTHU( a, q1, q2 ){  //「っ」「ッ」
    if( q1 != "っ" && q1 != "ッ" ){ return false; } //問題が("っ"か"ッ")か判定
    //aがq2の答えの]頭文字になっているか判定
    for(let k = 0; k < Kana1.length; k++){  //かなから
        if( q2 == Kana1[k][0] || q2 == Kana1[k][1] ){   //q2を検索
            for(let h = 0; h < Rome1[k].length; h++){   //タイプパターンから
                if( a == Rome1[k][h].substr(0,1) ){ return true; }  //aを検索
            }
        }
    }
    return false;
}
function Possible2( a , q1 , q2 ) //ひらカタかなミス判定(2文字)
{
    if(q2!="ぁ"&&q2!="ぃ"&&q2!="ぅ"&&q2!="ぇ"&&q2!="ぉ"&&q2!="ゃ"&&q2!="ゅ"&&q2!="ょ"
    &&q2!="ァ"&&q2!="ィ"&&q2!="ゥ"&&q2!="ェ"&&q2!="ォ"&&q2!="ャ"&&q2!="ュ"&&q2!="ョ")
    { return false; }
    for(let k = 0; k < Kana2.length; k++ ){ //かな2の中で
        if( q1 + q2 == Kana2[k][0] || q1 + q2 == Kana2[k][1] ){ //一致する文字列検索
            for(let r = 0; r < Rome2[k].length; r++){           //ローマ2各パターンから
                if( a == Rome2[k][r].substr(0,a.length)){       //一致するタイプ例検索
                    TypeText[QuesLin][QuesNum] = Rome2[k][r];   //回答中のパターンに書き換え
                    return true;
                }
            }
        }
    }
    return false;
}
function Possible1( a , q )   //ひらカタかなミス判定(1文字)
{
    for(let k = 0; k < Kana1.length; k++ ){ //かなから
        if( q == Kana1[k][0] || q == Kana1[k][1] ){ //qを検索
            for(let r = 0; r < Rome1[k].length; r++){   //タイプパターンから
                if( a == Rome1[k][r].substr(0,a.length)){    //回答＝パターンの途中
                    if(Rome1[k][r]!="nn"){                  //「ん」「ン」を除き
                        TypeText[QuesLin][QuesNum] = Rome1[k][r];   //回答中のパターンに書き換え
                    }
                    return true;
                }
            }
        }
    }
    return false;
}
function alphabet( q )
{
    let code = q.charCodeAt(0);
    if( (code >= 97 && code <= 122) || (code >= 65 && code <= 91) ){ return true; }

}
//答え合わせ
function Check( a, q )
{
    if( a == q ){   //小文字アルファベット一致判定
        return true;
    }
    if( a.charCodeAt() == q.charCodeAt() + 32){ //大文字アルファベット一致判定
        return true;
    }
    for(let k=0; k < Kana1.length; k++){    //出題文字を検索
        if( q == Kana1[k][0] || q == Kana1[k][1] ){ //出題文字と一致した場合
            for(let r = 0; r < Rome1[k].length; r++){   //タイピングパターンを検索
                if( a == Rome1[k][r] ){ //タイピングが正解の場合
                    return true;
                }
            }
        }
    }
    for(let k = 0; k < Kaku.length; k++){   //出題文字を検索
        if( q == Kaku[k][0] || q == Kaku[k][1] ){   //出題文字と一致した場合
            if( a == Kaku[k][0] ){                  //タイピングが正解の場合
                return true;
            }
        }
    }
}

function Check2(a,q1,q2)
{
    for(let k=0; k < Kana2.length; k++){    //出題文字を検索
        if( q1+q2 == Kana2[k][0] || q1+q2 == Kana2[k][1] ){ //出題文字と一致した場合
            for(let r = 0; r < Rome2[k].length; r++){   //タイピングパターンを検索
                if( a == Rome2[k][r] ){ //タイピングが正解の場合
                    return true;
                }
            }
        }
    }
}
function CanType( t )   //タイピングできる文字か(引数：文字)(戻値:真偽)
{
    let s = t.charCodeAt();
    if(s==12432 || s==12433 || s==12528 || s==12529)return false;
    //↑「ゐ、ゑ、ヰ、ヱ」を除外
    if(s!=47 && (s>=44 && s<=57) || s==33 || s==63 )return 2;  //0,1,2,..,9,[,],-,.,!,?
    if(s>=65 && s<=90)return 4;  //A,B,C,..,Z 
    if(s>= 97&& s<=122)return 2; //a,b,c,..,z
    if(s>= 12353&& s<=12435)return true;    //ぁ,あ,ぃ,い,..,ん
    if(s>= 12449&& s<=12532)return true;    //ァ,ア,ィ,イ,..,ン,ヴ
    if(s==12289||s==12290||s==12540||s==65281||s==65311)return 3;    //、,。,ー,！,？
    if(s >= 65296 && s<= 65305)return 3     //０,１,２,..,９
    return false;
}
function CanKey( t ) //タイピングに使用するキーコードか(引数:キーコード)(戻値:真偽)
{
    if( t >= 48 && t <= 57 )return true;  //0,1,2,..,9
    if( t >= 96 && t <= 105 )return true;  //0,1,2,..,9(Tenキー)
    if( t >= 65 && t <= 90 )return true;    //a,b,c,..,z
    if( t >= 188 && t <= 191 )return true;  //「,」,「.」,「-」,「/」(?)
    return false;
}
var file = document.querySelector('#getfile');
file.onchange = function(){
    var fileList = file.files;
    var reader = new FileReader();
    reader.readAsText(fileList[0],'Shift_JIS');

    reader.onload = function(){
        // document.querySelector('#preview').textContent = reader.result;
        var toptext = reader.result.split("");
        // filetext = reader.result.split("");
        let j = 0; QuestionText[0] = "";
        let omit = false;
        let r = 0;
        let countlegth = 0;
        let newline = false;
        for(let i = 0; i < toptext.length; i++){
            if( toptext[i] == "\r" || newline ){   //改行のとき
                newline = false;
                countlegth = 0;
                if(toptext[i] == "\r"){ i+=2; }    //文字をひとつとばす(\n)
                r = 0;
                for(let c = 0; c < QuestionText[j].length-1; c++){  //文頭から文尾まで
                    if(QuestionText[j].slice(c,c+1)!=" "){break;}   //1文字ずつ空白か確認
                    if(c == QuestionText[j].length-2){ j--; }       //全て空白の場合行を無しにする
                }
                if(QuestionText[j]!=""){ j++; } //文が無でないなら改行
                QuestionText[j] = "";   //変数をstringにする/無にもどす
                RomeText[j] = "";       //変数をstringにする
                TypeText[j] = [''];
            }
            if(toptext[i] == null){ continue; }
            AllNumWord ++;
            if(CanType(toptext[i])==true){ //タイピング可の場合
                if(omit == false){      //省略命令がない場合
                    let flg = false;
                    if(toptext[i+1]!=null){ //2文字目が存在する場合
                        let tt2 = toptext[i] + toptext[i+1];
                        for(let k=0; k<Kana2.length; k++){
                            if(tt2==Kana2[k][0] || tt2==Kana2[k][1]){   //大文字+小文字
                                RomeText[j] += Rome2[k][0];
                                TypeText[j][r] = Rome2[k][0];
                                flg = true;
                                omit = true;
                                break;
                            }
                        }
                    }
                    if(flg==false){
                        for(let k=0; k<Kana1.length; k++){
                            if(toptext[i]==Kana1[k][0] || toptext[i]==Kana1[k][1]){ //ひらカタかなを検索
                                RomeText[j] += Rome1[k][0];
                                TypeText[j][r] = Rome1[k][0];
                            }
                            if(toptext[i+1]!=null && consonant(k) &&    //2文字目存在＆子音の場合
                            countlegth <= 26 &&
                            (toptext[i+1]==Kana1[k][0] || toptext[i+1]==Kana1[k][1])){  //文字検索
                                if(toptext[i]=="っ" || toptext[i]=="ッ"){
                                    RomeText[j] += Rome1[k][0].substr(0,1);     //その文字の
                                    TypeText[j][r] = Rome1[k][0].substr(0,1);   //母音を挿入
                                    break;  //↓「ん」か「ン」で次の文字が
                                }else if( (toptext[i]=="ん" || toptext[i]=="ン")    //↓あ、な、や行でない場合
                                    && k >= 5 && ( k < 20 || k > 24 ) && ( k < 35 || k > 37 ) ){  
                                    RomeText[j] += "n";         //nを一つだけにする
                                    TypeText[j][r] = "n";       //nを一つだけにする
                                    break;
                                }
                            }
                        }
                    }
                }else{
                    omit = false;
                }
            }else if(CanType(toptext[i]) == 2){     //半角英数の場合
                RomeText[j] += toptext[i];
                TypeText[j][r] = toptext[i];
            }else if(CanType(toptext[i]) == 3){     //全角数、記号の場合
                for(let k = 0; k < Kaku.length; k++ ){
                    if(toptext[i] == Kaku[k][1]){
                        RomeText[j] += Kaku[k][0];
                        TypeText[j][r] = Kaku[k][0];
                        break;
                    }
                }
            }else if(CanType(toptext[i]) == 4){     //大文字英字の場合
                RomeText[j] += String.fromCharCode(toptext[i].charCodeAt(0) + 32);
                TypeText[j][r] = String.fromCharCode(toptext[i].charCodeAt(0) + 32);
            }else{                   //タイピング不可の場合
                AllNumWord--;
                if(r > 0 && TypeText[j][r-1] != " "){
                    toptext[i] = " ";            //空白にする
                    TypeText[j][r] = " ";
                }else{
                    toptext[i] = "";            //つめる
                    r--;
                }
            }
            if(toptext[i] == "\n"){ continue; }
            r++;
            QuestionText[j] += toptext[i];  //文字を文に追加
            if(toptext[i].charCodeAt() <= 122 ){
                countlegth += 1*toptext[i].length;  //半角
            }else{
                countlegth += 2*toptext[i].length;  //全角
            }
            if(countlegth >= 30 && omit == false){   //文の長さがあふれたら
                newline = true;
            }
        }
        QuesText = Array.from(QuestionText[QuesLin]);   //所定の行(1行目)の文を出題中にする
        Ques = QuesText[QuesNum];   //出題中の文の所定の列(1文字目)の文字をタイピング中にする
        document.getElementById("getfile").style.visibility="hidden";   //ボタンを消す
        state = "SelectMode";        //ステイトを準備完了にする
    };
};

function consonant( k ) //子音
{
    if( ( ( k >= 0 && k <= 70 ) || k == 80 ) && ( k != 45 ) ){ return true; }
    return false;
}