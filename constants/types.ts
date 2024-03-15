import { z } from 'zod';
export type SideNavItem = {
    name: string;
    href: string;
    icon?: any; //string; //JSX.Element;
    submenu?: boolean;
    subMenuItems?: SideNavItem[];
};
export type Tickets = {
    uuid: string,
    title: string,
    description: string,
    status: "pending" | "processing" | "success" | "failed",
    createdBy: 'User',
    createdAt: string,
    updatedAt: string,

}

export type AdvType = {
    id: number,
    title: string,
    description: string,
    video: string,
    audio: string,
    pdf: string,
    thumbnail: string,
    status: string,
    createdAt: string,
    updatedAt: string,
    starOfMonth: boolean,
    paid: boolean,
    views: number,
    listens: number,
    age: number,
    gender: string,
    categoryId: number,
    subcategoryId: number,
}

export const AdvSchema = z.object({
    id: z.number(),
    title: z.string(),
    description: z.string(),
    video: z.string(),
    audio: z.string(),
    pdf: z.string(),
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
