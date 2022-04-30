import app from "./app";
import { createAgroWallet } from "./endpoints/createAgroWallet";
import { getAgroUserWallet } from "./endpoints/getAgroUserWallet";
import { login } from "./endpoints/login";
import { signup } from "./endpoints/signup";


//get AgroUserWallet
app.get("/user/wallet", getAgroUserWallet);

//login user
app.post("/user/login", login);

//create user
app.post("/user/signup", signup);

//create wallet
app.post("/user/wallet", createAgroWallet);
