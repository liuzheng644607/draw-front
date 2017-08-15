/**
 * @Author: liuyan
 * @Date:   2017-08-15T17:03:05+08:00
 * @Email:  liu-yaner@foxmail.com
 * @Last modified by:   liuyan
 * @Last modified time: 2017-08-15T21:41:10+08:00
 */

class Pen {
    constructor(ctx) {
        this.ctx = ctx;
        this.points = [];
    }

    start(e) {
        var touch = e.touches[0];
        this.ctx.setLineCap('round');
        this.points.push({
            x: touch.x,
            y: touch.y,
            width: getRandomInt(3, 5)
        });
    }

    move(e) {
        var touch = e.touches[0];
        var ctx = this.ctx;
        var points = this.points;

        points.push({
            x: touch.x,
            y: touch.y,
            width: getRandomInt(3, 5)
        });

        this.points = points = points.slice(-100);

        for (var i = 1, len = points.length; i < len; i++) {
            ctx.beginPath();
            ctx.moveTo(points[i - 1].x, points[i - 1].y);
            ctx.setLineWidth(points[i].width);
            ctx.lineTo(points[i].x, points[i].y);
            ctx.stroke();
        }

        ctx.draw(true);
    }

    end() {
        this.points.length = 0;
    }
}

module.exports = Pen;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
