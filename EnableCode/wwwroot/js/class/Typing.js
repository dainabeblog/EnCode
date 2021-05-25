// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
// breif : タイピングクラス
// note  :
// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----

var codelist = {
    8: ["BackSpase", "BackSpace"], 9: ["Tab", "Tab"], 13: ["Enter", "Enter"], 16: ["Shift", ""], 17: ["Ctrl", ""]
    , 20: ["", "caps"], 32: [" ", " "], 45: ["-", "="], 48: ["0", ""], 49: ["1", "!"], 50: ["2", '"'], 51: ["3", "#"]
    , 52: ["4", "$"], 53: ["5", "%"], 54: ["6", "&"], 55: ["7", "'"], 56: ["8", "("], 57: ["9", ")"], 58: [":", "*"]
    , 59: [";", "+"], 61: [";", "+"], 64: ["@", "`"], 65: ["a", "A"], 66: ["b", "B"], 67: ["c", "C"], 68: ["d", "D"]
    , 69: ["e", "E"], 70: ["f", "F"], 71: ["g", "G"], 72: ["h", "H"], 73: ["i", "I"], 74: ["j", "J"], 75: ["k", "K"]
    , 76: ["l", "L"], 77: ["m", "M"], 78: ["n", "N"], 79: ["o", "O"], 80: ["p", "P"], 81: ["q", "Q"], 82: ["r", "R"]
    , 83: ["s", "S"], 84: ["t", "T"], 85: ["u", "U"], 86: ["v", "V"], 87: ["w", "W"], 88: ["x", "X"], 89: ["y", "Y"]
    , 90: ["z", "Z"], 92: ["\\", "_"], 96: ["0", ""], 97: ["1", ""], 98: ["2", ""], 99: ["3", ""], 100: ["4", ""], 101: ["5", ""]
    , 102: ["6", ""], 103: ["7", ""], 104: ["8", ""], 105: ["9", ""], 107: [";", "+"], 109: ["-", "="], 160: ["^", "~"]
    , 173: ["-", "="], 186: [":", "*"], 187: [";", "+"], 188: [",", "＜"], 189: ["-", "="], 190: [".", "＞"], 191: ["/", "?"]
    , 192: ["@", "`"], 219: ["[", "{"], 220: ["\\", "_"], 221: ["]", "}"], 222: ["^", "~"], 226: ["\\", "_"], 222: ["^", "~"]
    , 240: ["英数", ""], 244: ["半/全", ""]
};

var capslist = {
    8: ["BackSpase", "BackSpace"], 9: ["Tab", "Tab"], 13: ["Enter", "Enter"], 16: ["Shift", ""], 17: ["Ctrl", ""]
    , 20: ["", "caps"], 32: [" ", " "], 45: ["-", "="], 48: ["0", ""], 49: ["1", "!"], 50: ["2", '"'], 51: ["3", "#"]
    , 52: ["4", "$"], 53: ["5", "%"], 54: ["6", "&"], 55: ["7", "'"], 56: ["8", "("], 57: ["9", ")"], 58: [":", "*"]
    , 59: [";", "+"], 61: [";", "+"], 64: ["@", "`"], 65: ["A", "a"], 66: ["B", "b"], 67: ["C", "c"], 68: ["D", "d"]
    , 69: ["E", "e"], 70: ["F", "f"], 71: ["G", "g"], 72: ["H", "h"], 73: ["I", "i"], 74: ["J", "j"], 75: ["K", "k"]
    , 76: ["L", "l"], 77: ["M", "m"], 78: ["N", "n"], 79: ["O", "o"], 80: ["P", "p"], 81: ["Q", "q"], 82: ["R", "r"]
    , 83: ["S", "s"], 84: ["T", "t"], 85: ["U", "u"], 86: ["V", "v"], 87: ["W", "w"], 88: ["X", "x"], 89: ["Y", "y"]
    , 90: ["Z", "z"], 92: ["\\", "_"], 96: ["0", ""], 97: ["1", ""], 98: ["2", ""], 99: ["3", ""], 100: ["4", ""], 101: ["5", ""]
    , 102: ["6", ""], 103: ["7", ""], 104: ["8", ""], 105: ["9", ""], 107: [";", "+"], 109: ["-", "="], 160: ["^", "~"]
    , 173: ["-", "="], 186: [":", "*"], 187: [";", "+"], 188: [",", "＜"], 189: ["-", "="], 190: [".", "＞"], 191: ["/", "?"]
    , 192: ["@", "`"], 219: ["[", "{"], 220: ["\\", "_"], 221: ["]", "}"], 222: ["^", "~"], 226: ["\\", "_"], 222: ["^", "~"]
    , 240: ["英数", ""], 244: ["半/全", ""]
};

