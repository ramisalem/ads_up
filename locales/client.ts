// // locales/client.ts
// "use client"
// import { createI18nClient } from 'next-international/client'

// export const { useI18n, useScopedI18n, I18nProviderClient, useChangeLocale, useCurrentLocale } = createI18nClient({
//     en: () => import('./en'),
//     ar: () => import('./ar')
// })
"use client";
import { createI18nClient } from "next-international/client";

export const {
    useI18n,
    useScopedI18n,
    I18nProviderClient,
    useChangeLocale,
    useCurrentLocale,
} = createI18nClient({
    en: () => import("./en"),
    ar: () => import("./ar"),
});

// Hacks so scopedT can accept dynamic strings without TS errors
type Params = Record<string, string>;
export function useI18nUntyped() {
    const scopedT = useI18n();
    // @ts-expect-error Argument of type is not assignable
    return (key: string, params?: Params) => scopedT(key, params);
}

type ScopeParams = Parameters<typeof useScopedI18n>[0];
export function useScopedI18nUntyped<Scope extends ScopeParams>(scope: Scope) {
    const scopedT = useScopedI18n(scope);
    // @ts-expect-error Argument of type is not assignable
    return (key: string, params?: Params) => scopedT(key, params);
}

