import { motion } from "framer-motion";
import { useEffect, useRef } from "react"; 
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import resume from "../../Deloitte_Resume.pdf";

const Hero = () => {
  const textRef = useRef(null);
  const typedRef = useRef(null);

  useEffect(() => {
    const initTyped = () => {
      // Destroy any existing instance just in case
      if (typedRef.current) {
        typedRef.current.destroy();
      }

      if (window.Typed && textRef.current) {
        typedRef.current = new window.Typed(textRef.current, {
          strings: ['Front-Developer', 'Web-Designer', 'Youtuber'],
          typeSpeed: 70,
          backSpeed: 70,
          backDelay: 1000,
          startDelay: 1000,
          loop: true,
          showCursor: true, 
          cursorChar: '|',
        });
        
        // Dynamically style the cursor if it exists
        const cursor = document.querySelector('.typed-cursor');
        if (cursor) {
          cursor.style.color = '#915EFF';
          cursor.style.animation = 'blink 0.75s step-end infinite';
        }
      }
    };

    if (!window.Typed) {
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js';
      script.async = true;
      script.onload = initTyped;
      document.head.appendChild(script);
    } else {
      initTyped();
    }

    // Cleanup function that destroys the Typed instance to fix blinking/hanging
    return () => {
      if (typedRef.current) {
        typedRef.current.destroy();
        typedRef.current = null;
      }
    };
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`absolute inset-0 top-[100px] sm:top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 z-10 pointer-events-none`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Shreyas</span>
          </h1>

          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I want to be <span className="text-[#915EFF]" ref={textRef}></span>
          </p>
          
          <div className="btn-box pointer-events-auto">
            <a href={resume} download="Deloitte_Resume.pdf" className="text-white hover:text-[#915EFF] transition-colors">
              Hire Me
            </a>
            <a href="#contact">Let's Talk</a>
          </div>

          <div className="flex gap-4 mt-6 pointer-events-auto">
            <a href="https://www.instagram.com/shreyasmahajan844/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#915EFF] transition-colors">
              <i className='bx bxl-instagram text-[32px] sm:text-[40px]'></i>
            </a>
            <a href="https://wa.me/7507075722" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#915EFF] transition-colors">
              <i className='bx bxl-whatsapp text-[32px] sm:text-[40px]'></i>
            </a>
            <a href="https://www.linkedin.com/in/shreyas-mahajan07/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#915EFF] transition-colors">
              <i className='bx bxl-linkedin-square text-[32px] sm:text-[40px]'></i>
            </a>
          </div>
        </div>

      </div>

      <ComputersCanvas />
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

// Export your variables (currently unused in this code, so make sure to define them if needed)
export const services = ['Web Development', 'UI/UX Design', 'SEO Optimization'];
export const technologies = ['React', 'Node.js', 'CSS', 'JavaScript'];
export const experiences = ['3 years in Web Development', '2 years in UI/UX Design'];
export const testimonials = ['"Great Developer!" - Client A', '"Highly Recommend!" - Client B'];
export const projects = ['Project 1', 'Project 2', 'Project 3'];

export default Hero;