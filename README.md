# Front End III - Clase 11: Primer Entregable

Este repositorio contiene mi entrega de la actividad de la Clase 11 de Front End III, en la que implementé un formulario interactivo en **React** con validación de datos. El formulario permite al usuario ingresar información y, al enviarla, verifica que cumpla con los requisitos establecidos. Si los datos son correctos, muestra un componente con la información ingresada; en caso contrario, muestra un mensaje de error.

## Descripción de la Actividad

Este formulario permite que cualquier persona ingrese datos, los cuales serán validados al hacer clic en el botón **Enviar**. Los requisitos son los siguientes:
- Si los datos cumplen con las validaciones, se muestra un componente **Card** con la información ingresada.
- Si alguna validación falla, aparece un mensaje de error indicando:
  
      Por favor chequea que la información sea correcta.

## Consignas y Requisitos

1. **Temática del formulario**: Elegí la temática de [tema elegido].
2. **Campos del formulario**:
    - El formulario contiene al menos **dos inputs de texto** y un **botón de tipo submit**.
3. **Validaciones**:
    - **Primer input**:
        - Debe tener una longitud mínima de 3 caracteres y no debe empezar con espacios en blanco.
    - **Segundo input**:
        - Debe contener al menos 6 caracteres.
    - Si alguna de las validaciones no se cumple, se muestra el mensaje de error mencionado anteriormente.
    - Si los datos son correctos, se renderiza el componente **Card** con la información ingresada.
4. **Estilos**:
    - El componente **Card** muestra la información con estilo personalizado, de acuerdo con la temática elegida.

## Instalación y Ejecución

1. Clona el repositorio:
   ```bash
   git clone https://github.com/ORCG1/Entregable-Frontend3
   cd primer-entregable-formulario
   npm install
   npm start
   ```


