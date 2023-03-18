import React, { useEffect, useState } from "react";
import { NameFormFields } from "react-mailchimp-subscribe";

import '../../main.css';

import { Box, BoxProps } from "@mui/system";
import { styled } from "@mui/material/styles";
import {
  TextField,
  TextFieldProps,
  Typography,
  useTheme,
} from "@mui/material";

import { RedButton } from "components";
import newsletterimg from "../../static/images/newsletter.png";

const NewsletterBox = styled(Box)<BoxProps>(({ theme }) => ({
  width: '100%',
  backgroundColor: "#FFFFFF",
  marginLeft: "auto",
  marginRight: "auto",
  display: "flex",
  flexDirection: "row",
}));

const CenteredBox = styled(Box)<BoxProps>(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  marginLeft: "auto",
  marginRight: "auto",
  alignItems: "center",
}));

const Input = styled(TextField)<TextFieldProps>(({ theme }) => ({
  marginTop: "32px",
  width: "300px",
}));

export interface NewsletterSignUpProps {
  subscribe: (data: NameFormFields) => void;
  status: "error" | "success" | "sending" | null;
  message: string | Error | null;
}

const NewsletterSignUp = ({ subscribe, status, message }: NewsletterSignUpProps) => {
  const theme = useTheme();

  const [name, setName] = useState<string>('');
  const [surname, setSurname] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  useEffect(() => {
    if (status === 'success') {
      setName('');
      setSurname('');
      setEmail('');
    }
  }, [status]);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    email &&
      name &&
      surname &&
      email.indexOf("@") > -1 &&
      subscribe({
        EMAIL: email,
        FNAME: name,
        LNAME: surname
      });
  }

  return (
    <NewsletterBox>
      <div className="NewsletterSignUp-image" style={{ backgroundImage: `url(${newsletterimg})` }} />
      <CenteredBox
        sx={{
          padding: theme.spacing(2),
          '@media (min-width:0px)': {
            marginY: theme.spacing(2),
          },
          '@media (min-width:900px)': {
            marginY: 'auto',
          }
        }}
      >
        <CenteredBox>
          <Typography variant="h2" sx={{ color: theme.palette.secondary.main }}>
            Newsletter
          </Typography>
          <Typography variant="h4" marginTop="10px">
            Never miss another post
          </Typography>
        </CenteredBox>
        <CenteredBox marginTop="8px">
          <Input
            label="Your Name"
            variant="standard"
            type="text"
            value={name}
            onChange={e => setName(e.currentTarget.value)}
          />
          <Input
            label="Your Surname"
            variant="standard"
            type="text"
            value={surname}
            onChange={e => setSurname(e.currentTarget.value)}
          />
          <Input
            label="Your Email"
            variant="standard"
            type="email"
            value={email}
            onChange={e => setEmail(e.currentTarget.value)}
          />
          <div>
            {status === "sending" && "Sending"}
            {status === "error" && message !== null && message.toString()}
            {status === "success" && "Success"}
          </div>
        </CenteredBox>
        <CenteredBox marginTop="32px">
          <RedButton sx={{ width: "300px", borderRadius: 0 }} onClick={handleSubmit}>
            <Typography variant="largeSemibold">SUBSCRIBE</Typography>
          </RedButton>
          <Typography variant="normalSemibold" marginTop="8px">
            Unsubscribe at any time
          </Typography>
        </CenteredBox>
      </CenteredBox>
    </NewsletterBox>
  );
};

export default NewsletterSignUp;
