import { LoginForm } from "@/components/auth/login-form";
import ADSUPLogo from "@/components/dashboard/adsup-logo";
import { getI18n } from "@/locales/server";
const LoginPage = async () => {
    const t = await getI18n();
    return (
        <div className="flex flex-row items-center  justify-center w-auto bg-[#FAFAFA]  rounded-md">
            <div className="hidden flex-1 h-[600px] w-[350px] p-12 border-r-2 rounded-md hover:translate-y-2 shadow-md shadow-slate-200  md:block ">
                <ADSUPLogo />
                <p className="mt-10 text-lg font-semibold text-cyan-600/50 inline-block  hover:text-black line-clamp-4 text-justify leading-loose">
                    {t("aboutUs")}
                </p>
            </div>
            <div className="flex-1 h-[600px]">
                <LoginForm />
            </div>
        </div>
    );
};

export default LoginPage;
