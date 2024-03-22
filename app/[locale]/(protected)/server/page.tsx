import { currentUser } from "@/lib/auth";
import { UserInfo } from "@/components/user-info";
import { getI18n } from "@/locales/server";

const ServerPage = async () => {
  const t = await getI18n();
  const user = await currentUser();

  return <UserInfo label={`💻 ${t("server-comp")}`} user={user} />;
};

export default ServerPage;
