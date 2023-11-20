import BaseInput from '@/components/BaseInput';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';


type FormValues = {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
};

const SignUpFormOne = () => {
  const {
    register,
    handleSubmit
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center">
      <BaseInput
        label="Email"
        id="email"
        placeholder="Enter email"
        type="email"
        {...register('email', {
          required: 'Email is required',      
        })}
      />

      <div className="flex w-full gap-x-4">
        <div className="w-1/2">
          <BaseInput
            label="First Name"
            id="firstName"
            placeholder="Enter first name"
            type="firstName"
            {...register('firstName', {
              required: 'First name is required',
            })}
          />
        </div>
        <div className="w-1/2">
          <BaseInput
            label="Last Name"
            id="lastName"
            placeholder="Enter last name"
            type="lastName"
            {...register('lastName', {
              required: 'Last name is required',
            })}
          />
        </div>
      </div>

      <BaseInput
        label="Password"
        id="password"
        placeholder="Enter password"
        type="password"
        {...register('password', {
          required: 'Password is required',
        })}
      />

      <BaseInput
        label="Confirm Password"
        id="confirmPassword"
        placeholder="Confirm password"
        type="password"
        {...register('confirmPassword', {
          required: 'Please confirm your password',
        })}
      />

      <button
        type="submit"
        className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default SignUpFormOne;

