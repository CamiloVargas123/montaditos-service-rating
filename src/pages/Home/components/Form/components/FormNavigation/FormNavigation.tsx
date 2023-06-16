import { Button, Stack } from '@mui/material'
import { useContext } from 'react'
import { StepContext } from '../../../../provider'

interface Props {
  disabledPrevious?: boolean
  isLastStep?: boolean
}
export default function FormNavigation({ disabledPrevious, isLastStep }: Props) {
  const { next, back } = useContext(StepContext)

  function handleClick() {
    next()
  }

  return (
    <Stack direction={"row"} justifyContent={disabledPrevious ? "flex-end" : "space-between"} width={"100%"}>
      {
        !disabledPrevious && <Button type='button' variant='outlined' onClick={back}>Atras</Button>
      }
      <Button type={isLastStep ? 'submit' : 'button'} variant='contained' onClick={handleClick}>{isLastStep ? "Finalizar" : "Siguiente"}</Button>
    </Stack>
  )
}
