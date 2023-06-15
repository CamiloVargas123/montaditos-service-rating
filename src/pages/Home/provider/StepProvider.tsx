/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useState } from 'react'

type Step = {
  currentStep: number,
  back: () => void
  next: () => void
}
const initialValue: Step = {
  currentStep: 0,
  back: () => { },
  next: () => { }
}

export const StepContext = createContext(initialValue)

interface Props {
  children: JSX.Element
}

export function StepProvider({ children }: Props) {
  const [currentStep, setCurrentStep] = useState(0)
  function next() {
    setCurrentStep(i => i + 1)
  }

  function back() {
    setCurrentStep(i => {
      if (i <= 0) return i
      return i - 1
    })
  }

  const value: Step = {
    currentStep,
    back,
    next
  }
  return <StepContext.Provider value={value}>{children}</StepContext.Provider>
}