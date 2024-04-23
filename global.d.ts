import type { FC, ReactNode } from 'react';

declare global {
  namespace Model {
    type Token = {
      access: string;
      refresh: string;
    };
  }
}
