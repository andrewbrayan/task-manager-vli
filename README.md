# Gestión de Tareas

Este proyecto es una aplicación web construida con Angular 16 que permite la gestión de tareas, incluyendo la asociación de personas y habilidades. La aplicación incluye la creación, visualización y actualización de tareas, además de filtrado por estado. Se utiliza NgRx para la gestión de estado y Angular Material para la interfaz de usuario.

## Características Principales

- **Crear tareas:** Formulario para agregar nuevas tareas con nombre, fecha de vencimiento, personas asociadas y sus habilidades.
- **Listar tareas:** Vista para mostrar las tareas creadas con la posibilidad de filtrarlas por estado (completadas o pendientes).
- **Asignar personas:** Asocia personas a cada tarea, con validaciones para evitar duplicados, verificar que la edad sea mayor a 18 años y que se asignen al menos una habilidad a cada persona.
- **Gestión de habilidades:** Añadir o eliminar habilidades a cada persona asignada a una tarea.
- **Filtrar tareas:** Filtros para ver las tareas completadas o pendientes.
- **Paginación:** La lista de tareas soporta paginación para mejorar la navegación cuando existen muchas tareas.

## Tecnologías Utilizadas

- **Angular 16:** Framework de frontend para la creación de la interfaz y la lógica de negocio.
- **NgRx:** Biblioteca para la gestión del estado de la aplicación.
- **Angular Material:** Componentes de interfaz de usuario para un diseño moderno y responsivo.
- **RxJS:** Manejo de flujos de datos asíncronos.
- **SCSS:** Preprocesador CSS utilizado para estilos personalizados.

## Iniciar Proyecto

Sigue los siguientes pasos para ejecutar el proyecto junto con JSON Server:

### Paso 1: Iniciar JSON Server

1. Asegúrate de tener JSON Server instalado globalmente en tu sistema. Si no lo tienes, instálalo con el siguiente comando:

```bash
npm install -g json-server
```

2. En la raíz del proyecto, crea el archivo db.json con la estructura de datos inicial o utiliza el ejemplo de abajo:

```json
{
  "tasks": []
}
```

3. Inicia JSON Server con el siguiente comando:

```bash
json-server --watch db.json
```

### Paso 2: Instalar dependencias

Instala las dependencias del proyecto con el siguiente comando:

```bash
npm install
```

### Paso 3: Iniciar el servidor de desarrollo

Ejecuta el siguiente comando para iniciar el servidor de desarrollo:

```bash
npm start
```

La aplicación se iniciará en http://localhost:4200/.