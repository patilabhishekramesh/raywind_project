/**
 * Rooftop solar subsidy and savings estimates.
 *
 * Central figures follow PM Surya Ghar: Muft Bijli Yojana, which pays
 * Rs 30,000/kW for the first 2 kW, Rs 18,000 for the third, and nothing
 * beyond that — so residential assistance tops out at Rs 78,000.
 *
 * State top-ups are only listed where a state runs its own additional
 * scheme. Everything here is an estimate for guiding a conversation; the
 * sanctioned amount comes from the national portal at application time.
 */

export const NATIONAL_PORTAL = "https://pmsuryaghar.gov.in";

export const CENTRAL_SUBSIDY = {
  firstSlabKw: 2,
  firstSlabRate: 30000,
  secondSlabRate: 18000,
  maxResidential: 78000,
  housingSocietyRate: 18000,
  housingSocietyMaxKw: 500,
};

export const PROPERTY_TYPES = [
  {
    id: "home",
    label: "Home",
    note: "Individual house or flat with its own connection",
    eligible: true,
  },
  {
    id: "society",
    label: "Housing society",
    note: "Shared lifts, pumps and lighting for a group housing society",
    eligible: true,
  },
  {
    id: "business",
    label: "Business",
    note: "Shop, office, warehouse or factory connection",
    eligible: false,
  },
];

/**
 * `topUp` returns the additional state assistance in rupees for a given
 * size. States running only the central scheme return 0.
 */
export const STATES = [
  { id: "maharashtra", name: "Maharashtra", sunHours: 4, tariff: 8.5, topUp: () => 0 },
  { id: "gujarat", name: "Gujarat", sunHours: 4.4, tariff: 8.5, topUp: () => 0 },
  { id: "rajasthan", name: "Rajasthan", sunHours: 4.6, tariff: 8, topUp: () => 0 },
  { id: "madhya-pradesh", name: "Madhya Pradesh", sunHours: 4.4, tariff: 8, topUp: () => 0 },
  { id: "karnataka", name: "Karnataka", sunHours: 4.2, tariff: 8.5, topUp: () => 0 },
  { id: "tamil-nadu", name: "Tamil Nadu", sunHours: 4.2, tariff: 7.5, topUp: () => 0 },
  { id: "telangana", name: "Telangana", sunHours: 4.3, tariff: 8.5, topUp: () => 0 },
  { id: "andhra-pradesh", name: "Andhra Pradesh", sunHours: 4.3, tariff: 8.5, topUp: () => 0 },
  { id: "kerala", name: "Kerala", sunHours: 3.9, tariff: 7.5, topUp: () => 0 },
  { id: "goa", name: "Goa", sunHours: 4.1, tariff: 6.5, topUp: () => 0 },
  {
    id: "uttar-pradesh",
    name: "Uttar Pradesh",
    sunHours: 4.1,
    tariff: 7.5,
    // State scheme adds Rs 15,000/kW for the first 2 kW, capped at Rs 30,000.
    topUp: (kw) => Math.min(Math.min(kw, 2) * 15000, 30000),
    topUpNote: "Uttar Pradesh adds up to Rs 30,000 on top of the central subsidy.",
  },
  { id: "uttarakhand", name: "Uttarakhand", sunHours: 4, tariff: 7, topUp: () => 0 },
  { id: "haryana", name: "Haryana", sunHours: 4.2, tariff: 7.5, topUp: () => 0 },
  { id: "punjab", name: "Punjab", sunHours: 4.2, tariff: 7.5, topUp: () => 0 },
  { id: "delhi", name: "Delhi", sunHours: 4.2, tariff: 8, topUp: () => 0 },
  { id: "bihar", name: "Bihar", sunHours: 4, tariff: 7.5, topUp: () => 0 },
  { id: "jharkhand", name: "Jharkhand", sunHours: 4.1, tariff: 7, topUp: () => 0 },
  { id: "odisha", name: "Odisha", sunHours: 4.1, tariff: 7, topUp: () => 0 },
  { id: "west-bengal", name: "West Bengal", sunHours: 3.9, tariff: 8, topUp: () => 0 },
  { id: "chhattisgarh", name: "Chhattisgarh", sunHours: 4.3, tariff: 7, topUp: () => 0 },
  { id: "assam", name: "Assam", sunHours: 3.8, tariff: 7.5, topUp: () => 0 },
  { id: "himachal-pradesh", name: "Himachal Pradesh", sunHours: 4, tariff: 6.5, topUp: () => 0 },
];

