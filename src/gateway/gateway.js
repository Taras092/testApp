export const fetchToken = () => {
  return fetch('https://frontend-test-assignment-api.abz.agency/api/v1/token')
    .then(response => response.json())
    .catch(error => error);
};
export const createUser = (userData, token) => {
  return fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', {
    method: 'POST',
    body: userData,
    headers: { Token: token },
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      if (data.success) {
        console.log(data.message)
      } else {
        console.log(data.message);
      }
    })
    .catch((error) => console.log(error));
};

export const fetchUsersData = (page, count) => {
  return fetch(
    `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=${count}`,
  ).then(response => response.json());
};

export const findUser = userId => {
  return fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/users/${userId}`).then(
    response => response.json(),
  );
};