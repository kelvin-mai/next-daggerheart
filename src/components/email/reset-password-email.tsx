import * as React from 'react';
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';

import { getBaseUrl } from '@/lib/utils';

type ResetPasswordEmailProps = {
  user: {
    name: string;
    email: string;
  };
  url: string;
};

export const ResetPasswordEmail: React.FC<ResetPasswordEmailProps> = ({
  user,
  url,
}) => {
  return (
    <Tailwind>
      <Html>
        <Head />
        <Preview>Reset your password</Preview>
        <Body className='font-sans'>
          <Container>
            <Section>
              <Img
                src={`${getBaseUrl()}/assets/images/dh-cgl-logo.png`}
                width={64}
                alt='Logo'
                className='mx-auto'
              />
            </Section>
            <Heading>Reset your password</Heading>
            <Text>Hello {user.name}</Text>
            <Text>
              You requested a link to reset your password! Please click the
              button below to reset your password.
            </Text>
            <Section className='flex justify-center'>
              <Button
                className='rounded-lg bg-[#38227b] px-4 py-2 text-[#f3c267]'
                href={url}
              >
                Reset Password
              </Button>
            </Section>
            <Text>
              This email was generated because your email has been used to
              register for an account on DaggerheartBrews. If this was not you,
              please ignore this email.
            </Text>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
};
