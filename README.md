# Dinámica del PIB

App web para evaluar proyecciones del PIB por país: arrastre estadístico y dinámica requerida (t/t) para el año en curso y el siguiente. En el iPhone muestra una versión simple, solo con el PIB; en el computador, el panel completo con la actividad mensual, tasas manuales y tablas.

**Dirección:** https://pablocarvallo.github.io/proyecciones/

## Instalar en el iPhone

1. Abre la dirección en Safari.
2. Toca **Compartir** y luego **Agregar a pantalla de inicio**.
3. Abre la app desde el ícono «PIB».

## Datos

La app lee el archivo **`datos.xlsx`** de la raíz de este repositorio. Para actualizar los datos en todos tus dispositivos, sube un nuevo `datos.xlsx` (reemplazando el anterior) desde GitHub en el navegador o en la app de GitHub.

Formato del Excel:

- Una hoja trimestral con el PIB y, si quieres, otra mensual con la actividad; ambas desestacionalizadas y en niveles (no tasas).
- Una columna de fechas y una columna por país, con el nombre del país en el encabezado. Los nombres deben ser iguales en las dos hojas.
- Fechas de Excel o texto como `2026T2`, `2026Q2`, `2026-08` o `ago-26`. También sirve el formato largo con columnas `país`, `fecha` y `valor`.

Un archivo cargado desde la propia app queda guardado solo en ese dispositivo. Las proyecciones y la selección de país también se guardan en cada dispositivo.

Este repositorio es público: cualquiera con la dirección puede ver `datos.xlsx`.

## Archivos

- `index.html`: la app completa (cálculo, gráficos y lectura del Excel).
- `manifest.webmanifest`, `sw.js`, `icons/`: instalación como app y uso sin conexión.
- `vendor/xlsx.full.min.js`: lector de Excel ([SheetJS](https://sheetjs.com), licencia Apache 2.0).
