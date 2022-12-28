import React from 'react';
import MailChimpSubscribe from "react-mailchimp-subscribe";

import NewsletterSignUp from './NewsletterSignUp';

interface MailchimpFormContainerProps {
  postUrl: string;
}

const MailchimpFormContainer = ({ postUrl }: MailchimpFormContainerProps) => (
  <MailChimpSubscribe
    url={postUrl}
    render={({ subscribe, status, message }) => (
      <NewsletterSignUp
        subscribe={subscribe}
        status={status}
        message={message}
      />
    )}
  />
)

export default MailchimpFormContainer;
