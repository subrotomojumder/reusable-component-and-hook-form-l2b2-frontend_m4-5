import { zodResolver } from '@hookform/resolvers/zod';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import z from 'zod'
import Container from './components/ui/Container';
import { Form, FormSection, FormSubmit, Input } from './components/ReusableForm';


function App() {
  const TestSchema = z.object({
    name: z.string(),
    email: z.string().email(),
  });
  type TTest = z.infer<typeof TestSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TTest>({
    resolver: zodResolver(TestSchema),
  });
  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <Container>
      {/* <NormalForm /> */}
      <Form onSubmit={handleSubmit(onSubmit) as SubmitHandler<FieldValues>}>
        <FormSection>
          <div className="w-full max-w-md">
            <label className="block" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-xs text-red-500">
                {errors.name.message}
              </span>
            )}
          </div>
          <Input
            label={"Email"}
            type={"email"}
            register={register("email", { required: true })}
            errors={errors}
          />
        </FormSection>
        <FormSubmit />
      </Form>
    </Container>
  );
}

export default App;
