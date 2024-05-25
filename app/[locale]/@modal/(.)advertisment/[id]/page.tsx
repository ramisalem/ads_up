import AdvertismentCard from '@/components/dashboard/ads-card';
import { AdsModal } from './adv-modal';

export default function AdvModal({ params: { id: adId } }: { params: { id: string } }) {
    console.log('in the modal page', adId);
    return (
        <AdsModal>
            <AdvertismentCard id={adId} />
        </AdsModal>
    );
}
