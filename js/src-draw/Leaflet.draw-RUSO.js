/**
 * Leaflet.draw assumes that you have already included the Leaflet library.
 */
L.drawVersion = '0.4.2';
/**
 * @class L.Draw
 * @aka Draw
 *
 *
 * To add the draw toolbar set the option drawControl: true in the map options.
 *
 * @example
 * ```js
 *      var map = L.map('map', {drawControl: true}).setView([51.505, -0.09], 13);
 *
 *      L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
 *          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
 *      }).addTo(map);
 * ```
 *
 * ### Adding the edit toolbar
 * To use the edit toolbar you must initialise the Leaflet.draw control and manually add it to the map.
 *
 * ```js
 *      var map = L.map('map').setView([51.505, -0.09], 13);
 *
 *      L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
 *          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
 *      }).addTo(map);
 *
 *      // FeatureGroup is to store editable layers
 *      var drawnItems = new L.FeatureGroup();
 *      map.addLayer(drawnItems);
 *
 *      var drawControl = new L.Control.Draw({
 *          edit: {
 *              featureGroup: drawnItems
 *          }
 *      });
 *      map.addControl(drawControl);
 * ```
 *
 * The key here is the featureGroup option. This tells the plugin which FeatureGroup contains the layers that
 * should be editable. The featureGroup can contain 0 or more features with geometry types Point, LineString, and Polygon.
 * Leaflet.draw does not work with multigeometry features such as MultiPoint, MultiLineString, MultiPolygon,
 * or GeometryCollection. If you need to add multigeometry features to the draw plugin, convert them to a
 * FeatureCollection of non-multigeometries (Points, LineStrings, or Polygons).
 */
L.Draw = {};

/**
 * @class L.drawLocal
 * @aka L.drawLocal
 *
 * The core toolbar class of the API — it is used to create the toolbar ui
 *
 * @example
 * ```js
 *      var modifiedDraw = L.drawLocal.extend({
 *          draw: {
 *              toolbar: {
 *                  buttons: {
 *                      polygon: 'Нарисуйте потрясающий многоугольник'
 *                  }
 *              }
 *          }
 *      });
 * ```
 *
 * The default state for the control is the draw toolbar just below the zoom control.
 *  This will allow map users to draw vectors and markers.
 *  **Please note the edit toolbar is not enabled by default.**
 */
L.drawLocal = {
	// format: {
	// 	numeric: {
	// 		delimiters: {
	// 			thousands: ',',
	// 			decimal: '.'
	// 		}
	// 	}
	// },
	draw: {
		toolbar: {
			// #TODO: this should be reorganized where actions are nested in actions
			// ex: actions.undo  or actions.cancel
			actions: {
				title: 'Отменить рисунок',
				text: 'Отменить'
			},
			finish: {
				title: 'Закончить рисунок',
				text: 'Закончить'
			},
			undo: {
				title: 'Удалить последнюю нарисованную точку',
				text: 'Удалить последнюю точку'
			},
			buttons: {
				polyline: 'Нарисуйте ломаную линию',
				polygon: 'Нарисуйте многоугольник',
				rectangle: 'Нарисуйте прямоугольник',
				circle: 'Нарисовать круг',
				marker: 'Нарисуйте маркер',
				circlemarker: 'Нарисуйте круговой маркер'
			}
		},
		handlers: {
			circle: {
				tooltip: {
					start: 'Щелкните и перетащите, чтобы нарисовать круг.'
				},
				radius: 'Radius'
			},
			circlemarker: {
				tooltip: {
					start: 'Щелкните карту, чтобы разместить маркер круга.'
				}
			},
			marker: {
				tooltip: {
					start: 'Щелкните карту, чтобы разместить маркер.'
				}
			},
			polygon: {
				tooltip: {
					start: 'Нажмите, чтобы начать рисовать фигуру.',
					cont: 'Нажмите, чтобы продолжить рисование фигуры.',
					end: 'Щелкните первую точку, чтобы закрыть эту форму.'
				}
			},
			polyline: {
				error: '<strong>Ошибка:</strong> края формы не могут пересекаться!',
				tooltip: {
					start: 'Нажмите, чтобы начать рисовать линию.',
					cont: 'Нажмите, чтобы продолжить рисование линии.',
					end: 'Щелкните последнюю точку, чтобы финишировать.'
				}
			},
			rectangle: {
				tooltip: {
					start: 'Щелкните и перетащите, чтобы нарисовать прямоугольник.'
				}
			},
			simpleshape: {
				tooltip: {
					end: 'Отпустите кнопку мыши, чтобы закончить рисование.'
				}
			}
		}
	},
	edit: {
		toolbar: {
			actions: {
				save: {
					title: 'Сохранить изменения',
					text: 'Сохранить'
				},
				cancel: {
					title: 'Отменить редактирование, отменить все изменения',
					text: 'Отменить'
				},
				clearAll: {
					title: 'Очистить все слои',
					text: 'Очистить все'
				}
			},
			buttons: {
				edit: 'Редактировать слои',
				editDisabled: 'Нет слоев для редактирования',
				remove: 'Удалить слои',
				removeDisabled: 'Нет слоев для удаления'
			}
		},
		handlers: {
			edit: {
				tooltip: {
					text: 'Перетащите ручки или маркеры, чтобы редактировать объекты.',
					subtext: 'Нажмите "Отмена", чтобы отменить изменения.'
				}
			},
			remove: {
				tooltip: {
					text: 'Нажмите на объект, чтобы удалить.'
				}
			}
		}
	}
};
