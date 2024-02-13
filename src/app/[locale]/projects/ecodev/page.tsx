import { ProjectPage } from '@/components/ProjectPage';

import ecodevLaptop from '../../../../../assets/images/ecodev-laptop.png';
import ecodevPhone from '../../../../../assets/images/ecodev-phone.png';

export default function Ecodev() {
  return (
    <ProjectPage
      highlights="highlights: gestion du real time avec firebase, génération de PDF, synchronisation de calendriers, mise en place d’un système de paiement avec stripe, envois de mails, cloud functions, cron tasks"
      iconNames={[
        'Nextjs',
        'Typescript',
        'Firebase',
        'Tailwind',
        'Stripe',
        'Brevo',
        'Netlify',
        'Storybook',
        'Trello',
      ]}
      projectDetails="J’ai développé l’intégralité d’une webapp en Nextjs destinée à animer des séances de codéveloppement professionnel au sein d’entreprises."
      projectTitle="eCodev"
      websiteLink="https://ecodevbox.fr/"
      altImageLaptop="laptop with ecodev website"
      imageSrcLaptop={ecodevLaptop}
      imageSrcPhone={ecodevPhone}
      altImagePhone="phone with ecodev website"
    />
  );
}
