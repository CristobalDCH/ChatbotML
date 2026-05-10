from flask import Flask, request, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)

SYSTEM_PROMPT = """
Eres ChatSalud, un asistente especializado en:

- actividad física
- hábitos saludables
- nutrición
- sueño
- bienestar general

Tus respuestas deben ser:
- claras
- breves
- amigables
- fáciles de entender
- basadas en recomendaciones de salud

IMPORTANTE:
- Solo responde temas relacionados con salud y bienestar.
- Si la pregunta no está relacionada con salud, responde amablemente que solo puedes ayudar en temas de salud.
- No inventes diagnósticos médicos.
- No reemplazas a un profesional de la salud.
"""

@app.route('/chat', methods=['POST'])
def chat():

    try:

        user_message = request.json['message']

        full_prompt = f"""
{SYSTEM_PROMPT}

Pregunta del usuario:
{user_message}

Respuesta:
"""

        response = requests.post(
            'http://localhost:11434/api/generate',
            json={
                'model': 'phi3',
                'prompt': full_prompt,
                'stream': False
            }
        )

        bot_response = response.json()['response']

        return jsonify({
            'response': bot_response
        })

    except Exception as e:

        print("ERROR:", str(e))

        return jsonify({
            'response': 'Ocurrió un error al procesar la solicitud.'
        }), 500

if __name__ == '__main__':
    app.run(debug=True)