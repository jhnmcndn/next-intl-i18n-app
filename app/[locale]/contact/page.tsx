'use client'

import {useRouter} from "next/navigation";

const ContactPage = () => {
  const router = useRouter();
  return (
    <div style={{fontSize: '50px'}}>
      Contact
      <div style={{fontSize: '50px'}} onClick={() => router.push('/')}>Back</div>
    </div>
  );
};

export default ContactPage;