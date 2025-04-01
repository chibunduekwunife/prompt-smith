import PromptSmithLogo from "@/app/ui/ps-logo";
import Link from "next/link";
import { footerLinks } from "@/app/lib/data";

export default function FooterMenu () {
    return (
        <div className="fixed inset-x-0 bottom-0 bg-gradient-to-r from-purple-600 to-purple-900
        text-white px-4 py-10">
            <p>Prompt Smith &#169; 2020</p>
        </div>
    )
}
