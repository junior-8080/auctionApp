import {useQueryClient} from "@tanstack/react-query";

type QueryTypes = "";

function UseQueryInvalidator() {
  const queryClient = useQueryClient();

  const removeQuery = (types: QueryTypes[]) => {
    types.forEach((type) => {
      switch (type) {

      }
    });
  };

  return {
    removeQuery,
  };
}

export default UseQueryInvalidator;
