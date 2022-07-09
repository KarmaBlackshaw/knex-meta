import { Knex as KnexOriginal } from 'knex';
import { IDateArguments } from './metaDate'
import { IFilterArguments } from './metaFilter'
import { ISortArguments } from './metaSort'
import { IPageArguments } from './metaPage'
import { IMetaArguments } from './meta'
import { TBulkUpdateKey, TBulkUpdatePayload, IBulkUpdateOptions } from './bulkUpdate'

declare module 'knex' {
  namespace Knex {
    interface QueryBuilder {
      meta<TRecord, TResult>(IMetaArguments): KnexOriginal.QueryBuilder<TRecord, TResult>;
      metaDate<TRecord, TResult>(IDateArguments): KnexOriginal.QueryBuilder<TRecord, TResult>;
      metaFilter<TRecord, TResult>(IFilterArguments): KnexOriginal.QueryBuilder<TRecord, TResult>;
      metaSort<TRecord, TResult>(ISortArguments): KnexOriginal.QueryBuilder<TRecord, TResult>;
      metaPage<TRecord, TResult>(IPageArguments): KnexOriginal.QueryBuilder<TRecord, TResult>;
      bulkUpdate<TRecord, TResult>(TBulkUpdateKey, TBulkUpdatePayload, IBulkUpdateOptions?): KnexOriginal.QueryBuilder<TRecord, TResult>;
    }
  }
}