export function getUserDataFromLocalStorage() {
  const data = localStorage.getItem("userData");

  if (data) {
    return JSON.parse(data);
  }

  return null;
}

export function deleteUserFromLocalStorage() {
  const data = localStorage.getItem("userData");

  if (data) {
    localStorage.removeItem("userData");
  }
}