var leftcode = {
    "!": "", '"': "", "#": "", "$": "", "%": "", "&": "", "Q": "", "W": "", "E": "", "R": "", "T": "", "A": "", "S": ""
    , "D": "", "F": "", "G": "", "Z": "", "X": "", "C": "", "V": "", "B": ""
};

var leftcaps = {
    "!": "", '"': "", "#": "", "$": "", "%": "", "&": "", "q": "", "w": "", "e": "", "r": "", "t": "", "a": "", "s": ""
    , "d": "", "f": "", "g": "", "z": "", "x": "", "c": "", "v": "", "b": ""
};

var eachactive = { "\\": "220", "|": "220", "_": "226", ";": "187", "+": "187", ":": "186", "*": "186" };

var keyboardHTML = ''
    + '<table id="keyboard">'
    + '<tr class="tr0">'
    + '<td colspan="30" class="col30">'
    + '<span class="col key code027">Esc</span>'
    + '<span class="col key">F1</span>'
    + '<span class="col key">F2</span>'
    + '<span class="col key">F3</span>'
    + '<span class="col key">F4</span>'
    + '<span class="col key">F5</span>'
    + '<span class="col key">F6</span>'
    + '<span class="col key">F7</span>'
    + '<span class="col key">F8</span>'
    + '<span class="col key">F9</span>'
    + '<span class="col key">F10</span>'
    + '<span class="col key">F11</span>'
    + '<span class="col key">F12</span>'
    + '<span class="col key">Num</span>'
    + '<span class="col key">Prt</span>'
    + '<span class="col key">Ins</span>'
    + '<span class="col key">Del</span>'
    + '</td>'
    + '</tr>'
    + '<tr class="tr1">'
    + '<td colspan="1" class="col1 key"><div class="table code244">半</div></td>'
    + '<td colspan="2" class="col2 key"><div class="table code049">1<span class="subkey">!</span></div></td>'
    + '<td colspan="2" class="col2 key"><div class="table code050">2<span class="subkey">”</span></div></td>'
    + '<td colspan="2" class="col2 key"><div class="table code051">3<span class="subkey">#</span></div></td>'
    + '<td colspan="2" class="col2 key"><div class="table code052">4<span class="subkey">$</span></div></td>'
    + '<td colspan="2" class="col2 key"><div class="table code053">5<span class="subkey">%</span></div></td>'
    + '<td colspan="2" class="col2 key"><div class="table code054">6<span class="subkey">&</span></div></td>'
    + '<td colspan="2" class="col2 key"><div class="table code055">7<span class="subkey">’</span></div></td>'
    + '<td colspan="2" class="col2 key"><div class="table code056">8<span class="subkey">（</span></div></td>'
    + '<td colspan="2" class="col2 key"><div class="table code057">9<span class="subkey">）</span></div></td>'
    + '<td colspan="2" class="col2 key"><div class="table code048">0</div></td>'
    + '<td colspan="2" class="col2 key"><div class="table code189 code109 code173 code045">-<span class="subkey">=</span></div></td>'
    + '<td colspan="2" class="col2 key"><div class="table code222 code160">^<span class="subkey">~</span></div></td>'
    + '<td colspan="2" class="col2 key"><div class="table code220">\<span class="subkey">|</span></div></td>'
    + '<td colspan="3" class="col3 key"><div class="table code008">Back</div></td>'
    + '</tr>'
    + '<tr class="tr2">'
    + '<td colspan="2" class="col2 key"><div class="table code009">Tab</div></td>'
    + '<td colspan="2" class="col2 key"><div class="table code081">Q</div></td>'
    + '<td colspan="2" class="col2 key"><div class="table code087">W</div></td>'
    + '<td colspan="2" class="col2 key"><div class="table code069">E</div></td>'
    + '<td colspan="2" class="col2 key"><div class="table code082">R</div></td>'
    + '<td colspan="2" class="col2 key"><div class="table code084">T</div></td>'
    + '<td colspan="2" class="col2 key"><div class="table code089">Y</div></td>'
    + '<td colspan="2" class="col2 key"><div class="table code085">U</div></td>'
    + '<td colspan="2" class="col2 key"><div class="table code073">I</div></td>'
    + '<td colspan="2" class="col2 key"><div class="table code079">O</div></td>'
    + '<td colspan="2" class="col2 key"><div class="table code080">P</div></td>'
    + '<td colspan="2" class="col2 key"><div class="table code192 code064">@<span class="subkey">`</span></div></td>'
    + '<td colspan="2" class="col2 key"><div class="table code219">[<span class="subkey">{</span></div></td>'
    + '<td colspan="1" class="col1 key"></td>'
    + '<td colspan="3" rowspan="2" class="col3 key"><div class="table code013 row2">Enter</div></td>'
    + '</tr>'
    + '<tr class="tr3">'
    + '<td colspan="3" class="col3 key"><div class="table code240 code020">英数</div></td>'
    + '<td colspan="2" class="col2 key"><div class="table code065">A</div></td>'
    + '<td colspan="2" class="col2 key"><div class="table code083">S</div></td>'
    + '<td colspan="2" class="col2 key"><div class="table code068">D</div></td>'
    + '<td colspan="2" class="col2 key"><div class="table code070">F</div></td>'
    + '<td colspan="2" class="col2 key"><div class="table code071">G</div></td>'
    + '<td colspan="2" class="col2 key"><div class="table code072">H</div></td>'
    + '<td colspan="2" class="col2 key"><div class="table code074">J</div></td>'
    + '<td colspan="2" class="col2 key"><div class="table code075">K</div></td>'
    + '<td colspan="2" class="col2 key"><div class="table code076">L</div></td>'
    + '<td colspan="2" class="col2 key"><div class="table code187 code107 code059">;<span class="subkey">+</span></div></td>'
    + '<td colspan="2" class="col2 key"><div class="table code186 code058">:<span class="subkey">*</span></div></td>'
    + '<td colspan="2" class="col2 key"><div class="table code221">]<span class="subkey">}</span></div></td>'
    + '</tr>'
    + '<tr class="tr4">'
    + '<td colspan="4" class="col4 key"><div class="table code016 code020">Shift</div></td>'
    + '<td colspan="2" class="col2 key"><div class="table code090">Z</div></td>'
    + '<td colspan="2" class="col2 key"><div class="table code088">X</div></td>'
    + '<td colspan="2" class="col2 key"><div class="table code067">C</div></td>'
    + '<td colspan="2" class="col2 key"><div class="table code086">V</div></td>'
    + '<td colspan="2" class="col2 key"><div class="table code066">B</div></td>'
    + '<td colspan="2" class="col2 key"><div class="table code078">N</div></td>'
    + '<td colspan="2" class="col2 key"><div class="table code077">M</div></td>'
    + '<td colspan="2" class="col2 key"><div class="table code188">,<span class="subkey"><</span></div></td>'
    + '<td colspan="2" class="col2 key"><div class="table code190">.<span class="subkey">></span></div></td>'
    + '<td colspan="2" class="col2 key"><div class="table code191">/<span class="subkey">?</span></div></td>'
    + '<td colspan="2" class="col2 key"><div class="table code226">\<span class="subkey">_</span></div></td>'
    + '<td colspan="2" class="col2 key"><div class="table">↑</div></td>'
    + '<td colspan="2" class="col2 key"><div class="table code016">Shift</div></td>'
    + '</tr>'
    + '<tr class="tr5">'
    + '<td colspan="2" class="col2 key"><div class="table">Ctrl</div></td>'
    + '<td colspan="2" class="col2 key"><div class="table">Fn</div></td>'
    + '<td colspan="2" class="col2 key"><div class="table">Win</div></td>'
    + '<td colspan="2" class="col2 key"><div class="table">Alt</div></td>'
    + '<td colspan="2" class="col2 key"><div class="table">無</div></td>'
    + '<td colspan="5" class="col5 key"><div class="table code032"></div></td>'
    + '<td colspan="2" class="col2 key"><div class="table">変</div></td>'
    + '<td colspan="2" class="col2 key"><div class="table">か</div></td>'
    + '<td colspan="2" class="col2 key"><div class="table">Alt</div></td>'
    + '<td colspan="1" class="col1 key"><div class="table">App</div></td>'
    + '<td colspan="2" class="col2 key"><div class="table">Ctrl</div></td>'
    + '<td colspan="2" class="col2 key"><div class="table">←</div></td>'
    + '<td colspan="2" class="col2 key"><div class="table">↓</div></td>'
    + '<td colspan="2" class="col2 key"><div class="table">→</div></td>'
    + '</tr>'
    + '</table>';

