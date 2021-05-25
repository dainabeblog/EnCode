// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
// breif : 指定したファイルを読み込んで配列を返す。
// note  : 改行で区切る。
// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
function readTextFileToArray(file) {
    
    var array;
    
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                // alert(allText);
                
                array = allText.split(/[\r\n]+/);
            }
        }
    }
    rawFile.send(null);
    
    return array;
}