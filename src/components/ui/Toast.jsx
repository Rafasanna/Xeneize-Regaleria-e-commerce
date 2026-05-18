import { CheckCircle2 } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export function Toast({ message }) {
  return (
    <AnimatePresence>
      {message ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-5 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-white shadow-soft"
        >
          <CheckCircle2 className="h-4 w-4 text-blush-300" />
          {message}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
