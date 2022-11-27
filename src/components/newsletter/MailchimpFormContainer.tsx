import React from 'react';
import MailChimpSubscribe from "react-mailchimp-subscribe";
import NewsletterSignUp from './NewsletterSignUp';

interface MailChimpFormContainerProps {
  postUrl: string;
}

const MailChimpFormContainer = ({ postUrl }: MailChimpFormContainerProps) => (
  <div>
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
  </div>
)

export default MailChimpFormContainer;
