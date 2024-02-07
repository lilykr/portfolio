/* eslint-disable max-lines-per-function */
'use client';

import { httpsCallable } from 'firebase/functions';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

import { Input } from '@/components/atoms/Input';
import { ParagraphTitle } from '@/components/atoms/ParagraphTitle';
import { TextAreaInput } from '@/components/atoms/TextAreaInput';
import { RSButton } from '@/components/molecules/RSButton';
import { functions } from '@/services/firebase';

type RequestData = {
  email: string;
  phoneNumber?: number;
  message: string;
  name: string;
  firstName: string;
};

export default function Contact() {
  const t = useTranslations();
  const [name, setName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState<{
    name: boolean;
    firstName: boolean;
    email: boolean;
    message: boolean;
  }>({ email: false, firstName: false, message: false, name: false });

  const handleSendForm = async () => {
    setError({ email: false, firstName: false, message: false, name: false });

    if (!email || !firstName || !message || !name) {
      setError((prev) => ({
        ...prev,
        email: !email ? true : false,
        name: !name ? true : false,
        firstName: !firstName ? true : false,
        message: !message ? true : false,
      }));
    }

    const sendMessage = httpsCallable(functions, 'sendEmail');
    await sendMessage({
      message,
      name,
      firstName,
      email,
      phone,
      phoneNumber: Number(phone),
    } as RequestData);
    setName('');
    setFirstName('');
    setEmail('');
    setPhone('');
    setMessage('');
    setError({ email: false, firstName: false, message: false, name: false });
  };

  return (
    <div
      className="relative z-10 h-[calc(100dvh-23px)] flex flex-col laptop:flex-row laptop:justify-center laptop:items-start items-center laptop:pt-[calc((100dvh)/3-50px)] pt-[calc((100dvh)/3-100px)] laptop:px-16 px-8"
      id="contact-section">
      <div>
        <ParagraphTitle
          title={t('contact')}
          className="laptop:pb-[53px] text-center laptop:text-left"
        />
        <p className="pb-5 w-[290px] laptop:w-fit text-center">
          {t('contact_me_start_new_project')}
        </p>
        <div className="flex flex-row justify-center">
          <RSButton iconName="Linkedin" linktoRS="https://www.linkedin.com/in/lisaloukara" />
          <RSButton iconName="Malt" linktoRS="https://www.malt.fr/profile/lisaloukara" />
        </div>
      </div>
      <div className="laptop:pl-[180px] w-full px-8">
        <div className="flex laptop:flex-row flex-col items-center mt-10 w-full">
          <Input placeholder={t('name')} value={name} onChange={setName} error={error.name} />
          <Input
            placeholder={t('firstname')}
            className="laptop:ml-[80px] mt-5 laptop:mt-0"
            value={firstName}
            onChange={setFirstName}
            error={error.firstName}
          />
        </div>
        <div className="flex laptop:pt-[74px] laptop:flex-row flex-col items-center mt-5">
          <Input placeholder={t('email')} value={email} onChange={setEmail} error={error.email} />
          <Input
            placeholder={t('phoneNumber')}
            className="laptop:ml-[80px] mt-5 laptop:mt-0"
            value={phone}
            onChange={setPhone}
          />
        </div>
        <TextAreaInput
          placeholder={t('message')}
          className="w-full laptop:mt-[74px] mt-5"
          value={message}
          onChange={setMessage}
          error={error.message}
        />
        <div className="laptop:pt-[60px] mt-5 flex justify-center">
          <button
            className="laptop:px-[60px] laptop:py-[14px] px-[20px] py-[6px] bg-white text-black text-h4 leading-10"
            onClick={handleSendForm}>
            <p className="laptop:text-[28px] text-body20 font-bold uppercase">{t('send')}</p>
          </button>
        </div>
      </div>
    </div>
  );
}
