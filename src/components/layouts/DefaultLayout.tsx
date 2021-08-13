import Footer from "components/footer/Footer";
import Navbar from "components/navbar/Navbar";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";

interface DefaultLayoutProps {}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <div
      className="w-screen min-h-screen relative
      bg-[#fafafa] flex flex-col"
    >
     <Navbar />

        <AnimatePresence exitBeforeEnter>
          <AnimateSharedLayout>
              <div className="container mx-auto px-4">
            {children}
                </div>
          </AnimateSharedLayout>
        </AnimatePresence>

      <div className="mt-auto mb-20" />
<Footer />
    </div>
  );
};

export default DefaultLayout;
