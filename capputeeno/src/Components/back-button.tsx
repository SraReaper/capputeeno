'use client';
import styled from 'styled-components';
import { BackIcon } from './icons/back-icon';
import Link from 'next/link';

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  color: var(--secondary-text);
  border: none;
`;

interface BtnProps {
  navigate: string;
}

export function BackBtn({ navigate }: BtnProps) {
  return (
    <Link href={navigate}>
      <Button>
        <BackIcon />
        Voltar
      </Button>
    </Link>
  );
}
