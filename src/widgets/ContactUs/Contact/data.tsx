import { BsTelephone, BsGeoAlt } from "react-icons/bs"
import { AiOutlineMail } from "react-icons/ai"
import { AppLink } from "shared/ui/AppLink/AppLink"

export const contactData = [
    {
        id: 1,
        Icon: <BsGeoAlt size={35} />,
        title: "Our Location",
        desc: <p>London, 221B Baker Street from 1881 to 1904."</p>,
    },
    {
        id: 2,
        Icon: <BsTelephone size={35} />,
        title: "Direct Call",
        desc: (
            <div>
                Phone: <AppLink to="tel:+1234567890">+380952821010</AppLink>
            </div>
        ),
    },
    {
        id: 3,
        Icon: <AiOutlineMail size={35} />,
        title: "Get In Touch",
        desc: (
            <div>
                Email: <AppLink to="mailto:123@123.com">123@123.com</AppLink>
            </div>
        ),
    },
]
