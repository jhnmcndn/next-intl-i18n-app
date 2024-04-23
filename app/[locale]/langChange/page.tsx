'use client'

import {useRouter} from "next/navigation";

const LanguageChange = () => {
  const router = useRouter();
  return (
    <div style={{fontSize: '50px'}}>
      Language Change
      <div style={{fontSize: '50px'}} onClick={() => router.push('/')}>Back</div>
    </div>
  );
};

export default LanguageChange;