import { FormField } from '@/components/common';
import { Input, Label } from '@/components/ui';
import { safeParseInt } from '@/lib/utils';
import { useAdversary, useAdversaryActions } from '@/store';

type AdversaryThresholdsFormProps = {};

export const AdversaryThresholdsForm: React.FC<
  AdversaryThresholdsFormProps
> = () => {
  const { thresholds } = useAdversary();
  const { changeThresholds } = useAdversaryActions();
  const onThresholdChange = (i: number, v: string) => {
    changeThresholds(
      thresholds.map((t, j) => (i === j ? safeParseInt(v) : t)) as [
        number,
        number,
        number,
      ],
    );
  };
  const [minor, major, severe] = thresholds;
  return (
    <>
      <Label>Damage Thresholds</Label>
      <div className='flex gap-2'>
        <FormField>
          <Input
            id='threshold-minor'
            placeholder='Minor'
            defaultValue={minor}
            onChange={(e) => onThresholdChange(0, e.target.value)}
            type='number'
            min={0}
            max={99}
          />
        </FormField>
        <FormField>
          <Input
            id='threshold-major'
            placeholder='Major'
            defaultValue={major}
            onChange={(e) => onThresholdChange(1, e.target.value)}
            type='number'
            min={0}
            max={99}
          />
        </FormField>
        <FormField>
          <Input
            id='threshold-severe'
            placeholder='Severe'
            defaultValue={severe}
            onChange={(e) => onThresholdChange(2, e.target.value)}
            type='number'
            min={0}
            max={99}
          />
        </FormField>
      </div>
    </>
  );
};
