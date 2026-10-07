import { about } from './en/about';
import { attendance } from './en/attendance';
import { blog } from './en/blog';
import { catedras } from './en/catedras';
import { contact } from './en/contact';
import { footer } from './en/footer';
import { header } from './en/header';
import { home } from './en/home';
import { projects } from './en/projects';

export const en = {
    header,
    footer,
    home,
    about,
    projects,
    catedras,
    contact,
    blog,
    attendance,
};

export type Dictionary = typeof en;
