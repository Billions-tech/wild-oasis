import styled, { css } from "styled-components";

const Form = styled.form`
  ${(props) =>
    props.type !== "regular" &&
    css`
      padding: 2.4rem 4rem;

      /* Box */
      background-color: blue;
      border: 1px solid var(--color-grey-100);
      border-radius: var(--border-radius-md);
    `}

  ${(props) =>
    props.type === "modal" &&
    css`
      width: 80rem;
    `}
    
  overflow: hidden;
  font-size: 1.4rem;
  background-color: white;
  padding: 2.4rem 4rem;
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
`;

Form.defaultProps = {
  type: "regular",
};

export default Form;
