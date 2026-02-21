import { motion } from "framer-motion";
import teamMykola from "@/assets/team-mykola.jpg";
import teamZdenek from "@/assets/team-zdenek.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const TeamSection = () => {
  const { t } = useLanguage();

  const members = [
    { nameKey: "team.m1.name", photo: teamMykola, descKey: "team.m1.desc" },
    { nameKey: "team.m2.name", photo: teamZdenek, descKey: "team.m2.desc" },
  ];

  return (
    <section id="team" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-sm font-mono text-primary mb-4 block">{t("team.tag")}</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t("team.title1")} <span className="gradient-text">{t("team.title2")}</span>
          </h2>
          <p className="text-lg text-muted-foreground">{t("team.desc")}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {members.map((member, i) => (
            <motion.div
              key={i}
              className="glass-card rounded-2xl p-8 text-center hover:border-primary/20 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-2 border-primary/20">
                <img src={member.photo} alt={t(member.nameKey)} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{t(member.nameKey)}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{t(member.descKey)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
