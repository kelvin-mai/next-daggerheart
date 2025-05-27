import { AppSidebar } from '@/components/layout/sidebar';
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className='flex h-16 shrink-0 items-center gap-2'>
          <div className='flex items-center gap-2 px-4'>
            <SidebarTrigger />
          </div>
        </header>
        <main className='container'>{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
