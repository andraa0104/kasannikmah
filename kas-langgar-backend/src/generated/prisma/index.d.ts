
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model FundCategory
 * 
 */
export type FundCategory = $Result.DefaultSelection<Prisma.$FundCategoryPayload>
/**
 * Model AccountChart
 * 
 */
export type AccountChart = $Result.DefaultSelection<Prisma.$AccountChartPayload>
/**
 * Model JournalEntry
 * 
 */
export type JournalEntry = $Result.DefaultSelection<Prisma.$JournalEntryPayload>
/**
 * Model JournalItem
 * 
 */
export type JournalItem = $Result.DefaultSelection<Prisma.$JournalItemPayload>
/**
 * Model AccountTransfer
 * 
 */
export type AccountTransfer = $Result.DefaultSelection<Prisma.$AccountTransferPayload>
/**
 * Model Transaction
 * 
 */
export type Transaction = $Result.DefaultSelection<Prisma.$TransactionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  BENDAHARA: 'BENDAHARA',
  PENGURUS: 'PENGURUS'
};

export type Role = (typeof Role)[keyof typeof Role]


export const AccountType: {
  CASH: 'CASH',
  BANK: 'BANK',
  EWALLET: 'EWALLET'
};

export type AccountType = (typeof AccountType)[keyof typeof AccountType]


export const FundType: {
  UNRESTRICTED: 'UNRESTRICTED',
  RESTRICTED_YATIM: 'RESTRICTED_YATIM',
  RESTRICTED_BUILDING: 'RESTRICTED_BUILDING',
  RESTRICTED_ZAKAT: 'RESTRICTED_ZAKAT',
  RESTRICTED_OTHER: 'RESTRICTED_OTHER'
};

export type FundType = (typeof FundType)[keyof typeof FundType]


export const ChartType: {
  ASSET: 'ASSET',
  LIABILITY: 'LIABILITY',
  EQUITY: 'EQUITY',
  REVENUE: 'REVENUE',
  EXPENSE: 'EXPENSE'
};

export type ChartType = (typeof ChartType)[keyof typeof ChartType]


export const TransactionType: {
  INCOME: 'INCOME',
  EXPENSE: 'EXPENSE'
};

export type TransactionType = (typeof TransactionType)[keyof typeof TransactionType]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type AccountType = $Enums.AccountType

export const AccountType: typeof $Enums.AccountType

export type FundType = $Enums.FundType

export const FundType: typeof $Enums.FundType

export type ChartType = $Enums.ChartType

export const ChartType: typeof $Enums.ChartType

export type TransactionType = $Enums.TransactionType

