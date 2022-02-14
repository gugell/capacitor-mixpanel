export interface MixpanelPlugin {
  initialize(options: { token: string, debug: boolean }): Promise<void>;
  track(options: { event: string, properties: any }): Promise<void>;
  identify(options: { distinctId: string }): Promise<void>;
  alias(options: { alias: string, distinctId: string }): Promise<void>;
  reset(): Promise<void>;
  clearSuperProperties(): Promise<void>;
  currentSuperProperties(): Promise<{ properties: any }>;
  registerSuperProperties(options: { properties: any }): Promise<void>;
  setProfile(options: { properties: any }): Promise<void>;
  trackCharge(options: { amount: number, properties: any }): Promise<void>;
}
