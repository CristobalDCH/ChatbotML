# ChatSalud – Chatbot de Salud y Hábitos Saludables

## Descripción del proyecto

ChatSalud es un chatbot desarrollado como parte del proyecto de la asignatura Aprendizaje de Máquina de la Universidad Andrés Bello. El sistema fue diseñado con el objetivo de responder preguntas relacionadas con salud, actividad física y hábitos saludables mediante el uso de un modelo de lenguaje ejecutado localmente.

El chatbot permite responder consultas relacionadas con:

- Actividad física
- Hábitos saludables
- Sueño
- Hidratación
- Bienestar general
- Salud física y mental

El proyecto utiliza un modelo de lenguaje local ejecutado mediante Ollama, junto con un frontend desarrollado en React y un backend implementado utilizando Flask.

El objetivo principal es demostrar la integración completa entre:

- Frontend web
- Backend API
- Modelo LLM local
- Comunicación HTTP
- Prompt Engineering
- Procesamiento de lenguaje natural

---

# Objetivos del proyecto

El objetivo principal de ChatSalud es desarrollar un chatbot especializado en actividad física y hábitos saludables utilizando un modelo de lenguaje local (LLM) ejecutado mediante Ollama.

El proyecto busca integrar tecnologías de frontend, backend e inteligencia artificial para construir un sistema funcional capaz de responder preguntas relacionadas con salud y bienestar general.

Además, el sistema fue desarrollado con fines académicos para aplicar conceptos de:

- Machine Learning
- Prompt Engineering
- Desarrollo Web
- APIs REST
- Integración de modelos LLM locales
- Procesamiento de lenguaje natural

---

# Arquitectura del sistema

El flujo general del sistema funciona mediante una arquitectura cliente-servidor dividida en frontend, backend y modelo LLM local.

```text
Usuario 
   ↓
Frontend (React)   
Interfaz del chatbot
   ↓
Backend (Flask API)
Procesamiento HTTP
   ↓
Ollama               
Motor de inferencia  
   ↓
Modelo LLM (Phi3)    
Generación respuesta
   ↓
Respuesta al usuario
```

El frontend desarrollado en React permite la interacción con el usuario mediante una interfaz web estilo chat. Posteriormente, el backend implementado con Flask recibe las solicitudes HTTP y se comunica con Ollama, encargado de ejecutar el modelo Phi3 localmente para generar las respuestas.

---

# Tecnologías utilizadas

## Frontend

- React
- Vite
- Tailwind CSS
- JavaScript
- HTML
- CSS

## Backend

- Python
- Flask
- Flask-CORS
- Requests

## Inteligencia Artificial

- Ollama
- Modelo Phi3
- Prompt Engineering

---

# Requisitos previos

Antes de ejecutar el proyecto es necesario instalar los siguientes programas:

- Python 3.10 o superior
- Node.js 18 o superior
- Ollama
- Visual Studio Code

---

# Instalación de Python

Descargar desde:

https://www.python.org/downloads/

Durante la instalación se recomienda marcar la opción:

```text
Add Python to PATH
```

Verificar instalación:

```bash
python --version
```

---

# Instalación de Node.js

Descargar desde:

https://nodejs.org/

Verificar instalación:

```bash
node -v
npm -v
```

---

# Instalación de Visual Studio Code

Descargar desde:

https://code.visualstudio.com/

Extensiones recomendadas:

- Python
- ES7 React Snippets
- Tailwind CSS IntelliSense

---

# Instalación de Ollama

Descargar desde:

https://ollama.com/download

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

Verificar instalación:

```bash
ollama list
```

Debe aparecer:

```text
phi3
```

---

# Instalación del Backend

## 1. Entrar a la carpeta backend

```bash
cd backend
```

---

## 2. Crear entorno virtual

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

- recibe preguntas del frontend
- genera prompts especializados
- envía solicitudes al modelo Phi3
- recibe respuestas del modelo LLM
- devuelve respuestas al frontend

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

Verificar que Ollama esté activo.

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

Abrir una nueva terminal.

Entrar a frontend:

```bash
cd frontend
```

---

# Instalar dependencias

```bash
npm install
```

Esto instalará automáticamente:

- React
- Vite
- Tailwind CSS
- Dependencias JavaScript necesarias

---

# Instalación de Tailwind CSS

