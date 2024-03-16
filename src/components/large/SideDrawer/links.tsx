import { AiFillDashboard } from "react-icons/ai";
import { HiUsers } from "react-icons/hi";
import { LiaDumbbellSolid } from "react-icons/lia";
import { GiKnifeFork } from "react-icons/gi";
import { HiClipboardList } from "react-icons/hi";
import { GiProgression } from "react-icons/gi";
import { RiAdminFill } from "react-icons/ri";
 


export const links = [
    {
        id: 1,
        title: "Dashboard",
        path: "/dashboard",
        icon: <AiFillDashboard size={"25"} />
        
    },
    {
        id: 2,
        title: "Users",
        path: "/users",
        icon: <HiUsers />
    },
    {
        id: 3,
        title: "Exercises",
        path: "/exercises",
        icon: <LiaDumbbellSolid />,
    },
    {
        id: 4,
        title: "Meals",
        path: "/meals",
        icon: <GiKnifeFork />,
    },
    {
        id: 5,
        title: "Programs",
        path: "/programs",
        icon: <HiClipboardList />,
    },
    {
        id: 6,
        title: "Analytics",
        path: "/analytics",
        icon: <GiProgression />,
    },
    {
        id: 7,
        title: "Admins",
        path: "/admins",
        icon: <RiAdminFill />,
    },
];
