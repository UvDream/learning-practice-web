var dtStart;
var dtEnd;
var tmDelta = -1;
['23:59','00:00','00:05'].sort(function($a, $b){
    var tmA = (new Date($a)).getTime();
    var tmB = (new Date($b)).getTime();

    var delta = Math.abs(tmA - tmB);
    if(tmDelta == -1 || delta > tmDelta)
    {
        tmDelta = delta;
        dtStart = $a;
        dtEnd   = $b;
    }

    return tmA - tmB;
})
var a = (new Date(dtEnd)).getTime();
var b = (new Date(dtStart)).getTime();
var c=Math.abs(a - b);
console.log(c);
console.log(dtStart, dtEnd)