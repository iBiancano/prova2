# Back-End

## Características de frameworks para BACKEND

* Los controladores: Se adaptan muy bien a las exigencias del proyecto que administran los eventos.
* Internacionalización: Esto se debe a que permiten la integración de diferentes lenguajes en un proyecto de desarrollo de una aplicación.
* Autenticación: Se accede al framework mediante la autenticación de usuario y contraseña. Esto ayuda a limitar la entrada y los tipos de permiso.
* Fácil acceso a datos: en archivos de como txt, xml por ejemplo mediante interfaces que integran las bases de datos.
* Abstracción de urls y sesiones: El framework se encarga de controlar y gestionar las urls y sesiones.

## Analisis DAR

### Establecer las guías para el análisis de decisiones

* Permiten construir aplicaciones de manera fácil y rápida, así como una fácil integración de las dependencias y puesta en producción.
* Es un framework popular, su comunidad es amplia y con una documentación extensa, capaz de cubrir las necesidades del proyecto
* Garantiza seguridad y escalabilidad.
* Cuenta con una gran compatibilidad con otras tecnologías.
* Es un framework que se actualiza constantemente, con un buen soporte y es de software libre.

### Establecer las guías para el análisis de decisiones

Los criterios de evaluación se basan en características esenciales de las tecnologías para el backend, las cuales se presentan en el siguiente listado:

1. Velocidad
2. Gratuito
3. Escalabilidad
4. Curva de aprendizaje alta
5. Multiplataforma
6. Integración sencilla de las dependencias
7. Seguridad
8. Resistente
9. Simplicidad
10. Facilidad de instalar y configurar
11. Amplia comunidad y documentación
12. Compatibilidad

En la siguiente tabla se asignan pesos y ponderaciones en un rango de 1 al 5.

<img :src="$withBase('/img/tablab.png')">

### Identificar las soluciones alternativas

Basados en una evaluación e investigación, de acuerdo a sus características  se llegó a la conclusión de que los siguientes frameworks son los más apropiados para el desarrollo del sistema:

#### Spring boot
Spring boot es una tecnología que permite crear aplicaciones autocontenidas, con esto nos podemos olvidar de la arquitectura y enfocarnos únicamente en desarrollo, delegando a Spring Boot labores como configuración de dependencias, desplegar nuestro servicio o aplicación a un servidor de aplicaciones y enfocarnos únicamente en crear nuestro código.

#### JHipster 
 JHipster es una plataforma de desarrollo para generar, desarrollar e implementar rápidamente aplicaciones web modernas y arquitecturas de microservicios. Admite muchas tecnologías frontend, incluidas Angular, React y Vue. Incluso soporte para aplicaciones móviles para Ionic y React Native en el backend, admite Spring Boot (con Java o Kotlin), Micronaut, Quarkus, Node.js y .NET. Para la implementación, opta por los principios nativos de la nube con Docker y Kubernetes. Existe soporte de implementación para AWS, Azure, Cloud Foundry, Google Cloud Platform, Heroku y OpenShift.

#### VertX 
VertX es un framework para el desarrollo de aplicaciones reactivas que se ejecutan en la máquina virtual de Java, enfocadas a la programación asíncrona,  que permiten escalabilidad y la eficiencia de recursos

#### Node js/ Express
Node js/ Express es un entorno que trabaja en tiempo de ejecución, de código abierto, multi-plataforma, que permite a los desarrolladores crear toda clase de herramientas de lado servidor y aplicaciones en JavaScript. Express es el framework web más popular de Node, y es la librería subyacente para un gran número de otros frameworks web de Node populares. 

#### Laravel
Laravel es un popular framework de PHP, permite el desarrollo de aplicaciones web totalmente personalizadas de elevada calidad, es uno de los más utilizados y de mayor comunidad en el mundo de Internet.

### Seleccionar los métodos de evaluación

