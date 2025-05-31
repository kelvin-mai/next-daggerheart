import { toPng } from 'html-to-image';

import type { CardClassOption, CardDomainOption } from '@/lib/types';
import type { ZustandGet, ZustandSet } from '../types';
import type { CardEffects, CardState, CardStore } from './types';

const downloadImage =
  (get: ZustandGet<CardStore>): CardEffects['downloadImage'] =>
  async () => {
    const { preview, card } = get();
    const { name, type } = card;
    try {
      if (preview?.current) {
        await toPng(preview.current, { cacheBust: true }).then((data) => {
          const link = document.createElement('a');
          link.download = `daggerheart-${type}-${name}.png`;
          console.log(link.download);
          link.href = data;
          link.click();
        });
      }
    } catch (e) {
      console.error(e);
    }
  };

const loadOptions =
  (get: ZustandGet<CardStore>): CardEffects['loadOptions'] =>
  async () => {
    const {
      actions: { setOptions, setLoading },
    } = get();
    try {
      setLoading(true);
      const res = await fetch('/api/card-options');
      const data: { classes: CardClassOption[]; domains: CardDomainOption[] } =
        await res.json();
      setOptions(data);
      setLoading(false);
    } catch (e) {
      console.error(e);
    }
  };

export const createEffects = (
  _: ZustandSet<CardState>,
  get: ZustandGet<CardStore>,
) => ({
  downloadImage: downloadImage(get),
  loadOptions: loadOptions(get),
});
