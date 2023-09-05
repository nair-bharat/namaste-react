import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);

  const { status, statusText, data } = err;
  return (
    <div>
      <h1>
        {status} - {statusText}
      </h1>
      <h4>{data}</h4>
    </div>
  );
};

export default Error;
