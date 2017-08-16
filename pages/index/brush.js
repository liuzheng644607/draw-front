var BaseBrush = require('./brushes/pointBase');
var Base = require('./brushes/base');
var Pen = require('./brushes/pen');
var Brush = require('./brushes/brush');

var brushes;

module.exports = {
    ready: false,
    init: function(ctx, option) {
        if (this.ready) {
            return;
        }

        brushes = {
            pointBased: new BaseBrush(ctx),
            base: new Base(ctx),
            pen: new Pen(ctx),
            brush: new Brush(ctx)
        };

        this.ready = true;
    },

    getBrush: function(name) {
        return brushes[name];
    }
};
