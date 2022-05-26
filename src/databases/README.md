# Data-Bases

## Características de los sistemas gestores de bases de datos

* Son responsables de administrar adecuadamente los datos, evitan que usuarios y programas de comprender la ubicación física de los datos.
* Pueden administrar diferentes tipos de bases de datos, como bases de datos relacionales  y orientadas a objetos.
* Debe garantizar la seguridad de los datos que serán almacenados.
* Acceso concurrente de múltiples usuarios autorizados a los datos, realizando operaciones de actualización y consulta.
* Consistencia de datos.

## Analisis DAR

### Establecer las guías para el análisis de decisiones

* El sistema gestor de base de datos debe ser multiplataforma facilitando el trabajo por parte del equipo sin importar el sistema operativo con el que se trabaje.
* Autenticación de usuarios.
* Debe contar con un abanico de posibles lenguajes compatibles.
* Acepta consultas complejas.
* Cuenta con documentación y soporte en caso de requerirse.

### Establecer los criterios de evaluación

Los criterios de evaluación se basan en características esenciales de los sistemas gestores de base de datos, las cuales se presentan en el siguiente listado:

1. Velocidad.
2. Gratuito.
3. Escalabilidad horizontal.
4. Escalabilidad vertical.
5. Multiplataforma.
6. Nosql.
7. Permiten la autenticación de usuarios.
8. Almacenamiento sin límites.
9. Soporte gratuito.
10. Potente sintaxis permitiendo consultas complejas.
11. Replicación.
12. Permite transacciones.
13. Simplicidad.
14. Facilidad de instalación y configuración.
15. Herramienta gráfica.

En la siguiente tabla se asignan pesos y ponderaciones en un rango de 1 al 5.

<img :src="$withBase('/img/tablabd.png')">

### Identificar las soluciones alternativas

Basados en los resultados obtenidos por una encuestra realizada por StackOverFlow acerca de la tecnología más usada para base de datos nos encontramos con lo siguiente:

<img :src="$withBase('/img/graficabd.png')">

Como podemos apreciar en la figura anterior, MySQL lidera la encuesta seguida por PostgreSQL, del listado anterior tomaremos 4 herramientas que consideramos relevantes añadiendo a Firebase para proceder a conceptualizarlos y realizar la evaluación de características.

#### Firebase
Firebase se trata de una plataforma móvil creada por Google, cuya principal función es desarrollar y facilitar la creación de apps de elevada calidad de una forma rápida, con el fin de que se pueda aumentar la base de usuarios y ganar más dinero. La plataforma está subida en la nube y está disponible para diferentes plataformas como iOS, Android y web. Contiene diversas funciones para que cualquier desarrollador pueda combinar y adaptar la plataforma a medida de sus necesidades.

#### MySQL
MySQL es un sistema de gestión de bases de datos relacionales (RDBMS) de código abierto respaldado por Oracle y basado en el lenguaje de consulta estructurado (SQL). MySQL funciona prácticamente en todas las plataformas, incluyendo Linux, UNIX y Windows. Aunque puede utilizarse en una amplia gama de aplicaciones, MySQL se asocia más a menudo con las aplicaciones web y la publicación en línea.

#### PostgreSql
PostgreSql es un sistema de código abierto de administración de bases de datos del tipo relacional, aunque también es posible ejecutar consultas que sean no relaciones. En este sistema, las consultas relacionales se basan en SQL, mientras que las no relacionales hacen uso de JSON.

#### Microsoft SQL Server (SQL server)
Microsoft SQL Server (SQL server) es un sistema de gestión de bases de datos relacionales (RDBMS) que admite una amplia variedad  de aplicaciones de procesamiento de transacciones, inteligencia empresarial y análisis en entornos informáticos corporativos. Microsoft SQL Server es una de las tres tecnologías de bases de datos líderes del mercado, junto con Oracle Database y DB2 de IBM.

#### MongoDB
MongoDB es un sistema de base de datos NoSQL orientado a documentos de código abierto y escrito en C++, que en lugar de guardar los datos en tablas lo hace en estructuras de datos BSON (similar a JSON) con un esquema dinámico. Al ser un proyecto de código abierto, sus binarios están disponibles para los sistemas operativos Windows, GNU/Linux, OS X y Solaris y es usado en múltiples proyectos o implementaciones en empresas como MTV Network, Craigslist, BCI o Foursquare

### Seleccionar los métodos de evaluación

A partir de lo anterior, nace la siguiente tabla, en la cual se indica la presencia o ausencia de as características descritas en la tabla 1, determinando los niveles de importancia, como se muestra a continuación:

<img :src="$withBase('/img/tabladb2.png')">

En la siguiente tabla se evalúan soluciones, para realizar esta evaluación se usó un método matemático, el cual determina cuantitativamente cuál gestor de base de datos en el más indicado según la descripción y calificación de sus características y así ser implementado en el desarrollo del proyecto SEGMAFLOT, esta evaluación se realizó mediante la siguiente fórmula:

<img :src="$withBase('/img/formula.png')">

