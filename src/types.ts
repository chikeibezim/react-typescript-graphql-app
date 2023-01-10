import type { GetUsersQuery } from "./graphql/generated";

/*
The reason you import this type instead of the full User and Message types is that
 the GetUsersQuery type has access to a more specific set of types that contain 
 only the fields your query retrieves.
*/

/*
Replace the existing types with the following to expose the types
representing your query results:
*/

export type Message = GetUsersQuery["users"][0]["messages"][0];
export type User = GetUsersQuery["users"][0];