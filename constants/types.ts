import { z } from 'zod';
export type SideNavItem = {
    name: string;
    href: string;
    icon?: any; //string; //JSX.Element;
    submenu?: boolean;
    subMenuItems?: SideNavItem[];
};

export const AdvSchema = z.object({
    id: z.number(),
    title: z.string(),
    description: z.string(),
    video: z.string(),
    audio: z.string(),
    thumbnail: z.string(),
    status: z.string(),
    createdAt: z.string(),
    updatedAt: z.string(),
    starOfMonth: z.boolean(),
    paid: z.boolean(),
    views: z.number(),
    listens: z.number(),
    age: z.number(),
    gender: z.string(),
    categoryId: z.number(),
    subcategoryId: z.number()
});