A partir de lo anterior, nace la siguiente tabla, en la cual se indica la presencia o ausencia de as características descritas en la tabla 1, determinando los niveles de importancia, como se muestra a continuación:

<img :src="$withBase('/img/tabla2b.png')">

### Evaluar las soluciones alternativas

En la siguiente tabla se evalúan soluciones, para realizar esta evaluación se usó un método matemático, el cual determina cuantitativamente cuál framework es el más indicado según la descripción y calificación de sus características y así ser implementado en el desarrollo del proyecto SEGMAFLOT, esta evaluación se realizó mediante la siguiente fórmula:

<img :src="$withBase('/img/formula.png')">

Siendo:

Peso: La ponderación que se asignó a las características evaluadas
Valor: Calificación 1 o 0 si posee o no la característica descrita en la tabla de ponderación

<img :src="$withBase('/img/tablarb.png')">

1. La mayoría de los frameworks brindan una velocidad destacada, resaltando Vertx.
2. Todos los frameworks de acuerdo a la investigación permiten la escalabilidad
3. La mayoría de los frameworks cuenta con con una buena curva de aprendizaje a excepción de Vertx.
4. Todos los frameworks son multiplataforma.
5. Todas los los frameworks brindan una manera sencilla de integrar las dependencias sobresaliendo.
6. Todos los frameworks brindan una buena seguridad.
7. Spring boot, Jhipster laravel y node destacan por su simplicidad, excepto vertX.
8. Todos los frameworks destacan por su fácil configuración.
9. Todos los frameworks destacan por su amplia documentación y comunidad a excepción de VertX.
10. Todos los frameworks destacan por su compatibilidad.

### Seleccionar las soluciones

La selección de la solución se basa en la puntuación obtenida en el modelo matemático, debido a 10 características consideradas para el framework.

Al analizar los resultados nos encontramos con una solución viable, debido a que cumple con requerimientos como son la velocidad, escalabilidad, la sencilla integración de dependencias y su compatibilidad.

El resultado matemático obtenido se puede concluir con empate entre Spring boot y JHipster, Laravel y Node js/Express, que según el análisis realizado cumple con las características, basado en CMMI Análisis DAR.

## Referencias

* Get started | Eclipse Vert.x. (s. f.). Vertx.Io. https://vertx.io/get-started/

* Introduction to Vert.x and Reactive | Eclipse Vert.x. (s. f.). Vertx.Io. https://vertx.io/introduction-to-vertx-and-reactive/

* Programación Reactiva. (s. f.). Ferestrepoca. http://ferestrepoca.github.io/paradigmas-de-programacion/reactive/reactive_teoria/index.html

* Documentation | Eclipse Vert.x. (s. f.). Vertx.Io. https://vertx.io/docs/#testing

* Gracia, L. (2013, 4 junio). ¿Qué es vert.x? Un poco de Java. https://unpocodejava.com/2013/06/04/que-es-vert-x/#:%7E:text=x%20es%20un%20framework%20para,%2C%20Groovy%2C%20Ruby%20o%20Python.

* Webb, P. D. S. (s. f.). Spring Boot Reference Documentation. Spring.Io. https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#build-tool-plugins

* Caules, C. Á. (2022, 11 enero). ¿Qué es Spring Boot? Arquitectura Java. https://www.arquitecturajava.com/que-es-spring-boot/

* Spring Blog. (2022, 31 marzo). Spring. https://spring.io/blog

* JHipster: una completa suite para el desarrollo de aplicaciones web. (2022, 18 marzo). IONOS 

* Digitalguide. https://www.ionos.es/digitalguide/paginas-web/desarrollo-web/jhipster/

* Creating an application. (s. f.). Jhipster.Tech. https://www.jhipster.tech/creating-an-app/

* Video tutorial. (s. f.). Jhipster.Tech. https://www.jhipster.tech/video-tutorial/

* Glosario de Express. (s. f.). expressjs.com. https://expressjs.com/es/resources/glossary.html