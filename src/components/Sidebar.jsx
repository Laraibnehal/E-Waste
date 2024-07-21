import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Learn",
    path: "/learn",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Ecozones",
    path: "/eco-zones",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "DashBoard",
    path: "/dash-boards",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text",
  },
  {
    title: "LeaderBoard",
    path: "/leader-board",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
  {
    title: "Rewards",
    path: "/rewards",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text",
  },
  {
    title: "Settings",
    path: "/settings",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
];
