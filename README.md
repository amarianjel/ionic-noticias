<div align="center">

#  [Aplicación de Noticias](https://www.djangoproject.com/) &middot; [<img src="https://i.postimg.cc/wT4x8tWS/codepenblanco.png" alt="LinkedIn" class="footer-nav__link-image" height="30px" />](https://codepen.io/amarianjel/)   [<img src="https://i.postimg.cc/5NBMxTJX/github.png" alt="GitHub" class="footer-nav__link-image" height="30px" />](https://github.com/amarianjel)   [<img src="https://i.postimg.cc/1Xj3mL3G/github-Pages-blanco.png" alt="GitHub" class="footer-nav__link-image" height="70px" style="margin-bottom: -20px;"/>](https://amarianjel.github.io/Portfolio/)  [<img src="https://i.postimg.cc/J7BLFtdc/linkedin.png" alt="LinkedIn" class="footer-nav__link-image" height="30px" />](https://www.linkedin.com/in/amarianjel/)   [<img src="https://i.postimg.cc/1zqYRTyp/facebook.png" alt="LinkedIn" class="footer-nav__link-image" height="30px" />](https://www.facebook.com/Abraham13071993/)   [<img src="https://i.postimg.cc/sfJtqS4W/instagram.png" alt="Instagram" class="footer-nav__link-image" height="30px" />](https://www.instagram.com/abr_marianjel/)
[![forthebadge](https://img.shields.io/badge/Made%20with-Ionic-blue.svg)](https://ionicframework.com/)
![Quicktype](https://img.shields.io/badge/Quicktype-%E2%9A%99%EF%B8%8F-orange)
[![forthebadge](https://img.shields.io/badge/Angular-%F0%9F%8C%8D-red.svg)](https://angular.io/)
![Android](https://img.shields.io/badge/Android-%F0%9F%93%B1-brightgreen)
![InAppBrowser](https://img.shields.io/badge/InAppBrowser-%F0%9F%8C%8F%F0%9F%93%B6-yellow)
![Capacitor](https://img.shields.io/badge/Capacitor-%F0%9F%94%8C-blueviolet)
![Social Sharing Plugin](https://img.shields.io/badge/Social%20Sharing%20Plugin-%E2%86%95%EF%B8%8F%F0%9F%94%BD-lightgrey)


</div>


<p align="center">
  <img src="https://assets.stickpng.com/images/62a7475d223343fbc2207cff.png" alt="Logo Ionic">
</p>


# 📑 Api key 📑
https://newsapi.org

## 📑 Quicktype 📑
Es una pagina para crear interfaz pasando como parametro una respuesta de una api
https://quicktype.io

## Encabezados
Desde la api https://newsapi.org/docs/endpoints/top-headlines

# 🚩 Crear aplicaciones con IOS, Android con angular 🚩
No funciona con ionic 7 iab
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

4- Luego de todas las instalaciones levante el serve... Ya debería de funcionar....

```ionic serve```


5- Si no funciona elimine los modulos, vuelva a crearlos: npm install y vuelva a levantar el serve una vez termine.

Nota: Muchos pluggins de cordova no se actualizaran a capacitor! y muchos de estos pluggins de cordova siguen funcionando y se les da soporte.... Está es la manera que encontré para utilizar pluggins de cordova con capacitor... En resumen es agregar las dos lineas del paso #3...


# 🛠 Correr en Android 🛠
Luego de poner este comando se abrirá Android Studio y correrá la aplicación.
```ionic capacitor build android```

## 🚀 Social Share 🚀
https://danielsogl.gitbook.io/awesome-cordova-plugins/social-sharing

# Tecnologías Utilizadas

| Tecnología               | Descripción                       | Icono                |
|--------------------------|-----------------------------------|----------------------|
| News API                 | API para obtener noticias         | :newspaper:          |
| Quicktype                | Generación de interfaces          | :gear:               |
| Angular                  | Framework para aplicaciones web   | :atom_symbol:        |
| Ionic                    | Framework para aplicaciones móviles| :iphone:             |
| InAppBrowser             | Plugin de Cordova para navegación | :globe_with_meridians:|
| Capacitor                | Framework para apps híbridas      | :electric_plug:      |
| Android Studio           | IDE para desarrollo de Android    | :computer:           |
| Social Sharing Plugin    | Plugin de Cordova para compartir  | :arrow_up_down:      |

# Sección 9 del desplegue

## PWA
Si existe un problema con la instalacion, borrar y volver a instalar el npm.
https://ionicframework.com/docs/angular/pwa

Después del primer code
```ionic build --prod --service-worker```

https://web.dev/progressive-web-apps/
https://web.dev/add-manifest/?hl=es

### Generador de Manifest
https://app-manifest.firebaseapp.com

## Firabase
Nos vamos a comenzar y luego a hosting
```npm install -g firebase-tools```

Para volver a subir:
```ionic build --prod --service-worker```
```firebase deploy```