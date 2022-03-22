var map = L.map('map', {
    zoomControl: true, maxZoom: 10, minZoom: 7,
   
}).fitBounds([[19.20023035739292,-88.03023513654419],[24.938502140980133,-73.88382069103388]]);
 


/////////////////////////dibujo de geometria//////////////////////////////////
// Initialise the FeatureGroup to store editable layers
var Alllayers = new L.FeatureGroup();  
map.addLayer(Alllayers);

var drawControl = new L.Control.Draw({
    position: 'topright',
    draw: {
        polygon: {
            shapeOptions: {
                color: 'purple',
                opacity: 1,
                weight: 5
            },
            allowIntersection: false,
            drawError: {
                color: 'orange',
                timeout: 1000
            },
            showArea: true,
            metric: false,
            repeatMode: true
        },
        polyline: {
            shapeOptions: {
                color: 'red',
                opacity: 1,
                weight: 5
            },
            allowIntersection: false,
            drawError: {
                color: 'orange',
                timeout: 1000
            },
            showArea: true,
            metric: false,
            repeatMode: true
        },
        rect: {
            shapeOptions: {
                color: 'green',
                opacity: 1,
                weight: 5
            },
        },
        circle: {
            shapeOptions: {
                color: 'steelblue',
                opacity: 1,
                weight: 5
            },
        }
    },
    edit: {
        featureGroup: Alllayers
     
    }
}).addTo(map);


map.on(L.Draw.Event.CREATED, function (e) {
    var layer = e.layer;
    Alllayers.addLayer(layer);
});


var sidebar = L.control.sidebar({ 
 container: 'sidebar', 
}).addTo(map);

var hash = new L.Hash(map);

var autolinker = new Autolinker({ truncate: { length: 30, location: 'smart' } });
L.control.locate({ locateOptions: { maxZoom: 16 } }).addTo(map);
var measureControl = new L.Control.Measure({
    position: 'topleft',
    primaryLengthUnit: 'Метры',
    secondaryLengthUnit: 'КИЛОМЕТРОВ',
    primaryAreaUnit: 'КВАДРАТНЫЙ МЕТР',
    secondaryAreaUnit: 'ГЕКТАРОВ'
});
measureControl.addTo(map);
document.getElementsByClassName('leaflet-control-measure-toggle')[0]
    .innerHTML = '';
document.getElementsByClassName('leaflet-control-measure-toggle')[0]
    .className += ' fas fa-ruler';



var bounds_group = new L.featureGroup([]);
function setBounds() {
    if (bounds_group.getLayers().length) {
        map.fitBounds(bounds_group.getBounds());
    }
    map.setMaxBounds(map.getBounds());
}

map.createPane('pane_ESRINationalGeografy_0');
map.getPane('pane_ESRINationalGeografy_0').style.zIndex = 400;
var layer_ESRINationalGeografy_0 = L.tileLayer('http://services.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}', {
    pane: 'pane_ESRINationalGeografy_0',
    opacity: 1.0,
    attribution: '',
    minZoom: 1,
    maxZoom: 28,
    minNativeZoom: 0,
    maxNativeZoom: 18
});
layer_ESRINationalGeografy_0;
map.addLayer(layer_ESRINationalGeografy_0);

