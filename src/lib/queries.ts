import {createQueryKeys, mergeQueryKeys,} from "@lukemorales/query-key-factory";

//https://tanstack.com/query/v4/docs/react/community/lukemorales-query-key-factory

export const user = createQueryKeys("wallet", {

});

export const queries = mergeQueryKeys(user);
