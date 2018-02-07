webpackHotUpdate(0,{

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(6);
var index_2 = __webpack_require__(4);
var Tipologie = __webpack_require__(3);
var buff_1 = __webpack_require__(14);
var arma_1 = __webpack_require__(15);
var magia_1 = __webpack_require__(2);
var d = new index_1.Door(100);
var m = new index_2.Mago('Merlino', Tipologie.Razza.Umanoide, {
    str: 10,
    dex: 20,
    int: 50
}, 12);
var g = new index_2.Guerriero('Conan', Tipologie.Razza.Draconiano, {
    str: 40,
    dex: 12,
    int: 2
}, 20);
var c = new index_2.Chierico('Cleric', Tipologie.Razza.Umanoide, {
    str: 20,
    dex: 15,
    int: 8
}, 18);
var p = new buff_1.Buff({
    effetto: Tipologie.Effetto.Protezione,
    causa: {
        tipologia: Tipologie.Elemento.acqua,
        valore: 3
    }
}, 1800);
c.setBuff(p);
var spada = new arma_1.Arma('Spadone a 2 Mani', 3, Tipologie.Materiale.Ferrite);
var fireball = new magia_1.Magia('Fireball', 10, Tipologie.Elemento.fuoco);
setTimeout(function () {
    m.attack(c, fireball);
}, 1000);
setTimeout(function () {
    m.attack(c, fireball);
}, 200);
setTimeout(function () {
    m.attack(c, fireball);
}, 2000);
var paragrafo = document.querySelector('p');
paragrafo.innerText = 'Ciao';
var getJSON = function (config) {
    var fetchConfig = ({ method: 'GET' });
    return fetch(config.url, fetchConfig)
        .then(function (response) { return response.json(); });
};
function loadUsers() {
    return getJSON({ url: 'https://jsonplaceholder.typicode.com/users' });
}
var url = 'https://jsonplaceholder.typicode.com/users';
getJSON({ url: url })
    .then(function (res) {
    console.log(res[0].name); // <== no error ???
});


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUcsR0FBRyw0Q0FBNEMsQ0FBQztBQUN6RCxPQUFPLENBQW9CLEVBQUUsR0FBRyxPQUFFLENBQUM7S0FDbEMsSUFBSSxDQUFDLFVBQUMsR0FBc0I7SUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUMsbUJBQW1CO0FBQzlDLENBQUMsQ0FBQyIsImZpbGUiOiIwLjA3MjM0ZDVjMTA3NWVhZDE0ZWM4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Rvb3J9IGZyb20gJy4vd29ybGQvdGFyZ2V0dGFibGUvaW5kZXgnO1xuaW1wb3J0IHtDaGllcmljbywgR3VlcnJpZXJvLCBNYWdvfSBmcm9tICcuL3dvcmxkL3RhcmdldHRhYmxlL3BsYXlhYmxlL2luZGV4JztcbmltcG9ydCAqIGFzIFRpcG9sb2dpZSBmcm9tICcuL3dvcmxkL2VudW1lcmF6aW9uaSc7XG5pbXBvcnQge0J1ZmZ9IGZyb20gJy4vd29ybGQvZWZmZXR0aS9idWZmJztcbmltcG9ydCB7QXJtYX0gZnJvbSAnLi93b3JsZC9hcm1pL2FybWEnO1xuaW1wb3J0IHtNYWdpYX0gZnJvbSAnLi93b3JsZC9tYWdpYS9tYWdpYSc7XG5cbmxldCBkID0gbmV3IERvb3IoMTAwKTtcbmxldCBtID0gbmV3IE1hZ28oJ01lcmxpbm8nLCBUaXBvbG9naWUuUmF6emEuVW1hbm9pZGUsIHtcbiAgc3RyOiAxMCxcbiAgZGV4OiAyMCxcbiAgaW50OiA1MFxufSwgMTIpO1xubGV0IGcgPSBuZXcgR3VlcnJpZXJvKCdDb25hbicsIFRpcG9sb2dpZS5SYXp6YS5EcmFjb25pYW5vLCB7XG4gIHN0cjo0MCxcbiAgZGV4OjEyLFxuICBpbnQ6IDJcbn0sIDIwKTtcbmxldCBjID0gbmV3IENoaWVyaWNvKCdDbGVyaWMnLCBUaXBvbG9naWUuUmF6emEuVW1hbm9pZGUsIHtcbiAgc3RyOiAyMCxcbiAgZGV4OiAxNSxcbiAgaW50OiA4XG59LCAxOCk7XG5cbmxldCBwID0gbmV3IEJ1ZmYoe1xuICBlZmZldHRvOiBUaXBvbG9naWUuRWZmZXR0by5Qcm90ZXppb25lLFxuICBjYXVzYToge1xuICAgIHRpcG9sb2dpYTogVGlwb2xvZ2llLkVsZW1lbnRvLmFjcXVhLFxuICAgIHZhbG9yZTogM1xuICB9XG59LCAxODAwKTtcbmMuc2V0QnVmZihwKTtcblxubGV0IHNwYWRhID0gbmV3IEFybWEoJ1NwYWRvbmUgYSAyIE1hbmknLCAzLCBUaXBvbG9naWUuTWF0ZXJpYWxlLkZlcnJpdGUpO1xubGV0IGZpcmViYWxsID0gbmV3IE1hZ2lhKCdGaXJlYmFsbCcsIDEwLCBUaXBvbG9naWUuRWxlbWVudG8uZnVvY28pO1xuXG5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gIG0uYXR0YWNrKGMsIGZpcmViYWxsKTtcbn0sMTAwMCk7XG5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gIG0uYXR0YWNrKGMsIGZpcmViYWxsKTtcbn0sMjAwKTtcblxuc2V0VGltZW91dChmdW5jdGlvbigpe1xuICBtLmF0dGFjayhjLCBmaXJlYmFsbCk7XG59LDIwMDApO1xuXG5sZXQgcGFyYWdyYWZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigncCcpO1xucGFyYWdyYWZvLmlubmVyVGV4dCA9ICdDaWFvJztcblxuXG5cbmNvbnN0IGdldEpTT04gPSA8VD4oY29uZmlnOiB7IHVybDogc3RyaW5nIH0pOiBQcm9taXNlPFQ+ID0+IHtcbiAgY29uc3QgZmV0Y2hDb25maWcgPSAoeyBtZXRob2Q6ICdHRVQnIH0pO1xuICByZXR1cm4gZmV0Y2goY29uZmlnLnVybCwgZmV0Y2hDb25maWcpXG4gICAgLnRoZW48VD4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKTtcbn1cblxudHlwZSBMb2FkVXNlcnNSZXNwb25zZSA9IHtcbnVzZXJzOiB1c2VyXG5ba2V5OiBudW1iZXJdIDogdXNlclxufVxuXG50eXBlIHVzZXIgPSB7XG4gIGlkOiBudW1iZXI7XG4gIG5hbWU6IHN0cmluZztcbn07XG5cbmZ1bmN0aW9uIGxvYWRVc2VycygpIHtcbnJldHVybiBnZXRKU09OPExvYWRVc2Vyc1Jlc3BvbnNlPih7IHVybDogJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS91c2VycycgfSk7XG59XG5cbmNvbnN0IHVybCA9ICdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdXNlcnMnO1xuZ2V0SlNPTjxMb2FkVXNlcnNSZXNwb25zZT4oeyB1cmwgfSlcbi50aGVuKChyZXM6IExvYWRVc2Vyc1Jlc3BvbnNlKSA9PiB7XG4gIGNvbnNvbGUubG9nKHJlc1swXS5uYW1lKSAvLyA8PT0gbm8gZXJyb3IgPz8/XG59KVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbWFpbi50cyJdLCJzb3VyY2VSb290IjoiIn0=