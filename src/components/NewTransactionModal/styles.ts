import styled, { css } from 'styled-components';

export const Container = styled.form`
  ${({ theme }) => css`
    h2 {
      color: ${theme.colors.white};
      font-size: 1.5rem;
      margin-bottom: 2rem;
    }

    input {
      width: 100%;
      padding: 0 1.5rem;
      height: 4rem;
      border-radius: 0.25rem;

      background: ${theme.colors.black};
      border: 1px solid ${theme.colors.black};
      color: ${theme.colors.white};

      font-weight: 400;
      font-size: 1rem;

      & + input {
        margin-top: 1rem;
      }
    }

    button[type="submit"] {
      width: 100%;
      padding: 0 1.5rem;
      height: 4rem;
      background: ${theme.colors.green};
      border-radius: 0.25rem;
      border: 0;
      font-size: 1rem;
      margin-top: 1.5rem;
      color: ${theme.colors.white};
      font-weight: 600;
      transition: 0.3s filter;

      &:hover {
        filter: brightness(0.9);
      }
    }
  `}
`;
