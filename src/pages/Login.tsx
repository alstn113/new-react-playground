import { useMutation } from "react-query";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styled from "styled-components";
import { signin } from "../api/auth";
import { SigninRequest } from "../shared/types";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { authState } from "../store/auth";
import useToggle from "../hooks/useToggle";

interface IForminputs {
  email: string;
  password: string;
}

type LocationState = {
  from: {
    pathname: string;
  };
};

const schema = yup.object().shape({
  email: yup.string().required("필수항목"),
  password: yup.string().required("필수 항목"),
});

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as LocationState)?.from?.pathname || "/";
  const [authValue, setAuthValue] = useRecoilState(authState);
  const [check, toggleCheck] = useToggle("persist", false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForminputs>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const mutation = useMutation("signin", (data: SigninRequest) => signin(data), {
    onSuccess: (data) => {
      const access_token = data?.access_token;
      setAuthValue({ access_token, isLoggedIn: true });
      navigate(from, { replace: true });
    },
  });
  const onSubmit = (data: IForminputs) => {
    mutation.mutate(data);
  };
  return (
    <Wrapper>
      {JSON.stringify(authValue)}
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div>EAMIL</div>
        <input {...register("email")} />
        <p>{errors.email?.message}</p>
        <div>PASSWORD</div>
        <input {...register("password")} />
        <p>{errors.password?.message}</p>
        <button type="submit">{mutation.isLoading ? "Loading..." : "Submit"}</button>
        <input type="checkbox" id="persist" onChange={toggleCheck} checked={check} />
        <label htmlFor="persist">Trust This Device</label>
      </form>
      <div>
        <Link to="/register">회원가입</Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled("div")`
  padding-top: 100px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export default Login;
