import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const projects = [
    {
        title: "FEMEBA – CRM y Sistemas Internos",
        role: "Analista y Desarrollador",
        tech: ["Laravel", "PHP", "ZendFramework", "BBDD"],
        description: "Desarrollo e implementación de soluciones personalizadas para FEMEBA.",
        url: null,
    },
    {
        title: "Sistema de Gestión Docente – UNaB",
        role: "Full Stack Developer",
        tech: ["Laravel", "Vue.js", "BBDD"],
        description: "Sistema institucional de gestión docente y asistencias.",
        url: "https://gestion.unab.edu.ar",
    },
    {
        title: "Prospectiva.site",
        role: "Full Stack Developer",
        tech: ["Laravel", "Procesamiento de Datos"],
        description: "Plataforma de análisis y visualización de grandes volúmenes de datos.",
        url: "https://prospectiva.site",
    },
    {
        title: "SOSMA",
        role: "Full Stack Developer",
        tech: ["PHP", "CodeIgniter", "Laravel", "Moodle"],
        description: "Desarrollo de sistemas internos, landing page y campus virtual.",
        url: "http://www.sosma.com.ar",
    },
    {
        title: "Ministerio de Turismo y Deportes",
        role: "Frontend Developer",
        tech: ["Laravel", "Blade", "Jetstream"],
        description: "Sistema de datos estadísticos y PUNA.",
        url: null,
    },
    {
        title: "Ministerio de Desarrollo Productivo",
        role: "Full Stack Developer",
        tech: ["Laravel", "Leaflet", "PDF Export"],
        description: "Sistema con geolocalización y reglas de negocio.",
        url: null,
    },
    {
        title: "Withmenetwork SL",
        role: "Full Stack Developer",
        tech: ["CodeIgniter", "PHP", "HTML5"],
        description: "Desarrollo de múltiples sitios web comerciales.",
        url: null,
    },
    {
        title: "TOTVS",
        role: "Frontend Developer",
        tech: ["Javascript", "FLUIG"],
        description: "Implementación de firma digital.",
        url: null,
    },
    {
        title: "AiVONi",
        role: "Frontend Developer",
        tech: ["WordPress", "HTML5", "CSS"],
        description: "Desarrollo de sitios inmobiliarios en Francia.",
        url: "https://agence-du-midi.com",
    },
];

export default function Portfolio() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {projects.map((project, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                >
                    <Card className="rounded-2xl shadow-md">
                        <CardContent className="p-4">
                            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                            <p className="text-sm text-gray-600 mb-1">{project.role}</p>
                            <div className="flex flex-wrap gap-1 mb-2">
                                {project.tech.map((tech, idx) => (
                                    <Badge key={idx} variant="outline">{tech}</Badge>
                                ))}
                            </div>
                            <p className="text-sm text-gray-700 mb-4">{project.description}</p>
                            {project.url && (
                                <Button asChild variant="link" className="p-0 h-auto">
                                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                                        Visitar proyecto ↗
                                    </a>
                                </Button>
                            )}
                        </CardContent>
                    </Card>
                </motion.div>
            ))}
        </div>
    );
}
