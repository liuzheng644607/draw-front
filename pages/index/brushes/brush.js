/**
 * @Author: liuyan
 * @Date:   2017-08-16T10:12:59+08:00
 * @Email:  liu-yaner@foxmail.com
 * @Last modified by:   liuyan
 * @Last modified time: 2017-08-16T10:31:45+08:00
 */

var img = '../../source/brush21.png';

class Brush {
    constructor(ctx) {
        this.ctx = ctx;
        this.points = [];
        this.lastPoint = {};
    }

    start(e) {
        var touch = e.touches[0];
        this.isDrawing = true;
        this.lastPoint = { x: touch.x, y: touch.y };
    }

    move(e) {
        var touch = e.touches[0];
        var ctx = this.ctx;

        if (!this.isDrawing) return;

        var currentPoint = { x: touch.x, y: touch.y };
        var lastPoint = this.lastPoint;
        var dist = distanceBetween(lastPoint, currentPoint);
        var angle = angleBetween(lastPoint, currentPoint);

        for (var i = 0; i < dist; i++) {
            var x = lastPoint.x + Math.sin(angle) * i - 25;
            var y = lastPoint.y + Math.cos(angle) * i - 25;
            ctx.drawImage(img, x, y);
        }

        ctx.draw(true);

        this.lastPoint = lastPoint = currentPoint;
    }

    end() {
        this.isDrawing = false;
    }
}

module.exports = Brush;

function distanceBetween(point1, point2) {
    return Math.sqrt(
        Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2)
    );
}
function angleBetween(point1, point2) {
    return Math.atan2(point2.x - point1.x, point2.y - point1.y);
}
