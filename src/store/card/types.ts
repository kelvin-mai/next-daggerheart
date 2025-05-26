import type {
  CardClassOption,
  CardDetails,
  CardDomainOption,
} from '@/lib/types/card-creation';

type CardSettings = {
  border: boolean;
  boldRulesText: boolean;
  artist: boolean;
  credits: boolean;
};

export type CardState = {
  loading: boolean;
  settings: CardSettings;
  card: CardDetails;
  preview?: React.RefObject<HTMLElement | null>;
  classes?: CardClassOption[];
  domains?: CardDomainOption[];
};

export type CardComputed = {
  domainColor(domain: string): string;
  domainIncludes(domain: string): boolean | undefined;
  classDomains(className: string): {
    primary: string;
    secondary: string;
  };
  classColors(className: string): {
    primary: string;
    secondary: string;
  };
};

export type CardActions = {
  setLoading(loading: boolean): void;
  setPreviewRef(ref: React.RefObject<HTMLDivElement | null>): void;
  setCardDetails(details: Partial<CardDetails>): void;
  setSettings(settings: Partial<CardSettings>): void;
  setOptions(allOptions: {
    domains: CardDomainOption[];
    classes: CardClassOption[];
  }): void;
};

export type CardEffects = {
  downloadImage(): void;
  loadOptions(): void;
};

export type CardStore = CardState & {
  computed: CardComputed;
  actions: CardActions;
  effects: CardEffects;
};
