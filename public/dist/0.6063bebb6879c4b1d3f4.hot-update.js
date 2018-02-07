webpackHotUpdate(0,{

/***/ 10:
false,

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var targettable_1 = __webpack_require__(1);
var Drago = /** @class */ (function (_super) {
    __extends(Drago, _super);
    function Drago() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Drago.prototype.toString = function () {
        return 'Drago';
    };
    Drago.prototype.attack = function (target, arma) {
        return _super.prototype.attack.call(this, target, arma);
    };
    return Drago;
}(targettable_1.Animato));
exports.Drago = Drago;


/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(11);
var index_2 = __webpack_require__(7);
var Tipologie = __webpack_require__(6);
var buff_1 = __webpack_require__(21);
var arma_1 = __webpack_require__(23);
var magia_1 = __webpack_require__(5);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvd29ybGQvdGFyZ2V0dGFibGUvbW9iL0RyYWdvLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLDJDQUFxRDtBQUVyRDtJQUEyQix5QkFBTztJQUFsQzs7SUFRQSxDQUFDO0lBUEMsd0JBQVEsR0FBUjtRQUNFLE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQUNELHNCQUFNLEdBQU4sVUFBTyxNQUFvQixFQUFFLElBQVc7UUFDdEMsTUFBTSxDQUFDLGlCQUFNLE1BQU0sWUFBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVILFlBQUM7QUFBRCxDQUFDLENBUjBCLHFCQUFPLEdBUWpDO0FBUlksc0JBQUs7Ozs7Ozs7Ozs7O0FDSGxCLHNDQUErQztBQUMvQyxxQ0FBNkU7QUFDN0UsdUNBQWtEO0FBQ2xELHFDQUEwQztBQUMxQyxxQ0FBdUM7QUFDdkMscUNBQTBDO0FBRTFDLElBQUksQ0FBQyxHQUFHLElBQUksWUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3RCLElBQUksQ0FBQyxHQUFHLElBQUksWUFBSSxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRTtJQUNwRCxHQUFHLEVBQUUsRUFBRTtJQUNQLEdBQUcsRUFBRSxFQUFFO0lBQ1AsR0FBRyxFQUFFLEVBQUU7Q0FDUixFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ1AsSUFBSSxDQUFDLEdBQUcsSUFBSSxpQkFBUyxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRTtJQUN6RCxHQUFHLEVBQUMsRUFBRTtJQUNOLEdBQUcsRUFBQyxFQUFFO0lBQ04sR0FBRyxFQUFFLENBQUM7Q0FDUCxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ1AsSUFBSSxDQUFDLEdBQUcsSUFBSSxnQkFBUSxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRTtJQUN2RCxHQUFHLEVBQUUsRUFBRTtJQUNQLEdBQUcsRUFBRSxFQUFFO0lBQ1AsR0FBRyxFQUFFLENBQUM7Q0FDUCxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBRVAsSUFBSSxDQUFDLEdBQUcsSUFBSSxXQUFJLENBQUM7SUFDZixPQUFPLEVBQUUsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFVO0lBQ3JDLEtBQUssRUFBRTtRQUNMLFNBQVMsRUFBRSxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUs7UUFDbkMsTUFBTSxFQUFFLENBQUM7S0FDVjtDQUNGLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDVCxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBRWIsSUFBSSxLQUFLLEdBQUcsSUFBSSxXQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDekUsSUFBSSxRQUFRLEdBQUcsSUFBSSxhQUFLLENBQUMsVUFBVSxFQUFFLEVBQUUsRUFBRSxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBRW5FLFVBQVUsQ0FBQztJQUNULENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQ3hCLENBQUMsRUFBQyxJQUFJLENBQUMsQ0FBQztBQUNSLFVBQVUsQ0FBQztJQUNULENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQ3hCLENBQUMsRUFBQyxHQUFHLENBQUMsQ0FBQztBQUVQLFVBQVUsQ0FBQztJQUNULENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQ3hCLENBQUMsRUFBQyxJQUFJLENBQUMsQ0FBQztBQUtSLElBQU0sT0FBTyxHQUFHLFVBQUksTUFBdUI7SUFDekMsSUFBTSxXQUFXLEdBQUcsQ0FBQyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ3hDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxXQUFXLENBQUM7U0FDbEMsSUFBSSxDQUFJLGtCQUFRLElBQUksZUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQyxDQUFDO0FBQzFDLENBQUM7QUFZRDtJQUNBLE1BQU0sQ0FBQyxPQUFPLENBQW9CLEVBQUUsR0FBRyxFQUFFLDRDQUE0QyxFQUFFLENBQUMsQ0FBQztBQUN6RixDQUFDO0FBRUQsSUFBTSxHQUFHLEdBQUcsNENBQTRDLENBQUM7QUFDekQsT0FBTyxDQUFvQixFQUFFLEdBQUcsT0FBRSxDQUFDO0tBQ2xDLElBQUksQ0FBQyxVQUFDLEdBQXNCO0lBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDLG1CQUFtQjtBQUM5QyxDQUFDLENBQUMiLCJmaWxlIjoiMC42MDYzYmViYjY4NzljNGIxZDNmNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtNYWdpYX0gZnJvbSAnLi4vLi4vbWFnaWEvbWFnaWEnO1xuaW1wb3J0IHtJVGFyZ2V0dGFibGUsIEFuaW1hdG99IGZyb20gJy4uL3RhcmdldHRhYmxlJztcblxuZXhwb3J0IGNsYXNzIERyYWdvIGV4dGVuZHMgQW5pbWF0byB7XG4gIHRvU3RyaW5nKCl7XG4gICAgcmV0dXJuICdEcmFnbyc7XG4gIH1cbiAgYXR0YWNrKHRhcmdldDogSVRhcmdldHRhYmxlLCBhcm1hOiBNYWdpYSk6IG51bWJlcntcbiAgICByZXR1cm4gc3VwZXIuYXR0YWNrKHRhcmdldCwgYXJtYSk7XG4gIH1cblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy93b3JsZC90YXJnZXR0YWJsZS9tb2IvRHJhZ28udHMiLCJpbXBvcnQge0Rvb3J9IGZyb20gJy4vd29ybGQvdGFyZ2V0dGFibGUvaW5kZXgnO1xuaW1wb3J0IHtDaGllcmljbywgR3VlcnJpZXJvLCBNYWdvfSBmcm9tICcuL3dvcmxkL3RhcmdldHRhYmxlL3BsYXlhYmxlL2luZGV4JztcbmltcG9ydCAqIGFzIFRpcG9sb2dpZSBmcm9tICcuL3dvcmxkL2VudW1lcmF6aW9uaSc7XG5pbXBvcnQge0J1ZmZ9IGZyb20gJy4vd29ybGQvZWZmZXR0aS9idWZmJztcbmltcG9ydCB7QXJtYX0gZnJvbSAnLi93b3JsZC9hcm1pL2FybWEnO1xuaW1wb3J0IHtNYWdpYX0gZnJvbSAnLi93b3JsZC9tYWdpYS9tYWdpYSc7XG5cbmxldCBkID0gbmV3IERvb3IoMTAwKTtcbmxldCBtID0gbmV3IE1hZ28oJ01lcmxpbm8nLCBUaXBvbG9naWUuUmF6emEuVW1hbm9pZGUsIHtcbiAgc3RyOiAxMCxcbiAgZGV4OiAyMCxcbiAgaW50OiA1MFxufSwgMTIpO1xubGV0IGcgPSBuZXcgR3VlcnJpZXJvKCdDb25hbicsIFRpcG9sb2dpZS5SYXp6YS5EcmFjb25pYW5vLCB7XG4gIHN0cjo0MCxcbiAgZGV4OjEyLFxuICBpbnQ6IDJcbn0sIDIwKTtcbmxldCBjID0gbmV3IENoaWVyaWNvKCdDbGVyaWMnLCBUaXBvbG9naWUuUmF6emEuVW1hbm9pZGUsIHtcbiAgc3RyOiAyMCxcbiAgZGV4OiAxNSxcbiAgaW50OiA4XG59LCAxOCk7XG5cbmxldCBwID0gbmV3IEJ1ZmYoe1xuICBlZmZldHRvOiBUaXBvbG9naWUuRWZmZXR0by5Qcm90ZXppb25lLFxuICBjYXVzYToge1xuICAgIHRpcG9sb2dpYTogVGlwb2xvZ2llLkVsZW1lbnRvLmFjcXVhLFxuICAgIHZhbG9yZTogM1xuICB9XG59LCAxODAwKTtcbmMuc2V0QnVmZihwKTtcblxubGV0IHNwYWRhID0gbmV3IEFybWEoJ1NwYWRvbmUgYSAyIE1hbmknLCAzLCBUaXBvbG9naWUuTWF0ZXJpYWxlLkZlcnJpdGUpO1xubGV0IGZpcmViYWxsID0gbmV3IE1hZ2lhKCdGaXJlYmFsbCcsIDEwLCBUaXBvbG9naWUuRWxlbWVudG8uZnVvY28pO1xuXG5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gIG0uYXR0YWNrKGMsIGZpcmViYWxsKTtcbn0sMTAwMCk7XG5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gIG0uYXR0YWNrKGMsIGZpcmViYWxsKTtcbn0sMjAwKTtcblxuc2V0VGltZW91dChmdW5jdGlvbigpe1xuICBtLmF0dGFjayhjLCBmaXJlYmFsbCk7XG59LDIwMDApO1xuXG5cblxuXG5jb25zdCBnZXRKU09OID0gPFQ+KGNvbmZpZzogeyB1cmw6IHN0cmluZyB9KTogUHJvbWlzZTxUPiA9PiB7XG4gIGNvbnN0IGZldGNoQ29uZmlnID0gKHsgbWV0aG9kOiAnR0VUJyB9KTtcbiAgcmV0dXJuIGZldGNoKGNvbmZpZy51cmwsIGZldGNoQ29uZmlnKVxuICAgIC50aGVuPFQ+KHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSk7XG59XG5cbnR5cGUgTG9hZFVzZXJzUmVzcG9uc2UgPSB7XG51c2VyczogdXNlclxuW2tleTogbnVtYmVyXSA6IHVzZXJcbn1cblxudHlwZSB1c2VyID0ge1xuICBpZDogbnVtYmVyO1xuICBuYW1lOiBzdHJpbmc7XG59O1xuXG5mdW5jdGlvbiBsb2FkVXNlcnMoKSB7XG5yZXR1cm4gZ2V0SlNPTjxMb2FkVXNlcnNSZXNwb25zZT4oeyB1cmw6ICdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdXNlcnMnIH0pO1xufVxuXG5jb25zdCB1cmwgPSAnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3VzZXJzJztcbmdldEpTT048TG9hZFVzZXJzUmVzcG9uc2U+KHsgdXJsIH0pXG4udGhlbigocmVzOiBMb2FkVXNlcnNSZXNwb25zZSkgPT4ge1xuICBjb25zb2xlLmxvZyhyZXNbMF0ubmFtZSkgLy8gPD09IG5vIGVycm9yID8/P1xufSlcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21haW4udHMiXSwic291cmNlUm9vdCI6IiJ9