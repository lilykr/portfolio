import { ProjectPage } from '@/components/ProjectPage';

import laptop from '../../../../../assets/images/paratennis-laptop.png';
import phone from '../../../../../assets/images/paratennis-phone.png';

export default function Paratennis() {
  return (
    <ProjectPage
      projectDetails="Développeuse au sein d’un studio de création, j’ai pu participer à différents projets (web et mobile). Le plus gros projet a été un projet mené avec la FFT (fédération française de tennis) pour leur site internet destiné aux joueurs handicapés.
      Après quelques semaines, j’étais en autonomie avec le Product Owner de la FFT."
      highlights="highlights: travail en équipe, gestion d’équipe, project management "
      iconNames={[
        'React',
        'ReactNative',
        'Expo',
        'Prismic',
        'Nextjs',
        'Typescript',
        'Graphql',
        'MongoDb',
        'Nodejs',
        'Postman',
        'StyledComponents',
        'Storybook',
        'Jira',
        'Jest',
      ]}
      projectTitle="Paratennis"
      websiteLink="https://paratennis.fft.fr"
      altImageLaptop="laptop with paratennis website"
      imageSrcLaptop={laptop}
      imageSrcPhone={phone}
      altImagePhone="phone with paratennis website"
    />
  );
}
