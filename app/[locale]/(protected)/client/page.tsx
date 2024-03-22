"use client";

import { UserInfo } from "@/components/user-info";
import { useCurrentUser } from "@/hooks/use-current-user";
import { useI18n, useScopedI18n } from "../../../../locales/client";
const ClientPage = () => {
  const user = useCurrentUser();
  const t = useI18n();

  return (
    <div className="">
      {" "}
      <UserInfo label={t("client") + "📱"} user={user} />
    </div>
  );
};

export default ClientPage;
