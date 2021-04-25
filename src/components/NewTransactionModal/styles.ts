import styled, { css } from 'styled-components';
import { darken, transparentize } from 'polished';

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

export const TransactionTypeContainer = styled.div`
  ${({theme}) => css`
    margin: 1rem 0;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
  `}
`;

type RadioBoxProps = {
  isActive: boolean;
  activeColor: 'green' | 'red';
};

const colors = {
  green: '#33CC95',
  red: '#E52E4D'
}

export const RadioBox = styled.button<RadioBoxProps>`
  ${({ theme, isActive, activeColor }) => css`
    height: 4rem;
    border: 1px solid #444;
    border-radius: 0.25rem;

    background: ${isActive
      ? transparentize(0.8, colors[activeColor])
      : 'transparent'
    };

    display: flex;
    align-items: center;
    justify-content: center;
    transition: border-color 0.3s;

    &:hover {
      border-color: ${darken(0.1, '#444')}
    }

    img {
      height: 20px;
      width: 20px;
    }

    span {
      display: inline-block;
      margin-left: 1rem;
      font-size: 1rem;
      color: ${theme.colors.white};
    }
  `}
`;
