import bcrypt from "bcryptjs";
const data = {
  users: [
    {
      name: "Maksood",
      email: "maksood@gmail.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
    },
    {
      name: "John",
      email: "John@gmail.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: false,
    },
  ],
  addressBook: [
    {
      name: "Maksood",
      email: "maksood@gmail.com",
      address:"house number 561 sector 45",
      city:"faridabad",
      pin:121010,
    },
    {
        name: "Ritesh",
        email: "ritesh@gmail.com",
        address:"house number 56 mewla maharajpur",
        city:"faridabad",
        pin:121010,
      },
      {
        name: "Veeru",
        email: "verru@gmail.com",
        address:"house number 61 mewla maharajpur",
        city:"faridabad",
        pin:121010,
      },
  ],
};
export default data;