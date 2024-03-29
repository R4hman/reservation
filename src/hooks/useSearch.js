import { useQuery } from "@tanstack/react-query";

export const getUsers = async (text) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users?username=${text}`
  );
  const data = await res.json();
  return data;
};

const useSearch = (text) => {
  //   const queryClient = useQueryClient();

  // Queries
  const { data, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: () => getUsers(text),
  });
  return {
    data,
    isLoading,
  };
};

export default useSearch;
