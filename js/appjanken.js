/*//じゃんけんの手の番号を設定
const GU    = 1;
const CHOKI = 2;
const PA    = 3;

//ジャンケンの入力ダイアログボックスを表示
let hum = prompt('半角数字で１〜3の数字を入力してください。\n\n' + GU + ':グー\n' + CHOKI + ':チョキ\n' + PA +':パー');
hum = parseInt(hum, 10);

//入力値のチェック
if (hum !== GU && hum !== CHOKI && hum !== PA) {
    //入力値が不適切な場合
    alert('入力値をうまく認識できませんでした。」ブラウザを再読み込みすると、もう一度挑戦できます。');
}else{
    //コンピュータの手を決める
    let com = Math.floor(Math.random() * 3 ) + 1;

    //コンピュータの手の名前
    let comHandName = '';
    switch (com) {
        case GU:
            comHandName = 'グー';
            break;
        case CHOKI:
            comHandName = 'チョキ';
            break;
        case PA:
            comHandName = 'パー';
            break;
    }
    //結果の判定
    let msgResult = '';
    if(hum === com){
        msgResult = '結果はあいこでした。';
    } else if ((com === GU && hum === PA) || (com === CHOKI && hum === GU) || (com === PA && hum === CHOKI)) {
        msgResult = '勝ちました。';
    } else {
        msgResult = '負けました。';
    }

    //最終的な結果の表示
    msgResult = msgResult + 'コンピューターの出した手は「' + comHandName + '」でした。';
    alert(msgResult);
}
*/


function janken(params) {
    

    /* 変数定義　                  */
    //ジャンケンの手の番号を設定
    const GU    = 1;
    const CHOKI = 2;
    const PA    = 3;

    /* 関数定義　                  */
    // 人間に手を入力してもらう機能
    function getHumHand() {
        let hum = prompt('半角数字で１〜3の数字を入力してください。\n\n' + GU + ':グー\n' + CHOKI + ':チョキ\n' + PA +':パー');
        hum = parseInt(hum, 10);
        if (hum !== GU && hum !== CHOKI && hum !== PA) {
            return undefined;
        }else{
            return hum;
        }
    }
    // コンピュターの手を決める
    function getComHand() {
        return Math.floor(Math.random() * 3) + 1;
    }

    //コンピュターの手の名前を取得
    function getHandName(num) {
        switch (num) {
            case GU:
                return 'グー';
            case CHOKI:
                return 'チョキ';
            case PA:
                return 'パー';
        }
    }
    //結果の判定
    function getResult (com, hum) {
        if (hum === com ) {
            return '結果はあいこでした。';
        }else if ((com === GU && hum === PA) || (com === CHOKI && hum === GU) || (com === PA && hum === CHOKI)) {
            return '勝ちました。';
        } else {
            return '負けました。';
        } 
    }

    //最終的な結果のメッセージ
    function getResultMsg(com, hum) {
        return getResult(com, hum) + 'コンピュターの出した手は　「'+　getHandName(com) + '」でした。';
    }
    /*　実行する処理　              */
    let hum = getHumHand();
    if(!hum) {
        alert('入力値をうまく認識できませんでした。」ブラウザを再読み込みすると、もう一度挑戦できます。');
    }else {
        let com = getComHand();
        console.log(com); //この行は動作確認したらすぐ消す
        alert(getResultMsg(com,hum));
        return getResult(com,hum);
    }
}
let win = 0;
let isLose = false;
while(!isLose){
    let result = janken();
    if (result === '結果はあいこでした。') {
        continue;   
    }
    if(result === '勝ちました。'){
        win++;
        alert('ただいま「' + win + '」勝です。');
        continue;
    }
    alert('連勝はストップです。記録は「' + win + '」勝でした。');
    isLose = true;
}