class Typing {

    // ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
    // breif : コンストラクタ
    // note  :
    // ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
    constructor() {

        this.capslock = ""
    }

    // ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
    // breif : キーボードのhtmlを挿入
    // note  : 
    // ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
    insertKeyboard(id) {
        document.getElementById(id).innerHTML = keyboardHTML;
    }

    // ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
    // breif : 入力した文字を取得
    // note  : 
    // ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
    checkWord(event) {

        var keycode, shiftcode, chara

        keycode = event.keyCode;
        shiftcode = event.shiftKey;

        if (this.capslock == 1) {
            chara = this.getcapschar(keycode, shiftcode);
        } else {
            chara = this.getchar(keycode, shiftcode);
        }

        return chara;
    }

    // ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
    // breif : CapsLockを判定して取得
    // note  : 
    // ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
    checkCapsLock(onKeyUpEvent) {

        if (onKeyUpEvent.getModifierState("CapsLock") == false) {
            console.log("CapsLock OFF");
            this.capslock = 0;
        }
        else {
            console.log("CapsLock ON");
            this.capslock = 1;
        }

        return this.capslock;
    }

    // ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
    // breif : キーコードとシフト押下状態から文字を取得
    // note  : CapsLock OFF
    // ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
    getchar(keycode, shiftcode) {
        var chara;

        if (keycode in codelist) {
            if (shiftcode) {
                chara = codelist[keycode][1];
            } else {
                chara = codelist[keycode][0];
            }
        } else {
            chara = "";
        }
        return chara;
    }

    // ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
    // breif : キーコードとシフト押下状態から文字を取得
    // note  : CapsLock ON
    // ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
    getcapschar(keycode, shiftcode) {
        var chara;

        if (keycode in capslist) {
            if (shiftcode) {
                chara = capslist[keycode][1];
            } else {
                chara = capslist[keycode][0];
            }
        } else {
            chara = "";
        }
        return chara;
    }

    // ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
    // breif : キーボードの色状態を更新
    // note  : 
    // ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
    active(statement, numOfStatement) {

        var ichi = numOfStatement;          // 問題文の位置（何番目）
        var mondai = statement;             // 問題文
        var mondailen = statement.length;   // 問題文の長さ

        var left, list;

        this.resetactive();
        if (this.capslock == 1) {
            // CapsLock:ON
            left = leftcaps;
            list = capslist;
        } else {
            // CapsLock:OFF
            left = leftcode;
            list = codelist;
        }
        if (ichi != mondailen) {
            for (var i in list) {
                if (list[i][0] == mondai.charAt(ichi)) {
                    if (mondai.charAt(ichi) in eachactive) {
                        this.setactive("code" + ('00' + eachactive[mondai.charAt(ichi)]).slice(-3), 0);
                    } else {
                        this.setactive("code" + ('00' + i).slice(-3), 0);
                    }
                } else if (list[i][1] == mondai.charAt(ichi)) {
                    if (mondai.charAt(ichi) == "_") {
                        this.setactive("code226", 0);
                    } else if (mondai.charAt(ichi) == "|") {
                        this.setactive("code220", 0);
                    } else {
                        this.setactive("code" + ('00' + i).slice(-3), 0);
                    }
                    if (list[i][1] in left) {
                        this.setactive("code016", 1);
                    } else {
                        this.setactive("code016", 0);
                    }
                }
            }
        }
    }

    // ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
    // breif : 対象のキーを色付けする。
    // note  : targetClass -> 色付けするクラス
    //         targetNo    -> 色付けする対象が複数ある場合の何番目かどうか
    // ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
    setactive(targetClass, targetNo) {
        var allElements;
        var elementname;

        var foundElements = new Array();
        if (document.all) {
            allElements = document.all;
        } else {
            allElements = document.getElementsByTagName("*");
        }
        var elementslen;
        var j = 0;
        for (var i = 0, elementslen = allElements.length; i < elementslen; i++) {
            elementname = allElements[i].className;
            if (elementname.indexOf(targetClass, 0) > -1) {
                foundElements[j] = allElements[i];
                j++;
            }
        }
        foundElements[targetNo].style.background = "#00ffff";
    }

    // ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
    // breif : キーの色付けを解除する。
    // note  :
    // ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
    resetactive() {
        var allElements;
        var elementname;

        if (document.all) {
            allElements = document.all;
        } else {
            allElements = document.getElementsByTagName("*");
        }
        var elementslen;
        for (var i = 0, elementslen = allElements.length; i < elementslen; i++) {
            elementname = allElements[i].className;
            if (elementname.indexOf("table", 0) > -1) {
                allElements[i].style.background = "#ffffff";
            }
        }
    }
}