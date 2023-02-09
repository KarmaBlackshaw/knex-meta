import { Knex as KnexOriginal } from 'knex'

declare module 'knex' {
  namespace Knex {
    interface QueryBuilder {
      meta<TRecord, TResult>(): KnexOriginal.QueryBuilder<TRecord, TResult>;

      metaDate<TRecord, TResult>(): KnexOriginal.QueryBuilder<TRecord, TResult>;

      metaFilter<TRecord, TResult>(): KnexOriginal.QueryBuilder<TRecord, TResult>;

      metaSort<TRecord, TResult>(): KnexOriginal.QueryBuilder<TRecord, TResult>;

      metaPage<TRecord, TResult>(): KnexOriginal.QueryBuilder<TRecord, TResult>;

      bulkUpdate<TRecord, TResult>(): KnexOriginal.QueryBuilder<TRecord, TResult>;

      jsonObject<TRecord, TResult>(): KnexOriginal.QueryBuilder<TRecord, TResult>;

      metaUpdate<TRecord, TResult>(): KnexOriginal.QueryBuilder<TRecord, TResult>;

      metaInsert<TRecord, TResult>(): KnexOriginal.QueryBuilder<TRecord, TResult>;

      metaQuery<TRecord, TResult>(): KnexOriginal.QueryBuilder<TRecord, TResult>;
    }
  }
}
