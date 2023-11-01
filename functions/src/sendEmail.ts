import { brevo } from './services/brevo';
import { firebase } from './services/firebase';

export type RequestData = {
  email: string;
  phoneNumber?: number;
  message: string;
  name: string;
  firstName: string;
};

export const sendEmail = firebase.functions.https.onCall(async (request: { data: RequestData }) => {
  firebase.functions.logger.log('SEND EMAIL');
  firebase.functions.logger.log('>>>>>>>> request', request);

  const { sendSmtpEmail } = brevo;

  sendSmtpEmail.subject = 'Prise de contact';
  sendSmtpEmail.htmlContent = `<html><body>
  <p>test
 </p>
  </body></html>`;
  // sendSmtpEmail.sender = { name: 'eCodexbox', email: 'no-reply@ecodevbox.fr' };
  sendSmtpEmail.to = 'lisa.lou.kara@gmail.com';
  sendSmtpEmail.headers = { 'Some-Custom-Name': 'unique-id-1234' };
  sendSmtpEmail.params = { parameter: 'My param value', subject: 'New Subject' };

  // eslint-disable-next-line promise/catch-or-return, promise/prefer-await-to-then
  brevo.apiInstance.sendTransacEmail(sendSmtpEmail).then(
    // eslint-disable-next-line promise/always-return
    (data: unknown) => {
      firebase.functions.logger.log('sendSmtpEmail', sendSmtpEmail);
      firebase.functions.logger.log(
        `API called successfully. Returned data: ${JSON.stringify(data)}`,
      );
    },
    (error: unknown) => {
      firebase.functions.logger.log(error);
    },
  );

  return 'ok';
});
