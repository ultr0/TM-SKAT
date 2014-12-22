var myMap;
var x,y;
var myGeoObject;
var zoo=16;
// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init () {
    // Создание экземпляра карты и его привязка к контейнеру с
    // заданным id ("map").

myMap = new ymaps.Map("map", {
        center: [48.474914, 135.057452],
        zoom: 10
    }),
    myGeoObject = new ymaps.GeoObject({
        geometry: {
            type: "Point",// тип геометрии - точка
            coordinates: [x, y] // координаты точки
       }
    });
	myMap.geoObjects.add(myGeoObject); // Размещение геообъекта на карте.
    document.getElementById('destroyButton').onclick = function () {
        // Для уничтожения используется метод destroy.
        myMap.destroy();
    };
	


	
}

function func1(){
x = 48.484868;
y = 135.066471;
  myMap.setCenter([x, y]);
  myMap.setZoom(zoo);
setcoord(x,y);
//myGeoObject.geometry.setCoordinates([x,y]);
}

function func2(){
x = 48.489702;
y = 135.061476;
  myMap.setCenter([x, y]);
    myMap.setZoom(zoo);
setcoord(x,y);
//myGeoObject.geometry.setCoordinates([x,y]);
}

function func3(){
x = 48.482137;
y = 135.115671;
  myMap.setCenter([x, y]);
    myMap.setZoom(zoo);
setcoord(x,y);
//myGeoObject.geometry.setCoordinates([x,y]);
}

function setcoord(x,y){
	  myMap.geoObjects.remove(myGeoObject);
 myGeoObject = new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: [x, y]
       }
    });
  myMap.geoObjects.add(myGeoObject);
}
