import tekinfraLogo from "@/assets/tekinfra-logo.png";
import { useLanguage } from "@/i18n/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border/30 py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src={tekinfraLogo} alt="TEKINFRA" className="h-[60px]" />
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} TEKINFRA, s.r.o. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
