# Portafolio Yuliana

Portafolio personal hecho con HTML, CSS, JavaScript y React (react-scripts, la misma plantilla de React de CodeSandbox).

## Uso

```bash
npm install
npm start        # abre http://localhost:3000
npm run build    # compilar para producción
```

## Estructura

```
package.json       dependencias y comandos
public/index.html  página base
src/
  index.js         punto de entrada
  App.js           arma la página
  styles.css       estilos globales
  components/      piezas reutilizables (Navbar, Footer)
  sections/        secciones (Hero, About, Experience, Projects, Contact)
  data/            contenido editable (profile.js: datos y biografía; projects.js: los 20 proyectos)
  assets/          imágenes (yuliana.jpg es la foto del portafolio)
```

## Personalizar

- Correo, LinkedIn y GitHub: `src/data/profile.js` (los enlaces vacíos no se muestran).
- Enlaces de cada proyecto: campo `url` en `src/data/projects.js`.
- Para cambiar la foto, reemplaza `src/assets/yuliana.jpg`.
