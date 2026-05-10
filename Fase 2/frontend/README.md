# ChatSalud — Frontend

Interfaz web del chatbot ChatSalud

---

## Estructura

```
src/
├── api/
│   └── chatService.js       # Capa de comunicación con el backend
├── components/
│   ├── ChatMessage.jsx      # Burbuja de mensaje (usuario / bot)
│   ├── TypingIndicator.jsx  # Animación de escritura mientras el bot responde
│   └── SuggestedQuestions.jsx # Preguntas rápidas sugeridas al inicio
└── App.jsx                  # Componente principal con toda la lógica del chat
```

---

## Instalación y ejecución

```bash
# 1. Ir a la carpeta del frontend
cd frontend

# 2. Instalar dependencias
npm install

# 3. Levantar servidor de desarrollo
npm run dev
```

La app queda disponible en `http://localhost:5173`.

---

## Configuración del backend

El frontend se comunica con un backend externo vía REST. Para configurarlo:

Editar `.env` y ajustar la URL:

```env
VITE_API_URL=http://localhost:8000
```

> Si no hay backend activo, el chat muestra un aviso de desconexión en lugar de crashear.

### Contrato de la API esperada

```
POST /chat
Content-Type: application/json

Body:     { "message": "string" }
Response: { "response": "string", "source": "string | null" }
```

---

## Lo que falta: backend + LLM

### 1. Elegir e instalar el LLM local

**Opción A — Ollama**
```bash
# Descargar desde https://ollama.com y luego:
ollama pull llama3.2
# o:
ollama pull deepseek-r1
```

**Opción B — PyTorch + HuggingFace Transformers**:
```bash
pip install torch transformers accelerate
```
```python
from transformers import pipeline
pipe = pipeline("text-generation", model="meta-llama/Llama-3.2-1B-Instruct")
```

### 2. Crear el backend con FastAPI
```bash
pip install fastapi uvicorn httpx
```

Exponer el endpoint `POST /chat` que:
1. Reciba la pregunta del usuario
2. Cargue la base de conocimiento (`../knowledge_base/conocimiento.json`)
3. Construya un system prompt con el conocimiento inyectado
4. Genere la respuesta usando el LLM elegido:
   - **Ollama**: llamar a `http://localhost:11434/api/generate`
   - **PyTorch**: invocar el `pipeline` directamente en Python
5. Devuelva `{ "response": "...", "source": "..." }`

### 3. Habilitar CORS
El backend debe permitir peticiones desde `http://localhost:5173`:
```python
from fastapi.middleware.cors import CORSMiddleware
app.add_middleware(CORSMiddleware, allow_origins=["http://localhost:5173"], ...)
```
