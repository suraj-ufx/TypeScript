

import HeaderOne from "@/components/headers/HeaderOne"
import HeaderTwo from "@/components/headers/HeaderTwo"
import HeaderThree from "@/components/headers/HeaderThree"
import HeaderFour from "@/components/headers/HeaderFour"
import ParaOne from "@/components/paragraph/ParaOne"
import HeadingOne from "@/components/headings/HeadingOne"
import FooterOne from "@/components/footers/FooterOne"
import HeroOne from "@/components/hero/HeroOne"
import FooterTwo from "@/components/footers/FooterTwo"
import FooterThree from "@/components/footers/FooterThree"
import FooterFour from "@/components/footers/FooterFour"

export const blocks = [
    { id: "header-one", label: "Header One", category: "header", component: HeaderOne },
    { id: "header-two", label: "Header Two", category: "header", component: HeaderTwo },
    { id: "header-three", label: "Header Three", category: "header", component: HeaderThree },
    { id: "header-four", label: "Header Four", category: "header", component: HeaderFour },
    { id: "footer-one", label: "Footer One", category: "header", component: FooterOne },
    { id: "footer-two", label: "Footer Two", category: "header", component: FooterTwo },
    { id: "footer-three", label: "Footer Three", category: "header", component: FooterThree },
    { id: "footer-four", label: "Footer Four", category: "header", component: FooterFour },
    { id: "hero", label: "Hero", category: "layout" ,component:HeroOne},
    { id: "footer", label: "Footer", category: "layout", component:FooterOne },
    { id: "paragraph", label: "Paragraph", category: "text", component:ParaOne },
    { id: "heading", label: "Heading", category: "text", component:HeadingOne },
]