map.createPane('pane_OpenStreetMap_0');
map.getPane('pane_OpenStreetMap_0').style.zIndex = 401;
var layer_OpenStreetMap_0 = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    pane: 'pane_OpenStreetMap_0',
    opacity: 1.0,
    attribution: '',
    minZoom: 7,
    maxZoom: 17,
    minNativeZoom: 0,
    maxNativeZoom: 19
});
layer_OpenStreetMap_0;
map.addLayer(layer_OpenStreetMap_0);
function pop_geometalico_1(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <th scope="row"></th>\
                <td>' + (feature.properties['LeyendaMet'] !== null ? autolinker.link(feature.properties['LeyendaMet'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}

function style_geometalico_1_0(feature) {
    switch(String(feature.properties['LeyendaMet'])) {
        case 'Arco Volcánico asociado a ofiolitas':
            return {
        pane: 'pane_geometalico_1',
        stroke: false, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(141,242,151,1.0)',
        interactive: true,
    }
            break;
        case 'Arco Volcánico Cretácico':
            return {
        pane: 'pane_geometalico_1',
        stroke: false, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(214,94,106,1.0)',
        interactive: true,
    }
            break;
        case 'Arco Volcánico Cretacico Metamorfizado':
            return {
        pane: 'pane_geometalico_1',
        stroke: false, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(150,211,186,1.0)',
        interactive: true,
    }
            break;
        case 'Arco Volcánico Paleogénico':
            return {
        pane: 'pane_geometalico_1',
        opacity: 1,
        color: 'rgba(35,35,35,0.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(225,120,136,1.0)',
        interactive: true,
    }
            break;
        case 'Basamento Neoproterozoico, Complejo Socorro':
            return {
        pane: 'pane_geometalico_1',
        opacity: 1,
        color: 'rgba(35,35,35,0.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(218,137,183,1.0)',
        interactive: true,
    }
            break;
        case 'Caribeana Terrenos Metamórficos':
            return {
        pane: 'pane_geometalico_1',
        stroke: false, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(166,206,227,1.0)',
        interactive: true,
    }
            break;
        case 'Cinturón Plegado del Norte, Margen Continental':
            return {
        pane: 'pane_geometalico_1',
        opacity: 1,
        color: 'rgba(35,35,35,0.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(199,247,153,1.0)',
        interactive: true,
    }
            break;
        case 'Complejo anfibolítico':
            return {
        pane: 'pane_geometalico_1',
        stroke: false, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(195,158,191,1.0)',
        interactive: true,
    }
            break;
        case 'Depósitos Postorogénicos del Terciario':
            return {
        pane: 'pane_geometalico_1',
        opacity: 1,
        color: 'rgba(35,35,35,0.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(248,245,172,1.0)',
        interactive: true,
    }
            break;
        case 'Depósitos sinorogénicos del Campaniano tardío al Eoceno superior':
            return {
        pane: 'pane_geometalico_1',
        opacity: 1,
        color: 'rgba(35,35,35,0.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(248,219,137,1.0)',
        interactive: true,
    }
            break;
        case 'Guaniguanico, Terreno Maya':
            return {
        pane: 'pane_geometalico_1',
        opacity: 1,
        color: 'rgba(35,35,35,0.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(118,227,234,1.0)',
        interactive: true,
    }
            break;
        case 'Melange de subducción':
            return {
        pane: 'pane_geometalico_1',
        opacity: 1,
        color: 'rgba(35,35,35,0.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(199,93,231,1.0)',
        interactive: true,
    }
            break;
        case 'Ofiolitas, Rocas Máficas y ultramáficas':
            return {
        pane: 'pane_geometalico_1',
        opacity: 1,
        color: 'rgba(35,35,35,0.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(231,187,249,1.0)',
        interactive: true,
    }
            break;
        case 'Plutónicos K':
            return {
        pane: 'pane_geometalico_1',
        stroke: false, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(178,223,138,1.0)',
        interactive: true,
    }
            break;
        case 'Plutónicos P':
            return {
        pane: 'pane_geometalico_1',
        stroke: false, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(238,195,115,1.0)',
        interactive: true,
    }
            break;
        default:
            return {
        pane: 'pane_geometalico_1',
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(231,231,35,1.0)',
        interactive: true,
    }
            break;
    }
}
map.createPane('pane_geometalico_1');
map.getPane('pane_geometalico_1').style.zIndex = 402;
map.getPane('pane_geometalico_1').style['mix-blend-mode'] = 'normal';
var GeoMetalico = new L.geoJson(json_geometalico_1, {
    attribution: '',
    interactive: true,
    dataVar: 'json_geometalico_1',
    layerName: 'GeoMetalico',
    pane: 'pane_geometalico_1',
    onEachFeature: pop_geometalico_1,
    style: style_geometalico_1_0,
});
bounds_group.addLayer(GeoMetalico);
map.addLayer(GeoMetalico);
function pop_Cayos_2(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <td>' + (feature.properties['Tipo_eleme'] !== null ? autolinker.link(feature.properties['Tipo_eleme'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}

function style_Cayos_2_0() {
    return {
        pane: 'pane_Cayos_2',
        opacity: 1,
        color: 'rgba(203,208,197,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(213,180,60,0.0)',
        interactive: true,
    }
}
map.createPane('pane_Cayos_2');
map.getPane('pane_Cayos_2').style.zIndex = 403;
map.getPane('pane_Cayos_2').style['mix-blend-mode'] = 'normal';
var Кайос = new L.geoJson(json_Cayos_2, {
    attribution: '',
    interactive: true,
    dataVar: 'json_Cayos_2',
    layerName: 'Кайос',
    pane: 'pane_Cayos_2',
    onEachFeature: pop_Cayos_2,
    style: style_Cayos_2_0,
});
bounds_group.addLayer(Кайос);
map.addLayer(Кайос);
function pop_CapitalesProvinciales_3(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <th scope="row">Провинция:</th>\
                <td>' + (feature.properties['Provincia'] !== null ? autolinker.link(feature.properties['Provincia'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}

function style_CapitalesProvinciales_3_0() {
    return {
        pane: 'pane_CapitalesProvinciales_3',
        opacity: 1,
        color: 'rgba(35,35,35,0.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(238,238,154,1.0)',
        interactive: true,
    }
}
map.createPane('pane_CapitalesProvinciales_3');
map.getPane('pane_CapitalesProvinciales_3').style.zIndex = 404;
map.getPane('pane_CapitalesProvinciales_3').style['mix-blend-mode'] = 'normal';
var Провинциальные_столицы = new L.geoJson(json_CapitalesProvinciales_3, {
    attribution: '',
    interactive: true,
    dataVar: 'json_CapitalesProvinciales_3',
    layerName: 'Провинциальные_столицы',
    pane: 'pane_CapitalesProvinciales_3',
    onEachFeature: pop_CapitalesProvinciales_3,
    style: style_CapitalesProvinciales_3_0,
});
bounds_group.addLayer(Провинциальные_столицы);
map.addLayer(Провинциальные_столицы);
function pop_Cayos_lineayregion_4(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <th scope="row"></th>\
                <td>' + (feature.properties['TIPO_ELEME'] !== null ? autolinker.link(feature.properties['TIPO_ELEME'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}

function style_Cayos_lineayregion_4_0() {
    return {
        pane: 'pane_Cayos_lineayregion_4',
        opacity: 1,
        color: 'rgba(203,208,197,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(238,238,154,1.0)',
        interactive: true,
    }
}
map.createPane('pane_Cayos_lineayregion_4');
map.getPane('pane_Cayos_lineayregion_4').style.zIndex = 405;
map.getPane('pane_Cayos_lineayregion_4').style['mix-blend-mode'] = 'normal';
var Линия_и_регион_Кайос = new L.geoJson(json_Cayos_lineayregion_4, {
    attribution: '',
    interactive: true,
    dataVar: 'json_Cayos_lineayregion_4',
    layerName: 'Линия_и_регион_Кайос',
    pane: 'pane_Cayos_lineayregion_4',
    onEachFeature: pop_Cayos_lineayregion_4,
    style: style_Cayos_lineayregion_4_0,
});
bounds_group.addLayer(Линия_и_регион_Кайос);
map.addLayer(Линия_и_регион_Кайос);
function pop_Costa_5(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <td>' + (feature.properties['Tipo_eleme'] !== null ? autolinker.link(feature.properties['Tipo_eleme'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}

function style_Costa_5_0() {
    return {
        pane: 'pane_Costa_5',
        opacity: 1,
        color: 'rgba(203,208,197,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(238,238,154,0.0)',
        interactive: true,
    }
}
map.createPane('pane_Costa_5');
map.getPane('pane_Costa_5').style.zIndex = 406;
map.getPane('pane_Costa_5').style['mix-blend-mode'] = 'normal';
var Берег = new L.geoJson(json_Costa_5, {
    attribution: '',
    interactive: true,
    dataVar: 'json_Costa_5',
    layerName: 'Берег',
    pane: 'pane_Costa_5',
    onEachFeature: pop_Costa_5,
    style: style_Costa_5_0,
});
bounds_group.addLayer(Берег);
map.addLayer(Берег);
function pop_Drenaje_Sfcial_6(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <th scope="row">Виды:</th>\
                <td>' + (feature.properties['Tipo'] !== null ? autolinker.link(feature.properties['Tipo'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Имя:</th>\
                <td>' + (feature.properties['Nombre'] !== null ? autolinker.link(feature.properties['Nombre'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}

function style_Drenaje_Sfcial_6_0() {
    return {
        pane: 'pane_Drenaje_Sfcial_6',
        opacity: 1,
        color: 'rgba(210,210,130,1.0)',
        dashArray: '',
        lineCap: 'square',
        lineJoin: 'bevel',
        weight: 1.0,
        fillOpacity: 0,
        interactive: true,
    }
}
map.createPane('pane_Drenaje_Sfcial_6');
map.getPane('pane_Drenaje_Sfcial_6').style.zIndex = 407;
map.getPane('pane_Drenaje_Sfcial_6').style['mix-blend-mode'] = 'normal';
var Стоки = new L.geoJson(json_Drenaje_Sfcial_6, {
    attribution: '',
    interactive: true,
    dataVar: 'json_Drenaje_Sfcial_6',
    layerName: 'Стоки',
    pane: 'pane_Drenaje_Sfcial_6',
    onEachFeature: pop_Drenaje_Sfcial_6,
    style: style_Drenaje_Sfcial_6_0,
});
bounds_group.addLayer(Стоки);
map.addLayer(Стоки);
function pop_Fallas_7(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <th scope="row">ОПИСАНИЕ:</th>\
                <td>' + (feature.properties['DESCRIPCIO'] !== null ? autolinker.link(feature.properties['DESCRIPCIO'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}

function style_Fallas_7_0() {
    return {
        pane: 'pane_Fallas_7',
        opacity: 1,
        color: 'rgba(251,154,153,1.0)',
        dashArray: '',
        lineCap: 'square',
        lineJoin: 'bevel',
        weight: 1.0,
        fillOpacity: 0,
        interactive: true,
    }
}
map.createPane('pane_Fallas_7');
map.getPane('pane_Fallas_7').style.zIndex = 408;
map.getPane('pane_Fallas_7').style['mix-blend-mode'] = 'normal';
var Неудачи = new L.geoJson(json_Fallas_7, {
    attribution: '',
    interactive: true,
    dataVar: 'json_Fallas_7',
    layerName: 'Неудачи',
    pane: 'pane_Fallas_7',
    onEachFeature: pop_Fallas_7,
    style: style_Fallas_7_0,
});
bounds_group.addLayer(Неудачи);
map.addLayer(Неудачи);


function style_Lim_Prov_L_8_0() {
    return {
        pane: 'pane_Lim_Prov_L_8',
        opacity: 1,
        color: 'rgba(203,203,115,1.0)',
        dashArray: '',
        lineCap: 'square',
        lineJoin: 'bevel',
        weight: 1.0,
        fillOpacity: 0,
        interactive: true,
    }
}
map.createPane('pane_Lim_Prov_L_8');
map.getPane('pane_Lim_Prov_L_8').style.zIndex = 409;
map.getPane('pane_Lim_Prov_L_8').style['mix-blend-mode'] = 'normal';
var Провинциальные_границы = new L.geoJson(json_Lim_Prov_L_8, {
    attribution: '',
    interactive: true,
    dataVar: 'json_Lim_Prov_L_8',
    layerName: 'Провинциальные_границы',
    pane: 'pane_Lim_Prov_L_8',
    style: style_Lim_Prov_L_8_0,
});
bounds_group.addLayer(Провинциальные_границы);
map.addLayer(Провинциальные_границы);


function style_Lim_Prov_LINEAL_9_0() {
    return {
        pane: 'pane_Lim_Prov_LINEAL_9',
        opacity: 1,
        color: 'rgba(0,0,0,1.0)',
        dashArray: '10,5,1,5',
        lineCap: 'square',
        lineJoin: 'bevel',
        weight: 1.0,
        fillOpacity: 0,
        interactive: true,
    }
}
map.createPane('pane_Lim_Prov_LINEAL_9');
map.getPane('pane_Lim_Prov_LINEAL_9').style.zIndex = 410;
map.getPane('pane_Lim_Prov_LINEAL_9').style['mix-blend-mode'] = 'normal';
var Lim_Prov_LINEAL = new L.geoJson(json_Lim_Prov_LINEAL_9, {
    attribution: '',
    interactive: true,
    dataVar: 'json_Lim_Prov_LINEAL_9',
    layerName: 'Lim_Prov_LINEAL',
    pane: 'pane_Lim_Prov_LINEAL_9',
    
    style: style_Lim_Prov_LINEAL_9_0,
});
bounds_group.addLayer(Lim_Prov_LINEAL);
map.addLayer(Lim_Prov_LINEAL);
function pop_Fangosmedicinales_10(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <th scope="row">Место:</th>\
                <td>' + (feature.properties['Nombre'] !== null ? autolinker.link(feature.properties['Nombre'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Широта:</th>\
                <td>' + (feature.properties['Latitud'] !== null ? autolinker.link(feature.properties['Latitud'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Длина:</th>\
                <td>' + (feature.properties['Longitud'] !== null ? autolinker.link(feature.properties['Longitud'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Сырье:</th>\
                <td>' + (feature.properties['Materia_Pr'] !== null ? autolinker.link(feature.properties['Materia_Pr'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Название:</th>\
                <td>' + (feature.properties['Asociacion'] !== null ? autolinker.link(feature.properties['Asociacion'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Классификация:</th>\
                <td>' + (feature.properties['Clasificac'] !== null ? autolinker.link(feature.properties['Clasificac'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Использование:</th>\
                <td>' + (feature.properties['Uso'] !== null ? autolinker.link(feature.properties['Uso'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}
function style_Fangosmedicinales_10_0(feature) {
    var context = {
        feature: feature,
        variables: {}
    };
    // Start of if blocks and style check logic
    if (exp_Fangosmedicinales_10rule0_eval_expression(context)) {
          return {
        pane: 'pane_Fangosmedicinales_10',
        shape: 'triangle',
        radius: 8.000000000000002,
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(199,166,56,1.0)',
        interactive: true,
    };
        }
    else {
        return {fill: false, stroke: false};
    }
}
map.createPane('pane_Fangosmedicinales_10');
map.getPane('pane_Fangosmedicinales_10').style.zIndex = 411;
map.getPane('pane_Fangosmedicinales_10').style['mix-blend-mode'] = 'normal';
var Лечебная_грязь = new L.geoJson(json_Fangosmedicinales_10, {
    attribution: '',
    interactive: true,
    dataVar: 'json_Fangosmedicinales_10',
    layerName: 'Лечебная_грязь',
    pane: 'pane_Fangosmedicinales_10',
    onEachFeature: pop_Fangosmedicinales_10,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.shapeMarker(latlng, style_Fangosmedicinales_10_0(feature));
    },
});
bounds_group.addLayer(Лечебная_грязь);
map.addLayer(Лечебная_грязь);
function pop_Agricultura_11(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <th scope="row">Место:</th>\
                <td>' + (feature.properties['Nombre'] !== null ? autolinker.link(feature.properties['Nombre'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Широта:</th>\
                <td>' + (feature.properties['Latitud'] !== null ? autolinker.link(feature.properties['Latitud'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Длина:</th>\
                <td>' + (feature.properties['Longitud'] !== null ? autolinker.link(feature.properties['Longitud'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Сырье:</th>\
                <td>' + (feature.properties['Materia_Pr'] !== null ? autolinker.link(feature.properties['Materia_Pr'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Название:</th>\
                <td>' + (feature.properties['Asociacion'] !== null ? autolinker.link(feature.properties['Asociacion'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Классификация:</th>\
                <td>' + (feature.properties['Clasificac'] !== null ? autolinker.link(feature.properties['Clasificac'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Использование:</th>\
                <td>' + (feature.properties['Uso'] !== null ? autolinker.link(feature.properties['Uso'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}
function style_Agricultura_11_0(feature) {
    var context = {
        feature: feature,
        variables: {}
    };
    // Start of if blocks and style check logic
    if (exp_Agricultura_11rule0_eval_expression(context)) {
          return {
        pane: 'pane_Agricultura_11',
        shape: 'triangle',
        radius: 8.000000000000002,
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(172,40,56,1.0)',
        interactive: true,
    };
        }
    else {
        return {fill: false, stroke: false};
    }
}
map.createPane('pane_Agricultura_11');
map.getPane('pane_Agricultura_11').style.zIndex = 412;
map.getPane('pane_Agricultura_11').style['mix-blend-mode'] = 'normal';
var Сельскоехозяйство = new L.geoJson(json_Agricultura_11, {
    attribution: '',
    interactive: true,
    dataVar: 'json_Agricultura_11',
    layerName: 'Сельскоехозяйство',
    pane: 'pane_Agricultura_11',
    onEachFeature: pop_Agricultura_11,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.shapeMarker(latlng, style_Agricultura_11_0(feature));
    },
});
bounds_group.addLayer(Сельскоехозяйство);
map.addLayer(Сельскоехозяйство);
function pop_ridosdetrituracin_12(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <th scope="row">Место:</th>\
                <td>' + (feature.properties['Nombre'] !== null ? autolinker.link(feature.properties['Nombre'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Широта:</th>\
                <td>' + (feature.properties['Latitud'] !== null ? autolinker.link(feature.properties['Latitud'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Длина:</th>\
                <td>' + (feature.properties['Longitud'] !== null ? autolinker.link(feature.properties['Longitud'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Сырье:</th>\
                <td>' + (feature.properties['Materia_Pr'] !== null ? autolinker.link(feature.properties['Materia_Pr'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Название:</th>\
                <td>' + (feature.properties['Asociacion'] !== null ? autolinker.link(feature.properties['Asociacion'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Классификация:</th>\
                <td>' + (feature.properties['Clasificac'] !== null ? autolinker.link(feature.properties['Clasificac'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Использование:</th>\
                <td>' + (feature.properties['Uso'] !== null ? autolinker.link(feature.properties['Uso'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}
function style_ridosdetrituracin_12_0(feature) {
    var context = {
        feature: feature,
        variables: {}
    };
    // Start of if blocks and style check logic
    if (exp_ridosdetrituracin_12rule0_eval_expression(context)) {
          return {
        pane: 'pane_ridosdetrituracin_12',
        shape: 'triangle',
        radius: 8.000000000000002,
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(80,36,107,1.0)',
        interactive: true,
    };
        }
    else {
        return {fill: false, stroke: false};
    }
}
map.createPane('pane_ridosdetrituracin_12');
map.getPane('pane_ridosdetrituracin_12').style.zIndex = 413;
map.getPane('pane_ridosdetrituracin_12').style['mix-blend-mode'] = 'normal';
var Дробильные_агрегаты = new L.geoJson(json_ridosdetrituracin_12, {
    attribution: '',
    interactive: true,
    dataVar: 'json_ridosdetrituracin_12',
    layerName: 'Дробильные_агрегаты',
    pane: 'pane_ridosdetrituracin_12',
    onEachFeature: pop_ridosdetrituracin_12,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.shapeMarker(latlng, style_ridosdetrituracin_12_0(feature));
    },
});
bounds_group.addLayer(Дробильные_агрегаты);
map.addLayer(Дробильные_агрегаты);
function pop_ridosnaturales_13(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <th scope="row">Место:</th>\
                <td>' + (feature.properties['Nombre'] !== null ? autolinker.link(feature.properties['Nombre'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Широта:</th>\
                <td>' + (feature.properties['Latitud'] !== null ? autolinker.link(feature.properties['Latitud'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Длина:</th>\
                <td>' + (feature.properties['Longitud'] !== null ? autolinker.link(feature.properties['Longitud'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Сырье:</th>\
                <td>' + (feature.properties['Materia_Pr'] !== null ? autolinker.link(feature.properties['Materia_Pr'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Название:</th>\
                <td>' + (feature.properties['Asociacion'] !== null ? autolinker.link(feature.properties['Asociacion'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Классификация:</th>\
                <td>' + (feature.properties['Clasificac'] !== null ? autolinker.link(feature.properties['Clasificac'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Uso:</th>\
                <td>' + (feature.properties['Uso'] !== null ? autolinker.link(feature.properties['Uso'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}
function style_ridosnaturales_13_0(feature) {
    var context = {
        feature: feature,
        variables: {}
    };
    // Start of if blocks and style check logic
    if (exp_ridosnaturales_13rule0_eval_expression(context)) {
          return {
        pane: 'pane_ridosnaturales_13',
        shape: 'triangle',
        radius: 8.000000000000002,
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(128,90,151,1.0)',
        interactive: true,
    };
        }
    else {
        return {fill: false, stroke: false};
    }
}
map.createPane('pane_ridosnaturales_13');
map.getPane('pane_ridosnaturales_13').style.zIndex = 414;
map.getPane('pane_ridosnaturales_13').style['mix-blend-mode'] = 'normal';
var Природные_агрегаты = new L.geoJson(json_ridosnaturales_13, {
    attribution: '',
    interactive: true,
    dataVar: 'json_ridosnaturales_13',
    layerName: 'Природные_агрегаты',
    pane: 'pane_ridosnaturales_13',
    onEachFeature: pop_ridosnaturales_13,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.shapeMarker(latlng, style_ridosnaturales_13_0(feature));
    },
});
bounds_group.addLayer(Природные_агрегаты);
map.addLayer(Природные_агрегаты);
function pop_Piedradecorativaenbosques_14(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <th scope="row">Место:</th>\
                <td>' + (feature.properties['Nombre'] !== null ? autolinker.link(feature.properties['Nombre'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Широта:</th>\
                <td>' + (feature.properties['Latitud'] !== null ? autolinker.link(feature.properties['Latitud'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Длина:</th>\
                <td>' + (feature.properties['Longitud'] !== null ? autolinker.link(feature.properties['Longitud'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Сырье:</th>\
                <td>' + (feature.properties['Materia_Pr'] !== null ? autolinker.link(feature.properties['Materia_Pr'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Название:</th>\
                <td>' + (feature.properties['Asociacion'] !== null ? autolinker.link(feature.properties['Asociacion'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Классификация:</th>\
                <td>' + (feature.properties['Clasificac'] !== null ? autolinker.link(feature.properties['Clasificac'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Использование:</th>\
                <td>' + (feature.properties['Uso'] !== null ? autolinker.link(feature.properties['Uso'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}
function style_Piedradecorativaenbosques_14_0(feature) {
    var context = {
        feature: feature,
        variables: {}
    };
    // Start of if blocks and style check logic
    if (exp_Piedradecorativaenbosques_14rule0_eval_expression(context)) {
          return {
        pane: 'pane_Piedradecorativaenbosques_14',
        shape: 'triangle',
        radius: 8.000000000000002,
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(16,230,30,1.0)',
        interactive: true,
    };
        }
    else {
        return {fill: false, stroke: false};
    }
}
map.createPane('pane_Piedradecorativaenbosques_14');
map.getPane('pane_Piedradecorativaenbosques_14').style.zIndex = 415;
map.getPane('pane_Piedradecorativaenbosques_14').style['mix-blend-mode'] = 'normal';
var Декоративный_камень_в_лесах = new L.geoJson(json_Piedradecorativaenbosques_14, {
    attribution: '',
    interactive: true,
    dataVar: 'json_Piedradecorativaenbosques_14',
    layerName: 'Декоративный_камень_в_лесах',
    pane: 'pane_Piedradecorativaenbosques_14',
    onEachFeature: pop_Piedradecorativaenbosques_14,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.shapeMarker(latlng, style_Piedradecorativaenbosques_14_0(feature));
    },
});
bounds_group.addLayer(Декоративный_камень_в_лесах);
map.addLayer(Декоративный_камень_в_лесах);
function pop_Fuentedecarbonatodecalcio_15(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <th scope="row">Место:</th>\
                <td>' + (feature.properties['Nombre'] !== null ? autolinker.link(feature.properties['Nombre'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Широта:</th>\
                <td>' + (feature.properties['Latitud'] !== null ? autolinker.link(feature.properties['Latitud'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Длина:</th>\
                <td>' + (feature.properties['Longitud'] !== null ? autolinker.link(feature.properties['Longitud'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Сырье:</th>\
                <td>' + (feature.properties['Materia_Pr'] !== null ? autolinker.link(feature.properties['Materia_Pr'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Название:</th>\
                <td>' + (feature.properties['Asociacion'] !== null ? autolinker.link(feature.properties['Asociacion'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Классификация:</th>\
                <td>' + (feature.properties['Clasificac'] !== null ? autolinker.link(feature.properties['Clasificac'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Использование:</th>\
                <td>' + (feature.properties['Uso'] !== null ? autolinker.link(feature.properties['Uso'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}
function style_Fuentedecarbonatodecalcio_15_0(feature) {
    var context = {
        feature: feature,
        variables: {}
    };
    // Start of if blocks and style check logic
    if (exp_Fuentedecarbonatodecalcio_15rule0_eval_expression(context)) {
          return {
        pane: 'pane_Fuentedecarbonatodecalcio_15',
        shape: 'triangle',
        radius: 8.000000000000002,
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(253,221,181,1.0)',
        interactive: true,
    };
        }
    else {
        return {fill: false, stroke: false};
    }
}
map.createPane('pane_Fuentedecarbonatodecalcio_15');
map.getPane('pane_Fuentedecarbonatodecalcio_15').style.zIndex = 416;
map.getPane('pane_Fuentedecarbonatodecalcio_15').style['mix-blend-mode'] = 'normal';
var Источник_карбоната_кальция = new L.geoJson(json_Fuentedecarbonatodecalcio_15, {
    attribution: '',
    interactive: true,
    dataVar: 'json_Fuentedecarbonatodecalcio_15',
    layerName: 'Источник_карбоната_кальция',
    pane: 'pane_Fuentedecarbonatodecalcio_15',
    onEachFeature: pop_Fuentedecarbonatodecalcio_15,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.shapeMarker(latlng, style_Fuentedecarbonatodecalcio_15_0(feature));
    },
});
bounds_group.addLayer(Источник_карбоната_кальция);
map.addLayer(Источник_карбоната_кальция);
function pop_Filtrantes_16(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <th scope="row">Место:</th>\
                <td>' + (feature.properties['Nombre'] !== null ? autolinker.link(feature.properties['Nombre'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Широта:</th>\
                <td>' + (feature.properties['Latitud'] !== null ? autolinker.link(feature.properties['Latitud'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Длина:</th>\
                <td>' + (feature.properties['Longitud'] !== null ? autolinker.link(feature.properties['Longitud'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Сырье:</th>\
                <td>' + (feature.properties['Materia_Pr'] !== null ? autolinker.link(feature.properties['Materia_Pr'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Название:</th>\
                <td>' + (feature.properties['Asociacion'] !== null ? autolinker.link(feature.properties['Asociacion'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Классификация:</th>\
                <td>' + (feature.properties['Clasificac'] !== null ? autolinker.link(feature.properties['Clasificac'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Использование:</th>\
                <td>' + (feature.properties['Uso'] !== null ? autolinker.link(feature.properties['Uso'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}
function style_Filtrantes_16_0(feature) {
    var context = {
        feature: feature,
        variables: {}
    };
    // Start of if blocks and style check logic
    if (exp_Filtrantes_16rule0_eval_expression(context)) {
          return {
        pane: 'pane_Filtrantes_16',
        shape: 'triangle',
        radius: 8.000000000000002,
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(246,170,38,1.0)',
        interactive: true,
    };
        }
    else {
        return {fill: false, stroke: false};
    }
}
map.createPane('pane_Filtrantes_16');
map.getPane('pane_Filtrantes_16').style.zIndex = 417;
map.getPane('pane_Filtrantes_16').style['mix-blend-mode'] = 'normal';
var Фильтры = new L.geoJson(json_Filtrantes_16, {
    attribution: '',
    interactive: true,
    dataVar: 'json_Filtrantes_16',
    layerName: 'Фильтры',
    pane: 'pane_Filtrantes_16',
    onEachFeature: pop_Filtrantes_16,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.shapeMarker(latlng, style_Filtrantes_16_0(feature));
    },
});
bounds_group.addLayer(Фильтры);
map.addLayer(Фильтры);
function pop_Fertilizantes_17(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <th scope="row">Место:</th>\
                <td>' + (feature.properties['Nombre'] !== null ? autolinker.link(feature.properties['Nombre'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Широта:</th>\
                <td>' + (feature.properties['Latitud'] !== null ? autolinker.link(feature.properties['Latitud'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Длина:</th>\
                <td>' + (feature.properties['Longitud'] !== null ? autolinker.link(feature.properties['Longitud'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Сырье:</th>\
                <td>' + (feature.properties['Materia_Pr'] !== null ? autolinker.link(feature.properties['Materia_Pr'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Ассоциация:</th>\
                <td>' + (feature.properties['Asociacion'] !== null ? autolinker.link(feature.properties['Asociacion'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Название:</th>\
                <td>' + (feature.properties['Clasificac'] !== null ? autolinker.link(feature.properties['Clasificac'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Использование:</th>\
                <td>' + (feature.properties['Uso'] !== null ? autolinker.link(feature.properties['Uso'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}
function style_Fertilizantes_17_0(feature) {
    var context = {
        feature: feature,
        variables: {}
    };
    // Start of if blocks and style check logic
    if (exp_Fertilizantes_17rule0_eval_expression(context)) {
          return {
        pane: 'pane_Fertilizantes_17',
        shape: 'triangle',
        radius: 8.000000000000002,
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(140,243,76,1.0)',
        interactive: true,
    };
        }
    else {
        return {fill: false, stroke: false};
    }
}
map.createPane('pane_Fertilizantes_17');
map.getPane('pane_Fertilizantes_17').style.zIndex = 418;
map.getPane('pane_Fertilizantes_17').style['mix-blend-mode'] = 'normal';
var Удобрения = new L.geoJson(json_Fertilizantes_17, {
    attribution: '',
    interactive: true,
    dataVar: 'json_Fertilizantes_17',
    layerName: 'Удобрения',
    pane: 'pane_Fertilizantes_17',
    onEachFeature: pop_Fertilizantes_17,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.shapeMarker(latlng, style_Fertilizantes_17_0(feature));
    },
});
bounds_group.addLayer(Удобрения);
map.addLayer(Удобрения);
function pop_Cemento_18(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <th scope="row">Место:</th>\
                <td>' + (feature.properties['Nombre'] !== null ? autolinker.link(feature.properties['Nombre'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Широта:</th>\
                <td>' + (feature.properties['Latitud'] !== null ? autolinker.link(feature.properties['Latitud'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Длина:</th>\
                <td>' + (feature.properties['Longitud'] !== null ? autolinker.link(feature.properties['Longitud'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Сырье:</th>\
                <td>' + (feature.properties['Materia_Pr'] !== null ? autolinker.link(feature.properties['Materia_Pr'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Название:</th>\
                <td>' + (feature.properties['Asociacion'] !== null ? autolinker.link(feature.properties['Asociacion'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Классификация:</th>\
                <td>' + (feature.properties['Clasificac'] !== null ? autolinker.link(feature.properties['Clasificac'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Использование:</th>\
                <td>' + (feature.properties['Uso'] !== null ? autolinker.link(feature.properties['Uso'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}
function style_Cemento_18_0(feature) {
    var context = {
        feature: feature,
        variables: {}
    };
    // Start of if blocks and style check logic
    if (exp_Cemento_18rule0_eval_expression(context)) {
          return {
        pane: 'pane_Cemento_18',
        shape: 'triangle',
        radius: 8.000000000000002,
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(132,117,130,1.0)',
        interactive: true,
    };
        }
    else {
        return {fill: false, stroke: false};
    }
}
map.createPane('pane_Cemento_18');
map.getPane('pane_Cemento_18').style.zIndex = 419;
map.getPane('pane_Cemento_18').style['mix-blend-mode'] = 'normal';
var Цемент = new L.geoJson(json_Cemento_18, {
    attribution: '',
    interactive: true,
    dataVar: 'json_Cemento_18',
    layerName: 'Цемент',
    pane: 'pane_Cemento_18',
    onEachFeature: pop_Cemento_18,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.shapeMarker(latlng, style_Cemento_18_0(feature));
    },
});
bounds_group.addLayer(Цемент);
map.addLayer(Цемент);
function pop_Joyerayartesana_19(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <th scope="row">Место:</th>\
                <td>' + (feature.properties['Nombre'] !== null ? autolinker.link(feature.properties['Nombre'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Широта:</th>\
                <td>' + (feature.properties['Latitud'] !== null ? autolinker.link(feature.properties['Latitud'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Длина:</th>\
                <td>' + (feature.properties['Longitud'] !== null ? autolinker.link(feature.properties['Longitud'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Сырье:</th>\
                <td>' + (feature.properties['Materia_Pr'] !== null ? autolinker.link(feature.properties['Materia_Pr'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Название:</th>\
                <td>' + (feature.properties['Asociacion'] !== null ? autolinker.link(feature.properties['Asociacion'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Классификация:</th>\
                <td>' + (feature.properties['Clasificac'] !== null ? autolinker.link(feature.properties['Clasificac'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Использование:</th>\
                <td>' + (feature.properties['Uso'] !== null ? autolinker.link(feature.properties['Uso'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}
function style_Joyerayartesana_19_0(feature) {
    var context = {
        feature: feature,
        variables: {}
    };
    // Start of if blocks and style check logic
    if (exp_Joyerayartesana_19rule0_eval_expression(context)) {
          return {
        pane: 'pane_Joyerayartesana_19',
        shape: 'triangle',
        radius:  7.200000000000002,
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(225,131,208,1.0)',
        interactive: true,
    };
        }
    else {
        return {fill: false, stroke: false};
    }
}
map.createPane('pane_Joyerayartesana_19');
map.getPane('pane_Joyerayartesana_19').style.zIndex = 420;
map.getPane('pane_Joyerayartesana_19').style['mix-blend-mode'] = 'normal';
var Ювелирные_изделия_и_ремесла = new L.geoJson(json_Joyerayartesana_19, {
    attribution: '',
    interactive: true,
    dataVar: 'json_Joyerayartesana_19',
    layerName: 'Ювелирные_изделия_и_ремесла',
    pane: 'pane_Joyerayartesana_19',
    onEachFeature: pop_Joyerayartesana_19,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.shapeMarker(latlng, style_Joyerayartesana_19_0(feature));
    },
});
bounds_group.addLayer(Ювелирные_изделия_и_ремесла);
map.addLayer(Ювелирные_изделия_и_ремесла);
function pop_Industriasvarias_20(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <th scope="row">Место:</th>\
                <td>' + (feature.properties['Nombre'] !== null ? autolinker.link(feature.properties['Nombre'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Широта:</th>\
                <td>' + (feature.properties['Latitud'] !== null ? autolinker.link(feature.properties['Latitud'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Длина:</th>\
                <td>' + (feature.properties['Longitud'] !== null ? autolinker.link(feature.properties['Longitud'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Сырье:</th>\
                <td>' + (feature.properties['Materia_Pr'] !== null ? autolinker.link(feature.properties['Materia_Pr'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Название:</th>\
                <td>' + (feature.properties['Asociacion'] !== null ? autolinker.link(feature.properties['Asociacion'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Классификация:</th>\
                <td>' + (feature.properties['Clasificac'] !== null ? autolinker.link(feature.properties['Clasificac'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Использование:</th>\
                <td>' + (feature.properties['Uso'] !== null ? autolinker.link(feature.properties['Uso'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}
function style_Industriasvarias_20_0(feature) {
    var context = {
        feature: feature,
        variables: {}
    };
    // Start of if blocks and style check logic
    if (exp_Industriasvarias_20rule0_eval_expression(context)) {
          return {
        pane: 'pane_Industriasvarias_20',
        shape: 'triangle',
        radius: 8.000000000000002,
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(34,34,237,1.0)',
        interactive: true,
    };
}
else if (exp_Industriasvarias_20rule0_eval_expression(context)) {
  return {
pane: 'pane_Industriasvarias_20',
shape: 'triangle',
radius: 7.200000000000003,
opacity: 1,
color: 'rgba(35,35,35,1.0)',
dashArray: '',
lineCap: 'butt',
lineJoin: 'miter',
weight: 1,
fill: true,
fillOpacity: 1,
fillColor: 'rgba(34,34,237,1.0)',
interactive: true,
};
}
else if (exp_Industriasvarias_20rule0_eval_expression(context)) {
  return {
pane: 'pane_Industriasvarias_20',
shape: 'triangle',
radius: 6.000000000000002,
opacity: 1,
color: 'rgba(35,35,35,1.0)',
dashArray: '',
lineCap: 'butt',
lineJoin: 'miter',
weight: 1,
fill: true,
fillOpacity: 1,
fillColor: 'rgba(34,34,237,1.0)',
interactive: true,
};
        }
    else {
        return {fill: false, stroke: false};
    }
}
map.createPane('pane_Industriasvarias_20');
map.getPane('pane_Industriasvarias_20').style.zIndex = 421;
map.getPane('pane_Industriasvarias_20').style['mix-blend-mode'] = 'normal';
var Различные_отрасли = new L.geoJson(json_Industriasvarias_20, {
    attribution: '',
    interactive: true,
    dataVar: 'json_Industriasvarias_20',
    layerName: 'Различные_отрасли',
    pane: 'pane_Industriasvarias_20',
    onEachFeature: pop_Industriasvarias_20,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.shapeMarker(latlng, style_Industriasvarias_20_0(feature));
    },
});
bounds_group.addLayer(Различные_отрасли);
map.addLayer(Различные_отрасли);
function pop_FuentededixidodeSi_21(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <th scope="row">Место:</th>\
                <td>' + (feature.properties['Nombre'] !== null ? autolinker.link(feature.properties['Nombre'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Широта:</th>\
                <td>' + (feature.properties['Latitud'] !== null ? autolinker.link(feature.properties['Latitud'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Длина:</th>\
                <td>' + (feature.properties['Longitud'] !== null ? autolinker.link(feature.properties['Longitud'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Сырье:</th>\
                <td>' + (feature.properties['Materia_Pr'] !== null ? autolinker.link(feature.properties['Materia_Pr'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Название:</th>\
                <td>' + (feature.properties['Asociacion'] !== null ? autolinker.link(feature.properties['Asociacion'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Классификация:</th>\
                <td>' + (feature.properties['Clasificac'] !== null ? autolinker.link(feature.properties['Clasificac'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Использование:</th>\
                <td>' + (feature.properties['Uso'] !== null ? autolinker.link(feature.properties['Uso'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}
function style_FuentededixidodeSi_21_0(feature) {
    var context = {
        feature: feature,
        variables: {}
    };
    // Start of if blocks and style check logic
    if (exp_FuentededixidodeSi_21rule0_eval_expression(context)) {
          return {
        pane: 'pane_FuentededixidodeSi_21',
        shape: 'triangle',
        radius: 8.000000000000002,
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(237,35,200,1.0)',
        interactive: true,
    };
}
else if (exp_FuentededixidodeSi_21rule0_eval_expression(context)) {
  return {
pane: 'pane_FuentededixidodeSi_21',
shape: 'triangle',
radius: 6.000000000000002,
opacity: 1,
color: 'rgba(35,35,35,1.0)',
dashArray: '',
lineCap: 'butt',
lineJoin: 'miter',
weight: 1,
fill: true,
fillOpacity: 1,
fillColor: 'rgba(237,35,200,1.0)',
interactive: true,
};
        }
    else {
        return {fill: false, stroke: false};
    }
}
map.createPane('pane_FuentededixidodeSi_21');
map.getPane('pane_FuentededixidodeSi_21').style.zIndex = 422;
map.getPane('pane_FuentededixidodeSi_21').style['mix-blend-mode'] = 'normal';
var Источник_диоксида_кремния = new L.geoJson(json_FuentededixidodeSi_21, {
    attribution: '',
    interactive: true,
    dataVar: 'json_FuentededixidodeSi_21',
    layerName: 'Источник_диоксида_кремния',
    pane: 'pane_FuentededixidodeSi_21',
    onEachFeature: pop_FuentededixidodeSi_21,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.shapeMarker(latlng, style_FuentededixidodeSi_21_0(feature));
    },
});
bounds_group.addLayer(Источник_диоксида_кремния);
map.addLayer(Источник_диоксида_кремния);
function pop_Cermica_22(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <th scope="row">Место:</th>\
                <td>' + (feature.properties['Nombre'] !== null ? autolinker.link(feature.properties['Nombre'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Широта:</th>\
                <td>' + (feature.properties['Latitud'] !== null ? autolinker.link(feature.properties['Latitud'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Длина:</th>\
                <td>' + (feature.properties['Longitud'] !== null ? autolinker.link(feature.properties['Longitud'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Сырье:</th>\
                <td>' + (feature.properties['Materia_Pr'] !== null ? autolinker.link(feature.properties['Materia_Pr'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Название:</th>\
                <td>' + (feature.properties['Asociacion'] !== null ? autolinker.link(feature.properties['Asociacion'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Классификация:</th>\
                <td>' + (feature.properties['Clasificac'] !== null ? autolinker.link(feature.properties['Clasificac'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Использование:</th>\
                <td>' + (feature.properties['Uso'] !== null ? autolinker.link(feature.properties['Uso'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}
function style_Cermica_22_0(feature) {
    var context = {
        feature: feature,
        variables: {}
    };
    // Start of if blocks and style check logic
    if (exp_Cermica_22rule0_eval_expression(context)) {
          return {
        pane: 'pane_Cermica_22',
        shape: 'triangle',
        radius: 8.000000000000002,
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(231,74,71,1.0)',
        interactive: true,
    };
}
else if (exp_Cermica_22rule0_eval_expression(context)) {
  return {
pane: 'pane_Cermica_22',
shape: 'triangle',
radius: 6.000000000000002,
opacity: 1,
color: 'rgba(35,35,35,1.0)',
dashArray: '',
lineCap: 'butt',
lineJoin: 'miter',
weight: 1,
fill: true,
fillOpacity: 1,
fillColor: 'rgba(231,74,71,1.0)',
interactive: true,
};
        }
    else {
        return {fill: false, stroke: false};
    }
}
map.createPane('pane_Cermica_22');
map.getPane('pane_Cermica_22').style.zIndex = 423;
map.getPane('pane_Cermica_22').style['mix-blend-mode'] = 'normal';
var Керамика = new L.geoJson(json_Cermica_22, {
    attribution: '',
    interactive: true,
    dataVar: 'json_Cermica_22',
    layerName: 'Керамика',
    pane: 'pane_Cermica_22',
    onEachFeature: pop_Cermica_22,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.shapeMarker(latlng, style_Cermica_22_0(feature));
    },
});
bounds_group.addLayer(Керамика);
map.addLayer(Керамика); 
function pop_Cobre_23(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <th scope="row">Место:</th>\
                <td>' + (feature.properties['Nombre'] !== null ? autolinker.link(feature.properties['Nombre'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Широта:</th>\
                <td>' + (feature.properties['Latitud'] !== null ? autolinker.link(feature.properties['Latitud'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Длина:</th>\
                <td>' + (feature.properties['Longitud'] !== null ? autolinker.link(feature.properties['Longitud'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Сырье:</th>\
                <td>' + (feature.properties['Materia_Pr'] !== null ? autolinker.link(feature.properties['Materia_Pr'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Название:</th>\
                <td>' + (feature.properties['Asociacion'] !== null ? autolinker.link(feature.properties['Asociacion'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Классификация:</th>\
                <td>' + (feature.properties['Clasificac'] !== null ? autolinker.link(feature.properties['Clasificac'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}
function style_Cobre_23_0(feature) {
    var context = {
        feature: feature,
        variables: {}
    };
    // Start of if blocks and style check logic
    if (exp_Cobre_23rule0_eval_expression(context)) {
          return {
        pane: 'pane_Cobre_23',
        radius: 8.000000000000002,
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(241,127,20,1.0)',
        interactive: true,
    };
}
else if (exp_Cobre_23rule0_eval_expression(context)) {
  return {
pane: 'pane_Cobre_23',
radius: 7.200000000000003,
opacity: 1,
color: 'rgba(35,35,35,1.0)',
dashArray: '',
lineCap: 'butt',
lineJoin: 'miter',
weight: 1,
fill: true,
fillOpacity: 1,
fillColor: 'rgba(241,127,20,1.0)',
interactive: true,
};
}
else if (exp_Cobre_23rule0_eval_expression(context)) {
  return {
pane: 'pane_Cobre_23',
radius: 6.000000000000002,
opacity: 1,
color: 'rgba(35,35,35,1.0)',
dashArray: '',
lineCap: 'butt',
lineJoin: 'miter',
weight: 1,
fill: true,
fillOpacity: 1,
fillColor: 'rgba(241,127,20,1.0)',
interactive: true,
};
        }
    else {
        return {fill: false, stroke: false};
    }
}
map.createPane('pane_Cobre_23');
map.getPane('pane_Cobre_23').style.zIndex = 424;
map.getPane('pane_Cobre_23').style['mix-blend-mode'] = 'normal';
var Медь = new L.geoJson(json_Cobre_23, {
    attribution: '',
    interactive: true,
    dataVar: 'json_Cobre_23',
    layerName: 'Медь',
    pane: 'pane_Cobre_23',
    onEachFeature: pop_Cobre_23,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.circleMarker(latlng, style_Cobre_23_0(feature));
    },
});
bounds_group.addLayer(Медь);
map.addLayer(Медь);
function pop_Manganeso_24(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <th scope="row">Место:</th>\
                <td>' + (feature.properties['Nombre'] !== null ? autolinker.link(feature.properties['Nombre'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Широта:</th>\
                <td>' + (feature.properties['Latitud'] !== null ? autolinker.link(feature.properties['Latitud'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Длина:/th>\
                <td>' + (feature.properties['Longitud'] !== null ? autolinker.link(feature.properties['Longitud'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Сырье:</th>\
                <td>' + (feature.properties['Materia_Pr'] !== null ? autolinker.link(feature.properties['Materia_Pr'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Название:</th>\
                <td>' + (feature.properties['Asociacion'] !== null ? autolinker.link(feature.properties['Asociacion'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Классификация:</th>\
                <td>' + (feature.properties['Clasificac'] !== null ? autolinker.link(feature.properties['Clasificac'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}
function style_Manganeso_24_0(feature) {
    var context = {
        feature: feature,
        variables: {}
    };
    // Start of if blocks and style check logic
    if (exp_Manganeso_24rule0_eval_expression(context)) {
          return {
        pane: 'pane_Manganeso_24',
        radius: 8.000000000000002,
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(251,154,153,1.0)',
        interactive: true,
    };
        }
    else {
        return {fill: false, stroke: false};
    }
}
map.createPane('pane_Manganeso_24');
map.getPane('pane_Manganeso_24').style.zIndex = 425;
map.getPane('pane_Manganeso_24').style['mix-blend-mode'] = 'normal';
var Марганец = new L.geoJson(json_Manganeso_24, {
    attribution: '',
    interactive: true,
    dataVar: 'json_Manganeso_24',
    layerName: 'Марганец',
    pane: 'pane_Manganeso_24',
    onEachFeature: pop_Manganeso_24,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.circleMarker(latlng, style_Manganeso_24_0(feature));
    },
});
bounds_group.addLayer(Марганец);
map.addLayer(Марганец);
function pop_Cromoelementodelgrupodelplatinooro_25(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <th scope="row">Место:</th>\
                <td>' + (feature.properties['Nombre'] !== null ? autolinker.link(feature.properties['Nombre'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Широта:</th>\
                <td>' + (feature.properties['Latitud'] !== null ? autolinker.link(feature.properties['Latitud'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Длина:</th>\
                <td>' + (feature.properties['Longitud'] !== null ? autolinker.link(feature.properties['Longitud'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Сырье:</th>\
                <td>' + (feature.properties['Materia_Pr'] !== null ? autolinker.link(feature.properties['Materia_Pr'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Название:</th>\
                <td>' + (feature.properties['Asociacion'] !== null ? autolinker.link(feature.properties['Asociacion'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Классификация:</th>\
                <td>' + (feature.properties['Clasificac'] !== null ? autolinker.link(feature.properties['Clasificac'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}
function style_Cromoelementodelgrupodelplatinooro_25_0(feature) {
    var context = {
        feature: feature,
        variables: {}
    };
    // Start of if blocks and style check logic
    if (exp_Cromoelementodelgrupodelplatinooro_25rule0_eval_expression(context)) {
          return {
        pane: 'pane_Cromoelementodelgrupodelplatinooro_25',
        radius: 8.000000000000002,
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(37,226,251,1.0)',
        interactive: true,
    };
}
else if (exp_Cromoelementodelgrupodelplatinooro_25rule0_eval_expression(context)) {
  return {
pane: 'pane_Cromoelementodelgrupodelplatinooro_25',
radius: 7.200000000000001,
opacity: 1,
color: 'rgba(35,35,35,1.0)',
dashArray: '',
lineCap: 'butt',
lineJoin: 'miter',
weight: 1,
fill: true,
fillOpacity: 1,
fillColor: 'rgba(37,226,251,1.0)',
interactive: true,
};
        }
    else {
        return {fill: false, stroke: false};
    }
}
map.createPane('pane_Cromoelementodelgrupodelplatinooro_25');
map.getPane('pane_Cromoelementodelgrupodelplatinooro_25').style.zIndex = 426;
map.getPane('pane_Cromoelementodelgrupodelplatinooro_25').style['mix-blend-mode'] = 'normal';
var Хром_элемент_платиновой_группы = new L.geoJson(json_Cromoelementodelgrupodelplatinooro_25, {
    attribution: '',
    interactive: true,
    dataVar: 'json_Cromoelementodelgrupodelplatinooro_25',
    layerName: 'Хром_элемент_платиновой_группы',
    pane: 'pane_Cromoelementodelgrupodelplatinooro_25',
    onEachFeature: pop_Cromoelementodelgrupodelplatinooro_25,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.circleMarker(latlng, style_Cromoelementodelgrupodelplatinooro_25_0(feature));
    },
});
bounds_group.addLayer(Хром_элемент_платиновой_группы);
map.addLayer(Хром_элемент_платиновой_группы);
function pop_Cromo_26(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <th scope="row">Место:</th>\
                <td>' + (feature.properties['Nombre'] !== null ? autolinker.link(feature.properties['Nombre'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Широта:</th>\
                <td>' + (feature.properties['Latitud'] !== null ? autolinker.link(feature.properties['Latitud'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Длина:</th>\
                <td>' + (feature.properties['Longitud'] !== null ? autolinker.link(feature.properties['Longitud'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Сырье:</th>\
                <td>' + (feature.properties['Materia_Pr'] !== null ? autolinker.link(feature.properties['Materia_Pr'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Название:</th>\
                <td>' + (feature.properties['Asociacion'] !== null ? autolinker.link(feature.properties['Asociacion'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Классификация:</th>\
                <td>' + (feature.properties['Clasificac'] !== null ? autolinker.link(feature.properties['Clasificac'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}
function style_Cromo_26_0(feature) {
    var context = {
        feature: feature,
        variables: {}
    };
    // Start of if blocks and style check logic
    if (exp_Cromo_26rule0_eval_expression(context)) {
          return {
        pane: 'pane_Cromo_26',
        radius: 8.000000000000002,
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(47,62,229,1.0)',
        interactive: true,
    };
}
else if (exp_Cromo_26rule0_eval_expression(context)) {
  return {
pane: 'pane_Cromo_26',
radius: 6.000000000000002,
opacity: 1,
color: 'rgba(35,35,35,1.0)',
dashArray: '',
lineCap: 'butt',
lineJoin: 'miter',
weight: 1,
fill: true,
fillOpacity: 1,
fillColor: 'rgba(47,62,229,1.0)',
interactive: true,
};
}
else if (exp_Cromo_26rule0_eval_expression(context)) {
  return {
pane: 'pane_Cromo_26',
radius: 7.200000000000003,
opacity: 1,
color: 'rgba(35,35,35,1.0)',
dashArray: '',
lineCap: 'butt',
lineJoin: 'miter',
weight: 1,
fill: true,
fillOpacity: 1,
fillColor: 'rgba(47,62,229,1.0)',
interactive: true,
};
        }
    else {
        return {fill: false, stroke: false};
    }
}
map.createPane('pane_Cromo_26');
map.getPane('pane_Cromo_26').style.zIndex = 427;
map.getPane('pane_Cromo_26').style['mix-blend-mode'] = 'normal';
var Хром = new L.geoJson(json_Cromo_26, {
    attribution: '',
    interactive: true,
    dataVar: 'json_Cromo_26',
    layerName: 'Хром',
    pane: 'pane_Cromo_26',
    onEachFeature: pop_Cromo_26,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.circleMarker(latlng, style_Cromo_26_0(feature));
    },
});
bounds_group.addLayer(Хром);
map.addLayer(Хром);
function pop_Walframiothorio_27(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <th scope="row">Место:</th>\
                <td>' + (feature.properties['Nombre'] !== null ? autolinker.link(feature.properties['Nombre'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Широта:</th>\
                <td>' + (feature.properties['Latitud'] !== null ? autolinker.link(feature.properties['Latitud'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Длина:</th>\
                <td>' + (feature.properties['Longitud'] !== null ? autolinker.link(feature.properties['Longitud'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Сырье:</th>\
                <td>' + (feature.properties['Materia_Pr'] !== null ? autolinker.link(feature.properties['Materia_Pr'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Название:</th>\
                <td>' + (feature.properties['Asociacion'] !== null ? autolinker.link(feature.properties['Asociacion'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Классификация:</th>\
                <td>' + (feature.properties['Clasificac'] !== null ? autolinker.link(feature.properties['Clasificac'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}
function style_Walframiothorio_27_0(feature) {
    var context = {
        feature: feature,
        variables: {}
    };
    // Start of if blocks and style check logic
    if (exp_Walframiothorio_27rule0_eval_expression(context)) {
          return {
        pane: 'pane_Walframiothorio_27',
        radius: 7.200000000000001,
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(148,34,40,1.0)',
        interactive: true,
    };
}
else if (exp_Walframiothorio_27rule0_eval_expression(context)) {
  return {
pane: 'pane_Walframiothorio_27',
radius: 6.000000000000002,
opacity: 1,
color: 'rgba(35,35,35,1.0)',
dashArray: '',
lineCap: 'butt',
lineJoin: 'miter',
weight: 1,
fill: true,
fillOpacity: 1,
fillColor: 'rgba(148,34,40,1.0)',
interactive: true,
};
        }
    else {
        return {fill: false, stroke: false};
    }
}
map.createPane('pane_Walframiothorio_27');
map.getPane('pane_Walframiothorio_27').style.zIndex = 428;
map.getPane('pane_Walframiothorio_27').style['mix-blend-mode'] = 'normal';
var Вольфрам_торий = new L.geoJson(json_Walframiothorio_27, {
    attribution: '',
    interactive: true,
    dataVar: 'json_Walframiothorio_27',
    layerName: 'Вольфрам_торий',
    pane: 'pane_Walframiothorio_27',
    onEachFeature: pop_Walframiothorio_27,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.circleMarker(latlng, style_Walframiothorio_27_0(feature));
    },
});
bounds_group.addLayer(Вольфрам_торий);
map.addLayer(Вольфрам_торий);

function pop_Aluminio_29(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <th scope="row">Место:</th>\
                <td>' + (feature.properties['Nombre'] !== null ? autolinker.link(feature.properties['Nombre'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Широта:</th>\
                <td>' + (feature.properties['Latitud'] !== null ? autolinker.link(feature.properties['Latitud'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Длина:</th>\
                <td>' + (feature.properties['Longitud'] !== null ? autolinker.link(feature.properties['Longitud'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Сырье:</th>\
                <td>' + (feature.properties['Materia_Pr'] !== null ? autolinker.link(feature.properties['Materia_Pr'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Название:</th>\
                <td>' + (feature.properties['Asociacion'] !== null ? autolinker.link(feature.properties['Asociacion'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Классификация:</th>\
                <td>' + (feature.properties['Clasificac'] !== null ? autolinker.link(feature.properties['Clasificac'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}
function style_Aluminio_29_0(feature) {
    var context = {
        feature: feature,
        variables: {}
    };
    // Start of if blocks and style check logic
    if (exp_Aluminio_29rule0_eval_expression(context)) {
          return {
        pane: 'pane_Aluminio_29',
        radius: 6.0,
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(113,162,194,1.0)',
        interactive: true,
    };
        }
    else {
        return {fill: false, stroke: false};
    }
}
map.createPane('pane_Aluminio_29');
map.getPane('pane_Aluminio_29').style.zIndex = 429;
map.getPane('pane_Aluminio_29').style['mix-blend-mode'] = 'normal';
var Алюминий = new L.geoJson(json_Aluminio_29, {
    attribution: '',
    interactive: true,
    dataVar: 'json_Aluminio_29',
    layerName: 'Алюминий',
    pane: 'pane_Aluminio_29',
    onEachFeature: pop_Aluminio_29,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.circleMarker(latlng, style_Aluminio_29_0(feature));
    },
});
bounds_group.addLayer(Алюминий);
map.addLayer(Алюминий);
function pop_Hierro_30(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <th scope="row">Место:</th>\
                <td>' + (feature.properties['Nombre'] !== null ? autolinker.link(feature.properties['Nombre'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Широта:</th>\
                <td>' + (feature.properties['Latitud'] !== null ? autolinker.link(feature.properties['Latitud'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Длина:</th>\
                <td>' + (feature.properties['Longitud'] !== null ? autolinker.link(feature.properties['Longitud'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Сырье:</th>\
                <td>' + (feature.properties['Materia_Pr'] !== null ? autolinker.link(feature.properties['Materia_Pr'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Название:</th>\
                <td>' + (feature.properties['Asociacion'] !== null ? autolinker.link(feature.properties['Asociacion'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Классификация:</th>\
                <td>' + (feature.properties['Clasificac'] !== null ? autolinker.link(feature.properties['Clasificac'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}
function style_Hierro_30_0(feature) {
    var context = {
        feature: feature,
        variables: {}
    };
    // Start of if blocks and style check logic
    if (exp_Hierro_30rule0_eval_expression(context)) {
          return {
        pane: 'pane_Hierro_30',
        radius: 6.0,
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(21,36,21,1.0)',
        interactive: true,
    };
}
else if (exp_Hierro_30rule0_eval_expression(context)) {
  return {
pane: 'pane_Hierro_30',
radius: 8.000000000000004,
opacity: 1,
color: 'rgba(35,35,35,1.0)',
dashArray: '',
lineCap: 'butt',
lineJoin: 'miter',
weight: 1,
fill: true,
fillOpacity: 1,
fillColor: 'rgba(21,36,21,1.0)',
interactive: true,
};
}
else if (exp_Hierro_30rule0_eval_expression(context)) {
  return {
pane: 'pane_Hierro_30',
radius: 7.200000000000003,
opacity: 1,
color: 'rgba(35,35,35,1.0)',
dashArray: '',
lineCap: 'butt',
lineJoin: 'miter',
weight: 1,
fill: true,
fillOpacity: 1,
fillColor: 'rgba(21,36,21,1.0)',
interactive: true,
};
        }
    else {
        return {fill: false, stroke: false};
    }
}
map.createPane('pane_Hierro_30');
map.getPane('pane_Hierro_30').style.zIndex = 430;
map.getPane('pane_Hierro_30').style['mix-blend-mode'] = 'normal';
var Железо = new L.geoJson(json_Hierro_30, {
    attribution: '',
    interactive: true,
    dataVar: 'json_Hierro_30',
    layerName: 'Железо',
    pane: 'pane_Hierro_30',
    onEachFeature: pop_Hierro_30,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.circleMarker(latlng, style_Hierro_30_0(feature));
    },
});
bounds_group.addLayer(Железо);
map.addLayer(Железо);
function pop_HierroNiquelCobalto_31(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <th scope="row">Место:</th>\
                <td>' + (feature.properties['Nombre'] !== null ? autolinker.link(feature.properties['Nombre'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Широта:</th>\
                <td>' + (feature.properties['Latitud'] !== null ? autolinker.link(feature.properties['Latitud'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Длина:</th>\
                <td>' + (feature.properties['Longitud'] !== null ? autolinker.link(feature.properties['Longitud'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Сырье:</th>\
                <td>' + (feature.properties['Materia_Pr'] !== null ? autolinker.link(feature.properties['Materia_Pr'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Название:</th>\
                <td>' + (feature.properties['Asociacion'] !== null ? autolinker.link(feature.properties['Asociacion'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Классификация:</th>\
                <td>' + (feature.properties['Clasificac'] !== null ? autolinker.link(feature.properties['Clasificac'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}
function style_HierroNiquelCobalto_31_0(feature) {
    var context = {
        feature: feature,
        variables: {}
    };
    // Start of if blocks and style check logic
    if (exp_HierroNiquelCobalto_31rule0_eval_expression(context)) {
          return {
        pane: 'pane_HierroNiquelCobalto_31',
        radius: 8.000000000000002,
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(140,147,140,1.0)',
        interactive: true,
    };
        }
    else {
        return {fill: false, stroke: false};
    }
}
map.createPane('pane_HierroNiquelCobalto_31');
map.getPane('pane_HierroNiquelCobalto_31').style.zIndex = 431;
map.getPane('pane_HierroNiquelCobalto_31').style['mix-blend-mode'] = 'normal';
var Железо_кобальт = new L.geoJson(json_HierroNiquelCobalto_31, {
    attribution: '',
    interactive: true,
    dataVar: 'json_HierroNiquelCobalto_31',
    layerName: 'Железо_кобальт',
    pane: 'pane_HierroNiquelCobalto_31',
    onEachFeature: pop_HierroNiquelCobalto_31,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.circleMarker(latlng, style_HierroNiquelCobalto_31_0(feature));
    },
});
bounds_group.addLayer(Железо_кобальт);
map.addLayer(Железо_кобальт);
function pop_Zinc_32(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <th scope="row">Место:</th>\
                <td>' + (feature.properties['Nombre'] !== null ? autolinker.link(feature.properties['Nombre'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Широта:</th>\
                <td>' + (feature.properties['Latitud'] !== null ? autolinker.link(feature.properties['Latitud'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Длина:</th>\
                <td>' + (feature.properties['Longitud'] !== null ? autolinker.link(feature.properties['Longitud'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Сырье:</th>\
                <td>' + (feature.properties['Materia_Pr'] !== null ? autolinker.link(feature.properties['Materia_Pr'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Название :</th>\
                <td>' + (feature.properties['Asociacion'] !== null ? autolinker.link(feature.properties['Asociacion'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Классификация:</th>\
                <td>' + (feature.properties['Clasificac'] !== null ? autolinker.link(feature.properties['Clasificac'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}
function style_Zinc_32_0(feature) {
    var context = {
        feature: feature,
        variables: {}
    };
    // Start of if blocks and style check logic
    if (exp_Zinc_32rule0_eval_expression(context)) {
          return {
        pane: 'pane_Zinc_32',
        radius: 8.000000000000002,
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(28,235,21,1.0)',
        interactive: true,
    };
        }
    else if(exp_Zinc_32rule0_eval_expression(context)){
           return{
        pane:'pane_Zinc_32',
        radius: 6.000000000000002,
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(28,235,21,1.0)',
        interactive: true,
    };
        }
        else if(exp_Zinc_32rule0_eval_expression(context)){
            return{
                pane:'pane_Zinc_32',
                radius: 7.200000000000003,
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1,
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(28,235,21,1.0)',
                interactive: true,
            };
        }
    else {
        return {fill: false, stroke: false};
    }
}
map.createPane('pane_Zinc_32');
map.getPane('pane_Zinc_32').style.zIndex = 432;
map.getPane('pane_Zinc_32').style['mix-blend-mode'] = 'normal';
var Цинк = new L.geoJson(json_Zinc_32, {
    attribution: '',
    interactive: true,
    dataVar: 'json_Zinc_32',
    layerName: 'Цинк',
    pane: 'pane_Zinc_32',
    onEachFeature: pop_Zinc_32,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.circleMarker(latlng, style_Zinc_32_0(feature));
    },
});
bounds_group.addLayer(Цинк);
map.addLayer(Цинк);
function pop_Cobremolibdeno_33(feature, layer) {
    var popupContent = '<table>\
            <tr>\
                <th scope="row">Место:</th>\
                <td>' + (feature.properties['Nombre'] !== null ? autolinker.link(feature.properties['Nombre'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Широта:</th>\
                <td>' + (feature.properties['Latitud'] !== null ? autolinker.link(feature.properties['Latitud'].toLocaleString()) : '') +'</td>\
            </tr>\
            <tr>\
                <th scope="row">Длина:</th>\
                <td>' + (feature.properties['Longitud'] !== null ? autolinker.link(feature.properties['Longitud'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Сырье:</th>\
                <td>' + (feature.properties['Materia_Pr'] !== null ? autolinker.link(feature.properties['Materia_Pr'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Название :</th>\
                <td>' + (feature.properties['Asociacion'] !== null ? autolinker.link(feature.properties['Asociacion'].toLocaleString()) : '') + '</td>\
            </tr>\
            <tr>\
                <th scope="row">Классификация:</th>\
                <td>' + (feature.properties['Clasificac'] !== null ? autolinker.link(feature.properties['Clasificac'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}
function style_Cobremolibdeno_33_0(feature) {
    var context = {
        feature: feature,
        variables: {}
    };
    // Start of if blocks and style check logic
    if (exp_Cobremolibdeno_33rule0_eval_expression(context)) {
          return {
        pane: 'pane_Cobremolibdeno_33',
        radius: 7.200000000000001,
        opacity: 1,
        color: 'rgba(35,35,35,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 1,
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(243,200,160,1.0)',
        interactive: true,
    };
        }
        else if( exp_Cobremolibdeno_33rule0_eval_expression(context)){
          return{
           pane:'pane_Cobremolibdeno_33',
           radius: 6.000000000000002,
           opacity: 1,
           color: 'rgba(35,35,35,1.0)',
           dashArray: '',
           lineCap: 'butt',
           lineJoin: 'miter',
           weight: 1,
           fill: true,
           fillOpacity: 1,
           fillColor: 'rgba(243,200,160,1.0)',
           interactive: true,
          };
        }
        
    else {
        return {fill: false, stroke: false};
    }
}
map.createPane('pane_Cobremolibdeno_33');
map.getPane('pane_Cobremolibdeno_33').style.zIndex = 433;
map.getPane('pane_Cobremolibdeno_33').style['mix-blend-mode'] = 'normal';
var Мед_молибден = new L.geoJson(json_Cobremolibdeno_33, {
    name:'Cobremolibdeno',
    attribution: '',
    interactive: true,
    dataVar: 'json_Cobremolibdeno_33',
    layerName: 'Мед_молибден',
    pane: 'pane_Cobremolibdeno_33',
    onEachFeature: pop_Cobremolibdeno_33,
    pointToLayer: function (feature, latlng) {
        var context = {
            feature: feature,
            variables: {}
        };
        return L.circleMarker(latlng, style_Cobremolibdeno_33_0(feature));
    },
});
bounds_group.addLayer(Мед_молибден);
map.addLayer(Мед_молибден);

/////////////////////////Geocode----Busqueda////////////////////////

var osmGeocoder = new L.Control.Geocoder({
    collapsed: true,
    position: 'topleft',
    text: 'Buscar',
    title: 'Testing'

}).addTo(map);
document.getElementsByClassName('leaflet-control-geocoder-icon')[0]
    .className += ' fa fa-search';
document.getElementsByClassName('leaflet-control-geocoder-icon')[0]
    .title += 'Search for a place';

  /*  map.addControl(new L.Control.Search({
        layer: FangosMedicinales,
        initial: false,
        hideMarkerOnCollapse: true,
        propertyName: 'Nombre'}));
    document.getElementsByClassName('search-button')[0].className +=
     ' fa fa-binoculars';*/

var baseTree = [
    {
        label: 'Базовые карты',
        
        children: [
            {label: 'OpenStreeMap', layer: layer_OpenStreetMap_0, name: 'OpenStreeMap'},
            {label: 'ESRI-National Geografy', layer: layer_ESRINationalGeografy_0, name: 'ESRI-National Geografy'},
        ]
    },
   
];
var overlaysTree = {
    label: '<strong >ВСЕ</strong> ',
    selectAllCheckbox: 'Un/select all',
    children: [
        {
            label: '<strong >МЕТАЛЛИЧЕСКИХ</strong> ',
            selectAllCheckbox: 'Un/select all',
            children: [

                { label: '<img src="legend/Cobremolibdeno_33_0.png" />Мед_молибден', layer: Мед_молибден },
                { label: '<img src="legend/Zinc_32_0.png" />Цинк', layer: Цинк },
                { label: '<img src="legend/HierroNiquelCobalto_31_0.png" />Железо_кобальт', layer: Железо_кобальт },
                { label: ' <img src="legend/Hierro_30_1.png" />Железо', layer: Железо },
                { label: '<img src="legend/Aluminio_29_0.png" />Алюминий', layer: Алюминий },                
                { label: '<img src="legend/Walframiothorio_27_0.png" />Вольфрам_торий', layer: Вольфрам_торий },
                { label: '<img src="legend/Cromo_26_0.png" />Хром', layer: Хром },
                { label: '<img src="legend/Cromoelementodelgrupodelplatinooro_25_0.png" />Хром_элемент_платиновой_группы', layer: Хром_элемент_платиновой_группы },
                { label: '<img src="legend/Manganeso_24_0.png" />Марганец', layer: Марганец },
                { label: '<img src="legend/Cobre_23_0.png" />Медь', layer: Медь },

            ]
        },
        {
            label: '<strong>НЕМЕТАЛЛИЧЕСКИХ</strong>',
            selectAllCheckbox: 'Un/select all',
            children: [
                { label: '<img src="legend/Cermica_22_0.png" />Керамика', layer: Керамика },
                { label: '<img src="legend/FuentededixidodeSi_21_0.png" />Источник_диоксида_кремния', layer: Источник_диоксида_кремния },
                { label: '<img src="legend/Industriasvarias_20_0.png" />Различные_отрасли', layer: Различные_отрасли },
                { label: '<img src="legend/Joyerayartesana_19_0.png" />Ювелирные_изделия_и_ремесла', layer: Ювелирные_изделия_и_ремесла },
                { label: '<img src="legend/Cemento_18_0.png" />Цемент', layer: Цемент },
                { label: '<img src="legend/Fertilizantes_17_0.png" />Удобрения', layer: Удобрения },
                { label: '<img src="legend/Filtrantes_16_0.png" />Фильтры', layer: Фильтры },
                { label: '<img src="legend/Fuentedecarbonatodecalcio_15_0.png" />Источник_карбоната_кальция', layer: Источник_карбоната_кальция },
                { label: '<img src="legend/Piedradecorativaenbosques_14_0.png" />Декоративный_камень_в_лесах', layer: Декоративный_камень_в_лесах },
                { label: '<img src="legend/ridosnaturales_13_0.png" />Природные_агрегаты', layer: Природные_агрегаты },
                { label: '<img src="legend/ridosdetrituracin_12_0.png" />Дробильные_агрегаты', layer: Дробильные_агрегаты },
                { label: '<img src="legend/Agricultura_11_0.png" />Сельскоехозяйство', layer: Сельскоехозяйство },
                { label: '<img src="legend/Fangosmedicinales_10_0.png" />Лечебная_грязь', layer: Лечебная_грязь },
            ]
        },
        {
            label: '<strong>ДРУГИЕ</strong>',
            selectAllCheckbox: 'Un/select all',
            children: [
                { label: '<img src="legend/Lim_Prov_LINEAL_9.png" /> <img src="legend/Lim_Prov_L_8.png" />Провинциальные_границы', layer: Lim_Prov_LINEAL, Провинциальные_границы },
                        
                        { label: '<img src="legend/Fallas_7.png" /> Неудачи', layer: Неудачи },
                        { label: '<img src="legend/Drenaje_Sfcial_6.png" />Стоки', layer: Стоки },
                        { label: '<img src="legend/Costa_5.png" /> Берег', layer: Берег },
                        { label: '<img src="legend/Cayos_lineayregion_4.png" /> Линия_и_регион_Кайос', layer: Линия_и_регион_Кайос },
                        { label: '<img src="legend/CapitalesProvinciales_3.png" /> Провинциальные_столицы', layer: Провинциальные_столицы },
                        { label: '<img src="legend/Cayos_2.png" /> Кайос', layer: Кайос },
            ]
        },
        {
            label: '<strong>ГЕОЛОГИЧЕСКАЯ ИНФОРМАЦИЯ</strong>',
            selectAllCheckbox: 'Un/select all',
            children: [
                { label: 'ГЕО-МЕТАЛЛИК<br /><table><tr><td style="text-align: center;"><img src="legend/geometalico_1_ArcoVolcánicoasociadoaofiolitas0.png" /></td><td>Вулканическая дуга, связанная с офиолитами</td></tr><tr><td style="text-align: center;"><img src="legend/geometalico_1_ArcoVolcánicoCretácico1.png" /></td><td>Меловая вулканическая арка</td></tr><tr><td style="text-align: center;"><img src="legend/geometalico_1_ArcoVolcánicoPaleogénico3.png" /></td><td>Палеогенная вулканическая дуга</td></tr><tr><td style="text-align: center;"><img src="legend/geometalico_1_BasamentoNeoproterozoicoComplejoSocorro4.png" /></td><td>Неопротерозойский базамент, комплекс Сокорро</td></tr><tr><td style="text-align: center;"><img src="legend/geometalico_1_CaribeanaTerrenosMetamórficos5.png" /></td><td>Метаморфические территории Карибского моря</td></tr><tr><td style="text-align: center;"><img src="legend/geometalico_1_CinturónPlegadodelNorteMargenContinental6.png" /></td><td>Пояс северного изгиба, континентальная окраина</td></tr><tr><td style="text-align: center;"><img src="legend/geometalico_1_Complejoanfibolítico7.png" /></td><td>Амфиболитический комплекс</td></tr><tr><td style="text-align: center;"><img src="legend/geometalico_1_DepósitosPostorogénicosdelTerciario8.png" /></td><td>Посторогенные отложения третичного</td></tr><tr><td style="text-align: center;"><img src="legend/geometalico_1_PlutónicosP14.png" /></td><td>Плутоника P</td></tr><tr><td style="text-align: center;"><img src="legend/geometalico_1_GuaniguanicoTerrenoMaya10.png" /></td><td>Гуанигуанико, местность майя</td></tr><tr><td style="text-align: center;"><img src="legend/geometalico_1_Melangedesubducción11.png" /></td><td>Субдукционный меланж</td></tr><tr><td style="text-align: center;"><img src="legend/geometalico_1_OfiolitasRocasMáficasyultramáficas12.png" /></td><td>Офиолиты, основные и ультраосновные породы</td></tr><tr><td style="text-align: center;"><img src="legend/geometalico_1_PlutónicosK13.png" /></td><td>Плутоникс К</td></tr><tr><td style="text-align: center;"><img src="legend/geometalico_1_DepósitossinorogénicosdelCampanianotardíoalEocenosuperior9.png" /></td><td>Позднекампанские синорогенные отложения(Верхний эоцен)</td></tr><tr><td style="text-align: center;"></td></tr><tr><td style="text-align: center;"><img src="legend/geometalico_1_ArcoVolcánicoCretacicoMetamorfizado2.png" /></td><td>Метаморфизованная вулканическая арка мелового периода</td></tr></table>', layer: GeoMetalico },

            ]
        }
    ]
}

var layerControl = L.control.layers.tree(baseTree, overlaysTree).addTo(map);


//Move Layers control to sidebar
var layerControlContainer = layerControl.getContainer();
$("#layercontrol").append(layerControlContainer);
$(".leaflet-control-layers").prepend("<br><strong class='title' style='font-size:18px'>БАЗОВЫЕ КАРТЫ</strong><br>");
$(".leaflet-control-layers-separator").after("<strong class='title'style='font-size:18px'>СЛОИ КАРТА МЕСТОРОЖДЕНИЙ</strong><br>");


L.control.scale({ position: 'bottomleft', maxWidth: 100, metric: true, imperial: false, updateWhenIdle: false }).addTo(map);
setBounds();



//////////////////////////////IMPRIMIR ////////////////////////////////////
var customActionToPrint = function (context, mode) {
    return function () {
        window.alert("Печатаем КАРТУ. Сделаем здесь нестандартную печать!!");
        context._printCustom(mode);
    }
}
$( document ).ready(function() {
    var legendContainerPrint = legend.getContainer();
 
$("#printlegend").append(legendContainerPrint);
});

L.control.browserPrint({
    title: 'Распечатай!',
    closePopupsOnPrint: false,
    printModes: [
        
        L.control.browserPrint.mode.landscape(),
        "Portrait",
        L.control.browserPrint.mode.auto("Автоматический", "B4"),
        L.control.browserPrint.mode.custom("Выберите область", "B5")
    ],
    manualMode: false
}).addTo(map);

map.on("browser-print-start", function(e){
    L.control.scale({
        position: 'bottomleft',
        imperial: false,
        maxWidth: 150
    }).addTo(e.printMap);
});

/////////////////////exportar en pdf con leyenda/////////////////////
/*map.on("browser-print", function(e){
    /*on print start we already have a print map and we can create new control and add it to the print map to be able to print custom information */
    /*legend.addTo(e.printMap);
    legend1.addTo(e.printMap);
    legend2.addTo(e.printMap);
    legend3.addTo(e.printMap);
});*/


///////////////////////////////LEGEND////////////////////////////////


$( document ).ready(function() {
    var legendContainer1 = legend1.getContainer();
 
$("#legend").append(legendContainer1);
});





var legend = L.control({position: 'bottomleft'});
var legend1 =L.control({position: 'bottomleft'});   



legend1.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'info legend1');
    var title = '';
    div.innerHTML = title;
    div.innerHTML+='<tr>'+'<td ><span id="Yacimiento" ><img src="legend/Yacimiento_NoMetalico_1.png" /> <img src="legend/Yacimiento_Metalico_0.png" /> Месторождения </span></td>'+
    '<td ><span id="Prospecto" ><img src="legend/Prospecto_NoMetalicos_2.png" /> <img src="legend/Prospecto_Metalicos_3.png" /> Проспектов </span></td>'+
    '<td ><span id="Manifiesto" ><img src="legend/Manifiesto_NoMetalico_4.png" /> <img src="legend/Manifiesto_Metalico_5.png" /> Манифест </span></td>'+
    '<br></tr>';
    div.innerHTML+='<tr>'+'<br></tr>'
    
   div.innerHTML += 
   '<tr>'+    
    '<td><span id="Неудачи" style="margin-right: 124px"><img src="legend/Fallas_7.png" /> Неудачи</span></td>'+
    '<td><span id="Стоки"><img src="legend/Drenaje_Sfcial_6.png" /> Стоки</span></td>'+  
   '<br></tr>';

   div.innerHTML +=  '<tr>'+
   '<td ><span id="Берег" style="margin-right: 140px "><img src="legend/Costa_5.png" /> Берег</span></td>'+
   '<td><span id="Кайос"><img src="legend/Cayos_2.png" /> Кайос</span></td>'+ 
  '<br></tr>';
   
  div.innerHTML +=  '<tr>'+  
  '<td><span id="Провинциальные_столицы" style="margin-right: 16px "><img src="legend/CapitalesProvinciales_3.png" />Провинциальные_столицы</span></td>'+
   
  '<td ><span id="Линия_и_регион_Кайос"><img src="legend/Cayos_lineayregion_4.png" /> Линия_и_регион_Кайос</span> </td>'+  
 '<br></tr>';

 div.innerHTML +=  '<tr>'+
   
    '<td ><span id="Провинциальные_границы" ><img src="legend/Lim_Prov_LINEAL_9.png" /><img src="legend/Lim_Prov_L_8.png" /> Провинциальные_границы </span> </td>'+    
   '<br></tr>';
  div.innerHTML+='<tr>'+'<br></tr>'
  div.innerHTML+='<tr>'+ '<h6>МЕТАЛЛИЧЕСКИХ:</h6>'+'</tr>';
  div.innerHTML +=  '<tr>'+
      '<td ><span id="Мед_молибден" style="margin-right: 24px "><img src="legend/Cobremolibdeno_33_0.png" /> Мед_молибден</span></td>'+
      '<td ><span id="Цинк" ><img src="legend/Zinc_32_0.png"    />Цинк </span> </td>'+    
     '<br></tr>';
     div.innerHTML += 
     '<tr>'+    
      '<td><span id="Железо_кобальт" style="margin-right: 11px "><img src="legend/HierroNiquelCobalto_31_0.png" />Железо_кобальт &nbsp</span></td>'+
      '<td><span id="Железо"><img src="legend/Hierro_30_0.png" />Железо </span></td>'+  
     '<br></tr>';
  
     div.innerHTML +=  '<tr>'+
     '<td ><span id="Алюминий" style="margin-right: 48px"><img src="legend/Aluminio_29_0.png" /> Алюминий &nbsp</span></td>'+
     '<td ><span id="Вольфрам_торий"><img src="legend/Walframiothorio_27_0.png" />Вольфрам_торий &nbsp</span> </td>'+   
    '<br></tr>';
     
    div.innerHTML +=  '<tr>'+  
    '<td><span id="Хром" style="margin-right: 78px"><img src="legend/Cromo_26_0.png" />Хром &nbsp</span></td>'+
    '<td><span id="Марганец"><img src="legend/Manganeso_24_0.png" />Марганец &nbsp</span></td>&nbsp'+
   '<br></tr>';
   div.innerHTML +=  '<tr>'+  
   
   '<td><span id="Медь"><img src="legend/Cobre_23_0.png" />Медь &nbsp</span></td>'+   
  '<br></tr>';
  
  div.innerHTML+='<tr>'+
  '<td><span id="Хром_элемент_платиновой_группы"><img src="legend/Cromoelementodelgrupodelplatinooro_25_0.png" />Хром_элемент_платиновой_группы&nbsp</span><br></td>'+   
  '</tr>'
  
  div.innerHTML+='<tr>'+'<br></tr>'

 div.innerHTML+='<tr>'+ '<h6> НЕМЕТАЛЛИЧЕСКИХ:</h6>'+'</tr>';
    div.innerHTML +=  '<tr >'+
    '<td ><span id="Керамика" ><img src="legend/Cermica_22_0.png" /> Керамика </span></td>'+
   
      '<br></tr>';
      div.innerHTML +=  '<tr >'+
     
      '<td ><span id="Цемент"><img src="legend/Cemento_18_0.png" />Цемент </span></td>'+
        '<br></tr>';
   div.innerHTML += 
   '<tr>'+ 
  
   '<td ><span id="Удобрения"><img src="legend/Fertilizantes_17_0.png" />Удобрения</span> </td>'+       
   '<br></tr>';

   div.innerHTML += 
   '<tr>'+ 
   '<td><span id="Фильтры"><img src="legend/Filtrantes_16_0.png" />Фильтры</span></td>'+   
        
   '<br></tr>';
   div.innerHTML +=  '<tr>'+
   '<td><span id="Сельскоехозяйство"><img src="legend/Agricultura_11_0.png" />Сельскоехозяйство</span></td>'+  
  '<br></tr>';
  div.innerHTML +='<tr>'+
  '<td><span id="Различные_отрасли"><img src="legend/Industriasvarias_20_0.png" />Различные_отрасли</span></td>'+  
  '<br></tr>';
  div.innerHTML +=  '<tr>'+     
  '<td><span id="Источник_карбоната_кальция"><img src="legend/Fuentedecarbonatodecalcio_15_0.png" />Источник_карбоната_кальция</span></td>'+   
 '<br></tr>';
 div.innerHTML +=  '<tr>'+  
 '<td><span id="Декоративный_камень_в_лесах"><img src="legend/Piedradecorativaenbosques_14_0.png" />Декоративный_камень_в_лесах</span></td>'+ 
'<br></tr>';

div.innerHTML +=  '<tr>'+  
  '<td><span id="Ювелирные_изделия_и_ремесла"><img src="legend/Joyerayartesana_19_0.png" />Ювелирные_изделия_и_ремесла</span></td>'+     
 '<br></tr>';
div.innerHTML +=  '<tr>'+  
  '<td><span id="Природные_агрегаты"><img src="legend/ridosnaturales_13_0.png" />Природные_агрегаты</span></td>'+   
'<br></tr>';
 div.innerHTML +=  '<tr>'+ 
  '<td ><span id="Источник_диоксида_кремния" ><img src="legend/FuentededixidodeSi_21_0.png" />Источник_диоксида_кремния</span> </td>'+   
'<br></tr>';

div.innerHTML +=  '<tr>'+ 
 '<td><span id="Дробильные_агрегаты"><img src="legend/ridosdetrituracin_12_0.png" />Дробильные_агрегаты</span></td>'+ 
'<br></tr>';
div.innerHTML +=  '<tr>'+  
'<td><span id="Лечебная_грязь"><img src="legend/Fangosmedicinales_10_0.png" />Лечебная_грязь</span></td>'+   
'<br></tr>';

div.innerHTML+='<tr>'+'<br></tr>'

div.innerHTML+='<tr>'+ '<h6>ГЕО-МЕТАЛЛИК:</h6>'+'</tr>';
div.innerHTML +=  '<tr>'+
'<td style="text-align: center;"><img src="legend/geometalico_1_ArcoVolcánicoasociadoaofiolitas0.png" /></td><td>Вулканическая дуга, связанная с офиолитами <br></td>'+
'<td style="text-align: center"><img src="legend/geometalico_1_ArcoVolcánicoCretácico1.png" /></td><td>Меловая вулканическая арка<br></td>'+    
'<td style="text-align: center;"><img src="legend/geometalico_1_ArcoVolcánicoPaleogénico3.png" /></td><td>Палеогенная вулканическая дуга<br></td>'+
'<td style="text-align: center;"><img src="legend/geometalico_1_ArcoVolcánicoCretacicoMetamorfizado2.png"  /></td><td>Метаморфизованная вулканическая арка мелового периода<br></td>'+
'<td style="text-align: center;"><img src="legend/geometalico_1_BasamentoNeoproterozoicoComplejoSocorro4.png" /></td><td>Неопротерозойский фундамент<br></td>'+
'<td style="text-align: center;"><img src="legend/geometalico_1_CaribeanaTerrenosMetamórficos5.png" /></td><td>Метаморфические территории Карибского моря<br></td>'+   
'<td style="text-align: center;"><img src="legend/geometalico_1_CinturónPlegadodelNorteMargenContinental6.png" /></td><td>Северный сложенный пояс<br></td>'+
'<td style="text-align: center;"><img src="legend/geometalico_1_Complejoanfibolítico7.png" /></td><td>Амфиболитический комплекс<br></td>'+   
'<td style="text-align: center;"><img src="legend/geometalico_1_PlutónicosP14.png" /></td><td>Плутоника P<br></td>'+ 
'<td style="text-align: center;"><img src="legend/geometalico_1_PlutónicosK13.png" /></td><td>Плутоникс К<br></td>'+   
'<td style="text-align: center;"><img src="legend/geometalico_1_GuaniguanicoTerrenoMaya10.png" /></td><td>Гуанигуанико, местность майя<br></td>'+
'<td style="text-align: center;"><img src="legend/geometalico_1_Melangedesubducción11.png" /></td><td>Субдукционный меланж<br></td>'+
'<td style="text-align: center;"><img src="legend/geometalico_1_OfiolitasRocasMáficasyultramáficas12.png" /></td><td>Офиолиты, основные и ультраосновные породы<br></td>'+
'<td style="text-align: center;"><img src="legend/geometalico_1_DepósitosPostorogénicosdelTerciario8.png" /></td><td>Посторогенные отложения третичного<br></td>'+
'<td style="text-align: center;"><img src="legend/geometalico_1_DepósitossinorogénicosdelCampanianotardíoalEocenosuperior9.png" /></td><td>Синорогенные отложения от позднего кампана до верхнего эоцена</td>'
+'<br></tr>' 


return div;
};
legend1.addTo(map);

//////////////////////////////legen1//////////////////////////

map.on('overlayadd',function (eventLayer) {
    
    showLegend1(eventLayer.layer.options.layerName);

});
map.on('overlayremove', function (eventLayer) {

    hideLegend1(eventLayer.layer.options.layerName);

});

function showLegend1(layer) {
    var item = ".legend1 > span:contains(" + layer + ")"
    $(item).show();
}
function hideLegend1(layer) {
    var item = ".legend1 > span:contains(" + layer + ")";
    
    $(item).hide();
}

function stripSpaces(str){
return str.replace(/\s+/g,''); 
}

////////////LOGIN////////////////


var objPeople=[
    {
        username: "Найлет",
        password:"1234"
    }
    ];
    
    var count=2;
     function login(){
         var username= document.getElementById("username").value
         var password= document.getElementById("password").value
         var valid= false;
         for(i=0; i< objPeople.length; i++){
             if(username==objPeople[i].username && password==objPeople[i].password){
                valid= true;
                break;
             }
        
         }
         if(valid){
            
            window.location='export-capa_de_oro_ruso.html';
            var link = ''
            return false;
         }
         var again="tries";
         if(count==1){
          again="try"
         }
         if(count>=1){
             alert ("Equivocado usuario o contraseña")
             count--;
         }
         else{
             alert("incorrecto Usuario o contraseña usted sera bloqueado");
             document.login.username.value="Usted esta bloqueado";
             document.login.password.value="tonto, no puedes ver esto";
             document.login.username.disabled=true;
             document.login.password.disabled=true;
             return false;
         }
     }