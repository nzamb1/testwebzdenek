import { motion } from "framer-motion";
import { Database, Cpu, ShieldCheck, Gauge, LifeBuoy, Layers } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    { icon: Database, titleKey: "svc.s1.title", descKey: "svc.s1.desc", tagKeys: ["svc.s1.t1", "svc.s1.t2", "svc.s1.t3"] },
    { icon: Cpu, titleKey: "svc.s2.title", descKey: "svc.s2.desc", tagKeys: ["svc.s2.t1", "svc.s2.t2", "svc.s2.t3"] },
    { icon: Layers, titleKey: "svc.s3.title", descKey: "svc.s3.desc", tagKeys: ["svc.s3.t1", "svc.s3.t2", "svc.s3.t3"] },
    { icon: ShieldCheck, titleKey: "svc.s4.title", descKey: "svc.s4.desc", tagKeys: ["svc.s4.t1", "svc.s4.t2", "svc.s4.t3"] },
    { icon: Gauge, titleKey: "svc.s5.title", descKey: "svc.s5.desc", tagKeys: ["svc.s5.t1", "svc.s5.t2", "svc.s5.t3"] },
    { icon: LifeBuoy, titleKey: "svc.s6.title", descKey: "svc.s6.desc", tagKeys: ["svc.s6.t1", "svc.s6.t2", "svc.s6.t3"] },
  ];

  return (
    <section id="services" className="py-24 relative">
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
          <span className="text-sm font-mono text-primary mb-4 block">{t("svc.tag")}</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t("svc.title1")} <span className="gradient-text">{t("svc.title2")}</span>
          </h2>
          <p className="text-lg text-muted-foreground">{t("svc.desc")}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="glass-card rounded-2xl p-8 hover:border-primary/30 transition-all group relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: 'hsl(220 75% 55% / 0.06)' }} />

              <service.icon className="w-7 h-7 text-primary mb-5" />
              <h3 className="text-lg font-semibold mb-3">{t(service.titleKey)}</h3>
              <p className="text-muted-foreground leading-relaxed mb-5 text-sm">{t(service.descKey)}</p>
              <div className="flex flex-wrap gap-2">
                {service.tagKeys.map((key) => (
                  <span key={key} className="px-3 py-1 rounded-full text-xs font-mono bg-secondary text-muted-foreground">
                    {t(key)}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