Siendo:

Peso: La ponderación que se asignó a las características evaluadas
Valor: Calificación 1 o 0 si posee o no la característica descrita en la tabla de ponderaciones

<img :src="$withBase('/img/trablarsdb.png')">

1. La mayoría cuentan con velocidad considerable, destacando MongoDB y MySQL
2. La mayoría de las opciones son de versión gratuita a excepción de Firebase quien cuenta con paquetes que se adaptan a las necesidades del usuario, lo mismo pasa con MongoDb con su versión Mongo Atlas.
3. Los gestores NoSQL por excelencia aceptan escalabilidad horizontal. 
4. Todos los gestores aceptan escalabilidad vertical.
5. Todos los gestores de base de datos, son multiplataforma
6. Firebase y Mongo son gestores noSql, aunque en algunos gestores se permiten la creación de bases de datos híbridas.
7. La autenticación de usuarios Firebase la permite de manera nativa, integrando la opción de autenticación con redes sociales
8. La mayoría de los gestores que no se encuentran en la nube cuentan con almacenamiento ilimitado.
9. Algunos gestores de base de datos ofrecen el soporte bajo licencia o suscripción.
10. Todos aceptan sintaxis complejas de consultas permitiéndonos obtener resultados más complejos.
11. Todos los gestores de base de datos permiten la replicación.
12. Todos los gestores de base de datos permiten transacciones.
13. La mayoría de los gestores de bases de datos son fáciles de utilizar, algunos un poco más complejos que otros.
14. Todos son fáciles de instalar y configurar.
15. Cuentan con una parte gráfica donde se muestra la información de manera más fácil de comprender.

### Seleccionar las soluciones

La selección de la solución se basa en la puntuación obtenida en el modelo matemático, debido a 15 características consideradas para el gestor de base de datos.

Al analizar los resultados nos encontramos con una solución viable, debido que cumple con requerimientos como son la compatibilidad, que no represente gastos por su uso y licencia, así como un potente gestor que nos permita realizar la maquetación de una base de datos nosql aceptando documentos como registros y obteniendo consultas fiables acorde a nuestras necesidades.

El resultado matemático obtenido se puede concluir con el gestor de base de datos MongoDB, que según el análisis realizado cumple con las características, basado en CMMI Análisis DAR.

## Referencias

* Firebase Pricing. (2022). Firebase. https://firebase.google.com/pricing

* Primeros pasos con Cloud Firestore | Firebase Documentation. (2021). Firebase. https://firebase.google.com/docs/firestore/quickstart?hl=es-419#web-version-9

* Mora, S. L. (2020, 27 mayo). Firebase: qué es, para qué sirve, funcionalidades y ventajas. DIGITAL55. https://www.digital55.com/desarrollo-tecnologia/que-es-firebase-funcionalidades-ventajas-conclusiones/

* MongoDB. (s. f.). Comparando Firebase Y. https://www.mongodb.com/es/firebase-vs-mongodb#:%7E:text=MongoDB%20is%20a%20more%20robust,purely%20a%20cloud%20database%20service

* MongoDB. (s. f.-c). MongoDB: The Application Data Platform. https://www.mongodb.com/

* MySQL: ¿Qué es? Características, Ventajas y Desventajas. (2019, 24 enero). hostingpedia.net. https://hostingpedia.net/mysql.html

* PostgreSQL: About. (s. f.). The PostgreSQL Global Development Group. https://www.postgresql.org/about/

* Stack Overflow Developer Survey 2021. (s. f.). Stack Overflow. https://insights.stackoverflow.com/survey/2021/#most-popular-technologies-database

* O. (2017, 7 marzo). Escalabilidad Horizontal y Vertical. Oscar Blancarte - Software Architecture. https://www.oscarblancarteblog.com/2017/03/07/escalabilidad-horizontal-y-vertical/

* Beneficios de la Replicación de Base de Datos. (s. f.). blog.powerdata. https://blog.powerdata.es/el-valor-de-la-gestion-de-datos/beneficios-de-la-replicacion-de-base-de-datos

* Cardona, M. P. (2020, 8 enero). Firebase, qué es y para qué sirve la plataforma de Google. Thinking for Innovation. https://www.iebschool.com/blog/firebase-que-es-para-que-sirve-la-plataforma-desarroladores-google-seo-sem/

* de TechTarget, C. (2021, 23 abril). MySQL. ComputerWeekly.es. https://www.computerweekly.com/es/definicion/MySQL

* Borges, S. (2019, 19 noviembre). Servidor PostgreSQL. Infranetworking. https://blog.infranetworking.com/servidor-postgresql/

* Cardona, M. P. (2020, 8 enero). Firebase, qué es y para qué sirve la plataforma de Google. Thinking for Innovation. https://www.iebschool.com/blog/firebase-que-es-para-que-sirve-la-plataforma-desarroladores-google-seo-sem/

* Robledano, A. (2021, 26 agosto). Qué es MongoDB. OpenWebinars.net. https://openwebinars.net/blog/que-es-mongodb/

