var Filters = { "LeyendaMet": "str", "Asociacion": "str", "Uso": "str", "Provincia": "str" };
function filterFunc() {
    map.eachLayer(function (lyr) {
        if ("options" in lyr && "dataVar" in lyr["options"]) {
            features = this[lyr["options"]["dataVar"]].features.slice(0);
            try {
                for (key in Filters) {
                    if (Filters[key] == "str" || Filters[key] == "bool") {
                        var selection = [];
                        var options = document.getElementById("sel_" + key).options
                        for (var i = 0; i < options.length; i++) {
                            if (options[i].selected) selection.push(options[i].value);
                        }
                        try {
                            if (key in features[0].properties) {
                                for (i = features.length - 1;
                                    i >= 0; --i) {
                                    if (selection.indexOf(
                                        features[i].properties[key]) < 0
                                        && selection.length > 0) {
                                        features.splice(i, 1);
                                    }
                                }
                            }
                        } catch (err) {
                        }
                    }
                    if (Filters[key] == "int") {
                        sliderVals = document.getElementById(
                            "div_" + key).noUiSlider.get();
                        try {
                            if (key in features[0].properties) {
                                for (i = features.length - 1; i >= 0; --i) {
                                    if (parseInt(features[i].properties[key])
                                        < sliderVals[0]
                                        || parseInt(features[i].properties[key])
                                        > sliderVals[1]) {
                                        features.splice(i, 1);
                                    }
                                }
                            }
                        } catch (err) {
                        }
                    }
                    if (Filters[key] == "real") {
                        sliderVals = document.getElementById(
                            "div_" + key).noUiSlider.get();
                        try {
                            if (key in features[0].properties) {
                                for (i = features.length - 1; i >= 0; --i) {
                                    if (features[i].properties[key]
                                        < sliderVals[0]
                                        || features[i].properties[key]
                                        > sliderVals[1]) {
                                        features.splice(i, 1);
                                    }
                                }
                            }
                        } catch (err) {
                        }
                    }
                    if (Filters[key] == "date"
                        || Filters[key] == "datetime"
                        || Filters[key] == "time") {
                        try {
                            if (key in features[0].properties) {
                                HTMLkey = key.replace(/[&\/\\#,+()$~%.'":*?<>{} ]/g, '');
                                startdate = document.getElementById("dat_" +
                                    HTMLkey + "_date1").value.replace(" ", "T");
                                enddate = document.getElementById("dat_" +
                                    HTMLkey + "_date2").value.replace(" ", "T");
                                for (i = features.length - 1; i >= 0; --i) {
                                    if (features[i].properties[key] < startdate
                                        || features[i].properties[key] > enddate) {
                                        features.splice(i, 1);
                                    }
                                }
                            }
                        } catch (err) {
                        }
                    }
                }
            } catch (err) {
            }
            this[lyr["options"]["layerName"]].clearLayers();
            this[lyr["options"]["layerName"]].addData(features);
        }
    })
}
document.getElementById("menu").appendChild(
    document.createElement("div"));
var div_LeyendaMet = document.createElement('div');
div_LeyendaMet.id = "div_LeyendaMet";
div_LeyendaMet.className = "filterselect";
document.getElementById("menu").appendChild(div_LeyendaMet);
sel_LeyendaMet = document.createElement('select');
sel_LeyendaMet.multiple = true;
sel_LeyendaMet.size = 10;
sel_LeyendaMet.id = "sel_LeyendaMet";
var LeyendaMet_options_str = "<option value='' unselected></option>";
sel_LeyendaMet.onchange = function () { filterFunc() };

LeyendaMet_options_str += '<option value="Arco Volcánico Cretacico Metamorfizado">Метаморфизованная вулканическая арка мелового периода</option>';
LeyendaMet_options_str += '<option value="Arco Volcánico Cretácico">Меловая вулканическая арка</option>';
LeyendaMet_options_str += '<option value="Arco Volcánico Paleogénico">Палеогенная вулканическая дуга</option>';
LeyendaMet_options_str += '<option value="Arco Volcánico asociado a ofiolitas">Вулканическая дуга, связанная с офиолитами</option>';
LeyendaMet_options_str += '<option value="Basamento Neoproterozoico, Complejo Socorro">Неопротерозойский базамент, комплекс Сокорро</option>';
LeyendaMet_options_str += '<option value="Caribeana Terrenos Metamórficos">Метаморфические территории Карибского моря</option>';
LeyendaMet_options_str += '<option value="Cinturón Plegado del Norte, Margen Continental">Пояс северного изгиба, континентальная окраина</option>';
LeyendaMet_options_str += '<option value="Complejo anfibolítico">Амфиболитический комплекс</option>';
LeyendaMet_options_str += '<option value="Depósitos Postorogénicos del Terciario">Посторогенные отложения третичного</option>';
LeyendaMet_options_str += '<option value="Depósitos sinorogénicos del Campaniano tardío al Eoceno superior">Синорогенные отложения от позднего кампана до верхнего эоцена</option>';
LeyendaMet_options_str += '<option value="Guaniguanico, Terreno Maya">Гуанигуанико, местность майя</option>';
LeyendaMet_options_str += '<option value="Melange de subducción">Субдукционный меланж</option>';
LeyendaMet_options_str += '<option value="Ofiolitas, Rocas Máficas y ultramáficas">Офиолиты, основные и ультраосновные породы</option>';
LeyendaMet_options_str += '<option value="Plutónicos K">Плутоникс К</option>';
LeyendaMet_options_str += '<option value="Plutónicos P">Плутоника P</option>';
sel_LeyendaMet.innerHTML = LeyendaMet_options_str;
div_LeyendaMet.appendChild(sel_LeyendaMet);
var lab_LeyendaMet = document.createElement('div');
lab_LeyendaMet.innerHTML = 'ГЕО-МЕТАЛЛИК';
lab_LeyendaMet.className = 'filterlabel';
div_LeyendaMet.appendChild(lab_LeyendaMet);
var reset_LeyendaMet = document.createElement('div');
reset_LeyendaMet.innerHTML = 'Очистить фильтр';
reset_LeyendaMet.className = 'filterlabel';
reset_LeyendaMet.onclick = function () {
    var options = document.getElementById("sel_LeyendaMet").options;
    for (var i = 0; i < options.length; i++) {
        options[i].selected = true;
    }
    filterFunc();
};
div_LeyendaMet.appendChild(reset_LeyendaMet);
document.getElementById("menu").appendChild(
    document.createElement("div"));
var div_Asociacion = document.createElement('div');
div_Asociacion.id = "div_Asociacion";
div_Asociacion.className = "filterselect";
document.getElementById("menu").appendChild(div_Asociacion);
sel_Asociacion = document.createElement('select');
sel_Asociacion.multiple = true;
sel_Asociacion.size = 10;
sel_Asociacion.id = "sel_Asociacion";
var Asociacion_options_str = "<option value='' unselected></option>";
sel_Asociacion.onchange = function () { filterFunc() };
Asociacion_options_str += '<option value="Aluminio">Алюминий</option>';
Asociacion_options_str += '<option value="Arcilla">Глина</option>';
Asociacion_options_str += '<option value="Arena carbonatada">Газированный песок</option>';
Asociacion_options_str += '<option value="Arena sílice">Кварцевый песок</option>';
Asociacion_options_str += '<option value="Asbesto Crisotilo">Хризотиловый асбест</option>';
Asociacion_options_str += '<option value="Barita">Барыта</option>';
Asociacion_options_str += '<option value="Basalto">Базальт</option>';
Asociacion_options_str += '<option value="Bentonita">Бентонит</option>';
Asociacion_options_str += '<option value="Calcedonia">Халцедон</option>';
Asociacion_options_str += '<option value="Caliza">Известняк</option>';
Asociacion_options_str += '<option value="Caolin">Каолин</option>';
Asociacion_options_str += '<option value="Cianita">Кианит</option>';
Asociacion_options_str += '<option value="Cieno carbonatado">Газированный ил</option>';
Asociacion_options_str += '<option value="Cobre">Медь</option>';
Asociacion_options_str += '<option value="Cobre (Cobalto; Zinc)">Медь (кобальт; цинк)</option>';
Asociacion_options_str += '<option value="Cobre (Molibdeno)">Медь (молибден)</option>';
Asociacion_options_str += '<option value="Cobre (Molibdeno; Plata)">Медь (молибден; серебро)</option>';
Asociacion_options_str += '<option value="Cobre (Oro)">Медь (золото)</option>';
Asociacion_options_str += '<option value="Cobre (Oro; Plata)">Медь (золото; серебро)</option>';
Asociacion_options_str += '<option value="Cobre (Oro; Titanio)">Медь (золото; титан)</option>';
Asociacion_options_str += '<option value="Cobre (Plata)">Медь (Серебро)</option>';
Asociacion_options_str += '<option value="Cobre (Zinc)">Медь (цинк)</option>';
Asociacion_options_str += '<option value="Cobre (Zinc; Plata; Oro)">Медь (цинк; серебро; золото)</option>';
Asociacion_options_str += '<option value="Cobre; Molibdeno">Медь; Молибден</option>';
Asociacion_options_str += '<option value="Cobre; Oro">Медь; Золото</option>';
Asociacion_options_str += '<option value="Cobre; Oro; Plata">Медь; Золото; Серебро</option>';
Asociacion_options_str += '<option value="Cobre; Oro; Plata, Titanio">Медь; Золото; Серебро, Титан</option>';
Asociacion_options_str += '<option value="Cobre; Oro; Zinc">Медь; Золото; Цинк</option>';
Asociacion_options_str += '<option value="Cobre; Zinc (Cobalto; Plata, Oro)">Медь; Цинк (кобальт; серебро, золото)</option>';
Asociacion_options_str += '<option value="Cobre; Zinc (Plata; Oro)">Медь; Цинк (серебро; золото)</option>';
Asociacion_options_str += '<option value="Cobre; Zinc (Plomo; Plata, Oro)">Медь; Цинк (свинец; серебро, золото)</option>';
Asociacion_options_str += '<option value="Cobre; Zinc; Oro">Медь; Цинк; Золото</option>';
Asociacion_options_str += '<option value="Cobre; Zinc; Oro, Plata">Медь; Цинк; Золото, Серебро</option>';
Asociacion_options_str += '<option value="Cromo">Хром</option>';
Asociacion_options_str += '<option value="Cromo; Elementos del Grupo del Platino ± Oro">Хром; Элементы платино-золотой группы</option>';
Asociacion_options_str += '<option value="Cuarzo">Кварцевый</option>';
Asociacion_options_str += '<option value="Fosforita">Фосфорит</option>';
Asociacion_options_str += '<option value="Gabro">Габбро</option>';
Asociacion_options_str += '<option value="Grafito">Графитовый</option>';
Asociacion_options_str += '<option value="Granate">Гранат</option>';
Asociacion_options_str += '<option value="Hierro">Железо</option>';
Asociacion_options_str += '<option value="Hierro (Cobre)">Железо (медь)</option>';
Asociacion_options_str += '<option value="Hierro- Níquel- Cobalto">Железо-никель-кобальт</option>';
Asociacion_options_str += '<option value="Hierro; Cobre (Oro)">Железо; Медь (золото)</option>';
Asociacion_options_str += '<option value="Hierro; Cobre (Oro; Zinc)">Железо; Медь (золото; цинк)</option>';
Asociacion_options_str += '<option value="Hierro; Cobre (Plata)">Железо; Медь (Серебро)</option>';
Asociacion_options_str += '<option value="Jadeita">Жадеит</option>';
Asociacion_options_str += '<option value="Manganeso">Марганец</option>';
Asociacion_options_str += '<option value="Mica">Слюда</option>';
Asociacion_options_str += '<option value="Mármol">Мрамор</option>';
Asociacion_options_str += '<option value="Nefrita">Нефрит</option>';
Asociacion_options_str += '<option value="Olivino">Оливин</option>';
Asociacion_options_str += '<option value="Omfacita">Омфацита</option>';
Asociacion_options_str += '<option value="Paligorskita">Палигорскит</option>';
Asociacion_options_str += '<option value="Peloide">Пелоид</option>';
Asociacion_options_str += '<option value="Plata (Oro)">Серебро </option>';
Asociacion_options_str += '<option value="Sal Gema">Драгоценная соль</option>';
Asociacion_options_str += '<option value="Thorio; Elementos del Grupo de las Tierras Raras; Cobre, Oro, Plata">Торио; Элементы группы редкоземельных элементов; Медь, золото, серебро</option>';
Asociacion_options_str += '<option value="Toba vítrea">Стекловидный туф</option>';
Asociacion_options_str += '<option value="Wolframio (Molibdeno; Cobre)">Вольфрам (молибден; медь)</option>';
Asociacion_options_str += '<option value="Wollastonita">Волластонит</option>';
Asociacion_options_str += '<option value="Yeso">Бросать</option>';
Asociacion_options_str += '<option value="Zeolita">Цеолит</option>';
Asociacion_options_str += '<option value="Zinc (Oro)">Цинк</option>';
Asociacion_options_str += '<option value="Zinc; Plomo; Cobre (Oro, Plata)">Цинк; Вести; Медь Серебро</option>';
Asociacion_options_str += '<option value="Zinc; Plomo; Plata (Cobre, Oro, Antimonio)">Цинк; Вести; Серебро (медь, сурьма)</option>';
Asociacion_options_str += '<option value="Zinc; Plomo; Plata (Oro, Bario)">Цинк; Вести; Серебро, Барий</option>';
Asociacion_options_str += '<option value="Ópalo-Calcedonia">Опал-Халцедон</option>';
sel_Asociacion.innerHTML = Asociacion_options_str;
div_Asociacion.appendChild(sel_Asociacion);
var lab_Asociacion = document.createElement('div');
lab_Asociacion.innerHTML = 'МЕТАЛЛИЧЕСКИХ';
lab_Asociacion.className = 'filterlabel';
div_Asociacion.appendChild(lab_Asociacion);
var reset_Asociacion = document.createElement('div');
reset_Asociacion.innerHTML = 'Очистить фильтр';
reset_Asociacion.className = 'filterlabel';
reset_Asociacion.onclick = function () {
    var options = document.getElementById("sel_Asociacion").options;
    for (var i = 0; i < options.length; i++) {
        options[i].selected = false;
    }
    filterFunc();
};
div_Asociacion.appendChild(reset_Asociacion);
document.getElementById("menu").appendChild(
    document.createElement("div"));
var div_Uso = document.createElement('div');
div_Uso.id = "div_Uso";
div_Uso.className = "filterselect";
document.getElementById("menu").appendChild(div_Uso);
sel_Uso = document.createElement('select');
sel_Uso.multiple = true;
sel_Uso.size = 10;
sel_Uso.id = "sel_Uso";
var Uso_options_str = "<option value='' unselected></option>";
sel_Uso.onchange = function () { filterFunc() };
Uso_options_str += '<option value="Agricultura">Сельскоехозяйство</option>';
Uso_options_str += '<option value="Cemento">Цемент</option>';
Uso_options_str += '<option value="Cerámica">Керамика</option>';
Uso_options_str += '<option value="Fangos medicinales">Лечебная грязь</option>';
Uso_options_str += '<option value="Fertilizantes">Удобрения</option>';
Uso_options_str += '<option value="Filtrantes">Фильтры</option>';
Uso_options_str += '<option value="Fuente de carbonato de calcio">Источник карбоната кальция</option>';
Uso_options_str += '<option value="Fuente de dióxido de Si">Диоксид кремния</option>';
Uso_options_str += '<option value="Industrias varias">Различные отрасли</option>';
Uso_options_str += '<option value="Joyería y artesanía">Ювелирные изделия и ремесла</option>';
Uso_options_str += '<option value="Piedra decorativa en bloques">Декоративный камень в лесах</option>';
Uso_options_str += '<option value="Árido natural">Природные агрегаты</option>';
Uso_options_str += '<option value="Áridos de trituración">Дробильные агрегаты</option>';
sel_Uso.innerHTML = Uso_options_str;
div_Uso.appendChild(sel_Uso);
var lab_Uso = document.createElement('div');
lab_Uso.innerHTML = 'НЕМЕТАЛЛИЧЕСКИХ';
lab_Uso.className = 'filterlabel';
div_Uso.appendChild(lab_Uso);
var reset_Uso = document.createElement('div');
reset_Uso.innerHTML = 'Очистить фильтр';
reset_Uso.className = 'filterlabel';
reset_Uso.onclick = function () {
    var options = document.getElementById("sel_Uso").options;
    for (var i = 0; i < options.length; i++) {
        options[i].selected = false;
    }
    filterFunc();
};
div_Uso.appendChild(reset_Uso);
document.getElementById("menu").appendChild(
    document.createElement("div"));