export const SYSTEM_PRESETS = [1, 2, 3, 5, 10];

/** Installed cost per kW falls as the system gets bigger. */
function costPerKw(kw) {
  if (kw <= 3) return 65000;
  if (kw <= 10) return 58000;
  return 50000;
}

export function centralSubsidyFor(kw, propertyType) {
  if (propertyType === "society") {
    const capped = Math.min(kw, CENTRAL_SUBSIDY.housingSocietyMaxKw);
    return Math.round(capped * CENTRAL_SUBSIDY.housingSocietyRate);
  }

  if (propertyType !== "home") return 0;

  const firstSlab = Math.min(kw, CENTRAL_SUBSIDY.firstSlabKw) * CENTRAL_SUBSIDY.firstSlabRate;
  const secondSlab =
    Math.min(Math.max(kw - CENTRAL_SUBSIDY.firstSlabKw, 0), 1) * CENTRAL_SUBSIDY.secondSlabRate;

  return Math.round(Math.min(firstSlab + secondSlab, CENTRAL_SUBSIDY.maxResidential));
}

/** Suggests a system size that covers a monthly bill, rounded to a half kW. */
export function sizeForBill(monthlyBill, state) {
  const units = monthlyBill / state.tariff;
  const unitsPerKwMonth = state.sunHours * 30;
  const raw = units / unitsPerKwMonth;

  return Math.min(Math.max(Math.round(raw * 2) / 2, 1), 20);
}

export function estimate({ kw, state, propertyType, monthlyBill }) {
  const grossCost = Math.round(kw * costPerKw(kw));
  const central = centralSubsidyFor(kw, propertyType);
  const stateTopUp = propertyType === "home" ? Math.round(state.topUp(kw)) : 0;
  const totalSubsidy = Math.min(central + stateTopUp, grossCost);
  const netCost = Math.max(grossCost - totalSubsidy, 0);

  const monthlyUnits = Math.round(kw * state.sunHours * 30);
  const monthlySavings = Math.round(Math.min(monthlyUnits * state.tariff, monthlyBill || Infinity));
  const annualSavings = monthlySavings * 12;
  const paybackYears = annualSavings > 0 ? netCost / annualSavings : 0;

  return {
    kw,
    grossCost,
    central,
    stateTopUp,
    totalSubsidy,
    netCost,
    monthlyUnits,
    monthlySavings,
    annualSavings,
    paybackYears,
    lifetimeSavings: annualSavings * 25 - netCost,
  };
}

/** The three sizes that cover most homes we quote for. */
export const HOME_PACKAGES = [
  {
    kw: 2,
    name: "Starter Home",
    bestFor: "1–2 BHK with a bill up to about \u20B92,500",
    includes: ["4 panels, 550 Wp each", "2 kW string inverter", "GI mounting structure", "Net-metering liaison"],
  },
  {
    kw: 3,
    name: "Family Home",
    popular: true,
    bestFor: "2–3 BHK running fans, fridge and 1–2 ACs",
    includes: [
      "6 panels, 550 Wp each",
      "3 kW string inverter",
      "Cyclone-rated structure",
      "Full subsidy paperwork",
    ],
  },
  {
    kw: 5,
    name: "Large Home",
    bestFor: "Bungalows with heavy AC load or an EV to charge",
    includes: [
      "9 panels, 550 Wp each",
      "5 kW inverter, battery ready",
      "Cyclone-rated structure",
      "Full subsidy paperwork",
    ],
  },
];

export function formatRupees(value) {
  return `\u20B9${Math.round(value).toLocaleString("en-IN")}`;
}
