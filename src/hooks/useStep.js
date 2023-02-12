import { useState } from 'react';

const FIRST_STEP = 0;

function useStep({ steps, initialStep = FIRST_STEP }) {
  const [completed, setCompleted] = useState([]);
  const [index, setIndex] = useState(initialStep);
  const step = steps[index];
  const inRange = (index) => {
    if (typeof index === 'number') {
      if (index < FIRST_STEP) return FIRST_STEP;
      if (index >= steps.length) return steps.length - 1;
      return index;
    }

    return steps.findIndex((step) => step.id === index) || FIRST_STEP;
  };

  const go = (nextStep) => setIndex(inRange(nextStep));
  const next = () => go(index + 1);
  const prev = () => go(index - 1);

  const complete = (completeStep = index) => {
    const completeStepIndex = inRange(completeStep);
    const id = steps[completeStepIndex].id;

    setCompleted([...new Set([...completed, id])]);
  };

  const uncomplete = (uncompleteStep = index) => {
    const uncompleteStepIndex = inRange(uncompleteStep);
    const stepId = steps[uncompleteStepIndex].id;

    setCompleted(completed.filter((id) => id !== stepId));
  };

  const reset = (resetStep = initialStep) => {
    setIndex(resetStep);
    setCompleted([]);
  };

  const isLastStep = index === steps.length - 1;

  return {
    complete,
    completed,
    index,
    navigation: { next, prev, go },
    step,
    uncomplete,
    reset,
    isLastStep,
  };
}

export default useStep;
