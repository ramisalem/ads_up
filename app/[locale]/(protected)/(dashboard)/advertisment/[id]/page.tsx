'use client';
import { Card } from '@/components/ui/card';
import { useAppStore, useAppSelector } from '@/hooks/hooks';
import { getOneAdvertisment } from '@/redux/slices/adsSlice';
import { useRef, useEffect } from 'react';
import AdvertismentCard from '@/components/dashboard/ads-card';

export default function AdvertismentPage({ params: { id } }: { params: { id: string } }) {
    return (
        <AdvertismentCard
            params={{
                id: id
            }}
        />
    );
}
