import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import ErrorMessage from "./ErrorMessage";

function HookUseForm(props) {

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors }
  } = useForm();

  const onFormSubmit = (data) => {
    console.log(data);
    reset();
  }

  const password = useRef({});
  password.current = watch("password", "passwordConfirm");

  const getErrorBorder = (errors) => errors && { borderColor: "red" }

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <input
        placeholder="Email address"
        type="email"
        style={getErrorBorder(errors.email)}
        {...register("email", {
          required: "Field is required"
        })} />
      <ErrorMessage text={errors.email?.message}/>

      <input
        placeholder="Password"
        type="password"
        style={getErrorBorder(errors.password)}
        {...register('password', {
          required: "Field is required",
          minLength: {
            value: 8,
            message: "At least 8 digits"
          },
          maxLength: 16,
        })}
      />
      <ErrorMessage text={errors.password?.message}/>

      <input
        placeholder="Confirm password"
        type="password"
        style={getErrorBorder(errors.passwordConfirm)}
        {...register('passwordConfirm', {
          required: "Field is required",
          validate: value =>
            value === password.current || "The passwords do not match"
        })}
      />
      <ErrorMessage text={errors.passwordConfirm?.message}/>

      <textarea placeholder="Notes"
                style={getErrorBorder(errors.notes)}
                {...register("notes", {
                  maxLength: {
                    value: 100,
                    message: "100 digits max"
                  }
                })}
      />
      <ErrorMessage text={errors.notes?.message}/>

      <div>
        <input id="isSubscribed"
               type="checkbox"
               {...register("isSubscribed")}
        />
        <label htmlFor="isSubscribed">I wanna get the newsletters</label>
      </div>

      <div>
        <label htmlFor="favColor">What is your favorite color?</label>
        <select id="favColor"
                {...register("favColor")}
        >
          <option value="">-- Choose --</option>
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="indigo">Indigo</option>
          <option value="violet">Violet</option>
        </select>
      </div>

      <fieldset style={getErrorBorder(errors.employmentStatus)}>
        <legend>Current employment status</legend>
        <input
          type="radio"
          id="unemployed"
          value="unemployed"
          {...register("employmentStatus", {
            required: "Choose your status"
          })}
        />
        <label htmlFor="unemployed">Unemployed</label>
        <br/>
        <input
          type="radio"
          id="part-time"
          value="part-time"
          {...register("employmentStatus", {
            required: "Choose your status"
          })}
        />
        <label htmlFor="part-time">Part-time</label>
        <br/>
        <input
          type="radio"
          id="full-time"
          value="full-time"
          {...register("employmentStatus", {
            required: "Field is required"
          })}
        />
        <label htmlFor="full-time">Full-time</label>
      </fieldset>
      <ErrorMessage text={errors.employmentStatus?.message}/>

      <button>Sign up</button>
    </form>
  );
}

export default HookUseForm;