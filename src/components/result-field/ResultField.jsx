// Gotta separate the text & bg colors since we cannot use string interpolation for tailwind class names :(
const TEXT_COLORS = {
  reaction: 'text-light-red',
  memory: 'text-orangey-yellow',
  verbal: 'text-green-teal',
  visual: 'text-light-royal-blue',
};

const BACKGROUND_COLORS = {
  reaction: 'bg-light-red',
  memory: 'bg-orangey-yellow',
  verbal: 'bg-green-teal',
  visual: 'bg-light-royal-blue',
};

export function ResultField({ icon, title, score }) {
  const lowercaseTitle = title.toLowerCase();

  return (
    <div
      className={`flex justify-between p-2 rounded-lg bg-opacity-5 ${BACKGROUND_COLORS[lowercaseTitle]}`}
    >
      <div className="flex gap-2">
        <img width="24" height="24" src={icon} />
        <p className={TEXT_COLORS[lowercaseTitle]}>{title}</p>
      </div>
      <p>
        <span className="text-dark-gray-blue font-bold">{score}</span>{' '}
        <span className="text-dark-gray-blue opacity-40">/ 100</span>
      </p>
    </div>
  );
}
