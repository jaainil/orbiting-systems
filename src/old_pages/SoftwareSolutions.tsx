/* stylelint-disable */
import { ServicePageLayout } from "@/components/ServicePageLayout";
import { Code2, Server, Building2 } from "lucide-react";

const SoftwareSolutions = () => {
  return (
    <ServicePageLayout
      title="Software Solution"
      description="Tailored Tech, Real Results. Custom Software Solutions Built for Your Unique Business Needs."
      heroBadge="Software Solution"
      heroTitle="Tailored Tech, Real Results"
      heroSubtitle="Smart. Scalable. Secure."
      heroDescription="We deliver custom software solutions aligned with your business goals, improving efficiency and growth. Our secure, scalable applications are built with state-of-the-art technologies to solve real-world problems."
      servicesTitle="Our Custom Software Development Services"
      servicesDescription="Starting with enterprise software development, cloud applications, and AI-enabled tools, we help you build software that improves operations and allows for digital transformation."
      services={[
        {
          id: "01",
          icon: Code2,
          title: "AI-Friendly Software Development",
          desc: "We help you build intelligent software using AI that automates workflows, enhances decision-making, and provides intelligent user experiences.",
          gradient: "from-emerald-500/20 to-teal-500/20",
          iconColor: "text-emerald-600",
        },
        {
          id: "02",
          icon: Server,
          title: "Large-Scale App Development",
          desc: "We design and develop scalable, robust software systems that efficiently handle complex business processes with lots of users.",
          gradient: "from-blue-500/20 to-indigo-500/20",
          iconColor: "text-blue-600",
        },
        {
          id: "03",
          icon: Building2,
          title: "Enterprise Application Development",
          desc: "We build robust, secure, customized enterprise applications that enhance workflow processes, foster collaboration, and support the long-term growth of the enterprise.",
          gradient: "from-orange-500/20 to-amber-500/20",
          iconColor: "text-orange-600",
        },
      ]}
      techStack={[
        "Bootstrap",
        "Tailwind CSS",
        "AngularJS",
        "ReactJS",
        "jQuery",
        "Figma Software",
        "Adobe XD",
        "Adobe Photoshop",
        "Sketch Software",
      ]}
    />
  );
};

export default SoftwareSolutions;
