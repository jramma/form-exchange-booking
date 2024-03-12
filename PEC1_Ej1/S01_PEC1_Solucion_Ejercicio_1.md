# Ejercicio 1 - Preguntas teóricas (2puntos)

1. **La aparición de HTML5/CSS3/JS ha supuesto el nacimiento del desarrollo front-end moderno. (0.75 puntos)**

- **¿Cuál es la ventaja del uso de etiquetas semánticas? Nombra y explica al menos 3 de estas ventajas.**

  Mejora la accesibilidad: El uso de etiquetas semánticas como `header`, `nav`, `article`, etc., facilita la comprensión del contenido por parte de los lectores de pantalla y otros dispositivos asistidos, mejorando la accesibilidad para usuarios con discapacidades.

  SEO mejorado: Motores de búsqueda como Google pueden entender mejor la estructura y el contenido de la página a través de etiquetas semánticas, lo que contribuye a un mejor posicionamiento en los resultados de búsqueda.

  Facilita el mantenimiento del código: El código se vuelve más legible y mantenible al utilizar etiquetas semánticas adecuadas, ya que reflejan la estructura lógica y jerárquica del contenido.
  </br></br>

- **Cita al menos 3 APIs HTML5 y explica brevemente su funcionalidad.**

  Geolocation API: Permite a las aplicaciones web acceder a la ubicación del usuario, proporcionando información sobre la latitud y longitud, lo que es útil para servicios basados en la ubicación.

  Canvas API: Permite la creación de gráficos y animaciones dinámicas en el navegador mediante el uso de scripts JavaScript, facilitando la manipulación de imágenes y elementos gráficos.

  Web Storage API: Proporciona métodos para almacenar datos de forma persistente en el navegador, ya sea localmente (localStorage) o de sesión (sessionStorage), permitiendo a las aplicaciones web almacenar información del usuario de manera eficiente.

- **Cita qué opción ofrece CSS3 para conseguir que se apliquen diferentes estilos CSS sobre el mismo elemento en su visualización en diferentes dispositivos (diferentes tamaños de pantalla).**

  La opción que ofrece CSS3 para aplicar diferentes estilos según el dispositivo es Media Queries: https://devdocs.io/css/@media. Mediante Media Queries, se pueden definir reglas de estilo condicionales basadas en características como el ancho de la pantalla, la resolución, la orientación, etc.
  </br></br>

- **Cita al menos 4 de las características principales de TypeScript (importante superset de JavaScript que trataremos en el siguiente capítulo)**

  Tipado estático: TypeScript agrega un sistema de tipos estático a JavaScript, lo que permite la verificación de tipos durante el desarrollo, reduciendo errores en tiempo de ejecución.

  Soporte para ECMAScript 6 y superiores: TypeScript soporta las últimas características de ECMAScript, lo que facilita la adopción de nuevas funcionalidades de JavaScript.

  Interfaces y clases: TypeScript facilita la creación de interfaces y clases, lo que mejora la estructura y la legibilidad del código, así como el soporte para programación orientada a objetos.

  Compilación opcional: TypeScript se puede compilar a JavaScript, pero el código TypeScript también puede ejecutarse directamente en entornos que admiten ECMAScript 6 o superior, brindando flexibilidad en la elección de cómo utilizar el código TypeScript.
  </br></br></br>

2. **El lenguaje CSS es muy rígido, poco práctico y ordenado a la hora de programar. Para evitar este problema se han creado los preprocesadores CSS, que ofrecen evidentes ventajas (0.5 puntos)**

- **Cita al menos 2 de estos preprocesadores.**

  Sass (Syntactically Awesome Stylesheets): Sass es un preprocesador de CSS que introduce características como variables, anidamiento de reglas, y mixins, facilitando la escritura y mantenimiento del código.

  Less: Less es otro preprocesador de CSS que comparte características similares con Sass, proporcionando variables, reglas anidadas, y funciones, entre otras ventajas.
  </br></br>

- **Cita al menos 4 ventajas que ofrecen estos preprocesadores.**

  Variables: Permite definir variables que pueden ser reutilizadas a lo largo del código, facilitando la actualización y consistencia del diseño.

  Anidamiento de reglas: Permite anidar selectores, mejorando la estructura del código y haciendo más legible la relación entre elementos HTML y su estilo.

  Mixins: Facilita la reutilización de bloques de código, reduciendo la duplicación y mejorando el mantenimiento del código.

  Operaciones matemáticas: Algunos preprocesadores permiten realizar operaciones matemáticas directamente en las hojas de estilo, facilitando cálculos para dimensiones y márgenes.
  </br></br>

- **Explica brevemente en qué consisten los sourcemaps.**

  Los sourcemaps son archivos que mapean el código preprocesado a su versión original, facilitando el debugging en el navegador. Cuando se trabaja con preprocesadores CSS, los sourcemaps permiten vincular el código ejecutado en el navegador con el código fuente original, incluso si este último está escrito en un lenguaje diferente.
  </br></br>

- **Explica qué es un transpilador.**

  Un transpilador es una herramienta que traduce el código fuente de un lenguaje a otro de nivel similar. En el contexto de los preprocesadores CSS, el transpilador convierte el código escrito en un preprocesador (como Sass o Less) a código CSS válido que puede ser interpretado por los navegadores web. Este proceso de transpilación permite utilizar características avanzadas de los preprocesadores sin afectar la compatibilidad con los navegadores que solo entienden CSS estándar.
  </br></br> </br>

3. **El flujo de trabajo profesional en front-end hace indispensable el uso de herramientas como controles de versiones y herramientas de gestión de módulos (0.75 puntos).**

- **Al menos dos sistemas de control de versiones y dos herramientas de gestión de módulos:**

  Sistemas de control de versiones: Git y Mercurial. Git es un sistema de control de versiones distribuido que permite a los equipos trabajar en el mismo código de manera simultánea. Mercurial es similar a Git pero con una interfaz de usuario más sencilla.

  Herramientas de gestión de módulos: npm y yarn. npm es el gestor de paquetes por defecto para Node.js y permite a los desarrolladores instalar y administrar paquetes de software. Yarn es una alternativa a npm que proporciona un rendimiento más rápido y una gestión de dependencias más segura.
  </br></br>

- **Al menos 3 comandos de Git:**

  `git clone <url>`: Este comando se utiliza para clonar (copiar) un repositorio desde una URL existente.

  `git add .`: Este comando agrega todos los archivos modificados en el directorio actual al área de preparación para el próximo commit.

  `git commit -m "mensaje"`: Este comando registra los cambios en el repositorio con un mensaje descriptivo.
  </br></br>

- **Características más definitorias de WebPack:**

  Webpack es un empaquetador de módulos para aplicaciones JavaScript modernas. Algunas de sus características más definitorias son:

  - Transformación de activos: Webpack puede transformar archivos front-end como HTML, CSS, y imágenes, permitiendo la inclusión de cualquier tipo de activo como un módulo JavaScript.

  - Optimización de código: Webpack puede optimizar el código para mejorar el rendimiento en producción, incluyendo la minificación y la eliminación de código muerto.

  - Carga diferida: Webpack soporta la carga diferida de código, lo que puede mejorar el tiempo de carga de la página al dividir el código en varios paquetes que se pueden cargar a demanda.
