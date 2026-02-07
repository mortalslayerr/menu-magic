import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  QrCode,
  Smartphone,
  BarChart3,
  Palette,
  ArrowRight,
  Sparkles,
  Globe,
  Shield,
} from 'lucide-react';

const features = [
  { icon: QrCode, title: 'QR Code Menus', desc: 'Customers scan and browse — no app download needed.' },
  { icon: Smartphone, title: 'Mobile-First', desc: 'Gorgeous glassmorphic design built for phones.' },
  { icon: BarChart3, title: 'Analytics', desc: 'Track views, clicks, and popular items in real time.' },
  { icon: Palette, title: 'Custom Themes', desc: 'Match your restaurant brand with full theme control.' },
  { icon: Globe, title: 'Multi-Language', desc: 'Ready for global audiences with i18n support.' },
  { icon: Shield, title: 'Multi-Tenant SaaS', desc: 'Manage multiple restaurants under one account.' },
];

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="glass sticky top-0 z-40 flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary">
            <QrCode className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="font-display text-xl font-bold text-foreground">QR-Menus</span>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate('/admin')}
            className="font-body text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Admin Demo
          </button>
          <button
            onClick={() => navigate('/r/saffron-sage')}
            className="btn-hero rounded-lg px-4 py-2 font-body text-sm font-semibold"
          >
            Live Demo
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-24 text-center sm:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 mx-auto max-w-3xl"
        >
          <div className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="font-body text-sm font-medium text-primary">
              The future of restaurant menus
            </span>
          </div>
          <h1 className="font-display text-5xl font-bold leading-tight text-foreground sm:text-6xl lg:text-7xl">
            Digital Menus,{' '}
            <span className="text-gradient">Delightful</span>{' '}
            Experiences
          </h1>
          <p className="mx-auto mt-6 max-w-xl font-body text-lg text-muted-foreground">
            Create stunning QR code menus for your restaurant in minutes.
            Mobile-first, blazing fast, and beautifully designed.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => navigate('/r/saffron-sage')}
              className="btn-hero flex items-center gap-2 rounded-2xl px-8 py-4 font-body text-base font-semibold"
            >
              View Live Demo
              <ArrowRight className="h-5 w-5" />
            </button>
            <button
              onClick={() => navigate('/admin')}
              className="glass-card flex items-center gap-2 rounded-2xl px-8 py-4 font-body text-base font-semibold text-foreground transition-all hover:shadow-md"
            >
              Try Admin Panel
            </button>
          </div>
        </motion.div>

        {/* Ambient blobs */}
        <div className="pointer-events-none absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-32 right-1/4 h-96 w-96 rounded-full bg-accent/10 blur-[120px]" />
      </section>

      {/* Features */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-5xl">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center font-display text-3xl font-bold text-foreground sm:text-4xl"
          >
            Everything you need
          </motion.h2>
          <p className="mx-auto mt-3 max-w-lg text-center font-body text-muted-foreground">
            A complete SaaS platform to digitize your restaurant menu experience.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feat, i) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card group p-6 transition-all hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <feat.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {feat.title}
                </h3>
                <p className="mt-2 font-body text-sm text-muted-foreground">
                  {feat.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl rounded-3xl bg-foreground px-8 py-16 text-center"
        >
          <h2 className="font-display text-3xl font-bold text-background sm:text-4xl">
            Ready to go digital?
          </h2>
          <p className="mx-auto mt-4 max-w-md font-body text-background/60">
            Join hundreds of restaurants already using QR-Menus to delight their customers.
          </p>
          <button
            onClick={() => navigate('/r/saffron-sage')}
            className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-primary px-8 py-4 font-body text-base font-semibold text-primary-foreground shadow-lg transition-all hover:shadow-xl"
          >
            Get Started Free
            <ArrowRight className="h-5 w-5" />
          </button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-8">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <div className="flex items-center gap-2">
            <QrCode className="h-5 w-5 text-primary" />
            <span className="font-display text-sm font-semibold text-foreground">QR-Menus</span>
          </div>
          <p className="font-body text-xs text-muted-foreground">
            © 2026 QR-Menus. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
