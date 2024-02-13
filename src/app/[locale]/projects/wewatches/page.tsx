import { ProjectPage } from '@/components/ProjectPage';

import laptop from '../../../../../assets/images/wewatches-laptop.png';
import phone from '../../../../../assets/images/wewatches-phone.png';

export default function WeWatches() {
  return (
    <ProjectPage
      projectDetails="Développeuse au sein d’une petite ESN, j’ai participé au développement d’une marketplace de montres de luxe et des back office associés."
      highlights="highlights: travail en équipe, exigence UI/UX très élevée, back office avec react admin"
      iconNames={[
        'Nextjs',
        'Typescript',
        'Graphql',
        'MongoDb',
        'Back4App',
        'Postman',
        'StyledComponents',
        'Storybook',
        'Jira',
      ]}
      projectTitle="WeWatches"
      websiteLink="https://wewatches.com/feed"
      altImageLaptop="laptop with wewatches website"
      imageSrcLaptop={laptop}
      imageSrcPhone={phone}
      altImagePhone="phone with wewatches website"
    />
  );
}
