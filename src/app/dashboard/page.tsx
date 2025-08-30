'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WelcomeCard from '../components/dashboard/WelcomeCard';
import QuickActions from '../components/dashboard/QuickActions';
import RecentDrafts from '../components/dashboard/RecentDrafts';
import AISuggestions from '../components/dashboard/AISuggestions';

export default function DashboardPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease',
      once: true,
      anchorPlacement: 'top-bottom',
    });
  }, []);

  return (
    <div className='p-6 space-y-6'>
      <WelcomeCard data-aos="fade-up" />
      <QuickActions data-aos="fade-up" />
      <RecentDrafts data-aos="fade-up" />
      <AISuggestions data-aos="fade-up" />
    </div>
  );
}
