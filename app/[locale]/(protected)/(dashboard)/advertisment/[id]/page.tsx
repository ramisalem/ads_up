import { AdvertismentCard } from "@/components/dashboard/ads-card";

export default function AdvertismentPage({ params: { id } }: { params: { id: string } }) {
    return <AdvertismentCard id={id} />;
}
