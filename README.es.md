# ProfileStack

[English](README.md) · [Castellano](README.es.md)

Una trayectoria profesional, muchos CVs listos para cada tipo de puesto.

<p align="center">
  <img src="docs/ProfileStack.png" alt="ProfileStack" width="1000">
</p>

ProfileStack es un sistema open source para gestionar múltiples versiones de un CV a partir de datos estructurados. Te ayuda a mantener organizada tu trayectoria profesional, adaptarla a distintas oportunidades y exportar CVs limpios de una página sin reescribir la misma información una y otra vez.

---

## El Problema

La mayoría de profesionales no tienen realmente un único CV.

Tienen una trayectoria profesional que necesitan presentar de forma distinta según el puesto, la empresa, el nivel, el sector o el contexto de contratación. Una persona desarrolladora puede necesitar un CV frontend, otro backend y otro más orientado a producto. Una persona diseñadora puede necesitar una versión para UX research y otra para product design. Una persona de marketing puede querer versiones distintas para contenido, growth o marca.

Copiar el mismo documento una y otra vez funciona durante un tiempo, pero pronto se vuelve difícil de mantener. Las fechas se desajustan, el tono deja de ser consistente, los proyectos importantes quedan enterrados y cada actualización hay que repetirla manualmente en varios archivos.

## La Solución

ProfileStack no es simplemente otro generador de CVs.

**ProfileStack es un sistema de gestión de CVs.**

En lugar de tratar el CV como un único documento estático, ProfileStack trata cada CV como una variante de perfil: una versión enfocada de tu historia profesional, guardada como datos estructurados y renderizada con el mismo editor y la misma vista previa.

Creas un archivo por perfil, como `frontend.profile.js`, `backend.profile.js` o `product-manager.profile.js`. ProfileStack descubre esos archivos automáticamente, los muestra en el selector, permite editarlos y previsualizarlos, y mantiene el resultado preparado para exportarlo a PDF desde el navegador.

## Funcionalidades

- **Múltiples variantes de CV**  
  Mantén CVs distintos para roles distintos sin duplicar lógica de aplicación.

- **Descubrimiento automático de perfiles**  
  Añade un nuevo archivo `*.profile.js` y aparecerá en la app.

- **Layout A4 de una página**  
  Previsualiza tu CV en un formato pensado para documentos concisos.

- **Exportación a PDF desde el navegador**  
  Exporta usando el diálogo de impresión del navegador con "Guardar como PDF".

- **Estructura compatible con ATS**  
  Mantén el contenido estructurado, legible y compatible con filtros automatizados.

- **Esquema de perfil estructurado**  
  Guarda los datos del perfil como objetos JavaScript predecibles.

- **Perfiles privados locales**  
  Mantén tus CVs reales fuera de Git con archivos privados ignorados.

- **Open source**  
  Clónalo, personalízalo y adáptalo a tu propio flujo profesional.

## ¿Para Quién Es?

ProfileStack puede ser útil para cualquier persona que se presente a más de un tipo de puesto:

- Developers
- Designers
- Product Managers
- QA Engineers
- DevOps Engineers
- Data Analysts
- Profesionales de marketing
- Personas en cambio de carrera
- Freelancers y consultores

Es especialmente útil cuando tu experiencia es amplia, pero cada candidatura necesita una historia más enfocada.

## Arquitectura

```text
Perfil
   |
   v
Datos del CV
   |
   v
Editor
   |
   v
Vista previa
   |
   v
PDF
```

Los perfiles viven como archivos de datos. La app los carga automáticamente, los renderiza en el editor, muestra la vista previa A4 y deja que el navegador gestione la exportación a PDF.

## Instalación

```bash
npm install
npm run dev
```

Abre la URL local que muestre Next.js, normalmente:

```text
http://localhost:3000
```

Scripts útiles:

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Crear Perfiles

Los perfiles demo públicos viven en:

```text
src/data/profiles/
```

Para crear un perfil nuevo en menos de cinco minutos:

1. Añade un nuevo archivo en `src/data/profiles/`.
2. Nómbralo según el rol o audiencia, por ejemplo:

