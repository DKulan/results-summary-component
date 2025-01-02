import { ResultField } from '../result-field';
import { Button } from '../button';
import resultData from "/data.json"

function calculateScore(scores) {
  return Math.floor(scores.reduce((previous, current) => {
    return previous += current
  }) / scores.length)
}

export function ResultsSummary() {
  const score = calculateScore(resultData.map(data => data.score))

  // TODO: dynamic subtitle and info for various scores (i.e 50% - 'You scored higher than 15%')

  return (
    <div className="xl:flex xl:justify-center xl:items-center xl:h-svh">
      <div className="xl:flex xl:shadow-lg xl:rounded-2xl">
        <div className="bg-gradient-to-b to-light-royal-blue from-light-slate-blue xl:rounded-2xl rounded-b-lg flex justify-center items-center flex-col pb-8 pt-4 px-8 text-center xl:max-w-72">
          <p className="text-light-lavender pb-4">Your Result</p>
          <div className="bg-gradient-to-b to-persian-blue from-violet-blue rounded-full w-36 h-36 flex justify-center items-center flex-col">
            <p className="text-6xl font-bold">{score}</p>
            <p className="text-light-lavender">of 100</p>
          </div>
          <p className="pt-4 font-bold text-xl">Great</p>
          <p className="text-light-lavender pt-2">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
        <div className="p-6 xl:w-72">
          <p className="text-dark-gray-blue font-bold">Summary</p>
          <div className="mt-6 gap-4 flex flex-col">
            {resultData.map(data => <ResultField key={data.category} title={data.category} score={data.score} />)}
          </div>
          <Button
            className="mt-6"
            label="Continue"
            onSubmit={() => console.log('Button Clicked!')}
          />
        </div>
      </div>
    </div>
  );
}
