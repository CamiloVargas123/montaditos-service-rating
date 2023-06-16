import { Stack, TextField } from "@mui/material";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { StepContext } from "../../provider";
import { Step1, Step2, Step3 } from "./components/Steps";

export type ValuesForm = {
  invoice: number
  experienceRating?: string
  rating?: number
}

export default function Form() {
  const { register, handleSubmit, formState: { errors }, trigger, setValue, getValues } = useForm<ValuesForm>()
  const { currentStep } = useContext(StepContext)

  function onSubmit(values: ValuesForm) {
    console.log("🚀 ~ file: Form.tsx:14 ~ onSubmit ~ values:", values)
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
    <Step3 setValue={setValue} trigger={trigger} selectedValue={getValues("rating")} />
  ]

  return (
    <Stack
      component={"form"}
      margin={"20px 60px"}
      alignItems={"flex-end"}
      spacing={10}
      onSubmit={handleSubmit(onSubmit)}
    >
      {steps[currentStep]}
    </Stack>
  )
}
