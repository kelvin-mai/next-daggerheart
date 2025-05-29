import { BuyMeCofffeeBanner } from '@/components/common';
import { ThemeToggle } from '@/components/common/theme-toggle';
import { AppSidebar, Footer } from '@/components/layout';
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
          <div className='flex w-full items-center justify-between px-4'>
            <SidebarTrigger />
            <ThemeToggle />
          </div>
        </header>
        <main className='container'>{children}</main>
        <section className='container mb-4'>
          <BuyMeCofffeeBanner />
        </section>
        <Footer />
      </SidebarInset>
    </SidebarProvider>
  );
}
