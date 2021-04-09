import React from 'react';
import { css } from '@emotion/react';
import { colors } from '../styles/colors';
import styled from '@emotion/styled';
import config from '../website-config';

const Button = styled.button`
  background-color: ${colors.blue};
  position: relative;
  margin: 10px 10px;
`

const BaseFormTemplate = css`
  font-family: inherit;
  font-size: 100%;
  background-color: ${colors.midgrey};
`;

const InputTemplate = css`
  position: relative;
  height: 50px;
  margin: 10 auto;
  padding: 1em;
  box-sizing: border-box;
  
  display: inline-block;
  grid-gap: 10px;
  grid-template-columns: repeat(2, 1fr);

  input {
    width: 300px;
  }
`;

const MessageTemplate = css`
  position: relative;
  height: 50px;
  margin: 10 auto;
  padding: 1em;
  
  box-sizing: border-box;
  
  display: inline-block;
  grid-gap: 10px;
  grid-template-columns: repeat(2, 1fr);

`;

const TextareaTemplate = css`
  position: relative;
  width: 600px;
  height: inherit;
  margin: 10 auto;
  padding: 1em;
`;

const ContactForm: React.FC = () => {
  return (
    <div css={BaseFormTemplate} >
    <form  className="form" action='mailto:jjhickman@protonmail.com' method="post">
      <div css={InputTemplate} >
        <label>Name:</label>
      </div>
      <div style={{textAlign: 'center'}}>
        <input type="text" name="fullname" size={50}/>
      </div>
      <div css={InputTemplate} >
        <label>Email:</label>
      </div>
      <div style={{textAlign: 'center'}}>
        <input type="email" name="email" size={50}/>
      </div>
      <div css={MessageTemplate}>
        <label>Message:</label>
      </div>
      <div style={{textAlign: 'center'}}>
        <textarea css={TextareaTemplate} name="message" rows={15}></textarea>
      </div>
      &nbsp;
      <div className="actions">
          <Button type="submit"  className="button special">Send</Button>
      </div>
    </form>
    </div>
  );
};


export default ContactForm;
