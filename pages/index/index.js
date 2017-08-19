//index.js
//获取应用实例
var brushes = require('./brush');
var pen;
var app = getApp();
Page({
    data: {
        motto: 'Hello World',
        sysInfo: {},
        userInfo: {}
    },

    initCanvas: function() {
        var ctx = (this.canvasCtx = wx.createCanvasContext('my-canvas'));
        ctx.setStrokeStyle('#000000');
        ctx.setLineCap('round');
        ctx.setLineWidth(4);

        brushes.init(ctx);
        pen = brushes.getBrush('pen');
    },

    onTouchStart: function(e) {
        pen.start(e);
    },

    onTouchMove: function(e) {
        pen.move(e);
    },

    onTouchEnd: function(e) {
        pen.end(e);

        var self = this;
        self.drawHistory = this.drawHistory || [];
        wx.canvasToTempFilePath({
            canvasId: 'my-canvas',
            success: function(res) {
                self.drawHistory.push(res.tempFilePath);
            }
        });
    },

    revoke: function() {
        this.drawHistory.pop();
        console.log(this.drawHistory);
        console.log(this.canvasCtx);
        var lastIndex = this.drawHistory.length - 1;
        var path = this.drawHistory[lastIndex];
        if (path) {
            this.canvasCtx.drawImage(path);
        } else {
            this.canvasCtx.clearRect(
                0,
                0,
                this.data.sysInfo.windowWidth,
                this.data.sysInfo.windowWidth
            );
        }
        this.canvasCtx.draw();
    },

    /**
     * 使用橡皮擦
     * @return {[type]} [description]
     */
    useEraser: function() {
        this.canvasCtx.setStrokeStyle('#ffffff');
    },

    initApp: function() {
        var self = this;
        wx.getSystemInfo({
            success: function(res) {
                self.setData({
                    sysInfo: res
                });
            }
        });

        //调用应用实例的方法获取全局数据
        app.getUserInfo(function(userInfo) {
            //更新数据
            self.setData({
                userInfo: userInfo
            });
        });
        this.drawHistory = []
    },

    onReady: function() {
        this.initApp();
        this.initCanvas();
    }
});
