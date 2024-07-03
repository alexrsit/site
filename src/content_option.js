import { FaSpotify } from "react-icons/fa";

const logotext = "Rosta";
const meta = {
    title: "Rosta - Portfolio",
    description: "I’m Alexander Rosta _ Systems Administrator, currently working in Sweden."
};

const introdata = {
    title: "I’m Alexander Rosta",
    animated: {
        first: "Tech enthusiast",
        second: "Sysadmin",
        third: "IAM Specialist",
    },
    description: "Welcome to my about.me page. I'm a Systems Administrator, currently working in Sweden. I have a passion for technology and I love to learn new things. I'm always looking for new challenges and opportunities to grow.",
    your_img_url: "https://i.postimg.cc/DZNC6H4D/processed-B30-E3881-60-F2-474-D-A014-B7895-EBAA0-BB-1.jpg",
};

const dataabout = {
    title: "About Me",
    aboutme: "I’m Alexander Rosta, a Systems Administrator. At 23 years old, I have worked in the IT-industry for 5 years now. Primarily I work in Identity Access Management, VMware infrastructure and it's associated storage at an enterprise level.",
};
const worktimeline = [{
        jobtitle: "Infrastrucure engineer",
        where: "Region Sörmland",
        date: "2023 feb - current",
    },
    {
        jobtitle: "IT Consultant, Cloud Engineer",
        where: "Gibon",
        date: "2021 sep - 2023 feb",
    },
    {
        jobtitle: "Support Technician",
        where: "Nyköping Municipality",
        date: "2020 dec - 2021 sep",
    },
    {
        jobtitle: "Support Technician",
        where: "Region Sörmland",
        date: "2019 jun - 2019 aug, 2020 jun - 2020 sep",
    },
];

const skills = [{
        name: "Federations, SAML2.0, OAuth2.0, OIDC",
        value: 90,
    },
    {
        name: "VMware, Datacenter",
        value: 80,
    },
    {
        name: "Active Directory, Entra ID",
        value: 90,
    },
    {
        name: "Powershell, Bash, Python",
        value: 65,
    },
    {
        name: "Docker, Kubernetes, AKS",
        value: 60,
    },
];

const services = [{
        title: "Identity Access Management",
        description: "Specialized in finding solutions for enterprise level IAM systems. I have experience with SAML2.0, OAuth2.0, OIDC and federations.",
    },
    {
        title: "VMware Infrastructure",
        description: "I have experience with VMware infrastructure, vSphere, vCenter, and ESXi. I have worked with and maintained datacenter solutions and storage solutions.",
    },
    {
        title: "Automation & Scripting, building web apps",
        description: "Just like any other IT professional, I have experience with automation and scripting. I have built web applications and automation services using Python, React, and Powershell. Which then often are deployed using Docker, sometimes with Kubernetes.",
    },
];

const dataportfolio = [{
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/800/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/600/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/300/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/700/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },

    {
        img: "https://picsum.photos/400/600/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/300/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/550/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/700/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
];

const contactConfig = {
    YOUR_EMAIL: "alex@rosta.dev",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula eu nunc et sollicitudin. Cras pulvinar, nisi at imperdiet pharetra. ",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    githubb: "https://github.com",
    instagram: "https://www.instagram.com/ro.sta/",
    linkedin: "https://linkedin.com/in/alexander-ölander-rosta-480a2120a",
    spotify: "https://open.spotify.com/playlist/5whHI7frkx9JgpYVV1RzKh?si=92992377b0524acf",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};