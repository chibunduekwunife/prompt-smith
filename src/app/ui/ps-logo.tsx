import {
    ChatBubbleBottomCenterTextIcon
} from '@heroicons/react/24/outline'
import { lusitana } from '@/app/ui/fonts'

export default function PromptSmithLogo ({iconStyles = '', textStyles = '', logoStyles = '' }: {
    logoStyles?: string,
    iconStyles?: string,
    textStyles?: string,
}) {
    return (
        <div
            className={`${lusitana.className} flex flex-row items-center loading-none text-white gap-x-3 ${logoStyles}`}
        >
            <ChatBubbleBottomCenterTextIcon className={`size-10 rotate-[15deg] ${iconStyles}`} />
            <p className={`text-[25px] ${textStyles}`}>Prompt Smith</p>
        </div>
    )
}