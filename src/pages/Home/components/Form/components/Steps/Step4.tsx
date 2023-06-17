import { ThumbDownAlt, ThumbUpAlt } from '@mui/icons-material'
import { Box, Stack, Typography } from '@mui/material'
import { useState } from 'react'
import { UseFormSetValue } from 'react-hook-form'
import { ValuesForm } from '../../Form'
import { StyledIconButton } from './Step3'

interface Props {
  setValue: UseFormSetValue<ValuesForm>
  selectedValue?: boolean
}
export default function Step4({ setValue, selectedValue }: Props) {
  const [disabled, setDisabled] = useState(selectedValue)
  function handleClick(value: boolean) {
    setValue("recomendation", value)
    setDisabled(value)
  }

  return (
    <>
      <Box />
      <Stack spacing={2} alignItems={"center"}>
        <Typography fontSize={"25px"} fontWeight={700}>¿Recomendarías 100 montaditos?</Typography>
        <Stack direction={"row"} spacing={2} >
          <StyledIconButton onClick={() => handleClick(true)} disabled={disabled === true} aria-label='true'>
            <ThumbDownAlt fontSize='inherit' color='error' />
          </StyledIconButton>
          <StyledIconButton onClick={() => handleClick(false)} disabled={disabled === false} aria-label='false'>
            <ThumbUpAlt fontSize='inherit' color='success' />
          </StyledIconButton>
        </Stack>
      </Stack>
    </>
  )
}