export const TransactionType: typeof $Enums.TransactionType

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs>;

  /**
   * `prisma.fundCategory`: Exposes CRUD operations for the **FundCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FundCategories
    * const fundCategories = await prisma.fundCategory.findMany()
    * ```
    */
  get fundCategory(): Prisma.FundCategoryDelegate<ExtArgs>;

  /**
   * `prisma.accountChart`: Exposes CRUD operations for the **AccountChart** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AccountCharts
    * const accountCharts = await prisma.accountChart.findMany()
    * ```
    */
  get accountChart(): Prisma.AccountChartDelegate<ExtArgs>;

  /**
   * `prisma.journalEntry`: Exposes CRUD operations for the **JournalEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JournalEntries
    * const journalEntries = await prisma.journalEntry.findMany()
    * ```
    */
  get journalEntry(): Prisma.JournalEntryDelegate<ExtArgs>;

  /**
   * `prisma.journalItem`: Exposes CRUD operations for the **JournalItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JournalItems
    * const journalItems = await prisma.journalItem.findMany()
    * ```
    */
  get journalItem(): Prisma.JournalItemDelegate<ExtArgs>;

  /**
   * `prisma.accountTransfer`: Exposes CRUD operations for the **AccountTransfer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AccountTransfers
    * const accountTransfers = await prisma.accountTransfer.findMany()
    * ```
    */
  get accountTransfer(): Prisma.AccountTransferDelegate<ExtArgs>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.TransactionDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Account: 'Account',
    FundCategory: 'FundCategory',
    AccountChart: 'AccountChart',
    JournalEntry: 'JournalEntry',
    JournalItem: 'JournalItem',
    AccountTransfer: 'AccountTransfer',
    Transaction: 'Transaction'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "account" | "fundCategory" | "accountChart" | "journalEntry" | "journalItem" | "accountTransfer" | "transaction"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      FundCategory: {
        payload: Prisma.$FundCategoryPayload<ExtArgs>
        fields: Prisma.FundCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FundCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FundCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundCategoryPayload>
          }
          findFirst: {
            args: Prisma.FundCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FundCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundCategoryPayload>
          }
          findMany: {
            args: Prisma.FundCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundCategoryPayload>[]
          }
          create: {
            args: Prisma.FundCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundCategoryPayload>
          }
          createMany: {
            args: Prisma.FundCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FundCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundCategoryPayload>
          }
          update: {
            args: Prisma.FundCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundCategoryPayload>
          }
          deleteMany: {
            args: Prisma.FundCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FundCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FundCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundCategoryPayload>
          }
          aggregate: {
            args: Prisma.FundCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFundCategory>
          }
          groupBy: {
            args: Prisma.FundCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<FundCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.FundCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<FundCategoryCountAggregateOutputType> | number
          }
        }
      }
      AccountChart: {
        payload: Prisma.$AccountChartPayload<ExtArgs>
        fields: Prisma.AccountChartFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountChartFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountChartPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountChartFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountChartPayload>
          }
          findFirst: {
            args: Prisma.AccountChartFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountChartPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountChartFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountChartPayload>
          }
          findMany: {
            args: Prisma.AccountChartFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountChartPayload>[]
          }
          create: {
            args: Prisma.AccountChartCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountChartPayload>
          }
          createMany: {
            args: Prisma.AccountChartCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AccountChartDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountChartPayload>
          }
          update: {
            args: Prisma.AccountChartUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountChartPayload>
          }
          deleteMany: {
            args: Prisma.AccountChartDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountChartUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AccountChartUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountChartPayload>
          }
          aggregate: {
            args: Prisma.AccountChartAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccountChart>
          }
          groupBy: {
            args: Prisma.AccountChartGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountChartGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountChartCountArgs<ExtArgs>
            result: $Utils.Optional<AccountChartCountAggregateOutputType> | number
          }
        }
      }
      JournalEntry: {
        payload: Prisma.$JournalEntryPayload<ExtArgs>
        fields: Prisma.JournalEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JournalEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JournalEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalEntryPayload>
          }
          findFirst: {
            args: Prisma.JournalEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JournalEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalEntryPayload>
          }
          findMany: {
            args: Prisma.JournalEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalEntryPayload>[]
          }
          create: {
            args: Prisma.JournalEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalEntryPayload>
          }
          createMany: {
            args: Prisma.JournalEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.JournalEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalEntryPayload>
          }
          update: {
            args: Prisma.JournalEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalEntryPayload>
          }
          deleteMany: {
            args: Prisma.JournalEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JournalEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.JournalEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalEntryPayload>
          }
          aggregate: {
            args: Prisma.JournalEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJournalEntry>
          }
          groupBy: {
            args: Prisma.JournalEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<JournalEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.JournalEntryCountArgs<ExtArgs>
            result: $Utils.Optional<JournalEntryCountAggregateOutputType> | number
          }
        }
      }
      JournalItem: {
        payload: Prisma.$JournalItemPayload<ExtArgs>
        fields: Prisma.JournalItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JournalItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JournalItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalItemPayload>
          }
          findFirst: {
            args: Prisma.JournalItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JournalItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalItemPayload>
          }
          findMany: {
            args: Prisma.JournalItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalItemPayload>[]
          }
          create: {
            args: Prisma.JournalItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalItemPayload>
          }
          createMany: {
            args: Prisma.JournalItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.JournalItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalItemPayload>
          }
          update: {
            args: Prisma.JournalItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalItemPayload>
          }
          deleteMany: {
            args: Prisma.JournalItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JournalItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.JournalItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalItemPayload>
          }
          aggregate: {
            args: Prisma.JournalItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJournalItem>
          }
          groupBy: {
            args: Prisma.JournalItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<JournalItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.JournalItemCountArgs<ExtArgs>
            result: $Utils.Optional<JournalItemCountAggregateOutputType> | number
          }
        }
      }
      AccountTransfer: {
        payload: Prisma.$AccountTransferPayload<ExtArgs>
        fields: Prisma.AccountTransferFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountTransferFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountTransferPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountTransferFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountTransferPayload>
          }
          findFirst: {
            args: Prisma.AccountTransferFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountTransferPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountTransferFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountTransferPayload>
          }
          findMany: {
            args: Prisma.AccountTransferFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountTransferPayload>[]
          }
          create: {
            args: Prisma.AccountTransferCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountTransferPayload>
          }
          createMany: {
            args: Prisma.AccountTransferCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AccountTransferDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountTransferPayload>
          }
          update: {
            args: Prisma.AccountTransferUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountTransferPayload>
          }
          deleteMany: {
            args: Prisma.AccountTransferDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountTransferUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AccountTransferUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountTransferPayload>
          }
          aggregate: {
            args: Prisma.AccountTransferAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccountTransfer>
          }
          groupBy: {
            args: Prisma.AccountTransferGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountTransferGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountTransferCountArgs<ExtArgs>
            result: $Utils.Optional<AccountTransferCountAggregateOutputType> | number
          }
        }
      }
      Transaction: {
        payload: Prisma.$TransactionPayload<ExtArgs>
        fields: Prisma.TransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findFirst: {
            args: Prisma.TransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findMany: {
            args: Prisma.TransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          create: {
            args: Prisma.TransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          createMany: {
            args: Prisma.TransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          update: {
            args: Prisma.TransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          deleteMany: {
            args: Prisma.TransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.TransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    transactions: number
    transfers: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | UserCountOutputTypeCountTransactionsArgs
    transfers?: boolean | UserCountOutputTypeCountTransfersArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTransfersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountTransferWhereInput
  }


  /**
   * Count Type AccountCountOutputType
   */

  export type AccountCountOutputType = {
    transactions: number
    transfersFrom: number
    transfersTo: number
  }

  export type AccountCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | AccountCountOutputTypeCountTransactionsArgs
    transfersFrom?: boolean | AccountCountOutputTypeCountTransfersFromArgs
    transfersTo?: boolean | AccountCountOutputTypeCountTransfersToArgs
  }

  // Custom InputTypes
  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountCountOutputType
     */
    select?: AccountCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeCountTransfersFromArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountTransferWhereInput
  }

  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeCountTransfersToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountTransferWhereInput
  }


  /**
   * Count Type FundCategoryCountOutputType
   */

  export type FundCategoryCountOutputType = {
    transactions: number
  }

  export type FundCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | FundCategoryCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * FundCategoryCountOutputType without action
   */
  export type FundCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundCategoryCountOutputType
     */
    select?: FundCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FundCategoryCountOutputType without action
   */
  export type FundCategoryCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }


  /**
   * Count Type AccountChartCountOutputType
   */

  export type AccountChartCountOutputType = {
    journalItems: number
  }

  export type AccountChartCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    journalItems?: boolean | AccountChartCountOutputTypeCountJournalItemsArgs
  }

  // Custom InputTypes
  /**
   * AccountChartCountOutputType without action
   */
  export type AccountChartCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountChartCountOutputType
     */
    select?: AccountChartCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AccountChartCountOutputType without action
   */
  export type AccountChartCountOutputTypeCountJournalItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JournalItemWhereInput
  }


  /**
   * Count Type JournalEntryCountOutputType
   */

  export type JournalEntryCountOutputType = {
    items: number
  }

  export type JournalEntryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | JournalEntryCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * JournalEntryCountOutputType without action
   */
  export type JournalEntryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntryCountOutputType
     */
    select?: JournalEntryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * JournalEntryCountOutputType without action
   */
  export type JournalEntryCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JournalItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    name: string | null
    role: $Enums.Role | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    name: string | null
    role: $Enums.Role | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    password: number
    name: number
    role: number
    permissions: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    name?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    name?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    name?: true
    role?: true
    permissions?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    username: string
    password: string
    name: string
    role: $Enums.Role
    permissions: JsonValue | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    permissions?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    transactions?: boolean | User$transactionsArgs<ExtArgs>
    transfers?: boolean | User$transfersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>


  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    permissions?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | User$transactionsArgs<ExtArgs>
    transfers?: boolean | User$transfersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
      transfers: Prisma.$AccountTransferPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      password: string
      name: string
      role: $Enums.Role
      permissions: Prisma.JsonValue | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transactions<T extends User$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany"> | Null>
    transfers<T extends User$transfersArgs<ExtArgs> = {}>(args?: Subset<T, User$transfersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountTransferPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly permissions: FieldRef<"User", 'Json'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.transactions
   */
  export type User$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * User.transfers
   */
  export type User$transfersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountTransfer
     */
    select?: AccountTransferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountTransferInclude<ExtArgs> | null
    where?: AccountTransferWhereInput
    orderBy?: AccountTransferOrderByWithRelationInput | AccountTransferOrderByWithRelationInput[]
    cursor?: AccountTransferWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountTransferScalarFieldEnum | AccountTransferScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    id: number | null
    balance: Decimal | null
  }

  export type AccountSumAggregateOutputType = {
    id: number | null
    balance: Decimal | null
  }

  export type AccountMinAggregateOutputType = {
    id: number | null
    name: string | null
    type: $Enums.AccountType | null
    accountNumber: string | null
    bankName: string | null
    balance: Decimal | null
    isDefault: boolean | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    id: number | null
    name: string | null
    type: $Enums.AccountType | null
    accountNumber: string | null
    bankName: string | null
    balance: Decimal | null
    isDefault: boolean | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    name: number
    type: number
    accountNumber: number
    bankName: number
    balance: number
    isDefault: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    id?: true
    balance?: true
  }

  export type AccountSumAggregateInputType = {
    id?: true
    balance?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    accountNumber?: true
    bankName?: true
    balance?: true
    isDefault?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    accountNumber?: true
    bankName?: true
    balance?: true
    isDefault?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    accountNumber?: true
    bankName?: true
    balance?: true
    isDefault?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: number
    name: string
    type: $Enums.AccountType
    accountNumber: string | null
    bankName: string | null
    balance: Decimal
    isDefault: boolean
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    accountNumber?: boolean
    bankName?: boolean
    balance?: boolean
    isDefault?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    transactions?: boolean | Account$transactionsArgs<ExtArgs>
    transfersFrom?: boolean | Account$transfersFromArgs<ExtArgs>
    transfersTo?: boolean | Account$transfersToArgs<ExtArgs>
    _count?: boolean | AccountCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>


  export type AccountSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    accountNumber?: boolean
    bankName?: boolean
    balance?: boolean
    isDefault?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | Account$transactionsArgs<ExtArgs>
    transfersFrom?: boolean | Account$transfersFromArgs<ExtArgs>
    transfersTo?: boolean | Account$transfersToArgs<ExtArgs>
    _count?: boolean | AccountCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
      transfersFrom: Prisma.$AccountTransferPayload<ExtArgs>[]
      transfersTo: Prisma.$AccountTransferPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      type: $Enums.AccountType
      accountNumber: string | null
      bankName: string | null
      balance: Prisma.Decimal
      isDefault: boolean
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transactions<T extends Account$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, Account$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany"> | Null>
    transfersFrom<T extends Account$transfersFromArgs<ExtArgs> = {}>(args?: Subset<T, Account$transfersFromArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountTransferPayload<ExtArgs>, T, "findMany"> | Null>
    transfersTo<T extends Account$transfersToArgs<ExtArgs> = {}>(args?: Subset<T, Account$transfersToArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountTransferPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */ 
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'Int'>
    readonly name: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'AccountType'>
    readonly accountNumber: FieldRef<"Account", 'String'>
    readonly bankName: FieldRef<"Account", 'String'>
    readonly balance: FieldRef<"Account", 'Decimal'>
    readonly isDefault: FieldRef<"Account", 'Boolean'>
    readonly isActive: FieldRef<"Account", 'Boolean'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
    readonly updatedAt: FieldRef<"Account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
  }

  /**
   * Account.transactions
   */
  export type Account$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Account.transfersFrom
   */
  export type Account$transfersFromArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountTransfer
     */
    select?: AccountTransferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountTransferInclude<ExtArgs> | null
    where?: AccountTransferWhereInput
    orderBy?: AccountTransferOrderByWithRelationInput | AccountTransferOrderByWithRelationInput[]
    cursor?: AccountTransferWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountTransferScalarFieldEnum | AccountTransferScalarFieldEnum[]
  }

  /**
   * Account.transfersTo
   */
  export type Account$transfersToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountTransfer
     */
    select?: AccountTransferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountTransferInclude<ExtArgs> | null
    where?: AccountTransferWhereInput
    orderBy?: AccountTransferOrderByWithRelationInput | AccountTransferOrderByWithRelationInput[]
    cursor?: AccountTransferWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountTransferScalarFieldEnum | AccountTransferScalarFieldEnum[]
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model FundCategory
   */

  export type AggregateFundCategory = {
    _count: FundCategoryCountAggregateOutputType | null
    _avg: FundCategoryAvgAggregateOutputType | null
    _sum: FundCategorySumAggregateOutputType | null
    _min: FundCategoryMinAggregateOutputType | null
    _max: FundCategoryMaxAggregateOutputType | null
  }

  export type FundCategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type FundCategorySumAggregateOutputType = {
    id: number | null
  }

  export type FundCategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    code: string | null
    fundType: $Enums.FundType | null
    description: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FundCategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    code: string | null
    fundType: $Enums.FundType | null
    description: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FundCategoryCountAggregateOutputType = {
    id: number
    name: number
    code: number
    fundType: number
    description: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FundCategoryAvgAggregateInputType = {
    id?: true
  }

  export type FundCategorySumAggregateInputType = {
    id?: true
  }

  export type FundCategoryMinAggregateInputType = {
    id?: true
    name?: true
    code?: true
    fundType?: true
    description?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FundCategoryMaxAggregateInputType = {
    id?: true
    name?: true
    code?: true
    fundType?: true
    description?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FundCategoryCountAggregateInputType = {
    id?: true
    name?: true
    code?: true
    fundType?: true
    description?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FundCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FundCategory to aggregate.
     */
    where?: FundCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FundCategories to fetch.
     */
    orderBy?: FundCategoryOrderByWithRelationInput | FundCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FundCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FundCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FundCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FundCategories
    **/
    _count?: true | FundCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FundCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FundCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FundCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FundCategoryMaxAggregateInputType
  }

  export type GetFundCategoryAggregateType<T extends FundCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateFundCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFundCategory[P]>
      : GetScalarType<T[P], AggregateFundCategory[P]>
  }




  export type FundCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FundCategoryWhereInput
    orderBy?: FundCategoryOrderByWithAggregationInput | FundCategoryOrderByWithAggregationInput[]
    by: FundCategoryScalarFieldEnum[] | FundCategoryScalarFieldEnum
    having?: FundCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FundCategoryCountAggregateInputType | true
    _avg?: FundCategoryAvgAggregateInputType
    _sum?: FundCategorySumAggregateInputType
    _min?: FundCategoryMinAggregateInputType
    _max?: FundCategoryMaxAggregateInputType
  }

  export type FundCategoryGroupByOutputType = {
    id: number
    name: string
    code: string
    fundType: $Enums.FundType
    description: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: FundCategoryCountAggregateOutputType | null
    _avg: FundCategoryAvgAggregateOutputType | null
    _sum: FundCategorySumAggregateOutputType | null
    _min: FundCategoryMinAggregateOutputType | null
    _max: FundCategoryMaxAggregateOutputType | null
  }

  type GetFundCategoryGroupByPayload<T extends FundCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FundCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FundCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FundCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], FundCategoryGroupByOutputType[P]>
        }
      >
    >


  export type FundCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    fundType?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    transactions?: boolean | FundCategory$transactionsArgs<ExtArgs>
    _count?: boolean | FundCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fundCategory"]>


  export type FundCategorySelectScalar = {
    id?: boolean
    name?: boolean
    code?: boolean
    fundType?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FundCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | FundCategory$transactionsArgs<ExtArgs>
    _count?: boolean | FundCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $FundCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FundCategory"
    objects: {
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      code: string
      fundType: $Enums.FundType
      description: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["fundCategory"]>
    composites: {}
  }

  type FundCategoryGetPayload<S extends boolean | null | undefined | FundCategoryDefaultArgs> = $Result.GetResult<Prisma.$FundCategoryPayload, S>

  type FundCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FundCategoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FundCategoryCountAggregateInputType | true
    }

  export interface FundCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FundCategory'], meta: { name: 'FundCategory' } }
    /**
     * Find zero or one FundCategory that matches the filter.
     * @param {FundCategoryFindUniqueArgs} args - Arguments to find a FundCategory
     * @example
     * // Get one FundCategory
     * const fundCategory = await prisma.fundCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FundCategoryFindUniqueArgs>(args: SelectSubset<T, FundCategoryFindUniqueArgs<ExtArgs>>): Prisma__FundCategoryClient<$Result.GetResult<Prisma.$FundCategoryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one FundCategory that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FundCategoryFindUniqueOrThrowArgs} args - Arguments to find a FundCategory
     * @example
     * // Get one FundCategory
     * const fundCategory = await prisma.fundCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FundCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, FundCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FundCategoryClient<$Result.GetResult<Prisma.$FundCategoryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first FundCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundCategoryFindFirstArgs} args - Arguments to find a FundCategory
     * @example
     * // Get one FundCategory
     * const fundCategory = await prisma.fundCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FundCategoryFindFirstArgs>(args?: SelectSubset<T, FundCategoryFindFirstArgs<ExtArgs>>): Prisma__FundCategoryClient<$Result.GetResult<Prisma.$FundCategoryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first FundCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundCategoryFindFirstOrThrowArgs} args - Arguments to find a FundCategory
     * @example
     * // Get one FundCategory
     * const fundCategory = await prisma.fundCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FundCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, FundCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__FundCategoryClient<$Result.GetResult<Prisma.$FundCategoryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more FundCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FundCategories
     * const fundCategories = await prisma.fundCategory.findMany()
     * 
     * // Get first 10 FundCategories
     * const fundCategories = await prisma.fundCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fundCategoryWithIdOnly = await prisma.fundCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FundCategoryFindManyArgs>(args?: SelectSubset<T, FundCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FundCategoryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a FundCategory.
     * @param {FundCategoryCreateArgs} args - Arguments to create a FundCategory.
     * @example
     * // Create one FundCategory
     * const FundCategory = await prisma.fundCategory.create({
     *   data: {
     *     // ... data to create a FundCategory
     *   }
     * })
     * 
     */
    create<T extends FundCategoryCreateArgs>(args: SelectSubset<T, FundCategoryCreateArgs<ExtArgs>>): Prisma__FundCategoryClient<$Result.GetResult<Prisma.$FundCategoryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many FundCategories.
     * @param {FundCategoryCreateManyArgs} args - Arguments to create many FundCategories.
     * @example
     * // Create many FundCategories
     * const fundCategory = await prisma.fundCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FundCategoryCreateManyArgs>(args?: SelectSubset<T, FundCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FundCategory.
     * @param {FundCategoryDeleteArgs} args - Arguments to delete one FundCategory.
     * @example
     * // Delete one FundCategory
     * const FundCategory = await prisma.fundCategory.delete({
     *   where: {
     *     // ... filter to delete one FundCategory
     *   }
     * })
     * 
     */
    delete<T extends FundCategoryDeleteArgs>(args: SelectSubset<T, FundCategoryDeleteArgs<ExtArgs>>): Prisma__FundCategoryClient<$Result.GetResult<Prisma.$FundCategoryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one FundCategory.
     * @param {FundCategoryUpdateArgs} args - Arguments to update one FundCategory.
     * @example
     * // Update one FundCategory
     * const fundCategory = await prisma.fundCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FundCategoryUpdateArgs>(args: SelectSubset<T, FundCategoryUpdateArgs<ExtArgs>>): Prisma__FundCategoryClient<$Result.GetResult<Prisma.$FundCategoryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more FundCategories.
     * @param {FundCategoryDeleteManyArgs} args - Arguments to filter FundCategories to delete.
     * @example
     * // Delete a few FundCategories
     * const { count } = await prisma.fundCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FundCategoryDeleteManyArgs>(args?: SelectSubset<T, FundCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FundCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FundCategories
     * const fundCategory = await prisma.fundCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FundCategoryUpdateManyArgs>(args: SelectSubset<T, FundCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FundCategory.
     * @param {FundCategoryUpsertArgs} args - Arguments to update or create a FundCategory.
     * @example
     * // Update or create a FundCategory
     * const fundCategory = await prisma.fundCategory.upsert({
     *   create: {
     *     // ... data to create a FundCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FundCategory we want to update
     *   }
     * })
     */
    upsert<T extends FundCategoryUpsertArgs>(args: SelectSubset<T, FundCategoryUpsertArgs<ExtArgs>>): Prisma__FundCategoryClient<$Result.GetResult<Prisma.$FundCategoryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of FundCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundCategoryCountArgs} args - Arguments to filter FundCategories to count.
     * @example
     * // Count the number of FundCategories
     * const count = await prisma.fundCategory.count({
     *   where: {
     *     // ... the filter for the FundCategories we want to count
     *   }
     * })
    **/
    count<T extends FundCategoryCountArgs>(
      args?: Subset<T, FundCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FundCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FundCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FundCategoryAggregateArgs>(args: Subset<T, FundCategoryAggregateArgs>): Prisma.PrismaPromise<GetFundCategoryAggregateType<T>>

    /**
     * Group by FundCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FundCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FundCategoryGroupByArgs['orderBy'] }
        : { orderBy?: FundCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FundCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFundCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FundCategory model
   */
  readonly fields: FundCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FundCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FundCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transactions<T extends FundCategory$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, FundCategory$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FundCategory model
   */ 
  interface FundCategoryFieldRefs {
    readonly id: FieldRef<"FundCategory", 'Int'>
    readonly name: FieldRef<"FundCategory", 'String'>
    readonly code: FieldRef<"FundCategory", 'String'>
    readonly fundType: FieldRef<"FundCategory", 'FundType'>
    readonly description: FieldRef<"FundCategory", 'String'>
    readonly isActive: FieldRef<"FundCategory", 'Boolean'>
    readonly createdAt: FieldRef<"FundCategory", 'DateTime'>
    readonly updatedAt: FieldRef<"FundCategory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FundCategory findUnique
   */
  export type FundCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundCategory
     */
    select?: FundCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundCategoryInclude<ExtArgs> | null
    /**
     * Filter, which FundCategory to fetch.
     */
    where: FundCategoryWhereUniqueInput
  }

  /**
   * FundCategory findUniqueOrThrow
   */
  export type FundCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundCategory
     */
    select?: FundCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundCategoryInclude<ExtArgs> | null
    /**
     * Filter, which FundCategory to fetch.
     */
    where: FundCategoryWhereUniqueInput
  }

  /**
   * FundCategory findFirst
   */
  export type FundCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundCategory
     */
    select?: FundCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundCategoryInclude<ExtArgs> | null
    /**
     * Filter, which FundCategory to fetch.
     */
    where?: FundCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FundCategories to fetch.
     */
    orderBy?: FundCategoryOrderByWithRelationInput | FundCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FundCategories.
     */
    cursor?: FundCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FundCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FundCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FundCategories.
     */
    distinct?: FundCategoryScalarFieldEnum | FundCategoryScalarFieldEnum[]
  }

  /**
   * FundCategory findFirstOrThrow
   */
  export type FundCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundCategory
     */
    select?: FundCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundCategoryInclude<ExtArgs> | null
    /**
     * Filter, which FundCategory to fetch.
     */
    where?: FundCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FundCategories to fetch.
     */
    orderBy?: FundCategoryOrderByWithRelationInput | FundCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FundCategories.
     */
    cursor?: FundCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FundCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FundCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FundCategories.
     */
    distinct?: FundCategoryScalarFieldEnum | FundCategoryScalarFieldEnum[]
  }

  /**
   * FundCategory findMany
   */
  export type FundCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundCategory
     */
    select?: FundCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundCategoryInclude<ExtArgs> | null
    /**
     * Filter, which FundCategories to fetch.
     */
    where?: FundCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FundCategories to fetch.
     */
    orderBy?: FundCategoryOrderByWithRelationInput | FundCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FundCategories.
     */
    cursor?: FundCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FundCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FundCategories.
     */
    skip?: number
    distinct?: FundCategoryScalarFieldEnum | FundCategoryScalarFieldEnum[]
  }

  /**
   * FundCategory create
   */
  export type FundCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundCategory
     */
    select?: FundCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a FundCategory.
     */
    data: XOR<FundCategoryCreateInput, FundCategoryUncheckedCreateInput>
  }

  /**
   * FundCategory createMany
   */
  export type FundCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FundCategories.
     */
    data: FundCategoryCreateManyInput | FundCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FundCategory update
   */
  export type FundCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundCategory
     */
    select?: FundCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a FundCategory.
     */
    data: XOR<FundCategoryUpdateInput, FundCategoryUncheckedUpdateInput>
    /**
     * Choose, which FundCategory to update.
     */
    where: FundCategoryWhereUniqueInput
  }

  /**
   * FundCategory updateMany
   */
  export type FundCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FundCategories.
     */
    data: XOR<FundCategoryUpdateManyMutationInput, FundCategoryUncheckedUpdateManyInput>
    /**
     * Filter which FundCategories to update
     */
    where?: FundCategoryWhereInput
  }

  /**
   * FundCategory upsert
   */
  export type FundCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundCategory
     */
    select?: FundCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the FundCategory to update in case it exists.
     */
    where: FundCategoryWhereUniqueInput
    /**
     * In case the FundCategory found by the `where` argument doesn't exist, create a new FundCategory with this data.
     */
    create: XOR<FundCategoryCreateInput, FundCategoryUncheckedCreateInput>
    /**
     * In case the FundCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FundCategoryUpdateInput, FundCategoryUncheckedUpdateInput>
  }

  /**
   * FundCategory delete
   */
  export type FundCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundCategory
     */
    select?: FundCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundCategoryInclude<ExtArgs> | null
    /**
     * Filter which FundCategory to delete.
     */
    where: FundCategoryWhereUniqueInput
  }

  /**
   * FundCategory deleteMany
   */
  export type FundCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FundCategories to delete
     */
    where?: FundCategoryWhereInput
  }

  /**
   * FundCategory.transactions
   */
  export type FundCategory$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * FundCategory without action
   */
  export type FundCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundCategory
     */
    select?: FundCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundCategoryInclude<ExtArgs> | null
  }


  /**
   * Model AccountChart
   */

  export type AggregateAccountChart = {
    _count: AccountChartCountAggregateOutputType | null
    _avg: AccountChartAvgAggregateOutputType | null
    _sum: AccountChartSumAggregateOutputType | null
    _min: AccountChartMinAggregateOutputType | null
    _max: AccountChartMaxAggregateOutputType | null
  }

  export type AccountChartAvgAggregateOutputType = {
    id: number | null
  }

  export type AccountChartSumAggregateOutputType = {
    id: number | null
  }

  export type AccountChartMinAggregateOutputType = {
    id: number | null
    code: string | null
    name: string | null
    type: $Enums.ChartType | null
    description: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountChartMaxAggregateOutputType = {
    id: number | null
    code: string | null
    name: string | null
    type: $Enums.ChartType | null
    description: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountChartCountAggregateOutputType = {
    id: number
    code: number
    name: number
    type: number
    description: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountChartAvgAggregateInputType = {
    id?: true
  }

  export type AccountChartSumAggregateInputType = {
    id?: true
  }

  export type AccountChartMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
    type?: true
    description?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountChartMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
    type?: true
    description?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountChartCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    type?: true
    description?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountChartAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AccountChart to aggregate.
     */
    where?: AccountChartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountCharts to fetch.
     */
    orderBy?: AccountChartOrderByWithRelationInput | AccountChartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountChartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountCharts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountCharts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AccountCharts
    **/
    _count?: true | AccountChartCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountChartAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountChartSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountChartMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountChartMaxAggregateInputType
  }

  export type GetAccountChartAggregateType<T extends AccountChartAggregateArgs> = {
        [P in keyof T & keyof AggregateAccountChart]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccountChart[P]>
      : GetScalarType<T[P], AggregateAccountChart[P]>
  }




  export type AccountChartGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountChartWhereInput
    orderBy?: AccountChartOrderByWithAggregationInput | AccountChartOrderByWithAggregationInput[]
    by: AccountChartScalarFieldEnum[] | AccountChartScalarFieldEnum
    having?: AccountChartScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountChartCountAggregateInputType | true
    _avg?: AccountChartAvgAggregateInputType
    _sum?: AccountChartSumAggregateInputType
    _min?: AccountChartMinAggregateInputType
    _max?: AccountChartMaxAggregateInputType
  }

  export type AccountChartGroupByOutputType = {
    id: number
    code: string
    name: string
    type: $Enums.ChartType
    description: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: AccountChartCountAggregateOutputType | null
    _avg: AccountChartAvgAggregateOutputType | null
    _sum: AccountChartSumAggregateOutputType | null
    _min: AccountChartMinAggregateOutputType | null
    _max: AccountChartMaxAggregateOutputType | null
  }

  type GetAccountChartGroupByPayload<T extends AccountChartGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountChartGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountChartGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountChartGroupByOutputType[P]>
            : GetScalarType<T[P], AccountChartGroupByOutputType[P]>
        }
      >
    >


  export type AccountChartSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    type?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    journalItems?: boolean | AccountChart$journalItemsArgs<ExtArgs>
    _count?: boolean | AccountChartCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accountChart"]>


  export type AccountChartSelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
    type?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountChartInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    journalItems?: boolean | AccountChart$journalItemsArgs<ExtArgs>
    _count?: boolean | AccountChartCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AccountChartPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AccountChart"
    objects: {
      journalItems: Prisma.$JournalItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      code: string
      name: string
      type: $Enums.ChartType
      description: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["accountChart"]>
    composites: {}
  }

  type AccountChartGetPayload<S extends boolean | null | undefined | AccountChartDefaultArgs> = $Result.GetResult<Prisma.$AccountChartPayload, S>

  type AccountChartCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AccountChartFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AccountChartCountAggregateInputType | true
    }

  export interface AccountChartDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AccountChart'], meta: { name: 'AccountChart' } }
    /**
     * Find zero or one AccountChart that matches the filter.
     * @param {AccountChartFindUniqueArgs} args - Arguments to find a AccountChart
     * @example
     * // Get one AccountChart
     * const accountChart = await prisma.accountChart.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountChartFindUniqueArgs>(args: SelectSubset<T, AccountChartFindUniqueArgs<ExtArgs>>): Prisma__AccountChartClient<$Result.GetResult<Prisma.$AccountChartPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AccountChart that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AccountChartFindUniqueOrThrowArgs} args - Arguments to find a AccountChart
     * @example
     * // Get one AccountChart
     * const accountChart = await prisma.accountChart.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountChartFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountChartFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountChartClient<$Result.GetResult<Prisma.$AccountChartPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AccountChart that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountChartFindFirstArgs} args - Arguments to find a AccountChart
     * @example
     * // Get one AccountChart
     * const accountChart = await prisma.accountChart.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountChartFindFirstArgs>(args?: SelectSubset<T, AccountChartFindFirstArgs<ExtArgs>>): Prisma__AccountChartClient<$Result.GetResult<Prisma.$AccountChartPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AccountChart that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountChartFindFirstOrThrowArgs} args - Arguments to find a AccountChart
     * @example
     * // Get one AccountChart
     * const accountChart = await prisma.accountChart.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountChartFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountChartFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountChartClient<$Result.GetResult<Prisma.$AccountChartPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AccountCharts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountChartFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AccountCharts
     * const accountCharts = await prisma.accountChart.findMany()
     * 
     * // Get first 10 AccountCharts
     * const accountCharts = await prisma.accountChart.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountChartWithIdOnly = await prisma.accountChart.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountChartFindManyArgs>(args?: SelectSubset<T, AccountChartFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountChartPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AccountChart.
     * @param {AccountChartCreateArgs} args - Arguments to create a AccountChart.
     * @example
     * // Create one AccountChart
     * const AccountChart = await prisma.accountChart.create({
     *   data: {
     *     // ... data to create a AccountChart
     *   }
     * })
     * 
     */
    create<T extends AccountChartCreateArgs>(args: SelectSubset<T, AccountChartCreateArgs<ExtArgs>>): Prisma__AccountChartClient<$Result.GetResult<Prisma.$AccountChartPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AccountCharts.
     * @param {AccountChartCreateManyArgs} args - Arguments to create many AccountCharts.
     * @example
     * // Create many AccountCharts
     * const accountChart = await prisma.accountChart.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountChartCreateManyArgs>(args?: SelectSubset<T, AccountChartCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AccountChart.
     * @param {AccountChartDeleteArgs} args - Arguments to delete one AccountChart.
     * @example
     * // Delete one AccountChart
     * const AccountChart = await prisma.accountChart.delete({
     *   where: {
     *     // ... filter to delete one AccountChart
     *   }
     * })
     * 
     */
    delete<T extends AccountChartDeleteArgs>(args: SelectSubset<T, AccountChartDeleteArgs<ExtArgs>>): Prisma__AccountChartClient<$Result.GetResult<Prisma.$AccountChartPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AccountChart.
     * @param {AccountChartUpdateArgs} args - Arguments to update one AccountChart.
     * @example
     * // Update one AccountChart
     * const accountChart = await prisma.accountChart.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountChartUpdateArgs>(args: SelectSubset<T, AccountChartUpdateArgs<ExtArgs>>): Prisma__AccountChartClient<$Result.GetResult<Prisma.$AccountChartPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AccountCharts.
     * @param {AccountChartDeleteManyArgs} args - Arguments to filter AccountCharts to delete.
     * @example
     * // Delete a few AccountCharts
     * const { count } = await prisma.accountChart.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountChartDeleteManyArgs>(args?: SelectSubset<T, AccountChartDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AccountCharts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountChartUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AccountCharts
     * const accountChart = await prisma.accountChart.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountChartUpdateManyArgs>(args: SelectSubset<T, AccountChartUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AccountChart.
     * @param {AccountChartUpsertArgs} args - Arguments to update or create a AccountChart.
     * @example
     * // Update or create a AccountChart
     * const accountChart = await prisma.accountChart.upsert({
     *   create: {
     *     // ... data to create a AccountChart
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AccountChart we want to update
     *   }
     * })
     */
    upsert<T extends AccountChartUpsertArgs>(args: SelectSubset<T, AccountChartUpsertArgs<ExtArgs>>): Prisma__AccountChartClient<$Result.GetResult<Prisma.$AccountChartPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AccountCharts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountChartCountArgs} args - Arguments to filter AccountCharts to count.
     * @example
     * // Count the number of AccountCharts
     * const count = await prisma.accountChart.count({
     *   where: {
     *     // ... the filter for the AccountCharts we want to count
     *   }
     * })
    **/
    count<T extends AccountChartCountArgs>(
      args?: Subset<T, AccountChartCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountChartCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AccountChart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountChartAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountChartAggregateArgs>(args: Subset<T, AccountChartAggregateArgs>): Prisma.PrismaPromise<GetAccountChartAggregateType<T>>

    /**
     * Group by AccountChart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountChartGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountChartGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountChartGroupByArgs['orderBy'] }
        : { orderBy?: AccountChartGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountChartGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountChartGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AccountChart model
   */
  readonly fields: AccountChartFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AccountChart.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountChartClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    journalItems<T extends AccountChart$journalItemsArgs<ExtArgs> = {}>(args?: Subset<T, AccountChart$journalItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JournalItemPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AccountChart model
   */ 
  interface AccountChartFieldRefs {
    readonly id: FieldRef<"AccountChart", 'Int'>
    readonly code: FieldRef<"AccountChart", 'String'>
    readonly name: FieldRef<"AccountChart", 'String'>
    readonly type: FieldRef<"AccountChart", 'ChartType'>
    readonly description: FieldRef<"AccountChart", 'String'>
    readonly isActive: FieldRef<"AccountChart", 'Boolean'>
    readonly createdAt: FieldRef<"AccountChart", 'DateTime'>
    readonly updatedAt: FieldRef<"AccountChart", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AccountChart findUnique
   */
  export type AccountChartFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountChart
     */
    select?: AccountChartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountChartInclude<ExtArgs> | null
    /**
     * Filter, which AccountChart to fetch.
     */
    where: AccountChartWhereUniqueInput
  }

  /**
   * AccountChart findUniqueOrThrow
   */
  export type AccountChartFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountChart
     */
    select?: AccountChartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountChartInclude<ExtArgs> | null
    /**
     * Filter, which AccountChart to fetch.
     */
    where: AccountChartWhereUniqueInput
  }

  /**
   * AccountChart findFirst
   */
  export type AccountChartFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountChart
     */
    select?: AccountChartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountChartInclude<ExtArgs> | null
    /**
     * Filter, which AccountChart to fetch.
     */
    where?: AccountChartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountCharts to fetch.
     */
    orderBy?: AccountChartOrderByWithRelationInput | AccountChartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccountCharts.
     */
    cursor?: AccountChartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountCharts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountCharts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccountCharts.
     */
    distinct?: AccountChartScalarFieldEnum | AccountChartScalarFieldEnum[]
  }

  /**
   * AccountChart findFirstOrThrow
   */
  export type AccountChartFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountChart
     */
    select?: AccountChartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountChartInclude<ExtArgs> | null
    /**
     * Filter, which AccountChart to fetch.
     */
    where?: AccountChartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountCharts to fetch.
     */
    orderBy?: AccountChartOrderByWithRelationInput | AccountChartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccountCharts.
     */
    cursor?: AccountChartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountCharts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountCharts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccountCharts.
     */
    distinct?: AccountChartScalarFieldEnum | AccountChartScalarFieldEnum[]
  }

  /**
   * AccountChart findMany
   */
  export type AccountChartFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountChart
     */
    select?: AccountChartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountChartInclude<ExtArgs> | null
    /**
     * Filter, which AccountCharts to fetch.
     */
    where?: AccountChartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountCharts to fetch.
     */
    orderBy?: AccountChartOrderByWithRelationInput | AccountChartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AccountCharts.
     */
    cursor?: AccountChartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountCharts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountCharts.
     */
    skip?: number
    distinct?: AccountChartScalarFieldEnum | AccountChartScalarFieldEnum[]
  }

  /**
   * AccountChart create
   */
  export type AccountChartCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountChart
     */
    select?: AccountChartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountChartInclude<ExtArgs> | null
    /**
     * The data needed to create a AccountChart.
     */
    data: XOR<AccountChartCreateInput, AccountChartUncheckedCreateInput>
  }

  /**
   * AccountChart createMany
   */
  export type AccountChartCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AccountCharts.
     */
    data: AccountChartCreateManyInput | AccountChartCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AccountChart update
   */
  export type AccountChartUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountChart
     */
    select?: AccountChartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountChartInclude<ExtArgs> | null
    /**
     * The data needed to update a AccountChart.
     */
    data: XOR<AccountChartUpdateInput, AccountChartUncheckedUpdateInput>
    /**
     * Choose, which AccountChart to update.
     */
    where: AccountChartWhereUniqueInput
  }

  /**
   * AccountChart updateMany
   */
  export type AccountChartUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AccountCharts.
     */
    data: XOR<AccountChartUpdateManyMutationInput, AccountChartUncheckedUpdateManyInput>
    /**
     * Filter which AccountCharts to update
     */
    where?: AccountChartWhereInput
  }

  /**
   * AccountChart upsert
   */
  export type AccountChartUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountChart
     */
    select?: AccountChartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountChartInclude<ExtArgs> | null
    /**
     * The filter to search for the AccountChart to update in case it exists.
     */
    where: AccountChartWhereUniqueInput
    /**
     * In case the AccountChart found by the `where` argument doesn't exist, create a new AccountChart with this data.
     */
    create: XOR<AccountChartCreateInput, AccountChartUncheckedCreateInput>
    /**
     * In case the AccountChart was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountChartUpdateInput, AccountChartUncheckedUpdateInput>
  }

  /**
   * AccountChart delete
   */
  export type AccountChartDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountChart
     */
    select?: AccountChartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountChartInclude<ExtArgs> | null
    /**
     * Filter which AccountChart to delete.
     */
    where: AccountChartWhereUniqueInput
  }

  /**
   * AccountChart deleteMany
   */
  export type AccountChartDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AccountCharts to delete
     */
    where?: AccountChartWhereInput
  }

  /**
   * AccountChart.journalItems
   */
  export type AccountChart$journalItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalItem
     */
    select?: JournalItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalItemInclude<ExtArgs> | null
    where?: JournalItemWhereInput
    orderBy?: JournalItemOrderByWithRelationInput | JournalItemOrderByWithRelationInput[]
    cursor?: JournalItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JournalItemScalarFieldEnum | JournalItemScalarFieldEnum[]
  }

  /**
   * AccountChart without action
   */
  export type AccountChartDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountChart
     */
    select?: AccountChartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountChartInclude<ExtArgs> | null
  }


  /**
   * Model JournalEntry
   */

  export type AggregateJournalEntry = {
    _count: JournalEntryCountAggregateOutputType | null
    _avg: JournalEntryAvgAggregateOutputType | null
    _sum: JournalEntrySumAggregateOutputType | null
    _min: JournalEntryMinAggregateOutputType | null
    _max: JournalEntryMaxAggregateOutputType | null
  }

  export type JournalEntryAvgAggregateOutputType = {
    id: number | null
    refId: number | null
  }

  export type JournalEntrySumAggregateOutputType = {
    id: number | null
    refId: number | null
  }

  export type JournalEntryMinAggregateOutputType = {
    id: number | null
    entryNumber: string | null
    date: Date | null
    description: string | null
    refType: string | null
    refId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JournalEntryMaxAggregateOutputType = {
    id: number | null
    entryNumber: string | null
    date: Date | null
    description: string | null
    refType: string | null
    refId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JournalEntryCountAggregateOutputType = {
    id: number
    entryNumber: number
    date: number
    description: number
    refType: number
    refId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type JournalEntryAvgAggregateInputType = {
    id?: true
    refId?: true
  }

  export type JournalEntrySumAggregateInputType = {
    id?: true
    refId?: true
  }

  export type JournalEntryMinAggregateInputType = {
    id?: true
    entryNumber?: true
    date?: true
    description?: true
    refType?: true
    refId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JournalEntryMaxAggregateInputType = {
    id?: true
    entryNumber?: true
    date?: true
    description?: true
    refType?: true
    refId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JournalEntryCountAggregateInputType = {
    id?: true
    entryNumber?: true
    date?: true
    description?: true
    refType?: true
    refId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type JournalEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JournalEntry to aggregate.
     */
    where?: JournalEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JournalEntries to fetch.
     */
    orderBy?: JournalEntryOrderByWithRelationInput | JournalEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JournalEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JournalEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JournalEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JournalEntries
    **/
    _count?: true | JournalEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JournalEntryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JournalEntrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JournalEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JournalEntryMaxAggregateInputType
  }

  export type GetJournalEntryAggregateType<T extends JournalEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateJournalEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJournalEntry[P]>
      : GetScalarType<T[P], AggregateJournalEntry[P]>
  }




  export type JournalEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JournalEntryWhereInput
    orderBy?: JournalEntryOrderByWithAggregationInput | JournalEntryOrderByWithAggregationInput[]
    by: JournalEntryScalarFieldEnum[] | JournalEntryScalarFieldEnum
    having?: JournalEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JournalEntryCountAggregateInputType | true
    _avg?: JournalEntryAvgAggregateInputType
    _sum?: JournalEntrySumAggregateInputType
    _min?: JournalEntryMinAggregateInputType
    _max?: JournalEntryMaxAggregateInputType
  }

  export type JournalEntryGroupByOutputType = {
    id: number
    entryNumber: string
    date: Date
    description: string
    refType: string | null
    refId: number | null
    createdAt: Date
    updatedAt: Date
    _count: JournalEntryCountAggregateOutputType | null
    _avg: JournalEntryAvgAggregateOutputType | null
    _sum: JournalEntrySumAggregateOutputType | null
    _min: JournalEntryMinAggregateOutputType | null
    _max: JournalEntryMaxAggregateOutputType | null
  }

  type GetJournalEntryGroupByPayload<T extends JournalEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JournalEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JournalEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JournalEntryGroupByOutputType[P]>
            : GetScalarType<T[P], JournalEntryGroupByOutputType[P]>
        }
      >
    >


  export type JournalEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    entryNumber?: boolean
    date?: boolean
    description?: boolean
    refType?: boolean
    refId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    items?: boolean | JournalEntry$itemsArgs<ExtArgs>
    transaction?: boolean | JournalEntry$transactionArgs<ExtArgs>
    transfer?: boolean | JournalEntry$transferArgs<ExtArgs>
    _count?: boolean | JournalEntryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["journalEntry"]>


  export type JournalEntrySelectScalar = {
    id?: boolean
    entryNumber?: boolean
    date?: boolean
    description?: boolean
    refType?: boolean
    refId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type JournalEntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | JournalEntry$itemsArgs<ExtArgs>
    transaction?: boolean | JournalEntry$transactionArgs<ExtArgs>
    transfer?: boolean | JournalEntry$transferArgs<ExtArgs>
    _count?: boolean | JournalEntryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $JournalEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JournalEntry"
    objects: {
      items: Prisma.$JournalItemPayload<ExtArgs>[]
      transaction: Prisma.$TransactionPayload<ExtArgs> | null
      transfer: Prisma.$AccountTransferPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      entryNumber: string
      date: Date
      description: string
      refType: string | null
      refId: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["journalEntry"]>
    composites: {}
  }

  type JournalEntryGetPayload<S extends boolean | null | undefined | JournalEntryDefaultArgs> = $Result.GetResult<Prisma.$JournalEntryPayload, S>

  type JournalEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<JournalEntryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: JournalEntryCountAggregateInputType | true
    }

  export interface JournalEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JournalEntry'], meta: { name: 'JournalEntry' } }
    /**
     * Find zero or one JournalEntry that matches the filter.
     * @param {JournalEntryFindUniqueArgs} args - Arguments to find a JournalEntry
     * @example
     * // Get one JournalEntry
     * const journalEntry = await prisma.journalEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JournalEntryFindUniqueArgs>(args: SelectSubset<T, JournalEntryFindUniqueArgs<ExtArgs>>): Prisma__JournalEntryClient<$Result.GetResult<Prisma.$JournalEntryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one JournalEntry that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {JournalEntryFindUniqueOrThrowArgs} args - Arguments to find a JournalEntry
     * @example
     * // Get one JournalEntry
     * const journalEntry = await prisma.journalEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JournalEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, JournalEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JournalEntryClient<$Result.GetResult<Prisma.$JournalEntryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first JournalEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JournalEntryFindFirstArgs} args - Arguments to find a JournalEntry
     * @example
     * // Get one JournalEntry
     * const journalEntry = await prisma.journalEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JournalEntryFindFirstArgs>(args?: SelectSubset<T, JournalEntryFindFirstArgs<ExtArgs>>): Prisma__JournalEntryClient<$Result.GetResult<Prisma.$JournalEntryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first JournalEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JournalEntryFindFirstOrThrowArgs} args - Arguments to find a JournalEntry
     * @example
     * // Get one JournalEntry
     * const journalEntry = await prisma.journalEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JournalEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, JournalEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__JournalEntryClient<$Result.GetResult<Prisma.$JournalEntryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more JournalEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JournalEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JournalEntries
     * const journalEntries = await prisma.journalEntry.findMany()
     * 
     * // Get first 10 JournalEntries
     * const journalEntries = await prisma.journalEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const journalEntryWithIdOnly = await prisma.journalEntry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JournalEntryFindManyArgs>(args?: SelectSubset<T, JournalEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JournalEntryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a JournalEntry.
     * @param {JournalEntryCreateArgs} args - Arguments to create a JournalEntry.
     * @example
     * // Create one JournalEntry
     * const JournalEntry = await prisma.journalEntry.create({
     *   data: {
     *     // ... data to create a JournalEntry
     *   }
     * })
     * 
     */
    create<T extends JournalEntryCreateArgs>(args: SelectSubset<T, JournalEntryCreateArgs<ExtArgs>>): Prisma__JournalEntryClient<$Result.GetResult<Prisma.$JournalEntryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many JournalEntries.
     * @param {JournalEntryCreateManyArgs} args - Arguments to create many JournalEntries.
     * @example
     * // Create many JournalEntries
     * const journalEntry = await prisma.journalEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JournalEntryCreateManyArgs>(args?: SelectSubset<T, JournalEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a JournalEntry.
     * @param {JournalEntryDeleteArgs} args - Arguments to delete one JournalEntry.
     * @example
     * // Delete one JournalEntry
     * const JournalEntry = await prisma.journalEntry.delete({
     *   where: {
     *     // ... filter to delete one JournalEntry
     *   }
     * })
     * 
     */
    delete<T extends JournalEntryDeleteArgs>(args: SelectSubset<T, JournalEntryDeleteArgs<ExtArgs>>): Prisma__JournalEntryClient<$Result.GetResult<Prisma.$JournalEntryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one JournalEntry.
     * @param {JournalEntryUpdateArgs} args - Arguments to update one JournalEntry.
     * @example
     * // Update one JournalEntry
     * const journalEntry = await prisma.journalEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JournalEntryUpdateArgs>(args: SelectSubset<T, JournalEntryUpdateArgs<ExtArgs>>): Prisma__JournalEntryClient<$Result.GetResult<Prisma.$JournalEntryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more JournalEntries.
     * @param {JournalEntryDeleteManyArgs} args - Arguments to filter JournalEntries to delete.
     * @example
     * // Delete a few JournalEntries
     * const { count } = await prisma.journalEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JournalEntryDeleteManyArgs>(args?: SelectSubset<T, JournalEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JournalEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JournalEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JournalEntries
     * const journalEntry = await prisma.journalEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JournalEntryUpdateManyArgs>(args: SelectSubset<T, JournalEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one JournalEntry.
     * @param {JournalEntryUpsertArgs} args - Arguments to update or create a JournalEntry.
     * @example
     * // Update or create a JournalEntry
     * const journalEntry = await prisma.journalEntry.upsert({
     *   create: {
     *     // ... data to create a JournalEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JournalEntry we want to update
     *   }
     * })
     */
    upsert<T extends JournalEntryUpsertArgs>(args: SelectSubset<T, JournalEntryUpsertArgs<ExtArgs>>): Prisma__JournalEntryClient<$Result.GetResult<Prisma.$JournalEntryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of JournalEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JournalEntryCountArgs} args - Arguments to filter JournalEntries to count.
     * @example
     * // Count the number of JournalEntries
     * const count = await prisma.journalEntry.count({
     *   where: {
     *     // ... the filter for the JournalEntries we want to count
     *   }
     * })
    **/
    count<T extends JournalEntryCountArgs>(
      args?: Subset<T, JournalEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JournalEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JournalEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JournalEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JournalEntryAggregateArgs>(args: Subset<T, JournalEntryAggregateArgs>): Prisma.PrismaPromise<GetJournalEntryAggregateType<T>>

    /**
     * Group by JournalEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JournalEntryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JournalEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JournalEntryGroupByArgs['orderBy'] }
        : { orderBy?: JournalEntryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JournalEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJournalEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JournalEntry model
   */
  readonly fields: JournalEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JournalEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JournalEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    items<T extends JournalEntry$itemsArgs<ExtArgs> = {}>(args?: Subset<T, JournalEntry$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JournalItemPayload<ExtArgs>, T, "findMany"> | Null>
    transaction<T extends JournalEntry$transactionArgs<ExtArgs> = {}>(args?: Subset<T, JournalEntry$transactionArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    transfer<T extends JournalEntry$transferArgs<ExtArgs> = {}>(args?: Subset<T, JournalEntry$transferArgs<ExtArgs>>): Prisma__AccountTransferClient<$Result.GetResult<Prisma.$AccountTransferPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the JournalEntry model
   */ 
  interface JournalEntryFieldRefs {
    readonly id: FieldRef<"JournalEntry", 'Int'>
    readonly entryNumber: FieldRef<"JournalEntry", 'String'>
    readonly date: FieldRef<"JournalEntry", 'DateTime'>
    readonly description: FieldRef<"JournalEntry", 'String'>
    readonly refType: FieldRef<"JournalEntry", 'String'>
    readonly refId: FieldRef<"JournalEntry", 'Int'>
    readonly createdAt: FieldRef<"JournalEntry", 'DateTime'>
    readonly updatedAt: FieldRef<"JournalEntry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * JournalEntry findUnique
   */
  export type JournalEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntry
     */
    select?: JournalEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryInclude<ExtArgs> | null
    /**
     * Filter, which JournalEntry to fetch.
     */
    where: JournalEntryWhereUniqueInput
  }

  /**
   * JournalEntry findUniqueOrThrow
   */
  export type JournalEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntry
     */
    select?: JournalEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryInclude<ExtArgs> | null
    /**
     * Filter, which JournalEntry to fetch.
     */
    where: JournalEntryWhereUniqueInput
  }

  /**
   * JournalEntry findFirst
   */
  export type JournalEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntry
     */
    select?: JournalEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryInclude<ExtArgs> | null
    /**
     * Filter, which JournalEntry to fetch.
     */
    where?: JournalEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JournalEntries to fetch.
     */
    orderBy?: JournalEntryOrderByWithRelationInput | JournalEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JournalEntries.
     */
    cursor?: JournalEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JournalEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JournalEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JournalEntries.
     */
    distinct?: JournalEntryScalarFieldEnum | JournalEntryScalarFieldEnum[]
  }

  /**
   * JournalEntry findFirstOrThrow
   */
  export type JournalEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntry
     */
    select?: JournalEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryInclude<ExtArgs> | null
    /**
     * Filter, which JournalEntry to fetch.
     */
    where?: JournalEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JournalEntries to fetch.
     */
    orderBy?: JournalEntryOrderByWithRelationInput | JournalEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JournalEntries.
     */
    cursor?: JournalEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JournalEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JournalEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JournalEntries.
     */
    distinct?: JournalEntryScalarFieldEnum | JournalEntryScalarFieldEnum[]
  }

  /**
   * JournalEntry findMany
   */
  export type JournalEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntry
     */
    select?: JournalEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryInclude<ExtArgs> | null
    /**
     * Filter, which JournalEntries to fetch.
     */
    where?: JournalEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JournalEntries to fetch.
     */
    orderBy?: JournalEntryOrderByWithRelationInput | JournalEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JournalEntries.
     */
    cursor?: JournalEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JournalEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JournalEntries.
     */
    skip?: number
    distinct?: JournalEntryScalarFieldEnum | JournalEntryScalarFieldEnum[]
  }

  /**
   * JournalEntry create
   */
  export type JournalEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntry
     */
    select?: JournalEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryInclude<ExtArgs> | null
    /**
     * The data needed to create a JournalEntry.
     */
    data: XOR<JournalEntryCreateInput, JournalEntryUncheckedCreateInput>
  }

  /**
   * JournalEntry createMany
   */
  export type JournalEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JournalEntries.
     */
    data: JournalEntryCreateManyInput | JournalEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JournalEntry update
   */
  export type JournalEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntry
     */
    select?: JournalEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryInclude<ExtArgs> | null
    /**
     * The data needed to update a JournalEntry.
     */
    data: XOR<JournalEntryUpdateInput, JournalEntryUncheckedUpdateInput>
    /**
     * Choose, which JournalEntry to update.
     */
    where: JournalEntryWhereUniqueInput
  }

  /**
   * JournalEntry updateMany
   */
  export type JournalEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JournalEntries.
     */
    data: XOR<JournalEntryUpdateManyMutationInput, JournalEntryUncheckedUpdateManyInput>
    /**
     * Filter which JournalEntries to update
     */
    where?: JournalEntryWhereInput
  }

  /**
   * JournalEntry upsert
   */
  export type JournalEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntry
     */
    select?: JournalEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryInclude<ExtArgs> | null
    /**
     * The filter to search for the JournalEntry to update in case it exists.
     */
    where: JournalEntryWhereUniqueInput
    /**
     * In case the JournalEntry found by the `where` argument doesn't exist, create a new JournalEntry with this data.
     */
    create: XOR<JournalEntryCreateInput, JournalEntryUncheckedCreateInput>
    /**
     * In case the JournalEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JournalEntryUpdateInput, JournalEntryUncheckedUpdateInput>
  }

  /**
   * JournalEntry delete
   */
  export type JournalEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntry
     */
    select?: JournalEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryInclude<ExtArgs> | null
    /**
     * Filter which JournalEntry to delete.
     */
    where: JournalEntryWhereUniqueInput
  }

  /**
   * JournalEntry deleteMany
   */
  export type JournalEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JournalEntries to delete
     */
    where?: JournalEntryWhereInput
  }

  /**
   * JournalEntry.items
   */
  export type JournalEntry$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalItem
     */
    select?: JournalItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalItemInclude<ExtArgs> | null
    where?: JournalItemWhereInput
    orderBy?: JournalItemOrderByWithRelationInput | JournalItemOrderByWithRelationInput[]
    cursor?: JournalItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JournalItemScalarFieldEnum | JournalItemScalarFieldEnum[]
  }

  /**
   * JournalEntry.transaction
   */
  export type JournalEntry$transactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
  }

  /**
   * JournalEntry.transfer
   */
  export type JournalEntry$transferArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountTransfer
     */
    select?: AccountTransferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountTransferInclude<ExtArgs> | null
    where?: AccountTransferWhereInput
  }

  /**
   * JournalEntry without action
   */
  export type JournalEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntry
     */
    select?: JournalEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryInclude<ExtArgs> | null
  }


  /**
   * Model JournalItem
   */

  export type AggregateJournalItem = {
    _count: JournalItemCountAggregateOutputType | null
    _avg: JournalItemAvgAggregateOutputType | null
    _sum: JournalItemSumAggregateOutputType | null
    _min: JournalItemMinAggregateOutputType | null
    _max: JournalItemMaxAggregateOutputType | null
  }

  export type JournalItemAvgAggregateOutputType = {
    id: number | null
    journalEntryId: number | null
    chartId: number | null
    debit: Decimal | null
    credit: Decimal | null
  }

  export type JournalItemSumAggregateOutputType = {
    id: number | null
    journalEntryId: number | null
    chartId: number | null
    debit: Decimal | null
    credit: Decimal | null
  }

  export type JournalItemMinAggregateOutputType = {
    id: number | null
    journalEntryId: number | null
    chartId: number | null
    debit: Decimal | null
    credit: Decimal | null
  }

  export type JournalItemMaxAggregateOutputType = {
    id: number | null
    journalEntryId: number | null
    chartId: number | null
    debit: Decimal | null
    credit: Decimal | null
  }

  export type JournalItemCountAggregateOutputType = {
    id: number
    journalEntryId: number
    chartId: number
    debit: number
    credit: number
    _all: number
  }


  export type JournalItemAvgAggregateInputType = {
    id?: true
    journalEntryId?: true
    chartId?: true
    debit?: true
    credit?: true
  }

  export type JournalItemSumAggregateInputType = {
    id?: true
    journalEntryId?: true
    chartId?: true
    debit?: true
    credit?: true
  }

  export type JournalItemMinAggregateInputType = {
    id?: true
    journalEntryId?: true
    chartId?: true
    debit?: true
    credit?: true
  }

  export type JournalItemMaxAggregateInputType = {
    id?: true
    journalEntryId?: true
    chartId?: true
    debit?: true
    credit?: true
  }

  export type JournalItemCountAggregateInputType = {
    id?: true
    journalEntryId?: true
    chartId?: true
    debit?: true
    credit?: true
    _all?: true
  }

  export type JournalItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JournalItem to aggregate.
     */
    where?: JournalItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JournalItems to fetch.
     */
    orderBy?: JournalItemOrderByWithRelationInput | JournalItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JournalItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JournalItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JournalItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JournalItems
    **/
    _count?: true | JournalItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JournalItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JournalItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JournalItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JournalItemMaxAggregateInputType
  }

  export type GetJournalItemAggregateType<T extends JournalItemAggregateArgs> = {
        [P in keyof T & keyof AggregateJournalItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJournalItem[P]>
      : GetScalarType<T[P], AggregateJournalItem[P]>
  }




  export type JournalItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JournalItemWhereInput
    orderBy?: JournalItemOrderByWithAggregationInput | JournalItemOrderByWithAggregationInput[]
    by: JournalItemScalarFieldEnum[] | JournalItemScalarFieldEnum
    having?: JournalItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JournalItemCountAggregateInputType | true
    _avg?: JournalItemAvgAggregateInputType
    _sum?: JournalItemSumAggregateInputType
    _min?: JournalItemMinAggregateInputType
    _max?: JournalItemMaxAggregateInputType
  }

  export type JournalItemGroupByOutputType = {
    id: number
    journalEntryId: number
    chartId: number
    debit: Decimal
    credit: Decimal
    _count: JournalItemCountAggregateOutputType | null
    _avg: JournalItemAvgAggregateOutputType | null
    _sum: JournalItemSumAggregateOutputType | null
    _min: JournalItemMinAggregateOutputType | null
    _max: JournalItemMaxAggregateOutputType | null
  }

  type GetJournalItemGroupByPayload<T extends JournalItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JournalItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JournalItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JournalItemGroupByOutputType[P]>
            : GetScalarType<T[P], JournalItemGroupByOutputType[P]>
        }
      >
    >


  export type JournalItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    journalEntryId?: boolean
    chartId?: boolean
    debit?: boolean
    credit?: boolean
    journalEntry?: boolean | JournalEntryDefaultArgs<ExtArgs>
    chart?: boolean | AccountChartDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["journalItem"]>


  export type JournalItemSelectScalar = {
    id?: boolean
    journalEntryId?: boolean
    chartId?: boolean
    debit?: boolean
    credit?: boolean
  }

  export type JournalItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    journalEntry?: boolean | JournalEntryDefaultArgs<ExtArgs>
    chart?: boolean | AccountChartDefaultArgs<ExtArgs>
  }

  export type $JournalItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JournalItem"
    objects: {
      journalEntry: Prisma.$JournalEntryPayload<ExtArgs>
      chart: Prisma.$AccountChartPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      journalEntryId: number
      chartId: number
      debit: Prisma.Decimal
      credit: Prisma.Decimal
    }, ExtArgs["result"]["journalItem"]>
    composites: {}
  }

  type JournalItemGetPayload<S extends boolean | null | undefined | JournalItemDefaultArgs> = $Result.GetResult<Prisma.$JournalItemPayload, S>

  type JournalItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<JournalItemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: JournalItemCountAggregateInputType | true
    }

  export interface JournalItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JournalItem'], meta: { name: 'JournalItem' } }
    /**
     * Find zero or one JournalItem that matches the filter.
     * @param {JournalItemFindUniqueArgs} args - Arguments to find a JournalItem
     * @example
     * // Get one JournalItem
     * const journalItem = await prisma.journalItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JournalItemFindUniqueArgs>(args: SelectSubset<T, JournalItemFindUniqueArgs<ExtArgs>>): Prisma__JournalItemClient<$Result.GetResult<Prisma.$JournalItemPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one JournalItem that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {JournalItemFindUniqueOrThrowArgs} args - Arguments to find a JournalItem
     * @example
     * // Get one JournalItem
     * const journalItem = await prisma.journalItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JournalItemFindUniqueOrThrowArgs>(args: SelectSubset<T, JournalItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JournalItemClient<$Result.GetResult<Prisma.$JournalItemPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first JournalItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JournalItemFindFirstArgs} args - Arguments to find a JournalItem
     * @example
     * // Get one JournalItem
     * const journalItem = await prisma.journalItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JournalItemFindFirstArgs>(args?: SelectSubset<T, JournalItemFindFirstArgs<ExtArgs>>): Prisma__JournalItemClient<$Result.GetResult<Prisma.$JournalItemPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first JournalItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JournalItemFindFirstOrThrowArgs} args - Arguments to find a JournalItem
     * @example
     * // Get one JournalItem
     * const journalItem = await prisma.journalItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JournalItemFindFirstOrThrowArgs>(args?: SelectSubset<T, JournalItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__JournalItemClient<$Result.GetResult<Prisma.$JournalItemPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more JournalItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JournalItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JournalItems
     * const journalItems = await prisma.journalItem.findMany()
     * 
     * // Get first 10 JournalItems
     * const journalItems = await prisma.journalItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const journalItemWithIdOnly = await prisma.journalItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JournalItemFindManyArgs>(args?: SelectSubset<T, JournalItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JournalItemPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a JournalItem.
     * @param {JournalItemCreateArgs} args - Arguments to create a JournalItem.
     * @example
     * // Create one JournalItem
     * const JournalItem = await prisma.journalItem.create({
     *   data: {
     *     // ... data to create a JournalItem
     *   }
     * })
     * 
     */
    create<T extends JournalItemCreateArgs>(args: SelectSubset<T, JournalItemCreateArgs<ExtArgs>>): Prisma__JournalItemClient<$Result.GetResult<Prisma.$JournalItemPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many JournalItems.
     * @param {JournalItemCreateManyArgs} args - Arguments to create many JournalItems.
     * @example
     * // Create many JournalItems
     * const journalItem = await prisma.journalItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JournalItemCreateManyArgs>(args?: SelectSubset<T, JournalItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a JournalItem.
     * @param {JournalItemDeleteArgs} args - Arguments to delete one JournalItem.
     * @example
     * // Delete one JournalItem
     * const JournalItem = await prisma.journalItem.delete({
     *   where: {
     *     // ... filter to delete one JournalItem
     *   }
     * })
     * 
     */
    delete<T extends JournalItemDeleteArgs>(args: SelectSubset<T, JournalItemDeleteArgs<ExtArgs>>): Prisma__JournalItemClient<$Result.GetResult<Prisma.$JournalItemPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one JournalItem.
     * @param {JournalItemUpdateArgs} args - Arguments to update one JournalItem.
     * @example
     * // Update one JournalItem
     * const journalItem = await prisma.journalItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JournalItemUpdateArgs>(args: SelectSubset<T, JournalItemUpdateArgs<ExtArgs>>): Prisma__JournalItemClient<$Result.GetResult<Prisma.$JournalItemPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more JournalItems.
     * @param {JournalItemDeleteManyArgs} args - Arguments to filter JournalItems to delete.
     * @example
     * // Delete a few JournalItems
     * const { count } = await prisma.journalItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JournalItemDeleteManyArgs>(args?: SelectSubset<T, JournalItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JournalItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JournalItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JournalItems
     * const journalItem = await prisma.journalItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JournalItemUpdateManyArgs>(args: SelectSubset<T, JournalItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one JournalItem.
     * @param {JournalItemUpsertArgs} args - Arguments to update or create a JournalItem.
     * @example
     * // Update or create a JournalItem
     * const journalItem = await prisma.journalItem.upsert({
     *   create: {
     *     // ... data to create a JournalItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JournalItem we want to update
     *   }
     * })
     */
    upsert<T extends JournalItemUpsertArgs>(args: SelectSubset<T, JournalItemUpsertArgs<ExtArgs>>): Prisma__JournalItemClient<$Result.GetResult<Prisma.$JournalItemPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of JournalItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JournalItemCountArgs} args - Arguments to filter JournalItems to count.
     * @example
     * // Count the number of JournalItems
     * const count = await prisma.journalItem.count({
     *   where: {
     *     // ... the filter for the JournalItems we want to count
     *   }
     * })
    **/
    count<T extends JournalItemCountArgs>(
      args?: Subset<T, JournalItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JournalItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JournalItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JournalItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JournalItemAggregateArgs>(args: Subset<T, JournalItemAggregateArgs>): Prisma.PrismaPromise<GetJournalItemAggregateType<T>>

    /**
     * Group by JournalItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JournalItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JournalItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JournalItemGroupByArgs['orderBy'] }
        : { orderBy?: JournalItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JournalItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJournalItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JournalItem model
   */
  readonly fields: JournalItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JournalItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JournalItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    journalEntry<T extends JournalEntryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, JournalEntryDefaultArgs<ExtArgs>>): Prisma__JournalEntryClient<$Result.GetResult<Prisma.$JournalEntryPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    chart<T extends AccountChartDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccountChartDefaultArgs<ExtArgs>>): Prisma__AccountChartClient<$Result.GetResult<Prisma.$AccountChartPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the JournalItem model
   */ 
  interface JournalItemFieldRefs {
    readonly id: FieldRef<"JournalItem", 'Int'>
    readonly journalEntryId: FieldRef<"JournalItem", 'Int'>
    readonly chartId: FieldRef<"JournalItem", 'Int'>
    readonly debit: FieldRef<"JournalItem", 'Decimal'>
    readonly credit: FieldRef<"JournalItem", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * JournalItem findUnique
   */
  export type JournalItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalItem
     */
    select?: JournalItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalItemInclude<ExtArgs> | null
    /**
     * Filter, which JournalItem to fetch.
     */
    where: JournalItemWhereUniqueInput
  }

  /**
   * JournalItem findUniqueOrThrow
   */
  export type JournalItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalItem
     */
    select?: JournalItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalItemInclude<ExtArgs> | null
    /**
     * Filter, which JournalItem to fetch.
     */
    where: JournalItemWhereUniqueInput
  }

  /**
   * JournalItem findFirst
   */
  export type JournalItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalItem
     */
    select?: JournalItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalItemInclude<ExtArgs> | null
    /**
     * Filter, which JournalItem to fetch.
     */
    where?: JournalItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JournalItems to fetch.
     */
    orderBy?: JournalItemOrderByWithRelationInput | JournalItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JournalItems.
     */
    cursor?: JournalItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JournalItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JournalItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JournalItems.
     */
    distinct?: JournalItemScalarFieldEnum | JournalItemScalarFieldEnum[]
  }

  /**
   * JournalItem findFirstOrThrow
   */
  export type JournalItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalItem
     */
    select?: JournalItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalItemInclude<ExtArgs> | null
    /**
     * Filter, which JournalItem to fetch.
     */
    where?: JournalItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JournalItems to fetch.
     */
    orderBy?: JournalItemOrderByWithRelationInput | JournalItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JournalItems.
     */
    cursor?: JournalItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JournalItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JournalItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JournalItems.
     */
    distinct?: JournalItemScalarFieldEnum | JournalItemScalarFieldEnum[]
  }

  /**
   * JournalItem findMany
   */
  export type JournalItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalItem
     */
    select?: JournalItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalItemInclude<ExtArgs> | null
    /**
     * Filter, which JournalItems to fetch.
     */
    where?: JournalItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JournalItems to fetch.
     */
    orderBy?: JournalItemOrderByWithRelationInput | JournalItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JournalItems.
     */
    cursor?: JournalItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JournalItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JournalItems.
     */
    skip?: number
    distinct?: JournalItemScalarFieldEnum | JournalItemScalarFieldEnum[]
  }

  /**
   * JournalItem create
   */
  export type JournalItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalItem
     */
    select?: JournalItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalItemInclude<ExtArgs> | null
    /**
     * The data needed to create a JournalItem.
     */
    data: XOR<JournalItemCreateInput, JournalItemUncheckedCreateInput>
  }

  /**
   * JournalItem createMany
   */
  export type JournalItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JournalItems.
     */
    data: JournalItemCreateManyInput | JournalItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JournalItem update
   */
  export type JournalItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalItem
     */
    select?: JournalItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalItemInclude<ExtArgs> | null
    /**
     * The data needed to update a JournalItem.
     */
    data: XOR<JournalItemUpdateInput, JournalItemUncheckedUpdateInput>
    /**
     * Choose, which JournalItem to update.
     */
    where: JournalItemWhereUniqueInput
  }

  /**
   * JournalItem updateMany
   */
  export type JournalItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JournalItems.
     */
    data: XOR<JournalItemUpdateManyMutationInput, JournalItemUncheckedUpdateManyInput>
    /**
     * Filter which JournalItems to update
     */
    where?: JournalItemWhereInput
  }

  /**
   * JournalItem upsert
   */
  export type JournalItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalItem
     */
    select?: JournalItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalItemInclude<ExtArgs> | null
    /**
     * The filter to search for the JournalItem to update in case it exists.
     */
    where: JournalItemWhereUniqueInput
    /**
     * In case the JournalItem found by the `where` argument doesn't exist, create a new JournalItem with this data.
     */
    create: XOR<JournalItemCreateInput, JournalItemUncheckedCreateInput>
    /**
     * In case the JournalItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JournalItemUpdateInput, JournalItemUncheckedUpdateInput>
  }

  /**
   * JournalItem delete
   */
  export type JournalItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalItem
     */
    select?: JournalItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalItemInclude<ExtArgs> | null
    /**
     * Filter which JournalItem to delete.
     */
    where: JournalItemWhereUniqueInput
  }

  /**
   * JournalItem deleteMany
   */
  export type JournalItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JournalItems to delete
     */
    where?: JournalItemWhereInput
  }

  /**
   * JournalItem without action
   */
  export type JournalItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalItem
     */
    select?: JournalItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalItemInclude<ExtArgs> | null
  }


  /**
   * Model AccountTransfer
   */

  export type AggregateAccountTransfer = {
    _count: AccountTransferCountAggregateOutputType | null
    _avg: AccountTransferAvgAggregateOutputType | null
    _sum: AccountTransferSumAggregateOutputType | null
    _min: AccountTransferMinAggregateOutputType | null
    _max: AccountTransferMaxAggregateOutputType | null
  }

  export type AccountTransferAvgAggregateOutputType = {
    id: number | null
    sourceAccountId: number | null
    targetAccountId: number | null
    amount: Decimal | null
    journalEntryId: number | null
    createdBy: number | null
  }

  export type AccountTransferSumAggregateOutputType = {
    id: number | null
    sourceAccountId: number | null
    targetAccountId: number | null
    amount: Decimal | null
    journalEntryId: number | null
    createdBy: number | null
  }

  export type AccountTransferMinAggregateOutputType = {
    id: number | null
    date: Date | null
    sourceAccountId: number | null
    targetAccountId: number | null
    amount: Decimal | null
    description: string | null
    journalEntryId: number | null
    createdBy: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountTransferMaxAggregateOutputType = {
    id: number | null
    date: Date | null
    sourceAccountId: number | null
    targetAccountId: number | null
    amount: Decimal | null
    description: string | null
    journalEntryId: number | null
    createdBy: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountTransferCountAggregateOutputType = {
    id: number
    date: number
    sourceAccountId: number
    targetAccountId: number
    amount: number
    description: number
    journalEntryId: number
    createdBy: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountTransferAvgAggregateInputType = {
    id?: true
    sourceAccountId?: true
    targetAccountId?: true
    amount?: true
    journalEntryId?: true
    createdBy?: true
  }

  export type AccountTransferSumAggregateInputType = {
    id?: true
    sourceAccountId?: true
    targetAccountId?: true
    amount?: true
    journalEntryId?: true
    createdBy?: true
  }

  export type AccountTransferMinAggregateInputType = {
    id?: true
    date?: true
    sourceAccountId?: true
    targetAccountId?: true
    amount?: true
    description?: true
    journalEntryId?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountTransferMaxAggregateInputType = {
    id?: true
    date?: true
    sourceAccountId?: true
    targetAccountId?: true
    amount?: true
    description?: true
    journalEntryId?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountTransferCountAggregateInputType = {
    id?: true
    date?: true
    sourceAccountId?: true
    targetAccountId?: true
    amount?: true
    description?: true
    journalEntryId?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountTransferAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AccountTransfer to aggregate.
     */
    where?: AccountTransferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountTransfers to fetch.
     */
    orderBy?: AccountTransferOrderByWithRelationInput | AccountTransferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountTransferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountTransfers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountTransfers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AccountTransfers
    **/
    _count?: true | AccountTransferCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountTransferAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountTransferSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountTransferMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountTransferMaxAggregateInputType
  }

  export type GetAccountTransferAggregateType<T extends AccountTransferAggregateArgs> = {
        [P in keyof T & keyof AggregateAccountTransfer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccountTransfer[P]>
      : GetScalarType<T[P], AggregateAccountTransfer[P]>
  }




  export type AccountTransferGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountTransferWhereInput
    orderBy?: AccountTransferOrderByWithAggregationInput | AccountTransferOrderByWithAggregationInput[]
    by: AccountTransferScalarFieldEnum[] | AccountTransferScalarFieldEnum
    having?: AccountTransferScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountTransferCountAggregateInputType | true
    _avg?: AccountTransferAvgAggregateInputType
    _sum?: AccountTransferSumAggregateInputType
    _min?: AccountTransferMinAggregateInputType
    _max?: AccountTransferMaxAggregateInputType
  }

  export type AccountTransferGroupByOutputType = {
    id: number
    date: Date
    sourceAccountId: number
    targetAccountId: number
    amount: Decimal
    description: string | null
    journalEntryId: number | null
    createdBy: number
    createdAt: Date
    updatedAt: Date
    _count: AccountTransferCountAggregateOutputType | null
    _avg: AccountTransferAvgAggregateOutputType | null
    _sum: AccountTransferSumAggregateOutputType | null
    _min: AccountTransferMinAggregateOutputType | null
    _max: AccountTransferMaxAggregateOutputType | null
  }

  type GetAccountTransferGroupByPayload<T extends AccountTransferGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountTransferGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountTransferGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountTransferGroupByOutputType[P]>
            : GetScalarType<T[P], AccountTransferGroupByOutputType[P]>
        }
      >
    >


  export type AccountTransferSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    sourceAccountId?: boolean
    targetAccountId?: boolean
    amount?: boolean
    description?: boolean
    journalEntryId?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sourceAccount?: boolean | AccountDefaultArgs<ExtArgs>
    targetAccount?: boolean | AccountDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    journalEntry?: boolean | AccountTransfer$journalEntryArgs<ExtArgs>
  }, ExtArgs["result"]["accountTransfer"]>


  export type AccountTransferSelectScalar = {
    id?: boolean
    date?: boolean
    sourceAccountId?: boolean
    targetAccountId?: boolean
    amount?: boolean
    description?: boolean
    journalEntryId?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountTransferInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sourceAccount?: boolean | AccountDefaultArgs<ExtArgs>
    targetAccount?: boolean | AccountDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    journalEntry?: boolean | AccountTransfer$journalEntryArgs<ExtArgs>
  }

  export type $AccountTransferPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AccountTransfer"
    objects: {
      sourceAccount: Prisma.$AccountPayload<ExtArgs>
      targetAccount: Prisma.$AccountPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      journalEntry: Prisma.$JournalEntryPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      date: Date
      sourceAccountId: number
      targetAccountId: number
      amount: Prisma.Decimal
      description: string | null
      journalEntryId: number | null
      createdBy: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["accountTransfer"]>
    composites: {}
  }

  type AccountTransferGetPayload<S extends boolean | null | undefined | AccountTransferDefaultArgs> = $Result.GetResult<Prisma.$AccountTransferPayload, S>

  type AccountTransferCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AccountTransferFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AccountTransferCountAggregateInputType | true
    }

  export interface AccountTransferDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AccountTransfer'], meta: { name: 'AccountTransfer' } }
    /**
     * Find zero or one AccountTransfer that matches the filter.
     * @param {AccountTransferFindUniqueArgs} args - Arguments to find a AccountTransfer
     * @example
     * // Get one AccountTransfer
     * const accountTransfer = await prisma.accountTransfer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountTransferFindUniqueArgs>(args: SelectSubset<T, AccountTransferFindUniqueArgs<ExtArgs>>): Prisma__AccountTransferClient<$Result.GetResult<Prisma.$AccountTransferPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AccountTransfer that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AccountTransferFindUniqueOrThrowArgs} args - Arguments to find a AccountTransfer
     * @example
     * // Get one AccountTransfer
     * const accountTransfer = await prisma.accountTransfer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountTransferFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountTransferFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountTransferClient<$Result.GetResult<Prisma.$AccountTransferPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AccountTransfer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountTransferFindFirstArgs} args - Arguments to find a AccountTransfer
     * @example
     * // Get one AccountTransfer
     * const accountTransfer = await prisma.accountTransfer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountTransferFindFirstArgs>(args?: SelectSubset<T, AccountTransferFindFirstArgs<ExtArgs>>): Prisma__AccountTransferClient<$Result.GetResult<Prisma.$AccountTransferPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AccountTransfer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountTransferFindFirstOrThrowArgs} args - Arguments to find a AccountTransfer
     * @example
     * // Get one AccountTransfer
     * const accountTransfer = await prisma.accountTransfer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountTransferFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountTransferFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountTransferClient<$Result.GetResult<Prisma.$AccountTransferPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AccountTransfers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountTransferFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AccountTransfers
     * const accountTransfers = await prisma.accountTransfer.findMany()
     * 
     * // Get first 10 AccountTransfers
     * const accountTransfers = await prisma.accountTransfer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountTransferWithIdOnly = await prisma.accountTransfer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountTransferFindManyArgs>(args?: SelectSubset<T, AccountTransferFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountTransferPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AccountTransfer.
     * @param {AccountTransferCreateArgs} args - Arguments to create a AccountTransfer.
     * @example
     * // Create one AccountTransfer
     * const AccountTransfer = await prisma.accountTransfer.create({
     *   data: {
     *     // ... data to create a AccountTransfer
     *   }
     * })
     * 
     */
    create<T extends AccountTransferCreateArgs>(args: SelectSubset<T, AccountTransferCreateArgs<ExtArgs>>): Prisma__AccountTransferClient<$Result.GetResult<Prisma.$AccountTransferPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AccountTransfers.
     * @param {AccountTransferCreateManyArgs} args - Arguments to create many AccountTransfers.
     * @example
     * // Create many AccountTransfers
     * const accountTransfer = await prisma.accountTransfer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountTransferCreateManyArgs>(args?: SelectSubset<T, AccountTransferCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AccountTransfer.
     * @param {AccountTransferDeleteArgs} args - Arguments to delete one AccountTransfer.
     * @example
     * // Delete one AccountTransfer
     * const AccountTransfer = await prisma.accountTransfer.delete({
     *   where: {
     *     // ... filter to delete one AccountTransfer
     *   }
     * })
     * 
     */
    delete<T extends AccountTransferDeleteArgs>(args: SelectSubset<T, AccountTransferDeleteArgs<ExtArgs>>): Prisma__AccountTransferClient<$Result.GetResult<Prisma.$AccountTransferPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AccountTransfer.
     * @param {AccountTransferUpdateArgs} args - Arguments to update one AccountTransfer.
     * @example
     * // Update one AccountTransfer
     * const accountTransfer = await prisma.accountTransfer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountTransferUpdateArgs>(args: SelectSubset<T, AccountTransferUpdateArgs<ExtArgs>>): Prisma__AccountTransferClient<$Result.GetResult<Prisma.$AccountTransferPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AccountTransfers.
     * @param {AccountTransferDeleteManyArgs} args - Arguments to filter AccountTransfers to delete.
     * @example
     * // Delete a few AccountTransfers
     * const { count } = await prisma.accountTransfer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountTransferDeleteManyArgs>(args?: SelectSubset<T, AccountTransferDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AccountTransfers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountTransferUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AccountTransfers
     * const accountTransfer = await prisma.accountTransfer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountTransferUpdateManyArgs>(args: SelectSubset<T, AccountTransferUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AccountTransfer.
     * @param {AccountTransferUpsertArgs} args - Arguments to update or create a AccountTransfer.
     * @example
     * // Update or create a AccountTransfer
     * const accountTransfer = await prisma.accountTransfer.upsert({
     *   create: {
     *     // ... data to create a AccountTransfer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AccountTransfer we want to update
     *   }
     * })
     */
    upsert<T extends AccountTransferUpsertArgs>(args: SelectSubset<T, AccountTransferUpsertArgs<ExtArgs>>): Prisma__AccountTransferClient<$Result.GetResult<Prisma.$AccountTransferPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AccountTransfers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountTransferCountArgs} args - Arguments to filter AccountTransfers to count.
     * @example
     * // Count the number of AccountTransfers
     * const count = await prisma.accountTransfer.count({
     *   where: {
     *     // ... the filter for the AccountTransfers we want to count
     *   }
     * })
    **/
    count<T extends AccountTransferCountArgs>(
      args?: Subset<T, AccountTransferCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountTransferCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AccountTransfer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountTransferAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountTransferAggregateArgs>(args: Subset<T, AccountTransferAggregateArgs>): Prisma.PrismaPromise<GetAccountTransferAggregateType<T>>

    /**
     * Group by AccountTransfer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountTransferGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountTransferGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountTransferGroupByArgs['orderBy'] }
        : { orderBy?: AccountTransferGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountTransferGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountTransferGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AccountTransfer model
   */
  readonly fields: AccountTransferFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AccountTransfer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountTransferClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sourceAccount<T extends AccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccountDefaultArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    targetAccount<T extends AccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccountDefaultArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    journalEntry<T extends AccountTransfer$journalEntryArgs<ExtArgs> = {}>(args?: Subset<T, AccountTransfer$journalEntryArgs<ExtArgs>>): Prisma__JournalEntryClient<$Result.GetResult<Prisma.$JournalEntryPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AccountTransfer model
   */ 
  interface AccountTransferFieldRefs {
    readonly id: FieldRef<"AccountTransfer", 'Int'>
    readonly date: FieldRef<"AccountTransfer", 'DateTime'>
    readonly sourceAccountId: FieldRef<"AccountTransfer", 'Int'>
    readonly targetAccountId: FieldRef<"AccountTransfer", 'Int'>
    readonly amount: FieldRef<"AccountTransfer", 'Decimal'>
    readonly description: FieldRef<"AccountTransfer", 'String'>
    readonly journalEntryId: FieldRef<"AccountTransfer", 'Int'>
    readonly createdBy: FieldRef<"AccountTransfer", 'Int'>
    readonly createdAt: FieldRef<"AccountTransfer", 'DateTime'>
    readonly updatedAt: FieldRef<"AccountTransfer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AccountTransfer findUnique
   */
  export type AccountTransferFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountTransfer
     */
    select?: AccountTransferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountTransferInclude<ExtArgs> | null
    /**
     * Filter, which AccountTransfer to fetch.
     */
    where: AccountTransferWhereUniqueInput
  }

  /**
   * AccountTransfer findUniqueOrThrow
   */
  export type AccountTransferFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountTransfer
     */
    select?: AccountTransferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountTransferInclude<ExtArgs> | null
    /**
     * Filter, which AccountTransfer to fetch.
     */
    where: AccountTransferWhereUniqueInput
  }

  /**
   * AccountTransfer findFirst
   */
  export type AccountTransferFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountTransfer
     */
    select?: AccountTransferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountTransferInclude<ExtArgs> | null
    /**
     * Filter, which AccountTransfer to fetch.
     */
    where?: AccountTransferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountTransfers to fetch.
     */
    orderBy?: AccountTransferOrderByWithRelationInput | AccountTransferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccountTransfers.
     */
    cursor?: AccountTransferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountTransfers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountTransfers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccountTransfers.
     */
    distinct?: AccountTransferScalarFieldEnum | AccountTransferScalarFieldEnum[]
  }

  /**
   * AccountTransfer findFirstOrThrow
   */
  export type AccountTransferFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountTransfer
     */
    select?: AccountTransferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountTransferInclude<ExtArgs> | null
    /**
     * Filter, which AccountTransfer to fetch.
     */
    where?: AccountTransferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountTransfers to fetch.
     */
    orderBy?: AccountTransferOrderByWithRelationInput | AccountTransferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccountTransfers.
     */
    cursor?: AccountTransferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountTransfers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountTransfers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccountTransfers.
     */
    distinct?: AccountTransferScalarFieldEnum | AccountTransferScalarFieldEnum[]
  }

  /**
   * AccountTransfer findMany
   */
  export type AccountTransferFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountTransfer
     */
    select?: AccountTransferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountTransferInclude<ExtArgs> | null
    /**
     * Filter, which AccountTransfers to fetch.
     */
    where?: AccountTransferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountTransfers to fetch.
     */
    orderBy?: AccountTransferOrderByWithRelationInput | AccountTransferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AccountTransfers.
     */
    cursor?: AccountTransferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountTransfers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountTransfers.
     */
    skip?: number
    distinct?: AccountTransferScalarFieldEnum | AccountTransferScalarFieldEnum[]
  }

  /**
   * AccountTransfer create
   */
  export type AccountTransferCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountTransfer
     */
    select?: AccountTransferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountTransferInclude<ExtArgs> | null
    /**
     * The data needed to create a AccountTransfer.
     */
    data: XOR<AccountTransferCreateInput, AccountTransferUncheckedCreateInput>
  }

  /**
   * AccountTransfer createMany
   */
  export type AccountTransferCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AccountTransfers.
     */
    data: AccountTransferCreateManyInput | AccountTransferCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AccountTransfer update
   */
  export type AccountTransferUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountTransfer
     */
    select?: AccountTransferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountTransferInclude<ExtArgs> | null
    /**
     * The data needed to update a AccountTransfer.
     */
    data: XOR<AccountTransferUpdateInput, AccountTransferUncheckedUpdateInput>
    /**
     * Choose, which AccountTransfer to update.
     */
    where: AccountTransferWhereUniqueInput
  }

  /**
   * AccountTransfer updateMany
   */
  export type AccountTransferUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AccountTransfers.
     */
    data: XOR<AccountTransferUpdateManyMutationInput, AccountTransferUncheckedUpdateManyInput>
    /**
     * Filter which AccountTransfers to update
     */
    where?: AccountTransferWhereInput
  }

  /**
   * AccountTransfer upsert
   */
  export type AccountTransferUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountTransfer
     */
    select?: AccountTransferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountTransferInclude<ExtArgs> | null
    /**
     * The filter to search for the AccountTransfer to update in case it exists.
     */
    where: AccountTransferWhereUniqueInput
    /**
     * In case the AccountTransfer found by the `where` argument doesn't exist, create a new AccountTransfer with this data.
     */
    create: XOR<AccountTransferCreateInput, AccountTransferUncheckedCreateInput>
    /**
     * In case the AccountTransfer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountTransferUpdateInput, AccountTransferUncheckedUpdateInput>
  }

  /**
   * AccountTransfer delete
   */
  export type AccountTransferDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountTransfer
     */
    select?: AccountTransferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountTransferInclude<ExtArgs> | null
    /**
     * Filter which AccountTransfer to delete.
     */
    where: AccountTransferWhereUniqueInput
  }

  /**
   * AccountTransfer deleteMany
   */
  export type AccountTransferDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AccountTransfers to delete
     */
    where?: AccountTransferWhereInput
  }

  /**
   * AccountTransfer.journalEntry
   */
  export type AccountTransfer$journalEntryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntry
     */
    select?: JournalEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryInclude<ExtArgs> | null
    where?: JournalEntryWhereInput
  }

  /**
   * AccountTransfer without action
   */
  export type AccountTransferDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountTransfer
     */
    select?: AccountTransferSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountTransferInclude<ExtArgs> | null
  }


  /**
   * Model Transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    id: number | null
    amount: Decimal | null
    accountId: number | null
    fundCategoryId: number | null
    journalEntryId: number | null
    createdBy: number | null
  }

  export type TransactionSumAggregateOutputType = {
    id: number | null
    amount: Decimal | null
    accountId: number | null
    fundCategoryId: number | null
    journalEntryId: number | null
    createdBy: number | null
  }

  export type TransactionMinAggregateOutputType = {
    id: number | null
    date: Date | null
    type: $Enums.TransactionType | null
    amount: Decimal | null
    description: string | null
    category: string | null
    accountId: number | null
    fundCategoryId: number | null
    attachmentUrl: string | null
    journalEntryId: number | null
    createdBy: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: number | null
    date: Date | null
    type: $Enums.TransactionType | null
    amount: Decimal | null
    description: string | null
    category: string | null
    accountId: number | null
    fundCategoryId: number | null
    attachmentUrl: string | null
    journalEntryId: number | null
    createdBy: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    date: number
    type: number
    amount: number
    description: number
    category: number
    accountId: number
    fundCategoryId: number
    attachmentUrl: number
    journalEntryId: number
    createdBy: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    id?: true
    amount?: true
    accountId?: true
    fundCategoryId?: true
    journalEntryId?: true
    createdBy?: true
  }

  export type TransactionSumAggregateInputType = {
    id?: true
    amount?: true
    accountId?: true
    fundCategoryId?: true
    journalEntryId?: true
    createdBy?: true
  }

  export type TransactionMinAggregateInputType = {
    id?: true
    date?: true
    type?: true
    amount?: true
    description?: true
    category?: true
    accountId?: true
    fundCategoryId?: true
    attachmentUrl?: true
    journalEntryId?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    date?: true
    type?: true
    amount?: true
    description?: true
    category?: true
    accountId?: true
    fundCategoryId?: true
    attachmentUrl?: true
    journalEntryId?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    date?: true
    type?: true
    amount?: true
    description?: true
    category?: true
    accountId?: true
    fundCategoryId?: true
    attachmentUrl?: true
    journalEntryId?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type TransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithAggregationInput | TransactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: TransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    id: number
    date: Date
    type: $Enums.TransactionType
    amount: Decimal
    description: string | null
    category: string
    accountId: number | null
    fundCategoryId: number | null
    attachmentUrl: string | null
    journalEntryId: number | null
    createdBy: number
    createdAt: Date
    updatedAt: Date
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type TransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    type?: boolean
    amount?: boolean
    description?: boolean
    category?: boolean
    accountId?: boolean
    fundCategoryId?: boolean
    attachmentUrl?: boolean
    journalEntryId?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    account?: boolean | Transaction$accountArgs<ExtArgs>
    fundCategory?: boolean | Transaction$fundCategoryArgs<ExtArgs>
    journalEntry?: boolean | Transaction$journalEntryArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>


  export type TransactionSelectScalar = {
    id?: boolean
    date?: boolean
    type?: boolean
    amount?: boolean
    description?: boolean
    category?: boolean
    accountId?: boolean
    fundCategoryId?: boolean
    attachmentUrl?: boolean
    journalEntryId?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    account?: boolean | Transaction$accountArgs<ExtArgs>
    fundCategory?: boolean | Transaction$fundCategoryArgs<ExtArgs>
    journalEntry?: boolean | Transaction$journalEntryArgs<ExtArgs>
  }

  export type $TransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaction"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      account: Prisma.$AccountPayload<ExtArgs> | null
      fundCategory: Prisma.$FundCategoryPayload<ExtArgs> | null
      journalEntry: Prisma.$JournalEntryPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      date: Date
      type: $Enums.TransactionType
      amount: Prisma.Decimal
      description: string | null
      category: string
      accountId: number | null
      fundCategoryId: number | null
      attachmentUrl: string | null
      journalEntryId: number | null
      createdBy: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type TransactionGetPayload<S extends boolean | null | undefined | TransactionDefaultArgs> = $Result.GetResult<Prisma.$TransactionPayload, S>

  type TransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TransactionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface TransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaction'], meta: { name: 'Transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionFindUniqueArgs>(args: SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionFindFirstArgs>(args?: SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionFindManyArgs>(args?: SelectSubset<T, TransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
     */
    create<T extends TransactionCreateArgs>(args: SelectSubset<T, TransactionCreateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Transactions.
     * @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionCreateManyArgs>(args?: SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
     */
    delete<T extends TransactionDeleteArgs>(args: SelectSubset<T, TransactionDeleteArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionUpdateArgs>(args: SelectSubset<T, TransactionUpdateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionDeleteManyArgs>(args?: SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionUpdateManyArgs>(args: SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends TransactionUpsertArgs>(args: SelectSubset<T, TransactionUpsertArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionCountArgs>(
      args?: Subset<T, TransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionGroupByArgs['orderBy'] }
        : { orderBy?: TransactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaction model
   */
  readonly fields: TransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    account<T extends Transaction$accountArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$accountArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    fundCategory<T extends Transaction$fundCategoryArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$fundCategoryArgs<ExtArgs>>): Prisma__FundCategoryClient<$Result.GetResult<Prisma.$FundCategoryPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    journalEntry<T extends Transaction$journalEntryArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$journalEntryArgs<ExtArgs>>): Prisma__JournalEntryClient<$Result.GetResult<Prisma.$JournalEntryPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Transaction model
   */ 
  interface TransactionFieldRefs {
    readonly id: FieldRef<"Transaction", 'Int'>
    readonly date: FieldRef<"Transaction", 'DateTime'>
    readonly type: FieldRef<"Transaction", 'TransactionType'>
    readonly amount: FieldRef<"Transaction", 'Decimal'>
    readonly description: FieldRef<"Transaction", 'String'>
    readonly category: FieldRef<"Transaction", 'String'>
    readonly accountId: FieldRef<"Transaction", 'Int'>
    readonly fundCategoryId: FieldRef<"Transaction", 'Int'>
    readonly attachmentUrl: FieldRef<"Transaction", 'String'>
    readonly journalEntryId: FieldRef<"Transaction", 'Int'>
    readonly createdBy: FieldRef<"Transaction", 'Int'>
    readonly createdAt: FieldRef<"Transaction", 'DateTime'>
    readonly updatedAt: FieldRef<"Transaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Transaction findUnique
   */
  export type TransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findUniqueOrThrow
   */
  export type TransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findFirst
   */
  export type TransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findFirstOrThrow
   */
  export type TransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findMany
   */
  export type TransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction create
   */
  export type TransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Transaction.
     */
    data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
  }

  /**
   * Transaction createMany
   */
  export type TransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transaction update
   */
  export type TransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Transaction.
     */
    data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
    /**
     * Choose, which Transaction to update.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction updateMany
   */
  export type TransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
  }

  /**
   * Transaction upsert
   */
  export type TransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: TransactionWhereUniqueInput
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
  }

  /**
   * Transaction delete
   */
  export type TransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter which Transaction to delete.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction deleteMany
   */
  export type TransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionWhereInput
  }

  /**
   * Transaction.account
   */
  export type Transaction$accountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
  }

  /**
   * Transaction.fundCategory
   */
  export type Transaction$fundCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FundCategory
     */
    select?: FundCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FundCategoryInclude<ExtArgs> | null
    where?: FundCategoryWhereInput
  }

  /**
   * Transaction.journalEntry
   */
  export type Transaction$journalEntryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntry
     */
    select?: JournalEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryInclude<ExtArgs> | null
    where?: JournalEntryWhereInput
  }

  /**
   * Transaction without action
   */
  export type TransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    name: 'name',
    role: 'role',
    permissions: 'permissions',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    accountNumber: 'accountNumber',
    bankName: 'bankName',
    balance: 'balance',
    isDefault: 'isDefault',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const FundCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    code: 'code',
    fundType: 'fundType',
    description: 'description',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FundCategoryScalarFieldEnum = (typeof FundCategoryScalarFieldEnum)[keyof typeof FundCategoryScalarFieldEnum]


  export const AccountChartScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name',
    type: 'type',
    description: 'description',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountChartScalarFieldEnum = (typeof AccountChartScalarFieldEnum)[keyof typeof AccountChartScalarFieldEnum]


  export const JournalEntryScalarFieldEnum: {
    id: 'id',
    entryNumber: 'entryNumber',
    date: 'date',
    description: 'description',
    refType: 'refType',
    refId: 'refId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type JournalEntryScalarFieldEnum = (typeof JournalEntryScalarFieldEnum)[keyof typeof JournalEntryScalarFieldEnum]


  export const JournalItemScalarFieldEnum: {
    id: 'id',
    journalEntryId: 'journalEntryId',
    chartId: 'chartId',
    debit: 'debit',
    credit: 'credit'
  };

  export type JournalItemScalarFieldEnum = (typeof JournalItemScalarFieldEnum)[keyof typeof JournalItemScalarFieldEnum]


  export const AccountTransferScalarFieldEnum: {
    id: 'id',
    date: 'date',
    sourceAccountId: 'sourceAccountId',
    targetAccountId: 'targetAccountId',
    amount: 'amount',
    description: 'description',
    journalEntryId: 'journalEntryId',
    createdBy: 'createdBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountTransferScalarFieldEnum = (typeof AccountTransferScalarFieldEnum)[keyof typeof AccountTransferScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    id: 'id',
    date: 'date',
    type: 'type',
    amount: 'amount',
    description: 'description',
    category: 'category',
    accountId: 'accountId',
    fundCategoryId: 'fundCategoryId',
    attachmentUrl: 'attachmentUrl',
    journalEntryId: 'journalEntryId',
    createdBy: 'createdBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'AccountType'
   */
  export type EnumAccountTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AccountType'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'FundType'
   */
  export type EnumFundTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FundType'>
    


  /**
   * Reference to a field of type 'ChartType'
   */
  export type EnumChartTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ChartType'>
    


  /**
   * Reference to a field of type 'TransactionType'
   */
  export type EnumTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionType'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    permissions?: JsonNullableFilter<"User">
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    transactions?: TransactionListRelationFilter
    transfers?: AccountTransferListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    permissions?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    transactions?: TransactionOrderByRelationAggregateInput
    transfers?: AccountTransferOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    permissions?: JsonNullableFilter<"User">
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    transactions?: TransactionListRelationFilter
    transfers?: AccountTransferListRelationFilter
  }, "id" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    permissions?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    permissions?: JsonNullableWithAggregatesFilter<"User">
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: IntFilter<"Account"> | number
    name?: StringFilter<"Account"> | string
    type?: EnumAccountTypeFilter<"Account"> | $Enums.AccountType
    accountNumber?: StringNullableFilter<"Account"> | string | null
    bankName?: StringNullableFilter<"Account"> | string | null
    balance?: DecimalFilter<"Account"> | Decimal | DecimalJsLike | number | string
    isDefault?: BoolFilter<"Account"> | boolean
    isActive?: BoolFilter<"Account"> | boolean
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    transactions?: TransactionListRelationFilter
    transfersFrom?: AccountTransferListRelationFilter
    transfersTo?: AccountTransferListRelationFilter
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    accountNumber?: SortOrderInput | SortOrder
    bankName?: SortOrderInput | SortOrder
    balance?: SortOrder
    isDefault?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    transactions?: TransactionOrderByRelationAggregateInput
    transfersFrom?: AccountTransferOrderByRelationAggregateInput
    transfersTo?: AccountTransferOrderByRelationAggregateInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    name?: StringFilter<"Account"> | string
    type?: EnumAccountTypeFilter<"Account"> | $Enums.AccountType
    accountNumber?: StringNullableFilter<"Account"> | string | null
    bankName?: StringNullableFilter<"Account"> | string | null
    balance?: DecimalFilter<"Account"> | Decimal | DecimalJsLike | number | string
    isDefault?: BoolFilter<"Account"> | boolean
    isActive?: BoolFilter<"Account"> | boolean
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    transactions?: TransactionListRelationFilter
    transfersFrom?: AccountTransferListRelationFilter
    transfersTo?: AccountTransferListRelationFilter
  }, "id">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    accountNumber?: SortOrderInput | SortOrder
    bankName?: SortOrderInput | SortOrder
    balance?: SortOrder
    isDefault?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Account"> | number
    name?: StringWithAggregatesFilter<"Account"> | string
    type?: EnumAccountTypeWithAggregatesFilter<"Account"> | $Enums.AccountType
    accountNumber?: StringNullableWithAggregatesFilter<"Account"> | string | null
    bankName?: StringNullableWithAggregatesFilter<"Account"> | string | null
    balance?: DecimalWithAggregatesFilter<"Account"> | Decimal | DecimalJsLike | number | string
    isDefault?: BoolWithAggregatesFilter<"Account"> | boolean
    isActive?: BoolWithAggregatesFilter<"Account"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
  }

  export type FundCategoryWhereInput = {
    AND?: FundCategoryWhereInput | FundCategoryWhereInput[]
    OR?: FundCategoryWhereInput[]
    NOT?: FundCategoryWhereInput | FundCategoryWhereInput[]
    id?: IntFilter<"FundCategory"> | number
    name?: StringFilter<"FundCategory"> | string
    code?: StringFilter<"FundCategory"> | string
    fundType?: EnumFundTypeFilter<"FundCategory"> | $Enums.FundType
    description?: StringNullableFilter<"FundCategory"> | string | null
    isActive?: BoolFilter<"FundCategory"> | boolean
    createdAt?: DateTimeFilter<"FundCategory"> | Date | string
    updatedAt?: DateTimeFilter<"FundCategory"> | Date | string
    transactions?: TransactionListRelationFilter
  }

  export type FundCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    fundType?: SortOrder
    description?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    transactions?: TransactionOrderByRelationAggregateInput
  }

  export type FundCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    code?: string
    AND?: FundCategoryWhereInput | FundCategoryWhereInput[]
    OR?: FundCategoryWhereInput[]
    NOT?: FundCategoryWhereInput | FundCategoryWhereInput[]
    name?: StringFilter<"FundCategory"> | string
    fundType?: EnumFundTypeFilter<"FundCategory"> | $Enums.FundType
    description?: StringNullableFilter<"FundCategory"> | string | null
    isActive?: BoolFilter<"FundCategory"> | boolean
    createdAt?: DateTimeFilter<"FundCategory"> | Date | string
    updatedAt?: DateTimeFilter<"FundCategory"> | Date | string
    transactions?: TransactionListRelationFilter
  }, "id" | "code">

  export type FundCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    fundType?: SortOrder
    description?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FundCategoryCountOrderByAggregateInput
    _avg?: FundCategoryAvgOrderByAggregateInput
    _max?: FundCategoryMaxOrderByAggregateInput
    _min?: FundCategoryMinOrderByAggregateInput
    _sum?: FundCategorySumOrderByAggregateInput
  }

  export type FundCategoryScalarWhereWithAggregatesInput = {
    AND?: FundCategoryScalarWhereWithAggregatesInput | FundCategoryScalarWhereWithAggregatesInput[]
    OR?: FundCategoryScalarWhereWithAggregatesInput[]
    NOT?: FundCategoryScalarWhereWithAggregatesInput | FundCategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FundCategory"> | number
    name?: StringWithAggregatesFilter<"FundCategory"> | string
    code?: StringWithAggregatesFilter<"FundCategory"> | string
    fundType?: EnumFundTypeWithAggregatesFilter<"FundCategory"> | $Enums.FundType
    description?: StringNullableWithAggregatesFilter<"FundCategory"> | string | null
    isActive?: BoolWithAggregatesFilter<"FundCategory"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"FundCategory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FundCategory"> | Date | string
  }

  export type AccountChartWhereInput = {
    AND?: AccountChartWhereInput | AccountChartWhereInput[]
    OR?: AccountChartWhereInput[]
    NOT?: AccountChartWhereInput | AccountChartWhereInput[]
    id?: IntFilter<"AccountChart"> | number
    code?: StringFilter<"AccountChart"> | string
    name?: StringFilter<"AccountChart"> | string
    type?: EnumChartTypeFilter<"AccountChart"> | $Enums.ChartType
    description?: StringNullableFilter<"AccountChart"> | string | null
    isActive?: BoolFilter<"AccountChart"> | boolean
    createdAt?: DateTimeFilter<"AccountChart"> | Date | string
    updatedAt?: DateTimeFilter<"AccountChart"> | Date | string
    journalItems?: JournalItemListRelationFilter
  }

  export type AccountChartOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    type?: SortOrder
    description?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    journalItems?: JournalItemOrderByRelationAggregateInput
  }

  export type AccountChartWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    code?: string
    AND?: AccountChartWhereInput | AccountChartWhereInput[]
    OR?: AccountChartWhereInput[]
    NOT?: AccountChartWhereInput | AccountChartWhereInput[]
    name?: StringFilter<"AccountChart"> | string
    type?: EnumChartTypeFilter<"AccountChart"> | $Enums.ChartType
    description?: StringNullableFilter<"AccountChart"> | string | null
    isActive?: BoolFilter<"AccountChart"> | boolean
    createdAt?: DateTimeFilter<"AccountChart"> | Date | string
    updatedAt?: DateTimeFilter<"AccountChart"> | Date | string
    journalItems?: JournalItemListRelationFilter
  }, "id" | "code">

  export type AccountChartOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    type?: SortOrder
    description?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountChartCountOrderByAggregateInput
    _avg?: AccountChartAvgOrderByAggregateInput
    _max?: AccountChartMaxOrderByAggregateInput
    _min?: AccountChartMinOrderByAggregateInput
    _sum?: AccountChartSumOrderByAggregateInput
  }

  export type AccountChartScalarWhereWithAggregatesInput = {
    AND?: AccountChartScalarWhereWithAggregatesInput | AccountChartScalarWhereWithAggregatesInput[]
    OR?: AccountChartScalarWhereWithAggregatesInput[]
    NOT?: AccountChartScalarWhereWithAggregatesInput | AccountChartScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AccountChart"> | number
    code?: StringWithAggregatesFilter<"AccountChart"> | string
    name?: StringWithAggregatesFilter<"AccountChart"> | string
    type?: EnumChartTypeWithAggregatesFilter<"AccountChart"> | $Enums.ChartType
    description?: StringNullableWithAggregatesFilter<"AccountChart"> | string | null
    isActive?: BoolWithAggregatesFilter<"AccountChart"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"AccountChart"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AccountChart"> | Date | string
  }

  export type JournalEntryWhereInput = {
    AND?: JournalEntryWhereInput | JournalEntryWhereInput[]
    OR?: JournalEntryWhereInput[]
    NOT?: JournalEntryWhereInput | JournalEntryWhereInput[]
    id?: IntFilter<"JournalEntry"> | number
    entryNumber?: StringFilter<"JournalEntry"> | string
    date?: DateTimeFilter<"JournalEntry"> | Date | string
    description?: StringFilter<"JournalEntry"> | string
    refType?: StringNullableFilter<"JournalEntry"> | string | null
    refId?: IntNullableFilter<"JournalEntry"> | number | null
    createdAt?: DateTimeFilter<"JournalEntry"> | Date | string
    updatedAt?: DateTimeFilter<"JournalEntry"> | Date | string
    items?: JournalItemListRelationFilter
    transaction?: XOR<TransactionNullableRelationFilter, TransactionWhereInput> | null
    transfer?: XOR<AccountTransferNullableRelationFilter, AccountTransferWhereInput> | null
  }

  export type JournalEntryOrderByWithRelationInput = {
    id?: SortOrder
    entryNumber?: SortOrder
    date?: SortOrder
    description?: SortOrder
    refType?: SortOrderInput | SortOrder
    refId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    items?: JournalItemOrderByRelationAggregateInput
    transaction?: TransactionOrderByWithRelationInput
    transfer?: AccountTransferOrderByWithRelationInput
  }

  export type JournalEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    entryNumber?: string
    AND?: JournalEntryWhereInput | JournalEntryWhereInput[]
    OR?: JournalEntryWhereInput[]
    NOT?: JournalEntryWhereInput | JournalEntryWhereInput[]
    date?: DateTimeFilter<"JournalEntry"> | Date | string
    description?: StringFilter<"JournalEntry"> | string
    refType?: StringNullableFilter<"JournalEntry"> | string | null
    refId?: IntNullableFilter<"JournalEntry"> | number | null
    createdAt?: DateTimeFilter<"JournalEntry"> | Date | string
    updatedAt?: DateTimeFilter<"JournalEntry"> | Date | string
    items?: JournalItemListRelationFilter
    transaction?: XOR<TransactionNullableRelationFilter, TransactionWhereInput> | null
    transfer?: XOR<AccountTransferNullableRelationFilter, AccountTransferWhereInput> | null
  }, "id" | "entryNumber">

  export type JournalEntryOrderByWithAggregationInput = {
    id?: SortOrder
    entryNumber?: SortOrder
    date?: SortOrder
    description?: SortOrder
    refType?: SortOrderInput | SortOrder
    refId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: JournalEntryCountOrderByAggregateInput
    _avg?: JournalEntryAvgOrderByAggregateInput
    _max?: JournalEntryMaxOrderByAggregateInput
    _min?: JournalEntryMinOrderByAggregateInput
    _sum?: JournalEntrySumOrderByAggregateInput
  }

  export type JournalEntryScalarWhereWithAggregatesInput = {
    AND?: JournalEntryScalarWhereWithAggregatesInput | JournalEntryScalarWhereWithAggregatesInput[]
    OR?: JournalEntryScalarWhereWithAggregatesInput[]
    NOT?: JournalEntryScalarWhereWithAggregatesInput | JournalEntryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"JournalEntry"> | number
    entryNumber?: StringWithAggregatesFilter<"JournalEntry"> | string
    date?: DateTimeWithAggregatesFilter<"JournalEntry"> | Date | string
    description?: StringWithAggregatesFilter<"JournalEntry"> | string
    refType?: StringNullableWithAggregatesFilter<"JournalEntry"> | string | null
    refId?: IntNullableWithAggregatesFilter<"JournalEntry"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"JournalEntry"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"JournalEntry"> | Date | string
  }

  export type JournalItemWhereInput = {
    AND?: JournalItemWhereInput | JournalItemWhereInput[]
    OR?: JournalItemWhereInput[]
    NOT?: JournalItemWhereInput | JournalItemWhereInput[]
    id?: IntFilter<"JournalItem"> | number
    journalEntryId?: IntFilter<"JournalItem"> | number
    chartId?: IntFilter<"JournalItem"> | number
    debit?: DecimalFilter<"JournalItem"> | Decimal | DecimalJsLike | number | string
    credit?: DecimalFilter<"JournalItem"> | Decimal | DecimalJsLike | number | string
    journalEntry?: XOR<JournalEntryRelationFilter, JournalEntryWhereInput>
    chart?: XOR<AccountChartRelationFilter, AccountChartWhereInput>
  }

  export type JournalItemOrderByWithRelationInput = {
    id?: SortOrder
    journalEntryId?: SortOrder
    chartId?: SortOrder
    debit?: SortOrder
    credit?: SortOrder
    journalEntry?: JournalEntryOrderByWithRelationInput
    chart?: AccountChartOrderByWithRelationInput
  }

  export type JournalItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: JournalItemWhereInput | JournalItemWhereInput[]
    OR?: JournalItemWhereInput[]
    NOT?: JournalItemWhereInput | JournalItemWhereInput[]
    journalEntryId?: IntFilter<"JournalItem"> | number
    chartId?: IntFilter<"JournalItem"> | number
    debit?: DecimalFilter<"JournalItem"> | Decimal | DecimalJsLike | number | string
    credit?: DecimalFilter<"JournalItem"> | Decimal | DecimalJsLike | number | string
    journalEntry?: XOR<JournalEntryRelationFilter, JournalEntryWhereInput>
    chart?: XOR<AccountChartRelationFilter, AccountChartWhereInput>
  }, "id">

  export type JournalItemOrderByWithAggregationInput = {
    id?: SortOrder
    journalEntryId?: SortOrder
    chartId?: SortOrder
    debit?: SortOrder
    credit?: SortOrder
    _count?: JournalItemCountOrderByAggregateInput
    _avg?: JournalItemAvgOrderByAggregateInput
    _max?: JournalItemMaxOrderByAggregateInput
    _min?: JournalItemMinOrderByAggregateInput
    _sum?: JournalItemSumOrderByAggregateInput
  }

  export type JournalItemScalarWhereWithAggregatesInput = {
    AND?: JournalItemScalarWhereWithAggregatesInput | JournalItemScalarWhereWithAggregatesInput[]
    OR?: JournalItemScalarWhereWithAggregatesInput[]
    NOT?: JournalItemScalarWhereWithAggregatesInput | JournalItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"JournalItem"> | number
    journalEntryId?: IntWithAggregatesFilter<"JournalItem"> | number
    chartId?: IntWithAggregatesFilter<"JournalItem"> | number
    debit?: DecimalWithAggregatesFilter<"JournalItem"> | Decimal | DecimalJsLike | number | string
    credit?: DecimalWithAggregatesFilter<"JournalItem"> | Decimal | DecimalJsLike | number | string
  }

  export type AccountTransferWhereInput = {
    AND?: AccountTransferWhereInput | AccountTransferWhereInput[]
    OR?: AccountTransferWhereInput[]
    NOT?: AccountTransferWhereInput | AccountTransferWhereInput[]
    id?: IntFilter<"AccountTransfer"> | number
    date?: DateTimeFilter<"AccountTransfer"> | Date | string
    sourceAccountId?: IntFilter<"AccountTransfer"> | number
    targetAccountId?: IntFilter<"AccountTransfer"> | number
    amount?: DecimalFilter<"AccountTransfer"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableFilter<"AccountTransfer"> | string | null
    journalEntryId?: IntNullableFilter<"AccountTransfer"> | number | null
    createdBy?: IntFilter<"AccountTransfer"> | number
    createdAt?: DateTimeFilter<"AccountTransfer"> | Date | string
    updatedAt?: DateTimeFilter<"AccountTransfer"> | Date | string
    sourceAccount?: XOR<AccountRelationFilter, AccountWhereInput>
    targetAccount?: XOR<AccountRelationFilter, AccountWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
    journalEntry?: XOR<JournalEntryNullableRelationFilter, JournalEntryWhereInput> | null
  }

  export type AccountTransferOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    sourceAccountId?: SortOrder
    targetAccountId?: SortOrder
    amount?: SortOrder
    description?: SortOrderInput | SortOrder
    journalEntryId?: SortOrderInput | SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sourceAccount?: AccountOrderByWithRelationInput
    targetAccount?: AccountOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    journalEntry?: JournalEntryOrderByWithRelationInput
  }

  export type AccountTransferWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    journalEntryId?: number
    AND?: AccountTransferWhereInput | AccountTransferWhereInput[]
    OR?: AccountTransferWhereInput[]
    NOT?: AccountTransferWhereInput | AccountTransferWhereInput[]
    date?: DateTimeFilter<"AccountTransfer"> | Date | string
    sourceAccountId?: IntFilter<"AccountTransfer"> | number
    targetAccountId?: IntFilter<"AccountTransfer"> | number
    amount?: DecimalFilter<"AccountTransfer"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableFilter<"AccountTransfer"> | string | null
    createdBy?: IntFilter<"AccountTransfer"> | number
    createdAt?: DateTimeFilter<"AccountTransfer"> | Date | string
    updatedAt?: DateTimeFilter<"AccountTransfer"> | Date | string
    sourceAccount?: XOR<AccountRelationFilter, AccountWhereInput>
    targetAccount?: XOR<AccountRelationFilter, AccountWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
    journalEntry?: XOR<JournalEntryNullableRelationFilter, JournalEntryWhereInput> | null
  }, "id" | "journalEntryId">

  export type AccountTransferOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    sourceAccountId?: SortOrder
    targetAccountId?: SortOrder
    amount?: SortOrder
    description?: SortOrderInput | SortOrder
    journalEntryId?: SortOrderInput | SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountTransferCountOrderByAggregateInput
    _avg?: AccountTransferAvgOrderByAggregateInput
    _max?: AccountTransferMaxOrderByAggregateInput
    _min?: AccountTransferMinOrderByAggregateInput
    _sum?: AccountTransferSumOrderByAggregateInput
  }

  export type AccountTransferScalarWhereWithAggregatesInput = {
    AND?: AccountTransferScalarWhereWithAggregatesInput | AccountTransferScalarWhereWithAggregatesInput[]
    OR?: AccountTransferScalarWhereWithAggregatesInput[]
    NOT?: AccountTransferScalarWhereWithAggregatesInput | AccountTransferScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AccountTransfer"> | number
    date?: DateTimeWithAggregatesFilter<"AccountTransfer"> | Date | string
    sourceAccountId?: IntWithAggregatesFilter<"AccountTransfer"> | number
    targetAccountId?: IntWithAggregatesFilter<"AccountTransfer"> | number
    amount?: DecimalWithAggregatesFilter<"AccountTransfer"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableWithAggregatesFilter<"AccountTransfer"> | string | null
    journalEntryId?: IntNullableWithAggregatesFilter<"AccountTransfer"> | number | null
    createdBy?: IntWithAggregatesFilter<"AccountTransfer"> | number
    createdAt?: DateTimeWithAggregatesFilter<"AccountTransfer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AccountTransfer"> | Date | string
  }

  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    id?: IntFilter<"Transaction"> | number
    date?: DateTimeFilter<"Transaction"> | Date | string
    type?: EnumTransactionTypeFilter<"Transaction"> | $Enums.TransactionType
    amount?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableFilter<"Transaction"> | string | null
    category?: StringFilter<"Transaction"> | string
    accountId?: IntNullableFilter<"Transaction"> | number | null
    fundCategoryId?: IntNullableFilter<"Transaction"> | number | null
    attachmentUrl?: StringNullableFilter<"Transaction"> | string | null
    journalEntryId?: IntNullableFilter<"Transaction"> | number | null
    createdBy?: IntFilter<"Transaction"> | number
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    account?: XOR<AccountNullableRelationFilter, AccountWhereInput> | null
    fundCategory?: XOR<FundCategoryNullableRelationFilter, FundCategoryWhereInput> | null
    journalEntry?: XOR<JournalEntryNullableRelationFilter, JournalEntryWhereInput> | null
  }

  export type TransactionOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    description?: SortOrderInput | SortOrder
    category?: SortOrder
    accountId?: SortOrderInput | SortOrder
    fundCategoryId?: SortOrderInput | SortOrder
    attachmentUrl?: SortOrderInput | SortOrder
    journalEntryId?: SortOrderInput | SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    account?: AccountOrderByWithRelationInput
    fundCategory?: FundCategoryOrderByWithRelationInput
    journalEntry?: JournalEntryOrderByWithRelationInput
  }

  export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    journalEntryId?: number
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    date?: DateTimeFilter<"Transaction"> | Date | string
    type?: EnumTransactionTypeFilter<"Transaction"> | $Enums.TransactionType
    amount?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableFilter<"Transaction"> | string | null
    category?: StringFilter<"Transaction"> | string
    accountId?: IntNullableFilter<"Transaction"> | number | null
    fundCategoryId?: IntNullableFilter<"Transaction"> | number | null
    attachmentUrl?: StringNullableFilter<"Transaction"> | string | null
    createdBy?: IntFilter<"Transaction"> | number
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    account?: XOR<AccountNullableRelationFilter, AccountWhereInput> | null
    fundCategory?: XOR<FundCategoryNullableRelationFilter, FundCategoryWhereInput> | null
    journalEntry?: XOR<JournalEntryNullableRelationFilter, JournalEntryWhereInput> | null
  }, "id" | "journalEntryId">

  export type TransactionOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    description?: SortOrderInput | SortOrder
    category?: SortOrder
    accountId?: SortOrderInput | SortOrder
    fundCategoryId?: SortOrderInput | SortOrder
    attachmentUrl?: SortOrderInput | SortOrder
    journalEntryId?: SortOrderInput | SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TransactionCountOrderByAggregateInput
    _avg?: TransactionAvgOrderByAggregateInput
    _max?: TransactionMaxOrderByAggregateInput
    _min?: TransactionMinOrderByAggregateInput
    _sum?: TransactionSumOrderByAggregateInput
  }

  export type TransactionScalarWhereWithAggregatesInput = {
    AND?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    OR?: TransactionScalarWhereWithAggregatesInput[]
    NOT?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Transaction"> | number
    date?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    type?: EnumTransactionTypeWithAggregatesFilter<"Transaction"> | $Enums.TransactionType
    amount?: DecimalWithAggregatesFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    category?: StringWithAggregatesFilter<"Transaction"> | string
    accountId?: IntNullableWithAggregatesFilter<"Transaction"> | number | null
    fundCategoryId?: IntNullableWithAggregatesFilter<"Transaction"> | number | null
    attachmentUrl?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    journalEntryId?: IntNullableWithAggregatesFilter<"Transaction"> | number | null
    createdBy?: IntWithAggregatesFilter<"Transaction"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
  }

  export type UserCreateInput = {
    username: string
    password: string
    name: string
    role?: $Enums.Role
    permissions?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionCreateNestedManyWithoutUserInput
    transfers?: AccountTransferCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    password: string
    name: string
    role?: $Enums.Role
    permissions?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    transfers?: AccountTransferUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    permissions?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    transfers?: AccountTransferUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    permissions?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    transfers?: AccountTransferUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    password: string
    name: string
    role?: $Enums.Role
    permissions?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    permissions?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    permissions?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateInput = {
    name: string
    type?: $Enums.AccountType
    accountNumber?: string | null
    bankName?: string | null
    balance?: Decimal | DecimalJsLike | number | string
    isDefault?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionCreateNestedManyWithoutAccountInput
    transfersFrom?: AccountTransferCreateNestedManyWithoutSourceAccountInput
    transfersTo?: AccountTransferCreateNestedManyWithoutTargetAccountInput
  }

  export type AccountUncheckedCreateInput = {
    id?: number
    name: string
    type?: $Enums.AccountType
    accountNumber?: string | null
    bankName?: string | null
    balance?: Decimal | DecimalJsLike | number | string
    isDefault?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutAccountInput
    transfersFrom?: AccountTransferUncheckedCreateNestedManyWithoutSourceAccountInput
    transfersTo?: AccountTransferUncheckedCreateNestedManyWithoutTargetAccountInput
  }

  export type AccountUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUpdateManyWithoutAccountNestedInput
    transfersFrom?: AccountTransferUpdateManyWithoutSourceAccountNestedInput
    transfersTo?: AccountTransferUpdateManyWithoutTargetAccountNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutAccountNestedInput
    transfersFrom?: AccountTransferUncheckedUpdateManyWithoutSourceAccountNestedInput
    transfersTo?: AccountTransferUncheckedUpdateManyWithoutTargetAccountNestedInput
  }

  export type AccountCreateManyInput = {
    id?: number
    name: string
    type?: $Enums.AccountType
    accountNumber?: string | null
    bankName?: string | null
    balance?: Decimal | DecimalJsLike | number | string
    isDefault?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FundCategoryCreateInput = {
    name: string
    code: string
    fundType?: $Enums.FundType
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionCreateNestedManyWithoutFundCategoryInput
  }

  export type FundCategoryUncheckedCreateInput = {
    id?: number
    name: string
    code: string
    fundType?: $Enums.FundType
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutFundCategoryInput
  }

  export type FundCategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    fundType?: EnumFundTypeFieldUpdateOperationsInput | $Enums.FundType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUpdateManyWithoutFundCategoryNestedInput
  }

  export type FundCategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    fundType?: EnumFundTypeFieldUpdateOperationsInput | $Enums.FundType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutFundCategoryNestedInput
  }

  export type FundCategoryCreateManyInput = {
    id?: number
    name: string
    code: string
    fundType?: $Enums.FundType
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FundCategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    fundType?: EnumFundTypeFieldUpdateOperationsInput | $Enums.FundType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FundCategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    fundType?: EnumFundTypeFieldUpdateOperationsInput | $Enums.FundType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountChartCreateInput = {
    code: string
    name: string
    type: $Enums.ChartType
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    journalItems?: JournalItemCreateNestedManyWithoutChartInput
  }

  export type AccountChartUncheckedCreateInput = {
    id?: number
    code: string
    name: string
    type: $Enums.ChartType
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    journalItems?: JournalItemUncheckedCreateNestedManyWithoutChartInput
  }

  export type AccountChartUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumChartTypeFieldUpdateOperationsInput | $Enums.ChartType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    journalItems?: JournalItemUpdateManyWithoutChartNestedInput
  }

  export type AccountChartUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumChartTypeFieldUpdateOperationsInput | $Enums.ChartType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    journalItems?: JournalItemUncheckedUpdateManyWithoutChartNestedInput
  }

  export type AccountChartCreateManyInput = {
    id?: number
    code: string
    name: string
    type: $Enums.ChartType
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountChartUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumChartTypeFieldUpdateOperationsInput | $Enums.ChartType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountChartUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumChartTypeFieldUpdateOperationsInput | $Enums.ChartType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JournalEntryCreateInput = {
    entryNumber: string
    date: Date | string
    description: string
    refType?: string | null
    refId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: JournalItemCreateNestedManyWithoutJournalEntryInput
    transaction?: TransactionCreateNestedOneWithoutJournalEntryInput
    transfer?: AccountTransferCreateNestedOneWithoutJournalEntryInput
  }

  export type JournalEntryUncheckedCreateInput = {
    id?: number
    entryNumber: string
    date: Date | string
    description: string
    refType?: string | null
    refId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: JournalItemUncheckedCreateNestedManyWithoutJournalEntryInput
    transaction?: TransactionUncheckedCreateNestedOneWithoutJournalEntryInput
    transfer?: AccountTransferUncheckedCreateNestedOneWithoutJournalEntryInput
  }

  export type JournalEntryUpdateInput = {
    entryNumber?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    refType?: NullableStringFieldUpdateOperationsInput | string | null
    refId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: JournalItemUpdateManyWithoutJournalEntryNestedInput
    transaction?: TransactionUpdateOneWithoutJournalEntryNestedInput
    transfer?: AccountTransferUpdateOneWithoutJournalEntryNestedInput
  }

  export type JournalEntryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    entryNumber?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    refType?: NullableStringFieldUpdateOperationsInput | string | null
    refId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: JournalItemUncheckedUpdateManyWithoutJournalEntryNestedInput
    transaction?: TransactionUncheckedUpdateOneWithoutJournalEntryNestedInput
    transfer?: AccountTransferUncheckedUpdateOneWithoutJournalEntryNestedInput
  }

  export type JournalEntryCreateManyInput = {
    id?: number
    entryNumber: string
    date: Date | string
    description: string
    refType?: string | null
    refId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JournalEntryUpdateManyMutationInput = {
    entryNumber?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    refType?: NullableStringFieldUpdateOperationsInput | string | null
    refId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JournalEntryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    entryNumber?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    refType?: NullableStringFieldUpdateOperationsInput | string | null
    refId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JournalItemCreateInput = {
    debit?: Decimal | DecimalJsLike | number | string
    credit?: Decimal | DecimalJsLike | number | string
    journalEntry: JournalEntryCreateNestedOneWithoutItemsInput
    chart: AccountChartCreateNestedOneWithoutJournalItemsInput
  }

  export type JournalItemUncheckedCreateInput = {
    id?: number
    journalEntryId: number
    chartId: number
    debit?: Decimal | DecimalJsLike | number | string
    credit?: Decimal | DecimalJsLike | number | string
  }

  export type JournalItemUpdateInput = {
    debit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    credit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    journalEntry?: JournalEntryUpdateOneRequiredWithoutItemsNestedInput
    chart?: AccountChartUpdateOneRequiredWithoutJournalItemsNestedInput
  }

  export type JournalItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    journalEntryId?: IntFieldUpdateOperationsInput | number
    chartId?: IntFieldUpdateOperationsInput | number
    debit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    credit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type JournalItemCreateManyInput = {
    id?: number
    journalEntryId: number
    chartId: number
    debit?: Decimal | DecimalJsLike | number | string
    credit?: Decimal | DecimalJsLike | number | string
  }

  export type JournalItemUpdateManyMutationInput = {
    debit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    credit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type JournalItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    journalEntryId?: IntFieldUpdateOperationsInput | number
    chartId?: IntFieldUpdateOperationsInput | number
    debit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    credit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type AccountTransferCreateInput = {
    date: Date | string
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sourceAccount: AccountCreateNestedOneWithoutTransfersFromInput
    targetAccount: AccountCreateNestedOneWithoutTransfersToInput
    user: UserCreateNestedOneWithoutTransfersInput
    journalEntry?: JournalEntryCreateNestedOneWithoutTransferInput
  }

  export type AccountTransferUncheckedCreateInput = {
    id?: number
    date: Date | string
    sourceAccountId: number
    targetAccountId: number
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    journalEntryId?: number | null
    createdBy: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountTransferUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sourceAccount?: AccountUpdateOneRequiredWithoutTransfersFromNestedInput
    targetAccount?: AccountUpdateOneRequiredWithoutTransfersToNestedInput
    user?: UserUpdateOneRequiredWithoutTransfersNestedInput
    journalEntry?: JournalEntryUpdateOneWithoutTransferNestedInput
  }

  export type AccountTransferUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    sourceAccountId?: IntFieldUpdateOperationsInput | number
    targetAccountId?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    journalEntryId?: NullableIntFieldUpdateOperationsInput | number | null
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountTransferCreateManyInput = {
    id?: number
    date: Date | string
    sourceAccountId: number
    targetAccountId: number
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    journalEntryId?: number | null
    createdBy: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountTransferUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountTransferUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    sourceAccountId?: IntFieldUpdateOperationsInput | number
    targetAccountId?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    journalEntryId?: NullableIntFieldUpdateOperationsInput | number | null
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateInput = {
    date: Date | string
    type: $Enums.TransactionType
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    category: string
    attachmentUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTransactionsInput
    account?: AccountCreateNestedOneWithoutTransactionsInput
    fundCategory?: FundCategoryCreateNestedOneWithoutTransactionsInput
    journalEntry?: JournalEntryCreateNestedOneWithoutTransactionInput
  }

  export type TransactionUncheckedCreateInput = {
    id?: number
    date: Date | string
    type: $Enums.TransactionType
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    category: string
    accountId?: number | null
    fundCategoryId?: number | null
    attachmentUrl?: string | null
    journalEntryId?: number | null
    createdBy: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTransactionsNestedInput
    account?: AccountUpdateOneWithoutTransactionsNestedInput
    fundCategory?: FundCategoryUpdateOneWithoutTransactionsNestedInput
    journalEntry?: JournalEntryUpdateOneWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    accountId?: NullableIntFieldUpdateOperationsInput | number | null
    fundCategoryId?: NullableIntFieldUpdateOperationsInput | number | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    journalEntryId?: NullableIntFieldUpdateOperationsInput | number | null
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateManyInput = {
    id?: number
    date: Date | string
    type: $Enums.TransactionType
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    category: string
    accountId?: number | null
    fundCategoryId?: number | null
    attachmentUrl?: string | null
    journalEntryId?: number | null
    createdBy: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    accountId?: NullableIntFieldUpdateOperationsInput | number | null
    fundCategoryId?: NullableIntFieldUpdateOperationsInput | number | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    journalEntryId?: NullableIntFieldUpdateOperationsInput | number | null
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TransactionListRelationFilter = {
    every?: TransactionWhereInput
    some?: TransactionWhereInput
    none?: TransactionWhereInput
  }

  export type AccountTransferListRelationFilter = {
    every?: AccountTransferWhereInput
    some?: AccountTransferWhereInput
    none?: AccountTransferWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountTransferOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    permissions?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumAccountTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountType | EnumAccountTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AccountType[]
    notIn?: $Enums.AccountType[]
    not?: NestedEnumAccountTypeFilter<$PrismaModel> | $Enums.AccountType
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    accountNumber?: SortOrder
    bankName?: SortOrder
    balance?: SortOrder
    isDefault?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    id?: SortOrder
    balance?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    accountNumber?: SortOrder
    bankName?: SortOrder
    balance?: SortOrder
    isDefault?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    accountNumber?: SortOrder
    bankName?: SortOrder
    balance?: SortOrder
    isDefault?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    id?: SortOrder
    balance?: SortOrder
  }

  export type EnumAccountTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountType | EnumAccountTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AccountType[]
    notIn?: $Enums.AccountType[]
    not?: NestedEnumAccountTypeWithAggregatesFilter<$PrismaModel> | $Enums.AccountType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAccountTypeFilter<$PrismaModel>
    _max?: NestedEnumAccountTypeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumFundTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.FundType | EnumFundTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FundType[]
    notIn?: $Enums.FundType[]
    not?: NestedEnumFundTypeFilter<$PrismaModel> | $Enums.FundType
  }

  export type FundCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    fundType?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FundCategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FundCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    fundType?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FundCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    fundType?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FundCategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumFundTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FundType | EnumFundTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FundType[]
    notIn?: $Enums.FundType[]
    not?: NestedEnumFundTypeWithAggregatesFilter<$PrismaModel> | $Enums.FundType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFundTypeFilter<$PrismaModel>
    _max?: NestedEnumFundTypeFilter<$PrismaModel>
  }

  export type EnumChartTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ChartType | EnumChartTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ChartType[]
    notIn?: $Enums.ChartType[]
    not?: NestedEnumChartTypeFilter<$PrismaModel> | $Enums.ChartType
  }

  export type JournalItemListRelationFilter = {
    every?: JournalItemWhereInput
    some?: JournalItemWhereInput
    none?: JournalItemWhereInput
  }

  export type JournalItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountChartCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    type?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountChartAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AccountChartMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    type?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountChartMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    type?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountChartSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumChartTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ChartType | EnumChartTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ChartType[]
    notIn?: $Enums.ChartType[]
    not?: NestedEnumChartTypeWithAggregatesFilter<$PrismaModel> | $Enums.ChartType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumChartTypeFilter<$PrismaModel>
    _max?: NestedEnumChartTypeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type TransactionNullableRelationFilter = {
    is?: TransactionWhereInput | null
    isNot?: TransactionWhereInput | null
  }

  export type AccountTransferNullableRelationFilter = {
    is?: AccountTransferWhereInput | null
    isNot?: AccountTransferWhereInput | null
  }

  export type JournalEntryCountOrderByAggregateInput = {
    id?: SortOrder
    entryNumber?: SortOrder
    date?: SortOrder
    description?: SortOrder
    refType?: SortOrder
    refId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JournalEntryAvgOrderByAggregateInput = {
    id?: SortOrder
    refId?: SortOrder
  }

  export type JournalEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    entryNumber?: SortOrder
    date?: SortOrder
    description?: SortOrder
    refType?: SortOrder
    refId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JournalEntryMinOrderByAggregateInput = {
    id?: SortOrder
    entryNumber?: SortOrder
    date?: SortOrder
    description?: SortOrder
    refType?: SortOrder
    refId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JournalEntrySumOrderByAggregateInput = {
    id?: SortOrder
    refId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type JournalEntryRelationFilter = {
    is?: JournalEntryWhereInput
    isNot?: JournalEntryWhereInput
  }

  export type AccountChartRelationFilter = {
    is?: AccountChartWhereInput
    isNot?: AccountChartWhereInput
  }

  export type JournalItemCountOrderByAggregateInput = {
    id?: SortOrder
    journalEntryId?: SortOrder
    chartId?: SortOrder
    debit?: SortOrder
    credit?: SortOrder
  }

  export type JournalItemAvgOrderByAggregateInput = {
    id?: SortOrder
    journalEntryId?: SortOrder
    chartId?: SortOrder
    debit?: SortOrder
    credit?: SortOrder
  }

  export type JournalItemMaxOrderByAggregateInput = {
    id?: SortOrder
    journalEntryId?: SortOrder
    chartId?: SortOrder
    debit?: SortOrder
    credit?: SortOrder
  }

  export type JournalItemMinOrderByAggregateInput = {
    id?: SortOrder
    journalEntryId?: SortOrder
    chartId?: SortOrder
    debit?: SortOrder
    credit?: SortOrder
  }

  export type JournalItemSumOrderByAggregateInput = {
    id?: SortOrder
    journalEntryId?: SortOrder
    chartId?: SortOrder
    debit?: SortOrder
    credit?: SortOrder
  }

  export type AccountRelationFilter = {
    is?: AccountWhereInput
    isNot?: AccountWhereInput
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type JournalEntryNullableRelationFilter = {
    is?: JournalEntryWhereInput | null
    isNot?: JournalEntryWhereInput | null
  }

  export type AccountTransferCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    sourceAccountId?: SortOrder
    targetAccountId?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    journalEntryId?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountTransferAvgOrderByAggregateInput = {
    id?: SortOrder
    sourceAccountId?: SortOrder
    targetAccountId?: SortOrder
    amount?: SortOrder
    journalEntryId?: SortOrder
    createdBy?: SortOrder
  }

  export type AccountTransferMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    sourceAccountId?: SortOrder
    targetAccountId?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    journalEntryId?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountTransferMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    sourceAccountId?: SortOrder
    targetAccountId?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    journalEntryId?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountTransferSumOrderByAggregateInput = {
    id?: SortOrder
    sourceAccountId?: SortOrder
    targetAccountId?: SortOrder
    amount?: SortOrder
    journalEntryId?: SortOrder
    createdBy?: SortOrder
  }

  export type EnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[]
    notIn?: $Enums.TransactionType[]
    not?: NestedEnumTransactionTypeFilter<$PrismaModel> | $Enums.TransactionType
  }

  export type AccountNullableRelationFilter = {
    is?: AccountWhereInput | null
    isNot?: AccountWhereInput | null
  }

  export type FundCategoryNullableRelationFilter = {
    is?: FundCategoryWhereInput | null
    isNot?: FundCategoryWhereInput | null
  }

  export type TransactionCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    category?: SortOrder
    accountId?: SortOrder
    fundCategoryId?: SortOrder
    attachmentUrl?: SortOrder
    journalEntryId?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransactionAvgOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    accountId?: SortOrder
    fundCategoryId?: SortOrder
    journalEntryId?: SortOrder
    createdBy?: SortOrder
  }

  export type TransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    category?: SortOrder
    accountId?: SortOrder
    fundCategoryId?: SortOrder
    attachmentUrl?: SortOrder
    journalEntryId?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransactionMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    category?: SortOrder
    accountId?: SortOrder
    fundCategoryId?: SortOrder
    attachmentUrl?: SortOrder
    journalEntryId?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransactionSumOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    accountId?: SortOrder
    fundCategoryId?: SortOrder
    journalEntryId?: SortOrder
    createdBy?: SortOrder
  }

  export type EnumTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[]
    notIn?: $Enums.TransactionType[]
    not?: NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumTransactionTypeFilter<$PrismaModel>
  }

  export type TransactionCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type AccountTransferCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountTransferCreateWithoutUserInput, AccountTransferUncheckedCreateWithoutUserInput> | AccountTransferCreateWithoutUserInput[] | AccountTransferUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountTransferCreateOrConnectWithoutUserInput | AccountTransferCreateOrConnectWithoutUserInput[]
    createMany?: AccountTransferCreateManyUserInputEnvelope
    connect?: AccountTransferWhereUniqueInput | AccountTransferWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type AccountTransferUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountTransferCreateWithoutUserInput, AccountTransferUncheckedCreateWithoutUserInput> | AccountTransferCreateWithoutUserInput[] | AccountTransferUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountTransferCreateOrConnectWithoutUserInput | AccountTransferCreateOrConnectWithoutUserInput[]
    createMany?: AccountTransferCreateManyUserInputEnvelope
    connect?: AccountTransferWhereUniqueInput | AccountTransferWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TransactionUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutUserInput | TransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutUserInput | TransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutUserInput | TransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type AccountTransferUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountTransferCreateWithoutUserInput, AccountTransferUncheckedCreateWithoutUserInput> | AccountTransferCreateWithoutUserInput[] | AccountTransferUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountTransferCreateOrConnectWithoutUserInput | AccountTransferCreateOrConnectWithoutUserInput[]
    upsert?: AccountTransferUpsertWithWhereUniqueWithoutUserInput | AccountTransferUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountTransferCreateManyUserInputEnvelope
    set?: AccountTransferWhereUniqueInput | AccountTransferWhereUniqueInput[]
    disconnect?: AccountTransferWhereUniqueInput | AccountTransferWhereUniqueInput[]
    delete?: AccountTransferWhereUniqueInput | AccountTransferWhereUniqueInput[]
    connect?: AccountTransferWhereUniqueInput | AccountTransferWhereUniqueInput[]
    update?: AccountTransferUpdateWithWhereUniqueWithoutUserInput | AccountTransferUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountTransferUpdateManyWithWhereWithoutUserInput | AccountTransferUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountTransferScalarWhereInput | AccountTransferScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TransactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutUserInput | TransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutUserInput | TransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutUserInput | TransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type AccountTransferUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountTransferCreateWithoutUserInput, AccountTransferUncheckedCreateWithoutUserInput> | AccountTransferCreateWithoutUserInput[] | AccountTransferUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountTransferCreateOrConnectWithoutUserInput | AccountTransferCreateOrConnectWithoutUserInput[]
    upsert?: AccountTransferUpsertWithWhereUniqueWithoutUserInput | AccountTransferUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountTransferCreateManyUserInputEnvelope
    set?: AccountTransferWhereUniqueInput | AccountTransferWhereUniqueInput[]
    disconnect?: AccountTransferWhereUniqueInput | AccountTransferWhereUniqueInput[]
    delete?: AccountTransferWhereUniqueInput | AccountTransferWhereUniqueInput[]
    connect?: AccountTransferWhereUniqueInput | AccountTransferWhereUniqueInput[]
    update?: AccountTransferUpdateWithWhereUniqueWithoutUserInput | AccountTransferUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountTransferUpdateManyWithWhereWithoutUserInput | AccountTransferUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountTransferScalarWhereInput | AccountTransferScalarWhereInput[]
  }

  export type TransactionCreateNestedManyWithoutAccountInput = {
    create?: XOR<TransactionCreateWithoutAccountInput, TransactionUncheckedCreateWithoutAccountInput> | TransactionCreateWithoutAccountInput[] | TransactionUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutAccountInput | TransactionCreateOrConnectWithoutAccountInput[]
    createMany?: TransactionCreateManyAccountInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type AccountTransferCreateNestedManyWithoutSourceAccountInput = {
    create?: XOR<AccountTransferCreateWithoutSourceAccountInput, AccountTransferUncheckedCreateWithoutSourceAccountInput> | AccountTransferCreateWithoutSourceAccountInput[] | AccountTransferUncheckedCreateWithoutSourceAccountInput[]
    connectOrCreate?: AccountTransferCreateOrConnectWithoutSourceAccountInput | AccountTransferCreateOrConnectWithoutSourceAccountInput[]
    createMany?: AccountTransferCreateManySourceAccountInputEnvelope
    connect?: AccountTransferWhereUniqueInput | AccountTransferWhereUniqueInput[]
  }

  export type AccountTransferCreateNestedManyWithoutTargetAccountInput = {
    create?: XOR<AccountTransferCreateWithoutTargetAccountInput, AccountTransferUncheckedCreateWithoutTargetAccountInput> | AccountTransferCreateWithoutTargetAccountInput[] | AccountTransferUncheckedCreateWithoutTargetAccountInput[]
    connectOrCreate?: AccountTransferCreateOrConnectWithoutTargetAccountInput | AccountTransferCreateOrConnectWithoutTargetAccountInput[]
    createMany?: AccountTransferCreateManyTargetAccountInputEnvelope
    connect?: AccountTransferWhereUniqueInput | AccountTransferWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<TransactionCreateWithoutAccountInput, TransactionUncheckedCreateWithoutAccountInput> | TransactionCreateWithoutAccountInput[] | TransactionUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutAccountInput | TransactionCreateOrConnectWithoutAccountInput[]
    createMany?: TransactionCreateManyAccountInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type AccountTransferUncheckedCreateNestedManyWithoutSourceAccountInput = {
    create?: XOR<AccountTransferCreateWithoutSourceAccountInput, AccountTransferUncheckedCreateWithoutSourceAccountInput> | AccountTransferCreateWithoutSourceAccountInput[] | AccountTransferUncheckedCreateWithoutSourceAccountInput[]
    connectOrCreate?: AccountTransferCreateOrConnectWithoutSourceAccountInput | AccountTransferCreateOrConnectWithoutSourceAccountInput[]
    createMany?: AccountTransferCreateManySourceAccountInputEnvelope
    connect?: AccountTransferWhereUniqueInput | AccountTransferWhereUniqueInput[]
  }

  export type AccountTransferUncheckedCreateNestedManyWithoutTargetAccountInput = {
    create?: XOR<AccountTransferCreateWithoutTargetAccountInput, AccountTransferUncheckedCreateWithoutTargetAccountInput> | AccountTransferCreateWithoutTargetAccountInput[] | AccountTransferUncheckedCreateWithoutTargetAccountInput[]
    connectOrCreate?: AccountTransferCreateOrConnectWithoutTargetAccountInput | AccountTransferCreateOrConnectWithoutTargetAccountInput[]
    createMany?: AccountTransferCreateManyTargetAccountInputEnvelope
    connect?: AccountTransferWhereUniqueInput | AccountTransferWhereUniqueInput[]
  }

  export type EnumAccountTypeFieldUpdateOperationsInput = {
    set?: $Enums.AccountType
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type TransactionUpdateManyWithoutAccountNestedInput = {
    create?: XOR<TransactionCreateWithoutAccountInput, TransactionUncheckedCreateWithoutAccountInput> | TransactionCreateWithoutAccountInput[] | TransactionUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutAccountInput | TransactionCreateOrConnectWithoutAccountInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutAccountInput | TransactionUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: TransactionCreateManyAccountInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutAccountInput | TransactionUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutAccountInput | TransactionUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type AccountTransferUpdateManyWithoutSourceAccountNestedInput = {
    create?: XOR<AccountTransferCreateWithoutSourceAccountInput, AccountTransferUncheckedCreateWithoutSourceAccountInput> | AccountTransferCreateWithoutSourceAccountInput[] | AccountTransferUncheckedCreateWithoutSourceAccountInput[]
    connectOrCreate?: AccountTransferCreateOrConnectWithoutSourceAccountInput | AccountTransferCreateOrConnectWithoutSourceAccountInput[]
    upsert?: AccountTransferUpsertWithWhereUniqueWithoutSourceAccountInput | AccountTransferUpsertWithWhereUniqueWithoutSourceAccountInput[]
    createMany?: AccountTransferCreateManySourceAccountInputEnvelope
    set?: AccountTransferWhereUniqueInput | AccountTransferWhereUniqueInput[]
    disconnect?: AccountTransferWhereUniqueInput | AccountTransferWhereUniqueInput[]
    delete?: AccountTransferWhereUniqueInput | AccountTransferWhereUniqueInput[]
    connect?: AccountTransferWhereUniqueInput | AccountTransferWhereUniqueInput[]
    update?: AccountTransferUpdateWithWhereUniqueWithoutSourceAccountInput | AccountTransferUpdateWithWhereUniqueWithoutSourceAccountInput[]
    updateMany?: AccountTransferUpdateManyWithWhereWithoutSourceAccountInput | AccountTransferUpdateManyWithWhereWithoutSourceAccountInput[]
    deleteMany?: AccountTransferScalarWhereInput | AccountTransferScalarWhereInput[]
  }

  export type AccountTransferUpdateManyWithoutTargetAccountNestedInput = {
    create?: XOR<AccountTransferCreateWithoutTargetAccountInput, AccountTransferUncheckedCreateWithoutTargetAccountInput> | AccountTransferCreateWithoutTargetAccountInput[] | AccountTransferUncheckedCreateWithoutTargetAccountInput[]
    connectOrCreate?: AccountTransferCreateOrConnectWithoutTargetAccountInput | AccountTransferCreateOrConnectWithoutTargetAccountInput[]
    upsert?: AccountTransferUpsertWithWhereUniqueWithoutTargetAccountInput | AccountTransferUpsertWithWhereUniqueWithoutTargetAccountInput[]
    createMany?: AccountTransferCreateManyTargetAccountInputEnvelope
    set?: AccountTransferWhereUniqueInput | AccountTransferWhereUniqueInput[]
    disconnect?: AccountTransferWhereUniqueInput | AccountTransferWhereUniqueInput[]
    delete?: AccountTransferWhereUniqueInput | AccountTransferWhereUniqueInput[]
    connect?: AccountTransferWhereUniqueInput | AccountTransferWhereUniqueInput[]
    update?: AccountTransferUpdateWithWhereUniqueWithoutTargetAccountInput | AccountTransferUpdateWithWhereUniqueWithoutTargetAccountInput[]
    updateMany?: AccountTransferUpdateManyWithWhereWithoutTargetAccountInput | AccountTransferUpdateManyWithWhereWithoutTargetAccountInput[]
    deleteMany?: AccountTransferScalarWhereInput | AccountTransferScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<TransactionCreateWithoutAccountInput, TransactionUncheckedCreateWithoutAccountInput> | TransactionCreateWithoutAccountInput[] | TransactionUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutAccountInput | TransactionCreateOrConnectWithoutAccountInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutAccountInput | TransactionUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: TransactionCreateManyAccountInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutAccountInput | TransactionUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutAccountInput | TransactionUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type AccountTransferUncheckedUpdateManyWithoutSourceAccountNestedInput = {
    create?: XOR<AccountTransferCreateWithoutSourceAccountInput, AccountTransferUncheckedCreateWithoutSourceAccountInput> | AccountTransferCreateWithoutSourceAccountInput[] | AccountTransferUncheckedCreateWithoutSourceAccountInput[]
    connectOrCreate?: AccountTransferCreateOrConnectWithoutSourceAccountInput | AccountTransferCreateOrConnectWithoutSourceAccountInput[]
    upsert?: AccountTransferUpsertWithWhereUniqueWithoutSourceAccountInput | AccountTransferUpsertWithWhereUniqueWithoutSourceAccountInput[]
    createMany?: AccountTransferCreateManySourceAccountInputEnvelope
    set?: AccountTransferWhereUniqueInput | AccountTransferWhereUniqueInput[]
    disconnect?: AccountTransferWhereUniqueInput | AccountTransferWhereUniqueInput[]
    delete?: AccountTransferWhereUniqueInput | AccountTransferWhereUniqueInput[]
    connect?: AccountTransferWhereUniqueInput | AccountTransferWhereUniqueInput[]
    update?: AccountTransferUpdateWithWhereUniqueWithoutSourceAccountInput | AccountTransferUpdateWithWhereUniqueWithoutSourceAccountInput[]
    updateMany?: AccountTransferUpdateManyWithWhereWithoutSourceAccountInput | AccountTransferUpdateManyWithWhereWithoutSourceAccountInput[]
    deleteMany?: AccountTransferScalarWhereInput | AccountTransferScalarWhereInput[]
  }

  export type AccountTransferUncheckedUpdateManyWithoutTargetAccountNestedInput = {
    create?: XOR<AccountTransferCreateWithoutTargetAccountInput, AccountTransferUncheckedCreateWithoutTargetAccountInput> | AccountTransferCreateWithoutTargetAccountInput[] | AccountTransferUncheckedCreateWithoutTargetAccountInput[]
    connectOrCreate?: AccountTransferCreateOrConnectWithoutTargetAccountInput | AccountTransferCreateOrConnectWithoutTargetAccountInput[]
    upsert?: AccountTransferUpsertWithWhereUniqueWithoutTargetAccountInput | AccountTransferUpsertWithWhereUniqueWithoutTargetAccountInput[]
    createMany?: AccountTransferCreateManyTargetAccountInputEnvelope
    set?: AccountTransferWhereUniqueInput | AccountTransferWhereUniqueInput[]
    disconnect?: AccountTransferWhereUniqueInput | AccountTransferWhereUniqueInput[]
    delete?: AccountTransferWhereUniqueInput | AccountTransferWhereUniqueInput[]
    connect?: AccountTransferWhereUniqueInput | AccountTransferWhereUniqueInput[]
    update?: AccountTransferUpdateWithWhereUniqueWithoutTargetAccountInput | AccountTransferUpdateWithWhereUniqueWithoutTargetAccountInput[]
    updateMany?: AccountTransferUpdateManyWithWhereWithoutTargetAccountInput | AccountTransferUpdateManyWithWhereWithoutTargetAccountInput[]
    deleteMany?: AccountTransferScalarWhereInput | AccountTransferScalarWhereInput[]
  }

  export type TransactionCreateNestedManyWithoutFundCategoryInput = {
    create?: XOR<TransactionCreateWithoutFundCategoryInput, TransactionUncheckedCreateWithoutFundCategoryInput> | TransactionCreateWithoutFundCategoryInput[] | TransactionUncheckedCreateWithoutFundCategoryInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutFundCategoryInput | TransactionCreateOrConnectWithoutFundCategoryInput[]
    createMany?: TransactionCreateManyFundCategoryInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutFundCategoryInput = {
    create?: XOR<TransactionCreateWithoutFundCategoryInput, TransactionUncheckedCreateWithoutFundCategoryInput> | TransactionCreateWithoutFundCategoryInput[] | TransactionUncheckedCreateWithoutFundCategoryInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutFundCategoryInput | TransactionCreateOrConnectWithoutFundCategoryInput[]
    createMany?: TransactionCreateManyFundCategoryInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type EnumFundTypeFieldUpdateOperationsInput = {
    set?: $Enums.FundType
  }

  export type TransactionUpdateManyWithoutFundCategoryNestedInput = {
    create?: XOR<TransactionCreateWithoutFundCategoryInput, TransactionUncheckedCreateWithoutFundCategoryInput> | TransactionCreateWithoutFundCategoryInput[] | TransactionUncheckedCreateWithoutFundCategoryInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutFundCategoryInput | TransactionCreateOrConnectWithoutFundCategoryInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutFundCategoryInput | TransactionUpsertWithWhereUniqueWithoutFundCategoryInput[]
    createMany?: TransactionCreateManyFundCategoryInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutFundCategoryInput | TransactionUpdateWithWhereUniqueWithoutFundCategoryInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutFundCategoryInput | TransactionUpdateManyWithWhereWithoutFundCategoryInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutFundCategoryNestedInput = {
    create?: XOR<TransactionCreateWithoutFundCategoryInput, TransactionUncheckedCreateWithoutFundCategoryInput> | TransactionCreateWithoutFundCategoryInput[] | TransactionUncheckedCreateWithoutFundCategoryInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutFundCategoryInput | TransactionCreateOrConnectWithoutFundCategoryInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutFundCategoryInput | TransactionUpsertWithWhereUniqueWithoutFundCategoryInput[]
    createMany?: TransactionCreateManyFundCategoryInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutFundCategoryInput | TransactionUpdateWithWhereUniqueWithoutFundCategoryInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutFundCategoryInput | TransactionUpdateManyWithWhereWithoutFundCategoryInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type JournalItemCreateNestedManyWithoutChartInput = {
    create?: XOR<JournalItemCreateWithoutChartInput, JournalItemUncheckedCreateWithoutChartInput> | JournalItemCreateWithoutChartInput[] | JournalItemUncheckedCreateWithoutChartInput[]
    connectOrCreate?: JournalItemCreateOrConnectWithoutChartInput | JournalItemCreateOrConnectWithoutChartInput[]
    createMany?: JournalItemCreateManyChartInputEnvelope
    connect?: JournalItemWhereUniqueInput | JournalItemWhereUniqueInput[]
  }

  export type JournalItemUncheckedCreateNestedManyWithoutChartInput = {
    create?: XOR<JournalItemCreateWithoutChartInput, JournalItemUncheckedCreateWithoutChartInput> | JournalItemCreateWithoutChartInput[] | JournalItemUncheckedCreateWithoutChartInput[]
    connectOrCreate?: JournalItemCreateOrConnectWithoutChartInput | JournalItemCreateOrConnectWithoutChartInput[]
    createMany?: JournalItemCreateManyChartInputEnvelope
    connect?: JournalItemWhereUniqueInput | JournalItemWhereUniqueInput[]
  }

  export type EnumChartTypeFieldUpdateOperationsInput = {
    set?: $Enums.ChartType
  }

  export type JournalItemUpdateManyWithoutChartNestedInput = {
    create?: XOR<JournalItemCreateWithoutChartInput, JournalItemUncheckedCreateWithoutChartInput> | JournalItemCreateWithoutChartInput[] | JournalItemUncheckedCreateWithoutChartInput[]
    connectOrCreate?: JournalItemCreateOrConnectWithoutChartInput | JournalItemCreateOrConnectWithoutChartInput[]
    upsert?: JournalItemUpsertWithWhereUniqueWithoutChartInput | JournalItemUpsertWithWhereUniqueWithoutChartInput[]
    createMany?: JournalItemCreateManyChartInputEnvelope
    set?: JournalItemWhereUniqueInput | JournalItemWhereUniqueInput[]
    disconnect?: JournalItemWhereUniqueInput | JournalItemWhereUniqueInput[]
    delete?: JournalItemWhereUniqueInput | JournalItemWhereUniqueInput[]
    connect?: JournalItemWhereUniqueInput | JournalItemWhereUniqueInput[]
    update?: JournalItemUpdateWithWhereUniqueWithoutChartInput | JournalItemUpdateWithWhereUniqueWithoutChartInput[]
    updateMany?: JournalItemUpdateManyWithWhereWithoutChartInput | JournalItemUpdateManyWithWhereWithoutChartInput[]
    deleteMany?: JournalItemScalarWhereInput | JournalItemScalarWhereInput[]
  }

  export type JournalItemUncheckedUpdateManyWithoutChartNestedInput = {
    create?: XOR<JournalItemCreateWithoutChartInput, JournalItemUncheckedCreateWithoutChartInput> | JournalItemCreateWithoutChartInput[] | JournalItemUncheckedCreateWithoutChartInput[]
    connectOrCreate?: JournalItemCreateOrConnectWithoutChartInput | JournalItemCreateOrConnectWithoutChartInput[]
    upsert?: JournalItemUpsertWithWhereUniqueWithoutChartInput | JournalItemUpsertWithWhereUniqueWithoutChartInput[]
    createMany?: JournalItemCreateManyChartInputEnvelope
    set?: JournalItemWhereUniqueInput | JournalItemWhereUniqueInput[]
    disconnect?: JournalItemWhereUniqueInput | JournalItemWhereUniqueInput[]
    delete?: JournalItemWhereUniqueInput | JournalItemWhereUniqueInput[]
    connect?: JournalItemWhereUniqueInput | JournalItemWhereUniqueInput[]
    update?: JournalItemUpdateWithWhereUniqueWithoutChartInput | JournalItemUpdateWithWhereUniqueWithoutChartInput[]
    updateMany?: JournalItemUpdateManyWithWhereWithoutChartInput | JournalItemUpdateManyWithWhereWithoutChartInput[]
    deleteMany?: JournalItemScalarWhereInput | JournalItemScalarWhereInput[]
  }

  export type JournalItemCreateNestedManyWithoutJournalEntryInput = {
    create?: XOR<JournalItemCreateWithoutJournalEntryInput, JournalItemUncheckedCreateWithoutJournalEntryInput> | JournalItemCreateWithoutJournalEntryInput[] | JournalItemUncheckedCreateWithoutJournalEntryInput[]
    connectOrCreate?: JournalItemCreateOrConnectWithoutJournalEntryInput | JournalItemCreateOrConnectWithoutJournalEntryInput[]
    createMany?: JournalItemCreateManyJournalEntryInputEnvelope
    connect?: JournalItemWhereUniqueInput | JournalItemWhereUniqueInput[]
  }

  export type TransactionCreateNestedOneWithoutJournalEntryInput = {
    create?: XOR<TransactionCreateWithoutJournalEntryInput, TransactionUncheckedCreateWithoutJournalEntryInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutJournalEntryInput
    connect?: TransactionWhereUniqueInput
  }

  export type AccountTransferCreateNestedOneWithoutJournalEntryInput = {
    create?: XOR<AccountTransferCreateWithoutJournalEntryInput, AccountTransferUncheckedCreateWithoutJournalEntryInput>
    connectOrCreate?: AccountTransferCreateOrConnectWithoutJournalEntryInput
    connect?: AccountTransferWhereUniqueInput
  }

  export type JournalItemUncheckedCreateNestedManyWithoutJournalEntryInput = {
    create?: XOR<JournalItemCreateWithoutJournalEntryInput, JournalItemUncheckedCreateWithoutJournalEntryInput> | JournalItemCreateWithoutJournalEntryInput[] | JournalItemUncheckedCreateWithoutJournalEntryInput[]
    connectOrCreate?: JournalItemCreateOrConnectWithoutJournalEntryInput | JournalItemCreateOrConnectWithoutJournalEntryInput[]
    createMany?: JournalItemCreateManyJournalEntryInputEnvelope
    connect?: JournalItemWhereUniqueInput | JournalItemWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedOneWithoutJournalEntryInput = {
    create?: XOR<TransactionCreateWithoutJournalEntryInput, TransactionUncheckedCreateWithoutJournalEntryInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutJournalEntryInput
    connect?: TransactionWhereUniqueInput
  }

  export type AccountTransferUncheckedCreateNestedOneWithoutJournalEntryInput = {
    create?: XOR<AccountTransferCreateWithoutJournalEntryInput, AccountTransferUncheckedCreateWithoutJournalEntryInput>
    connectOrCreate?: AccountTransferCreateOrConnectWithoutJournalEntryInput
    connect?: AccountTransferWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type JournalItemUpdateManyWithoutJournalEntryNestedInput = {
    create?: XOR<JournalItemCreateWithoutJournalEntryInput, JournalItemUncheckedCreateWithoutJournalEntryInput> | JournalItemCreateWithoutJournalEntryInput[] | JournalItemUncheckedCreateWithoutJournalEntryInput[]
    connectOrCreate?: JournalItemCreateOrConnectWithoutJournalEntryInput | JournalItemCreateOrConnectWithoutJournalEntryInput[]
    upsert?: JournalItemUpsertWithWhereUniqueWithoutJournalEntryInput | JournalItemUpsertWithWhereUniqueWithoutJournalEntryInput[]
    createMany?: JournalItemCreateManyJournalEntryInputEnvelope
    set?: JournalItemWhereUniqueInput | JournalItemWhereUniqueInput[]
    disconnect?: JournalItemWhereUniqueInput | JournalItemWhereUniqueInput[]
    delete?: JournalItemWhereUniqueInput | JournalItemWhereUniqueInput[]
    connect?: JournalItemWhereUniqueInput | JournalItemWhereUniqueInput[]
    update?: JournalItemUpdateWithWhereUniqueWithoutJournalEntryInput | JournalItemUpdateWithWhereUniqueWithoutJournalEntryInput[]
    updateMany?: JournalItemUpdateManyWithWhereWithoutJournalEntryInput | JournalItemUpdateManyWithWhereWithoutJournalEntryInput[]
    deleteMany?: JournalItemScalarWhereInput | JournalItemScalarWhereInput[]
  }

  export type TransactionUpdateOneWithoutJournalEntryNestedInput = {
    create?: XOR<TransactionCreateWithoutJournalEntryInput, TransactionUncheckedCreateWithoutJournalEntryInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutJournalEntryInput
    upsert?: TransactionUpsertWithoutJournalEntryInput
    disconnect?: TransactionWhereInput | boolean
    delete?: TransactionWhereInput | boolean
    connect?: TransactionWhereUniqueInput
    update?: XOR<XOR<TransactionUpdateToOneWithWhereWithoutJournalEntryInput, TransactionUpdateWithoutJournalEntryInput>, TransactionUncheckedUpdateWithoutJournalEntryInput>
  }

  export type AccountTransferUpdateOneWithoutJournalEntryNestedInput = {
    create?: XOR<AccountTransferCreateWithoutJournalEntryInput, AccountTransferUncheckedCreateWithoutJournalEntryInput>
    connectOrCreate?: AccountTransferCreateOrConnectWithoutJournalEntryInput
    upsert?: AccountTransferUpsertWithoutJournalEntryInput
    disconnect?: AccountTransferWhereInput | boolean
    delete?: AccountTransferWhereInput | boolean
    connect?: AccountTransferWhereUniqueInput
    update?: XOR<XOR<AccountTransferUpdateToOneWithWhereWithoutJournalEntryInput, AccountTransferUpdateWithoutJournalEntryInput>, AccountTransferUncheckedUpdateWithoutJournalEntryInput>
  }

  export type JournalItemUncheckedUpdateManyWithoutJournalEntryNestedInput = {
    create?: XOR<JournalItemCreateWithoutJournalEntryInput, JournalItemUncheckedCreateWithoutJournalEntryInput> | JournalItemCreateWithoutJournalEntryInput[] | JournalItemUncheckedCreateWithoutJournalEntryInput[]
    connectOrCreate?: JournalItemCreateOrConnectWithoutJournalEntryInput | JournalItemCreateOrConnectWithoutJournalEntryInput[]
    upsert?: JournalItemUpsertWithWhereUniqueWithoutJournalEntryInput | JournalItemUpsertWithWhereUniqueWithoutJournalEntryInput[]
    createMany?: JournalItemCreateManyJournalEntryInputEnvelope
    set?: JournalItemWhereUniqueInput | JournalItemWhereUniqueInput[]
    disconnect?: JournalItemWhereUniqueInput | JournalItemWhereUniqueInput[]
    delete?: JournalItemWhereUniqueInput | JournalItemWhereUniqueInput[]
    connect?: JournalItemWhereUniqueInput | JournalItemWhereUniqueInput[]
    update?: JournalItemUpdateWithWhereUniqueWithoutJournalEntryInput | JournalItemUpdateWithWhereUniqueWithoutJournalEntryInput[]
    updateMany?: JournalItemUpdateManyWithWhereWithoutJournalEntryInput | JournalItemUpdateManyWithWhereWithoutJournalEntryInput[]
    deleteMany?: JournalItemScalarWhereInput | JournalItemScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateOneWithoutJournalEntryNestedInput = {
    create?: XOR<TransactionCreateWithoutJournalEntryInput, TransactionUncheckedCreateWithoutJournalEntryInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutJournalEntryInput
    upsert?: TransactionUpsertWithoutJournalEntryInput
    disconnect?: TransactionWhereInput | boolean
    delete?: TransactionWhereInput | boolean
    connect?: TransactionWhereUniqueInput
    update?: XOR<XOR<TransactionUpdateToOneWithWhereWithoutJournalEntryInput, TransactionUpdateWithoutJournalEntryInput>, TransactionUncheckedUpdateWithoutJournalEntryInput>
  }

  export type AccountTransferUncheckedUpdateOneWithoutJournalEntryNestedInput = {
    create?: XOR<AccountTransferCreateWithoutJournalEntryInput, AccountTransferUncheckedCreateWithoutJournalEntryInput>
    connectOrCreate?: AccountTransferCreateOrConnectWithoutJournalEntryInput
    upsert?: AccountTransferUpsertWithoutJournalEntryInput
    disconnect?: AccountTransferWhereInput | boolean
    delete?: AccountTransferWhereInput | boolean
    connect?: AccountTransferWhereUniqueInput
    update?: XOR<XOR<AccountTransferUpdateToOneWithWhereWithoutJournalEntryInput, AccountTransferUpdateWithoutJournalEntryInput>, AccountTransferUncheckedUpdateWithoutJournalEntryInput>
  }

  export type JournalEntryCreateNestedOneWithoutItemsInput = {
    create?: XOR<JournalEntryCreateWithoutItemsInput, JournalEntryUncheckedCreateWithoutItemsInput>
    connectOrCreate?: JournalEntryCreateOrConnectWithoutItemsInput
    connect?: JournalEntryWhereUniqueInput
  }

  export type AccountChartCreateNestedOneWithoutJournalItemsInput = {
    create?: XOR<AccountChartCreateWithoutJournalItemsInput, AccountChartUncheckedCreateWithoutJournalItemsInput>
    connectOrCreate?: AccountChartCreateOrConnectWithoutJournalItemsInput
    connect?: AccountChartWhereUniqueInput
  }

  export type JournalEntryUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<JournalEntryCreateWithoutItemsInput, JournalEntryUncheckedCreateWithoutItemsInput>
    connectOrCreate?: JournalEntryCreateOrConnectWithoutItemsInput
    upsert?: JournalEntryUpsertWithoutItemsInput
    connect?: JournalEntryWhereUniqueInput
    update?: XOR<XOR<JournalEntryUpdateToOneWithWhereWithoutItemsInput, JournalEntryUpdateWithoutItemsInput>, JournalEntryUncheckedUpdateWithoutItemsInput>
  }

  export type AccountChartUpdateOneRequiredWithoutJournalItemsNestedInput = {
    create?: XOR<AccountChartCreateWithoutJournalItemsInput, AccountChartUncheckedCreateWithoutJournalItemsInput>
    connectOrCreate?: AccountChartCreateOrConnectWithoutJournalItemsInput
    upsert?: AccountChartUpsertWithoutJournalItemsInput
    connect?: AccountChartWhereUniqueInput
    update?: XOR<XOR<AccountChartUpdateToOneWithWhereWithoutJournalItemsInput, AccountChartUpdateWithoutJournalItemsInput>, AccountChartUncheckedUpdateWithoutJournalItemsInput>
  }

  export type AccountCreateNestedOneWithoutTransfersFromInput = {
    create?: XOR<AccountCreateWithoutTransfersFromInput, AccountUncheckedCreateWithoutTransfersFromInput>
    connectOrCreate?: AccountCreateOrConnectWithoutTransfersFromInput
    connect?: AccountWhereUniqueInput
  }

  export type AccountCreateNestedOneWithoutTransfersToInput = {
    create?: XOR<AccountCreateWithoutTransfersToInput, AccountUncheckedCreateWithoutTransfersToInput>
    connectOrCreate?: AccountCreateOrConnectWithoutTransfersToInput
    connect?: AccountWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTransfersInput = {
    create?: XOR<UserCreateWithoutTransfersInput, UserUncheckedCreateWithoutTransfersInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransfersInput
    connect?: UserWhereUniqueInput
  }

  export type JournalEntryCreateNestedOneWithoutTransferInput = {
    create?: XOR<JournalEntryCreateWithoutTransferInput, JournalEntryUncheckedCreateWithoutTransferInput>
    connectOrCreate?: JournalEntryCreateOrConnectWithoutTransferInput
    connect?: JournalEntryWhereUniqueInput
  }

  export type AccountUpdateOneRequiredWithoutTransfersFromNestedInput = {
    create?: XOR<AccountCreateWithoutTransfersFromInput, AccountUncheckedCreateWithoutTransfersFromInput>
    connectOrCreate?: AccountCreateOrConnectWithoutTransfersFromInput
    upsert?: AccountUpsertWithoutTransfersFromInput
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutTransfersFromInput, AccountUpdateWithoutTransfersFromInput>, AccountUncheckedUpdateWithoutTransfersFromInput>
  }

  export type AccountUpdateOneRequiredWithoutTransfersToNestedInput = {
    create?: XOR<AccountCreateWithoutTransfersToInput, AccountUncheckedCreateWithoutTransfersToInput>
    connectOrCreate?: AccountCreateOrConnectWithoutTransfersToInput
    upsert?: AccountUpsertWithoutTransfersToInput
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutTransfersToInput, AccountUpdateWithoutTransfersToInput>, AccountUncheckedUpdateWithoutTransfersToInput>
  }

  export type UserUpdateOneRequiredWithoutTransfersNestedInput = {
    create?: XOR<UserCreateWithoutTransfersInput, UserUncheckedCreateWithoutTransfersInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransfersInput
    upsert?: UserUpsertWithoutTransfersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTransfersInput, UserUpdateWithoutTransfersInput>, UserUncheckedUpdateWithoutTransfersInput>
  }

  export type JournalEntryUpdateOneWithoutTransferNestedInput = {
    create?: XOR<JournalEntryCreateWithoutTransferInput, JournalEntryUncheckedCreateWithoutTransferInput>
    connectOrCreate?: JournalEntryCreateOrConnectWithoutTransferInput
    upsert?: JournalEntryUpsertWithoutTransferInput
    disconnect?: JournalEntryWhereInput | boolean
    delete?: JournalEntryWhereInput | boolean
    connect?: JournalEntryWhereUniqueInput
    update?: XOR<XOR<JournalEntryUpdateToOneWithWhereWithoutTransferInput, JournalEntryUpdateWithoutTransferInput>, JournalEntryUncheckedUpdateWithoutTransferInput>
  }

  export type UserCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput
    connect?: UserWhereUniqueInput
  }

  export type AccountCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<AccountCreateWithoutTransactionsInput, AccountUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: AccountCreateOrConnectWithoutTransactionsInput
    connect?: AccountWhereUniqueInput
  }

  export type FundCategoryCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<FundCategoryCreateWithoutTransactionsInput, FundCategoryUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: FundCategoryCreateOrConnectWithoutTransactionsInput
    connect?: FundCategoryWhereUniqueInput
  }

  export type JournalEntryCreateNestedOneWithoutTransactionInput = {
    create?: XOR<JournalEntryCreateWithoutTransactionInput, JournalEntryUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: JournalEntryCreateOrConnectWithoutTransactionInput
    connect?: JournalEntryWhereUniqueInput
  }

  export type EnumTransactionTypeFieldUpdateOperationsInput = {
    set?: $Enums.TransactionType
  }

  export type UserUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput
    upsert?: UserUpsertWithoutTransactionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTransactionsInput, UserUpdateWithoutTransactionsInput>, UserUncheckedUpdateWithoutTransactionsInput>
  }

  export type AccountUpdateOneWithoutTransactionsNestedInput = {
    create?: XOR<AccountCreateWithoutTransactionsInput, AccountUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: AccountCreateOrConnectWithoutTransactionsInput
    upsert?: AccountUpsertWithoutTransactionsInput
    disconnect?: AccountWhereInput | boolean
    delete?: AccountWhereInput | boolean
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutTransactionsInput, AccountUpdateWithoutTransactionsInput>, AccountUncheckedUpdateWithoutTransactionsInput>
  }

  export type FundCategoryUpdateOneWithoutTransactionsNestedInput = {
    create?: XOR<FundCategoryCreateWithoutTransactionsInput, FundCategoryUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: FundCategoryCreateOrConnectWithoutTransactionsInput
    upsert?: FundCategoryUpsertWithoutTransactionsInput
    disconnect?: FundCategoryWhereInput | boolean
    delete?: FundCategoryWhereInput | boolean
    connect?: FundCategoryWhereUniqueInput
    update?: XOR<XOR<FundCategoryUpdateToOneWithWhereWithoutTransactionsInput, FundCategoryUpdateWithoutTransactionsInput>, FundCategoryUncheckedUpdateWithoutTransactionsInput>
  }

  export type JournalEntryUpdateOneWithoutTransactionNestedInput = {
    create?: XOR<JournalEntryCreateWithoutTransactionInput, JournalEntryUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: JournalEntryCreateOrConnectWithoutTransactionInput
    upsert?: JournalEntryUpsertWithoutTransactionInput
    disconnect?: JournalEntryWhereInput | boolean
    delete?: JournalEntryWhereInput | boolean
    connect?: JournalEntryWhereUniqueInput
    update?: XOR<XOR<JournalEntryUpdateToOneWithWhereWithoutTransactionInput, JournalEntryUpdateWithoutTransactionInput>, JournalEntryUncheckedUpdateWithoutTransactionInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumAccountTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountType | EnumAccountTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AccountType[]
    notIn?: $Enums.AccountType[]
    not?: NestedEnumAccountTypeFilter<$PrismaModel> | $Enums.AccountType
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumAccountTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AccountType | EnumAccountTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AccountType[]
    notIn?: $Enums.AccountType[]
    not?: NestedEnumAccountTypeWithAggregatesFilter<$PrismaModel> | $Enums.AccountType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAccountTypeFilter<$PrismaModel>
    _max?: NestedEnumAccountTypeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumFundTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.FundType | EnumFundTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FundType[]
    notIn?: $Enums.FundType[]
    not?: NestedEnumFundTypeFilter<$PrismaModel> | $Enums.FundType
  }

  export type NestedEnumFundTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FundType | EnumFundTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FundType[]
    notIn?: $Enums.FundType[]
    not?: NestedEnumFundTypeWithAggregatesFilter<$PrismaModel> | $Enums.FundType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFundTypeFilter<$PrismaModel>
    _max?: NestedEnumFundTypeFilter<$PrismaModel>
  }

  export type NestedEnumChartTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ChartType | EnumChartTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ChartType[]
    notIn?: $Enums.ChartType[]
    not?: NestedEnumChartTypeFilter<$PrismaModel> | $Enums.ChartType
  }

  export type NestedEnumChartTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ChartType | EnumChartTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ChartType[]
    notIn?: $Enums.ChartType[]
    not?: NestedEnumChartTypeWithAggregatesFilter<$PrismaModel> | $Enums.ChartType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumChartTypeFilter<$PrismaModel>
    _max?: NestedEnumChartTypeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[]
    notIn?: $Enums.TransactionType[]
    not?: NestedEnumTransactionTypeFilter<$PrismaModel> | $Enums.TransactionType
  }

  export type NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[]
    notIn?: $Enums.TransactionType[]
    not?: NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumTransactionTypeFilter<$PrismaModel>
  }

  export type TransactionCreateWithoutUserInput = {
    date: Date | string
    type: $Enums.TransactionType
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    category: string
    attachmentUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    account?: AccountCreateNestedOneWithoutTransactionsInput
    fundCategory?: FundCategoryCreateNestedOneWithoutTransactionsInput
    journalEntry?: JournalEntryCreateNestedOneWithoutTransactionInput
  }

  export type TransactionUncheckedCreateWithoutUserInput = {
    id?: number
    date: Date | string
    type: $Enums.TransactionType
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    category: string
    accountId?: number | null
    fundCategoryId?: number | null
    attachmentUrl?: string | null
    journalEntryId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionCreateOrConnectWithoutUserInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput>
  }

  export type TransactionCreateManyUserInputEnvelope = {
    data: TransactionCreateManyUserInput | TransactionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountTransferCreateWithoutUserInput = {
    date: Date | string
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sourceAccount: AccountCreateNestedOneWithoutTransfersFromInput
    targetAccount: AccountCreateNestedOneWithoutTransfersToInput
    journalEntry?: JournalEntryCreateNestedOneWithoutTransferInput
  }

  export type AccountTransferUncheckedCreateWithoutUserInput = {
    id?: number
    date: Date | string
    sourceAccountId: number
    targetAccountId: number
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    journalEntryId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountTransferCreateOrConnectWithoutUserInput = {
    where: AccountTransferWhereUniqueInput
    create: XOR<AccountTransferCreateWithoutUserInput, AccountTransferUncheckedCreateWithoutUserInput>
  }

  export type AccountTransferCreateManyUserInputEnvelope = {
    data: AccountTransferCreateManyUserInput | AccountTransferCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TransactionUpsertWithWhereUniqueWithoutUserInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutUserInput, TransactionUncheckedUpdateWithoutUserInput>
    create: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutUserInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutUserInput, TransactionUncheckedUpdateWithoutUserInput>
  }

  export type TransactionUpdateManyWithWhereWithoutUserInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutUserInput>
  }

  export type TransactionScalarWhereInput = {
    AND?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    OR?: TransactionScalarWhereInput[]
    NOT?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    id?: IntFilter<"Transaction"> | number
    date?: DateTimeFilter<"Transaction"> | Date | string
    type?: EnumTransactionTypeFilter<"Transaction"> | $Enums.TransactionType
    amount?: DecimalFilter<"Transaction"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableFilter<"Transaction"> | string | null
    category?: StringFilter<"Transaction"> | string
    accountId?: IntNullableFilter<"Transaction"> | number | null
    fundCategoryId?: IntNullableFilter<"Transaction"> | number | null
    attachmentUrl?: StringNullableFilter<"Transaction"> | string | null
    journalEntryId?: IntNullableFilter<"Transaction"> | number | null
    createdBy?: IntFilter<"Transaction"> | number
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
  }

  export type AccountTransferUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountTransferWhereUniqueInput
    update: XOR<AccountTransferUpdateWithoutUserInput, AccountTransferUncheckedUpdateWithoutUserInput>
    create: XOR<AccountTransferCreateWithoutUserInput, AccountTransferUncheckedCreateWithoutUserInput>
  }

  export type AccountTransferUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountTransferWhereUniqueInput
    data: XOR<AccountTransferUpdateWithoutUserInput, AccountTransferUncheckedUpdateWithoutUserInput>
  }

  export type AccountTransferUpdateManyWithWhereWithoutUserInput = {
    where: AccountTransferScalarWhereInput
    data: XOR<AccountTransferUpdateManyMutationInput, AccountTransferUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountTransferScalarWhereInput = {
    AND?: AccountTransferScalarWhereInput | AccountTransferScalarWhereInput[]
    OR?: AccountTransferScalarWhereInput[]
    NOT?: AccountTransferScalarWhereInput | AccountTransferScalarWhereInput[]
    id?: IntFilter<"AccountTransfer"> | number
    date?: DateTimeFilter<"AccountTransfer"> | Date | string
    sourceAccountId?: IntFilter<"AccountTransfer"> | number
    targetAccountId?: IntFilter<"AccountTransfer"> | number
    amount?: DecimalFilter<"AccountTransfer"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableFilter<"AccountTransfer"> | string | null
    journalEntryId?: IntNullableFilter<"AccountTransfer"> | number | null
    createdBy?: IntFilter<"AccountTransfer"> | number
    createdAt?: DateTimeFilter<"AccountTransfer"> | Date | string
    updatedAt?: DateTimeFilter<"AccountTransfer"> | Date | string
  }

  export type TransactionCreateWithoutAccountInput = {
    date: Date | string
    type: $Enums.TransactionType
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    category: string
    attachmentUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTransactionsInput
    fundCategory?: FundCategoryCreateNestedOneWithoutTransactionsInput
    journalEntry?: JournalEntryCreateNestedOneWithoutTransactionInput
  }

  export type TransactionUncheckedCreateWithoutAccountInput = {
    id?: number
    date: Date | string
    type: $Enums.TransactionType
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    category: string
    fundCategoryId?: number | null
    attachmentUrl?: string | null
    journalEntryId?: number | null
    createdBy: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionCreateOrConnectWithoutAccountInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutAccountInput, TransactionUncheckedCreateWithoutAccountInput>
  }

  export type TransactionCreateManyAccountInputEnvelope = {
    data: TransactionCreateManyAccountInput | TransactionCreateManyAccountInput[]
    skipDuplicates?: boolean
  }

  export type AccountTransferCreateWithoutSourceAccountInput = {
    date: Date | string
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    targetAccount: AccountCreateNestedOneWithoutTransfersToInput
    user: UserCreateNestedOneWithoutTransfersInput
    journalEntry?: JournalEntryCreateNestedOneWithoutTransferInput
  }

  export type AccountTransferUncheckedCreateWithoutSourceAccountInput = {
    id?: number
    date: Date | string
    targetAccountId: number
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    journalEntryId?: number | null
    createdBy: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountTransferCreateOrConnectWithoutSourceAccountInput = {
    where: AccountTransferWhereUniqueInput
    create: XOR<AccountTransferCreateWithoutSourceAccountInput, AccountTransferUncheckedCreateWithoutSourceAccountInput>
  }

  export type AccountTransferCreateManySourceAccountInputEnvelope = {
    data: AccountTransferCreateManySourceAccountInput | AccountTransferCreateManySourceAccountInput[]
    skipDuplicates?: boolean
  }

  export type AccountTransferCreateWithoutTargetAccountInput = {
    date: Date | string
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sourceAccount: AccountCreateNestedOneWithoutTransfersFromInput
    user: UserCreateNestedOneWithoutTransfersInput
    journalEntry?: JournalEntryCreateNestedOneWithoutTransferInput
  }

  export type AccountTransferUncheckedCreateWithoutTargetAccountInput = {
    id?: number
    date: Date | string
    sourceAccountId: number
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    journalEntryId?: number | null
    createdBy: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountTransferCreateOrConnectWithoutTargetAccountInput = {
    where: AccountTransferWhereUniqueInput
    create: XOR<AccountTransferCreateWithoutTargetAccountInput, AccountTransferUncheckedCreateWithoutTargetAccountInput>
  }

  export type AccountTransferCreateManyTargetAccountInputEnvelope = {
    data: AccountTransferCreateManyTargetAccountInput | AccountTransferCreateManyTargetAccountInput[]
    skipDuplicates?: boolean
  }

  export type TransactionUpsertWithWhereUniqueWithoutAccountInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutAccountInput, TransactionUncheckedUpdateWithoutAccountInput>
    create: XOR<TransactionCreateWithoutAccountInput, TransactionUncheckedCreateWithoutAccountInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutAccountInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutAccountInput, TransactionUncheckedUpdateWithoutAccountInput>
  }

  export type TransactionUpdateManyWithWhereWithoutAccountInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutAccountInput>
  }

  export type AccountTransferUpsertWithWhereUniqueWithoutSourceAccountInput = {
    where: AccountTransferWhereUniqueInput
    update: XOR<AccountTransferUpdateWithoutSourceAccountInput, AccountTransferUncheckedUpdateWithoutSourceAccountInput>
    create: XOR<AccountTransferCreateWithoutSourceAccountInput, AccountTransferUncheckedCreateWithoutSourceAccountInput>
  }

  export type AccountTransferUpdateWithWhereUniqueWithoutSourceAccountInput = {
    where: AccountTransferWhereUniqueInput
    data: XOR<AccountTransferUpdateWithoutSourceAccountInput, AccountTransferUncheckedUpdateWithoutSourceAccountInput>
  }

  export type AccountTransferUpdateManyWithWhereWithoutSourceAccountInput = {
    where: AccountTransferScalarWhereInput
    data: XOR<AccountTransferUpdateManyMutationInput, AccountTransferUncheckedUpdateManyWithoutSourceAccountInput>
  }

  export type AccountTransferUpsertWithWhereUniqueWithoutTargetAccountInput = {
    where: AccountTransferWhereUniqueInput
    update: XOR<AccountTransferUpdateWithoutTargetAccountInput, AccountTransferUncheckedUpdateWithoutTargetAccountInput>
    create: XOR<AccountTransferCreateWithoutTargetAccountInput, AccountTransferUncheckedCreateWithoutTargetAccountInput>
  }

  export type AccountTransferUpdateWithWhereUniqueWithoutTargetAccountInput = {
    where: AccountTransferWhereUniqueInput
    data: XOR<AccountTransferUpdateWithoutTargetAccountInput, AccountTransferUncheckedUpdateWithoutTargetAccountInput>
  }

  export type AccountTransferUpdateManyWithWhereWithoutTargetAccountInput = {
    where: AccountTransferScalarWhereInput
    data: XOR<AccountTransferUpdateManyMutationInput, AccountTransferUncheckedUpdateManyWithoutTargetAccountInput>
  }

  export type TransactionCreateWithoutFundCategoryInput = {
    date: Date | string
    type: $Enums.TransactionType
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    category: string
    attachmentUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTransactionsInput
    account?: AccountCreateNestedOneWithoutTransactionsInput
    journalEntry?: JournalEntryCreateNestedOneWithoutTransactionInput
  }

  export type TransactionUncheckedCreateWithoutFundCategoryInput = {
    id?: number
    date: Date | string
    type: $Enums.TransactionType
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    category: string
    accountId?: number | null
    attachmentUrl?: string | null
    journalEntryId?: number | null
    createdBy: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionCreateOrConnectWithoutFundCategoryInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutFundCategoryInput, TransactionUncheckedCreateWithoutFundCategoryInput>
  }

  export type TransactionCreateManyFundCategoryInputEnvelope = {
    data: TransactionCreateManyFundCategoryInput | TransactionCreateManyFundCategoryInput[]
    skipDuplicates?: boolean
  }

  export type TransactionUpsertWithWhereUniqueWithoutFundCategoryInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutFundCategoryInput, TransactionUncheckedUpdateWithoutFundCategoryInput>
    create: XOR<TransactionCreateWithoutFundCategoryInput, TransactionUncheckedCreateWithoutFundCategoryInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutFundCategoryInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutFundCategoryInput, TransactionUncheckedUpdateWithoutFundCategoryInput>
  }

  export type TransactionUpdateManyWithWhereWithoutFundCategoryInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutFundCategoryInput>
  }

  export type JournalItemCreateWithoutChartInput = {
    debit?: Decimal | DecimalJsLike | number | string
    credit?: Decimal | DecimalJsLike | number | string
    journalEntry: JournalEntryCreateNestedOneWithoutItemsInput
  }

  export type JournalItemUncheckedCreateWithoutChartInput = {
    id?: number
    journalEntryId: number
    debit?: Decimal | DecimalJsLike | number | string
    credit?: Decimal | DecimalJsLike | number | string
  }

  export type JournalItemCreateOrConnectWithoutChartInput = {
    where: JournalItemWhereUniqueInput
    create: XOR<JournalItemCreateWithoutChartInput, JournalItemUncheckedCreateWithoutChartInput>
  }

  export type JournalItemCreateManyChartInputEnvelope = {
    data: JournalItemCreateManyChartInput | JournalItemCreateManyChartInput[]
    skipDuplicates?: boolean
  }

  export type JournalItemUpsertWithWhereUniqueWithoutChartInput = {
    where: JournalItemWhereUniqueInput
    update: XOR<JournalItemUpdateWithoutChartInput, JournalItemUncheckedUpdateWithoutChartInput>
    create: XOR<JournalItemCreateWithoutChartInput, JournalItemUncheckedCreateWithoutChartInput>
  }

  export type JournalItemUpdateWithWhereUniqueWithoutChartInput = {
    where: JournalItemWhereUniqueInput
    data: XOR<JournalItemUpdateWithoutChartInput, JournalItemUncheckedUpdateWithoutChartInput>
  }

  export type JournalItemUpdateManyWithWhereWithoutChartInput = {
    where: JournalItemScalarWhereInput
    data: XOR<JournalItemUpdateManyMutationInput, JournalItemUncheckedUpdateManyWithoutChartInput>
  }

  export type JournalItemScalarWhereInput = {
    AND?: JournalItemScalarWhereInput | JournalItemScalarWhereInput[]
    OR?: JournalItemScalarWhereInput[]
    NOT?: JournalItemScalarWhereInput | JournalItemScalarWhereInput[]
    id?: IntFilter<"JournalItem"> | number
    journalEntryId?: IntFilter<"JournalItem"> | number
    chartId?: IntFilter<"JournalItem"> | number
    debit?: DecimalFilter<"JournalItem"> | Decimal | DecimalJsLike | number | string
    credit?: DecimalFilter<"JournalItem"> | Decimal | DecimalJsLike | number | string
  }

  export type JournalItemCreateWithoutJournalEntryInput = {
    debit?: Decimal | DecimalJsLike | number | string
    credit?: Decimal | DecimalJsLike | number | string
    chart: AccountChartCreateNestedOneWithoutJournalItemsInput
  }

  export type JournalItemUncheckedCreateWithoutJournalEntryInput = {
    id?: number
    chartId: number
    debit?: Decimal | DecimalJsLike | number | string
    credit?: Decimal | DecimalJsLike | number | string
  }

  export type JournalItemCreateOrConnectWithoutJournalEntryInput = {
    where: JournalItemWhereUniqueInput
    create: XOR<JournalItemCreateWithoutJournalEntryInput, JournalItemUncheckedCreateWithoutJournalEntryInput>
  }

  export type JournalItemCreateManyJournalEntryInputEnvelope = {
    data: JournalItemCreateManyJournalEntryInput | JournalItemCreateManyJournalEntryInput[]
    skipDuplicates?: boolean
  }

  export type TransactionCreateWithoutJournalEntryInput = {
    date: Date | string
    type: $Enums.TransactionType
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    category: string
    attachmentUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTransactionsInput
    account?: AccountCreateNestedOneWithoutTransactionsInput
    fundCategory?: FundCategoryCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionUncheckedCreateWithoutJournalEntryInput = {
    id?: number
    date: Date | string
    type: $Enums.TransactionType
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    category: string
    accountId?: number | null
    fundCategoryId?: number | null
    attachmentUrl?: string | null
    createdBy: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionCreateOrConnectWithoutJournalEntryInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutJournalEntryInput, TransactionUncheckedCreateWithoutJournalEntryInput>
  }

  export type AccountTransferCreateWithoutJournalEntryInput = {
    date: Date | string
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sourceAccount: AccountCreateNestedOneWithoutTransfersFromInput
    targetAccount: AccountCreateNestedOneWithoutTransfersToInput
    user: UserCreateNestedOneWithoutTransfersInput
  }

  export type AccountTransferUncheckedCreateWithoutJournalEntryInput = {
    id?: number
    date: Date | string
    sourceAccountId: number
    targetAccountId: number
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    createdBy: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountTransferCreateOrConnectWithoutJournalEntryInput = {
    where: AccountTransferWhereUniqueInput
    create: XOR<AccountTransferCreateWithoutJournalEntryInput, AccountTransferUncheckedCreateWithoutJournalEntryInput>
  }

  export type JournalItemUpsertWithWhereUniqueWithoutJournalEntryInput = {
    where: JournalItemWhereUniqueInput
    update: XOR<JournalItemUpdateWithoutJournalEntryInput, JournalItemUncheckedUpdateWithoutJournalEntryInput>
    create: XOR<JournalItemCreateWithoutJournalEntryInput, JournalItemUncheckedCreateWithoutJournalEntryInput>
  }

  export type JournalItemUpdateWithWhereUniqueWithoutJournalEntryInput = {
    where: JournalItemWhereUniqueInput
    data: XOR<JournalItemUpdateWithoutJournalEntryInput, JournalItemUncheckedUpdateWithoutJournalEntryInput>
  }

  export type JournalItemUpdateManyWithWhereWithoutJournalEntryInput = {
    where: JournalItemScalarWhereInput
    data: XOR<JournalItemUpdateManyMutationInput, JournalItemUncheckedUpdateManyWithoutJournalEntryInput>
  }

  export type TransactionUpsertWithoutJournalEntryInput = {
    update: XOR<TransactionUpdateWithoutJournalEntryInput, TransactionUncheckedUpdateWithoutJournalEntryInput>
    create: XOR<TransactionCreateWithoutJournalEntryInput, TransactionUncheckedCreateWithoutJournalEntryInput>
    where?: TransactionWhereInput
  }

  export type TransactionUpdateToOneWithWhereWithoutJournalEntryInput = {
    where?: TransactionWhereInput
    data: XOR<TransactionUpdateWithoutJournalEntryInput, TransactionUncheckedUpdateWithoutJournalEntryInput>
  }

  export type TransactionUpdateWithoutJournalEntryInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTransactionsNestedInput
    account?: AccountUpdateOneWithoutTransactionsNestedInput
    fundCategory?: FundCategoryUpdateOneWithoutTransactionsNestedInput
  }

  export type TransactionUncheckedUpdateWithoutJournalEntryInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    accountId?: NullableIntFieldUpdateOperationsInput | number | null
    fundCategoryId?: NullableIntFieldUpdateOperationsInput | number | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountTransferUpsertWithoutJournalEntryInput = {
    update: XOR<AccountTransferUpdateWithoutJournalEntryInput, AccountTransferUncheckedUpdateWithoutJournalEntryInput>
    create: XOR<AccountTransferCreateWithoutJournalEntryInput, AccountTransferUncheckedCreateWithoutJournalEntryInput>
    where?: AccountTransferWhereInput
  }

  export type AccountTransferUpdateToOneWithWhereWithoutJournalEntryInput = {
    where?: AccountTransferWhereInput
    data: XOR<AccountTransferUpdateWithoutJournalEntryInput, AccountTransferUncheckedUpdateWithoutJournalEntryInput>
  }

  export type AccountTransferUpdateWithoutJournalEntryInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sourceAccount?: AccountUpdateOneRequiredWithoutTransfersFromNestedInput
    targetAccount?: AccountUpdateOneRequiredWithoutTransfersToNestedInput
    user?: UserUpdateOneRequiredWithoutTransfersNestedInput
  }

  export type AccountTransferUncheckedUpdateWithoutJournalEntryInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    sourceAccountId?: IntFieldUpdateOperationsInput | number
    targetAccountId?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JournalEntryCreateWithoutItemsInput = {
    entryNumber: string
    date: Date | string
    description: string
    refType?: string | null
    refId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    transaction?: TransactionCreateNestedOneWithoutJournalEntryInput
    transfer?: AccountTransferCreateNestedOneWithoutJournalEntryInput
  }

  export type JournalEntryUncheckedCreateWithoutItemsInput = {
    id?: number
    entryNumber: string
    date: Date | string
    description: string
    refType?: string | null
    refId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    transaction?: TransactionUncheckedCreateNestedOneWithoutJournalEntryInput
    transfer?: AccountTransferUncheckedCreateNestedOneWithoutJournalEntryInput
  }

  export type JournalEntryCreateOrConnectWithoutItemsInput = {
    where: JournalEntryWhereUniqueInput
    create: XOR<JournalEntryCreateWithoutItemsInput, JournalEntryUncheckedCreateWithoutItemsInput>
  }

  export type AccountChartCreateWithoutJournalItemsInput = {
    code: string
    name: string
    type: $Enums.ChartType
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountChartUncheckedCreateWithoutJournalItemsInput = {
    id?: number
    code: string
    name: string
    type: $Enums.ChartType
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountChartCreateOrConnectWithoutJournalItemsInput = {
    where: AccountChartWhereUniqueInput
    create: XOR<AccountChartCreateWithoutJournalItemsInput, AccountChartUncheckedCreateWithoutJournalItemsInput>
  }

  export type JournalEntryUpsertWithoutItemsInput = {
    update: XOR<JournalEntryUpdateWithoutItemsInput, JournalEntryUncheckedUpdateWithoutItemsInput>
    create: XOR<JournalEntryCreateWithoutItemsInput, JournalEntryUncheckedCreateWithoutItemsInput>
    where?: JournalEntryWhereInput
  }

  export type JournalEntryUpdateToOneWithWhereWithoutItemsInput = {
    where?: JournalEntryWhereInput
    data: XOR<JournalEntryUpdateWithoutItemsInput, JournalEntryUncheckedUpdateWithoutItemsInput>
  }

  export type JournalEntryUpdateWithoutItemsInput = {
    entryNumber?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    refType?: NullableStringFieldUpdateOperationsInput | string | null
    refId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction?: TransactionUpdateOneWithoutJournalEntryNestedInput
    transfer?: AccountTransferUpdateOneWithoutJournalEntryNestedInput
  }

  export type JournalEntryUncheckedUpdateWithoutItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    entryNumber?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    refType?: NullableStringFieldUpdateOperationsInput | string | null
    refId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction?: TransactionUncheckedUpdateOneWithoutJournalEntryNestedInput
    transfer?: AccountTransferUncheckedUpdateOneWithoutJournalEntryNestedInput
  }

  export type AccountChartUpsertWithoutJournalItemsInput = {
    update: XOR<AccountChartUpdateWithoutJournalItemsInput, AccountChartUncheckedUpdateWithoutJournalItemsInput>
    create: XOR<AccountChartCreateWithoutJournalItemsInput, AccountChartUncheckedCreateWithoutJournalItemsInput>
    where?: AccountChartWhereInput
  }

  export type AccountChartUpdateToOneWithWhereWithoutJournalItemsInput = {
    where?: AccountChartWhereInput
    data: XOR<AccountChartUpdateWithoutJournalItemsInput, AccountChartUncheckedUpdateWithoutJournalItemsInput>
  }

  export type AccountChartUpdateWithoutJournalItemsInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumChartTypeFieldUpdateOperationsInput | $Enums.ChartType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountChartUncheckedUpdateWithoutJournalItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumChartTypeFieldUpdateOperationsInput | $Enums.ChartType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateWithoutTransfersFromInput = {
    name: string
    type?: $Enums.AccountType
    accountNumber?: string | null
    bankName?: string | null
    balance?: Decimal | DecimalJsLike | number | string
    isDefault?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionCreateNestedManyWithoutAccountInput
    transfersTo?: AccountTransferCreateNestedManyWithoutTargetAccountInput
  }

  export type AccountUncheckedCreateWithoutTransfersFromInput = {
    id?: number
    name: string
    type?: $Enums.AccountType
    accountNumber?: string | null
    bankName?: string | null
    balance?: Decimal | DecimalJsLike | number | string
    isDefault?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutAccountInput
    transfersTo?: AccountTransferUncheckedCreateNestedManyWithoutTargetAccountInput
  }

  export type AccountCreateOrConnectWithoutTransfersFromInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutTransfersFromInput, AccountUncheckedCreateWithoutTransfersFromInput>
  }

  export type AccountCreateWithoutTransfersToInput = {
    name: string
    type?: $Enums.AccountType
    accountNumber?: string | null
    bankName?: string | null
    balance?: Decimal | DecimalJsLike | number | string
    isDefault?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionCreateNestedManyWithoutAccountInput
    transfersFrom?: AccountTransferCreateNestedManyWithoutSourceAccountInput
  }

  export type AccountUncheckedCreateWithoutTransfersToInput = {
    id?: number
    name: string
    type?: $Enums.AccountType
    accountNumber?: string | null
    bankName?: string | null
    balance?: Decimal | DecimalJsLike | number | string
    isDefault?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutAccountInput
    transfersFrom?: AccountTransferUncheckedCreateNestedManyWithoutSourceAccountInput
  }

  export type AccountCreateOrConnectWithoutTransfersToInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutTransfersToInput, AccountUncheckedCreateWithoutTransfersToInput>
  }

  export type UserCreateWithoutTransfersInput = {
    username: string
    password: string
    name: string
    role?: $Enums.Role
    permissions?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTransfersInput = {
    id?: number
    username: string
    password: string
    name: string
    role?: $Enums.Role
    permissions?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTransfersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTransfersInput, UserUncheckedCreateWithoutTransfersInput>
  }

  export type JournalEntryCreateWithoutTransferInput = {
    entryNumber: string
    date: Date | string
    description: string
    refType?: string | null
    refId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: JournalItemCreateNestedManyWithoutJournalEntryInput
    transaction?: TransactionCreateNestedOneWithoutJournalEntryInput
  }

  export type JournalEntryUncheckedCreateWithoutTransferInput = {
    id?: number
    entryNumber: string
    date: Date | string
    description: string
    refType?: string | null
    refId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: JournalItemUncheckedCreateNestedManyWithoutJournalEntryInput
    transaction?: TransactionUncheckedCreateNestedOneWithoutJournalEntryInput
  }

  export type JournalEntryCreateOrConnectWithoutTransferInput = {
    where: JournalEntryWhereUniqueInput
    create: XOR<JournalEntryCreateWithoutTransferInput, JournalEntryUncheckedCreateWithoutTransferInput>
  }

  export type AccountUpsertWithoutTransfersFromInput = {
    update: XOR<AccountUpdateWithoutTransfersFromInput, AccountUncheckedUpdateWithoutTransfersFromInput>
    create: XOR<AccountCreateWithoutTransfersFromInput, AccountUncheckedCreateWithoutTransfersFromInput>
    where?: AccountWhereInput
  }

  export type AccountUpdateToOneWithWhereWithoutTransfersFromInput = {
    where?: AccountWhereInput
    data: XOR<AccountUpdateWithoutTransfersFromInput, AccountUncheckedUpdateWithoutTransfersFromInput>
  }

  export type AccountUpdateWithoutTransfersFromInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUpdateManyWithoutAccountNestedInput
    transfersTo?: AccountTransferUpdateManyWithoutTargetAccountNestedInput
  }

  export type AccountUncheckedUpdateWithoutTransfersFromInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutAccountNestedInput
    transfersTo?: AccountTransferUncheckedUpdateManyWithoutTargetAccountNestedInput
  }

  export type AccountUpsertWithoutTransfersToInput = {
    update: XOR<AccountUpdateWithoutTransfersToInput, AccountUncheckedUpdateWithoutTransfersToInput>
    create: XOR<AccountCreateWithoutTransfersToInput, AccountUncheckedCreateWithoutTransfersToInput>
    where?: AccountWhereInput
  }

  export type AccountUpdateToOneWithWhereWithoutTransfersToInput = {
    where?: AccountWhereInput
    data: XOR<AccountUpdateWithoutTransfersToInput, AccountUncheckedUpdateWithoutTransfersToInput>
  }

  export type AccountUpdateWithoutTransfersToInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUpdateManyWithoutAccountNestedInput
    transfersFrom?: AccountTransferUpdateManyWithoutSourceAccountNestedInput
  }

  export type AccountUncheckedUpdateWithoutTransfersToInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutAccountNestedInput
    transfersFrom?: AccountTransferUncheckedUpdateManyWithoutSourceAccountNestedInput
  }

  export type UserUpsertWithoutTransfersInput = {
    update: XOR<UserUpdateWithoutTransfersInput, UserUncheckedUpdateWithoutTransfersInput>
    create: XOR<UserCreateWithoutTransfersInput, UserUncheckedCreateWithoutTransfersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTransfersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTransfersInput, UserUncheckedUpdateWithoutTransfersInput>
  }

  export type UserUpdateWithoutTransfersInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    permissions?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTransfersInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    permissions?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type JournalEntryUpsertWithoutTransferInput = {
    update: XOR<JournalEntryUpdateWithoutTransferInput, JournalEntryUncheckedUpdateWithoutTransferInput>
    create: XOR<JournalEntryCreateWithoutTransferInput, JournalEntryUncheckedCreateWithoutTransferInput>
    where?: JournalEntryWhereInput
  }

  export type JournalEntryUpdateToOneWithWhereWithoutTransferInput = {
    where?: JournalEntryWhereInput
    data: XOR<JournalEntryUpdateWithoutTransferInput, JournalEntryUncheckedUpdateWithoutTransferInput>
  }

  export type JournalEntryUpdateWithoutTransferInput = {
    entryNumber?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    refType?: NullableStringFieldUpdateOperationsInput | string | null
    refId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: JournalItemUpdateManyWithoutJournalEntryNestedInput
    transaction?: TransactionUpdateOneWithoutJournalEntryNestedInput
  }

  export type JournalEntryUncheckedUpdateWithoutTransferInput = {
    id?: IntFieldUpdateOperationsInput | number
    entryNumber?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    refType?: NullableStringFieldUpdateOperationsInput | string | null
    refId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: JournalItemUncheckedUpdateManyWithoutJournalEntryNestedInput
    transaction?: TransactionUncheckedUpdateOneWithoutJournalEntryNestedInput
  }

  export type UserCreateWithoutTransactionsInput = {
    username: string
    password: string
    name: string
    role?: $Enums.Role
    permissions?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    transfers?: AccountTransferCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTransactionsInput = {
    id?: number
    username: string
    password: string
    name: string
    role?: $Enums.Role
    permissions?: NullableJsonNullValueInput | InputJsonValue
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    transfers?: AccountTransferUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTransactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
  }

  export type AccountCreateWithoutTransactionsInput = {
    name: string
    type?: $Enums.AccountType
    accountNumber?: string | null
    bankName?: string | null
    balance?: Decimal | DecimalJsLike | number | string
    isDefault?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    transfersFrom?: AccountTransferCreateNestedManyWithoutSourceAccountInput
    transfersTo?: AccountTransferCreateNestedManyWithoutTargetAccountInput
  }

  export type AccountUncheckedCreateWithoutTransactionsInput = {
    id?: number
    name: string
    type?: $Enums.AccountType
    accountNumber?: string | null
    bankName?: string | null
    balance?: Decimal | DecimalJsLike | number | string
    isDefault?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    transfersFrom?: AccountTransferUncheckedCreateNestedManyWithoutSourceAccountInput
    transfersTo?: AccountTransferUncheckedCreateNestedManyWithoutTargetAccountInput
  }

  export type AccountCreateOrConnectWithoutTransactionsInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutTransactionsInput, AccountUncheckedCreateWithoutTransactionsInput>
  }

  export type FundCategoryCreateWithoutTransactionsInput = {
    name: string
    code: string
    fundType?: $Enums.FundType
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FundCategoryUncheckedCreateWithoutTransactionsInput = {
    id?: number
    name: string
    code: string
    fundType?: $Enums.FundType
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FundCategoryCreateOrConnectWithoutTransactionsInput = {
    where: FundCategoryWhereUniqueInput
    create: XOR<FundCategoryCreateWithoutTransactionsInput, FundCategoryUncheckedCreateWithoutTransactionsInput>
  }

  export type JournalEntryCreateWithoutTransactionInput = {
    entryNumber: string
    date: Date | string
    description: string
    refType?: string | null
    refId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: JournalItemCreateNestedManyWithoutJournalEntryInput
    transfer?: AccountTransferCreateNestedOneWithoutJournalEntryInput
  }

  export type JournalEntryUncheckedCreateWithoutTransactionInput = {
    id?: number
    entryNumber: string
    date: Date | string
    description: string
    refType?: string | null
    refId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: JournalItemUncheckedCreateNestedManyWithoutJournalEntryInput
    transfer?: AccountTransferUncheckedCreateNestedOneWithoutJournalEntryInput
  }

  export type JournalEntryCreateOrConnectWithoutTransactionInput = {
    where: JournalEntryWhereUniqueInput
    create: XOR<JournalEntryCreateWithoutTransactionInput, JournalEntryUncheckedCreateWithoutTransactionInput>
  }

  export type UserUpsertWithoutTransactionsInput = {
    update: XOR<UserUpdateWithoutTransactionsInput, UserUncheckedUpdateWithoutTransactionsInput>
    create: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTransactionsInput, UserUncheckedUpdateWithoutTransactionsInput>
  }

  export type UserUpdateWithoutTransactionsInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    permissions?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transfers?: AccountTransferUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    permissions?: NullableJsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transfers?: AccountTransferUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AccountUpsertWithoutTransactionsInput = {
    update: XOR<AccountUpdateWithoutTransactionsInput, AccountUncheckedUpdateWithoutTransactionsInput>
    create: XOR<AccountCreateWithoutTransactionsInput, AccountUncheckedCreateWithoutTransactionsInput>
    where?: AccountWhereInput
  }

  export type AccountUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: AccountWhereInput
    data: XOR<AccountUpdateWithoutTransactionsInput, AccountUncheckedUpdateWithoutTransactionsInput>
  }

  export type AccountUpdateWithoutTransactionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transfersFrom?: AccountTransferUpdateManyWithoutSourceAccountNestedInput
    transfersTo?: AccountTransferUpdateManyWithoutTargetAccountNestedInput
  }

  export type AccountUncheckedUpdateWithoutTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumAccountTypeFieldUpdateOperationsInput | $Enums.AccountType
    accountNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankName?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transfersFrom?: AccountTransferUncheckedUpdateManyWithoutSourceAccountNestedInput
    transfersTo?: AccountTransferUncheckedUpdateManyWithoutTargetAccountNestedInput
  }

  export type FundCategoryUpsertWithoutTransactionsInput = {
    update: XOR<FundCategoryUpdateWithoutTransactionsInput, FundCategoryUncheckedUpdateWithoutTransactionsInput>
    create: XOR<FundCategoryCreateWithoutTransactionsInput, FundCategoryUncheckedCreateWithoutTransactionsInput>
    where?: FundCategoryWhereInput
  }

  export type FundCategoryUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: FundCategoryWhereInput
    data: XOR<FundCategoryUpdateWithoutTransactionsInput, FundCategoryUncheckedUpdateWithoutTransactionsInput>
  }

  export type FundCategoryUpdateWithoutTransactionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    fundType?: EnumFundTypeFieldUpdateOperationsInput | $Enums.FundType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FundCategoryUncheckedUpdateWithoutTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    fundType?: EnumFundTypeFieldUpdateOperationsInput | $Enums.FundType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JournalEntryUpsertWithoutTransactionInput = {
    update: XOR<JournalEntryUpdateWithoutTransactionInput, JournalEntryUncheckedUpdateWithoutTransactionInput>
    create: XOR<JournalEntryCreateWithoutTransactionInput, JournalEntryUncheckedCreateWithoutTransactionInput>
    where?: JournalEntryWhereInput
  }

  export type JournalEntryUpdateToOneWithWhereWithoutTransactionInput = {
    where?: JournalEntryWhereInput
    data: XOR<JournalEntryUpdateWithoutTransactionInput, JournalEntryUncheckedUpdateWithoutTransactionInput>
  }

  export type JournalEntryUpdateWithoutTransactionInput = {
    entryNumber?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    refType?: NullableStringFieldUpdateOperationsInput | string | null
    refId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: JournalItemUpdateManyWithoutJournalEntryNestedInput
    transfer?: AccountTransferUpdateOneWithoutJournalEntryNestedInput
  }

  export type JournalEntryUncheckedUpdateWithoutTransactionInput = {
    id?: IntFieldUpdateOperationsInput | number
    entryNumber?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    refType?: NullableStringFieldUpdateOperationsInput | string | null
    refId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: JournalItemUncheckedUpdateManyWithoutJournalEntryNestedInput
    transfer?: AccountTransferUncheckedUpdateOneWithoutJournalEntryNestedInput
  }

  export type TransactionCreateManyUserInput = {
    id?: number
    date: Date | string
    type: $Enums.TransactionType
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    category: string
    accountId?: number | null
    fundCategoryId?: number | null
    attachmentUrl?: string | null
    journalEntryId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountTransferCreateManyUserInput = {
    id?: number
    date: Date | string
    sourceAccountId: number
    targetAccountId: number
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    journalEntryId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionUpdateWithoutUserInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: AccountUpdateOneWithoutTransactionsNestedInput
    fundCategory?: FundCategoryUpdateOneWithoutTransactionsNestedInput
    journalEntry?: JournalEntryUpdateOneWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    accountId?: NullableIntFieldUpdateOperationsInput | number | null
    fundCategoryId?: NullableIntFieldUpdateOperationsInput | number | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    journalEntryId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    accountId?: NullableIntFieldUpdateOperationsInput | number | null
    fundCategoryId?: NullableIntFieldUpdateOperationsInput | number | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    journalEntryId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountTransferUpdateWithoutUserInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sourceAccount?: AccountUpdateOneRequiredWithoutTransfersFromNestedInput
    targetAccount?: AccountUpdateOneRequiredWithoutTransfersToNestedInput
    journalEntry?: JournalEntryUpdateOneWithoutTransferNestedInput
  }

  export type AccountTransferUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    sourceAccountId?: IntFieldUpdateOperationsInput | number
    targetAccountId?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    journalEntryId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountTransferUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    sourceAccountId?: IntFieldUpdateOperationsInput | number
    targetAccountId?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    journalEntryId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateManyAccountInput = {
    id?: number
    date: Date | string
    type: $Enums.TransactionType
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    category: string
    fundCategoryId?: number | null
    attachmentUrl?: string | null
    journalEntryId?: number | null
    createdBy: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountTransferCreateManySourceAccountInput = {
    id?: number
    date: Date | string
    targetAccountId: number
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    journalEntryId?: number | null
    createdBy: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountTransferCreateManyTargetAccountInput = {
    id?: number
    date: Date | string
    sourceAccountId: number
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    journalEntryId?: number | null
    createdBy: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionUpdateWithoutAccountInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTransactionsNestedInput
    fundCategory?: FundCategoryUpdateOneWithoutTransactionsNestedInput
    journalEntry?: JournalEntryUpdateOneWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateWithoutAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    fundCategoryId?: NullableIntFieldUpdateOperationsInput | number | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    journalEntryId?: NullableIntFieldUpdateOperationsInput | number | null
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyWithoutAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    fundCategoryId?: NullableIntFieldUpdateOperationsInput | number | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    journalEntryId?: NullableIntFieldUpdateOperationsInput | number | null
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountTransferUpdateWithoutSourceAccountInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    targetAccount?: AccountUpdateOneRequiredWithoutTransfersToNestedInput
    user?: UserUpdateOneRequiredWithoutTransfersNestedInput
    journalEntry?: JournalEntryUpdateOneWithoutTransferNestedInput
  }

  export type AccountTransferUncheckedUpdateWithoutSourceAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    targetAccountId?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    journalEntryId?: NullableIntFieldUpdateOperationsInput | number | null
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountTransferUncheckedUpdateManyWithoutSourceAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    targetAccountId?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    journalEntryId?: NullableIntFieldUpdateOperationsInput | number | null
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountTransferUpdateWithoutTargetAccountInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sourceAccount?: AccountUpdateOneRequiredWithoutTransfersFromNestedInput
    user?: UserUpdateOneRequiredWithoutTransfersNestedInput
    journalEntry?: JournalEntryUpdateOneWithoutTransferNestedInput
  }

  export type AccountTransferUncheckedUpdateWithoutTargetAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    sourceAccountId?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    journalEntryId?: NullableIntFieldUpdateOperationsInput | number | null
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountTransferUncheckedUpdateManyWithoutTargetAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    sourceAccountId?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    journalEntryId?: NullableIntFieldUpdateOperationsInput | number | null
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateManyFundCategoryInput = {
    id?: number
    date: Date | string
    type: $Enums.TransactionType
    amount: Decimal | DecimalJsLike | number | string
    description?: string | null
    category: string
    accountId?: number | null
    attachmentUrl?: string | null
    journalEntryId?: number | null
    createdBy: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionUpdateWithoutFundCategoryInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTransactionsNestedInput
    account?: AccountUpdateOneWithoutTransactionsNestedInput
    journalEntry?: JournalEntryUpdateOneWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateWithoutFundCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    accountId?: NullableIntFieldUpdateOperationsInput | number | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    journalEntryId?: NullableIntFieldUpdateOperationsInput | number | null
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyWithoutFundCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    accountId?: NullableIntFieldUpdateOperationsInput | number | null
    attachmentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    journalEntryId?: NullableIntFieldUpdateOperationsInput | number | null
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JournalItemCreateManyChartInput = {
    id?: number
    journalEntryId: number
    debit?: Decimal | DecimalJsLike | number | string
    credit?: Decimal | DecimalJsLike | number | string
  }

  export type JournalItemUpdateWithoutChartInput = {
    debit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    credit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    journalEntry?: JournalEntryUpdateOneRequiredWithoutItemsNestedInput
  }

  export type JournalItemUncheckedUpdateWithoutChartInput = {
    id?: IntFieldUpdateOperationsInput | number
    journalEntryId?: IntFieldUpdateOperationsInput | number
    debit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    credit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type JournalItemUncheckedUpdateManyWithoutChartInput = {
    id?: IntFieldUpdateOperationsInput | number
    journalEntryId?: IntFieldUpdateOperationsInput | number
    debit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    credit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type JournalItemCreateManyJournalEntryInput = {
    id?: number
    chartId: number
    debit?: Decimal | DecimalJsLike | number | string
    credit?: Decimal | DecimalJsLike | number | string
  }

  export type JournalItemUpdateWithoutJournalEntryInput = {
    debit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    credit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    chart?: AccountChartUpdateOneRequiredWithoutJournalItemsNestedInput
  }

  export type JournalItemUncheckedUpdateWithoutJournalEntryInput = {
    id?: IntFieldUpdateOperationsInput | number
    chartId?: IntFieldUpdateOperationsInput | number
    debit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    credit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type JournalItemUncheckedUpdateManyWithoutJournalEntryInput = {
    id?: IntFieldUpdateOperationsInput | number
    chartId?: IntFieldUpdateOperationsInput | number
    debit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    credit?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AccountCountOutputTypeDefaultArgs instead
     */
    export type AccountCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AccountCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FundCategoryCountOutputTypeDefaultArgs instead
     */
    export type FundCategoryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FundCategoryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AccountChartCountOutputTypeDefaultArgs instead
     */
    export type AccountChartCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AccountChartCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use JournalEntryCountOutputTypeDefaultArgs instead
     */
    export type JournalEntryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = JournalEntryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AccountDefaultArgs instead
     */
    export type AccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AccountDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FundCategoryDefaultArgs instead
     */
    export type FundCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FundCategoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AccountChartDefaultArgs instead
     */
    export type AccountChartArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AccountChartDefaultArgs<ExtArgs>
    /**
     * @deprecated Use JournalEntryDefaultArgs instead
     */
    export type JournalEntryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = JournalEntryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use JournalItemDefaultArgs instead
     */
    export type JournalItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = JournalItemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AccountTransferDefaultArgs instead
     */
    export type AccountTransferArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AccountTransferDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TransactionDefaultArgs instead
     */
    export type TransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TransactionDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}