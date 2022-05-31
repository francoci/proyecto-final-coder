# Proyecto final Coderhouse
## Introducción
Proyecto final realizado para el curso de React de Coderhouse. Se trata del frontend de un ecommerce de venta de películas. 

## Instalación y uso
### Vercel
La aplicación está alojada en vercel y puede ser accedida y puede ser accedida en el siguiente [enlace](#).

### Modo local
Para probarlo en **modo local**, se puede clonar el repositorio con:

`git clone url`

Donde url se corresponde con la url del repositorio, que se puede obtener desde el boton de download. A partir de ahí, se tiene que instalar los modulos con:

`npm install`

Y por último inicializar la ejecución del proyecto con: 

`npm start`

Este último comando inicializa la ejecución del proyecto en el **puerto 3000** (localhost:3000).

## Navegación
El proyecto tiene una página principal (Home) con un banner tipo carousel y una versión reducida del catálogo de películas. Se puede clickear en los slides del carousel para acceder al catálogo filtrado por distintos géneros o usar los links de la barra de navegación. Para acceder al catálogo completo, se puede usar el botón *'Ver catálogo'* al fondo de la Home o el link 'Películas' de la barra de navegación.

También, se puede acceder al detalle de películas individuales colocando el mouse sobre la película y haciendo click en *'Ver más'*.

En la página de detalle de la película se puede agregar la misma al carrito, modificando la cantidad con el contador. Al agregar, se muestra en el ícono del carrito en la barra de navegación la cantidad de items actualizada.

Para acceder al carrito, se puede usar el icono del carrito en la barra de navegación o usar el botón *'Finalizar compra'* luego de agregar un producto al carrito.

En la página del carrito se puede ver el listado del carrito, eliminar productos y, si todo es correcto, acceder a la página del formulario de checkout. 

En esta última página se debe llenar los datos del comprador en el formulario. Hay una validación para asegurarse de que todos los datos sean correctos y válidos. Los errores se muestran al lado de la caption de cada campo. Al clickear en el botón de *'Finalizar compra'*, si los datos son válidos, se finaliza la compra, se vacía el carrito y se muestra un mensaje con un botón para regresar a la Home.

## Funcionamiento y módulos
Los datos de toda la aplicación están almacenados en **Firebase**, un servicio de base de datos provisto por Google. Desde ahí se traen datos de los géneros de películas, las películas en sí y también se graban los datos de los compradores / items de la compra tras cada checkout.

Se agregó el modulo de Font Awesome para la utilización de iconos svg.