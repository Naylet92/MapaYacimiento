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
LeyendaMet_options_str += '<option value="NULL">NULL</option>';
LeyendaMet_options_str += '<option value="Arco Volcánico Cretacico Metamorfizado">Arco Volcánico Cretacico Metamorfizado</option>';
LeyendaMet_options_str += '<option value="Arco Volcánico Cretácico">Arco Volcánico Cretácico</option>';
LeyendaMet_options_str += '<option value="Arco Volcánico Paleogénico">Arco Volcánico Paleogénico</option>';
LeyendaMet_options_str += '<option value="Arco Volcánico asociado a ofiolitas">Arco Volcánico asociado a ofiolitas</option>';
LeyendaMet_options_str += '<option value="Basamento Neoproterozoico, Complejo Socorro">Basamento Neoproterozoico, Complejo Socorro</option>';
LeyendaMet_options_str += '<option value="Caribeana Terrenos Metamórficos">Caribeana Terrenos Metamórficos</option>';
LeyendaMet_options_str += '<option value="Cinturón Plegado del Norte, Margen Continental">Cinturón Plegado del Norte, Margen Continental</option>';
LeyendaMet_options_str += '<option value="Complejo anfibolítico">Complejo anfibolítico</option>';
LeyendaMet_options_str += '<option value="Depósitos Postorogénicos del Terciario">Depósitos Postorogénicos del Terciario</option>';
LeyendaMet_options_str += '<option value="Depósitos sinorogénicos del Campaniano tardío al Eoceno superior">Depósitos sinorogénicos del Campaniano tardío al Eoceno superior</option>';
LeyendaMet_options_str += '<option value="Guaniguanico, Terreno Maya">Guaniguanico, Terreno Maya</option>';
LeyendaMet_options_str += '<option value="Melange de subducción">Melange de subducción</option>';
LeyendaMet_options_str += '<option value="Ofiolitas, Rocas Máficas y ultramáficas">Ofiolitas, Rocas Máficas y ultramáficas</option>';
LeyendaMet_options_str += '<option value="Plutónicos K">Plutónicos K</option>';
LeyendaMet_options_str += '<option value="Plutónicos P">Plutónicos P</option>';
sel_LeyendaMet.innerHTML = LeyendaMet_options_str;
div_LeyendaMet.appendChild(sel_LeyendaMet);
var lab_LeyendaMet = document.createElement('div');
lab_LeyendaMet.innerHTML = 'LeyendaMet';
lab_LeyendaMet.className = 'filterlabel';
div_LeyendaMet.appendChild(lab_LeyendaMet);
var reset_LeyendaMet = document.createElement('div');
reset_LeyendaMet.innerHTML = 'clear filter';
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
Asociacion_options_str += '<option value="Aluminio">Aluminio</option>';
Asociacion_options_str += '<option value="Arcilla">Arcilla</option>';
Asociacion_options_str += '<option value="Arena carbonatada">Arena carbonatada</option>';
Asociacion_options_str += '<option value="Arena sílice">Arena sílice</option>';
Asociacion_options_str += '<option value="Asbesto Crisotilo">Asbesto Crisotilo</option>';
Asociacion_options_str += '<option value="Barita">Barita</option>';
Asociacion_options_str += '<option value="Basalto">Basalto</option>';
Asociacion_options_str += '<option value="Bentonita">Bentonita</option>';
Asociacion_options_str += '<option value="Calcedonia">Calcedonia</option>';
Asociacion_options_str += '<option value="Caliza">Caliza</option>';
Asociacion_options_str += '<option value="Caolin">Caolin</option>';
Asociacion_options_str += '<option value="Cianita">Cianita</option>';
Asociacion_options_str += '<option value="Cieno carbonatado">Cieno carbonatado</option>';
Asociacion_options_str += '<option value="Cobre">Cobre</option>';
Asociacion_options_str += '<option value="Cobre (Cobalto; Zinc)">Cobre (Cobalto; Zinc)</option>';
Asociacion_options_str += '<option value="Cobre (Molibdeno)">Cobre (Molibdeno)</option>';
Asociacion_options_str += '<option value="Cobre (Molibdeno; Plata)">Cobre (Molibdeno; Plata)</option>';
Asociacion_options_str += '<option value="Cobre (Oro)">Cobre (Oro)</option>';
Asociacion_options_str += '<option value="Cobre (Oro; Plata)">Cobre (Oro; Plata)</option>';
Asociacion_options_str += '<option value="Cobre (Oro; Titanio)">Cobre (Oro; Titanio)</option>';
Asociacion_options_str += '<option value="Cobre (Plata)">Cobre (Plata)</option>';
Asociacion_options_str += '<option value="Cobre (Zinc)">Cobre (Zinc)</option>';
Asociacion_options_str += '<option value="Cobre (Zinc; Plata; Oro)">Cobre (Zinc; Plata; Oro)</option>';
Asociacion_options_str += '<option value="Cobre; Molibdeno">Cobre; Molibdeno</option>';
Asociacion_options_str += '<option value="Cobre; Oro">Cobre; Oro</option>';
Asociacion_options_str += '<option value="Cobre; Oro; Plata">Cobre; Oro; Plata</option>';
Asociacion_options_str += '<option value="Cobre; Oro; Plata, Titanio">Cobre; Oro; Plata, Titanio</option>';
Asociacion_options_str += '<option value="Cobre; Oro; Zinc">Cobre; Oro; Zinc</option>';
Asociacion_options_str += '<option value="Cobre; Zinc (Cobalto; Plata, Oro)">Cobre; Zinc (Cobalto; Plata, Oro)</option>';
Asociacion_options_str += '<option value="Cobre; Zinc (Plata; Oro)">Cobre; Zinc (Plata; Oro)</option>';
Asociacion_options_str += '<option value="Cobre; Zinc (Plomo; Plata, Oro)">Cobre; Zinc (Plomo; Plata, Oro)</option>';
Asociacion_options_str += '<option value="Cobre; Zinc; Oro">Cobre; Zinc; Oro</option>';
Asociacion_options_str += '<option value="Cobre; Zinc; Oro, Plata">Cobre; Zinc; Oro, Plata</option>';
Asociacion_options_str += '<option value="Cromo">Cromo</option>';
Asociacion_options_str += '<option value="Cromo; Elementos del Grupo del Platino ± Oro">Cromo; Elementos del Grupo del Platino ± Oro</option>';
Asociacion_options_str += '<option value="Cuarzo">Cuarzo</option>';
Asociacion_options_str += '<option value="Fosforita">Fosforita</option>';
Asociacion_options_str += '<option value="Gabro">Gabro</option>';
Asociacion_options_str += '<option value="Grafito">Grafito</option>';
Asociacion_options_str += '<option value="Granate">Granate</option>';
Asociacion_options_str += '<option value="Hierro">Hierro</option>';
Asociacion_options_str += '<option value="Hierro (Cobre)">Hierro (Cobre)</option>';
Asociacion_options_str += '<option value="Hierro- Níquel- Cobalto">Hierro- Níquel- Cobalto</option>';
Asociacion_options_str += '<option value="Hierro; Cobre (Oro)">Hierro; Cobre (Oro)</option>';
Asociacion_options_str += '<option value="Hierro; Cobre (Oro; Zinc)">Hierro; Cobre (Oro; Zinc)</option>';
Asociacion_options_str += '<option value="Hierro; Cobre (Plata)">Hierro; Cobre (Plata)</option>';
Asociacion_options_str += '<option value="Jadeita">Jadeita</option>';
Asociacion_options_str += '<option value="Manganeso">Manganeso</option>';
Asociacion_options_str += '<option value="Mica">Mica</option>';
Asociacion_options_str += '<option value="Mármol">Mármol</option>';
Asociacion_options_str += '<option value="Nefrita">Nefrita</option>';
Asociacion_options_str += '<option value="Olivino">Olivino</option>';
Asociacion_options_str += '<option value="Omfacita">Omfacita</option>';
Asociacion_options_str += '<option value="Oro">Oro</option>';
Asociacion_options_str += '<option value="Oro (Cobre)">Oro (Cobre)</option>';
Asociacion_options_str += '<option value="Oro; Cobre">Oro; Cobre</option>';
Asociacion_options_str += '<option value="Oro; Plata">Oro; Plata</option>';
Asociacion_options_str += '<option value="Oro; Plata; Antimonio">Oro; Plata; Antimonio</option>';
Asociacion_options_str += '<option value="Paligorskita">Paligorskita</option>';
Asociacion_options_str += '<option value="Peloide">Peloide</option>';
Asociacion_options_str += '<option value="Plata (Oro)">Plata (Oro)</option>';
Asociacion_options_str += '<option value="Plata; Oro">Plata; Oro</option>';
Asociacion_options_str += '<option value="Sal Gema">Sal Gema</option>';
Asociacion_options_str += '<option value="Thorio; Elementos del Grupo de las Tierras Raras; Cobre, Oro, Plata">Thorio; Elementos del Grupo de las Tierras Raras; Cobre, Oro, Plata</option>';
Asociacion_options_str += '<option value="Toba vítrea">Toba vítrea</option>';
Asociacion_options_str += '<option value="Wolframio (Molibdeno; Cobre)">Wolframio (Molibdeno; Cobre)</option>';
Asociacion_options_str += '<option value="Wollastonita">Wollastonita</option>';
Asociacion_options_str += '<option value="Yeso">Yeso</option>';
Asociacion_options_str += '<option value="Zeolita">Zeolita</option>';
Asociacion_options_str += '<option value="Zinc (Oro)">Zinc (Oro)</option>';
Asociacion_options_str += '<option value="Zinc; Plomo; Cobre (Oro, Plata)">Zinc; Plomo; Cobre (Oro, Plata)</option>';
Asociacion_options_str += '<option value="Zinc; Plomo; Plata (Cobre, Oro, Antimonio)">Zinc; Plomo; Plata (Cobre, Oro, Antimonio)</option>';
Asociacion_options_str += '<option value="Zinc; Plomo; Plata (Oro, Bario)">Zinc; Plomo; Plata (Oro, Bario)</option>';
Asociacion_options_str += '<option value="Ópalo-Calcedonia">Ópalo-Calcedonia</option>';
sel_Asociacion.innerHTML = Asociacion_options_str;
div_Asociacion.appendChild(sel_Asociacion);
var lab_Asociacion = document.createElement('div');
lab_Asociacion.innerHTML = 'Asociacion';
lab_Asociacion.className = 'filterlabel';
div_Asociacion.appendChild(lab_Asociacion);
var reset_Asociacion = document.createElement('div');
reset_Asociacion.innerHTML = 'clear filter';
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
Uso_options_str += '<option value="Agricultura">Agricultura</option>';
Uso_options_str += '<option value="Cemento">Cemento</option>';
Uso_options_str += '<option value="Cerámica">Cerámica</option>';
Uso_options_str += '<option value="Fangos medicinales">Fangos medicinales</option>';
Uso_options_str += '<option value="Fertilizantes">Fertilizantes</option>';
Uso_options_str += '<option value="Filtrantes">Filtrantes</option>';
Uso_options_str += '<option value="Fuente de carbonato de calcio">Fuente de carbonato de calcio</option>';
Uso_options_str += '<option value="Fuente de dióxido de Si">Fuente de dióxido de Si</option>';
Uso_options_str += '<option value="Industrias varias">Industrias varias</option>';
Uso_options_str += '<option value="Joyería y artesanía">Joyería y artesanía</option>';
Uso_options_str += '<option value="Piedra decorativa en bloques">Piedra decorativa en bloques</option>';
Uso_options_str += '<option value="Árido natural">Árido natural</option>';
Uso_options_str += '<option value="Áridos de trituración">Áridos de trituración</option>';
sel_Uso.innerHTML = Uso_options_str;
div_Uso.appendChild(sel_Uso);
var lab_Uso = document.createElement('div');
lab_Uso.innerHTML = 'Uso';
lab_Uso.className = 'filterlabel';
div_Uso.appendChild(lab_Uso);
var reset_Uso = document.createElement('div');
reset_Uso.innerHTML = 'clear filter';
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



