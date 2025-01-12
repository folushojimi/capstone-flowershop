import apiFetch from "./apiFetch";

export const createUsers =({username, password})=>apiFetch('POST', '/users', {
username,
password
})