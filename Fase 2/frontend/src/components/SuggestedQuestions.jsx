const SUGGESTED = [
  '¿Cuántos minutos de ejercicio necesita un adulto por semana?',
  '¿Pueden hacer ejercicio las mujeres embarazadas?',
  '¿Qué beneficios tiene la actividad física para mayores de 65 años?',
  '¿Cuánta agua debo beber al día?',
  '¿Qué hábitos debo evitar para tener buena salud?',
];

export default function SuggestedQuestions({ onSelect }) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {SUGGESTED.map((q) => (
        <button
          key={q}
          onClick={() => onSelect(q)}
          className="text-xs px-3 py-1.5 rounded-full border border-primary-300 text-primary-700
                     bg-primary-50 hover:bg-primary-100 transition-colors duration-150"
        >
          {q}
        </button>
      ))}
    </div>
  );
}
