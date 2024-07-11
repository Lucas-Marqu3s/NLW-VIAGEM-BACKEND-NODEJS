import nodemail from 'nodemailer'

export async function getMailClient() {
  const account = await nodemail.createTestAccount()

  const transporter = nodemail.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
      user: account.user,
      pass: account.pass,
    },
  })

  return transporter
}
