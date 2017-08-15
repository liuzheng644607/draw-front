/**
 * @Author: liuyan
 * @Date:   2017-08-15T17:03:56+08:00
 * @Email:  liu-yaner@foxmail.com
 * @Last modified by:   liuyan
 * @Last modified time: 2017-08-15T18:47:14+08:00
 */

class BaseBrush {
    constructor(ctx) {
        this.ctx = ctx;
        this.points = [];
    }

    start(e) {
        var touch = e.touches[0];
        this.points.push({ x: touch.x, y: touch.y });
    }

    move(e) {
        var touch = e.touches[0];
        var ctx = this.ctx;
        this.points.push({ x: touch.x, y: touch.y });
        ctx.beginPath();
        ctx.moveTo(this.points[0].x, this.points[0].y);

        for (var i = 1; i < this.points.length; i++) {
            ctx.lineTo(this.points[i].x, this.points[i].y);
        }

        ctx.stroke();
        ctx.draw(true);
    }

    end() {
        this.points.length = 0;
    }
}

module.exports = BaseBrush;
