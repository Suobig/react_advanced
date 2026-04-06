import type { FormValues } from "./types"

export function createInitialValues(values?: FormValues): FormValues {
  return {
    userName: values?.userName ?? "",
    email: values?.email ?? "",
    password: values?.password ?? "",
    confirmPassword: values?.confirmPassword ?? "",
  }
}
