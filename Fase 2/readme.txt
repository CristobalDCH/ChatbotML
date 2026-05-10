# ChatSalud – Chatbot de Salud y Hábitos Saludables

## Descripción del proyecto

ChatSalud es un chatbot desarrollado como parte del proyecto de la asignatura Aprendizaje de Máquina. El sistema permite responder preguntas relacionadas con:

* Actividad física
* Hábitos saludables
* Sueño
* Nutrición
* Bienestar general

El proyecto utiliza un modelo de lenguaje ejecutado localmente mediante Ollama, junto con un frontend desarrollado en React y un backend implementado con Flask.

El objetivo principal es demostrar la integración completa entre:

* Frontend web
* Backend API
* Modelo LLM local
* Comunicación HTTP
* Procesamiento de lenguaje natural

---

# Arquitectura del sistema

El flujo general del sistema es el siguiente:

```text
Usuario
   ↓
Frontend React
   ↓
Fetch API
   ↓
Backend Flask
   ↓
Ollama
   ↓
Modelo Phi3
   ↓
Respuesta del chatbot
```

---

# Tecnologías utilizadas

## Frontend

* React
* Vite
* Tailwind CSS
* JavaScript
* HTML
* CSS

## Backend

* Python
* Flask
* Flask-CORS
* Requests

## Inteligencia Artificial

* Ollama
* Modelo Phi3

---

# Requisitos previos

Antes de ejecutar el proyecto, es necesario instalar:

## 1. Python

Versión recomendada:

```text
Python 3.10 o superior
```

Descargar desde:

[https://www.python.org/downloads/](https://www.python.org/downloads/)

Durante la instalación:

✅ Marcar la opción:

```text
Add Python to PATH
```

---

## 2. Node.js

Versión recomendada:

```text
Node.js 18 o superior
```

Descargar desde:

[https://nodejs.org/](https://nodejs.org/)

Verificar instalación:

```bash
node -v
npm -v
```

---

## 3. Visual Studio Code

Descargar desde:

[https://code.visualstudio.com/](https://code.visualstudio.com/)

Extensiones recomendadas:

* Python
* ES7 React Snippets
* Tailwind CSS IntelliSense

---

## 4. Ollama

Descargar desde:

[https://ollama.com/download](https://ollama.com/download)

Verificar instalación:

```bash
ollama
```

---

# Instalación del modelo Phi3

Abrir terminal y ejecutar:

```bash
ollama pull phi3
```

Esto descargará el modelo de lenguaje utilizado por el chatbot.

---

# Estructura del proyecto

```text
FASE 2/
│
├── backend/
│   ├── main.py
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   ├── package.json
│   ├── vite.config.js
│   └── .env
│
├── conocimiento.json
├── knowledge_base/
└── README.md
```

---

# Instalación del Backend

## 1. Entrar a la carpeta del proyecto

```bash
cd "Fase 2"
```

---

## 2. Crear entorno virtual

### Windows

```bash
python -m venv .venv
```

---

## 3. Activar entorno virtual

### PowerShell

```powershell
(Set-ExecutionPolicy -Scope Process -ExecutionPolicy RemoteSigned)
```

Luego:

```powershell
.\.venv\Scripts\Activate.ps1
```

Si funciona correctamente aparecerá:

```text
(.venv)
```

al inicio de la terminal.

---

## 4. Instalar dependencias

Entrar a backend:

```bash
cd backend
```

Instalar librerías:

```bash
pip install flask flask-cors requests
```

Opcionalmente:

```bash
pip freeze > requirements.txt
```

---

# Código principal del backend

Archivo:

```text
backend/main.py
```

El backend:

* recibe preguntas del frontend
* envía prompts al modelo Phi3
* recibe respuestas del LLM
* devuelve respuestas al frontend

---

# Ejecución del Backend

Dentro de:

```text
backend/
```

Ejecutar:

```bash
python main.py
```

Si todo funciona correctamente aparecerá:

```text
Running on http://127.0.0.1:5000
```

---

# Verificación de Ollama

Verificar que Ollama esté activo:

Abrir navegador:

```text
http://localhost:11434
```

Debe aparecer:

```text
Ollama is running
```

---

# Instalación del Frontend

Abrir nueva terminal.

Entrar a frontend:

```bash
cd frontend
```

---

## Instalar dependencias

```bash
npm install
```

---

## Configurar archivo .env

Crear archivo:

```text
frontend/.env
```

Contenido:

```env
VITE_API_URL=http://127.0.0.1:5000
```

---

# Ejecutar Frontend

Dentro de frontend:

```bash
npm run dev
```

Aparecerá algo similar a:

```text
Local: http://localhost:5173/
```

Abrir esa URL en navegador.

---

# Funcionamiento del chatbot

1. El usuario escribe una pregunta.
2. React envía la solicitud al backend.
3. Flask recibe la pregunta.
4. Flask genera un prompt especializado.
5. Ollama ejecuta el modelo Phi3.
6. El modelo genera una respuesta.
7. Flask devuelve la respuesta al frontend.
8. React muestra el mensaje en pantalla.

---

# Características del sistema

* Chatbot ejecutado completamente de forma local
* Integración frontend-backend
* Uso de modelo LLM real
* Comunicación mediante API REST
* Interfaz moderna estilo chat
* Especialización en salud y bienestar
* Arquitectura modular

---

# Ejemplos de preguntas

* ¿Cuántos minutos debo caminar al día?
* ¿Qué hábitos mejoran el sueño?
* ¿Qué ejercicios ayudan al estrés?
* ¿Cuánta agua debo beber diariamente?
* ¿Qué actividad física se recomienda para adultos mayores?

---

# Posibles mejoras futuras

* Integrar memoria conversacional
* Implementar streaming de respuestas
* Agregar autenticación de usuarios
* Conectar base de conocimiento real
* Implementar RAG
* Agregar historial de conversaciones
* Mejorar velocidad de inferencia
* Despliegue en servidor web

---

# Limitaciones del proyecto

* El modelo puede generar respuestas imprecisas.
* No reemplaza a profesionales de la salud.
* El tiempo de respuesta depende del hardware.
* El modelo puede interpretar incorrectamente algunas preguntas.
* El sistema requiere recursos computacionales para ejecutar el LLM localmente.

---

# Solución de errores comunes

## Error: backend no conecta

Verificar:

* Flask ejecutándose en puerto 5000
* Archivo .env configurado correctamente
* Ollama activo

---

## Error: Ollama no responde

Verificar:

```bash
ollama list
```

Debe aparecer:

```text
phi3
```

Si no aparece:

```bash
ollama pull phi3
```

---

## Error: página en blanco

Verificar errores en:

```text
F12 → Console
```

Generalmente corresponde a errores de sintaxis en React.

---

# Integrantes

* [Agregar nombres integrantes]

---

# Asignatura

Aprendizaje de Máquina

Universidad Andrés Bello

---

# Licencia

Proyecto desarrollado con fines académicos.
