import { Button, Stack, Typography } from '@mui/material';
import { useContext } from 'react';
import { UseFormSetValue, UseFormTrigger } from 'react-hook-form';
import { StepContext } from '../../../../provider';
import { ValuesForm } from '../../Form';

const valuesSelect = {
  bad: "Malo",
  regular: "Regular",
  good: "Bueno",
  veryGood: "Muy Bueno",
}

interface Props {
  setValue: UseFormSetValue<ValuesForm>
  trigger: UseFormTrigger<ValuesForm>
  selectedValue?: string
}

export default function Step2({ setValue, trigger, selectedValue }: Props) {
  const { next } = useContext(StepContext)

  function handleClick(value: string) {
    setValue("experienceRating", value)
    trigger("experienceRating").then(e => {
      if (e) next()
    })
  }

  return (
    <>
      <img
        src={`https://www.lavozdelsur.es/uploads/s1/94/52/86/montaditos.jpeg?w=400&fit=crop&auto=format`}
        alt={"Montaditos image"}
        loading="eager"
        style={{
          width: '100%',
          height: "255px",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <Stack spacing={2}>
        <Typography fontSize={"25px"} fontWeight={700} textAlign={"center"}>¿Que tal te pareció el servicio prestado por nuestros colaboradores?</Typography>
        <Stack direction={"row"} spacing={2} >
          {
            Object.entries(valuesSelect).map(([key, value]) => (
              <Button
                key={key}
                variant='contained'
                color={key === selectedValue ? 'secondary' : 'primary'}
                disabled={key === selectedValue}
                fullWidth
                onClick={() => handleClick(key)}
              >
                {value}
              </Button>
            ))
          }
        </Stack>
      </Stack>
    </>
  )
}

