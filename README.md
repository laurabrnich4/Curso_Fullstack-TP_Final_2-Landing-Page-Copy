# Landing Page React + Vite + Tailwind CSS

Una landing page moderna y responsiva construida con React, Vite y Tailwind CSS.

## 🚀 Características

- ⚡ **Vite** - Build tool ultra rápido
- ⚛️ **React 18** - Biblioteca de UI moderna
- 🎨 **Tailwind CSS** - Framework CSS utility-first
- 📱 **Diseño Responsivo** - Optimizado para todos los dispositivos
- 🔧 **Componentes Modulares** - Arquitectura limpia y escalable
- 📧 **Formulario de Contacto** - Funcionalidad completa de contacto
- 🎯 **Utility-First** - Desarrollo rápido con clases predefinidas


## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes React
│   ├── Header.jsx      # Navegación principal
│   ├── Hero.jsx        # Sección hero
│   ├── Features.jsx    # Características
│   ├── About.jsx       # Acerca de nosotros
│   ├── Contact.jsx     # Formulario de contacto
│   └── Footer.jsx      # Pie de página
├── App.jsx             # Componente principal
├── index.css           # Tailwind CSS imports
└── main.jsx            # Punto de entrada
```

## 🎨 Personalización

### Colores
Los colores principales se definen en `tailwind.config.js`:
- `primary-500`: #667eea
- `secondary-500`: #764ba2
- `accent-500`: #ec4899

### Contenido
Modifica el contenido directamente en los componentes JSX:
- Textos en `src/components/`
- Enlaces de navegación en `Header.jsx`
- Información de contacto en `Contact.jsx` y `Footer.jsx`

### Estilos con Tailwind
- Usa clases de Tailwind para estilos rápidos
- Personaliza colores en `tailwind.config.js`
- Añade utilidades personalizadas en `src/index.css`

## 📱 Responsive Design

La landing page está optimizada para:
- 📱 Móviles (320px+)
- 📱 Tablets (768px+)
- 💻 Desktop (1024px+)

## 🚀 Despliegue

### Vercel
```bash
npm run build
# Sube la carpeta 'dist' a Vercel
```

### Netlify
```bash
npm run build
# Arrastra la carpeta 'dist' a Netlify
```

### GitHub Pages
```bash
npm run build
# Sube el contenido de 'dist' a tu repositorio de GitHub Pages
```

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:
1. Fork el proyecto
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

## 📞 Soporte

Si tienes preguntas o necesitas ayuda, no dudes en contactarnos:
- Email: hola@miempresa.com
- Teléfono: +54 11 1234-5678
