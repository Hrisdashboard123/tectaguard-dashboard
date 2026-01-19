import { motion } from "framer-motion";
import authHero from "@/assets/auth-hero.jpg";

interface AuthVisualProps {
  title: string;
  subtitle: string;
}

export const AuthVisual = ({ title, subtitle }: AuthVisualProps) => {
  return (
    <div className="relative hidden lg:flex lg:w-1/2 items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={authHero}
          alt="AI Security Visualization"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Scan Line Effect */}
      <div className="scan-line" />

      {/* Content */}
      <div className="relative z-10 max-w-lg px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Logo */}
          <div className="mb-8">
            <motion.div
              className="inline-flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center border border-primary/30">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-7 h-7 text-primary"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <span className="text-2xl font-heading font-bold text-foreground">
                TectaPro
              </span>
            </motion.div>
          </div>

          {/* Text Content */}
          <motion.h1
            className="text-3xl xl:text-4xl font-heading font-bold text-foreground mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {title}
          </motion.h1>

          <motion.p
            className="text-lg text-muted-foreground font-body"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {subtitle}
          </motion.p>

          {/* Floating Elements */}
          <motion.div
            className="mt-12 flex gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
              <span>256-bit Encryption</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span>AI-Powered</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
    </div>
  );
};
