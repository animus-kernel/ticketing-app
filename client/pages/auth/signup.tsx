import { FormEvent } from "react";
import FormErrors from "../../components/FormErrors";
import { useRequest } from "../../hooks/useRequest";
import Router from "next/router";

export default () => {
  const { doRequest, errors } = useRequest({
    onSuccess: () => Router.push("/"),
  });

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.target as HTMLFormElement;

    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement)
      .value;

    await doRequest({
      url: "/api/users/signup",
      method: "post",
      body: { email, password },
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Sign Up</h1>
      {errors.length > 0 && <FormErrors errors={errors} />}
      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input className="form-control" id="email" name="email" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
        />
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};
