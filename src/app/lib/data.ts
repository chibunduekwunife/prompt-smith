import {
    AcademicCapIcon,
    CurrencyDollarIcon,
    UserCircleIcon,
    PhoneArrowDownLeftIcon,
    EnvelopeIcon
} from "@heroicons/react/24/solid";

import {
    ArrowTrendingUpIcon,
    BeakerIcon,
    HomeIcon,
    ShareIcon
} from "@heroicons/react/24/outline";

import {
    FaFacebook,
    FaLinkedin,
    FaTwitterSquare,
    FaInstagramSquare
} from "react-icons/fa";
//move to database

export const navLinks = [
    {name: 'About', href: '/about', icon: AcademicCapIcon},
    {name: 'Affiliates', href: '/affiliates', icon: CurrencyDollarIcon},
    {name: 'login', href: '/login', icon: UserCircleIcon}
]

export const footerLinks = [
    [
        {name: 'About Us', href: '/about'},
        {name: 'More Search', href: '/search'},
        {name: 'Blog', href: '/blog'},
        {name: 'Testimonials', href: '/testimonials'},
        {name: 'Events', href: 'Events'}
    ],
    [
        {name: 'Services', href: '/services'},
        {name: 'Supports', href: '/support'},
        {name: 'Terms & Conditions', href: '/terms'},
        {name: 'Privacy Policy', href: '/privacy-policy'},
    ],
    [
        {name: 'Brands List', href: '/'},
        {name: 'AI Packages', href: '/'},
        {name: 'Affiliates', href: '/affiliates'},
        {name: 'Blog', href: '/blog'},
        {name: 'Testimonials', href: '/testimonials'},
    ],
    [
        {name: 'phone-number', href: '/phone', value: '+91 9999 999 999', icon: PhoneArrowDownLeftIcon },
        {name: 'email', href: '/email', value: 'support@promptsmith.com', icon: EnvelopeIcon}
    ]
]

export const socialLinks = [
    {name: 'facebook', href: '/facebook', icon: FaFacebook},
    {name: 'linkedin', href: '/linkedin', icon: FaLinkedin},
    {name: 'twitter', href: '/twitter', icon: FaTwitterSquare},
    {name: 'instagram', href: '/instagram', icon: FaInstagramSquare}
]

// auth?.prompts page

export const sideNavLinks = [
    {name: 'My Prompts', href: '/prompts', icon: HomeIcon},
    {name: 'Shared Prompts', href: '/prompts/shared', icon: ShareIcon},
    {name: 'Trending Prompts', href: '/prompts/trending', icon: ArrowTrendingUpIcon},
    {name: 'Test Prompts', href: '/prompts/tests', icon: BeakerIcon},
];

export const promptFolders = [
    {name: "Example Folder", href: "/prompts/examplefolder"},
    {name: "Spicy Cats", href: "/prompts/spicsds"},
    {name: "ChatGPT Prompts", href: "/prompts/chat"},
    {name: "Free Prompts AI", href: "/prompts/snlds"},
]

export const sortOptions = [
    {name: "Title (A-Z)", value: "TitleAsc"},
    {name: "Title (Z-A)", value: "TitleDesc"},
    {name: "Date added (Oldest First)", value: "DateAddedOldest"},
    {name: "Date added (Newest First)", value: "DateAddedNewest"}
]

export const prompts = [
    {name: "My First Ever Prompt :)", href: "/", dateCreated: "4/5/2020"},
    {name: "My Second Ever Prompt :)", href: "/", dateCreated: "9/15/2040"},
    {name: "My Third Ever Prompt :)", href: "/", dateCreated: "5/16/2025"},
]
