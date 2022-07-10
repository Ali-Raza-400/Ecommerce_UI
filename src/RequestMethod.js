import axios from "axios";

const BASE_URL ="http://localhost:5000/api/";
const TOKEN ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYTQ1YTg4NWIyZWE3NDNkZTJjNzI0YyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NjgzNTQ5OCwiZXhwIjoxNjU3MDk0Njk4fQ.8MYdyAsElw50cN9nKF3FBQ6x6plfeC-vBnHJKumOR2Y";

export const publicRequest=axios.create({
    baseURL:BASE_URL,
});

export const userRequest =axios.create({
   baseURL: BASE_URL,
   header:{token:`Bearer${TOKEN}`}
})