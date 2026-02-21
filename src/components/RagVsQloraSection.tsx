import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const RagVsQloraSection = () => {
  const { t } = useLanguage();

  return (
    <section id="technology" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-mono text-primary mb-4 block">{t("rag.tag")}</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t("rag.title1")} <span className="gradient-text">{t("rag.title2")}</span> {t("rag.title3")}
          </h2>
          <p className="text-lg text-muted-foreground">{t("rag.desc")}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {/* RAG */}
          <motion.div
            className="glass-card rounded-2xl p-8 hover:border-primary/30 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="px-3 py-1 rounded-md bg-primary/10 border border-primary/20">
                <span className="text-primary font-mono text-sm font-semibold">RAG</span>
              </div>
              <h3 className="text-xl font-bold">{t("rag.ragTitle")}</h3>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6">
              {t("rag.ragP")}
            </p>

            <div className="space-y-3 mb-6">
              {["rag.ragPt1", "rag.ragPt2", "rag.ragPt3", "rag.ragPt4"].map((key, i) => (
                <div key={i} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{t(key)}</span>
                </div>
              ))}
            </div>

            <div className="rounded-xl bg-secondary/50 border border-border/50 p-4">
              <p className="text-xs font-mono text-muted-foreground">
                <span className="text-primary">{t("rag.ragIdeal")}</span> {t("rag.ragIdealDesc")}
              </p>
            </div>
          </motion.div>

          {/* QLoRA */}
          <motion.div
            className="glass-card rounded-2xl p-8 hover:border-accent/30 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="px-3 py-1 rounded-md bg-accent/10 border border-accent/20">
                <span className="text-accent font-mono text-sm font-semibold">QLoRA</span>
              </div>
              <h3 className="text-xl font-bold">{t("rag.qloraTitle")}</h3>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6">
              {t("rag.qloraP")}
            </p>

            <div className="space-y-3 mb-6">
              {[
                { key: "rag.qloraPt1", ok: true },
                { key: "rag.qloraPt2", ok: true },
                { key: "rag.qloraPt3", ok: true },
                { key: "rag.qloraPt4", ok: false },
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-2">
                  {point.ok
                    ? <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    : <X className="w-4 h-4 text-muted-foreground/50 flex-shrink-0 mt-0.5" />
                  }
                  <span className={`text-sm ${point.ok ? "text-muted-foreground" : "text-muted-foreground/50 line-through"}`}>
                    {t(point.key)}
                  </span>
                </div>
              ))}
            </div>

            <div className="rounded-xl bg-secondary/50 border border-border/50 p-4">
              <p className="text-xs font-mono text-muted-foreground">
                <span className="text-accent">{t("rag.qloraIdeal")}</span> {t("rag.qloraIdealDesc")}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Combined approach */}
        <motion.div
          className="max-w-5xl mx-auto glass-card rounded-2xl p-8 border-primary/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex items-center gap-3 flex-shrink-0">
              <div className="px-3 py-1.5 rounded-md bg-primary/10 border border-primary/20 font-mono text-sm font-semibold text-primary">RAG</div>
              <span className="text-muted-foreground font-mono text-sm">+</span>
              <div className="px-3 py-1.5 rounded-md bg-accent/10 border border-accent/20 font-mono text-sm font-semibold text-accent">QLoRA</div>
              <span className="text-muted-foreground font-mono text-sm">=</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">{t("rag.combo")}</strong> {t("rag.comboDesc")}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RagVsQloraSection;
