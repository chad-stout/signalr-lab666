/// <reference path="../Scripts/jquery-1.6.4-vsdoc.js" />

$(function () {
    var doge = $('#doge');
    var hub = $.connection.soDogeHub;

    hub.client.soMoved = function (cid, x, y) {
        if ($.connection.hub.id !== cid) {
            $(doge).css({ left: x, top: y });
        }
    };

    $.connection.hub.start().done(function () {
        $(doge).mouseup(function () {
            phrase();
        }).draggable({
            containment: 'parent',
            drag: function () {
                hub.server.muchMoved(this.offsetLeft, this.offsetTop || 0);
            }
        })        
    });

    var phrase = function() {
        var fw = ['so', 'much', 'very', 'so', 'much', 'very', ''];
        var sw = ['drag', 'drop', 'transition', 'wow', 'signalr', 'jquery', 'websockets'];
        var c = ['#FF5CF5', '#33D6FF', '#FF3399', '#4747D1'];
        var pmin = 12, pmax = 36;
        var lmin = 25, lmax = 500;

        var t = fw[Math.floor(Math.random() * fw.length)] + ' ' + sw[Math.floor(Math.random() * sw.length)];
        $('#phrase')
            .text(t)
            .css({
                'color': c[Math.floor(Math.random() * c.length)],
                'font-size': Math.floor(Math.random() * (pmax - pmin + 1) + pmin) + 'px',
                'top': Math.floor(Math.random() * (lmax - lmin + 1) + lmin) + 'px',
                'left': Math.floor(Math.random() * (lmax - lmin + 1) + lmin) + 'px'
            });
    }
});