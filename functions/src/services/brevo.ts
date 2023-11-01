const SibApiV3Sdk = require('sib-api-v3-typescript');

const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

const { apiKey } = apiInstance.authentications;
apiKey.apiKey = process.env.BREVO_API_KEY;

const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

// eslint-disable-next-line import/prefer-default-export
export const brevo = {
  apiInstance,
  sendSmtpEmail,
};
