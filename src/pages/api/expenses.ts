import expenses from '@/data/expenses.json';
import type { NextApiRequest, NextApiResponse } from 'next';

// expenses have:
//    amount (float),
//    name (string),
//    date (string),
//    category (Food, Transportation, Housing, Entertainment, Other)
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(expenses);
}
