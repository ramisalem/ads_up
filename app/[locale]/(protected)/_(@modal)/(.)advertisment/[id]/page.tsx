import AdvertismentCard from "@/components/dashboard/ads-card";
import { Modal } from "./adv-modal";

export default function AdvModal({
  params: { id: uuid },
}: {
  params: { id: string };
}) {
  return (
    <Modal>
      <AdvertismentCard
        params={{
          id: uuid,
        }}
      />
    </Modal>
  );
}
