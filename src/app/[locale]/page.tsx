import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("pages.home");

  return (
    <div className="grid place-items-center">
      <h1>{t("title")}</h1>
    </div>
  );
}
