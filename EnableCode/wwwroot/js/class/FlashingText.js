// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
// breif : 点滅テキストクラス
// note  :
// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
class FlashingText {

    // ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
    // breif : コンストラクタ
    // note  : 引数 id     -> htmlのIDタグ
    //              msg    -> IDタグに表示させるメッセージ
    //              onTime -> 点灯時間[mm秒]
    //              offTime-> 消灯時間[mm秒]
    //              flag   -> 0:表示, 1:非表示    
    // ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
    constructor(id, msg, onTime, offTime, flag) {

        this.id = id;
        this.msg = msg;
        this.onTime = onTime;
        this.offTime = offTime;
        this.flag = flag;

        this.isFlashing = 1;    // 1:点滅させる　0:点滅させない
    }

    // setter
    setMsg(msg) { this.msg = msg; }
    setIsFlashing(isFlashing) {
        this.isFlashing = isFlashing;
        // alert("isFlashing:" + this.isFlashing);
    }

    // ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
    // breif : テキストを点滅させる
    // note  : 
    // ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
    flash() {

        // 指定IDのテキストを取得
        var element = document.getElementById(this.id);
        var interval;

        if (this.flag == 0) {

            // テキストを表示
            element.innerHTML = this.msg;
            this.flag = 1;
            interval = this.onTime;
        }
        else {

            // テキストを非表示
            element.innerHTML = "";
            this.flag = 0;
            interval = this.offTime;
        }

        if (this.isFlashing == 1 || (this.isFlashing == 0 && this.flag == 0)) {
            var self = this;
            setTimeout(function () { self.flash(); }, interval);
        }
    }
}