Instalar Tailwind:

```bash
npm install -D tailwindcss postcss autoprefixer
```

Inicializar Tailwind:

```bash
npx tailwindcss init -p
```

---

# Configuración del archivo .env

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

Abrir esa URL en el navegador.

---

# Funcionamiento del chatbot

1. El usuario escribe una pregunta en la interfaz web.
2. React envía la solicitud HTTP al backend.
3. Flask recibe la pregunta y genera un prompt especializado.
4. Ollama ejecuta el modelo Phi3 localmente.
5. El modelo genera una respuesta.
6. Flask devuelve la respuesta al frontend.
7. React muestra el resultado al usuario.

---

# Prompt Engineering

El chatbot utiliza un prompt especializado que restringe el dominio del modelo únicamente a temas relacionados con:

- actividad física
- hábitos saludables
- hidratación
- sueño
- bienestar

Además, se configuraron instrucciones para:

- evitar respuestas fuera del dominio
- mantener lenguaje claro y amigable
- limitar recomendaciones médicas
- mejorar coherencia de respuestas
- mantener respuestas relacionadas con salud

---

# Uso de Ollama

Ollama fue utilizado para ejecutar el modelo Phi3 de forma completamente local, evitando el uso de APIs externas pagadas.

Esto permitió:

- ejecutar el sistema sin conexión externa
- reducir costos
- proteger privacidad
- controlar completamente el modelo LLM

---

# Características del sistema

- Chatbot ejecutado completamente de forma local
- Integración frontend-backend
- Uso de modelo LLM real
- Comunicación mediante API REST
- Interfaz moderna estilo chat
- Arquitectura modular
- Especialización en salud y bienestar
- Uso de Prompt Engineering

---

# Capturas del sistema

## Interfaz principal del chatbot

Agregar aquí screenshots del sistema:

```text
/images/chat1.png
/images/chat2.png
```

---

# Ejemplos de preguntas

- ¿Cuántos minutos debo caminar al día?
- ¿Qué hábitos mejoran el sueño?
- ¿Qué ejercicios ayudan al estrés?
- ¿Cuánta agua debo beber diariamente?
- ¿Qué actividad física se recomienda para adultos mayores?
- ¿Las mujeres embarazadas pueden hacer ejercicio?

---

# Resultados obtenidos

Durante las pruebas realizadas, el chatbot logró responder correctamente la mayoría de las preguntas relacionadas con actividad física y hábitos saludables.

El tiempo promedio de respuesta utilizando el modelo Phi3 ejecutado localmente mediante Ollama fue de aproximadamente:

```text
10 a 15 segundos
```

Las respuestas generadas mantuvieron coherencia con el dominio definido mediante prompt engineering.

---

# Limitaciones del proyecto

- El modelo puede generar respuestas imprecisas.
- Algunas respuestas pueden resultar demasiado generales.
- El tiempo de respuesta depende del hardware utilizado.
- El modelo puede interpretar incorrectamente ciertas preguntas.
- Algunas respuestas pueden generarse de forma incompleta.
- El sistema no reemplaza profesionales de la salud.

---

# Posibles mejoras futuras

- Integrar memoria conversacional
- Implementar streaming de respuestas
- Agregar autenticación de usuarios
- Implementar RAG
- Agregar historial de conversaciones
- Mejorar velocidad de inferencia
- Integrar soporte por voz
- Conectar bases de conocimiento dinámicas

---

# Solución de errores comunes

## Error: backend no conecta

Verificar:

- Flask ejecutándose en puerto 5000
- Archivo `.env` configurado correctamente
- Ollama activo

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

## Error CORS

Si aparece error relacionado con:

```text
Access-Control-Allow-Origin
```

Agregar en Flask:

```python
from flask_cors import CORS
CORS(app)
```

---

# Requisitos mínimos recomendados

- 8 GB RAM mínimo
- Procesador Intel i5 / Ryzen 5 o superior
- Windows 10/11
- Python 3.10+
- Node.js 18+

---

# Detener ejecución

Para detener Flask:

```text
CTRL + C
```

---

# Autores

- Joaquín López M.
- Gabriel Psijas R.
- Aylin Herrera S.
- Cristobal Chandia C.

---

# Asignatura

Aprendizaje de Máquina – Universidad Andrés Bello

---