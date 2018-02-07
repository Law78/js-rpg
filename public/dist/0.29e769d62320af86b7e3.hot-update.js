webpackHotUpdate(0,[
/* 0 */,
/* 1 */
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
var magia_1 = __webpack_require__(5);
var enumerazioni_1 = __webpack_require__(6);
var Targettable = /** @class */ (function () {
    function Targettable(hits) {
        this.hits = hits;
        this._buffs = [];
        this._pf = hits;
    }
    Object.defineProperty(Targettable.prototype, "Hits", {
        get: function () {
            return this._pf;
        },
        set: function (value) {
            this._pf = value;
        },
        enumerable: true,
        configurable: true
    });
    Targettable.prototype.isDead = function () {
        return this._pf > 0 ? false : true;
    };
    Targettable.prototype.setBuff = function (buff) {
        this._buffs.push(buff);
    };
    Targettable.prototype.getBuff = function () {
        return this._buffs;
    };
    return Targettable;
}());
exports.Targettable = Targettable;
var Animato = /** @class */ (function (_super) {
    __extends(Animato, _super);
    function Animato(hits) {
        var _this = _super.call(this, hits) || this;
        _this.hits = hits;
        _this._lastAttack = 0;
        return _this;
    }
    Animato.prototype.attack = function (target, arma) {
        if (Date.now() - this._lastAttack < 1000) {
            console.log('nn posso attaccare di nuovo... mi sto riprendendo');
            return 0;
        }
        this._lastAttack = Date.now();
        var protezione = 0;
        if (target instanceof Targettable) {
            target.getBuff().filter(function (b) { return b.buff.effetto == enumerazioni_1.Effetto.Protezione; })
                .map(function (b) {
                if (arma instanceof magia_1.Magia) {
                    if (arma.elemento === b.buff.causa.tipologia) {
                        if (b.isValid()) {
                            console.log('ho protezione...giusta', b.buff.causa.valore);
                            protezione = b.buff.causa.valore;
                        }
                    }
                }
            });
            target.Hits -= arma.danni >= protezione ? arma.danni - protezione : 0;
        }
        return arma.danni - protezione;
    };
    return Animato;
}(Targettable));
exports.Animato = Animato;


/***/ }),
/* 2 */
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
var Personaggio = /** @class */ (function (_super) {
    __extends(Personaggio, _super);
    function Personaggio(nome, razza, stats, hits) {
        var _this = _super.call(this, hits) || this;
        _this.nome = nome;
        _this.razza = razza;
        _this.stats = stats;
        _this.hits = hits;
        return _this;
    }
    return Personaggio;
}(targettable_1.Animato));
exports.Personaggio = Personaggio;


/***/ }),
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Magia = /** @class */ (function () {
    function Magia(nome, danni, elemento) {
        this.nome = nome;
        this.danni = danni;
        this.elemento = elemento;
    }
    return Magia;
}());
exports.Magia = Magia;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Razza;
(function (Razza) {
    Razza[Razza["Umanoide"] = 0] = "Umanoide";
    Razza[Razza["Draconiano"] = 1] = "Draconiano";
    Razza[Razza["Lucertoloide"] = 2] = "Lucertoloide";
})(Razza = exports.Razza || (exports.Razza = {}));
var Elemento;
(function (Elemento) {
    Elemento[Elemento["acqua"] = 1] = "acqua";
    Elemento[Elemento["aria"] = 2] = "aria";
    Elemento[Elemento["fuoco"] = 3] = "fuoco";
    Elemento[Elemento["terra"] = 4] = "terra";
})(Elemento = exports.Elemento || (exports.Elemento = {}));
var Materiale;
(function (Materiale) {
    Materiale[Materiale["Ossidiana"] = 1] = "Ossidiana";
    Materiale[Materiale["Ferrite"] = 2] = "Ferrite";
    Materiale[Materiale["Diamantite"] = 3] = "Diamantite";
    Materiale[Materiale["Bronzo"] = 4] = "Bronzo";
    Materiale[Materiale["Smeraldo"] = 5] = "Smeraldo";
    Materiale[Materiale["Rubino"] = 6] = "Rubino";
})(Materiale = exports.Materiale || (exports.Materiale = {}));
var Effetto;
(function (Effetto) {
    Effetto[Effetto["Cura"] = 1] = "Cura";
    Effetto[Effetto["Protezione"] = 2] = "Protezione";
    Effetto[Effetto["Miglioramento"] = 3] = "Miglioramento";
})(Effetto = exports.Effetto || (exports.Effetto = {}));


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var chierico_1 = __webpack_require__(16);
exports.Chierico = chierico_1.Chierico;
var guerriero_1 = __webpack_require__(17);
exports.Guerriero = guerriero_1.Guerriero;
var mago_1 = __webpack_require__(18);
exports.Mago = mago_1.Mago;


