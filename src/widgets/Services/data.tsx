import { BsTelephone, BsGeoAlt } from "react-icons/bs"
import { AiOutlineMail } from "react-icons/ai"
import { AppLink } from "shared/ui/AppLink/AppLink"

import { reactNativeIcon, webDesignIcon, frontendIcon } from "shared/constants/services"

export const servicesData = [
    {
        id: 1,
        img: reactNativeIcon,
        title: "Fast Support",
        desc: "A user-friendly frontend can enhance user experience, increase engagement and ultimately drive more traffic, leads and sales.",
    },
    {
        id: 2,
        img: webDesignIcon,
        title: "Creative Design",
        desc: "A good design is the face of a company's online presence and a first point of contact with your company's potential customers.",
    },
    {
        id: 3,
        img: frontendIcon,
        title: "Affordable",
        desc: "Having a mobile app will help your business stand out from competitors and offer a unique value proposition to customers.",
    },
]
