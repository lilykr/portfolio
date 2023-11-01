'use client';

import { httpsCallable } from 'firebase/functions';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

import { functions } from '@/services/firebase';

import { Input } from './atoms/Input';
import { ParagraphTitle } from './atoms/ParagraphTitle';
import { TextAreaInput } from './atoms/TextAreaInput';

type RequestData = {
  email: string;
  phoneNumber?: number;
  message: string;
  name: string;
  firstName: string;
};

export const Contact = () => {
  const t = useTranslations();
  const [name, setName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSendForm = async () => {
    console.log("sent")
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
  };

  return (
    <div
      className="px-[136px] flex flex-row pb-[310px] justify-center pt-[200px]"
      id="contact-section">
      <div>
        <ParagraphTitle title={t('contact')} className="laptop:pb-[53px]" />
        <p>{t('contact_me_start_new_project')}</p>
      </div>
      <div className="pl-[180px]">
        <div className="flex">
          <Input placeholder={t('name')} value={name} onChange={setName} />
          <Input
            placeholder={t('firstname')}
            className="ml-[80px]"
            value={firstName}
            onChange={setFirstName}
          />
        </div>
        <div className="flex pt-[74px]">
          <Input placeholder={t('email')} value={email} onChange={setEmail} />
          <Input
            placeholder={t('phoneNumber')}
            className="ml-[80px]"
            value={phone}
            onChange={setPhone}
          />
        </div>
        <TextAreaInput
          placeholder={t('message')}
          className="w-full mt-[74px]"
          value={message}
          onChange={setMessage}
        />
        <div className="pt-[100px] flex justify-center">
          <button
            className="px-[60px] py-[14px] bg-white text-black text-h4 leading-10"
            onClick={handleSendForm}>
            {t('send')}
          </button>
        </div>
      </div>
    </div>
  );
};
