const users = [
  {
    name: "Rodrigo Oler",
    email: "oler42@zone.io",
    age: 25
  }
];

export function User() {
  return {
    findAll() {
      return users;
    }
  };
}
