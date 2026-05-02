# MAR5 — Spatial Intelligence
**Landing page oficial · mar5.ar**

---

## Estructura del repositorio

```
mar5-site/
├── index.html               ← Landing page completa (HTML/CSS/JS)
├── google-apps-script.js    ← Script para conectar formularios a Google Sheets
└── README.md                ← Este archivo
```

---

## PASO 1 — Conectar Google Sheets

### 1.1 Crear el Google Sheet
1. Abrí [Google Sheets](https://sheets.google.com) con tu cuenta de empresa
2. Creá un nuevo archivo → nombralo **"MAR5 Leads"**

### 1.2 Instalar el Apps Script
1. En el Sheet: **Extensiones → Apps Script**
2. Borrá todo el código existente
3. Copiá y pegá todo el contenido de `google-apps-script.js`
4. Guardá (Ctrl+S)

### 1.3 Publicar el Script
1. Hacé click en **"Implementar"** → **"Nueva implementación"**
2. Tipo: **Aplicación web**
3. Ejecutar como: **Yo** (tu email de empresa)
4. Quién tiene acceso: **Cualquier usuario**
5. Hacé click en **"Implementar"**
6. Autorizá los permisos que pide
7. **Copiá la URL** que aparece (empieza con `https://script.google.com/macros/s/...`)

### 1.4 Conectar al sitio
1. Abrí `index.html` con un editor de texto (VSCode, Notepad++, etc.)
2. Buscá esta línea:
   ```
   const SCRIPT_URL = 'REEMPLAZAR_CON_TU_SCRIPT_URL';
   ```
3. Reemplazá `REEMPLAZAR_CON_TU_SCRIPT_URL` con la URL que copiaste
4. Guardá el archivo

---

## PASO 2 — Subir a GitHub

```bash
# Clonar el repo (ya creado en github.com/MaNiSa/mar5-site)
git clone https://github.com/MaNiSa/mar5-site.git
cd mar5-site

# Copiar los archivos
cp /ruta/a/index.html .
cp /ruta/a/google-apps-script.js .
cp /ruta/a/README.md .

# Subir
git add .
git commit -m "feat: MAR5 landing page v1.0"
git push origin main
```

---

## PASO 3 — Subir a Hostinger (mar5.ar)

### 3.1 Acceder al panel
1. Entrá a [hpanel.hostinger.com](https://hpanel.hostinger.com)
2. Seleccioná el dominio **mar5.ar**
3. Andá a **Administrador de archivos** → carpeta `public_html`

### 3.2 Subir el archivo
1. **Borrá** cualquier `index.html` que exista (si hay una página de bienvenida)
2. Hacé click en **"Subir archivos"**
3. Subí tu `index.html`
4. Listo — el sitio está publicado en **mar5.ar**

### 3.3 Verificar SSL
1. En el panel de Hostinger, andá a **SSL**
2. Asegurate de que el certificado SSL esté activo (HTTPS)
3. Si no está activo, hacé click en **"Instalar"** — es gratuito

---

## Flujo de datos

```
Usuario llena el form en mar5.ar
           ↓
Google Apps Script
           ↓
Google Sheets "MAR5 Leads"
Columnas: Fecha · Nombre · Email · WhatsApp · Empresa · Origen · Idioma
```

---

## Actualizaciones de diseño

Cuando modifiques el diseño en Figma:
1. Compartí el link del node actualizado
2. Se regenera el `index.html`
3. Subís el nuevo archivo a Hostinger (reemplazando el anterior)

---

**MAR5 — Spatial Intelligence ®**
