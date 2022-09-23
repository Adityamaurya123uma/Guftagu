import { Box } from "@chakra-ui/layout";
import { ChatState } from "../Context/ChatProvider";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import MyChats from "../components/MyChats";
import ChatBox from "../components/ChatBox";
import { useState } from "react";

const ChatPage = () => {
  const { user } = ChatState();
  const [fetchAgain, setFetchAgain] = useState(false);

  return (
    <div style={{ width: "100%" }}>
      {" "}
      {user && <SideDrawer />}
      /* Design */
      <Box
        display="flex"
        justifyContent={"space-between"}
        w="100%"
        h="91.5vh"
        p="10px"
      >
        {user && <MyChats fecthAgain={fetchAgain} />}{" "}
        {user && (
          <ChatBox fecthAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}{" "}
      </Box>{" "}
    </div>
  );
};

export default ChatPage;
