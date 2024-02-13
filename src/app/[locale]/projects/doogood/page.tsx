import { ProjectPage } from '@/components/ProjectPage';

import laptop from '../../../../../assets/images/doogood-laptop.png';
import phone from '../../../../../assets/images/doogood-phone.png';

export default function Doogood() {
  return (
    <ProjectPage
      projectDetails="J’ai designé et développé un site web ayant pour but de mettre en relation des volontaires avec des associations."
      highlights="highlights: mener un projet de bout en bout: du design au déploiement. Travailler seule sur mon premier projet, faire le déploiement du site."
      iconNames={['React', 'Typescript', 'Keystone', 'MongoDb', 'Figma', 'Postman', 'Graphql']}
      projectTitle="Doogood"
      websiteLink="https://doo-good.fr/"
      altImageLaptop="laptop with doogood website"
      imageSrcLaptop={laptop}
      imageSrcPhone={phone}
      altImagePhone="phone with doogood website"
    />
  );
}
