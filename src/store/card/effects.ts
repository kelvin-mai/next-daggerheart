import { toPng } from 'html-to-image';

import { ZustandGet, ZustandSet } from '../types';
import { CardActions, CardEffects, CardState, CardStore } from './types';

const downloadImage =
  (get: ZustandGet<CardStore>): CardEffects['downloadImage'] =>
  async () => {
    const { preview, card } = get();
    const { name, type } = card;
    if (preview.current === null) {
      return;
    }
    try {
      await toPng(preview.current, { cacheBust: true }).then((data) => {
        const link = document.createElement('a');
        link.download = `daggerheart-${type}-${name}.png`;
        console.log(link.download);
        link.href = data;
        link.click();
      });
    } catch (e) {
      console.error(e);
    }
  };

export const createEffects = (
  set: ZustandSet<CardState>,
  get: ZustandGet<CardStore>,
) => ({
  downloadImage: downloadImage(get),
});
