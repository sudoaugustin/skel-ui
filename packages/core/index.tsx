import { ComponentPropsWithoutRef, createContext, ElementType, ReactNode } from "react";

type TValue = number | string;

export type SkelComponentProps<T extends ElementType> = {
  sw?: TValue;
  sh?: TValue;
  sr?: TValue;
} & ComponentPropsWithoutRef<T>;

export const IsLoadingContext = createContext(false);

export function SkelRoot({ children, isLoading = true }: { children: ReactNode; isLoading: boolean }) {
  return <IsLoadingContext.Provider value={isLoading}>{children}</IsLoadingContext.Provider>;
}

export function generatePlaceholder<T>(length: number, primary: string) {
  return Array(length)
    .fill(null)
    .map((_, index) => ({ [primary]: `${primary}-${index}` }) as T);
}
