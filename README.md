# Api key
https://newsapi.org

# Quicktype
Es una pagina para crear interfaz pasando como parametro una respuesta de una api
https://quicktype.io

# Encabezados
Desde la api https://newsapi.org/docs/endpoints/top-headlines

# Crear aplicaciones con IOS, Android con angular
No funciona con ionic 7
```
ionic cordova plugin add cordova-plugin-inappbrowser
npm install @awesome-cordova-plugins/in-app-browser
```

Para aquellos que tengan problemas instalando los pluggins de cordova en en proyecto con el motor de capacitor aquí la solución:



1- Paren el proyecto e instalen lo mismo que el profesor

URL `https://ionicframework.com/docs/native/in-app-browser#installation`

``` 
1- npm install cordova-plugin-inappbrowser 
2- npm install @awesome-cordova-plugins/in-app-browser 
3- ionic cap sync
```

2- Agregen la importación igual que el profesor, tanto en el appmodule.ts como en articulo.ts

y no olviden agregar el provider en el appmodule
```
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
 
providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    InAppBrowser
],
```

3-  Instalen las siguientes dos líneas
```
1- npm i @ionic-native/core
2- npm i --save @awesome-cordova-plugins/core
```

-4 Luego de todas las instalaciones levante el serve... Ya debería de funcionar....

```ionic serve```


5- Si no funciona elimine los modulos, vuelva a crearlos: npm install y vuelva a levantar el serve una vez termine.

Nota: Muchos pluggins de cordova no se actualizaran a capacitor! y muchos de estos pluggins de cordova siguen funcionando y se les da soporte.... Está es la manera que encontré para utilizar pluggins de cordova con capacitor... En resumen es agregar las dos lineas del paso #3...


# Correr en Android
Luego de poner este comando se abrirá Android Studio y correrá la aplicación.
```ionic capacitor build android```