/***/ }),
/* 8 */,
/* 9 */
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
var paragrafo = document.querySelector('p');
paragrafo.inner;
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


/***/ }),
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(12));
__export(__webpack_require__(7));
__export(__webpack_require__(19));


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var door_1 = __webpack_require__(13);
exports.Door = door_1.Door;


/***/ }),
/* 13 */
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
var Door = /** @class */ (function (_super) {
    __extends(Door, _super);
    function Door() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Door.prototype.toString = function () {
        return 'Door';
    };
    return Door;
}(targettable_1.Targettable));
exports.Door = Door;


/***/ }),
/* 14 */,
/* 15 */,
/* 16 */
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
var personaggio_1 = __webpack_require__(2);
var Chierico = /** @class */ (function (_super) {
    __extends(Chierico, _super);
    function Chierico(nome, razza, stats, hits) {
        var _this = _super.call(this, nome, razza, stats, hits) || this;
        _this.nome = nome;
        _this.razza = razza;
        _this.stats = stats;
        _this.hits = hits;
        return _this;
    }
    Chierico.prototype.toString = function () {
        return this.nome;
    };
    Chierico.prototype.attack = function (target, arma) {
        return _super.prototype.attack.call(this, target, arma);
    };
    return Chierico;
}(personaggio_1.Personaggio));
exports.Chierico = Chierico;


/***/ }),
/* 17 */
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
var personaggio_1 = __webpack_require__(2);
var Guerriero = /** @class */ (function (_super) {
    __extends(Guerriero, _super);
    function Guerriero(nome, razza, stats, hits) {
        var _this = _super.call(this, nome, razza, stats, hits) || this;
        _this.nome = nome;
        _this.razza = razza;
        _this.stats = stats;
        _this.hits = hits;
        return _this;
    }
    Guerriero.prototype.toString = function () {
        return this.nome;
    };
    Guerriero.prototype.attack = function (target, arma) {
        return _super.prototype.attack.call(this, target, arma);
    };
    return Guerriero;
}(personaggio_1.Personaggio));
exports.Guerriero = Guerriero;


/***/ }),
/* 18 */
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
var personaggio_1 = __webpack_require__(2);
var Mago = /** @class */ (function (_super) {
    __extends(Mago, _super);
    function Mago(nome, razza, stats, hits) {
        var _this = _super.call(this, nome, razza, stats, hits) || this;
        _this.nome = nome;
        _this.razza = razza;
        _this.stats = stats;
        _this.hits = hits;
        return _this;
    }
    Mago.prototype.toString = function () {
        return this.nome;
    };
    Mago.prototype.attack = function (target, arma) {
        return _super.prototype.attack.call(this, target, arma);
    };
    return Mago;
}(personaggio_1.Personaggio));
exports.Mago = Mago;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Drago_1 = __webpack_require__(20);
exports.Drago = Drago_1.Drago;


/***/ }),
/* 20 */
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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Buff = /** @class */ (function () {
    function Buff(buff, durata) {
        this.buff = buff;
        this._pulse = Date.now() + durata;
        setTimeout(function () {
            console.log('buff finito!!!');
        }, durata);
    }
    Buff.prototype.isValid = function () {
        if (this._pulse >= Date.now())
            return true;
        return false;
    };
    return Buff;
}());
exports.Buff = Buff;


/***/ }),
/* 22 */,
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Arma = /** @class */ (function () {
    function Arma(nome, danni, materiale) {
        this.nome = nome;
        this.danni = danni;
    }
    return Arma;
}());
exports.Arma = Arma;


