'use client'

import { useRouter } from "next/navigation"
import { useTranslations } from "next-intl";

export default function Home() {
  // const intl = useTranslations('Index');
  const router = useRouter();
  return (
    <main style={{fontSize: '50px'}}>
      <span onClick={() => router.push('/about')}>About Us</span>
      {' '}
      <span onClick={() => router.push('/contact')}>Contact Us</span>
      {' '}
      <span onClick={() => router.push('/langChange')}>Language Change</span>
    </main>
  );
}
