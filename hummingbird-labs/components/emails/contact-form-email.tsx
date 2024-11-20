import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface ContactFormEmailProps {
  name: string;
  email: string;
  business: string;
  message: string;
}

export const ContactFormEmail = ({
  name,
  email,
  business,
  message,
}: ContactFormEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>New Contact Form Submission from {name}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>New Contact Form Submission</Heading>
          <Text style={text}>
            You have received a new contact form submission:
          </Text>

          <Section style={section}>
            <Text style={labelText}>Name:</Text>
            <Text style={contentText}>{name}</Text>

            <Text style={labelText}>Email:</Text>
            <Text style={contentText}>{email}</Text>

            <Text style={labelText}>Business:</Text>
            <Text style={contentText}>{business}</Text>

            <Text style={labelText}>Message:</Text>
            <Text style={contentText}>{message}</Text>
          </Section>

          <Hr style={hr} />
          <Text style={footer}>
            This email was sent from your Hummingbird Labs website contact form.
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

// Styles
const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
};

const h1 = {
  color: "#1f2937",
  fontSize: "24px",
  fontWeight: "600",
  lineHeight: "1.25",
  marginBottom: "24px",
  textAlign: "center" as const,
};

const text = {
  color: "#374151",
  fontSize: "16px",
  lineHeight: "24px",
  textAlign: "left" as const,
  margin: "0 48px",
};

const section = {
  margin: "24px 48px",
};

const labelText = {
  color: "#6b7280",
  fontSize: "14px",
  marginBottom: "4px",
};

const contentText = {
  color: "#1f2937",
  fontSize: "16px",
  marginBottom: "16px",
};

const hr = {
  borderColor: "#e5e7eb",
  margin: "48px 0",
};

const footer = {
  color: "#6b7280",
  fontSize: "12px",
  lineHeight: "16px",
  textAlign: "center" as const,
};
