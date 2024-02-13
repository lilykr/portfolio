import { ProjectPage } from '@/components/ProjectPage';

import phone1 from '../../../../../assets/images/bobo1.png';
import phone2 from '../../../../../assets/images/bobo2.png';

export default function Doogood() {
  return (
    <ProjectPage
      projectDetails="J’ai développé cette application mobile de recherche de bonnes adresses (restaurants, bars, cafés...) éthiques et triées sur le volet par les utilisateurs."
      highlights="highlights: associer deux passions: le code et la “bonne bouffe”, découvrir le déploiement sur les stores (appstore, playstore)"
      iconNames={['ReactNative', 'Typescript', 'Expo', 'Firebase', 'ReactQuery', 'Jest']}
      projectTitle="Bobo"
      imageSrcPhone2={phone2}
      imageSrcPhone={phone1}
      altImagePhone="phone 1 with bobo app"
      altImagePhone2="phone 2 with bobo app"
    />
  );
}