/***/ })
])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvd29ybGQvdGFyZ2V0dGFibGUvdGFyZ2V0dGFibGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dvcmxkL3RhcmdldHRhYmxlL3BsYXlhYmxlL3BlcnNvbmFnZ2lvLnRzIiwid2VicGFjazovLy8uL3NyYy93b3JsZC9tYWdpYS9tYWdpYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd29ybGQvZW51bWVyYXppb25pLnRzIiwid2VicGFjazovLy8uL3NyYy93b3JsZC90YXJnZXR0YWJsZS9wbGF5YWJsZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd29ybGQvdGFyZ2V0dGFibGUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dvcmxkL3RhcmdldHRhYmxlL2l0ZW1zL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy93b3JsZC90YXJnZXR0YWJsZS9pdGVtcy9kb29yLnRzIiwid2VicGFjazovLy8uL3NyYy93b3JsZC90YXJnZXR0YWJsZS9wbGF5YWJsZS9jaGllcmljby50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd29ybGQvdGFyZ2V0dGFibGUvcGxheWFibGUvZ3VlcnJpZXJvLnRzIiwid2VicGFjazovLy8uL3NyYy93b3JsZC90YXJnZXR0YWJsZS9wbGF5YWJsZS9tYWdvLnRzIiwid2VicGFjazovLy8uL3NyYy93b3JsZC90YXJnZXR0YWJsZS9tb2IvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dvcmxkL3RhcmdldHRhYmxlL21vYi9EcmFnby50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd29ybGQvZWZmZXR0aS9idWZmLnRzIiwid2VicGFjazovLy8uL3NyYy93b3JsZC9hcm1pL2FybWEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEscUNBQXFDO0FBQ3JDLDRDQUF3QztBQWF4QztJQUdFLHFCQUFtQixJQUFZO1FBQVosU0FBSSxH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SSIsImZpbGUiOiIwLjI5ZTc2OWQ2MjMyMGFmODZiN2UzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0J1ZmZ9IGZyb20gJy4uL2VmZmV0dGkvYnVmZic7XG5pbXBvcnQge0FybWF9IGZyb20gJy4uL2FybWkvYXJtYSc7XG5pbXBvcnQge01hZ2lhfSBmcm9tICcuLi9tYWdpYS9tYWdpYSc7XG5pbXBvcnQge0VmZmV0dG99IGZyb20gJy4uL2VudW1lcmF6aW9uaSc7XG5cbmV4cG9ydCB0eXBlIFN0YXRzID0ge1xuICBzdHI6IG51bWJlcjtcbiAgZGV4OiBudW1iZXI7XG4gIGludDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUYXJnZXR0YWJsZXtcbiAgaGl0czogbnVtYmVyXG4gIGlzRGVhZCgpOmJvb2xlYW5cbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFRhcmdldHRhYmxlIGltcGxlbWVudHMgSVRhcmdldHRhYmxle1xuICBwcml2YXRlIF9wZjpudW1iZXI7XG4gIHByaXZhdGUgX2J1ZmZzOiBCdWZmW10gPSBbXTtcbiAgY29uc3RydWN0b3IocHVibGljIGhpdHM6IG51bWJlcil7XG4gICAgdGhpcy5fcGYgPSBoaXRzO1xuICB9XG4gIGFic3RyYWN0IHRvU3RyaW5nKCk6IHN0cmluZztcbiAgZ2V0IEhpdHMoKTogbnVtYmVye1xuICAgIHJldHVybiB0aGlzLl9wZjtcbiAgfVxuICBzZXQgSGl0cyh2YWx1ZTogbnVtYmVyKXtcbiAgICB0aGlzLl9wZiA9IHZhbHVlO1xuICB9XG4gIGlzRGVhZCgpOiBib29sZWFue1xuICAgIHJldHVybiB0aGlzLl9wZiA+IDAgPyBmYWxzZSA6IHRydWU7XG4gIH1cbiAgc2V0QnVmZihidWZmOkJ1ZmYpe1xuICAgIHRoaXMuX2J1ZmZzLnB1c2goYnVmZik7XG4gIH1cbiAgZ2V0QnVmZigpe1xuICAgIHJldHVybiB0aGlzLl9idWZmcztcbiAgfVxufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQW5pbWF0byBleHRlbmRzIFRhcmdldHRhYmxle1xuICBwcml2YXRlIF9sYXN0QXR0YWNrOiBudW1iZXIgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBoaXRzOiBudW1iZXIpe1xuICAgIHN1cGVyKGhpdHMpO1xuICB9XG5cbiAgYXR0YWNrKHRhcmdldDogSVRhcmdldHRhYmxlLCBhcm1hOiBBcm1hIHwgTWFnaWEpOiBudW1iZXJ7XG4gICAgaWYoRGF0ZS5ub3coKSAtIHRoaXMuX2xhc3RBdHRhY2sgPCAxMDAwKSB7XG5cbiAgICAgIGNvbnNvbGUubG9nKCdubiBwb3NzbyBhdHRhY2NhcmUgZGkgbnVvdm8uLi4gbWkgc3RvIHJpcHJlbmRlbmRvJylcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICB0aGlzLl9sYXN0QXR0YWNrID0gRGF0ZS5ub3coKVxuICAgIGxldCBwcm90ZXppb25lOiBudW1iZXIgPSAwO1xuICAgIGlmKHRhcmdldCBpbnN0YW5jZW9mIFRhcmdldHRhYmxlKXtcbiAgICAgIHRhcmdldC5nZXRCdWZmKCkuZmlsdGVyKGIgPT4gYi5idWZmLmVmZmV0dG8gPT0gRWZmZXR0by5Qcm90ZXppb25lKVxuICAgICAgLm1hcChiID0+IHtcbiAgICAgICAgICBpZihhcm1hIGluc3RhbmNlb2YgTWFnaWEpe1xuICAgICAgICAgICAgIGlmKGFybWEuZWxlbWVudG8gPT09IGIuYnVmZi5jYXVzYS50aXBvbG9naWEpe1xuICAgICAgICAgICAgICAgaWYoYi5pc1ZhbGlkKCkpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdobyBwcm90ZXppb25lLi4uZ2l1c3RhJywgYi5idWZmLmNhdXNhLnZhbG9yZSk7XG4gICAgICAgICAgICAgICAgcHJvdGV6aW9uZSA9IGIuYnVmZi5jYXVzYS52YWxvcmU7XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgdGFyZ2V0LkhpdHMgLT0gYXJtYS5kYW5uaT49cHJvdGV6aW9uZT8gYXJtYS5kYW5uaSAtIHByb3RlemlvbmUgOiAwO1xuICAgIH1cbiAgICByZXR1cm4gYXJtYS5kYW5uaSAtIHByb3RlemlvbmU7XG4gIH1cbiAgYWJzdHJhY3QgdG9TdHJpbmcoKTogc3RyaW5nO1xuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3dvcmxkL3RhcmdldHRhYmxlL3RhcmdldHRhYmxlLnRzIiwiaW1wb3J0IHtSYXp6YX0gZnJvbSAnLi4vLi4vZW51bWVyYXppb25pJztcbmltcG9ydCB7SVRhcmdldHRhYmxlLCBBbmltYXRvLCBTdGF0c30gZnJvbSAnLi4vdGFyZ2V0dGFibGUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElQZXJzb25hZ2dpb3tcbiAgbm9tZTogc3RyaW5nLFxuICByYXp6YTogUmF6emEsXG4gIHN0YXRzOiBTdGF0c1xufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgUGVyc29uYWdnaW8gZXh0ZW5kcyBBbmltYXRvIGltcGxlbWVudHMgSVBlcnNvbmFnZ2lve1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgbm9tZTogc3RyaW5nLCBwdWJsaWMgcmF6emE6IFJhenphLFxuICAgIHB1YmxpYyBzdGF0czogU3RhdHMsIHB1YmxpYyBoaXRzOiBudW1iZXIpe1xuICAgICAgc3VwZXIoaGl0cyk7XG4gICAgfVxufVxuXG5cblxuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy93b3JsZC90YXJnZXR0YWJsZS9wbGF5YWJsZS9wZXJzb25hZ2dpby50cyIsImltcG9ydCB7RWxlbWVudG99IGZyb20gJy4uL2VudW1lcmF6aW9uaSc7XG5cbmV4cG9ydCBjbGFzcyBNYWdpYSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBub21lOiBzdHJpbmcsIHB1YmxpYyBkYW5uaTogbnVtYmVyLFxuICAgIHB1YmxpYyBlbGVtZW50bzogRWxlbWVudG8pe31cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy93b3JsZC9tYWdpYS9tYWdpYS50cyIsImV4cG9ydCBlbnVtIFJhenphIHtcbiAgVW1hbm9pZGUsXG4gIERyYWNvbmlhbm8sXG4gIEx1Y2VydG9sb2lkZVxufVxuXG5leHBvcnQgZW51bSBFbGVtZW50b3tcbiAgYWNxdWEgPSAxLFxuICBhcmlhLFxuICBmdW9jbyxcbiAgdGVycmFcbn1cblxuZXhwb3J0IGVudW0gTWF0ZXJpYWxlIHtcbiAgT3NzaWRpYW5hID0gMSxcbiAgRmVycml0ZSxcbiAgRGlhbWFudGl0ZSxcbiAgQnJvbnpvLFxuICBTbWVyYWxkbyxcbiAgUnViaW5vXG59XG5cbmV4cG9ydCBlbnVtIEVmZmV0dG8ge1xuICBDdXJhID0gMSxcbiAgUHJvdGV6aW9uZSxcbiAgTWlnbGlvcmFtZW50b1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy93b3JsZC9lbnVtZXJhemlvbmkudHMiLCJleHBvcnQge0NoaWVyaWNvfSBmcm9tICcuL2NoaWVyaWNvJztcbmV4cG9ydCB7R3VlcnJpZXJvfSBmcm9tICcuL2d1ZXJyaWVybyc7XG5leHBvcnQge01hZ299IGZyb20gJy4vbWFnbyc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3dvcmxkL3RhcmdldHRhYmxlL3BsYXlhYmxlL2luZGV4LnRzIiwiaW1wb3J0IHtEb29yfSBmcm9tICcuL3dvcmxkL3RhcmdldHRhYmxlL2luZGV4JztcbmltcG9ydCB7Q2hpZXJpY28sIEd1ZXJyaWVybywgTWFnb30gZnJvbSAnLi93b3JsZC90YXJnZXR0YWJsZS9wbGF5YWJsZS9pbmRleCc7XG5pbXBvcnQgKiBhcyBUaXBvbG9naWUgZnJvbSAnLi93b3JsZC9lbnVtZXJhemlvbmknO1xuaW1wb3J0IHtCdWZmfSBmcm9tICcuL3dvcmxkL2VmZmV0dGkvYnVmZic7XG5pbXBvcnQge0FybWF9IGZyb20gJy4vd29ybGQvYXJtaS9hcm1hJztcbmltcG9ydCB7TWFnaWF9IGZyb20gJy4vd29ybGQvbWFnaWEvbWFnaWEnO1xuXG5sZXQgZCA9IG5ldyBEb29yKDEwMCk7XG5sZXQgbSA9IG5ldyBNYWdvKCdNZXJsaW5vJywgVGlwb2xvZ2llLlJhenphLlVtYW5vaWRlLCB7XG4gIHN0cjogMTAsXG4gIGRleDogMjAsXG4gIGludDogNTBcbn0sIDEyKTtcbmxldCBnID0gbmV3IEd1ZXJyaWVybygnQ29uYW4nLCBUaXBvbG9naWUuUmF6emEuRHJhY29uaWFubywge1xuICBzdHI6NDAsXG4gIGRleDoxMixcbiAgaW50OiAyXG59LCAyMCk7XG5sZXQgYyA9IG5ldyBDaGllcmljbygnQ2xlcmljJywgVGlwb2xvZ2llLlJhenphLlVtYW5vaWRlLCB7XG4gIHN0cjogMjAsXG4gIGRleDogMTUsXG4gIGludDogOFxufSwgMTgpO1xuXG5sZXQgcCA9IG5ldyBCdWZmKHtcbiAgZWZmZXR0bzogVGlwb2xvZ2llLkVmZmV0dG8uUHJvdGV6aW9uZSxcbiAgY2F1c2E6IHtcbiAgICB0aXBvbG9naWE6IFRpcG9sb2dpZS5FbGVtZW50by5hY3F1YSxcbiAgICB2YWxvcmU6IDNcbiAgfVxufSwgMTgwMCk7XG5jLnNldEJ1ZmYocCk7XG5cbmxldCBzcGFkYSA9IG5ldyBBcm1hKCdTcGFkb25lIGEgMiBNYW5pJywgMywgVGlwb2xvZ2llLk1hdGVyaWFsZS5GZXJyaXRlKTtcbmxldCBmaXJlYmFsbCA9IG5ldyBNYWdpYSgnRmlyZWJhbGwnLCAxMCwgVGlwb2xvZ2llLkVsZW1lbnRvLmZ1b2NvKTtcblxuc2V0VGltZW91dChmdW5jdGlvbigpe1xuICBtLmF0dGFjayhjLCBmaXJlYmFsbCk7XG59LDEwMDApO1xuc2V0VGltZW91dChmdW5jdGlvbigpe1xuICBtLmF0dGFjayhjLCBmaXJlYmFsbCk7XG59LDIwMCk7XG5cbnNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgbS5hdHRhY2soYywgZmlyZWJhbGwpO1xufSwyMDAwKTtcblxubGV0IHBhcmFncmFmbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3AnKTtcbnBhcmFncmFmby5pbm5lclxuXG5cblxuY29uc3QgZ2V0SlNPTiA9IDxUPihjb25maWc6IHsgdXJsOiBzdHJpbmcgfSk6IFByb21pc2U8VD4gPT4ge1xuICBjb25zdCBmZXRjaENvbmZpZyA9ICh7IG1ldGhvZDogJ0dFVCcgfSk7XG4gIHJldHVybiBmZXRjaChjb25maWcudXJsLCBmZXRjaENvbmZpZylcbiAgICAudGhlbjxUPihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpO1xufVxuXG50eXBlIExvYWRVc2Vyc1Jlc3BvbnNlID0ge1xudXNlcnM6IHVzZXJcbltrZXk6IG51bWJlcl0gOiB1c2VyXG59XG5cbnR5cGUgdXNlciA9IHtcbiAgaWQ6IG51bWJlcjtcbiAgbmFtZTogc3RyaW5nO1xufTtcblxuZnVuY3Rpb24gbG9hZFVzZXJzKCkge1xucmV0dXJuIGdldEpTT048TG9hZFVzZXJzUmVzcG9uc2U+KHsgdXJsOiAnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3VzZXJzJyB9KTtcbn1cblxuY29uc3QgdXJsID0gJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS91c2Vycyc7XG5nZXRKU09OPExvYWRVc2Vyc1Jlc3BvbnNlPih7IHVybCB9KVxuLnRoZW4oKHJlczogTG9hZFVzZXJzUmVzcG9uc2UpID0+IHtcbiAgY29uc29sZS5sb2cocmVzWzBdLm5hbWUpIC8vIDw9PSBubyBlcnJvciA/Pz9cbn0pXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tYWluLnRzIiwiZXhwb3J0ICogZnJvbSAnLi9pdGVtcy9pbmRleCc7XG5leHBvcnQgKiBmcm9tICcuL3BsYXlhYmxlL2luZGV4JztcbmV4cG9ydCAqIGZyb20gJy4vbW9iL2luZGV4JztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvd29ybGQvdGFyZ2V0dGFibGUvaW5kZXgudHMiLCJleHBvcnQge0Rvb3J9IGZyb20gJy4vZG9vcic7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3dvcmxkL3RhcmdldHRhYmxlL2l0ZW1zL2luZGV4LnRzIiwiaW1wb3J0IHtUYXJnZXR0YWJsZX0gZnJvbSAnLi4vdGFyZ2V0dGFibGUnO1xuXG5leHBvcnQgY2xhc3MgRG9vciBleHRlbmRzIFRhcmdldHRhYmxlIHtcbiAgdG9TdHJpbmcoKXtcbiAgICByZXR1cm4gJ0Rvb3InO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3dvcmxkL3RhcmdldHRhYmxlL2l0ZW1zL2Rvb3IudHMiLCJpbXBvcnQge01hZ2lhfSBmcm9tICcuLi8uLi9tYWdpYS9tYWdpYSc7XG5pbXBvcnQge0FybWF9IGZyb20gJy4uLy4uL2FybWkvYXJtYSc7XG5cbmltcG9ydCB7UmF6emF9IGZyb20gJy4uLy4uL2VudW1lcmF6aW9uaSc7XG5pbXBvcnQge1BlcnNvbmFnZ2lvfSBmcm9tICcuL3BlcnNvbmFnZ2lvJztcbmltcG9ydCB7U3RhdHMsIElUYXJnZXR0YWJsZX0gZnJvbSAnLi4vdGFyZ2V0dGFibGUnO1xuXG5leHBvcnQgY2xhc3MgQ2hpZXJpY28gZXh0ZW5kcyBQZXJzb25hZ2dpbyB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBub21lOiBzdHJpbmcsIHB1YmxpYyByYXp6YTogUmF6emEsXG4gICAgcHVibGljIHN0YXRzOiBTdGF0cywgcmVhZG9ubHkgaGl0czogbnVtYmVyKXtcbiAgICBzdXBlcihub21lLCByYXp6YSwgc3RhdHMsIGhpdHMpO1xuICB9XG4gIHRvU3RyaW5nKCl7XG4gICAgcmV0dXJuIHRoaXMubm9tZTtcbiAgfVxuICBhdHRhY2sodGFyZ2V0OiBJVGFyZ2V0dGFibGUsIGFybWE6IEFybWEgfCBNYWdpYSk6IG51bWJlcntcbiAgICByZXR1cm4gc3VwZXIuYXR0YWNrKHRhcmdldCwgYXJtYSk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvd29ybGQvdGFyZ2V0dGFibGUvcGxheWFibGUvY2hpZXJpY28udHMiLCJpbXBvcnQge0FybWF9IGZyb20gJy4uLy4uL2FybWkvYXJtYSc7XG5pbXBvcnQge1JhenphfSBmcm9tICcuLi8uLi9lbnVtZXJhemlvbmknO1xuaW1wb3J0IHtQZXJzb25hZ2dpb30gZnJvbSAnLi9wZXJzb25hZ2dpbyc7XG5pbXBvcnQge1N0YXRzLCBJVGFyZ2V0dGFibGV9IGZyb20gJy4uL3RhcmdldHRhYmxlJztcblxuZXhwb3J0IGNsYXNzIEd1ZXJyaWVybyBleHRlbmRzIFBlcnNvbmFnZ2lvIHtcbiAgY29uc3RydWN0b3IocHVibGljIG5vbWU6IHN0cmluZywgcHVibGljIHJhenphOiBSYXp6YSxcbiAgICBwdWJsaWMgc3RhdHM6IFN0YXRzLCByZWFkb25seSBoaXRzOiBudW1iZXIpe1xuICAgIHN1cGVyKG5vbWUsIHJhenphLCBzdGF0cywgaGl0cyk7XG4gIH1cbiAgdG9TdHJpbmcoKXtcbiAgICByZXR1cm4gdGhpcy5ub21lO1xuICB9XG4gIGF0dGFjayh0YXJnZXQ6IElUYXJnZXR0YWJsZSwgYXJtYTogQXJtYSk6IG51bWJlcntcbiAgICByZXR1cm4gc3VwZXIuYXR0YWNrKHRhcmdldCwgYXJtYSk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvd29ybGQvdGFyZ2V0dGFibGUvcGxheWFibGUvZ3VlcnJpZXJvLnRzIiwiaW1wb3J0IHtNYWdpYX0gZnJvbSAnLi4vLi4vbWFnaWEvbWFnaWEnO1xuaW1wb3J0IHtSYXp6YX0gZnJvbSAnLi4vLi4vZW51bWVyYXppb25pJztcbmltcG9ydCB7UGVyc29uYWdnaW99IGZyb20gJy4vcGVyc29uYWdnaW8nO1xuaW1wb3J0IHtTdGF0cywgSVRhcmdldHRhYmxlfSBmcm9tICcuLi90YXJnZXR0YWJsZSc7XG5cbmV4cG9ydCBjbGFzcyBNYWdvIGV4dGVuZHMgUGVyc29uYWdnaW8ge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgbm9tZTogc3RyaW5nLCBwdWJsaWMgcmF6emE6IFJhenphLFxuICAgIHB1YmxpYyBzdGF0czogU3RhdHMsIHJlYWRvbmx5IGhpdHM6IG51bWJlcil7XG4gICAgc3VwZXIobm9tZSwgcmF6emEsIHN0YXRzLCBoaXRzKTtcbiAgfVxuICB0b1N0cmluZygpe1xuICAgIHJldHVybiB0aGlzLm5vbWU7XG4gIH1cbiAgYXR0YWNrKHRhcmdldDogSVRhcmdldHRhYmxlLCBhcm1hOiBNYWdpYSk6IG51bWJlcntcbiAgICByZXR1cm4gc3VwZXIuYXR0YWNrKHRhcmdldCwgYXJtYSk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvd29ybGQvdGFyZ2V0dGFibGUvcGxheWFibGUvbWFnby50cyIsImV4cG9ydCB7RHJhZ299IGZyb20gJy4vRHJhZ28nO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3dvcmxkL3RhcmdldHRhYmxlL21vYi9pbmRleC50cyIsImltcG9ydCB7TWFnaWF9IGZyb20gJy4uLy4uL21hZ2lhL21hZ2lhJztcbmltcG9ydCB7SVRhcmdldHRhYmxlLCBBbmltYXRvfSBmcm9tICcuLi90YXJnZXR0YWJsZSc7XG5cbmV4cG9ydCBjbGFzcyBEcmFnbyBleHRlbmRzIEFuaW1hdG8ge1xuICB0b1N0cmluZygpe1xuICAgIHJldHVybiAnRHJhZ28nO1xuICB9XG4gIGF0dGFjayh0YXJnZXQ6IElUYXJnZXR0YWJsZSwgYXJtYTogTWFnaWEpOiBudW1iZXJ7XG4gICAgcmV0dXJuIHN1cGVyLmF0dGFjayh0YXJnZXQsIGFybWEpO1xuICB9XG5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvd29ybGQvdGFyZ2V0dGFibGUvbW9iL0RyYWdvLnRzIiwiaW1wb3J0IHtJRWZmZXR0b30gZnJvbSAnLi9lZmZldHRpJztcblxuZXhwb3J0IGNsYXNzIEJ1ZmYge1xuICBwcml2YXRlIF9wdWxzZTogbnVtYmVyO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgYnVmZjogSUVmZmV0dG8sIGR1cmF0YTogbnVtYmVyKXtcbiAgICB0aGlzLl9wdWxzZSA9IERhdGUubm93KCkgKyBkdXJhdGE7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgY29uc29sZS5sb2coJ2J1ZmYgZmluaXRvISEhJyk7XG4gICAgfSwgZHVyYXRhKTtcbiAgfVxuICBpc1ZhbGlkKCk6Ym9vbGVhbntcbiAgICBpZih0aGlzLl9wdWxzZSA+PSBEYXRlLm5vdygpKSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvd29ybGQvZWZmZXR0aS9idWZmLnRzIiwiaW1wb3J0IHtNYXRlcmlhbGV9IGZyb20gJy4uL2VudW1lcmF6aW9uaSc7XG5cbmV4cG9ydCBjbGFzcyBBcm1hIHtcbiAgY29uc3RydWN0b3IocHVibGljIG5vbWU6IHN0cmluZywgcHVibGljIGRhbm5pOiBudW1iZXIsXG4gIG1hdGVyaWFsZTogTWF0ZXJpYWxlKXt9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3dvcmxkL2FybWkvYXJtYS50cyJdLCJzb3VyY2VSb290IjoiIn0=