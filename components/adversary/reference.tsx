import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui';

export const AdversaryReference = () => {
  const attributeRecs = [
    {
      tier: 0,
      attack: '-4 ~ +4',
      damage: '4-16',
      difficulty: '8-15',
      fragile: '1|4|7',
      standard: '1|6|11',
      tough: '1|8|15',
      hp: '2-9',
      stress: '0-4',
    },
    {
      tier: 1,
      attack: '-3 ~ +5',
      damage: '5-20',
      difficulty: '13-16',
      fragile: '1|8|14',
      standard: '1|10|19',
      tough: '1|14|27',
      hp: '3-10',
      stress: '2-6',
    },
    {
      tier: 2,
      attack: '-2 ~ +6',
      damage: '7-35',
      difficulty: '15-19',
      fragile: '1|14|27',
      standard: '1|17|34',
      tough: '1|21|43',
      hp: '5-12',
      stress: '2-6',
    },
    {
      tier: 3,
      attack: '-1 ~ +7',
      damage: '10-48',
      difficulty: '17-23',
      fragile: '1|25|50',
      standard: '1|30|58',
      tough: '1|40|71',
      hp: '7-15',
      stress: '2-10',
    },
  ];
  const thresholdLabels = ['minor', 'major', 'severe'];
  const damage = [
    ['3-6', '4-8', '5-10', '8-16'],
    ['7-10', '9-13', '11-17', '17-30'],
    ['11-13', '14-19', '18-23', '31-42'],
  ];
  const scaling = [
    ['Always', 'Stays', 'At', '1'],
    ['+3', '+4', '+9', '+16'],
    ['+4', '+10', '+13', '+27'],
  ];
  return (
    <div className='flex flex-col gap-2'>
      <div className='rounded-lg border border-dh-gold-light bg-white shadow-sm'>
        <h3 className='2xl tracking-light p-4 font-bold leading-none'>
          Averages
        </h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Tier</TableHead>
              <TableHead>Attack</TableHead>
              <TableHead>Damage</TableHead>
              <TableHead>Difficulty</TableHead>
              <TableHead>Fragile</TableHead>
              <TableHead>Standard</TableHead>
              <TableHead>Tough</TableHead>
              <TableHead>Hit Points</TableHead>
              <TableHead>Stress</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {attributeRecs.map((attr) => (
              <TableRow key={attr.tier}>
                <TableCell>{attr.tier}</TableCell>
                <TableCell>{attr.attack}</TableCell>
                <TableCell>{attr.damage}</TableCell>
                <TableCell>{attr.difficulty}</TableCell>
                <TableCell>{attr.fragile}</TableCell>
                <TableCell>{attr.standard}</TableCell>
                <TableCell>{attr.tough}</TableCell>
                <TableCell>{attr.hp}</TableCell>
                <TableCell>{attr.stress}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className='grid grid-cols-1 gap-2 md:grid-cols-2'>
        <div className='rounded-lg border border-dh-gold-light bg-white shadow-sm'>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Impromptu Damage</TableHead>
                {[0, 1, 2, 3].map((t) => (
                  <TableHead key={t}>Tier {t}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {damage.map((d, i) => (
                <TableRow key={i}>
                  <TableCell className='font-semibold capitalize'>
                    {thresholdLabels[i]}
                  </TableCell>
                  <TableCell>{d[0]}</TableCell>
                  <TableCell>{d[1]}</TableCell>
                  <TableCell>{d[2]}</TableCell>
                  <TableCell>{d[3]}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className='rounded-lg border border-dh-gold-light bg-white shadow-sm'>
          <Table>
            <TableCaption>
              * This assumes you are scaling a monster from Tier 0 to Tier 3
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Scaling (cumulative)</TableHead>
                {[0, 1, 2].map((t) => (
                  <TableHead key={t}>
                    Tier {t} {'>'} {t + 1}
                  </TableHead>
                ))}
                <TableHead>Total T3</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {scaling.map((s, i) => (
                <TableRow key={i}>
                  <TableCell className='font-semibold capitalize'>
                    {thresholdLabels[i]}
                  </TableCell>
                  <TableCell>{s[0]}</TableCell>
                  <TableCell>{s[1]}</TableCell>
                  <TableCell>{s[2]}</TableCell>
                  <TableCell>{s[3]}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};
