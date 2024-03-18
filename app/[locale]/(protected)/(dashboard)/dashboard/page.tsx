import { getI18n } from "@/locales/server";

export default async function Page() {
  const t = await getI18n();
  return (
    <div className="container border-radius md:mx-4 my-6  md:w-full  items-start rounded-lg bg-slate-100 px-6 py-4 md:flex-col">
      <p className="text">{t("home")}</p>
      <span>Dashboard</span>
    </div>
  );
}
