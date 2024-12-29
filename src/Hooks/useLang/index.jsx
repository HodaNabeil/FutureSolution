import { Helper } from "@/Utility"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
export default function useLang() {
    const { Lang } = useSelector(state => state.Helper)
    const AllowedLangs = Helper.Locals.map(l => l.Value)
    const [Language, setLanguage] = useState({})
    useEffect(() => {
        const InitLang = async () => {
            let defaultLang = Lang ? Lang : Helper.GetStorage("Lang");

            if (!AllowedLangs.includes(defaultLang)) {
                let Language = await import(`../../Lang/en.js`)
                setLanguage(Language.Lang)
            } else {
                let Language = await import(`../../Lang/${defaultLang}.js`)
                setLanguage(Language.Lang)
            }
        }
        InitLang()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [Lang])
    return Language
}