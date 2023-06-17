import { Stack, Typography, useTheme } from '@mui/material'
import { useContext, useEffect } from 'react'
import { StepContext } from '../../../../provider'

interface Props {
  reset: () => void
}
export default function Finish({ reset }: Props) {
  const theme = useTheme()
  const { backToFirtStep } = useContext(StepContext)

  useEffect(() => {
    const timer = setTimeout(() => {
      reset()
      backToFirtStep()
    }, 6000);
    return () => clearTimeout(timer)
  }, [backToFirtStep, reset])

  return (
    <Stack width={"600px"} gridColumn={'1 / span 2'} margin={"auto"}>
      <Typography textTransform={"uppercase"} fontSize={"4rem"} fontWeight={700} textAlign={"center"}>muchas gracias</Typography>
      <Typography
        textTransform={"uppercase"}
        padding={2}
        bgcolor={theme.palette.primary.main}
        color={"white"}
        fontWeight={700}
        fontSize={"3rem"}
        textAlign={"center"}
        borderRadius={"30px"}
      >
        Tu opinión es muy importante para nosotros
      </Typography>
    </Stack>
  )
}
