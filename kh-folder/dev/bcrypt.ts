
const bcrypt = require("bcrypt");

// const saltRounds = 10;
// const password = "myPassword123";
// const hashedPassword = await bcrypt.hash(password, saltRounds);

// const hashPassword = async (password: any) => {
//   try {
//     const salt = await bcrypt.genSalt(saltRounds);
//     const hashedPassword = await bcrypt.hash(password, salt);
//     return hashedPassword;
//   } catch (error) {
//     console.error("Error hashing password:", error);
//     throw error;
//   }
// }


async function app() {
    const password = "myPassword123";

    const hash = await bcrypt.hash(password, 10);
    console.log("Hashed password:", hash);

    if (await bcrypt.compare(password, hash)) {
        console.log("Password is valid!");
    } else {
        console.log("Password is invalid!");
    }
  }


  app();
