/**
 * @Author: liuyan
 * @Date:   2017-08-15T17:03:05+08:00
 * @Email:  liu-yaner@foxmail.com
 * @Last modified by:   liuyan
 * @Last modified time: 2017-08-15T18:47:26+08:00
 */

class Base {
    constructor(ctx) {
        this.ctx = ctx;
        this.points = [];
    }

    start(e) {
        var touch = e.touches[0];
        var ctx = this.ctx;
        ctx.moveTo(touch.x, touch.y);
        ctx.lineTo(touch.x, touch.y);
        ctx.stroke();
        ctx.draw(true);
    }

    move(e) {
        var touch = e.touches[0];
        var ctx = this.ctx;
        ctx.lineTo(touch.x, touch.y);
        ctx.stroke();
        ctx.draw(true);
        ctx.moveTo(touch.x, touch.y);
    }

    end() {}
}

module.exports = Base;
