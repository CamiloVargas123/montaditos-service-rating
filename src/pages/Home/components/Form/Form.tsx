import { Box, Stack, TextField } from "@mui/material";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { StepContext } from "../../provider";
import { FormNavigation } from "./components/FormNavigation";
import { Finish, Step1, Step2, Step3, Step4 } from "./components/Steps";

export type ValuesForm = {
  invoice: number
  experienceRating?: string
  rating?: number
  recomendation?: boolean
}

export default function Form() {
  const { register, handleSubmit, formState: { errors }, trigger, setValue, getValues, reset } = useForm<ValuesForm>()
  const { currentStep, next } = useContext(StepContext)

  function onSubmit(values: ValuesForm) {
    console.log("🚀 ~ file: Form.tsx:19 ~ onSubmit ~ values:", values)
    next()
  }

  const steps = [
    <Step1 trigger={trigger}>
      <TextField
        fullWidth
        type="number"
        placeholder='No. ticket'
        {...register("invoice", {
          required: "El número de ticket es obligatorio",
          min: { value: 0, message: "Debe ser entero positivo" }
        })}
        error={Boolean(errors.invoice)}
      />
    </Step1>,
    <Step2 setValue={setValue} trigger={trigger} selectedValue={getValues("experienceRating")} />,
    <Step3 setValue={setValue} trigger={trigger} selectedValue={getValues("rating")} />,
    <Step4 setValue={setValue} selectedValue={getValues("recomendation")} />,
    <Finish reset={reset} />
  ]

  return (
    <Box
      display={"grid"}
      height={"100%"}
      columnGap={10}
      alignItems={"start"}
      gridTemplateColumns={".4fr .6fr"}
      component={"form"}
      padding={"30px 60px"}
      onSubmit={handleSubmit(onSubmit)}
    >
      {steps[currentStep]}
      {
        currentStep > 0 && currentStep < steps.length - 1 &&
        <>
          <Box />
          <Stack height={"100%"} justifyContent={"flex-end"}>
            <FormNavigation isLastStep={currentStep === steps.length - 1} />
          </Stack>
        </>
      }
    </Box>
  )
}
