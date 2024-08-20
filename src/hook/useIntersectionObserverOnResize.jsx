import { useEffect } from "react";

function useIntersectionObserverOnResize(elementId, threshold = 0.1) {
  useEffect(() => {
    const element = document.getElementById(elementId);

    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold }
    );

    observer.observe(element);

    const handleResize = () => {
      // Podrías ajustar tu lógica de redimensionamiento aquí
      observer.observe(element); // Re-observar el elemento tras redimensionar si es necesario
    };

    window.addEventListener("resize", handleResize);

    return () => {
      observer.unobserve(element);
      window.removeEventListener("resize", handleResize);
    };
  }, [elementId, threshold]);
}

export default useIntersectionObserverOnResize;
