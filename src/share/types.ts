import React, { FC } from "react";

export type Data = {
  id?: string;
  name: string;
  description: string;
  measurement_units: string;
  code: string;
};

export type ModalPropsType = {
  active: boolean;
  setActive: () => void;
  title: string;
  description: string;
  add?: boolean;
  data?: Data;
};

export type ModalWrapper = FC<{
  children: React.ReactNode;
  active: boolean;
  setActive: (boolean) => void;
}>;
