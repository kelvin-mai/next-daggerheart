import * as React from 'react';
import { ChevronDown } from 'lucide-react';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

type GameMasterTableItems = {
  term: string;
  description: string;
};

type GameMasterTableProps = React.ComponentProps<typeof Table> & {
  caption?: string;
  items: GameMasterTableItems[];
};

export const GameMasterTable: React.FC<GameMasterTableProps> = ({
  caption,
  items,
}) => {
  return (
    <Table>
      {caption && <TableCaption>{caption}</TableCaption>}
      <TableHeader>
        <TableRow>
          <TableHead>Term</TableHead>
          <TableHead>Description</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {items.map((item) => (
          <TableRow key={item.term}>
            <TableCell className='whitespace-normal'>{item.term}</TableCell>
            <TableCell className='whitespace-normal'>
              {item.description}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
