import { motion } from "framer-motion";
import { Zap, Lock, PiggyBank, TrendingUp, Rocket } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const ReferencesSection = () => {
  const { t } = useLanguage();

  const benefits = [
    { icon: Zap, titleKey: "ref.b1.title", descKey: "ref.b1.desc" },
    { icon: Lock, titleKey: "ref.b2.title", descKey: "ref.b2.desc" },
    { icon: PiggyBank, titleKey: "ref.b3.title", descKey: "ref.b3.desc" },
    { icon: TrendingUp, titleKey: "ref.b4.title", descKey: "ref.b4.desc" },
    { icon: Rocket, titleKey: "ref.b5.title", descKey: "ref.b5.desc" },
  ];

  return (
    <section id="references" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-mono text-primary mb-4 block">{t("ref.tag")}</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t("ref.title1")} <span className="gradient-text">{t("ref.title2")}</span>
          </h2>
          <p className="text-lg text-muted-foreground">{t("ref.desc")}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              className={`glass-card rounded-2xl p-8 hover:border-primary/30 transition-colors ${i === benefits.length - 1 ? "md:col-span-2 lg:col-span-1" : ""}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <b.icon className="w-7 h-7 text-primary mb-4" />
              <h3 className="font-semibold text-lg mb-2">{t(b.titleKey)}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{t(b.descKey)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReferencesSection;
