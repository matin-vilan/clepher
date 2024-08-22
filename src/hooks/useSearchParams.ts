import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

export const useCustomeSearchParams = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  const [searchParams] = useSearchParams();

  const params = new URLSearchParams(searchParams);

  const setParams = (array: { name: string; value: string }[]) => {
    array.forEach((e) => {
      if (!e.value) params.delete(e.name);
      else params.set(e.name, e.value);
    });
    navigate(`${pathname}?${params.toString()}`);
  };

  const deleteParams = (array: { name: string }[]) => {
    array.forEach((e) => {
      params.delete(e.name);
    });
    navigate(`${pathname}?${params.toString()}`);
  };

  const deleteAllParams = () => {
    navigate(`${pathname}`);
  };

  return { params, setParams, deleteParams, deleteAllParams };
};
