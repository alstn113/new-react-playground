import { Key, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

const User = () => {
  const [users, setUsers] = useState<any>();
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    const getUsers = async () => {
      try {
        const res = await axiosPrivate.get("/auth", {
          signal: controller.signal,
        });
        console.log(res.data);
        isMounted && setUsers(res.data);
      } catch (err) {
        console.error(err);
        navigate("/login", { state: { from: location }, replace: true });
      }
    };
    getUsers();
    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);
  return (
    <div>
      <h2>users-list</h2>
      {users?.length ? (
        <ul>
          {users.map((user: any, i: Key | null | undefined) => (
            <li key={i}>{JSON.stringify(user)}</li>
          ))}
        </ul>
      ) : (
        <div>no data</div>
      )}
    </div>
  );
};

export default User;
