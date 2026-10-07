import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Section, SectionHeader } from '@/components/ui/section';
import { Textarea } from '@/components/ui/textarea';
import { useI18n } from '@/i18n';
import PublicLayout from '@/layouts/public-layout';
import { cn } from '@/lib/utils';
import { Head, Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, MapPin, MessageSquare } from 'lucide-react';
import { FormEvent, useState } from 'react';

export default function Contact() {
    const { t } = useI18n();
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const res = await fetch('/messages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || '',
                },
                body: JSON.stringify(formData),
            });
            if (res.ok) {
                setStatus({ type: 'success', message: t.contact.form.status.success });
                setFormData({ name: '', email: '', message: '' });
            } else {
                throw new Error('Failed to send');
            }
        } catch {
            setStatus({ type: 'error', message: t.contact.form.status.error });
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactInfo = [
        {
            icon: Mail,
            title: t.contact.info.items.email,
            value: 'angel.leonardo.bianco@gmail.com',
            href: 'mailto:angel.leonardo.bianco@gmail.com',
            color: 'text-blue-400',
        },
        {
            icon: Mail,
            title: t.contact.info.items.academicEmail,
            value: 'angel.bianco@unab.edu.ar',
            href: 'mailto:angel.bianco@unab.edu.ar',
            color: 'text-purple-400',
        },
        { icon: MapPin, title: t.contact.info.items.location, value: 'Buenos Aires, Argentina', href: null, color: 'text-emerald-400' },
    ] as const;

    const socialLinks = [
        { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/angel-leonardo-bianco/', color: 'text-blue-400' },
        { icon: Github, label: 'GitHub', href: 'https://github.com/alyohara', color: 'text-fg' },
    ] as const;

    return (
        <PublicLayout>
            <Head title={t.contact.head.title} />

            {/* Hero */}
            <section className="relative py-20 lg:py-28">
                <div className="container-main">
                    <div className="max-w-3xl">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-6">
                            <span className="bg-accent-muted border-accent-border text-accent inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium">
                                {t.contact.hero.badge}
                            </span>
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-display text-fg mb-6"
                        >
                            {t.contact.hero.title}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-h3 text-fg-muted"
                        >
                            {t.contact.hero.subtitle}
                        </motion.p>
                    </div>
                </div>
            </section>

            <Section>
                <div className="grid gap-8 lg:grid-cols-3">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-1"
                    >
                        <SectionHeader title={t.contact.info.title} description={t.contact.info.description} />
                        <div className="space-y-6">
                            {contactInfo.map((item) => (
                                <div key={item.title} className="bg-bg-elevated border-border flex items-start gap-4 rounded-xl border p-4">
                                    <div
                                        className={cn(
                                            'bg-accent-muted inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg',
                                            item.color,
                                        )}
                                    >
                                        <item.icon className="text-accent size-5" aria-hidden="true" />
                                    </div>
                                    <div>
                                        <h4 className="text-label text-fg font-semibold">{item.title}</h4>
                                        {item.href ? (
                                            <a href={item.href} className="text-body text-fg-muted hover:text-accent mt-1 block transition-colors">
                                                {item.value}
                                            </a>
                                        ) : (
                                            <p className="text-body text-fg-muted mt-1">{item.value}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Social */}
                        <div className="border-border border-t pt-6">
                            <h4 className="text-label text-fg mb-4 font-semibold">{t.contact.info.connect}</h4>
                            <div className="flex gap-3">
                                {socialLinks.map((item) => (
                                    <a
                                        key={item.label}
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={cn(
                                            'bg-bg-elevated border-border text-fg-muted hover:text-accent hover:border-accent group inline-flex h-10 w-10 items-center justify-center rounded-lg border transition-colors',
                                            item.color,
                                        )}
                                    >
                                        <item.icon className="size-5 transition-transform group-hover:scale-110" aria-hidden="true" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2"
                    >
                        <SectionHeader title={t.contact.form.title} />
                        <Card variant="bordered">
                            <CardContent className="p-6 md:p-8">
                                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                                    <div className="grid gap-4 sm:grid-cols-2">
                                        <div>
                                            <Label htmlFor="name" className="mb-2">
                                                {t.contact.form.fields.name.label}
                                            </Label>
                                            <Input
                                                id="name"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                placeholder={t.contact.form.fields.name.placeholder}
                                                required
                                                disabled={isSubmitting}
                                                className="w-full"
                                            />
                                        </div>
                                        <div>
                                            <Label htmlFor="email" className="mb-2">
                                                {t.contact.form.fields.email.label}
                                            </Label>
                                            <Input
                                                id="email"
                                                type="email"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                placeholder={t.contact.form.fields.email.placeholder}
                                                required
                                                disabled={isSubmitting}
                                                className="w-full"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <Label htmlFor="message" className="mb-2">
                                            {t.contact.form.fields.message.label}
                                        </Label>
                                        <Textarea
                                            id="message"
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            placeholder={t.contact.form.fields.message.placeholder}
                                            rows={6}
                                            required
                                            disabled={isSubmitting}
                                            className="w-full"
                                        />
                                    </div>
                                    {status && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className={cn(
                                                'flex items-start gap-3 rounded-lg p-4 text-sm',
                                                status.type === 'success'
                                                    ? 'border border-green-500/20 bg-green-500/10 text-green-400'
                                                    : 'border border-red-500/20 bg-red-500/10 text-red-400',
                                            )}
                                        >
                                            <div className="flex-1">{status.message}</div>
                                        </motion.div>
                                    )}
                                    <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
                                        {isSubmitting ? t.contact.form.sending : t.contact.form.submit}
                                        <ArrowRight className="ml-2 size-4" aria-hidden="true" />
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>

                        {/* Alternative contact */}
                        <div className="bg-bg-muted border-border mt-8 rounded-xl border p-6">
                            <p className="text-body text-fg-muted text-center">
                                {t.contact.form.preferEmail}{' '}
                                <a href="mailto:angel.leonardo.bianco@gmail.com" className="text-accent font-medium hover:underline">
                                    angel.leonardo.bianco@gmail.com
                                </a>
                            </p>
                        </div>
                    </motion.div>
                </div>
            </Section>

            {/* CTA */}
            <Section variant="muted">
                <div className="container-narrow text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-bg-elevated border-border rounded-2xl border p-12 md:p-16"
                    >
                        <MessageSquare className="text-accent mx-auto mb-4 size-12" aria-hidden="true" />
                        <h2 className="text-h1 mb-4">{t.contact.cta.title}</h2>
                        <p className="text-body text-fg-muted mx-auto mb-8 max-w-xl">{t.contact.cta.description}</p>
                        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <Button asChild size="xl">
                                <Link href="mailto:angel.leonardo.bianco@gmail.com?subject=Project%20Inquiry">
                                    {t.contact.cta.startConversation}
                                    <ArrowRight className="ml-2 size-4" aria-hidden="true" />
                                </Link>
                            </Button>
                            <Button asChild variant="outline" size="xl">
                                <Link href="/projects" prefetch>
                                    {t.contact.cta.viewWork}
                                </Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </Section>
        </PublicLayout>
    );
}
