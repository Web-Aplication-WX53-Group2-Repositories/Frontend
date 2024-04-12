import {createI18n} from "vue-i18n";
import en from "@/locale/en.js";
import es from "@/locale/es.js";
import jp from "@/locale/jp.js";

const i18n = createI18n({
    locale: 'es',
    messages: {
        en: en,
        es: es,
        jp:jp
    }
})

export default i18n