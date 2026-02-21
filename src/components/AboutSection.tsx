import { motion } from "framer-motion";
import { FileText, Search, MessageSquare } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const AboutSection = () => {
  const { t } = useLanguage();

  const useCases = [
    { icon: FileText, titleKey: "about.uc1.title", descKey: "about.uc1.desc" },
    { icon: Search, titleKey: "about.uc2.title", descKey: "about.uc2.desc" },
    { icon: MessageSquare, titleKey: "about.uc3.title", descKey: "about.uc3.desc" },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-mono text-primary mb-4 block">{t("about.tag")}</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {t("about.title1")}{" "}
              <span className="gradient-text">{t("about.title2")}</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {t("about.p1")}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {t("about.p2prefix")}
              <span className="text-foreground font-medium">{t("about.rag")}</span>
              {t("about.p2suffix")}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {t("about.p3prefix")}
              <span className="text-foreground font-medium">{t("about.qlora")}</span>
              {t("about.p3suffix")}
            </p>
            <p className="text-sm text-muted-foreground/70 font-mono mb-6">
              {t("about.p4")}
            </p>

            <div className="mt-8 p-5 rounded-xl bg-secondary/50 border border-border/50">
              <p className="text-sm font-mono text-primary mb-2">{t("about.tekinfra.title")}</p>
              <div className="flex flex-col gap-2">
                <div>
                  <span className="font-semibold text-foreground">{t("about.tekinfra.tek")}</span>{" "}
                  <span className="text-muted-foreground">{t("about.tekinfra.tekDesc")}</span>
                </div>
                <div>
                  <span className="font-semibold text-foreground">{t("about.tekinfra.infra")}</span>{" "}
                  <span className="text-muted-foreground">{t("about.tekinfra.infraDesc")}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: use cases */}
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-mono text-muted-foreground mb-2">{t("about.usecases")}</p>
            {useCases.map((item, i) => (
              <motion.div
                key={i}
                className="glass-card rounded-2xl p-6 flex gap-4 hover:border-primary/30 transition-colors"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{t(item.titleKey)}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t(item.descKey)}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
