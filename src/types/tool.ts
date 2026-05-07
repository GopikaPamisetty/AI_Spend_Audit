export type PricingType =
  | "flat"
  | "per-user"
  | "usage-based"
  | "custom";

export interface Plan {
  name: string;
  monthlyPrice: number | null;
}

export interface Tool {
  id: string;
  name: string;
  vendor: string;
  category: string;

  pricingType: PricingType;

  plans: Plan[];

  enterpriseAvailable: boolean;
}
