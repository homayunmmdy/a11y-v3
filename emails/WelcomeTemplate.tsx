import React from "react";
import {
  Html,
  Body,
  Container,
  Tailwind,
  Head,
  Text,
  Link,
  Preview,
} from "@react-email/components";

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome aboard!</Preview>
      <Tailwind>
        <Body className="bg-white">
          <Container>
            <Head>
              <Text className="font-bold text-3xl">Welcome {name}</Text>
            </Head>
            <Text className="font-mono">
              Welcome aboard! We are thrilled to have you join the My App
              family. Your presence adds tremendous value to our team, and we
              are eager to embark on this journey together.
            </Text>
            <Link href="/">Koolab</Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default WelcomeTemplate;