"use client";
import { FormProvider, useForm, SubmitHandler } from "react-hook-form";

type FormConfigType = {
  defaultValues?: Record<string, any>;
  resolver?: any;
};

type FormPropsType = {
  children?: React.ReactNode | React.ReactElement;
  submitHandler: SubmitHandler<any>;
} & FormConfigType;

const CMForm = ({
  children,
  submitHandler,
  defaultValues,
  resolver,
}: FormPropsType) => {
  const formConfig: FormConfigType = {};

  if (!!defaultValues) formConfig.defaultValues = defaultValues;
  if (!!resolver) formConfig.resolver = resolver;

  const methods = useForm<FormPropsType>(formConfig);

  const { handleSubmit, reset } = methods;
  const onSubmit = (data: any) => {
    submitHandler(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default CMForm;
