import { integer, serial, text, pgTable } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';
export const cardid = pgTable('cardid', {
  personid: serial('personid').primaryKey(),
  lastname: text('lastname'),
  firstname: text('firstname'),
  address: text('address'),
  city: text('city'),
});
