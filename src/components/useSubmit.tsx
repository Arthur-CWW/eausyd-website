import { FormEventHandler } from "react";
import { z } from "zod";

export function useSubmit(
  values: string
): FormEventHandler<HTMLFormElement> | undefined {
  return (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log(values);
    if (z.string().email(values)) {
    }
  };
}
