import ServiceCard from "./ServiceCard";
// icons
import {
    Calculator, Atom, BookOpen, FlaskConical, Languages,
    Code2, PenTool, TrendingUp, Clock, HeartPulse, Headphones, Briefcase
} from "lucide-react";

const services = [
    {
        title: "IB Math",
        desc: "Comprehensive resources and practice for IB Math SL & HL.",
        icon: <Calculator size={40} className="text-gray-600 mb-4" />
    },
    {
        title: "IB Physics",
        desc: "Expert notes, videos, and guides for excelling in IB Physics.",
        icon: <Atom size={40} className="text-gray-600 mb-4" />
    },
    {
        title: "IB English",
        desc: "Essay guidance, sample papers, and language analysis.",
        icon: <BookOpen size={40} className="text-gray-600 mb-4" />
    },
    {
        title: "IB Chemistry",
        desc: "Structured notes and practice exams for chemistry topics.",
        icon: <FlaskConical size={40} className="text-gray-600 mb-4" />
    },
    {
        title: "IB Languages",
        desc: "Oral practice and writing resources for language acquisition.",
        icon: <Languages size={40} className="text-gray-600 mb-4" />
    },
    {
        title: "IB Computer Science",
        desc: "Programming challenges and revision notes.",
        icon: <Code2 size={40} className="text-gray-600 mb-4" />
    },
    {
        title: "IB Visual Arts",
        desc: "Portfolio tips and creative project guidance.",
        icon: <PenTool size={40} className="text-gray-600 mb-4" />
    },
    {
        title: "IB Economics",
        desc: "In-depth analysis, case studies, and exam strategies.",
        icon: <TrendingUp size={40} className="text-gray-600 mb-4" />
    },
    {
        title: "IB History",
        desc: "Historical events breakdown and essay writing support.",
        icon: <Clock size={40} className="text-gray-600 mb-4" />
    },
    {
        title: "IB Biology",
        desc: "Detailed notes and lab practical guides for IB Biology.",
        icon: <HeartPulse size={40} className="text-gray-600 mb-4" />
    },
    {
        title: "IB Psychology",
        desc: "Cognitive theories, experiments, and exam revision materials.",
        icon: <Headphones size={40} className="text-gray-600 mb-4" />
    },
    {
        title: "IB Business Management",
        desc: "Case studies, business theory, and exam preparation tips.",
        icon: <Briefcase size={40} className="text-gray-600 mb-4" />
    }
];

const OurServicesSection = () => {
    return (
        <section id="courses" className="bg-indigo-100 py-16 px-4 md:px-8">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl text-center font-extrabold text-gray-600 mb-4">Explore Our Courses</h2>
                <p className="mt-3 text-xl font-semibold text-gray-400 max-w-3xl text-center mx-auto mb-12">
                    All IB subjects, resources, and support in one place.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((s, i) => (
                        <ServiceCard key={i} {...s} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default OurServicesSection;