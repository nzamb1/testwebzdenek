import { motion } from "framer-motion";
import { Building2, Server, Cloud } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const DeploymentSection = () => {
  const { t } = useLanguage();

  const options = [
    {
      icon: Server,
      badgeKey: "dep.onprem.badge",
      titleKey: "dep.onprem.title",
      descKey: "dep.onprem.desc",
      pointKeys: ["dep.onprem.p1", "dep.onprem.p2", "dep.onprem.p3", "dep.onprem.p4"],
      accent: "primary",
    },
    {
      icon: Cloud,
      badgeKey: "dep.cloud.badge",
      titleKey: "dep.cloud.title",
      descKey: "dep.cloud.desc",
      pointKeys: ["dep.cloud.p1", "dep.cloud.p2", "dep.cloud.p3", "dep.cloud.p4"],
      accent: "accent",
    },
  ];

  return (
    <section id="deployment" className="py-24 relative">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-mono text-primary mb-4 block">{t("dep.tag")}</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t("dep.title1")} <span className="gradient-text">{t("dep.title2")}</span>
          </h2>
          <p className="text-lg text-muted-foreground">{t("dep.desc")}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {options.map((opt, i) => (
            <motion.div
              key={i}
              className={`glass-card rounded-2xl p-8 hover:border-${opt.accent}/30 transition-colors`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-xl bg-${opt.accent}/10 flex items-center justify-center`}>
                  <opt.icon className={`w-5 h-5 text-${opt.accent}`} />
                </div>
                <div className={`px-3 py-1 rounded-md bg-${opt.accent}/10 border border-${opt.accent}/20`}>
                  <span className={`text-${opt.accent} font-mono text-xs font-semibold`}>{t(opt.badgeKey)}</span>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3">{t(opt.titleKey)}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{t(opt.descKey)}</p>

              <ul className="space-y-2.5">
                {opt.pointKeys.map((key, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <Building2 className={`w-4 h-4 text-${opt.accent}/70 flex-shrink-0 mt-0.5`} />
                    <span className="text-sm text-muted-foreground">{t(key)}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeploymentSection;