```text
frontend.profile.js
backend.profile.js
product-manager.profile.js
qa-engineer.profile.js
marketing.profile.js
```

3. Exporta un objeto con esta estructura:

```javascript
export default {
  id: "frontend",
  label: "Frontend",
  description: "CV orientado a frontend, UI, componentes e interfaces de producto.",
  resume: {
    name: "Alex Morgan",
    position: "Frontend Developer",
    contactInformation: "+1 555 010 123",
    email: "alex.morgan@example.com",
    address: "Remote",
    profilePicture: "",
    socialMedia: [],
    summary: "",
    education: [],
    workExperience: [],
    projects: [],
    skills: [],
    languages: [],
    certifications: []
  }
}
```

4. Refresca la app.

Eso es todo. El selector de perfiles se construye a partir de los metadatos de tus archivos, así que no necesitas modificar la lógica de la aplicación.

## Perfiles Privados

Los CVs reales suelen contener datos personales. ProfileStack incluye una estrategia sencilla para mantener perfiles privados solo en local.

Usa este patrón para perfiles privados que quieras cargar localmente:

```text
src/data/profiles/my-real-cv.private.profile.js
```

Los archivos que coincidan con este patrón son ignorados por Git:

```text
*.private.profile.js
```

Como el archivo sigue estando dentro de `src/data/profiles/`, ProfileStack puede descubrirlo localmente mientras Git lo mantiene fuera del repositorio público.

También puedes guardar notas privadas, borradores o material de origen aquí:

```text
src/data/private-profiles/
```

Esa carpeta está ignorada por Git y está pensada para material local, no para perfiles demo públicos.

## Exportar a PDF

Para exportar un CV:

1. Ejecuta la app con `npm run dev`.
2. Selecciona el perfil que quieres exportar.
3. Revisa la vista previa A4.
4. Haz clic en el botón de imprimir.
5. Elige "Guardar como PDF" en el diálogo de impresión del navegador.

El flujo de exportación usa el navegador de forma intencionada. Mantiene el proyecto simple, evita generación de documentos en servidor y permite revisar el resultado antes de guardarlo.

## Filosofía

ProfileStack parte de una idea editorial sencilla:

> Un CV debe estar escrito para una persona, sin dejar de estar lo bastante estructurado para pasar filtros automatizados.

El objetivo no es llenar un documento de palabras clave. El objetivo es que cada versión del CV responda rápido a una pregunta clara:

- ¿A qué tipo de puesto apunta esta persona?
- ¿Qué capacidades deberían recordarse después de leerlo?
- ¿Qué evidencias hacen creíble este perfil?

La misma trayectoria profesional puede sostener historias distintas, siempre que cada versión siga siendo honesta, enfocada y defendible en una entrevista.

## Roadmap

- [x] Arquitectura de múltiples perfiles
- [x] Carga automática de perfiles
- [x] Exportación a PDF desde el navegador
- [ ] Layouts personalizados
- [ ] Personalización de temas
- [ ] Plantillas de perfiles
- [ ] Validación con JSON schema
- [ ] Importación desde LinkedIn
- [ ] Presets de exportación

## Contribuir

Las contribuciones son bienvenidas.

Buenas primeras contribuciones:

- Mejorar la documentación.
- Añadir ejemplos de perfiles.
- Refinar el esquema de perfil.
- Mejorar los estilos de impresión.
- Corregir problemas de accesibilidad.
- Proponer mejoras de layout o tema.

Antes de abrir una pull request grande, abre un issue o una discusión explicando el cambio. ProfileStack debe mantenerse enfocado: gestión estructurada de perfiles, variantes claras de CV y exportación práctica.

## Créditos

ProfileStack es un fork de [ATSResume](https://github.com/sauravhathi/atsresume), creado originalmente por [Saurav Hathi](https://github.com/sauravhathi).

Este proyecto mantiene la base del generador de CVs original y la evoluciona hacia un sistema para gestionar múltiples perfiles de CV orientados a distintos roles a partir de datos estructurados.

## Licencia

MIT. Ver [LICENSE.md](./LICENSE.md).
