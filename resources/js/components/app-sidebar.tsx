import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { BookOpen, Folder, Inbox, LayoutGrid, Newspaper, Users } from 'lucide-react';
import AppLogo from './app-logo';

const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        url: '/dashboard',
        icon: LayoutGrid,
    },
    {
        title: 'Messages',
        url: '/dashboard/messages',
        icon: Inbox,
    },
    {
        title: 'Posts',
        url: '/dashboard/posts',
        icon: Newspaper,
    },
    {
        title: 'Attendances',
        url: '/dashboard/attendances',
        icon: Users,
    },
    // {
    //     title: 'Users',
    //     url: '/dashboard/users',
    //     icon: LayoutGrid,
    // },
    // {
    //     title: 'Settings',
    //     url: '/dashboard/settings',
    //     icon: LayoutGrid,
    //},
];

const footerNavItems: NavItem[] = [
    {
        title: 'Repository',
        url: 'https://github.com/alyohara/personalPage',
        icon: Folder,
    },
];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/dashboard" prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
