'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from '../ui/sidebar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { useSession, logout } from '@/lib/auth/client';
import { ChevronRight, LogOut, MoreVertical } from 'lucide-react';
import { toast } from 'sonner';
import { Collapsible } from '@radix-ui/react-collapsible';
import { CollapsibleContent, CollapsibleTrigger } from '../ui/collapsible';
import { usePathname } from 'next/navigation';
import { Badge } from '../ui/badge';

const AppSidebarFooter = () => {
  const { isMobile } = useSidebar();
  const { data } = useSession();

  const handleLogout = async () => {
    await logout({
      fetchOptions: {
        onError: (ctx) => {
          toast(ctx.error.message);
        },
        onSuccess: () => {
          toast('You have been logged out. See you soon!');
        },
      },
    });
  };

  return (
    <SidebarFooter>
      <SidebarMenu>
        <SidebarMenuItem>
          {data?.user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton size='lg'>
                  <Avatar className='size-8 rounded-lg'>
                    <AvatarImage
                      src={data.user.image ?? undefined}
                      alt={data.user.name}
                    />
                    <AvatarFallback className='uppercase'>
                      {data.user.name.charAt(0) ?? '?'}
                    </AvatarFallback>
                  </Avatar>
                  <div className='grid flex-1 text-left text-sm leading-tight'>
                    <span className='truncate font-medium'>
                      {data.user.name}
                    </span>
                    <span className='text-muted-foreground truncate text-xs'>
                      {data.user.email}
                    </span>
                  </div>
                  <MoreVertical className='ml-auto size-4' />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className='w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg'
                side={isMobile ? 'bottom' : 'right'}
                align='end'
                sideOffset={4}
              >
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut /> Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <SidebarMenuButton asChild>
              <Link href='/login' className='font-semibold'>
                Login
              </Link>
            </SidebarMenuButton>
          )}
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
  );
};

const AppSidebarContent = () => {
  const pathname = usePathname();
  return (
    <SidebarContent>
      <SidebarGroup>
        <SidebarMenu>
          <Collapsible defaultOpen className='group/collapsible'>
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton isActive={pathname === '/card/create'}>
                  Create
                  <ChevronRight className='ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90' />
                </SidebarMenuButton>
              </CollapsibleTrigger>
            </SidebarMenuItem>
            <CollapsibleContent>
              <SidebarMenuSub>
                <SidebarMenuSubItem>
                  <SidebarMenuSubButton
                    asChild
                    isActive={pathname === '/card/create'}
                  >
                    <Link href='/card/create'>
                      Card
                      <Badge>Redesigned</Badge>
                    </Link>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
              </SidebarMenuSub>
            </CollapsibleContent>
          </Collapsible>
        </SidebarMenu>
      </SidebarGroup>
    </SidebarContent>
  );
};

type AppSidebarProps = React.ComponentProps<typeof Sidebar> & {};

export const AppSidebar: React.FC<AppSidebarProps> = ({ ...props }) => {
  return (
    <Sidebar variant='inset' {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuButton size='lg' asChild>
            <Link href='/'>
              <Image
                src='/assets/images/dh-cgl-logo.png'
                alt='Brand'
                height={30}
                width={30}
              />
              <div className='flex flex-col gap-1 leading-none'>
                <span className='font-eveleth-clean'>Daggerheart Brews</span>
              </div>
            </Link>
          </SidebarMenuButton>
        </SidebarMenu>
      </SidebarHeader>
      <AppSidebarContent />
      {/* <AppSidebarFooter /> */}
    </Sidebar>
  );
};
