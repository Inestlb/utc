"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/lib/context/TranslationContext";
import { Partner } from "@/lib/types";
import { motion } from "framer-motion";

interface PartnersSectionProps {
  partners: Partner[];
}

export default function PartnersSection({ partners }: PartnersSectionProps) {
  const { t, dir } = useTranslation();

  return (
    <>
      <section className="py-20 bg-gray-50" dir={dir}>
        <div className="flex justify-center w-full">
          <div className="w-full max-w-[1600px] px-12">
            <div className="text-center mb-12">
              <motion.h2
                className="text-3xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {t('partners.title')}
              </motion.h2>

              <motion.div
                className="w-24 h-1 bg-orange-500 mx-auto mb-6"
                initial={{ opacity: 0, width: 0 }}
                whileInView={{ opacity: 1, width: 96 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              ></motion.div>

              <motion.p
                className="text-gray-600 max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {t('partners.subtitle')}
              </motion.p>
            </div>

            <div className="flex justify-center items-center py-6">
              <div className="w-full flex flex-col md:flex-row justify-center items-center space-y-12 md:space-y-0 md:space-x-16 lg:space-x-20">
                {partners.map((partner, index) => (
                  <motion.div 
                    key={partner.id} 
                    className="bg-white p-12 rounded-xl shadow-sm flex flex-col items-center justify-center w-64 h-56 transition-all hover:shadow-lg border border-gray-50 gpu-accelerated"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ 
                      opacity: 1, 
                      y: 0,
                      transition: { 
                        duration: 0.6, 
                        delay: index * 0.15,
                        ease: [0.25, 0.1, 0.25, 1.0]
                      }
                    }}
                    viewport={{ once: true, margin: "-50px" }}
                    whileHover={{ 
                      scale: 1.03, 
                      boxShadow: "0 10px 30px -8px rgba(0, 0, 0, 0.1)",
                      transition: { duration: 0.3 }
                    }}
                  >
                    {partner.name === "IFM" ? (
                      <Image
                        src="/images/logo-ifm.svg"
                        alt="IFM"
                        width={150}
                        height={150}
                        className="object-contain"
                      />
                    ) : partner.name === "Lenze" ? (
                      <Image
                        src="/images/logo-Lenze.svg"
                        alt="Lenze"
                        width={180}
                        height={55}
                        className="object-contain"
                      />
                    ) : partner.name === "Wago" ? (
                      <Image
                        src="/images/logo-WAGO.svg"
                        alt="Wago"
                        width={180}
                        height={65}
                        className="object-contain"
                      />
                    ) : (
                      <div className="font-bold text-4xl text-gray-800 hover:text-orange-500 transition-colors">{partner.name}</div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="text-center mt-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Button asChild variant="outline" className="hover:border-orange-500 hover:text-orange-500">
                  <Link href="/blog">
                    {t('button.readMore')}
                    <ArrowRight className="ml-1 h-4 w-4"/>
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-500 text-white" dir={dir}>
        <div className="flex justify-center w-full">
          <div className="w-full max-w-[1600px] px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Prêt à Commencer?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Contactez notre équipe dès aujourd'hui pour discuter de vos besoins en équipement industriel et découvrir
              comment nous pouvons aider votre entreprise à réussir.
            </p>
            <Button asChild size="lg" className="bg-white text-orange-500 hover:bg-gray-100">
              <Link href="/contact">
                {t('button.contact')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
