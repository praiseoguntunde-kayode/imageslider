// import State from "../../statemanagement/state";
// import Food from "../../statemanagement/food";
import { useEffect } from "react";
import Users from "../UsingUseEffect/Users";
const Chat = () => {
  useEffect(() => {
    document.title = "Chat Page";
  }, []);
  return (
    <div>
      <h1>Chat Page</h1>
      <Users />
      {/* <Food />
      <State /> */}
    </div>
  );
};

export default Chat;