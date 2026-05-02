// ============================================================
// MAR5 — Google Apps Script para captura de leads
// ============================================================
// INSTRUCCIONES DE INSTALACIÓN:
//
// 1. Abrí Google Sheets → creá un nuevo archivo llamado "MAR5 Leads"
// 2. Andá a Extensiones → Apps Script
// 3. Borrá todo el código que hay y pegá este archivo completo
// 4. Hacé click en "Guardar" (ícono de diskette)
// 5. Hacé click en "Implementar" → "Nueva implementación"
// 6. Tipo: "Aplicación web"
// 7. Ejecutar como: "Yo (tu email)"
// 8. Quién tiene acceso: "Cualquier usuario"
// 9. Hacé click en "Implementar"
// 10. Copiá la URL que te da — esa es tu SCRIPT_URL
// 11. Pegá esa URL en el index.html donde dice REEMPLAZAR_CON_TU_SCRIPT_URL
// ============================================================

const SHEET_NAME = "Leads";

function doPost(e) {
  try {
    const sheet = getOrCreateSheet();
    const data = JSON.parse(e.postData.contents);

    const row = [
      new Date().toLocaleString("es-AR", { timeZone: "America/Argentina/Buenos_Aires" }),
      data.nombre    || "",
      data.email     || "",
      data.whatsapp  || "",
      data.empresa   || "",
      data.origen    || "",  // "Hero", "CTA", "Hub Modal"
      data.idioma    || "es"
    ];

    sheet.appendRow(row);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  // Para testear que el script está activo
  return ContentService
    .createTextOutput(JSON.stringify({ status: "MAR5 Leads Script activo ✓" }))
    .setMimeType(ContentService.MimeType.JSON);
}

function getOrCreateSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    // Headers
    sheet.appendRow([
      "Fecha y hora",
      "Nombre",
      "Email",
      "WhatsApp",
      "Empresa",
      "Origen",
      "Idioma"
    ]);
    // Formato headers
    const headerRange = sheet.getRange(1, 1, 1, 7);
    headerRange.setBackground("#0F102B");
    headerRange.setFontColor("#FFFFFF");
    headerRange.setFontWeight("bold");
    sheet.setFrozenRows(1);
    sheet.setColumnWidth(1, 180); // Fecha
    sheet.setColumnWidth(2, 150); // Nombre
    sheet.setColumnWidth(3, 220); // Email
    sheet.setColumnWidth(4, 140); // WhatsApp
    sheet.setColumnWidth(5, 180); // Empresa
    sheet.setColumnWidth(6, 100); // Origen
    sheet.setColumnWidth(7, 80);  // Idioma
  }

  return sheet;
}
