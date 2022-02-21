//react-hook-form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styled from "styled-components";
import { useMutation } from "react-query";
import { SignupRequest } from "../shared/types";
import { signup } from "../api/auth";
import { Link } from "react-router-dom";

interface IForminputs {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup.string().required("필수항목"),
  password: yup.string().required("필수 항목"),
});

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForminputs>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const mutation = useMutation("signup", (data: SignupRequest) => signup(data), {
    onSuccess: () => {
      return;
    },
  });
  const onSubmit = (data: IForminputs) => {
    mutation.mutate(data);
  };
  return (
    <Wrapper>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div>EAMIL</div>
        <input {...register("email")} />
        <p>{errors.email?.message}</p>
        <div>PASSWORD</div>
        <input {...register("password")} />
        <p>{errors.password?.message}</p>
        <button type="submit">{mutation.isLoading ? "Loading..." : "Submit"}</button>
      </form>
      <div>
        <Link to="/login">로그인</Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled("div")`
  padding-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default Register;
