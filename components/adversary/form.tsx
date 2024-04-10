'use client';

import { Fragment } from 'react';

import { useAdversary, useAdversaryActions } from '@/store/adversary/store';
import { cn, safeParseInt } from '@/lib/utils';
import { Button, Input, Label, Textarea } from '@/components/ui';
import { FormField } from '../common';
import { AdversaryThresholdsForm } from './threshold-subform';
import { AdversaryMovesSelect } from './moves-select';
import { changeCardStringProperty } from '@/store/card/actions';

type AdversaryFormProps = { className?: string };

export const AdversaryForm: React.FC<AdversaryFormProps> = ({ className }) => {
  const adversary = useAdversary();
  const {
    changeAdversaryNumberProperty,
    changeAdversaryStringProperty,
    addExperience,
    removeExperience,
    changeExperience,
    addMove,
    removeMove,
    changeMove,
  } = useAdversaryActions();
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className={cn(
        'flex flex-col gap-2 rounded-xl border-2 border-dh-gold-light bg-white p-4 shadow-lg md:flex-row',
        className,
      )}
    >
      <div className='space-y-2'>
        <FormField label='Name' htmlFor='name'>
          <Input
            id='name'
            placeholder='Name'
            value={adversary.name}
            onChange={(e) =>
              changeAdversaryStringProperty({
                property: 'name',
                value: e.target.value,
              })
            }
          />
        </FormField>
        <div className='grid grid-cols-2 gap-2'>
          <FormField label='Tier' htmlFor='tier'>
            <Input
              id='tier'
              placeholder='Tier'
              type='number'
              value={adversary.tier}
              min={0}
              max={5}
              onChange={(e) =>
                changeAdversaryNumberProperty({
                  property: 'tier',
                  value: e.target.value,
                })
              }
            />
          </FormField>
          <FormField label='Role' htmlFor='role'>
            <Input
              id='role'
              placeholder='Role'
              value={adversary.role}
              onChange={(e) =>
                changeAdversaryStringProperty({
                  property: 'role',
                  value: e.target.value,
                })
              }
            />
          </FormField>
        </div>
        <FormField label='Weapon/Attack Name' htmlFor='weapon-name'>
          <Input
            id='weapon-name'
            placeholder='Weapon/Attack Name'
            value={adversary.attack}
            onChange={(e) =>
              changeAdversaryStringProperty({
                property: 'attack',
                value: e.target.value,
              })
            }
          />
        </FormField>
        <FormField label='Weapon/Attack Damage' htmlFor='weapon-damage'>
          <Input
            id='weapon-damage'
            placeholder='Weapon/Attack Damage'
            value={adversary.damage}
            onChange={(e) =>
              changeAdversaryStringProperty({
                property: 'damage',
                value: e.target.value,
              })
            }
          />
        </FormField>
        <div className='grid grid-cols-2 gap-2'>
          <FormField label='Attack Modifier' htmlFor='modifier'>
            <Input
              id='modifier'
              placeholder='Attack Modifier'
              type='number'
              value={adversary.modifier}
              onChange={(e) =>
                changeAdversaryNumberProperty({
                  property: 'modifier',
                  value: e.target.value,
                })
              }
            />
          </FormField>
          <FormField label='Difficulty' htmlFor='difficulty'>
            <Input
              id='difficulty'
              placeholder='Difficulty'
              type='number'
              value={adversary.difficulty}
              onChange={(e) =>
                changeAdversaryNumberProperty({
                  property: 'difficulty',
                  value: e.target.value,
                })
              }
            />
          </FormField>
          <FormField label='Hitpoints' htmlFor='hp'>
            <Input
              id='hp'
              placeholder='Hitpoints'
              type='number'
              value={adversary.hp}
              onChange={(e) =>
                changeAdversaryNumberProperty({
                  property: 'hp',
                  value: e.target.value,
                })
              }
            />
          </FormField>
          <FormField label='Stress' htmlFor='stress'>
            <Input
              id='stress'
              placeholder='Stress'
              type='number'
              value={adversary.stress}
              onChange={(e) =>
                changeAdversaryNumberProperty({
                  property: 'stress',
                  value: e.target.value,
                })
              }
            />
          </FormField>
        </div>
        <AdversaryThresholdsForm />
      </div>
      <div className='flex-grow'>
        <div className='space-y-2'>
          <FormField label='Flavor Text' htmlFor='flavor'>
            <Textarea
              id='flavor'
              placeholder='Flavor Text'
              value={adversary.flavor}
              onChange={(e) =>
                changeAdversaryStringProperty({
                  property: 'flavor',
                  value: e.target.value,
                })
              }
            />
          </FormField>
          <FormField htmlFor='motives' label='Motives and Tactics'>
            <Textarea
              id='motives'
              placeholder='Motives and Tactics'
              value={adversary.motives}
              onChange={(e) =>
                changeAdversaryStringProperty({
                  property: 'motives',
                  value: e.target.value,
                })
              }
            />
          </FormField>
          <Label>Experiences</Label>
          {adversary.experiences.map((ex, i) => (
            <Fragment key={`experience_${i}`}>
              <div className='grid grid-cols-4 gap-2'>
                <FormField className='col-span-2'>
                  <Input
                    placeholder='Experience'
                    value={ex.name}
                    onChange={(e) =>
                      changeExperience({
                        index: i,
                        name: e.target.value,
                        bonus: ex.bonus,
                      })
                    }
                  />
                </FormField>
                <FormField>
                  <Input
                    placeholder='Experience Bonus'
                    type='number'
                    value={ex.bonus}
                    onChange={(e) =>
                      changeExperience({
                        index: i,
                        name: ex.name,
                        bonus: safeParseInt(e.target.value),
                      })
                    }
                  />
                </FormField>
                <Button onClick={() => removeExperience(i)}>Remove</Button>
              </div>
            </Fragment>
          ))}
          <Button
            variant='ghost'
            className='w-full'
            onClick={() => addExperience()}
          >
            Add Experience
          </Button>
          <Label>Moves</Label>
          {adversary.moves.map((m, i) => (
            <Fragment key={`move_${i}`}>
              <div className='flex items-end gap-2'>
                <FormField label='Move Name'>
                  <Input
                    value={m.name}
                    onChange={(e) =>
                      changeMove({
                        index: i,
                        name: e.target.value,
                        description: m.description,
                      })
                    }
                  />
                </FormField>
                <Button variant='ghost' onClick={() => removeMove(i)}>
                  Remove
                </Button>
              </div>
              <FormField label='Move Description'>
                <Textarea
                  value={m.description}
                  onChange={(e) =>
                    changeMove({
                      index: i,
                      name: m.name,
                      description: e.target.value,
                    })
                  }
                />
              </FormField>
            </Fragment>
          ))}
          <Button
            variant='ghost'
            className='w-full'
            onClick={() => addMove({})}
          >
            Add Move
          </Button>
          <AdversaryMovesSelect />
        </div>
      </div>
    </form>
  );
};
