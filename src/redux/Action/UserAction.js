import ServerDomain from "../../serverdomain";

export const loginAccount = async (userInput) => {
    const {schoolCode,username,password} = userInput;
    const loginUser = await fetch(`${ServerDomain}/auth/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
  
    if(!loginUser.ok){
  
      const error= "Something went wrong. Check your userID or password"
      throw new Error (error)
    }
  
    const resData = await loginUser.json();
    
    return resData

}