import { motion } from "framer-motion";
import { ClipboardList, LayoutGrid, Settings2, Cpu, Server, LifeBuoy } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const HowItWorksSection = () => {
  const { t } = useLanguage();

  const steps = [
    { icon: ClipboardList, titleKey: "how.s1.title", descKey: "how.s1.desc" },
    { icon: LayoutGrid, titleKey: "how.s2.title", descKey: "how.s2.desc" },
    { icon: Settings2, titleKey: "how.s3.title", descKey: "how.s3.desc" },
    { icon: Cpu, titleKey: "how.s4.title", descKey: "how.s4.desc" },
    { icon: Server, titleKey: "how.s5.title", descKey: "how.s5.desc" },
    { icon: LifeBuoy, titleKey: "how.s6.title", descKey: "how.s6.desc" },
  ];

  return (
    <section id="how-it-works" className="py-24 relative">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-mono text-primary mb-4 block">{t("how.tag")}</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t("how.title1")} <span className="gradient-text">{t("how.title2")}</span>
          </h2>
          <p className="text-lg text-muted-foreground">{t("how.desc")}</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="flex gap-6 mb-8 last:mb-0"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-mono text-sm font-semibold">
                  {String(i + 1).padStart(2, '0')}
                </div>
                {i < steps.length - 1 && (
                  <div className="w-px flex-1 bg-border/50 mt-3" />
                )}
              </div>

              <div className="glass-card rounded-2xl p-6 flex gap-4 mb-3 hover:border-primary/20 transition-colors flex-1">
                <step.icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-2">{t(step.titleKey)}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t(step.descKey)}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
