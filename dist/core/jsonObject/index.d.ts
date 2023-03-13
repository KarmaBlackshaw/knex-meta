import { Knex } from 'knex';

type TJsonObject = Record<string, any>;
declare function jsonObject(data: TJsonObject): Knex;

export { TJsonObject, jsonObject };
