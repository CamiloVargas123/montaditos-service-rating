import { TimerOutlined } from '@mui/icons-material';
import { Button, Stack, Typography, useTheme } from '@mui/material';
import { useContext } from 'react';
import { UseFormTrigger } from 'react-hook-form';
import { StepContext } from '../../../../provider';
import { ValuesForm } from '../../Form';

interface Props {
  children: JSX.Element
  trigger: UseFormTrigger<ValuesForm>
}
export default function Step1({ children, trigger }: Props) {
  const theme = useTheme();
  const { next } = useContext(StepContext)

  function handleClick() {
    trigger("invoice").then(e => {
      if (e) next()
    })
  }

  return (
    <>
      <Stack alignItems={"center"} height={"100%"} justifyContent={"center"}>
        <TimerOutlined fontSize='inherit' style={{ fontSize: 100 }} />
        <Typography noWrap fontSize={"40px"} fontWeight={900}>Solo tardaras</Typography>
        <Typography noWrap fontSize={"40px"} fontWeight={900}>1 minuto de</Typography>
        <Typography
          noWrap
          fontSize={"40px"}
          fontWeight={900}
          bgcolor={theme.palette.primary.main}
          padding={'0 20px'}
          borderRadius={4}
          color={"white"}
        >
          tu tiempo.
        </Typography>
      </Stack>
      <Stack spacing={2} height={"100%"} justifyContent={"center"}>
        <Typography fontSize={"25px"} fontWeight={700} textAlign={"center"}>A continuación te realizaremos 3 preguntas sobre tu experiencia en 100 montaditos.</Typography>
        <Stack direction={"row"} spacing={2} >
          {children}
          <Button variant='contained' fullWidth onClick={handleClick}>¡Vamos!</Button>
        </Stack>
      </Stack>
    </>
  )
}
