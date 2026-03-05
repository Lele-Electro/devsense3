declare module 'nodemailer' {
  export interface TransportOptions {
    host?: string;
    port?: number;
    secure?: boolean;
    auth?: {
      user?: string;
      pass?: string;
    };
    jsonTransport?: boolean;
  }

  export interface MailOptions {
    from: string;
    to: string;
    replyTo?: string;
    subject: string;
    html: string;
    text: string;
  }

  export interface Transport {
    sendMail(options: MailOptions): Promise<any>;
  }

  export function createTransport(options: TransportOptions): Transport;
}
