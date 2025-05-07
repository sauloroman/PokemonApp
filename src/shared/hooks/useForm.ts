import { useEffect, useMemo, useState } from "react"

type ValidationResult<T> = {
  [K in keyof T as `${string & K}Valid`]: string | null 
}

export type FormValidations<T> = {
  [K in keyof T]?: [(value: T[K]) => boolean, string]
}

export const useForm = <T extends Record<string, any>>( 
  initialForm: T, 
  formValidations: FormValidations<T> 
) => {

  const [formState, setFormState] = useState<T>(initialForm)
  const [formValidation, setFormValidation] = useState<ValidationResult<T>>({} as ValidationResult<T>)

  useEffect(() => {
    createValidators()
  }, [formState])

  const isFormValid = useMemo(() => {
    return Object.values( formValidation ).every( value => value === null )
  }, [ formValidation ])

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {

    const { name, value } = e.target

    setFormState(prev => ({
      ...prev,
      [name]: value
    }))

  }

  const onResetForm = () => setFormState( initialForm )

  const createValidators = () => {
    const formCheckedValues = {} as ValidationResult<T>

    for( const key in formValidations ) {
      const [fn, errorMessage] = formValidations[key]!
      const value = formState[key]
      const result = fn( value ) ? null : errorMessage;

      (formCheckedValues as any)[`${key}Valid`] = result
    }

    setFormValidation( formCheckedValues)
  }

  return {
    formState,
    isFormValid,
    ...formState,
    ...formValidation,

    onInputChange,
    onResetForm,

  }

}