// Use vite static asset handling instead of reading the path from the data file
import reactionIcon from "/assets/images/icon-reaction.svg"
import memoryIcon from "/assets/images/icon-memory.svg"
import verbalIcon from "/assets/images/icon-verbal.svg"
import visualIcon from "/assets/images/icon-visual.svg"

const CATEGORY = {
  reaction: {
    textColor: 'text-light-red',
    backgroundColor: 'bg-light-red',
    icon: reactionIcon
  },
  memory: {
    textColor: 'text-orangey-yellow',
    backgroundColor: 'bg-orangey-yellow',
    icon: memoryIcon
  },
  verbal: {
    textColor: 'text-green-teal',
    backgroundColor: 'bg-green-teal',
    icon: verbalIcon
  },
  visual: {
    textColor: 'text-light-royal-blue',
    backgroundColor: 'bg-light-royal-blue',
    icon: visualIcon
  }
}

export function ResultField({ title, score }) {
  const lowercaseTitle = title.toLowerCase();

  return (
    <div
      className={`flex justify-between p-2 rounded-lg bg-opacity-5 ${CATEGORY[lowercaseTitle].backgroundColor}`}
    >
      <div className="flex gap-2">
        <img width="24" height="24" src={CATEGORY[lowercaseTitle].icon} />
        <p className={CATEGORY[lowercaseTitle].textColor}>{title}</p>
      </div>
      <p>
        <span className="text-dark-gray-blue font-bold">{score}</span>{' '}
        <span className="text-dark-gray-blue opacity-40">/ 100</span>
      </p>
    </div>
  );
}
