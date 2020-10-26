import React, { useState, useCallback, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import {
  FiMail,
  FiUser,
  FiMessageSquare,
  FiCheck,
  FiSend,
} from 'react-icons/fi';
import * as Yup from 'yup';
import axios from 'axios';

import { Container, Wrapper, Title, Form } from './styles';
import Input from '../Input';
import TextArea from '../Input/TextArea';
import Button from '../Button';

import getValidationErrors from '../../util/getValidationErrors';

const CallToAction = () => {
  const { t } = useTranslation('common');

  const [mailSent, setMailSent] = useState(false);

  const formRef = useRef(null);

  const handleSubmit = useCallback(
    async data => {
      try {
        formRef.current.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required(t('name-required')),
          email: Yup.string()
            .required(t('mail-required'))
            .email(t('mail-invalid')),
          message: Yup.string()
            .required(t('message-required'))
            .min(50, t('message-minimum')),
        });

        await schema.validate(data, { abortEarly: false });

        const response = await axios.post(
          'https://nxj9ckhbp3.execute-api.us-east-2.amazonaws.com/dev/email/send',
          data
        );

        if (response.status === 200) setMailSent(true);
      } catch (err) {
        const errors = getValidationErrors(err);
        formRef.current.setErrors(errors);
      }
    },
    [t]
  );
  return (
    <Container id="contact">
      <Wrapper>
        <Title>
          <h1>{t('lets-work-together')}</h1>
          <h2>{t('fill-out-and-reach-me')}</h2>
        </Title>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="name" placeholder={t('your-name')} icon={FiUser} />
          <Input name="email" placeholder={t('your-email')} icon={FiMail} />
          <TextArea
            name="message"
            placeholder={t('your-message')}
            icon={FiMessageSquare}
          />
          {mailSent ? (
            <Button variant="filled" color="success" height="36px">
              <FiCheck />
              <span>
                &nbsp;
                {t('sent')}
              </span>
            </Button>
          ) : (
            <Button
              type="submit"
              variant="filled"
              color="primary"
              height="36px"
            >
              <FiSend />
              <span>
                &nbsp;
                {t('send')}
              </span>
            </Button>
          )}
        </Form>
      </Wrapper>
    </Container>
  );
};

export default CallToAction;
