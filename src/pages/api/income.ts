import income from '@/data/income.json';
import type { NextApiRequest, NextApiResponse } from 'next';

// income has:
//    amount (float),
//    name (string),
//    date (string),
//    category (Salary, Freelance, Side Project Income, Other)
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(income);
}
