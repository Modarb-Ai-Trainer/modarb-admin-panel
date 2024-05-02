import { AiFillDashboard } from "react-icons/ai";
import { HiUsers } from "react-icons/hi";
import { LiaDumbbellSolid } from "react-icons/lia";
import { GiKnifeFork } from "react-icons/gi";
import { HiClipboardList } from "react-icons/hi";
import { GiProgression } from "react-icons/gi";
import { RiAdminFill } from "react-icons/ri";
import { SiOpenaigym } from "react-icons/si";
import { GiMuscleUp } from "react-icons/gi";


export const links = [
    {
        id: 1,
        title: "Dashboard",
        path: "/dashboard",
        icon: <AiFillDashboard size={16} />
        
    },
    {
        id: 2,
        title: "Users",
        path: "/users",
        icon: <HiUsers  size={16} />
    },
    {
        id: 3,
        title: "Exercises",
        path: "/exercises",
        icon: <LiaDumbbellSolid size={16}  />,
    },
    {
        id: 4,
        title: "Equipments",
        path: "/Equipments",
        icon: <SiOpenaigym size={16}  />,
    },
    {
        id: 5,
        title: "Muscles",
        path: "/Muscles",
        icon: <GiMuscleUp size={16}  />,
    },
    {
        id: 6,
        title: "Meals",
        path: "/meals",
        icon: <GiKnifeFork  size={16} />,
    },
    {
        id: 7,
        title: "Programs",
        path: "/programs",
        icon: <HiClipboardList size={16}  />,
    },
    {
        id: 8,
        title: "Analytics",
        path: "/analytics",
        icon: <GiProgression size={18} />,
    },
    {
        id: 9,
        title: "Admins",
        path: "/admins",
        icon: <RiAdminFill size={16}  />,
    },
];
