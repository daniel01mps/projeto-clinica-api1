
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
 * Model consultas
 * 
 */
export type consultas = $Result.DefaultSelection<Prisma.$consultasPayload>
/**
 * Model especialidades
 * 
 */
export type especialidades = $Result.DefaultSelection<Prisma.$especialidadesPayload>
/**
 * Model exames
 * 
 */
export type exames = $Result.DefaultSelection<Prisma.$examesPayload>
/**
 * Model medicos
 * 
 */
export type medicos = $Result.DefaultSelection<Prisma.$medicosPayload>
/**
 * Model operadoras
 * 
 */
export type operadoras = $Result.DefaultSelection<Prisma.$operadorasPayload>
/**
 * Model pacientes
 * 
 */
export type pacientes = $Result.DefaultSelection<Prisma.$pacientesPayload>
/**
 * Model pagamentos
 * 
 */
export type pagamentos = $Result.DefaultSelection<Prisma.$pagamentosPayload>
/**
 * Model planos
 * 
 */
export type planos = $Result.DefaultSelection<Prisma.$planosPayload>
/**
 * Model status
 * 
 */
export type status = $Result.DefaultSelection<Prisma.$statusPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Consultas
 * const consultas = await prisma.consultas.findMany()
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
   * // Fetch zero or more Consultas
   * const consultas = await prisma.consultas.findMany()
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
   * `prisma.consultas`: Exposes CRUD operations for the **consultas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Consultas
    * const consultas = await prisma.consultas.findMany()
    * ```
    */
  get consultas(): Prisma.consultasDelegate<ExtArgs>;

  /**
   * `prisma.especialidades`: Exposes CRUD operations for the **especialidades** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Especialidades
    * const especialidades = await prisma.especialidades.findMany()
    * ```
    */
  get especialidades(): Prisma.especialidadesDelegate<ExtArgs>;

  /**
   * `prisma.exames`: Exposes CRUD operations for the **exames** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Exames
    * const exames = await prisma.exames.findMany()
    * ```
    */
  get exames(): Prisma.examesDelegate<ExtArgs>;

  /**
   * `prisma.medicos`: Exposes CRUD operations for the **medicos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Medicos
    * const medicos = await prisma.medicos.findMany()
    * ```
    */
  get medicos(): Prisma.medicosDelegate<ExtArgs>;

  /**
   * `prisma.operadoras`: Exposes CRUD operations for the **operadoras** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Operadoras
    * const operadoras = await prisma.operadoras.findMany()
    * ```
    */
  get operadoras(): Prisma.operadorasDelegate<ExtArgs>;

  /**
   * `prisma.pacientes`: Exposes CRUD operations for the **pacientes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pacientes
    * const pacientes = await prisma.pacientes.findMany()
    * ```
    */
  get pacientes(): Prisma.pacientesDelegate<ExtArgs>;

  /**
   * `prisma.pagamentos`: Exposes CRUD operations for the **pagamentos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pagamentos
    * const pagamentos = await prisma.pagamentos.findMany()
    * ```
    */
  get pagamentos(): Prisma.pagamentosDelegate<ExtArgs>;

  /**
   * `prisma.planos`: Exposes CRUD operations for the **planos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Planos
    * const planos = await prisma.planos.findMany()
    * ```
    */
  get planos(): Prisma.planosDelegate<ExtArgs>;

  /**
   * `prisma.status`: Exposes CRUD operations for the **status** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Statuses
    * const statuses = await prisma.status.findMany()
    * ```
    */
  get status(): Prisma.statusDelegate<ExtArgs>;
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
    consultas: 'consultas',
    especialidades: 'especialidades',
    exames: 'exames',
    medicos: 'medicos',
    operadoras: 'operadoras',
    pacientes: 'pacientes',
    pagamentos: 'pagamentos',
    planos: 'planos',
    status: 'status'
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
      modelProps: "consultas" | "especialidades" | "exames" | "medicos" | "operadoras" | "pacientes" | "pagamentos" | "planos" | "status"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      consultas: {
        payload: Prisma.$consultasPayload<ExtArgs>
        fields: Prisma.consultasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.consultasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$consultasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.consultasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$consultasPayload>
          }
          findFirst: {
            args: Prisma.consultasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$consultasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.consultasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$consultasPayload>
          }
          findMany: {
            args: Prisma.consultasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$consultasPayload>[]
          }
          create: {
            args: Prisma.consultasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$consultasPayload>
          }
          createMany: {
            args: Prisma.consultasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.consultasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$consultasPayload>
          }
          update: {
            args: Prisma.consultasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$consultasPayload>
          }
          deleteMany: {
            args: Prisma.consultasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.consultasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.consultasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$consultasPayload>
          }
          aggregate: {
            args: Prisma.ConsultasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConsultas>
          }
          groupBy: {
            args: Prisma.consultasGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConsultasGroupByOutputType>[]
          }
          count: {
            args: Prisma.consultasCountArgs<ExtArgs>
            result: $Utils.Optional<ConsultasCountAggregateOutputType> | number
          }
        }
      }
      especialidades: {
        payload: Prisma.$especialidadesPayload<ExtArgs>
        fields: Prisma.especialidadesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.especialidadesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$especialidadesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.especialidadesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$especialidadesPayload>
          }
          findFirst: {
            args: Prisma.especialidadesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$especialidadesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.especialidadesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$especialidadesPayload>
          }
          findMany: {
            args: Prisma.especialidadesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$especialidadesPayload>[]
          }
          create: {
            args: Prisma.especialidadesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$especialidadesPayload>
          }
          createMany: {
            args: Prisma.especialidadesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.especialidadesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$especialidadesPayload>
          }
          update: {
            args: Prisma.especialidadesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$especialidadesPayload>
          }
          deleteMany: {
            args: Prisma.especialidadesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.especialidadesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.especialidadesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$especialidadesPayload>
          }
          aggregate: {
            args: Prisma.EspecialidadesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEspecialidades>
          }
          groupBy: {
            args: Prisma.especialidadesGroupByArgs<ExtArgs>
            result: $Utils.Optional<EspecialidadesGroupByOutputType>[]
          }
          count: {
            args: Prisma.especialidadesCountArgs<ExtArgs>
            result: $Utils.Optional<EspecialidadesCountAggregateOutputType> | number
          }
        }
      }
      exames: {
        payload: Prisma.$examesPayload<ExtArgs>
        fields: Prisma.examesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.examesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$examesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.examesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$examesPayload>
          }
          findFirst: {
            args: Prisma.examesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$examesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.examesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$examesPayload>
          }
          findMany: {
            args: Prisma.examesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$examesPayload>[]
          }
          create: {
            args: Prisma.examesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$examesPayload>
          }
          createMany: {
            args: Prisma.examesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.examesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$examesPayload>
          }
          update: {
            args: Prisma.examesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$examesPayload>
          }
          deleteMany: {
            args: Prisma.examesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.examesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.examesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$examesPayload>
          }
          aggregate: {
            args: Prisma.ExamesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExames>
          }
          groupBy: {
            args: Prisma.examesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExamesGroupByOutputType>[]
          }
          count: {
            args: Prisma.examesCountArgs<ExtArgs>
            result: $Utils.Optional<ExamesCountAggregateOutputType> | number
          }
        }
      }
      medicos: {
        payload: Prisma.$medicosPayload<ExtArgs>
        fields: Prisma.medicosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.medicosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$medicosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.medicosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$medicosPayload>
          }
          findFirst: {
            args: Prisma.medicosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$medicosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.medicosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$medicosPayload>
          }
          findMany: {
            args: Prisma.medicosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$medicosPayload>[]
          }
          create: {
            args: Prisma.medicosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$medicosPayload>
          }
          createMany: {
            args: Prisma.medicosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.medicosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$medicosPayload>
          }
          update: {
            args: Prisma.medicosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$medicosPayload>
          }
          deleteMany: {
            args: Prisma.medicosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.medicosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.medicosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$medicosPayload>
          }
          aggregate: {
            args: Prisma.MedicosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedicos>
          }
          groupBy: {
            args: Prisma.medicosGroupByArgs<ExtArgs>
            result: $Utils.Optional<MedicosGroupByOutputType>[]
          }
          count: {
            args: Prisma.medicosCountArgs<ExtArgs>
            result: $Utils.Optional<MedicosCountAggregateOutputType> | number
          }
        }
      }
      operadoras: {
        payload: Prisma.$operadorasPayload<ExtArgs>
        fields: Prisma.operadorasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.operadorasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$operadorasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.operadorasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$operadorasPayload>
          }
          findFirst: {
            args: Prisma.operadorasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$operadorasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.operadorasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$operadorasPayload>
          }
          findMany: {
            args: Prisma.operadorasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$operadorasPayload>[]
          }
          create: {
            args: Prisma.operadorasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$operadorasPayload>
          }
          createMany: {
            args: Prisma.operadorasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.operadorasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$operadorasPayload>
          }
          update: {
            args: Prisma.operadorasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$operadorasPayload>
          }
          deleteMany: {
            args: Prisma.operadorasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.operadorasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.operadorasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$operadorasPayload>
          }
          aggregate: {
            args: Prisma.OperadorasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOperadoras>
          }
          groupBy: {
            args: Prisma.operadorasGroupByArgs<ExtArgs>
            result: $Utils.Optional<OperadorasGroupByOutputType>[]
          }
          count: {
            args: Prisma.operadorasCountArgs<ExtArgs>
            result: $Utils.Optional<OperadorasCountAggregateOutputType> | number
          }
        }
      }
      pacientes: {
        payload: Prisma.$pacientesPayload<ExtArgs>
        fields: Prisma.pacientesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pacientesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pacientesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pacientesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pacientesPayload>
          }
          findFirst: {
            args: Prisma.pacientesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pacientesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pacientesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pacientesPayload>
          }
          findMany: {
            args: Prisma.pacientesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pacientesPayload>[]
          }
          create: {
            args: Prisma.pacientesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pacientesPayload>
          }
          createMany: {
            args: Prisma.pacientesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.pacientesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pacientesPayload>
          }
          update: {
            args: Prisma.pacientesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pacientesPayload>
          }
          deleteMany: {
            args: Prisma.pacientesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.pacientesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.pacientesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pacientesPayload>
          }
          aggregate: {
            args: Prisma.PacientesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePacientes>
          }
          groupBy: {
            args: Prisma.pacientesGroupByArgs<ExtArgs>
            result: $Utils.Optional<PacientesGroupByOutputType>[]
          }
          count: {
            args: Prisma.pacientesCountArgs<ExtArgs>
            result: $Utils.Optional<PacientesCountAggregateOutputType> | number
          }
        }
      }
      pagamentos: {
        payload: Prisma.$pagamentosPayload<ExtArgs>
        fields: Prisma.pagamentosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pagamentosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagamentosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pagamentosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagamentosPayload>
          }
          findFirst: {
            args: Prisma.pagamentosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagamentosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pagamentosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagamentosPayload>
          }
          findMany: {
            args: Prisma.pagamentosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagamentosPayload>[]
          }
          create: {
            args: Prisma.pagamentosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagamentosPayload>
          }
          createMany: {
            args: Prisma.pagamentosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.pagamentosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagamentosPayload>
          }
          update: {
            args: Prisma.pagamentosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagamentosPayload>
          }
          deleteMany: {
            args: Prisma.pagamentosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.pagamentosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.pagamentosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pagamentosPayload>
          }
          aggregate: {
            args: Prisma.PagamentosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePagamentos>
          }
          groupBy: {
            args: Prisma.pagamentosGroupByArgs<ExtArgs>
            result: $Utils.Optional<PagamentosGroupByOutputType>[]
          }
          count: {
            args: Prisma.pagamentosCountArgs<ExtArgs>
            result: $Utils.Optional<PagamentosCountAggregateOutputType> | number
          }
        }
      }
      planos: {
        payload: Prisma.$planosPayload<ExtArgs>
        fields: Prisma.planosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.planosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$planosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.planosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$planosPayload>
          }
          findFirst: {
            args: Prisma.planosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$planosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.planosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$planosPayload>
          }
          findMany: {
            args: Prisma.planosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$planosPayload>[]
          }
          create: {
            args: Prisma.planosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$planosPayload>
          }
          createMany: {
            args: Prisma.planosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.planosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$planosPayload>
          }
          update: {
            args: Prisma.planosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$planosPayload>
          }
          deleteMany: {
            args: Prisma.planosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.planosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.planosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$planosPayload>
          }
          aggregate: {
            args: Prisma.PlanosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlanos>
          }
          groupBy: {
            args: Prisma.planosGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlanosGroupByOutputType>[]
          }
          count: {
            args: Prisma.planosCountArgs<ExtArgs>
            result: $Utils.Optional<PlanosCountAggregateOutputType> | number
          }
        }
      }
      status: {
        payload: Prisma.$statusPayload<ExtArgs>
        fields: Prisma.statusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.statusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$statusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.statusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$statusPayload>
          }
          findFirst: {
            args: Prisma.statusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$statusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.statusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$statusPayload>
          }
          findMany: {
            args: Prisma.statusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$statusPayload>[]
          }
          create: {
            args: Prisma.statusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$statusPayload>
          }
          createMany: {
            args: Prisma.statusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.statusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$statusPayload>
          }
          update: {
            args: Prisma.statusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$statusPayload>
          }
          deleteMany: {
            args: Prisma.statusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.statusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.statusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$statusPayload>
          }
          aggregate: {
            args: Prisma.StatusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStatus>
          }
          groupBy: {
            args: Prisma.statusGroupByArgs<ExtArgs>
            result: $Utils.Optional<StatusGroupByOutputType>[]
          }
          count: {
            args: Prisma.statusCountArgs<ExtArgs>
            result: $Utils.Optional<StatusCountAggregateOutputType> | number
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
   * Count Type ConsultasCountOutputType
   */

  export type ConsultasCountOutputType = {
    pagamentos: number
  }

  export type ConsultasCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pagamentos?: boolean | ConsultasCountOutputTypeCountPagamentosArgs
  }

  // Custom InputTypes
  /**
   * ConsultasCountOutputType without action
   */
  export type ConsultasCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultasCountOutputType
     */
    select?: ConsultasCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ConsultasCountOutputType without action
   */
  export type ConsultasCountOutputTypeCountPagamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pagamentosWhereInput
  }


  /**
   * Count Type EspecialidadesCountOutputType
   */

  export type EspecialidadesCountOutputType = {
    medicos: number
  }

  export type EspecialidadesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medicos?: boolean | EspecialidadesCountOutputTypeCountMedicosArgs
  }

  // Custom InputTypes
  /**
   * EspecialidadesCountOutputType without action
   */
  export type EspecialidadesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EspecialidadesCountOutputType
     */
    select?: EspecialidadesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EspecialidadesCountOutputType without action
   */
  export type EspecialidadesCountOutputTypeCountMedicosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: medicosWhereInput
  }


  /**
   * Count Type MedicosCountOutputType
   */

  export type MedicosCountOutputType = {
    consultas: number
  }

  export type MedicosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    consultas?: boolean | MedicosCountOutputTypeCountConsultasArgs
  }

  // Custom InputTypes
  /**
   * MedicosCountOutputType without action
   */
  export type MedicosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicosCountOutputType
     */
    select?: MedicosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MedicosCountOutputType without action
   */
  export type MedicosCountOutputTypeCountConsultasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: consultasWhereInput
  }


  /**
   * Count Type OperadorasCountOutputType
   */

  export type OperadorasCountOutputType = {
    planos: number
  }

  export type OperadorasCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    planos?: boolean | OperadorasCountOutputTypeCountPlanosArgs
  }

  // Custom InputTypes
  /**
   * OperadorasCountOutputType without action
   */
  export type OperadorasCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OperadorasCountOutputType
     */
    select?: OperadorasCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OperadorasCountOutputType without action
   */
  export type OperadorasCountOutputTypeCountPlanosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: planosWhereInput
  }


  /**
   * Count Type PacientesCountOutputType
   */

  export type PacientesCountOutputType = {
    consultas: number
    exames: number
  }

  export type PacientesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    consultas?: boolean | PacientesCountOutputTypeCountConsultasArgs
    exames?: boolean | PacientesCountOutputTypeCountExamesArgs
  }

  // Custom InputTypes
  /**
   * PacientesCountOutputType without action
   */
  export type PacientesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacientesCountOutputType
     */
    select?: PacientesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PacientesCountOutputType without action
   */
  export type PacientesCountOutputTypeCountConsultasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: consultasWhereInput
  }

  /**
   * PacientesCountOutputType without action
   */
  export type PacientesCountOutputTypeCountExamesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: examesWhereInput
  }


  /**
   * Count Type PlanosCountOutputType
   */

  export type PlanosCountOutputType = {
    consultas: number
  }

  export type PlanosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    consultas?: boolean | PlanosCountOutputTypeCountConsultasArgs
  }

  // Custom InputTypes
  /**
   * PlanosCountOutputType without action
   */
  export type PlanosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanosCountOutputType
     */
    select?: PlanosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlanosCountOutputType without action
   */
  export type PlanosCountOutputTypeCountConsultasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: consultasWhereInput
  }


  /**
   * Count Type StatusCountOutputType
   */

  export type StatusCountOutputType = {
    consultas: number
  }

  export type StatusCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    consultas?: boolean | StatusCountOutputTypeCountConsultasArgs
  }

  // Custom InputTypes
  /**
   * StatusCountOutputType without action
   */
  export type StatusCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusCountOutputType
     */
    select?: StatusCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StatusCountOutputType without action
   */
  export type StatusCountOutputTypeCountConsultasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: consultasWhereInput
  }


  /**
   * Models
   */

  /**
   * Model consultas
   */

  export type AggregateConsultas = {
    _count: ConsultasCountAggregateOutputType | null
    _avg: ConsultasAvgAggregateOutputType | null
    _sum: ConsultasSumAggregateOutputType | null
    _min: ConsultasMinAggregateOutputType | null
    _max: ConsultasMaxAggregateOutputType | null
  }

  export type ConsultasAvgAggregateOutputType = {
    consulta_id: number | null
    status_id: number | null
    medico_id: number | null
    paciente_id: number | null
    plano_id: number | null
  }

  export type ConsultasSumAggregateOutputType = {
    consulta_id: number | null
    status_id: number | null
    medico_id: number | null
    paciente_id: number | null
    plano_id: number | null
  }

  export type ConsultasMinAggregateOutputType = {
    consulta_id: number | null
    consulta_data: string | null
    status_id: number | null
    medico_id: number | null
    paciente_id: number | null
    plano_id: number | null
  }

  export type ConsultasMaxAggregateOutputType = {
    consulta_id: number | null
    consulta_data: string | null
    status_id: number | null
    medico_id: number | null
    paciente_id: number | null
    plano_id: number | null
  }

  export type ConsultasCountAggregateOutputType = {
    consulta_id: number
    consulta_data: number
    status_id: number
    medico_id: number
    paciente_id: number
    plano_id: number
    _all: number
  }


  export type ConsultasAvgAggregateInputType = {
    consulta_id?: true
    status_id?: true
    medico_id?: true
    paciente_id?: true
    plano_id?: true
  }

  export type ConsultasSumAggregateInputType = {
    consulta_id?: true
    status_id?: true
    medico_id?: true
    paciente_id?: true
    plano_id?: true
  }

  export type ConsultasMinAggregateInputType = {
    consulta_id?: true
    consulta_data?: true
    status_id?: true
    medico_id?: true
    paciente_id?: true
    plano_id?: true
  }

  export type ConsultasMaxAggregateInputType = {
    consulta_id?: true
    consulta_data?: true
    status_id?: true
    medico_id?: true
    paciente_id?: true
    plano_id?: true
  }

  export type ConsultasCountAggregateInputType = {
    consulta_id?: true
    consulta_data?: true
    status_id?: true
    medico_id?: true
    paciente_id?: true
    plano_id?: true
    _all?: true
  }

  export type ConsultasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which consultas to aggregate.
     */
    where?: consultasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of consultas to fetch.
     */
    orderBy?: consultasOrderByWithRelationInput | consultasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: consultasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` consultas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` consultas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned consultas
    **/
    _count?: true | ConsultasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConsultasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConsultasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConsultasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConsultasMaxAggregateInputType
  }

  export type GetConsultasAggregateType<T extends ConsultasAggregateArgs> = {
        [P in keyof T & keyof AggregateConsultas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConsultas[P]>
      : GetScalarType<T[P], AggregateConsultas[P]>
  }




  export type consultasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: consultasWhereInput
    orderBy?: consultasOrderByWithAggregationInput | consultasOrderByWithAggregationInput[]
    by: ConsultasScalarFieldEnum[] | ConsultasScalarFieldEnum
    having?: consultasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConsultasCountAggregateInputType | true
    _avg?: ConsultasAvgAggregateInputType
    _sum?: ConsultasSumAggregateInputType
    _min?: ConsultasMinAggregateInputType
    _max?: ConsultasMaxAggregateInputType
  }

  export type ConsultasGroupByOutputType = {
    consulta_id: number
    consulta_data: string
    status_id: number
    medico_id: number
    paciente_id: number
    plano_id: number
    _count: ConsultasCountAggregateOutputType | null
    _avg: ConsultasAvgAggregateOutputType | null
    _sum: ConsultasSumAggregateOutputType | null
    _min: ConsultasMinAggregateOutputType | null
    _max: ConsultasMaxAggregateOutputType | null
  }

  type GetConsultasGroupByPayload<T extends consultasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConsultasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConsultasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConsultasGroupByOutputType[P]>
            : GetScalarType<T[P], ConsultasGroupByOutputType[P]>
        }
      >
    >


  export type consultasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    consulta_id?: boolean
    consulta_data?: boolean
    status_id?: boolean
    medico_id?: boolean
    paciente_id?: boolean
    plano_id?: boolean
    status?: boolean | statusDefaultArgs<ExtArgs>
    medicos?: boolean | medicosDefaultArgs<ExtArgs>
    pacientes?: boolean | pacientesDefaultArgs<ExtArgs>
    planos?: boolean | planosDefaultArgs<ExtArgs>
    pagamentos?: boolean | consultas$pagamentosArgs<ExtArgs>
    _count?: boolean | ConsultasCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["consultas"]>


  export type consultasSelectScalar = {
    consulta_id?: boolean
    consulta_data?: boolean
    status_id?: boolean
    medico_id?: boolean
    paciente_id?: boolean
    plano_id?: boolean
  }

  export type consultasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    status?: boolean | statusDefaultArgs<ExtArgs>
    medicos?: boolean | medicosDefaultArgs<ExtArgs>
    pacientes?: boolean | pacientesDefaultArgs<ExtArgs>
    planos?: boolean | planosDefaultArgs<ExtArgs>
    pagamentos?: boolean | consultas$pagamentosArgs<ExtArgs>
    _count?: boolean | ConsultasCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $consultasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "consultas"
    objects: {
      status: Prisma.$statusPayload<ExtArgs>
      medicos: Prisma.$medicosPayload<ExtArgs>
      pacientes: Prisma.$pacientesPayload<ExtArgs>
      planos: Prisma.$planosPayload<ExtArgs>
      pagamentos: Prisma.$pagamentosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      consulta_id: number
      consulta_data: string
      status_id: number
      medico_id: number
      paciente_id: number
      plano_id: number
    }, ExtArgs["result"]["consultas"]>
    composites: {}
  }

  type consultasGetPayload<S extends boolean | null | undefined | consultasDefaultArgs> = $Result.GetResult<Prisma.$consultasPayload, S>

  type consultasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<consultasFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ConsultasCountAggregateInputType | true
    }

  export interface consultasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['consultas'], meta: { name: 'consultas' } }
    /**
     * Find zero or one Consultas that matches the filter.
     * @param {consultasFindUniqueArgs} args - Arguments to find a Consultas
     * @example
     * // Get one Consultas
     * const consultas = await prisma.consultas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends consultasFindUniqueArgs>(args: SelectSubset<T, consultasFindUniqueArgs<ExtArgs>>): Prisma__consultasClient<$Result.GetResult<Prisma.$consultasPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Consultas that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {consultasFindUniqueOrThrowArgs} args - Arguments to find a Consultas
     * @example
     * // Get one Consultas
     * const consultas = await prisma.consultas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends consultasFindUniqueOrThrowArgs>(args: SelectSubset<T, consultasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__consultasClient<$Result.GetResult<Prisma.$consultasPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Consultas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {consultasFindFirstArgs} args - Arguments to find a Consultas
     * @example
     * // Get one Consultas
     * const consultas = await prisma.consultas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends consultasFindFirstArgs>(args?: SelectSubset<T, consultasFindFirstArgs<ExtArgs>>): Prisma__consultasClient<$Result.GetResult<Prisma.$consultasPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Consultas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {consultasFindFirstOrThrowArgs} args - Arguments to find a Consultas
     * @example
     * // Get one Consultas
     * const consultas = await prisma.consultas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends consultasFindFirstOrThrowArgs>(args?: SelectSubset<T, consultasFindFirstOrThrowArgs<ExtArgs>>): Prisma__consultasClient<$Result.GetResult<Prisma.$consultasPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Consultas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {consultasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Consultas
     * const consultas = await prisma.consultas.findMany()
     * 
     * // Get first 10 Consultas
     * const consultas = await prisma.consultas.findMany({ take: 10 })
     * 
     * // Only select the `consulta_id`
     * const consultasWithConsulta_idOnly = await prisma.consultas.findMany({ select: { consulta_id: true } })
     * 
     */
    findMany<T extends consultasFindManyArgs>(args?: SelectSubset<T, consultasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$consultasPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Consultas.
     * @param {consultasCreateArgs} args - Arguments to create a Consultas.
     * @example
     * // Create one Consultas
     * const Consultas = await prisma.consultas.create({
     *   data: {
     *     // ... data to create a Consultas
     *   }
     * })
     * 
     */
    create<T extends consultasCreateArgs>(args: SelectSubset<T, consultasCreateArgs<ExtArgs>>): Prisma__consultasClient<$Result.GetResult<Prisma.$consultasPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Consultas.
     * @param {consultasCreateManyArgs} args - Arguments to create many Consultas.
     * @example
     * // Create many Consultas
     * const consultas = await prisma.consultas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends consultasCreateManyArgs>(args?: SelectSubset<T, consultasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Consultas.
     * @param {consultasDeleteArgs} args - Arguments to delete one Consultas.
     * @example
     * // Delete one Consultas
     * const Consultas = await prisma.consultas.delete({
     *   where: {
     *     // ... filter to delete one Consultas
     *   }
     * })
     * 
     */
    delete<T extends consultasDeleteArgs>(args: SelectSubset<T, consultasDeleteArgs<ExtArgs>>): Prisma__consultasClient<$Result.GetResult<Prisma.$consultasPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Consultas.
     * @param {consultasUpdateArgs} args - Arguments to update one Consultas.
     * @example
     * // Update one Consultas
     * const consultas = await prisma.consultas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends consultasUpdateArgs>(args: SelectSubset<T, consultasUpdateArgs<ExtArgs>>): Prisma__consultasClient<$Result.GetResult<Prisma.$consultasPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Consultas.
     * @param {consultasDeleteManyArgs} args - Arguments to filter Consultas to delete.
     * @example
     * // Delete a few Consultas
     * const { count } = await prisma.consultas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends consultasDeleteManyArgs>(args?: SelectSubset<T, consultasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Consultas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {consultasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Consultas
     * const consultas = await prisma.consultas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends consultasUpdateManyArgs>(args: SelectSubset<T, consultasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Consultas.
     * @param {consultasUpsertArgs} args - Arguments to update or create a Consultas.
     * @example
     * // Update or create a Consultas
     * const consultas = await prisma.consultas.upsert({
     *   create: {
     *     // ... data to create a Consultas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Consultas we want to update
     *   }
     * })
     */
    upsert<T extends consultasUpsertArgs>(args: SelectSubset<T, consultasUpsertArgs<ExtArgs>>): Prisma__consultasClient<$Result.GetResult<Prisma.$consultasPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Consultas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {consultasCountArgs} args - Arguments to filter Consultas to count.
     * @example
     * // Count the number of Consultas
     * const count = await prisma.consultas.count({
     *   where: {
     *     // ... the filter for the Consultas we want to count
     *   }
     * })
    **/
    count<T extends consultasCountArgs>(
      args?: Subset<T, consultasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConsultasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Consultas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConsultasAggregateArgs>(args: Subset<T, ConsultasAggregateArgs>): Prisma.PrismaPromise<GetConsultasAggregateType<T>>

    /**
     * Group by Consultas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {consultasGroupByArgs} args - Group by arguments.
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
      T extends consultasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: consultasGroupByArgs['orderBy'] }
        : { orderBy?: consultasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, consultasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConsultasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the consultas model
   */
  readonly fields: consultasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for consultas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__consultasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    status<T extends statusDefaultArgs<ExtArgs> = {}>(args?: Subset<T, statusDefaultArgs<ExtArgs>>): Prisma__statusClient<$Result.GetResult<Prisma.$statusPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    medicos<T extends medicosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, medicosDefaultArgs<ExtArgs>>): Prisma__medicosClient<$Result.GetResult<Prisma.$medicosPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    pacientes<T extends pacientesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, pacientesDefaultArgs<ExtArgs>>): Prisma__pacientesClient<$Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    planos<T extends planosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, planosDefaultArgs<ExtArgs>>): Prisma__planosClient<$Result.GetResult<Prisma.$planosPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    pagamentos<T extends consultas$pagamentosArgs<ExtArgs> = {}>(args?: Subset<T, consultas$pagamentosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pagamentosPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the consultas model
   */ 
  interface consultasFieldRefs {
    readonly consulta_id: FieldRef<"consultas", 'Int'>
    readonly consulta_data: FieldRef<"consultas", 'String'>
    readonly status_id: FieldRef<"consultas", 'Int'>
    readonly medico_id: FieldRef<"consultas", 'Int'>
    readonly paciente_id: FieldRef<"consultas", 'Int'>
    readonly plano_id: FieldRef<"consultas", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * consultas findUnique
   */
  export type consultasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the consultas
     */
    select?: consultasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: consultasInclude<ExtArgs> | null
    /**
     * Filter, which consultas to fetch.
     */
    where: consultasWhereUniqueInput
  }

  /**
   * consultas findUniqueOrThrow
   */
  export type consultasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the consultas
     */
    select?: consultasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: consultasInclude<ExtArgs> | null
    /**
     * Filter, which consultas to fetch.
     */
    where: consultasWhereUniqueInput
  }

  /**
   * consultas findFirst
   */
  export type consultasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the consultas
     */
    select?: consultasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: consultasInclude<ExtArgs> | null
    /**
     * Filter, which consultas to fetch.
     */
    where?: consultasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of consultas to fetch.
     */
    orderBy?: consultasOrderByWithRelationInput | consultasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for consultas.
     */
    cursor?: consultasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` consultas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` consultas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of consultas.
     */
    distinct?: ConsultasScalarFieldEnum | ConsultasScalarFieldEnum[]
  }

  /**
   * consultas findFirstOrThrow
   */
  export type consultasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the consultas
     */
    select?: consultasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: consultasInclude<ExtArgs> | null
    /**
     * Filter, which consultas to fetch.
     */
    where?: consultasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of consultas to fetch.
     */
    orderBy?: consultasOrderByWithRelationInput | consultasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for consultas.
     */
    cursor?: consultasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` consultas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` consultas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of consultas.
     */
    distinct?: ConsultasScalarFieldEnum | ConsultasScalarFieldEnum[]
  }

  /**
   * consultas findMany
   */
  export type consultasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the consultas
     */
    select?: consultasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: consultasInclude<ExtArgs> | null
    /**
     * Filter, which consultas to fetch.
     */
    where?: consultasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of consultas to fetch.
     */
    orderBy?: consultasOrderByWithRelationInput | consultasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing consultas.
     */
    cursor?: consultasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` consultas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` consultas.
     */
    skip?: number
    distinct?: ConsultasScalarFieldEnum | ConsultasScalarFieldEnum[]
  }

  /**
   * consultas create
   */
  export type consultasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the consultas
     */
    select?: consultasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: consultasInclude<ExtArgs> | null
    /**
     * The data needed to create a consultas.
     */
    data: XOR<consultasCreateInput, consultasUncheckedCreateInput>
  }

  /**
   * consultas createMany
   */
  export type consultasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many consultas.
     */
    data: consultasCreateManyInput | consultasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * consultas update
   */
  export type consultasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the consultas
     */
    select?: consultasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: consultasInclude<ExtArgs> | null
    /**
     * The data needed to update a consultas.
     */
    data: XOR<consultasUpdateInput, consultasUncheckedUpdateInput>
    /**
     * Choose, which consultas to update.
     */
    where: consultasWhereUniqueInput
  }

  /**
   * consultas updateMany
   */
  export type consultasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update consultas.
     */
    data: XOR<consultasUpdateManyMutationInput, consultasUncheckedUpdateManyInput>
    /**
     * Filter which consultas to update
     */
    where?: consultasWhereInput
  }

  /**
   * consultas upsert
   */
  export type consultasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the consultas
     */
    select?: consultasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: consultasInclude<ExtArgs> | null
    /**
     * The filter to search for the consultas to update in case it exists.
     */
    where: consultasWhereUniqueInput
    /**
     * In case the consultas found by the `where` argument doesn't exist, create a new consultas with this data.
     */
    create: XOR<consultasCreateInput, consultasUncheckedCreateInput>
    /**
     * In case the consultas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<consultasUpdateInput, consultasUncheckedUpdateInput>
  }

  /**
   * consultas delete
   */
  export type consultasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the consultas
     */
    select?: consultasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: consultasInclude<ExtArgs> | null
    /**
     * Filter which consultas to delete.
     */
    where: consultasWhereUniqueInput
  }

  /**
   * consultas deleteMany
   */
  export type consultasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which consultas to delete
     */
    where?: consultasWhereInput
  }

  /**
   * consultas.pagamentos
   */
  export type consultas$pagamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagamentos
     */
    select?: pagamentosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagamentosInclude<ExtArgs> | null
    where?: pagamentosWhereInput
    orderBy?: pagamentosOrderByWithRelationInput | pagamentosOrderByWithRelationInput[]
    cursor?: pagamentosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PagamentosScalarFieldEnum | PagamentosScalarFieldEnum[]
  }

  /**
   * consultas without action
   */
  export type consultasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the consultas
     */
    select?: consultasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: consultasInclude<ExtArgs> | null
  }


  /**
   * Model especialidades
   */

  export type AggregateEspecialidades = {
    _count: EspecialidadesCountAggregateOutputType | null
    _avg: EspecialidadesAvgAggregateOutputType | null
    _sum: EspecialidadesSumAggregateOutputType | null
    _min: EspecialidadesMinAggregateOutputType | null
    _max: EspecialidadesMaxAggregateOutputType | null
  }

  export type EspecialidadesAvgAggregateOutputType = {
    especialidade_id: number | null
  }

  export type EspecialidadesSumAggregateOutputType = {
    especialidade_id: number | null
  }

  export type EspecialidadesMinAggregateOutputType = {
    especialidade_id: number | null
    especialidade_nome: string | null
  }

  export type EspecialidadesMaxAggregateOutputType = {
    especialidade_id: number | null
    especialidade_nome: string | null
  }

  export type EspecialidadesCountAggregateOutputType = {
    especialidade_id: number
    especialidade_nome: number
    _all: number
  }


  export type EspecialidadesAvgAggregateInputType = {
    especialidade_id?: true
  }

  export type EspecialidadesSumAggregateInputType = {
    especialidade_id?: true
  }

  export type EspecialidadesMinAggregateInputType = {
    especialidade_id?: true
    especialidade_nome?: true
  }

  export type EspecialidadesMaxAggregateInputType = {
    especialidade_id?: true
    especialidade_nome?: true
  }

  export type EspecialidadesCountAggregateInputType = {
    especialidade_id?: true
    especialidade_nome?: true
    _all?: true
  }

  export type EspecialidadesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which especialidades to aggregate.
     */
    where?: especialidadesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of especialidades to fetch.
     */
    orderBy?: especialidadesOrderByWithRelationInput | especialidadesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: especialidadesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` especialidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` especialidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned especialidades
    **/
    _count?: true | EspecialidadesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EspecialidadesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EspecialidadesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EspecialidadesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EspecialidadesMaxAggregateInputType
  }

  export type GetEspecialidadesAggregateType<T extends EspecialidadesAggregateArgs> = {
        [P in keyof T & keyof AggregateEspecialidades]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEspecialidades[P]>
      : GetScalarType<T[P], AggregateEspecialidades[P]>
  }




  export type especialidadesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: especialidadesWhereInput
    orderBy?: especialidadesOrderByWithAggregationInput | especialidadesOrderByWithAggregationInput[]
    by: EspecialidadesScalarFieldEnum[] | EspecialidadesScalarFieldEnum
    having?: especialidadesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EspecialidadesCountAggregateInputType | true
    _avg?: EspecialidadesAvgAggregateInputType
    _sum?: EspecialidadesSumAggregateInputType
    _min?: EspecialidadesMinAggregateInputType
    _max?: EspecialidadesMaxAggregateInputType
  }

  export type EspecialidadesGroupByOutputType = {
    especialidade_id: number
    especialidade_nome: string
    _count: EspecialidadesCountAggregateOutputType | null
    _avg: EspecialidadesAvgAggregateOutputType | null
    _sum: EspecialidadesSumAggregateOutputType | null
    _min: EspecialidadesMinAggregateOutputType | null
    _max: EspecialidadesMaxAggregateOutputType | null
  }

  type GetEspecialidadesGroupByPayload<T extends especialidadesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EspecialidadesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EspecialidadesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EspecialidadesGroupByOutputType[P]>
            : GetScalarType<T[P], EspecialidadesGroupByOutputType[P]>
        }
      >
    >


  export type especialidadesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    especialidade_id?: boolean
    especialidade_nome?: boolean
    medicos?: boolean | especialidades$medicosArgs<ExtArgs>
    _count?: boolean | EspecialidadesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["especialidades"]>


  export type especialidadesSelectScalar = {
    especialidade_id?: boolean
    especialidade_nome?: boolean
  }

  export type especialidadesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medicos?: boolean | especialidades$medicosArgs<ExtArgs>
    _count?: boolean | EspecialidadesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $especialidadesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "especialidades"
    objects: {
      medicos: Prisma.$medicosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      especialidade_id: number
      especialidade_nome: string
    }, ExtArgs["result"]["especialidades"]>
    composites: {}
  }

  type especialidadesGetPayload<S extends boolean | null | undefined | especialidadesDefaultArgs> = $Result.GetResult<Prisma.$especialidadesPayload, S>

  type especialidadesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<especialidadesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EspecialidadesCountAggregateInputType | true
    }

  export interface especialidadesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['especialidades'], meta: { name: 'especialidades' } }
    /**
     * Find zero or one Especialidades that matches the filter.
     * @param {especialidadesFindUniqueArgs} args - Arguments to find a Especialidades
     * @example
     * // Get one Especialidades
     * const especialidades = await prisma.especialidades.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends especialidadesFindUniqueArgs>(args: SelectSubset<T, especialidadesFindUniqueArgs<ExtArgs>>): Prisma__especialidadesClient<$Result.GetResult<Prisma.$especialidadesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Especialidades that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {especialidadesFindUniqueOrThrowArgs} args - Arguments to find a Especialidades
     * @example
     * // Get one Especialidades
     * const especialidades = await prisma.especialidades.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends especialidadesFindUniqueOrThrowArgs>(args: SelectSubset<T, especialidadesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__especialidadesClient<$Result.GetResult<Prisma.$especialidadesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Especialidades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {especialidadesFindFirstArgs} args - Arguments to find a Especialidades
     * @example
     * // Get one Especialidades
     * const especialidades = await prisma.especialidades.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends especialidadesFindFirstArgs>(args?: SelectSubset<T, especialidadesFindFirstArgs<ExtArgs>>): Prisma__especialidadesClient<$Result.GetResult<Prisma.$especialidadesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Especialidades that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {especialidadesFindFirstOrThrowArgs} args - Arguments to find a Especialidades
     * @example
     * // Get one Especialidades
     * const especialidades = await prisma.especialidades.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends especialidadesFindFirstOrThrowArgs>(args?: SelectSubset<T, especialidadesFindFirstOrThrowArgs<ExtArgs>>): Prisma__especialidadesClient<$Result.GetResult<Prisma.$especialidadesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Especialidades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {especialidadesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Especialidades
     * const especialidades = await prisma.especialidades.findMany()
     * 
     * // Get first 10 Especialidades
     * const especialidades = await prisma.especialidades.findMany({ take: 10 })
     * 
     * // Only select the `especialidade_id`
     * const especialidadesWithEspecialidade_idOnly = await prisma.especialidades.findMany({ select: { especialidade_id: true } })
     * 
     */
    findMany<T extends especialidadesFindManyArgs>(args?: SelectSubset<T, especialidadesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$especialidadesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Especialidades.
     * @param {especialidadesCreateArgs} args - Arguments to create a Especialidades.
     * @example
     * // Create one Especialidades
     * const Especialidades = await prisma.especialidades.create({
     *   data: {
     *     // ... data to create a Especialidades
     *   }
     * })
     * 
     */
    create<T extends especialidadesCreateArgs>(args: SelectSubset<T, especialidadesCreateArgs<ExtArgs>>): Prisma__especialidadesClient<$Result.GetResult<Prisma.$especialidadesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Especialidades.
     * @param {especialidadesCreateManyArgs} args - Arguments to create many Especialidades.
     * @example
     * // Create many Especialidades
     * const especialidades = await prisma.especialidades.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends especialidadesCreateManyArgs>(args?: SelectSubset<T, especialidadesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Especialidades.
     * @param {especialidadesDeleteArgs} args - Arguments to delete one Especialidades.
     * @example
     * // Delete one Especialidades
     * const Especialidades = await prisma.especialidades.delete({
     *   where: {
     *     // ... filter to delete one Especialidades
     *   }
     * })
     * 
     */
    delete<T extends especialidadesDeleteArgs>(args: SelectSubset<T, especialidadesDeleteArgs<ExtArgs>>): Prisma__especialidadesClient<$Result.GetResult<Prisma.$especialidadesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Especialidades.
     * @param {especialidadesUpdateArgs} args - Arguments to update one Especialidades.
     * @example
     * // Update one Especialidades
     * const especialidades = await prisma.especialidades.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends especialidadesUpdateArgs>(args: SelectSubset<T, especialidadesUpdateArgs<ExtArgs>>): Prisma__especialidadesClient<$Result.GetResult<Prisma.$especialidadesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Especialidades.
     * @param {especialidadesDeleteManyArgs} args - Arguments to filter Especialidades to delete.
     * @example
     * // Delete a few Especialidades
     * const { count } = await prisma.especialidades.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends especialidadesDeleteManyArgs>(args?: SelectSubset<T, especialidadesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Especialidades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {especialidadesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Especialidades
     * const especialidades = await prisma.especialidades.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends especialidadesUpdateManyArgs>(args: SelectSubset<T, especialidadesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Especialidades.
     * @param {especialidadesUpsertArgs} args - Arguments to update or create a Especialidades.
     * @example
     * // Update or create a Especialidades
     * const especialidades = await prisma.especialidades.upsert({
     *   create: {
     *     // ... data to create a Especialidades
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Especialidades we want to update
     *   }
     * })
     */
    upsert<T extends especialidadesUpsertArgs>(args: SelectSubset<T, especialidadesUpsertArgs<ExtArgs>>): Prisma__especialidadesClient<$Result.GetResult<Prisma.$especialidadesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Especialidades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {especialidadesCountArgs} args - Arguments to filter Especialidades to count.
     * @example
     * // Count the number of Especialidades
     * const count = await prisma.especialidades.count({
     *   where: {
     *     // ... the filter for the Especialidades we want to count
     *   }
     * })
    **/
    count<T extends especialidadesCountArgs>(
      args?: Subset<T, especialidadesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EspecialidadesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Especialidades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EspecialidadesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EspecialidadesAggregateArgs>(args: Subset<T, EspecialidadesAggregateArgs>): Prisma.PrismaPromise<GetEspecialidadesAggregateType<T>>

    /**
     * Group by Especialidades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {especialidadesGroupByArgs} args - Group by arguments.
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
      T extends especialidadesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: especialidadesGroupByArgs['orderBy'] }
        : { orderBy?: especialidadesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, especialidadesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEspecialidadesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the especialidades model
   */
  readonly fields: especialidadesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for especialidades.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__especialidadesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    medicos<T extends especialidades$medicosArgs<ExtArgs> = {}>(args?: Subset<T, especialidades$medicosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$medicosPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the especialidades model
   */ 
  interface especialidadesFieldRefs {
    readonly especialidade_id: FieldRef<"especialidades", 'Int'>
    readonly especialidade_nome: FieldRef<"especialidades", 'String'>
  }
    

  // Custom InputTypes
  /**
   * especialidades findUnique
   */
  export type especialidadesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the especialidades
     */
    select?: especialidadesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: especialidadesInclude<ExtArgs> | null
    /**
     * Filter, which especialidades to fetch.
     */
    where: especialidadesWhereUniqueInput
  }

  /**
   * especialidades findUniqueOrThrow
   */
  export type especialidadesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the especialidades
     */
    select?: especialidadesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: especialidadesInclude<ExtArgs> | null
    /**
     * Filter, which especialidades to fetch.
     */
    where: especialidadesWhereUniqueInput
  }

  /**
   * especialidades findFirst
   */
  export type especialidadesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the especialidades
     */
    select?: especialidadesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: especialidadesInclude<ExtArgs> | null
    /**
     * Filter, which especialidades to fetch.
     */
    where?: especialidadesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of especialidades to fetch.
     */
    orderBy?: especialidadesOrderByWithRelationInput | especialidadesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for especialidades.
     */
    cursor?: especialidadesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` especialidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` especialidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of especialidades.
     */
    distinct?: EspecialidadesScalarFieldEnum | EspecialidadesScalarFieldEnum[]
  }

  /**
   * especialidades findFirstOrThrow
   */
  export type especialidadesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the especialidades
     */
    select?: especialidadesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: especialidadesInclude<ExtArgs> | null
    /**
     * Filter, which especialidades to fetch.
     */
    where?: especialidadesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of especialidades to fetch.
     */
    orderBy?: especialidadesOrderByWithRelationInput | especialidadesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for especialidades.
     */
    cursor?: especialidadesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` especialidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` especialidades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of especialidades.
     */
    distinct?: EspecialidadesScalarFieldEnum | EspecialidadesScalarFieldEnum[]
  }

  /**
   * especialidades findMany
   */
  export type especialidadesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the especialidades
     */
    select?: especialidadesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: especialidadesInclude<ExtArgs> | null
    /**
     * Filter, which especialidades to fetch.
     */
    where?: especialidadesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of especialidades to fetch.
     */
    orderBy?: especialidadesOrderByWithRelationInput | especialidadesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing especialidades.
     */
    cursor?: especialidadesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` especialidades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` especialidades.
     */
    skip?: number
    distinct?: EspecialidadesScalarFieldEnum | EspecialidadesScalarFieldEnum[]
  }

  /**
   * especialidades create
   */
  export type especialidadesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the especialidades
     */
    select?: especialidadesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: especialidadesInclude<ExtArgs> | null
    /**
     * The data needed to create a especialidades.
     */
    data: XOR<especialidadesCreateInput, especialidadesUncheckedCreateInput>
  }

  /**
   * especialidades createMany
   */
  export type especialidadesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many especialidades.
     */
    data: especialidadesCreateManyInput | especialidadesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * especialidades update
   */
  export type especialidadesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the especialidades
     */
    select?: especialidadesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: especialidadesInclude<ExtArgs> | null
    /**
     * The data needed to update a especialidades.
     */
    data: XOR<especialidadesUpdateInput, especialidadesUncheckedUpdateInput>
    /**
     * Choose, which especialidades to update.
     */
    where: especialidadesWhereUniqueInput
  }

  /**
   * especialidades updateMany
   */
  export type especialidadesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update especialidades.
     */
    data: XOR<especialidadesUpdateManyMutationInput, especialidadesUncheckedUpdateManyInput>
    /**
     * Filter which especialidades to update
     */
    where?: especialidadesWhereInput
  }

  /**
   * especialidades upsert
   */
  export type especialidadesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the especialidades
     */
    select?: especialidadesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: especialidadesInclude<ExtArgs> | null
    /**
     * The filter to search for the especialidades to update in case it exists.
     */
    where: especialidadesWhereUniqueInput
    /**
     * In case the especialidades found by the `where` argument doesn't exist, create a new especialidades with this data.
     */
    create: XOR<especialidadesCreateInput, especialidadesUncheckedCreateInput>
    /**
     * In case the especialidades was found with the provided `where` argument, update it with this data.
     */
    update: XOR<especialidadesUpdateInput, especialidadesUncheckedUpdateInput>
  }

  /**
   * especialidades delete
   */
  export type especialidadesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the especialidades
     */
    select?: especialidadesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: especialidadesInclude<ExtArgs> | null
    /**
     * Filter which especialidades to delete.
     */
    where: especialidadesWhereUniqueInput
  }

  /**
   * especialidades deleteMany
   */
  export type especialidadesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which especialidades to delete
     */
    where?: especialidadesWhereInput
  }

  /**
   * especialidades.medicos
   */
  export type especialidades$medicosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medicos
     */
    select?: medicosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medicosInclude<ExtArgs> | null
    where?: medicosWhereInput
    orderBy?: medicosOrderByWithRelationInput | medicosOrderByWithRelationInput[]
    cursor?: medicosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MedicosScalarFieldEnum | MedicosScalarFieldEnum[]
  }

  /**
   * especialidades without action
   */
  export type especialidadesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the especialidades
     */
    select?: especialidadesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: especialidadesInclude<ExtArgs> | null
  }


  /**
   * Model exames
   */

  export type AggregateExames = {
    _count: ExamesCountAggregateOutputType | null
    _avg: ExamesAvgAggregateOutputType | null
    _sum: ExamesSumAggregateOutputType | null
    _min: ExamesMinAggregateOutputType | null
    _max: ExamesMaxAggregateOutputType | null
  }

  export type ExamesAvgAggregateOutputType = {
    exame_id: number | null
    paciente_id: number | null
  }

  export type ExamesSumAggregateOutputType = {
    exame_id: number | null
    paciente_id: number | null
  }

  export type ExamesMinAggregateOutputType = {
    exame_id: number | null
    exame_nome: string | null
    paciente_id: number | null
  }

  export type ExamesMaxAggregateOutputType = {
    exame_id: number | null
    exame_nome: string | null
    paciente_id: number | null
  }

  export type ExamesCountAggregateOutputType = {
    exame_id: number
    exame_nome: number
    paciente_id: number
    _all: number
  }


  export type ExamesAvgAggregateInputType = {
    exame_id?: true
    paciente_id?: true
  }

  export type ExamesSumAggregateInputType = {
    exame_id?: true
    paciente_id?: true
  }

  export type ExamesMinAggregateInputType = {
    exame_id?: true
    exame_nome?: true
    paciente_id?: true
  }

  export type ExamesMaxAggregateInputType = {
    exame_id?: true
    exame_nome?: true
    paciente_id?: true
  }

  export type ExamesCountAggregateInputType = {
    exame_id?: true
    exame_nome?: true
    paciente_id?: true
    _all?: true
  }

  export type ExamesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which exames to aggregate.
     */
    where?: examesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of exames to fetch.
     */
    orderBy?: examesOrderByWithRelationInput | examesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: examesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` exames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` exames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned exames
    **/
    _count?: true | ExamesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExamesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExamesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExamesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExamesMaxAggregateInputType
  }

  export type GetExamesAggregateType<T extends ExamesAggregateArgs> = {
        [P in keyof T & keyof AggregateExames]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExames[P]>
      : GetScalarType<T[P], AggregateExames[P]>
  }




  export type examesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: examesWhereInput
    orderBy?: examesOrderByWithAggregationInput | examesOrderByWithAggregationInput[]
    by: ExamesScalarFieldEnum[] | ExamesScalarFieldEnum
    having?: examesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExamesCountAggregateInputType | true
    _avg?: ExamesAvgAggregateInputType
    _sum?: ExamesSumAggregateInputType
    _min?: ExamesMinAggregateInputType
    _max?: ExamesMaxAggregateInputType
  }

  export type ExamesGroupByOutputType = {
    exame_id: number
    exame_nome: string
    paciente_id: number
    _count: ExamesCountAggregateOutputType | null
    _avg: ExamesAvgAggregateOutputType | null
    _sum: ExamesSumAggregateOutputType | null
    _min: ExamesMinAggregateOutputType | null
    _max: ExamesMaxAggregateOutputType | null
  }

  type GetExamesGroupByPayload<T extends examesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExamesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExamesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExamesGroupByOutputType[P]>
            : GetScalarType<T[P], ExamesGroupByOutputType[P]>
        }
      >
    >


  export type examesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    exame_id?: boolean
    exame_nome?: boolean
    paciente_id?: boolean
    pacientes?: boolean | pacientesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exames"]>


  export type examesSelectScalar = {
    exame_id?: boolean
    exame_nome?: boolean
    paciente_id?: boolean
  }

  export type examesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pacientes?: boolean | pacientesDefaultArgs<ExtArgs>
  }

  export type $examesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "exames"
    objects: {
      pacientes: Prisma.$pacientesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      exame_id: number
      exame_nome: string
      paciente_id: number
    }, ExtArgs["result"]["exames"]>
    composites: {}
  }

  type examesGetPayload<S extends boolean | null | undefined | examesDefaultArgs> = $Result.GetResult<Prisma.$examesPayload, S>

  type examesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<examesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ExamesCountAggregateInputType | true
    }

  export interface examesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['exames'], meta: { name: 'exames' } }
    /**
     * Find zero or one Exames that matches the filter.
     * @param {examesFindUniqueArgs} args - Arguments to find a Exames
     * @example
     * // Get one Exames
     * const exames = await prisma.exames.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends examesFindUniqueArgs>(args: SelectSubset<T, examesFindUniqueArgs<ExtArgs>>): Prisma__examesClient<$Result.GetResult<Prisma.$examesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Exames that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {examesFindUniqueOrThrowArgs} args - Arguments to find a Exames
     * @example
     * // Get one Exames
     * const exames = await prisma.exames.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends examesFindUniqueOrThrowArgs>(args: SelectSubset<T, examesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__examesClient<$Result.GetResult<Prisma.$examesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Exames that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {examesFindFirstArgs} args - Arguments to find a Exames
     * @example
     * // Get one Exames
     * const exames = await prisma.exames.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends examesFindFirstArgs>(args?: SelectSubset<T, examesFindFirstArgs<ExtArgs>>): Prisma__examesClient<$Result.GetResult<Prisma.$examesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Exames that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {examesFindFirstOrThrowArgs} args - Arguments to find a Exames
     * @example
     * // Get one Exames
     * const exames = await prisma.exames.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends examesFindFirstOrThrowArgs>(args?: SelectSubset<T, examesFindFirstOrThrowArgs<ExtArgs>>): Prisma__examesClient<$Result.GetResult<Prisma.$examesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Exames that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {examesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Exames
     * const exames = await prisma.exames.findMany()
     * 
     * // Get first 10 Exames
     * const exames = await prisma.exames.findMany({ take: 10 })
     * 
     * // Only select the `exame_id`
     * const examesWithExame_idOnly = await prisma.exames.findMany({ select: { exame_id: true } })
     * 
     */
    findMany<T extends examesFindManyArgs>(args?: SelectSubset<T, examesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$examesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Exames.
     * @param {examesCreateArgs} args - Arguments to create a Exames.
     * @example
     * // Create one Exames
     * const Exames = await prisma.exames.create({
     *   data: {
     *     // ... data to create a Exames
     *   }
     * })
     * 
     */
    create<T extends examesCreateArgs>(args: SelectSubset<T, examesCreateArgs<ExtArgs>>): Prisma__examesClient<$Result.GetResult<Prisma.$examesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Exames.
     * @param {examesCreateManyArgs} args - Arguments to create many Exames.
     * @example
     * // Create many Exames
     * const exames = await prisma.exames.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends examesCreateManyArgs>(args?: SelectSubset<T, examesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Exames.
     * @param {examesDeleteArgs} args - Arguments to delete one Exames.
     * @example
     * // Delete one Exames
     * const Exames = await prisma.exames.delete({
     *   where: {
     *     // ... filter to delete one Exames
     *   }
     * })
     * 
     */
    delete<T extends examesDeleteArgs>(args: SelectSubset<T, examesDeleteArgs<ExtArgs>>): Prisma__examesClient<$Result.GetResult<Prisma.$examesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Exames.
     * @param {examesUpdateArgs} args - Arguments to update one Exames.
     * @example
     * // Update one Exames
     * const exames = await prisma.exames.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends examesUpdateArgs>(args: SelectSubset<T, examesUpdateArgs<ExtArgs>>): Prisma__examesClient<$Result.GetResult<Prisma.$examesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Exames.
     * @param {examesDeleteManyArgs} args - Arguments to filter Exames to delete.
     * @example
     * // Delete a few Exames
     * const { count } = await prisma.exames.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends examesDeleteManyArgs>(args?: SelectSubset<T, examesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exames.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {examesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Exames
     * const exames = await prisma.exames.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends examesUpdateManyArgs>(args: SelectSubset<T, examesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Exames.
     * @param {examesUpsertArgs} args - Arguments to update or create a Exames.
     * @example
     * // Update or create a Exames
     * const exames = await prisma.exames.upsert({
     *   create: {
     *     // ... data to create a Exames
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Exames we want to update
     *   }
     * })
     */
    upsert<T extends examesUpsertArgs>(args: SelectSubset<T, examesUpsertArgs<ExtArgs>>): Prisma__examesClient<$Result.GetResult<Prisma.$examesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Exames.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {examesCountArgs} args - Arguments to filter Exames to count.
     * @example
     * // Count the number of Exames
     * const count = await prisma.exames.count({
     *   where: {
     *     // ... the filter for the Exames we want to count
     *   }
     * })
    **/
    count<T extends examesCountArgs>(
      args?: Subset<T, examesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExamesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Exames.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExamesAggregateArgs>(args: Subset<T, ExamesAggregateArgs>): Prisma.PrismaPromise<GetExamesAggregateType<T>>

    /**
     * Group by Exames.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {examesGroupByArgs} args - Group by arguments.
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
      T extends examesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: examesGroupByArgs['orderBy'] }
        : { orderBy?: examesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, examesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExamesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the exames model
   */
  readonly fields: examesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for exames.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__examesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pacientes<T extends pacientesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, pacientesDefaultArgs<ExtArgs>>): Prisma__pacientesClient<$Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the exames model
   */ 
  interface examesFieldRefs {
    readonly exame_id: FieldRef<"exames", 'Int'>
    readonly exame_nome: FieldRef<"exames", 'String'>
    readonly paciente_id: FieldRef<"exames", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * exames findUnique
   */
  export type examesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exames
     */
    select?: examesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: examesInclude<ExtArgs> | null
    /**
     * Filter, which exames to fetch.
     */
    where: examesWhereUniqueInput
  }

  /**
   * exames findUniqueOrThrow
   */
  export type examesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exames
     */
    select?: examesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: examesInclude<ExtArgs> | null
    /**
     * Filter, which exames to fetch.
     */
    where: examesWhereUniqueInput
  }

  /**
   * exames findFirst
   */
  export type examesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exames
     */
    select?: examesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: examesInclude<ExtArgs> | null
    /**
     * Filter, which exames to fetch.
     */
    where?: examesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of exames to fetch.
     */
    orderBy?: examesOrderByWithRelationInput | examesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for exames.
     */
    cursor?: examesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` exames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` exames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of exames.
     */
    distinct?: ExamesScalarFieldEnum | ExamesScalarFieldEnum[]
  }

  /**
   * exames findFirstOrThrow
   */
  export type examesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exames
     */
    select?: examesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: examesInclude<ExtArgs> | null
    /**
     * Filter, which exames to fetch.
     */
    where?: examesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of exames to fetch.
     */
    orderBy?: examesOrderByWithRelationInput | examesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for exames.
     */
    cursor?: examesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` exames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` exames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of exames.
     */
    distinct?: ExamesScalarFieldEnum | ExamesScalarFieldEnum[]
  }

  /**
   * exames findMany
   */
  export type examesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exames
     */
    select?: examesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: examesInclude<ExtArgs> | null
    /**
     * Filter, which exames to fetch.
     */
    where?: examesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of exames to fetch.
     */
    orderBy?: examesOrderByWithRelationInput | examesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing exames.
     */
    cursor?: examesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` exames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` exames.
     */
    skip?: number
    distinct?: ExamesScalarFieldEnum | ExamesScalarFieldEnum[]
  }

  /**
   * exames create
   */
  export type examesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exames
     */
    select?: examesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: examesInclude<ExtArgs> | null
    /**
     * The data needed to create a exames.
     */
    data: XOR<examesCreateInput, examesUncheckedCreateInput>
  }

  /**
   * exames createMany
   */
  export type examesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many exames.
     */
    data: examesCreateManyInput | examesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * exames update
   */
  export type examesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exames
     */
    select?: examesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: examesInclude<ExtArgs> | null
    /**
     * The data needed to update a exames.
     */
    data: XOR<examesUpdateInput, examesUncheckedUpdateInput>
    /**
     * Choose, which exames to update.
     */
    where: examesWhereUniqueInput
  }

  /**
   * exames updateMany
   */
  export type examesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update exames.
     */
    data: XOR<examesUpdateManyMutationInput, examesUncheckedUpdateManyInput>
    /**
     * Filter which exames to update
     */
    where?: examesWhereInput
  }

  /**
   * exames upsert
   */
  export type examesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exames
     */
    select?: examesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: examesInclude<ExtArgs> | null
    /**
     * The filter to search for the exames to update in case it exists.
     */
    where: examesWhereUniqueInput
    /**
     * In case the exames found by the `where` argument doesn't exist, create a new exames with this data.
     */
    create: XOR<examesCreateInput, examesUncheckedCreateInput>
    /**
     * In case the exames was found with the provided `where` argument, update it with this data.
     */
    update: XOR<examesUpdateInput, examesUncheckedUpdateInput>
  }

  /**
   * exames delete
   */
  export type examesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exames
     */
    select?: examesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: examesInclude<ExtArgs> | null
    /**
     * Filter which exames to delete.
     */
    where: examesWhereUniqueInput
  }

  /**
   * exames deleteMany
   */
  export type examesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which exames to delete
     */
    where?: examesWhereInput
  }

  /**
   * exames without action
   */
  export type examesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exames
     */
    select?: examesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: examesInclude<ExtArgs> | null
  }


  /**
   * Model medicos
   */

  export type AggregateMedicos = {
    _count: MedicosCountAggregateOutputType | null
    _avg: MedicosAvgAggregateOutputType | null
    _sum: MedicosSumAggregateOutputType | null
    _min: MedicosMinAggregateOutputType | null
    _max: MedicosMaxAggregateOutputType | null
  }

  export type MedicosAvgAggregateOutputType = {
    medico_id: number | null
    especialidade_id: number | null
  }

  export type MedicosSumAggregateOutputType = {
    medico_id: number | null
    especialidade_id: number | null
  }

  export type MedicosMinAggregateOutputType = {
    medico_id: number | null
    medico_nome: string | null
    medico_crm: string | null
    medico_telefone: string | null
    medico_email: string | null
    especialidade_id: number | null
  }

  export type MedicosMaxAggregateOutputType = {
    medico_id: number | null
    medico_nome: string | null
    medico_crm: string | null
    medico_telefone: string | null
    medico_email: string | null
    especialidade_id: number | null
  }

  export type MedicosCountAggregateOutputType = {
    medico_id: number
    medico_nome: number
    medico_crm: number
    medico_telefone: number
    medico_email: number
    especialidade_id: number
    _all: number
  }


  export type MedicosAvgAggregateInputType = {
    medico_id?: true
    especialidade_id?: true
  }

  export type MedicosSumAggregateInputType = {
    medico_id?: true
    especialidade_id?: true
  }

  export type MedicosMinAggregateInputType = {
    medico_id?: true
    medico_nome?: true
    medico_crm?: true
    medico_telefone?: true
    medico_email?: true
    especialidade_id?: true
  }

  export type MedicosMaxAggregateInputType = {
    medico_id?: true
    medico_nome?: true
    medico_crm?: true
    medico_telefone?: true
    medico_email?: true
    especialidade_id?: true
  }

  export type MedicosCountAggregateInputType = {
    medico_id?: true
    medico_nome?: true
    medico_crm?: true
    medico_telefone?: true
    medico_email?: true
    especialidade_id?: true
    _all?: true
  }

  export type MedicosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which medicos to aggregate.
     */
    where?: medicosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of medicos to fetch.
     */
    orderBy?: medicosOrderByWithRelationInput | medicosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: medicosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` medicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` medicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned medicos
    **/
    _count?: true | MedicosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MedicosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MedicosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MedicosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MedicosMaxAggregateInputType
  }

  export type GetMedicosAggregateType<T extends MedicosAggregateArgs> = {
        [P in keyof T & keyof AggregateMedicos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedicos[P]>
      : GetScalarType<T[P], AggregateMedicos[P]>
  }




  export type medicosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: medicosWhereInput
    orderBy?: medicosOrderByWithAggregationInput | medicosOrderByWithAggregationInput[]
    by: MedicosScalarFieldEnum[] | MedicosScalarFieldEnum
    having?: medicosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MedicosCountAggregateInputType | true
    _avg?: MedicosAvgAggregateInputType
    _sum?: MedicosSumAggregateInputType
    _min?: MedicosMinAggregateInputType
    _max?: MedicosMaxAggregateInputType
  }

  export type MedicosGroupByOutputType = {
    medico_id: number
    medico_nome: string
    medico_crm: string
    medico_telefone: string
    medico_email: string
    especialidade_id: number
    _count: MedicosCountAggregateOutputType | null
    _avg: MedicosAvgAggregateOutputType | null
    _sum: MedicosSumAggregateOutputType | null
    _min: MedicosMinAggregateOutputType | null
    _max: MedicosMaxAggregateOutputType | null
  }

  type GetMedicosGroupByPayload<T extends medicosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MedicosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MedicosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MedicosGroupByOutputType[P]>
            : GetScalarType<T[P], MedicosGroupByOutputType[P]>
        }
      >
    >


  export type medicosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    medico_id?: boolean
    medico_nome?: boolean
    medico_crm?: boolean
    medico_telefone?: boolean
    medico_email?: boolean
    especialidade_id?: boolean
    consultas?: boolean | medicos$consultasArgs<ExtArgs>
    especialidades?: boolean | especialidadesDefaultArgs<ExtArgs>
    _count?: boolean | MedicosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicos"]>


  export type medicosSelectScalar = {
    medico_id?: boolean
    medico_nome?: boolean
    medico_crm?: boolean
    medico_telefone?: boolean
    medico_email?: boolean
    especialidade_id?: boolean
  }

  export type medicosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    consultas?: boolean | medicos$consultasArgs<ExtArgs>
    especialidades?: boolean | especialidadesDefaultArgs<ExtArgs>
    _count?: boolean | MedicosCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $medicosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "medicos"
    objects: {
      consultas: Prisma.$consultasPayload<ExtArgs>[]
      especialidades: Prisma.$especialidadesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      medico_id: number
      medico_nome: string
      medico_crm: string
      medico_telefone: string
      medico_email: string
      especialidade_id: number
    }, ExtArgs["result"]["medicos"]>
    composites: {}
  }

  type medicosGetPayload<S extends boolean | null | undefined | medicosDefaultArgs> = $Result.GetResult<Prisma.$medicosPayload, S>

  type medicosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<medicosFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MedicosCountAggregateInputType | true
    }

  export interface medicosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['medicos'], meta: { name: 'medicos' } }
    /**
     * Find zero or one Medicos that matches the filter.
     * @param {medicosFindUniqueArgs} args - Arguments to find a Medicos
     * @example
     * // Get one Medicos
     * const medicos = await prisma.medicos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends medicosFindUniqueArgs>(args: SelectSubset<T, medicosFindUniqueArgs<ExtArgs>>): Prisma__medicosClient<$Result.GetResult<Prisma.$medicosPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Medicos that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {medicosFindUniqueOrThrowArgs} args - Arguments to find a Medicos
     * @example
     * // Get one Medicos
     * const medicos = await prisma.medicos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends medicosFindUniqueOrThrowArgs>(args: SelectSubset<T, medicosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__medicosClient<$Result.GetResult<Prisma.$medicosPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Medicos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {medicosFindFirstArgs} args - Arguments to find a Medicos
     * @example
     * // Get one Medicos
     * const medicos = await prisma.medicos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends medicosFindFirstArgs>(args?: SelectSubset<T, medicosFindFirstArgs<ExtArgs>>): Prisma__medicosClient<$Result.GetResult<Prisma.$medicosPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Medicos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {medicosFindFirstOrThrowArgs} args - Arguments to find a Medicos
     * @example
     * // Get one Medicos
     * const medicos = await prisma.medicos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends medicosFindFirstOrThrowArgs>(args?: SelectSubset<T, medicosFindFirstOrThrowArgs<ExtArgs>>): Prisma__medicosClient<$Result.GetResult<Prisma.$medicosPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Medicos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {medicosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Medicos
     * const medicos = await prisma.medicos.findMany()
     * 
     * // Get first 10 Medicos
     * const medicos = await prisma.medicos.findMany({ take: 10 })
     * 
     * // Only select the `medico_id`
     * const medicosWithMedico_idOnly = await prisma.medicos.findMany({ select: { medico_id: true } })
     * 
     */
    findMany<T extends medicosFindManyArgs>(args?: SelectSubset<T, medicosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$medicosPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Medicos.
     * @param {medicosCreateArgs} args - Arguments to create a Medicos.
     * @example
     * // Create one Medicos
     * const Medicos = await prisma.medicos.create({
     *   data: {
     *     // ... data to create a Medicos
     *   }
     * })
     * 
     */
    create<T extends medicosCreateArgs>(args: SelectSubset<T, medicosCreateArgs<ExtArgs>>): Prisma__medicosClient<$Result.GetResult<Prisma.$medicosPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Medicos.
     * @param {medicosCreateManyArgs} args - Arguments to create many Medicos.
     * @example
     * // Create many Medicos
     * const medicos = await prisma.medicos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends medicosCreateManyArgs>(args?: SelectSubset<T, medicosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Medicos.
     * @param {medicosDeleteArgs} args - Arguments to delete one Medicos.
     * @example
     * // Delete one Medicos
     * const Medicos = await prisma.medicos.delete({
     *   where: {
     *     // ... filter to delete one Medicos
     *   }
     * })
     * 
     */
    delete<T extends medicosDeleteArgs>(args: SelectSubset<T, medicosDeleteArgs<ExtArgs>>): Prisma__medicosClient<$Result.GetResult<Prisma.$medicosPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Medicos.
     * @param {medicosUpdateArgs} args - Arguments to update one Medicos.
     * @example
     * // Update one Medicos
     * const medicos = await prisma.medicos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends medicosUpdateArgs>(args: SelectSubset<T, medicosUpdateArgs<ExtArgs>>): Prisma__medicosClient<$Result.GetResult<Prisma.$medicosPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Medicos.
     * @param {medicosDeleteManyArgs} args - Arguments to filter Medicos to delete.
     * @example
     * // Delete a few Medicos
     * const { count } = await prisma.medicos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends medicosDeleteManyArgs>(args?: SelectSubset<T, medicosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Medicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {medicosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Medicos
     * const medicos = await prisma.medicos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends medicosUpdateManyArgs>(args: SelectSubset<T, medicosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Medicos.
     * @param {medicosUpsertArgs} args - Arguments to update or create a Medicos.
     * @example
     * // Update or create a Medicos
     * const medicos = await prisma.medicos.upsert({
     *   create: {
     *     // ... data to create a Medicos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Medicos we want to update
     *   }
     * })
     */
    upsert<T extends medicosUpsertArgs>(args: SelectSubset<T, medicosUpsertArgs<ExtArgs>>): Prisma__medicosClient<$Result.GetResult<Prisma.$medicosPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Medicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {medicosCountArgs} args - Arguments to filter Medicos to count.
     * @example
     * // Count the number of Medicos
     * const count = await prisma.medicos.count({
     *   where: {
     *     // ... the filter for the Medicos we want to count
     *   }
     * })
    **/
    count<T extends medicosCountArgs>(
      args?: Subset<T, medicosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MedicosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Medicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MedicosAggregateArgs>(args: Subset<T, MedicosAggregateArgs>): Prisma.PrismaPromise<GetMedicosAggregateType<T>>

    /**
     * Group by Medicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {medicosGroupByArgs} args - Group by arguments.
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
      T extends medicosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: medicosGroupByArgs['orderBy'] }
        : { orderBy?: medicosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, medicosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the medicos model
   */
  readonly fields: medicosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for medicos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__medicosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    consultas<T extends medicos$consultasArgs<ExtArgs> = {}>(args?: Subset<T, medicos$consultasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$consultasPayload<ExtArgs>, T, "findMany"> | Null>
    especialidades<T extends especialidadesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, especialidadesDefaultArgs<ExtArgs>>): Prisma__especialidadesClient<$Result.GetResult<Prisma.$especialidadesPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the medicos model
   */ 
  interface medicosFieldRefs {
    readonly medico_id: FieldRef<"medicos", 'Int'>
    readonly medico_nome: FieldRef<"medicos", 'String'>
    readonly medico_crm: FieldRef<"medicos", 'String'>
    readonly medico_telefone: FieldRef<"medicos", 'String'>
    readonly medico_email: FieldRef<"medicos", 'String'>
    readonly especialidade_id: FieldRef<"medicos", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * medicos findUnique
   */
  export type medicosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medicos
     */
    select?: medicosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medicosInclude<ExtArgs> | null
    /**
     * Filter, which medicos to fetch.
     */
    where: medicosWhereUniqueInput
  }

  /**
   * medicos findUniqueOrThrow
   */
  export type medicosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medicos
     */
    select?: medicosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medicosInclude<ExtArgs> | null
    /**
     * Filter, which medicos to fetch.
     */
    where: medicosWhereUniqueInput
  }

  /**
   * medicos findFirst
   */
  export type medicosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medicos
     */
    select?: medicosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medicosInclude<ExtArgs> | null
    /**
     * Filter, which medicos to fetch.
     */
    where?: medicosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of medicos to fetch.
     */
    orderBy?: medicosOrderByWithRelationInput | medicosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for medicos.
     */
    cursor?: medicosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` medicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` medicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of medicos.
     */
    distinct?: MedicosScalarFieldEnum | MedicosScalarFieldEnum[]
  }

  /**
   * medicos findFirstOrThrow
   */
  export type medicosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medicos
     */
    select?: medicosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medicosInclude<ExtArgs> | null
    /**
     * Filter, which medicos to fetch.
     */
    where?: medicosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of medicos to fetch.
     */
    orderBy?: medicosOrderByWithRelationInput | medicosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for medicos.
     */
    cursor?: medicosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` medicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` medicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of medicos.
     */
    distinct?: MedicosScalarFieldEnum | MedicosScalarFieldEnum[]
  }

  /**
   * medicos findMany
   */
  export type medicosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medicos
     */
    select?: medicosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medicosInclude<ExtArgs> | null
    /**
     * Filter, which medicos to fetch.
     */
    where?: medicosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of medicos to fetch.
     */
    orderBy?: medicosOrderByWithRelationInput | medicosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing medicos.
     */
    cursor?: medicosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` medicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` medicos.
     */
    skip?: number
    distinct?: MedicosScalarFieldEnum | MedicosScalarFieldEnum[]
  }

  /**
   * medicos create
   */
  export type medicosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medicos
     */
    select?: medicosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medicosInclude<ExtArgs> | null
    /**
     * The data needed to create a medicos.
     */
    data: XOR<medicosCreateInput, medicosUncheckedCreateInput>
  }

  /**
   * medicos createMany
   */
  export type medicosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many medicos.
     */
    data: medicosCreateManyInput | medicosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * medicos update
   */
  export type medicosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medicos
     */
    select?: medicosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medicosInclude<ExtArgs> | null
    /**
     * The data needed to update a medicos.
     */
    data: XOR<medicosUpdateInput, medicosUncheckedUpdateInput>
    /**
     * Choose, which medicos to update.
     */
    where: medicosWhereUniqueInput
  }

  /**
   * medicos updateMany
   */
  export type medicosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update medicos.
     */
    data: XOR<medicosUpdateManyMutationInput, medicosUncheckedUpdateManyInput>
    /**
     * Filter which medicos to update
     */
    where?: medicosWhereInput
  }

  /**
   * medicos upsert
   */
  export type medicosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medicos
     */
    select?: medicosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medicosInclude<ExtArgs> | null
    /**
     * The filter to search for the medicos to update in case it exists.
     */
    where: medicosWhereUniqueInput
    /**
     * In case the medicos found by the `where` argument doesn't exist, create a new medicos with this data.
     */
    create: XOR<medicosCreateInput, medicosUncheckedCreateInput>
    /**
     * In case the medicos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<medicosUpdateInput, medicosUncheckedUpdateInput>
  }

  /**
   * medicos delete
   */
  export type medicosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medicos
     */
    select?: medicosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medicosInclude<ExtArgs> | null
    /**
     * Filter which medicos to delete.
     */
    where: medicosWhereUniqueInput
  }

  /**
   * medicos deleteMany
   */
  export type medicosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which medicos to delete
     */
    where?: medicosWhereInput
  }

  /**
   * medicos.consultas
   */
  export type medicos$consultasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the consultas
     */
    select?: consultasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: consultasInclude<ExtArgs> | null
    where?: consultasWhereInput
    orderBy?: consultasOrderByWithRelationInput | consultasOrderByWithRelationInput[]
    cursor?: consultasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConsultasScalarFieldEnum | ConsultasScalarFieldEnum[]
  }

  /**
   * medicos without action
   */
  export type medicosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medicos
     */
    select?: medicosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: medicosInclude<ExtArgs> | null
  }


  /**
   * Model operadoras
   */

  export type AggregateOperadoras = {
    _count: OperadorasCountAggregateOutputType | null
    _avg: OperadorasAvgAggregateOutputType | null
    _sum: OperadorasSumAggregateOutputType | null
    _min: OperadorasMinAggregateOutputType | null
    _max: OperadorasMaxAggregateOutputType | null
  }

  export type OperadorasAvgAggregateOutputType = {
    operadora_id: number | null
    operadora_preco: number | null
  }

  export type OperadorasSumAggregateOutputType = {
    operadora_id: number | null
    operadora_preco: number | null
  }

  export type OperadorasMinAggregateOutputType = {
    operadora_id: number | null
    operadora_nome: string | null
    operadora_cobertura: string | null
    operadora_preco: number | null
  }

  export type OperadorasMaxAggregateOutputType = {
    operadora_id: number | null
    operadora_nome: string | null
    operadora_cobertura: string | null
    operadora_preco: number | null
  }

  export type OperadorasCountAggregateOutputType = {
    operadora_id: number
    operadora_nome: number
    operadora_cobertura: number
    operadora_preco: number
    _all: number
  }


  export type OperadorasAvgAggregateInputType = {
    operadora_id?: true
    operadora_preco?: true
  }

  export type OperadorasSumAggregateInputType = {
    operadora_id?: true
    operadora_preco?: true
  }

  export type OperadorasMinAggregateInputType = {
    operadora_id?: true
    operadora_nome?: true
    operadora_cobertura?: true
    operadora_preco?: true
  }

  export type OperadorasMaxAggregateInputType = {
    operadora_id?: true
    operadora_nome?: true
    operadora_cobertura?: true
    operadora_preco?: true
  }

  export type OperadorasCountAggregateInputType = {
    operadora_id?: true
    operadora_nome?: true
    operadora_cobertura?: true
    operadora_preco?: true
    _all?: true
  }

  export type OperadorasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which operadoras to aggregate.
     */
    where?: operadorasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of operadoras to fetch.
     */
    orderBy?: operadorasOrderByWithRelationInput | operadorasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: operadorasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` operadoras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` operadoras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned operadoras
    **/
    _count?: true | OperadorasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OperadorasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OperadorasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OperadorasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OperadorasMaxAggregateInputType
  }

  export type GetOperadorasAggregateType<T extends OperadorasAggregateArgs> = {
        [P in keyof T & keyof AggregateOperadoras]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOperadoras[P]>
      : GetScalarType<T[P], AggregateOperadoras[P]>
  }




  export type operadorasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: operadorasWhereInput
    orderBy?: operadorasOrderByWithAggregationInput | operadorasOrderByWithAggregationInput[]
    by: OperadorasScalarFieldEnum[] | OperadorasScalarFieldEnum
    having?: operadorasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OperadorasCountAggregateInputType | true
    _avg?: OperadorasAvgAggregateInputType
    _sum?: OperadorasSumAggregateInputType
    _min?: OperadorasMinAggregateInputType
    _max?: OperadorasMaxAggregateInputType
  }

  export type OperadorasGroupByOutputType = {
    operadora_id: number
    operadora_nome: string
    operadora_cobertura: string
    operadora_preco: number
    _count: OperadorasCountAggregateOutputType | null
    _avg: OperadorasAvgAggregateOutputType | null
    _sum: OperadorasSumAggregateOutputType | null
    _min: OperadorasMinAggregateOutputType | null
    _max: OperadorasMaxAggregateOutputType | null
  }

  type GetOperadorasGroupByPayload<T extends operadorasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OperadorasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OperadorasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OperadorasGroupByOutputType[P]>
            : GetScalarType<T[P], OperadorasGroupByOutputType[P]>
        }
      >
    >


  export type operadorasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    operadora_id?: boolean
    operadora_nome?: boolean
    operadora_cobertura?: boolean
    operadora_preco?: boolean
    planos?: boolean | operadoras$planosArgs<ExtArgs>
    _count?: boolean | OperadorasCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["operadoras"]>


  export type operadorasSelectScalar = {
    operadora_id?: boolean
    operadora_nome?: boolean
    operadora_cobertura?: boolean
    operadora_preco?: boolean
  }

  export type operadorasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    planos?: boolean | operadoras$planosArgs<ExtArgs>
    _count?: boolean | OperadorasCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $operadorasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "operadoras"
    objects: {
      planos: Prisma.$planosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      operadora_id: number
      operadora_nome: string
      operadora_cobertura: string
      operadora_preco: number
    }, ExtArgs["result"]["operadoras"]>
    composites: {}
  }

  type operadorasGetPayload<S extends boolean | null | undefined | operadorasDefaultArgs> = $Result.GetResult<Prisma.$operadorasPayload, S>

  type operadorasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<operadorasFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OperadorasCountAggregateInputType | true
    }

  export interface operadorasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['operadoras'], meta: { name: 'operadoras' } }
    /**
     * Find zero or one Operadoras that matches the filter.
     * @param {operadorasFindUniqueArgs} args - Arguments to find a Operadoras
     * @example
     * // Get one Operadoras
     * const operadoras = await prisma.operadoras.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends operadorasFindUniqueArgs>(args: SelectSubset<T, operadorasFindUniqueArgs<ExtArgs>>): Prisma__operadorasClient<$Result.GetResult<Prisma.$operadorasPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Operadoras that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {operadorasFindUniqueOrThrowArgs} args - Arguments to find a Operadoras
     * @example
     * // Get one Operadoras
     * const operadoras = await prisma.operadoras.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends operadorasFindUniqueOrThrowArgs>(args: SelectSubset<T, operadorasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__operadorasClient<$Result.GetResult<Prisma.$operadorasPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Operadoras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {operadorasFindFirstArgs} args - Arguments to find a Operadoras
     * @example
     * // Get one Operadoras
     * const operadoras = await prisma.operadoras.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends operadorasFindFirstArgs>(args?: SelectSubset<T, operadorasFindFirstArgs<ExtArgs>>): Prisma__operadorasClient<$Result.GetResult<Prisma.$operadorasPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Operadoras that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {operadorasFindFirstOrThrowArgs} args - Arguments to find a Operadoras
     * @example
     * // Get one Operadoras
     * const operadoras = await prisma.operadoras.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends operadorasFindFirstOrThrowArgs>(args?: SelectSubset<T, operadorasFindFirstOrThrowArgs<ExtArgs>>): Prisma__operadorasClient<$Result.GetResult<Prisma.$operadorasPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Operadoras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {operadorasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Operadoras
     * const operadoras = await prisma.operadoras.findMany()
     * 
     * // Get first 10 Operadoras
     * const operadoras = await prisma.operadoras.findMany({ take: 10 })
     * 
     * // Only select the `operadora_id`
     * const operadorasWithOperadora_idOnly = await prisma.operadoras.findMany({ select: { operadora_id: true } })
     * 
     */
    findMany<T extends operadorasFindManyArgs>(args?: SelectSubset<T, operadorasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$operadorasPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Operadoras.
     * @param {operadorasCreateArgs} args - Arguments to create a Operadoras.
     * @example
     * // Create one Operadoras
     * const Operadoras = await prisma.operadoras.create({
     *   data: {
     *     // ... data to create a Operadoras
     *   }
     * })
     * 
     */
    create<T extends operadorasCreateArgs>(args: SelectSubset<T, operadorasCreateArgs<ExtArgs>>): Prisma__operadorasClient<$Result.GetResult<Prisma.$operadorasPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Operadoras.
     * @param {operadorasCreateManyArgs} args - Arguments to create many Operadoras.
     * @example
     * // Create many Operadoras
     * const operadoras = await prisma.operadoras.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends operadorasCreateManyArgs>(args?: SelectSubset<T, operadorasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Operadoras.
     * @param {operadorasDeleteArgs} args - Arguments to delete one Operadoras.
     * @example
     * // Delete one Operadoras
     * const Operadoras = await prisma.operadoras.delete({
     *   where: {
     *     // ... filter to delete one Operadoras
     *   }
     * })
     * 
     */
    delete<T extends operadorasDeleteArgs>(args: SelectSubset<T, operadorasDeleteArgs<ExtArgs>>): Prisma__operadorasClient<$Result.GetResult<Prisma.$operadorasPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Operadoras.
     * @param {operadorasUpdateArgs} args - Arguments to update one Operadoras.
     * @example
     * // Update one Operadoras
     * const operadoras = await prisma.operadoras.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends operadorasUpdateArgs>(args: SelectSubset<T, operadorasUpdateArgs<ExtArgs>>): Prisma__operadorasClient<$Result.GetResult<Prisma.$operadorasPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Operadoras.
     * @param {operadorasDeleteManyArgs} args - Arguments to filter Operadoras to delete.
     * @example
     * // Delete a few Operadoras
     * const { count } = await prisma.operadoras.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends operadorasDeleteManyArgs>(args?: SelectSubset<T, operadorasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Operadoras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {operadorasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Operadoras
     * const operadoras = await prisma.operadoras.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends operadorasUpdateManyArgs>(args: SelectSubset<T, operadorasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Operadoras.
     * @param {operadorasUpsertArgs} args - Arguments to update or create a Operadoras.
     * @example
     * // Update or create a Operadoras
     * const operadoras = await prisma.operadoras.upsert({
     *   create: {
     *     // ... data to create a Operadoras
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Operadoras we want to update
     *   }
     * })
     */
    upsert<T extends operadorasUpsertArgs>(args: SelectSubset<T, operadorasUpsertArgs<ExtArgs>>): Prisma__operadorasClient<$Result.GetResult<Prisma.$operadorasPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Operadoras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {operadorasCountArgs} args - Arguments to filter Operadoras to count.
     * @example
     * // Count the number of Operadoras
     * const count = await prisma.operadoras.count({
     *   where: {
     *     // ... the filter for the Operadoras we want to count
     *   }
     * })
    **/
    count<T extends operadorasCountArgs>(
      args?: Subset<T, operadorasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OperadorasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Operadoras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperadorasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OperadorasAggregateArgs>(args: Subset<T, OperadorasAggregateArgs>): Prisma.PrismaPromise<GetOperadorasAggregateType<T>>

    /**
     * Group by Operadoras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {operadorasGroupByArgs} args - Group by arguments.
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
      T extends operadorasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: operadorasGroupByArgs['orderBy'] }
        : { orderBy?: operadorasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, operadorasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOperadorasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the operadoras model
   */
  readonly fields: operadorasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for operadoras.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__operadorasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    planos<T extends operadoras$planosArgs<ExtArgs> = {}>(args?: Subset<T, operadoras$planosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$planosPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the operadoras model
   */ 
  interface operadorasFieldRefs {
    readonly operadora_id: FieldRef<"operadoras", 'Int'>
    readonly operadora_nome: FieldRef<"operadoras", 'String'>
    readonly operadora_cobertura: FieldRef<"operadoras", 'String'>
    readonly operadora_preco: FieldRef<"operadoras", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * operadoras findUnique
   */
  export type operadorasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operadoras
     */
    select?: operadorasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: operadorasInclude<ExtArgs> | null
    /**
     * Filter, which operadoras to fetch.
     */
    where: operadorasWhereUniqueInput
  }

  /**
   * operadoras findUniqueOrThrow
   */
  export type operadorasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operadoras
     */
    select?: operadorasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: operadorasInclude<ExtArgs> | null
    /**
     * Filter, which operadoras to fetch.
     */
    where: operadorasWhereUniqueInput
  }

  /**
   * operadoras findFirst
   */
  export type operadorasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operadoras
     */
    select?: operadorasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: operadorasInclude<ExtArgs> | null
    /**
     * Filter, which operadoras to fetch.
     */
    where?: operadorasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of operadoras to fetch.
     */
    orderBy?: operadorasOrderByWithRelationInput | operadorasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for operadoras.
     */
    cursor?: operadorasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` operadoras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` operadoras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of operadoras.
     */
    distinct?: OperadorasScalarFieldEnum | OperadorasScalarFieldEnum[]
  }

  /**
   * operadoras findFirstOrThrow
   */
  export type operadorasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operadoras
     */
    select?: operadorasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: operadorasInclude<ExtArgs> | null
    /**
     * Filter, which operadoras to fetch.
     */
    where?: operadorasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of operadoras to fetch.
     */
    orderBy?: operadorasOrderByWithRelationInput | operadorasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for operadoras.
     */
    cursor?: operadorasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` operadoras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` operadoras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of operadoras.
     */
    distinct?: OperadorasScalarFieldEnum | OperadorasScalarFieldEnum[]
  }

  /**
   * operadoras findMany
   */
  export type operadorasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operadoras
     */
    select?: operadorasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: operadorasInclude<ExtArgs> | null
    /**
     * Filter, which operadoras to fetch.
     */
    where?: operadorasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of operadoras to fetch.
     */
    orderBy?: operadorasOrderByWithRelationInput | operadorasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing operadoras.
     */
    cursor?: operadorasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` operadoras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` operadoras.
     */
    skip?: number
    distinct?: OperadorasScalarFieldEnum | OperadorasScalarFieldEnum[]
  }

  /**
   * operadoras create
   */
  export type operadorasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operadoras
     */
    select?: operadorasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: operadorasInclude<ExtArgs> | null
    /**
     * The data needed to create a operadoras.
     */
    data: XOR<operadorasCreateInput, operadorasUncheckedCreateInput>
  }

  /**
   * operadoras createMany
   */
  export type operadorasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many operadoras.
     */
    data: operadorasCreateManyInput | operadorasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * operadoras update
   */
  export type operadorasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operadoras
     */
    select?: operadorasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: operadorasInclude<ExtArgs> | null
    /**
     * The data needed to update a operadoras.
     */
    data: XOR<operadorasUpdateInput, operadorasUncheckedUpdateInput>
    /**
     * Choose, which operadoras to update.
     */
    where: operadorasWhereUniqueInput
  }

  /**
   * operadoras updateMany
   */
  export type operadorasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update operadoras.
     */
    data: XOR<operadorasUpdateManyMutationInput, operadorasUncheckedUpdateManyInput>
    /**
     * Filter which operadoras to update
     */
    where?: operadorasWhereInput
  }

  /**
   * operadoras upsert
   */
  export type operadorasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operadoras
     */
    select?: operadorasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: operadorasInclude<ExtArgs> | null
    /**
     * The filter to search for the operadoras to update in case it exists.
     */
    where: operadorasWhereUniqueInput
    /**
     * In case the operadoras found by the `where` argument doesn't exist, create a new operadoras with this data.
     */
    create: XOR<operadorasCreateInput, operadorasUncheckedCreateInput>
    /**
     * In case the operadoras was found with the provided `where` argument, update it with this data.
     */
    update: XOR<operadorasUpdateInput, operadorasUncheckedUpdateInput>
  }

  /**
   * operadoras delete
   */
  export type operadorasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operadoras
     */
    select?: operadorasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: operadorasInclude<ExtArgs> | null
    /**
     * Filter which operadoras to delete.
     */
    where: operadorasWhereUniqueInput
  }

  /**
   * operadoras deleteMany
   */
  export type operadorasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which operadoras to delete
     */
    where?: operadorasWhereInput
  }

  /**
   * operadoras.planos
   */
  export type operadoras$planosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the planos
     */
    select?: planosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: planosInclude<ExtArgs> | null
    where?: planosWhereInput
    orderBy?: planosOrderByWithRelationInput | planosOrderByWithRelationInput[]
    cursor?: planosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlanosScalarFieldEnum | PlanosScalarFieldEnum[]
  }

  /**
   * operadoras without action
   */
  export type operadorasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operadoras
     */
    select?: operadorasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: operadorasInclude<ExtArgs> | null
  }


  /**
   * Model pacientes
   */

  export type AggregatePacientes = {
    _count: PacientesCountAggregateOutputType | null
    _avg: PacientesAvgAggregateOutputType | null
    _sum: PacientesSumAggregateOutputType | null
    _min: PacientesMinAggregateOutputType | null
    _max: PacientesMaxAggregateOutputType | null
  }

  export type PacientesAvgAggregateOutputType = {
    paciente_id: number | null
  }

  export type PacientesSumAggregateOutputType = {
    paciente_id: number | null
  }

  export type PacientesMinAggregateOutputType = {
    paciente_id: number | null
    paciente_nome: string | null
    paciente_genero: string | null
    paciente_nascimento: string | null
    paciente_email: string | null
    paciente_telefone: string | null
  }

  export type PacientesMaxAggregateOutputType = {
    paciente_id: number | null
    paciente_nome: string | null
    paciente_genero: string | null
    paciente_nascimento: string | null
    paciente_email: string | null
    paciente_telefone: string | null
  }

  export type PacientesCountAggregateOutputType = {
    paciente_id: number
    paciente_nome: number
    paciente_genero: number
    paciente_nascimento: number
    paciente_email: number
    paciente_telefone: number
    _all: number
  }


  export type PacientesAvgAggregateInputType = {
    paciente_id?: true
  }

  export type PacientesSumAggregateInputType = {
    paciente_id?: true
  }

  export type PacientesMinAggregateInputType = {
    paciente_id?: true
    paciente_nome?: true
    paciente_genero?: true
    paciente_nascimento?: true
    paciente_email?: true
    paciente_telefone?: true
  }

  export type PacientesMaxAggregateInputType = {
    paciente_id?: true
    paciente_nome?: true
    paciente_genero?: true
    paciente_nascimento?: true
    paciente_email?: true
    paciente_telefone?: true
  }

  export type PacientesCountAggregateInputType = {
    paciente_id?: true
    paciente_nome?: true
    paciente_genero?: true
    paciente_nascimento?: true
    paciente_email?: true
    paciente_telefone?: true
    _all?: true
  }

  export type PacientesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pacientes to aggregate.
     */
    where?: pacientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pacientes to fetch.
     */
    orderBy?: pacientesOrderByWithRelationInput | pacientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pacientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pacientes
    **/
    _count?: true | PacientesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PacientesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PacientesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PacientesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PacientesMaxAggregateInputType
  }

  export type GetPacientesAggregateType<T extends PacientesAggregateArgs> = {
        [P in keyof T & keyof AggregatePacientes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePacientes[P]>
      : GetScalarType<T[P], AggregatePacientes[P]>
  }




  export type pacientesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pacientesWhereInput
    orderBy?: pacientesOrderByWithAggregationInput | pacientesOrderByWithAggregationInput[]
    by: PacientesScalarFieldEnum[] | PacientesScalarFieldEnum
    having?: pacientesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PacientesCountAggregateInputType | true
    _avg?: PacientesAvgAggregateInputType
    _sum?: PacientesSumAggregateInputType
    _min?: PacientesMinAggregateInputType
    _max?: PacientesMaxAggregateInputType
  }

  export type PacientesGroupByOutputType = {
    paciente_id: number
    paciente_nome: string
    paciente_genero: string
    paciente_nascimento: string
    paciente_email: string | null
    paciente_telefone: string
    _count: PacientesCountAggregateOutputType | null
    _avg: PacientesAvgAggregateOutputType | null
    _sum: PacientesSumAggregateOutputType | null
    _min: PacientesMinAggregateOutputType | null
    _max: PacientesMaxAggregateOutputType | null
  }

  type GetPacientesGroupByPayload<T extends pacientesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PacientesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PacientesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PacientesGroupByOutputType[P]>
            : GetScalarType<T[P], PacientesGroupByOutputType[P]>
        }
      >
    >


  export type pacientesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    paciente_id?: boolean
    paciente_nome?: boolean
    paciente_genero?: boolean
    paciente_nascimento?: boolean
    paciente_email?: boolean
    paciente_telefone?: boolean
    consultas?: boolean | pacientes$consultasArgs<ExtArgs>
    exames?: boolean | pacientes$examesArgs<ExtArgs>
    _count?: boolean | PacientesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pacientes"]>


  export type pacientesSelectScalar = {
    paciente_id?: boolean
    paciente_nome?: boolean
    paciente_genero?: boolean
    paciente_nascimento?: boolean
    paciente_email?: boolean
    paciente_telefone?: boolean
  }

  export type pacientesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    consultas?: boolean | pacientes$consultasArgs<ExtArgs>
    exames?: boolean | pacientes$examesArgs<ExtArgs>
    _count?: boolean | PacientesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $pacientesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pacientes"
    objects: {
      consultas: Prisma.$consultasPayload<ExtArgs>[]
      exames: Prisma.$examesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      paciente_id: number
      paciente_nome: string
      paciente_genero: string
      paciente_nascimento: string
      paciente_email: string | null
      paciente_telefone: string
    }, ExtArgs["result"]["pacientes"]>
    composites: {}
  }

  type pacientesGetPayload<S extends boolean | null | undefined | pacientesDefaultArgs> = $Result.GetResult<Prisma.$pacientesPayload, S>

  type pacientesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<pacientesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PacientesCountAggregateInputType | true
    }

  export interface pacientesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pacientes'], meta: { name: 'pacientes' } }
    /**
     * Find zero or one Pacientes that matches the filter.
     * @param {pacientesFindUniqueArgs} args - Arguments to find a Pacientes
     * @example
     * // Get one Pacientes
     * const pacientes = await prisma.pacientes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends pacientesFindUniqueArgs>(args: SelectSubset<T, pacientesFindUniqueArgs<ExtArgs>>): Prisma__pacientesClient<$Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Pacientes that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {pacientesFindUniqueOrThrowArgs} args - Arguments to find a Pacientes
     * @example
     * // Get one Pacientes
     * const pacientes = await prisma.pacientes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends pacientesFindUniqueOrThrowArgs>(args: SelectSubset<T, pacientesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__pacientesClient<$Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Pacientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pacientesFindFirstArgs} args - Arguments to find a Pacientes
     * @example
     * // Get one Pacientes
     * const pacientes = await prisma.pacientes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends pacientesFindFirstArgs>(args?: SelectSubset<T, pacientesFindFirstArgs<ExtArgs>>): Prisma__pacientesClient<$Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Pacientes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pacientesFindFirstOrThrowArgs} args - Arguments to find a Pacientes
     * @example
     * // Get one Pacientes
     * const pacientes = await prisma.pacientes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends pacientesFindFirstOrThrowArgs>(args?: SelectSubset<T, pacientesFindFirstOrThrowArgs<ExtArgs>>): Prisma__pacientesClient<$Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Pacientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pacientesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pacientes
     * const pacientes = await prisma.pacientes.findMany()
     * 
     * // Get first 10 Pacientes
     * const pacientes = await prisma.pacientes.findMany({ take: 10 })
     * 
     * // Only select the `paciente_id`
     * const pacientesWithPaciente_idOnly = await prisma.pacientes.findMany({ select: { paciente_id: true } })
     * 
     */
    findMany<T extends pacientesFindManyArgs>(args?: SelectSubset<T, pacientesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Pacientes.
     * @param {pacientesCreateArgs} args - Arguments to create a Pacientes.
     * @example
     * // Create one Pacientes
     * const Pacientes = await prisma.pacientes.create({
     *   data: {
     *     // ... data to create a Pacientes
     *   }
     * })
     * 
     */
    create<T extends pacientesCreateArgs>(args: SelectSubset<T, pacientesCreateArgs<ExtArgs>>): Prisma__pacientesClient<$Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Pacientes.
     * @param {pacientesCreateManyArgs} args - Arguments to create many Pacientes.
     * @example
     * // Create many Pacientes
     * const pacientes = await prisma.pacientes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends pacientesCreateManyArgs>(args?: SelectSubset<T, pacientesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Pacientes.
     * @param {pacientesDeleteArgs} args - Arguments to delete one Pacientes.
     * @example
     * // Delete one Pacientes
     * const Pacientes = await prisma.pacientes.delete({
     *   where: {
     *     // ... filter to delete one Pacientes
     *   }
     * })
     * 
     */
    delete<T extends pacientesDeleteArgs>(args: SelectSubset<T, pacientesDeleteArgs<ExtArgs>>): Prisma__pacientesClient<$Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Pacientes.
     * @param {pacientesUpdateArgs} args - Arguments to update one Pacientes.
     * @example
     * // Update one Pacientes
     * const pacientes = await prisma.pacientes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends pacientesUpdateArgs>(args: SelectSubset<T, pacientesUpdateArgs<ExtArgs>>): Prisma__pacientesClient<$Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Pacientes.
     * @param {pacientesDeleteManyArgs} args - Arguments to filter Pacientes to delete.
     * @example
     * // Delete a few Pacientes
     * const { count } = await prisma.pacientes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends pacientesDeleteManyArgs>(args?: SelectSubset<T, pacientesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pacientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pacientesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pacientes
     * const pacientes = await prisma.pacientes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends pacientesUpdateManyArgs>(args: SelectSubset<T, pacientesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pacientes.
     * @param {pacientesUpsertArgs} args - Arguments to update or create a Pacientes.
     * @example
     * // Update or create a Pacientes
     * const pacientes = await prisma.pacientes.upsert({
     *   create: {
     *     // ... data to create a Pacientes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pacientes we want to update
     *   }
     * })
     */
    upsert<T extends pacientesUpsertArgs>(args: SelectSubset<T, pacientesUpsertArgs<ExtArgs>>): Prisma__pacientesClient<$Result.GetResult<Prisma.$pacientesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Pacientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pacientesCountArgs} args - Arguments to filter Pacientes to count.
     * @example
     * // Count the number of Pacientes
     * const count = await prisma.pacientes.count({
     *   where: {
     *     // ... the filter for the Pacientes we want to count
     *   }
     * })
    **/
    count<T extends pacientesCountArgs>(
      args?: Subset<T, pacientesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PacientesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pacientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacientesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PacientesAggregateArgs>(args: Subset<T, PacientesAggregateArgs>): Prisma.PrismaPromise<GetPacientesAggregateType<T>>

    /**
     * Group by Pacientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pacientesGroupByArgs} args - Group by arguments.
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
      T extends pacientesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pacientesGroupByArgs['orderBy'] }
        : { orderBy?: pacientesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, pacientesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPacientesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the pacientes model
   */
  readonly fields: pacientesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pacientes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pacientesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    consultas<T extends pacientes$consultasArgs<ExtArgs> = {}>(args?: Subset<T, pacientes$consultasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$consultasPayload<ExtArgs>, T, "findMany"> | Null>
    exames<T extends pacientes$examesArgs<ExtArgs> = {}>(args?: Subset<T, pacientes$examesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$examesPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the pacientes model
   */ 
  interface pacientesFieldRefs {
    readonly paciente_id: FieldRef<"pacientes", 'Int'>
    readonly paciente_nome: FieldRef<"pacientes", 'String'>
    readonly paciente_genero: FieldRef<"pacientes", 'String'>
    readonly paciente_nascimento: FieldRef<"pacientes", 'String'>
    readonly paciente_email: FieldRef<"pacientes", 'String'>
    readonly paciente_telefone: FieldRef<"pacientes", 'String'>
  }
    

  // Custom InputTypes
  /**
   * pacientes findUnique
   */
  export type pacientesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pacientesInclude<ExtArgs> | null
    /**
     * Filter, which pacientes to fetch.
     */
    where: pacientesWhereUniqueInput
  }

  /**
   * pacientes findUniqueOrThrow
   */
  export type pacientesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pacientesInclude<ExtArgs> | null
    /**
     * Filter, which pacientes to fetch.
     */
    where: pacientesWhereUniqueInput
  }

  /**
   * pacientes findFirst
   */
  export type pacientesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pacientesInclude<ExtArgs> | null
    /**
     * Filter, which pacientes to fetch.
     */
    where?: pacientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pacientes to fetch.
     */
    orderBy?: pacientesOrderByWithRelationInput | pacientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pacientes.
     */
    cursor?: pacientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pacientes.
     */
    distinct?: PacientesScalarFieldEnum | PacientesScalarFieldEnum[]
  }

  /**
   * pacientes findFirstOrThrow
   */
  export type pacientesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pacientesInclude<ExtArgs> | null
    /**
     * Filter, which pacientes to fetch.
     */
    where?: pacientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pacientes to fetch.
     */
    orderBy?: pacientesOrderByWithRelationInput | pacientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pacientes.
     */
    cursor?: pacientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pacientes.
     */
    distinct?: PacientesScalarFieldEnum | PacientesScalarFieldEnum[]
  }

  /**
   * pacientes findMany
   */
  export type pacientesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pacientesInclude<ExtArgs> | null
    /**
     * Filter, which pacientes to fetch.
     */
    where?: pacientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pacientes to fetch.
     */
    orderBy?: pacientesOrderByWithRelationInput | pacientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pacientes.
     */
    cursor?: pacientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pacientes.
     */
    skip?: number
    distinct?: PacientesScalarFieldEnum | PacientesScalarFieldEnum[]
  }

  /**
   * pacientes create
   */
  export type pacientesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pacientesInclude<ExtArgs> | null
    /**
     * The data needed to create a pacientes.
     */
    data: XOR<pacientesCreateInput, pacientesUncheckedCreateInput>
  }

  /**
   * pacientes createMany
   */
  export type pacientesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pacientes.
     */
    data: pacientesCreateManyInput | pacientesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pacientes update
   */
  export type pacientesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pacientesInclude<ExtArgs> | null
    /**
     * The data needed to update a pacientes.
     */
    data: XOR<pacientesUpdateInput, pacientesUncheckedUpdateInput>
    /**
     * Choose, which pacientes to update.
     */
    where: pacientesWhereUniqueInput
  }

  /**
   * pacientes updateMany
   */
  export type pacientesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pacientes.
     */
    data: XOR<pacientesUpdateManyMutationInput, pacientesUncheckedUpdateManyInput>
    /**
     * Filter which pacientes to update
     */
    where?: pacientesWhereInput
  }

  /**
   * pacientes upsert
   */
  export type pacientesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pacientesInclude<ExtArgs> | null
    /**
     * The filter to search for the pacientes to update in case it exists.
     */
    where: pacientesWhereUniqueInput
    /**
     * In case the pacientes found by the `where` argument doesn't exist, create a new pacientes with this data.
     */
    create: XOR<pacientesCreateInput, pacientesUncheckedCreateInput>
    /**
     * In case the pacientes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pacientesUpdateInput, pacientesUncheckedUpdateInput>
  }

  /**
   * pacientes delete
   */
  export type pacientesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pacientesInclude<ExtArgs> | null
    /**
     * Filter which pacientes to delete.
     */
    where: pacientesWhereUniqueInput
  }

  /**
   * pacientes deleteMany
   */
  export type pacientesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pacientes to delete
     */
    where?: pacientesWhereInput
  }

  /**
   * pacientes.consultas
   */
  export type pacientes$consultasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the consultas
     */
    select?: consultasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: consultasInclude<ExtArgs> | null
    where?: consultasWhereInput
    orderBy?: consultasOrderByWithRelationInput | consultasOrderByWithRelationInput[]
    cursor?: consultasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConsultasScalarFieldEnum | ConsultasScalarFieldEnum[]
  }

  /**
   * pacientes.exames
   */
  export type pacientes$examesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the exames
     */
    select?: examesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: examesInclude<ExtArgs> | null
    where?: examesWhereInput
    orderBy?: examesOrderByWithRelationInput | examesOrderByWithRelationInput[]
    cursor?: examesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExamesScalarFieldEnum | ExamesScalarFieldEnum[]
  }

  /**
   * pacientes without action
   */
  export type pacientesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pacientes
     */
    select?: pacientesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pacientesInclude<ExtArgs> | null
  }


  /**
   * Model pagamentos
   */

  export type AggregatePagamentos = {
    _count: PagamentosCountAggregateOutputType | null
    _avg: PagamentosAvgAggregateOutputType | null
    _sum: PagamentosSumAggregateOutputType | null
    _min: PagamentosMinAggregateOutputType | null
    _max: PagamentosMaxAggregateOutputType | null
  }

  export type PagamentosAvgAggregateOutputType = {
    pagamento_id: number | null
    pagamento_valor: number | null
    consulta_id: number | null
  }

  export type PagamentosSumAggregateOutputType = {
    pagamento_id: number | null
    pagamento_valor: number | null
    consulta_id: number | null
  }

  export type PagamentosMinAggregateOutputType = {
    pagamento_id: number | null
    pagamento_valor: number | null
    pagamento_data: string | null
    pagamento_status: string | null
    pagamento_metodo: string | null
    consulta_id: number | null
  }

  export type PagamentosMaxAggregateOutputType = {
    pagamento_id: number | null
    pagamento_valor: number | null
    pagamento_data: string | null
    pagamento_status: string | null
    pagamento_metodo: string | null
    consulta_id: number | null
  }

  export type PagamentosCountAggregateOutputType = {
    pagamento_id: number
    pagamento_valor: number
    pagamento_data: number
    pagamento_status: number
    pagamento_metodo: number
    consulta_id: number
    _all: number
  }


  export type PagamentosAvgAggregateInputType = {
    pagamento_id?: true
    pagamento_valor?: true
    consulta_id?: true
  }

  export type PagamentosSumAggregateInputType = {
    pagamento_id?: true
    pagamento_valor?: true
    consulta_id?: true
  }

  export type PagamentosMinAggregateInputType = {
    pagamento_id?: true
    pagamento_valor?: true
    pagamento_data?: true
    pagamento_status?: true
    pagamento_metodo?: true
    consulta_id?: true
  }

  export type PagamentosMaxAggregateInputType = {
    pagamento_id?: true
    pagamento_valor?: true
    pagamento_data?: true
    pagamento_status?: true
    pagamento_metodo?: true
    consulta_id?: true
  }

  export type PagamentosCountAggregateInputType = {
    pagamento_id?: true
    pagamento_valor?: true
    pagamento_data?: true
    pagamento_status?: true
    pagamento_metodo?: true
    consulta_id?: true
    _all?: true
  }

  export type PagamentosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pagamentos to aggregate.
     */
    where?: pagamentosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pagamentos to fetch.
     */
    orderBy?: pagamentosOrderByWithRelationInput | pagamentosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pagamentosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pagamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pagamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pagamentos
    **/
    _count?: true | PagamentosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PagamentosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PagamentosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PagamentosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PagamentosMaxAggregateInputType
  }

  export type GetPagamentosAggregateType<T extends PagamentosAggregateArgs> = {
        [P in keyof T & keyof AggregatePagamentos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePagamentos[P]>
      : GetScalarType<T[P], AggregatePagamentos[P]>
  }




  export type pagamentosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pagamentosWhereInput
    orderBy?: pagamentosOrderByWithAggregationInput | pagamentosOrderByWithAggregationInput[]
    by: PagamentosScalarFieldEnum[] | PagamentosScalarFieldEnum
    having?: pagamentosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PagamentosCountAggregateInputType | true
    _avg?: PagamentosAvgAggregateInputType
    _sum?: PagamentosSumAggregateInputType
    _min?: PagamentosMinAggregateInputType
    _max?: PagamentosMaxAggregateInputType
  }

  export type PagamentosGroupByOutputType = {
    pagamento_id: number
    pagamento_valor: number
    pagamento_data: string
    pagamento_status: string
    pagamento_metodo: string
    consulta_id: number
    _count: PagamentosCountAggregateOutputType | null
    _avg: PagamentosAvgAggregateOutputType | null
    _sum: PagamentosSumAggregateOutputType | null
    _min: PagamentosMinAggregateOutputType | null
    _max: PagamentosMaxAggregateOutputType | null
  }

  type GetPagamentosGroupByPayload<T extends pagamentosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PagamentosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PagamentosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PagamentosGroupByOutputType[P]>
            : GetScalarType<T[P], PagamentosGroupByOutputType[P]>
        }
      >
    >


  export type pagamentosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pagamento_id?: boolean
    pagamento_valor?: boolean
    pagamento_data?: boolean
    pagamento_status?: boolean
    pagamento_metodo?: boolean
    consulta_id?: boolean
    consultas?: boolean | consultasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pagamentos"]>


  export type pagamentosSelectScalar = {
    pagamento_id?: boolean
    pagamento_valor?: boolean
    pagamento_data?: boolean
    pagamento_status?: boolean
    pagamento_metodo?: boolean
    consulta_id?: boolean
  }

  export type pagamentosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    consultas?: boolean | consultasDefaultArgs<ExtArgs>
  }

  export type $pagamentosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pagamentos"
    objects: {
      consultas: Prisma.$consultasPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      pagamento_id: number
      pagamento_valor: number
      pagamento_data: string
      pagamento_status: string
      pagamento_metodo: string
      consulta_id: number
    }, ExtArgs["result"]["pagamentos"]>
    composites: {}
  }

  type pagamentosGetPayload<S extends boolean | null | undefined | pagamentosDefaultArgs> = $Result.GetResult<Prisma.$pagamentosPayload, S>

  type pagamentosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<pagamentosFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PagamentosCountAggregateInputType | true
    }

  export interface pagamentosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pagamentos'], meta: { name: 'pagamentos' } }
    /**
     * Find zero or one Pagamentos that matches the filter.
     * @param {pagamentosFindUniqueArgs} args - Arguments to find a Pagamentos
     * @example
     * // Get one Pagamentos
     * const pagamentos = await prisma.pagamentos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends pagamentosFindUniqueArgs>(args: SelectSubset<T, pagamentosFindUniqueArgs<ExtArgs>>): Prisma__pagamentosClient<$Result.GetResult<Prisma.$pagamentosPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Pagamentos that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {pagamentosFindUniqueOrThrowArgs} args - Arguments to find a Pagamentos
     * @example
     * // Get one Pagamentos
     * const pagamentos = await prisma.pagamentos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends pagamentosFindUniqueOrThrowArgs>(args: SelectSubset<T, pagamentosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__pagamentosClient<$Result.GetResult<Prisma.$pagamentosPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Pagamentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pagamentosFindFirstArgs} args - Arguments to find a Pagamentos
     * @example
     * // Get one Pagamentos
     * const pagamentos = await prisma.pagamentos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends pagamentosFindFirstArgs>(args?: SelectSubset<T, pagamentosFindFirstArgs<ExtArgs>>): Prisma__pagamentosClient<$Result.GetResult<Prisma.$pagamentosPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Pagamentos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pagamentosFindFirstOrThrowArgs} args - Arguments to find a Pagamentos
     * @example
     * // Get one Pagamentos
     * const pagamentos = await prisma.pagamentos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends pagamentosFindFirstOrThrowArgs>(args?: SelectSubset<T, pagamentosFindFirstOrThrowArgs<ExtArgs>>): Prisma__pagamentosClient<$Result.GetResult<Prisma.$pagamentosPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Pagamentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pagamentosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pagamentos
     * const pagamentos = await prisma.pagamentos.findMany()
     * 
     * // Get first 10 Pagamentos
     * const pagamentos = await prisma.pagamentos.findMany({ take: 10 })
     * 
     * // Only select the `pagamento_id`
     * const pagamentosWithPagamento_idOnly = await prisma.pagamentos.findMany({ select: { pagamento_id: true } })
     * 
     */
    findMany<T extends pagamentosFindManyArgs>(args?: SelectSubset<T, pagamentosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pagamentosPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Pagamentos.
     * @param {pagamentosCreateArgs} args - Arguments to create a Pagamentos.
     * @example
     * // Create one Pagamentos
     * const Pagamentos = await prisma.pagamentos.create({
     *   data: {
     *     // ... data to create a Pagamentos
     *   }
     * })
     * 
     */
    create<T extends pagamentosCreateArgs>(args: SelectSubset<T, pagamentosCreateArgs<ExtArgs>>): Prisma__pagamentosClient<$Result.GetResult<Prisma.$pagamentosPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Pagamentos.
     * @param {pagamentosCreateManyArgs} args - Arguments to create many Pagamentos.
     * @example
     * // Create many Pagamentos
     * const pagamentos = await prisma.pagamentos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends pagamentosCreateManyArgs>(args?: SelectSubset<T, pagamentosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Pagamentos.
     * @param {pagamentosDeleteArgs} args - Arguments to delete one Pagamentos.
     * @example
     * // Delete one Pagamentos
     * const Pagamentos = await prisma.pagamentos.delete({
     *   where: {
     *     // ... filter to delete one Pagamentos
     *   }
     * })
     * 
     */
    delete<T extends pagamentosDeleteArgs>(args: SelectSubset<T, pagamentosDeleteArgs<ExtArgs>>): Prisma__pagamentosClient<$Result.GetResult<Prisma.$pagamentosPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Pagamentos.
     * @param {pagamentosUpdateArgs} args - Arguments to update one Pagamentos.
     * @example
     * // Update one Pagamentos
     * const pagamentos = await prisma.pagamentos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends pagamentosUpdateArgs>(args: SelectSubset<T, pagamentosUpdateArgs<ExtArgs>>): Prisma__pagamentosClient<$Result.GetResult<Prisma.$pagamentosPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Pagamentos.
     * @param {pagamentosDeleteManyArgs} args - Arguments to filter Pagamentos to delete.
     * @example
     * // Delete a few Pagamentos
     * const { count } = await prisma.pagamentos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends pagamentosDeleteManyArgs>(args?: SelectSubset<T, pagamentosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pagamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pagamentosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pagamentos
     * const pagamentos = await prisma.pagamentos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends pagamentosUpdateManyArgs>(args: SelectSubset<T, pagamentosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pagamentos.
     * @param {pagamentosUpsertArgs} args - Arguments to update or create a Pagamentos.
     * @example
     * // Update or create a Pagamentos
     * const pagamentos = await prisma.pagamentos.upsert({
     *   create: {
     *     // ... data to create a Pagamentos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pagamentos we want to update
     *   }
     * })
     */
    upsert<T extends pagamentosUpsertArgs>(args: SelectSubset<T, pagamentosUpsertArgs<ExtArgs>>): Prisma__pagamentosClient<$Result.GetResult<Prisma.$pagamentosPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Pagamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pagamentosCountArgs} args - Arguments to filter Pagamentos to count.
     * @example
     * // Count the number of Pagamentos
     * const count = await prisma.pagamentos.count({
     *   where: {
     *     // ... the filter for the Pagamentos we want to count
     *   }
     * })
    **/
    count<T extends pagamentosCountArgs>(
      args?: Subset<T, pagamentosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PagamentosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pagamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagamentosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PagamentosAggregateArgs>(args: Subset<T, PagamentosAggregateArgs>): Prisma.PrismaPromise<GetPagamentosAggregateType<T>>

    /**
     * Group by Pagamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pagamentosGroupByArgs} args - Group by arguments.
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
      T extends pagamentosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pagamentosGroupByArgs['orderBy'] }
        : { orderBy?: pagamentosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, pagamentosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPagamentosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the pagamentos model
   */
  readonly fields: pagamentosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pagamentos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pagamentosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    consultas<T extends consultasDefaultArgs<ExtArgs> = {}>(args?: Subset<T, consultasDefaultArgs<ExtArgs>>): Prisma__consultasClient<$Result.GetResult<Prisma.$consultasPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the pagamentos model
   */ 
  interface pagamentosFieldRefs {
    readonly pagamento_id: FieldRef<"pagamentos", 'Int'>
    readonly pagamento_valor: FieldRef<"pagamentos", 'Int'>
    readonly pagamento_data: FieldRef<"pagamentos", 'String'>
    readonly pagamento_status: FieldRef<"pagamentos", 'String'>
    readonly pagamento_metodo: FieldRef<"pagamentos", 'String'>
    readonly consulta_id: FieldRef<"pagamentos", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * pagamentos findUnique
   */
  export type pagamentosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagamentos
     */
    select?: pagamentosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagamentosInclude<ExtArgs> | null
    /**
     * Filter, which pagamentos to fetch.
     */
    where: pagamentosWhereUniqueInput
  }

  /**
   * pagamentos findUniqueOrThrow
   */
  export type pagamentosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagamentos
     */
    select?: pagamentosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagamentosInclude<ExtArgs> | null
    /**
     * Filter, which pagamentos to fetch.
     */
    where: pagamentosWhereUniqueInput
  }

  /**
   * pagamentos findFirst
   */
  export type pagamentosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagamentos
     */
    select?: pagamentosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagamentosInclude<ExtArgs> | null
    /**
     * Filter, which pagamentos to fetch.
     */
    where?: pagamentosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pagamentos to fetch.
     */
    orderBy?: pagamentosOrderByWithRelationInput | pagamentosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pagamentos.
     */
    cursor?: pagamentosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pagamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pagamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pagamentos.
     */
    distinct?: PagamentosScalarFieldEnum | PagamentosScalarFieldEnum[]
  }

  /**
   * pagamentos findFirstOrThrow
   */
  export type pagamentosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagamentos
     */
    select?: pagamentosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagamentosInclude<ExtArgs> | null
    /**
     * Filter, which pagamentos to fetch.
     */
    where?: pagamentosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pagamentos to fetch.
     */
    orderBy?: pagamentosOrderByWithRelationInput | pagamentosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pagamentos.
     */
    cursor?: pagamentosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pagamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pagamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pagamentos.
     */
    distinct?: PagamentosScalarFieldEnum | PagamentosScalarFieldEnum[]
  }

  /**
   * pagamentos findMany
   */
  export type pagamentosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagamentos
     */
    select?: pagamentosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagamentosInclude<ExtArgs> | null
    /**
     * Filter, which pagamentos to fetch.
     */
    where?: pagamentosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pagamentos to fetch.
     */
    orderBy?: pagamentosOrderByWithRelationInput | pagamentosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pagamentos.
     */
    cursor?: pagamentosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pagamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pagamentos.
     */
    skip?: number
    distinct?: PagamentosScalarFieldEnum | PagamentosScalarFieldEnum[]
  }

  /**
   * pagamentos create
   */
  export type pagamentosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagamentos
     */
    select?: pagamentosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagamentosInclude<ExtArgs> | null
    /**
     * The data needed to create a pagamentos.
     */
    data: XOR<pagamentosCreateInput, pagamentosUncheckedCreateInput>
  }

  /**
   * pagamentos createMany
   */
  export type pagamentosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pagamentos.
     */
    data: pagamentosCreateManyInput | pagamentosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pagamentos update
   */
  export type pagamentosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagamentos
     */
    select?: pagamentosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagamentosInclude<ExtArgs> | null
    /**
     * The data needed to update a pagamentos.
     */
    data: XOR<pagamentosUpdateInput, pagamentosUncheckedUpdateInput>
    /**
     * Choose, which pagamentos to update.
     */
    where: pagamentosWhereUniqueInput
  }

  /**
   * pagamentos updateMany
   */
  export type pagamentosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pagamentos.
     */
    data: XOR<pagamentosUpdateManyMutationInput, pagamentosUncheckedUpdateManyInput>
    /**
     * Filter which pagamentos to update
     */
    where?: pagamentosWhereInput
  }

  /**
   * pagamentos upsert
   */
  export type pagamentosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagamentos
     */
    select?: pagamentosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagamentosInclude<ExtArgs> | null
    /**
     * The filter to search for the pagamentos to update in case it exists.
     */
    where: pagamentosWhereUniqueInput
    /**
     * In case the pagamentos found by the `where` argument doesn't exist, create a new pagamentos with this data.
     */
    create: XOR<pagamentosCreateInput, pagamentosUncheckedCreateInput>
    /**
     * In case the pagamentos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pagamentosUpdateInput, pagamentosUncheckedUpdateInput>
  }

  /**
   * pagamentos delete
   */
  export type pagamentosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagamentos
     */
    select?: pagamentosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagamentosInclude<ExtArgs> | null
    /**
     * Filter which pagamentos to delete.
     */
    where: pagamentosWhereUniqueInput
  }

  /**
   * pagamentos deleteMany
   */
  export type pagamentosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pagamentos to delete
     */
    where?: pagamentosWhereInput
  }

  /**
   * pagamentos without action
   */
  export type pagamentosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pagamentos
     */
    select?: pagamentosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pagamentosInclude<ExtArgs> | null
  }


  /**
   * Model planos
   */

  export type AggregatePlanos = {
    _count: PlanosCountAggregateOutputType | null
    _avg: PlanosAvgAggregateOutputType | null
    _sum: PlanosSumAggregateOutputType | null
    _min: PlanosMinAggregateOutputType | null
    _max: PlanosMaxAggregateOutputType | null
  }

  export type PlanosAvgAggregateOutputType = {
    plano_id: number | null
    operadora_id: number | null
  }

  export type PlanosSumAggregateOutputType = {
    plano_id: number | null
    operadora_id: number | null
  }

  export type PlanosMinAggregateOutputType = {
    plano_id: number | null
    plano_nome: string | null
    operadora_id: number | null
  }

  export type PlanosMaxAggregateOutputType = {
    plano_id: number | null
    plano_nome: string | null
    operadora_id: number | null
  }

  export type PlanosCountAggregateOutputType = {
    plano_id: number
    plano_nome: number
    operadora_id: number
    _all: number
  }


  export type PlanosAvgAggregateInputType = {
    plano_id?: true
    operadora_id?: true
  }

  export type PlanosSumAggregateInputType = {
    plano_id?: true
    operadora_id?: true
  }

  export type PlanosMinAggregateInputType = {
    plano_id?: true
    plano_nome?: true
    operadora_id?: true
  }

  export type PlanosMaxAggregateInputType = {
    plano_id?: true
    plano_nome?: true
    operadora_id?: true
  }

  export type PlanosCountAggregateInputType = {
    plano_id?: true
    plano_nome?: true
    operadora_id?: true
    _all?: true
  }

  export type PlanosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which planos to aggregate.
     */
    where?: planosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of planos to fetch.
     */
    orderBy?: planosOrderByWithRelationInput | planosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: planosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` planos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` planos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned planos
    **/
    _count?: true | PlanosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlanosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlanosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlanosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlanosMaxAggregateInputType
  }

  export type GetPlanosAggregateType<T extends PlanosAggregateArgs> = {
        [P in keyof T & keyof AggregatePlanos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlanos[P]>
      : GetScalarType<T[P], AggregatePlanos[P]>
  }




  export type planosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: planosWhereInput
    orderBy?: planosOrderByWithAggregationInput | planosOrderByWithAggregationInput[]
    by: PlanosScalarFieldEnum[] | PlanosScalarFieldEnum
    having?: planosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlanosCountAggregateInputType | true
    _avg?: PlanosAvgAggregateInputType
    _sum?: PlanosSumAggregateInputType
    _min?: PlanosMinAggregateInputType
    _max?: PlanosMaxAggregateInputType
  }

  export type PlanosGroupByOutputType = {
    plano_id: number
    plano_nome: string
    operadora_id: number
    _count: PlanosCountAggregateOutputType | null
    _avg: PlanosAvgAggregateOutputType | null
    _sum: PlanosSumAggregateOutputType | null
    _min: PlanosMinAggregateOutputType | null
    _max: PlanosMaxAggregateOutputType | null
  }

  type GetPlanosGroupByPayload<T extends planosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlanosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlanosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlanosGroupByOutputType[P]>
            : GetScalarType<T[P], PlanosGroupByOutputType[P]>
        }
      >
    >


  export type planosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    plano_id?: boolean
    plano_nome?: boolean
    operadora_id?: boolean
    consultas?: boolean | planos$consultasArgs<ExtArgs>
    operadoras?: boolean | operadorasDefaultArgs<ExtArgs>
    _count?: boolean | PlanosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["planos"]>


  export type planosSelectScalar = {
    plano_id?: boolean
    plano_nome?: boolean
    operadora_id?: boolean
  }

  export type planosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    consultas?: boolean | planos$consultasArgs<ExtArgs>
    operadoras?: boolean | operadorasDefaultArgs<ExtArgs>
    _count?: boolean | PlanosCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $planosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "planos"
    objects: {
      consultas: Prisma.$consultasPayload<ExtArgs>[]
      operadoras: Prisma.$operadorasPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      plano_id: number
      plano_nome: string
      operadora_id: number
    }, ExtArgs["result"]["planos"]>
    composites: {}
  }

  type planosGetPayload<S extends boolean | null | undefined | planosDefaultArgs> = $Result.GetResult<Prisma.$planosPayload, S>

  type planosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<planosFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PlanosCountAggregateInputType | true
    }

  export interface planosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['planos'], meta: { name: 'planos' } }
    /**
     * Find zero or one Planos that matches the filter.
     * @param {planosFindUniqueArgs} args - Arguments to find a Planos
     * @example
     * // Get one Planos
     * const planos = await prisma.planos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends planosFindUniqueArgs>(args: SelectSubset<T, planosFindUniqueArgs<ExtArgs>>): Prisma__planosClient<$Result.GetResult<Prisma.$planosPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Planos that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {planosFindUniqueOrThrowArgs} args - Arguments to find a Planos
     * @example
     * // Get one Planos
     * const planos = await prisma.planos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends planosFindUniqueOrThrowArgs>(args: SelectSubset<T, planosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__planosClient<$Result.GetResult<Prisma.$planosPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Planos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {planosFindFirstArgs} args - Arguments to find a Planos
     * @example
     * // Get one Planos
     * const planos = await prisma.planos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends planosFindFirstArgs>(args?: SelectSubset<T, planosFindFirstArgs<ExtArgs>>): Prisma__planosClient<$Result.GetResult<Prisma.$planosPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Planos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {planosFindFirstOrThrowArgs} args - Arguments to find a Planos
     * @example
     * // Get one Planos
     * const planos = await prisma.planos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends planosFindFirstOrThrowArgs>(args?: SelectSubset<T, planosFindFirstOrThrowArgs<ExtArgs>>): Prisma__planosClient<$Result.GetResult<Prisma.$planosPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Planos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {planosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Planos
     * const planos = await prisma.planos.findMany()
     * 
     * // Get first 10 Planos
     * const planos = await prisma.planos.findMany({ take: 10 })
     * 
     * // Only select the `plano_id`
     * const planosWithPlano_idOnly = await prisma.planos.findMany({ select: { plano_id: true } })
     * 
     */
    findMany<T extends planosFindManyArgs>(args?: SelectSubset<T, planosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$planosPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Planos.
     * @param {planosCreateArgs} args - Arguments to create a Planos.
     * @example
     * // Create one Planos
     * const Planos = await prisma.planos.create({
     *   data: {
     *     // ... data to create a Planos
     *   }
     * })
     * 
     */
    create<T extends planosCreateArgs>(args: SelectSubset<T, planosCreateArgs<ExtArgs>>): Prisma__planosClient<$Result.GetResult<Prisma.$planosPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Planos.
     * @param {planosCreateManyArgs} args - Arguments to create many Planos.
     * @example
     * // Create many Planos
     * const planos = await prisma.planos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends planosCreateManyArgs>(args?: SelectSubset<T, planosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Planos.
     * @param {planosDeleteArgs} args - Arguments to delete one Planos.
     * @example
     * // Delete one Planos
     * const Planos = await prisma.planos.delete({
     *   where: {
     *     // ... filter to delete one Planos
     *   }
     * })
     * 
     */
    delete<T extends planosDeleteArgs>(args: SelectSubset<T, planosDeleteArgs<ExtArgs>>): Prisma__planosClient<$Result.GetResult<Prisma.$planosPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Planos.
     * @param {planosUpdateArgs} args - Arguments to update one Planos.
     * @example
     * // Update one Planos
     * const planos = await prisma.planos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends planosUpdateArgs>(args: SelectSubset<T, planosUpdateArgs<ExtArgs>>): Prisma__planosClient<$Result.GetResult<Prisma.$planosPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Planos.
     * @param {planosDeleteManyArgs} args - Arguments to filter Planos to delete.
     * @example
     * // Delete a few Planos
     * const { count } = await prisma.planos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends planosDeleteManyArgs>(args?: SelectSubset<T, planosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Planos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {planosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Planos
     * const planos = await prisma.planos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends planosUpdateManyArgs>(args: SelectSubset<T, planosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Planos.
     * @param {planosUpsertArgs} args - Arguments to update or create a Planos.
     * @example
     * // Update or create a Planos
     * const planos = await prisma.planos.upsert({
     *   create: {
     *     // ... data to create a Planos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Planos we want to update
     *   }
     * })
     */
    upsert<T extends planosUpsertArgs>(args: SelectSubset<T, planosUpsertArgs<ExtArgs>>): Prisma__planosClient<$Result.GetResult<Prisma.$planosPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Planos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {planosCountArgs} args - Arguments to filter Planos to count.
     * @example
     * // Count the number of Planos
     * const count = await prisma.planos.count({
     *   where: {
     *     // ... the filter for the Planos we want to count
     *   }
     * })
    **/
    count<T extends planosCountArgs>(
      args?: Subset<T, planosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlanosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Planos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlanosAggregateArgs>(args: Subset<T, PlanosAggregateArgs>): Prisma.PrismaPromise<GetPlanosAggregateType<T>>

    /**
     * Group by Planos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {planosGroupByArgs} args - Group by arguments.
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
      T extends planosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: planosGroupByArgs['orderBy'] }
        : { orderBy?: planosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, planosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlanosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the planos model
   */
  readonly fields: planosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for planos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__planosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    consultas<T extends planos$consultasArgs<ExtArgs> = {}>(args?: Subset<T, planos$consultasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$consultasPayload<ExtArgs>, T, "findMany"> | Null>
    operadoras<T extends operadorasDefaultArgs<ExtArgs> = {}>(args?: Subset<T, operadorasDefaultArgs<ExtArgs>>): Prisma__operadorasClient<$Result.GetResult<Prisma.$operadorasPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the planos model
   */ 
  interface planosFieldRefs {
    readonly plano_id: FieldRef<"planos", 'Int'>
    readonly plano_nome: FieldRef<"planos", 'String'>
    readonly operadora_id: FieldRef<"planos", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * planos findUnique
   */
  export type planosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the planos
     */
    select?: planosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: planosInclude<ExtArgs> | null
    /**
     * Filter, which planos to fetch.
     */
    where: planosWhereUniqueInput
  }

  /**
   * planos findUniqueOrThrow
   */
  export type planosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the planos
     */
    select?: planosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: planosInclude<ExtArgs> | null
    /**
     * Filter, which planos to fetch.
     */
    where: planosWhereUniqueInput
  }

  /**
   * planos findFirst
   */
  export type planosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the planos
     */
    select?: planosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: planosInclude<ExtArgs> | null
    /**
     * Filter, which planos to fetch.
     */
    where?: planosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of planos to fetch.
     */
    orderBy?: planosOrderByWithRelationInput | planosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for planos.
     */
    cursor?: planosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` planos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` planos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of planos.
     */
    distinct?: PlanosScalarFieldEnum | PlanosScalarFieldEnum[]
  }

  /**
   * planos findFirstOrThrow
   */
  export type planosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the planos
     */
    select?: planosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: planosInclude<ExtArgs> | null
    /**
     * Filter, which planos to fetch.
     */
    where?: planosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of planos to fetch.
     */
    orderBy?: planosOrderByWithRelationInput | planosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for planos.
     */
    cursor?: planosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` planos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` planos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of planos.
     */
    distinct?: PlanosScalarFieldEnum | PlanosScalarFieldEnum[]
  }

  /**
   * planos findMany
   */
  export type planosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the planos
     */
    select?: planosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: planosInclude<ExtArgs> | null
    /**
     * Filter, which planos to fetch.
     */
    where?: planosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of planos to fetch.
     */
    orderBy?: planosOrderByWithRelationInput | planosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing planos.
     */
    cursor?: planosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` planos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` planos.
     */
    skip?: number
    distinct?: PlanosScalarFieldEnum | PlanosScalarFieldEnum[]
  }

  /**
   * planos create
   */
  export type planosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the planos
     */
    select?: planosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: planosInclude<ExtArgs> | null
    /**
     * The data needed to create a planos.
     */
    data: XOR<planosCreateInput, planosUncheckedCreateInput>
  }

  /**
   * planos createMany
   */
  export type planosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many planos.
     */
    data: planosCreateManyInput | planosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * planos update
   */
  export type planosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the planos
     */
    select?: planosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: planosInclude<ExtArgs> | null
    /**
     * The data needed to update a planos.
     */
    data: XOR<planosUpdateInput, planosUncheckedUpdateInput>
    /**
     * Choose, which planos to update.
     */
    where: planosWhereUniqueInput
  }

  /**
   * planos updateMany
   */
  export type planosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update planos.
     */
    data: XOR<planosUpdateManyMutationInput, planosUncheckedUpdateManyInput>
    /**
     * Filter which planos to update
     */
    where?: planosWhereInput
  }

  /**
   * planos upsert
   */
  export type planosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the planos
     */
    select?: planosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: planosInclude<ExtArgs> | null
    /**
     * The filter to search for the planos to update in case it exists.
     */
    where: planosWhereUniqueInput
    /**
     * In case the planos found by the `where` argument doesn't exist, create a new planos with this data.
     */
    create: XOR<planosCreateInput, planosUncheckedCreateInput>
    /**
     * In case the planos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<planosUpdateInput, planosUncheckedUpdateInput>
  }

  /**
   * planos delete
   */
  export type planosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the planos
     */
    select?: planosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: planosInclude<ExtArgs> | null
    /**
     * Filter which planos to delete.
     */
    where: planosWhereUniqueInput
  }

  /**
   * planos deleteMany
   */
  export type planosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which planos to delete
     */
    where?: planosWhereInput
  }

  /**
   * planos.consultas
   */
  export type planos$consultasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the consultas
     */
    select?: consultasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: consultasInclude<ExtArgs> | null
    where?: consultasWhereInput
    orderBy?: consultasOrderByWithRelationInput | consultasOrderByWithRelationInput[]
    cursor?: consultasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConsultasScalarFieldEnum | ConsultasScalarFieldEnum[]
  }

  /**
   * planos without action
   */
  export type planosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the planos
     */
    select?: planosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: planosInclude<ExtArgs> | null
  }


  /**
   * Model status
   */

  export type AggregateStatus = {
    _count: StatusCountAggregateOutputType | null
    _avg: StatusAvgAggregateOutputType | null
    _sum: StatusSumAggregateOutputType | null
    _min: StatusMinAggregateOutputType | null
    _max: StatusMaxAggregateOutputType | null
  }

  export type StatusAvgAggregateOutputType = {
    status_id: number | null
  }

  export type StatusSumAggregateOutputType = {
    status_id: number | null
  }

  export type StatusMinAggregateOutputType = {
    status_id: number | null
    status_nome: string | null
  }

  export type StatusMaxAggregateOutputType = {
    status_id: number | null
    status_nome: string | null
  }

  export type StatusCountAggregateOutputType = {
    status_id: number
    status_nome: number
    _all: number
  }


  export type StatusAvgAggregateInputType = {
    status_id?: true
  }

  export type StatusSumAggregateInputType = {
    status_id?: true
  }

  export type StatusMinAggregateInputType = {
    status_id?: true
    status_nome?: true
  }

  export type StatusMaxAggregateInputType = {
    status_id?: true
    status_nome?: true
  }

  export type StatusCountAggregateInputType = {
    status_id?: true
    status_nome?: true
    _all?: true
  }

  export type StatusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which status to aggregate.
     */
    where?: statusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of statuses to fetch.
     */
    orderBy?: statusOrderByWithRelationInput | statusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: statusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned statuses
    **/
    _count?: true | StatusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StatusAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StatusSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StatusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StatusMaxAggregateInputType
  }

  export type GetStatusAggregateType<T extends StatusAggregateArgs> = {
        [P in keyof T & keyof AggregateStatus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStatus[P]>
      : GetScalarType<T[P], AggregateStatus[P]>
  }




  export type statusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: statusWhereInput
    orderBy?: statusOrderByWithAggregationInput | statusOrderByWithAggregationInput[]
    by: StatusScalarFieldEnum[] | StatusScalarFieldEnum
    having?: statusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StatusCountAggregateInputType | true
    _avg?: StatusAvgAggregateInputType
    _sum?: StatusSumAggregateInputType
    _min?: StatusMinAggregateInputType
    _max?: StatusMaxAggregateInputType
  }

  export type StatusGroupByOutputType = {
    status_id: number
    status_nome: string
    _count: StatusCountAggregateOutputType | null
    _avg: StatusAvgAggregateOutputType | null
    _sum: StatusSumAggregateOutputType | null
    _min: StatusMinAggregateOutputType | null
    _max: StatusMaxAggregateOutputType | null
  }

  type GetStatusGroupByPayload<T extends statusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StatusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StatusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StatusGroupByOutputType[P]>
            : GetScalarType<T[P], StatusGroupByOutputType[P]>
        }
      >
    >


  export type statusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    status_id?: boolean
    status_nome?: boolean
    consultas?: boolean | status$consultasArgs<ExtArgs>
    _count?: boolean | StatusCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["status"]>


  export type statusSelectScalar = {
    status_id?: boolean
    status_nome?: boolean
  }

  export type statusInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    consultas?: boolean | status$consultasArgs<ExtArgs>
    _count?: boolean | StatusCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $statusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "status"
    objects: {
      consultas: Prisma.$consultasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      status_id: number
      status_nome: string
    }, ExtArgs["result"]["status"]>
    composites: {}
  }

  type statusGetPayload<S extends boolean | null | undefined | statusDefaultArgs> = $Result.GetResult<Prisma.$statusPayload, S>

  type statusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<statusFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StatusCountAggregateInputType | true
    }

  export interface statusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['status'], meta: { name: 'status' } }
    /**
     * Find zero or one Status that matches the filter.
     * @param {statusFindUniqueArgs} args - Arguments to find a Status
     * @example
     * // Get one Status
     * const status = await prisma.status.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends statusFindUniqueArgs>(args: SelectSubset<T, statusFindUniqueArgs<ExtArgs>>): Prisma__statusClient<$Result.GetResult<Prisma.$statusPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Status that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {statusFindUniqueOrThrowArgs} args - Arguments to find a Status
     * @example
     * // Get one Status
     * const status = await prisma.status.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends statusFindUniqueOrThrowArgs>(args: SelectSubset<T, statusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__statusClient<$Result.GetResult<Prisma.$statusPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Status that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {statusFindFirstArgs} args - Arguments to find a Status
     * @example
     * // Get one Status
     * const status = await prisma.status.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends statusFindFirstArgs>(args?: SelectSubset<T, statusFindFirstArgs<ExtArgs>>): Prisma__statusClient<$Result.GetResult<Prisma.$statusPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Status that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {statusFindFirstOrThrowArgs} args - Arguments to find a Status
     * @example
     * // Get one Status
     * const status = await prisma.status.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends statusFindFirstOrThrowArgs>(args?: SelectSubset<T, statusFindFirstOrThrowArgs<ExtArgs>>): Prisma__statusClient<$Result.GetResult<Prisma.$statusPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Statuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {statusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Statuses
     * const statuses = await prisma.status.findMany()
     * 
     * // Get first 10 Statuses
     * const statuses = await prisma.status.findMany({ take: 10 })
     * 
     * // Only select the `status_id`
     * const statusWithStatus_idOnly = await prisma.status.findMany({ select: { status_id: true } })
     * 
     */
    findMany<T extends statusFindManyArgs>(args?: SelectSubset<T, statusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$statusPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Status.
     * @param {statusCreateArgs} args - Arguments to create a Status.
     * @example
     * // Create one Status
     * const Status = await prisma.status.create({
     *   data: {
     *     // ... data to create a Status
     *   }
     * })
     * 
     */
    create<T extends statusCreateArgs>(args: SelectSubset<T, statusCreateArgs<ExtArgs>>): Prisma__statusClient<$Result.GetResult<Prisma.$statusPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Statuses.
     * @param {statusCreateManyArgs} args - Arguments to create many Statuses.
     * @example
     * // Create many Statuses
     * const status = await prisma.status.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends statusCreateManyArgs>(args?: SelectSubset<T, statusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Status.
     * @param {statusDeleteArgs} args - Arguments to delete one Status.
     * @example
     * // Delete one Status
     * const Status = await prisma.status.delete({
     *   where: {
     *     // ... filter to delete one Status
     *   }
     * })
     * 
     */
    delete<T extends statusDeleteArgs>(args: SelectSubset<T, statusDeleteArgs<ExtArgs>>): Prisma__statusClient<$Result.GetResult<Prisma.$statusPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Status.
     * @param {statusUpdateArgs} args - Arguments to update one Status.
     * @example
     * // Update one Status
     * const status = await prisma.status.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends statusUpdateArgs>(args: SelectSubset<T, statusUpdateArgs<ExtArgs>>): Prisma__statusClient<$Result.GetResult<Prisma.$statusPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Statuses.
     * @param {statusDeleteManyArgs} args - Arguments to filter Statuses to delete.
     * @example
     * // Delete a few Statuses
     * const { count } = await prisma.status.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends statusDeleteManyArgs>(args?: SelectSubset<T, statusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {statusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Statuses
     * const status = await prisma.status.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends statusUpdateManyArgs>(args: SelectSubset<T, statusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Status.
     * @param {statusUpsertArgs} args - Arguments to update or create a Status.
     * @example
     * // Update or create a Status
     * const status = await prisma.status.upsert({
     *   create: {
     *     // ... data to create a Status
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Status we want to update
     *   }
     * })
     */
    upsert<T extends statusUpsertArgs>(args: SelectSubset<T, statusUpsertArgs<ExtArgs>>): Prisma__statusClient<$Result.GetResult<Prisma.$statusPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {statusCountArgs} args - Arguments to filter Statuses to count.
     * @example
     * // Count the number of Statuses
     * const count = await prisma.status.count({
     *   where: {
     *     // ... the filter for the Statuses we want to count
     *   }
     * })
    **/
    count<T extends statusCountArgs>(
      args?: Subset<T, statusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StatusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Status.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StatusAggregateArgs>(args: Subset<T, StatusAggregateArgs>): Prisma.PrismaPromise<GetStatusAggregateType<T>>

    /**
     * Group by Status.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {statusGroupByArgs} args - Group by arguments.
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
      T extends statusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: statusGroupByArgs['orderBy'] }
        : { orderBy?: statusGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, statusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStatusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the status model
   */
  readonly fields: statusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for status.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__statusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    consultas<T extends status$consultasArgs<ExtArgs> = {}>(args?: Subset<T, status$consultasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$consultasPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the status model
   */ 
  interface statusFieldRefs {
    readonly status_id: FieldRef<"status", 'Int'>
    readonly status_nome: FieldRef<"status", 'String'>
  }
    

  // Custom InputTypes
  /**
   * status findUnique
   */
  export type statusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the status
     */
    select?: statusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: statusInclude<ExtArgs> | null
    /**
     * Filter, which status to fetch.
     */
    where: statusWhereUniqueInput
  }

  /**
   * status findUniqueOrThrow
   */
  export type statusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the status
     */
    select?: statusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: statusInclude<ExtArgs> | null
    /**
     * Filter, which status to fetch.
     */
    where: statusWhereUniqueInput
  }

  /**
   * status findFirst
   */
  export type statusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the status
     */
    select?: statusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: statusInclude<ExtArgs> | null
    /**
     * Filter, which status to fetch.
     */
    where?: statusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of statuses to fetch.
     */
    orderBy?: statusOrderByWithRelationInput | statusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for statuses.
     */
    cursor?: statusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of statuses.
     */
    distinct?: StatusScalarFieldEnum | StatusScalarFieldEnum[]
  }

  /**
   * status findFirstOrThrow
   */
  export type statusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the status
     */
    select?: statusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: statusInclude<ExtArgs> | null
    /**
     * Filter, which status to fetch.
     */
    where?: statusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of statuses to fetch.
     */
    orderBy?: statusOrderByWithRelationInput | statusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for statuses.
     */
    cursor?: statusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of statuses.
     */
    distinct?: StatusScalarFieldEnum | StatusScalarFieldEnum[]
  }

  /**
   * status findMany
   */
  export type statusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the status
     */
    select?: statusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: statusInclude<ExtArgs> | null
    /**
     * Filter, which statuses to fetch.
     */
    where?: statusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of statuses to fetch.
     */
    orderBy?: statusOrderByWithRelationInput | statusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing statuses.
     */
    cursor?: statusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` statuses.
     */
    skip?: number
    distinct?: StatusScalarFieldEnum | StatusScalarFieldEnum[]
  }

  /**
   * status create
   */
  export type statusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the status
     */
    select?: statusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: statusInclude<ExtArgs> | null
    /**
     * The data needed to create a status.
     */
    data: XOR<statusCreateInput, statusUncheckedCreateInput>
  }

  /**
   * status createMany
   */
  export type statusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many statuses.
     */
    data: statusCreateManyInput | statusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * status update
   */
  export type statusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the status
     */
    select?: statusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: statusInclude<ExtArgs> | null
    /**
     * The data needed to update a status.
     */
    data: XOR<statusUpdateInput, statusUncheckedUpdateInput>
    /**
     * Choose, which status to update.
     */
    where: statusWhereUniqueInput
  }

  /**
   * status updateMany
   */
  export type statusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update statuses.
     */
    data: XOR<statusUpdateManyMutationInput, statusUncheckedUpdateManyInput>
    /**
     * Filter which statuses to update
     */
    where?: statusWhereInput
  }

  /**
   * status upsert
   */
  export type statusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the status
     */
    select?: statusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: statusInclude<ExtArgs> | null
    /**
     * The filter to search for the status to update in case it exists.
     */
    where: statusWhereUniqueInput
    /**
     * In case the status found by the `where` argument doesn't exist, create a new status with this data.
     */
    create: XOR<statusCreateInput, statusUncheckedCreateInput>
    /**
     * In case the status was found with the provided `where` argument, update it with this data.
     */
    update: XOR<statusUpdateInput, statusUncheckedUpdateInput>
  }

  /**
   * status delete
   */
  export type statusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the status
     */
    select?: statusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: statusInclude<ExtArgs> | null
    /**
     * Filter which status to delete.
     */
    where: statusWhereUniqueInput
  }

  /**
   * status deleteMany
   */
  export type statusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which statuses to delete
     */
    where?: statusWhereInput
  }

  /**
   * status.consultas
   */
  export type status$consultasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the consultas
     */
    select?: consultasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: consultasInclude<ExtArgs> | null
    where?: consultasWhereInput
    orderBy?: consultasOrderByWithRelationInput | consultasOrderByWithRelationInput[]
    cursor?: consultasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConsultasScalarFieldEnum | ConsultasScalarFieldEnum[]
  }

  /**
   * status without action
   */
  export type statusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the status
     */
    select?: statusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: statusInclude<ExtArgs> | null
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


  export const ConsultasScalarFieldEnum: {
    consulta_id: 'consulta_id',
    consulta_data: 'consulta_data',
    status_id: 'status_id',
    medico_id: 'medico_id',
    paciente_id: 'paciente_id',
    plano_id: 'plano_id'
  };

  export type ConsultasScalarFieldEnum = (typeof ConsultasScalarFieldEnum)[keyof typeof ConsultasScalarFieldEnum]


  export const EspecialidadesScalarFieldEnum: {
    especialidade_id: 'especialidade_id',
    especialidade_nome: 'especialidade_nome'
  };

  export type EspecialidadesScalarFieldEnum = (typeof EspecialidadesScalarFieldEnum)[keyof typeof EspecialidadesScalarFieldEnum]


  export const ExamesScalarFieldEnum: {
    exame_id: 'exame_id',
    exame_nome: 'exame_nome',
    paciente_id: 'paciente_id'
  };

  export type ExamesScalarFieldEnum = (typeof ExamesScalarFieldEnum)[keyof typeof ExamesScalarFieldEnum]


  export const MedicosScalarFieldEnum: {
    medico_id: 'medico_id',
    medico_nome: 'medico_nome',
    medico_crm: 'medico_crm',
    medico_telefone: 'medico_telefone',
    medico_email: 'medico_email',
    especialidade_id: 'especialidade_id'
  };

  export type MedicosScalarFieldEnum = (typeof MedicosScalarFieldEnum)[keyof typeof MedicosScalarFieldEnum]


  export const OperadorasScalarFieldEnum: {
    operadora_id: 'operadora_id',
    operadora_nome: 'operadora_nome',
    operadora_cobertura: 'operadora_cobertura',
    operadora_preco: 'operadora_preco'
  };

  export type OperadorasScalarFieldEnum = (typeof OperadorasScalarFieldEnum)[keyof typeof OperadorasScalarFieldEnum]


  export const PacientesScalarFieldEnum: {
    paciente_id: 'paciente_id',
    paciente_nome: 'paciente_nome',
    paciente_genero: 'paciente_genero',
    paciente_nascimento: 'paciente_nascimento',
    paciente_email: 'paciente_email',
    paciente_telefone: 'paciente_telefone'
  };

  export type PacientesScalarFieldEnum = (typeof PacientesScalarFieldEnum)[keyof typeof PacientesScalarFieldEnum]


  export const PagamentosScalarFieldEnum: {
    pagamento_id: 'pagamento_id',
    pagamento_valor: 'pagamento_valor',
    pagamento_data: 'pagamento_data',
    pagamento_status: 'pagamento_status',
    pagamento_metodo: 'pagamento_metodo',
    consulta_id: 'consulta_id'
  };

  export type PagamentosScalarFieldEnum = (typeof PagamentosScalarFieldEnum)[keyof typeof PagamentosScalarFieldEnum]


  export const PlanosScalarFieldEnum: {
    plano_id: 'plano_id',
    plano_nome: 'plano_nome',
    operadora_id: 'operadora_id'
  };

  export type PlanosScalarFieldEnum = (typeof PlanosScalarFieldEnum)[keyof typeof PlanosScalarFieldEnum]


  export const StatusScalarFieldEnum: {
    status_id: 'status_id',
    status_nome: 'status_nome'
  };

  export type StatusScalarFieldEnum = (typeof StatusScalarFieldEnum)[keyof typeof StatusScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type consultasWhereInput = {
    AND?: consultasWhereInput | consultasWhereInput[]
    OR?: consultasWhereInput[]
    NOT?: consultasWhereInput | consultasWhereInput[]
    consulta_id?: IntFilter<"consultas"> | number
    consulta_data?: StringFilter<"consultas"> | string
    status_id?: IntFilter<"consultas"> | number
    medico_id?: IntFilter<"consultas"> | number
    paciente_id?: IntFilter<"consultas"> | number
    plano_id?: IntFilter<"consultas"> | number
    status?: XOR<StatusRelationFilter, statusWhereInput>
    medicos?: XOR<MedicosRelationFilter, medicosWhereInput>
    pacientes?: XOR<PacientesRelationFilter, pacientesWhereInput>
    planos?: XOR<PlanosRelationFilter, planosWhereInput>
    pagamentos?: PagamentosListRelationFilter
  }

  export type consultasOrderByWithRelationInput = {
    consulta_id?: SortOrder
    consulta_data?: SortOrder
    status_id?: SortOrder
    medico_id?: SortOrder
    paciente_id?: SortOrder
    plano_id?: SortOrder
    status?: statusOrderByWithRelationInput
    medicos?: medicosOrderByWithRelationInput
    pacientes?: pacientesOrderByWithRelationInput
    planos?: planosOrderByWithRelationInput
    pagamentos?: pagamentosOrderByRelationAggregateInput
  }

  export type consultasWhereUniqueInput = Prisma.AtLeast<{
    consulta_id?: number
    AND?: consultasWhereInput | consultasWhereInput[]
    OR?: consultasWhereInput[]
    NOT?: consultasWhereInput | consultasWhereInput[]
    consulta_data?: StringFilter<"consultas"> | string
    status_id?: IntFilter<"consultas"> | number
    medico_id?: IntFilter<"consultas"> | number
    paciente_id?: IntFilter<"consultas"> | number
    plano_id?: IntFilter<"consultas"> | number
    status?: XOR<StatusRelationFilter, statusWhereInput>
    medicos?: XOR<MedicosRelationFilter, medicosWhereInput>
    pacientes?: XOR<PacientesRelationFilter, pacientesWhereInput>
    planos?: XOR<PlanosRelationFilter, planosWhereInput>
    pagamentos?: PagamentosListRelationFilter
  }, "consulta_id" | "consulta_id">

  export type consultasOrderByWithAggregationInput = {
    consulta_id?: SortOrder
    consulta_data?: SortOrder
    status_id?: SortOrder
    medico_id?: SortOrder
    paciente_id?: SortOrder
    plano_id?: SortOrder
    _count?: consultasCountOrderByAggregateInput
    _avg?: consultasAvgOrderByAggregateInput
    _max?: consultasMaxOrderByAggregateInput
    _min?: consultasMinOrderByAggregateInput
    _sum?: consultasSumOrderByAggregateInput
  }

  export type consultasScalarWhereWithAggregatesInput = {
    AND?: consultasScalarWhereWithAggregatesInput | consultasScalarWhereWithAggregatesInput[]
    OR?: consultasScalarWhereWithAggregatesInput[]
    NOT?: consultasScalarWhereWithAggregatesInput | consultasScalarWhereWithAggregatesInput[]
    consulta_id?: IntWithAggregatesFilter<"consultas"> | number
    consulta_data?: StringWithAggregatesFilter<"consultas"> | string
    status_id?: IntWithAggregatesFilter<"consultas"> | number
    medico_id?: IntWithAggregatesFilter<"consultas"> | number
    paciente_id?: IntWithAggregatesFilter<"consultas"> | number
    plano_id?: IntWithAggregatesFilter<"consultas"> | number
  }

  export type especialidadesWhereInput = {
    AND?: especialidadesWhereInput | especialidadesWhereInput[]
    OR?: especialidadesWhereInput[]
    NOT?: especialidadesWhereInput | especialidadesWhereInput[]
    especialidade_id?: IntFilter<"especialidades"> | number
    especialidade_nome?: StringFilter<"especialidades"> | string
    medicos?: MedicosListRelationFilter
  }

  export type especialidadesOrderByWithRelationInput = {
    especialidade_id?: SortOrder
    especialidade_nome?: SortOrder
    medicos?: medicosOrderByRelationAggregateInput
  }

  export type especialidadesWhereUniqueInput = Prisma.AtLeast<{
    especialidade_id?: number
    AND?: especialidadesWhereInput | especialidadesWhereInput[]
    OR?: especialidadesWhereInput[]
    NOT?: especialidadesWhereInput | especialidadesWhereInput[]
    especialidade_nome?: StringFilter<"especialidades"> | string
    medicos?: MedicosListRelationFilter
  }, "especialidade_id" | "especialidade_id">

  export type especialidadesOrderByWithAggregationInput = {
    especialidade_id?: SortOrder
    especialidade_nome?: SortOrder
    _count?: especialidadesCountOrderByAggregateInput
    _avg?: especialidadesAvgOrderByAggregateInput
    _max?: especialidadesMaxOrderByAggregateInput
    _min?: especialidadesMinOrderByAggregateInput
    _sum?: especialidadesSumOrderByAggregateInput
  }

  export type especialidadesScalarWhereWithAggregatesInput = {
    AND?: especialidadesScalarWhereWithAggregatesInput | especialidadesScalarWhereWithAggregatesInput[]
    OR?: especialidadesScalarWhereWithAggregatesInput[]
    NOT?: especialidadesScalarWhereWithAggregatesInput | especialidadesScalarWhereWithAggregatesInput[]
    especialidade_id?: IntWithAggregatesFilter<"especialidades"> | number
    especialidade_nome?: StringWithAggregatesFilter<"especialidades"> | string
  }

  export type examesWhereInput = {
    AND?: examesWhereInput | examesWhereInput[]
    OR?: examesWhereInput[]
    NOT?: examesWhereInput | examesWhereInput[]
    exame_id?: IntFilter<"exames"> | number
    exame_nome?: StringFilter<"exames"> | string
    paciente_id?: IntFilter<"exames"> | number
    pacientes?: XOR<PacientesRelationFilter, pacientesWhereInput>
  }

  export type examesOrderByWithRelationInput = {
    exame_id?: SortOrder
    exame_nome?: SortOrder
    paciente_id?: SortOrder
    pacientes?: pacientesOrderByWithRelationInput
  }

  export type examesWhereUniqueInput = Prisma.AtLeast<{
    exame_id?: number
    AND?: examesWhereInput | examesWhereInput[]
    OR?: examesWhereInput[]
    NOT?: examesWhereInput | examesWhereInput[]
    exame_nome?: StringFilter<"exames"> | string
    paciente_id?: IntFilter<"exames"> | number
    pacientes?: XOR<PacientesRelationFilter, pacientesWhereInput>
  }, "exame_id" | "exame_id">

  export type examesOrderByWithAggregationInput = {
    exame_id?: SortOrder
    exame_nome?: SortOrder
    paciente_id?: SortOrder
    _count?: examesCountOrderByAggregateInput
    _avg?: examesAvgOrderByAggregateInput
    _max?: examesMaxOrderByAggregateInput
    _min?: examesMinOrderByAggregateInput
    _sum?: examesSumOrderByAggregateInput
  }

  export type examesScalarWhereWithAggregatesInput = {
    AND?: examesScalarWhereWithAggregatesInput | examesScalarWhereWithAggregatesInput[]
    OR?: examesScalarWhereWithAggregatesInput[]
    NOT?: examesScalarWhereWithAggregatesInput | examesScalarWhereWithAggregatesInput[]
    exame_id?: IntWithAggregatesFilter<"exames"> | number
    exame_nome?: StringWithAggregatesFilter<"exames"> | string
    paciente_id?: IntWithAggregatesFilter<"exames"> | number
  }

  export type medicosWhereInput = {
    AND?: medicosWhereInput | medicosWhereInput[]
    OR?: medicosWhereInput[]
    NOT?: medicosWhereInput | medicosWhereInput[]
    medico_id?: IntFilter<"medicos"> | number
    medico_nome?: StringFilter<"medicos"> | string
    medico_crm?: StringFilter<"medicos"> | string
    medico_telefone?: StringFilter<"medicos"> | string
    medico_email?: StringFilter<"medicos"> | string
    especialidade_id?: IntFilter<"medicos"> | number
    consultas?: ConsultasListRelationFilter
    especialidades?: XOR<EspecialidadesRelationFilter, especialidadesWhereInput>
  }

  export type medicosOrderByWithRelationInput = {
    medico_id?: SortOrder
    medico_nome?: SortOrder
    medico_crm?: SortOrder
    medico_telefone?: SortOrder
    medico_email?: SortOrder
    especialidade_id?: SortOrder
    consultas?: consultasOrderByRelationAggregateInput
    especialidades?: especialidadesOrderByWithRelationInput
  }

  export type medicosWhereUniqueInput = Prisma.AtLeast<{
    medico_id?: number
    AND?: medicosWhereInput | medicosWhereInput[]
    OR?: medicosWhereInput[]
    NOT?: medicosWhereInput | medicosWhereInput[]
    medico_nome?: StringFilter<"medicos"> | string
    medico_crm?: StringFilter<"medicos"> | string
    medico_telefone?: StringFilter<"medicos"> | string
    medico_email?: StringFilter<"medicos"> | string
    especialidade_id?: IntFilter<"medicos"> | number
    consultas?: ConsultasListRelationFilter
    especialidades?: XOR<EspecialidadesRelationFilter, especialidadesWhereInput>
  }, "medico_id" | "medico_id">

  export type medicosOrderByWithAggregationInput = {
    medico_id?: SortOrder
    medico_nome?: SortOrder
    medico_crm?: SortOrder
    medico_telefone?: SortOrder
    medico_email?: SortOrder
    especialidade_id?: SortOrder
    _count?: medicosCountOrderByAggregateInput
    _avg?: medicosAvgOrderByAggregateInput
    _max?: medicosMaxOrderByAggregateInput
    _min?: medicosMinOrderByAggregateInput
    _sum?: medicosSumOrderByAggregateInput
  }

  export type medicosScalarWhereWithAggregatesInput = {
    AND?: medicosScalarWhereWithAggregatesInput | medicosScalarWhereWithAggregatesInput[]
    OR?: medicosScalarWhereWithAggregatesInput[]
    NOT?: medicosScalarWhereWithAggregatesInput | medicosScalarWhereWithAggregatesInput[]
    medico_id?: IntWithAggregatesFilter<"medicos"> | number
    medico_nome?: StringWithAggregatesFilter<"medicos"> | string
    medico_crm?: StringWithAggregatesFilter<"medicos"> | string
    medico_telefone?: StringWithAggregatesFilter<"medicos"> | string
    medico_email?: StringWithAggregatesFilter<"medicos"> | string
    especialidade_id?: IntWithAggregatesFilter<"medicos"> | number
  }

  export type operadorasWhereInput = {
    AND?: operadorasWhereInput | operadorasWhereInput[]
    OR?: operadorasWhereInput[]
    NOT?: operadorasWhereInput | operadorasWhereInput[]
    operadora_id?: IntFilter<"operadoras"> | number
    operadora_nome?: StringFilter<"operadoras"> | string
    operadora_cobertura?: StringFilter<"operadoras"> | string
    operadora_preco?: FloatFilter<"operadoras"> | number
    planos?: PlanosListRelationFilter
  }

  export type operadorasOrderByWithRelationInput = {
    operadora_id?: SortOrder
    operadora_nome?: SortOrder
    operadora_cobertura?: SortOrder
    operadora_preco?: SortOrder
    planos?: planosOrderByRelationAggregateInput
  }

  export type operadorasWhereUniqueInput = Prisma.AtLeast<{
    operadora_id?: number
    AND?: operadorasWhereInput | operadorasWhereInput[]
    OR?: operadorasWhereInput[]
    NOT?: operadorasWhereInput | operadorasWhereInput[]
    operadora_nome?: StringFilter<"operadoras"> | string
    operadora_cobertura?: StringFilter<"operadoras"> | string
    operadora_preco?: FloatFilter<"operadoras"> | number
    planos?: PlanosListRelationFilter
  }, "operadora_id" | "operadora_id">

  export type operadorasOrderByWithAggregationInput = {
    operadora_id?: SortOrder
    operadora_nome?: SortOrder
    operadora_cobertura?: SortOrder
    operadora_preco?: SortOrder
    _count?: operadorasCountOrderByAggregateInput
    _avg?: operadorasAvgOrderByAggregateInput
    _max?: operadorasMaxOrderByAggregateInput
    _min?: operadorasMinOrderByAggregateInput
    _sum?: operadorasSumOrderByAggregateInput
  }

  export type operadorasScalarWhereWithAggregatesInput = {
    AND?: operadorasScalarWhereWithAggregatesInput | operadorasScalarWhereWithAggregatesInput[]
    OR?: operadorasScalarWhereWithAggregatesInput[]
    NOT?: operadorasScalarWhereWithAggregatesInput | operadorasScalarWhereWithAggregatesInput[]
    operadora_id?: IntWithAggregatesFilter<"operadoras"> | number
    operadora_nome?: StringWithAggregatesFilter<"operadoras"> | string
    operadora_cobertura?: StringWithAggregatesFilter<"operadoras"> | string
    operadora_preco?: FloatWithAggregatesFilter<"operadoras"> | number
  }

  export type pacientesWhereInput = {
    AND?: pacientesWhereInput | pacientesWhereInput[]
    OR?: pacientesWhereInput[]
    NOT?: pacientesWhereInput | pacientesWhereInput[]
    paciente_id?: IntFilter<"pacientes"> | number
    paciente_nome?: StringFilter<"pacientes"> | string
    paciente_genero?: StringFilter<"pacientes"> | string
    paciente_nascimento?: StringFilter<"pacientes"> | string
    paciente_email?: StringNullableFilter<"pacientes"> | string | null
    paciente_telefone?: StringFilter<"pacientes"> | string
    consultas?: ConsultasListRelationFilter
    exames?: ExamesListRelationFilter
  }

  export type pacientesOrderByWithRelationInput = {
    paciente_id?: SortOrder
    paciente_nome?: SortOrder
    paciente_genero?: SortOrder
    paciente_nascimento?: SortOrder
    paciente_email?: SortOrderInput | SortOrder
    paciente_telefone?: SortOrder
    consultas?: consultasOrderByRelationAggregateInput
    exames?: examesOrderByRelationAggregateInput
  }

  export type pacientesWhereUniqueInput = Prisma.AtLeast<{
    paciente_id?: number
    AND?: pacientesWhereInput | pacientesWhereInput[]
    OR?: pacientesWhereInput[]
    NOT?: pacientesWhereInput | pacientesWhereInput[]
    paciente_nome?: StringFilter<"pacientes"> | string
    paciente_genero?: StringFilter<"pacientes"> | string
    paciente_nascimento?: StringFilter<"pacientes"> | string
    paciente_email?: StringNullableFilter<"pacientes"> | string | null
    paciente_telefone?: StringFilter<"pacientes"> | string
    consultas?: ConsultasListRelationFilter
    exames?: ExamesListRelationFilter
  }, "paciente_id" | "paciente_id">

  export type pacientesOrderByWithAggregationInput = {
    paciente_id?: SortOrder
    paciente_nome?: SortOrder
    paciente_genero?: SortOrder
    paciente_nascimento?: SortOrder
    paciente_email?: SortOrderInput | SortOrder
    paciente_telefone?: SortOrder
    _count?: pacientesCountOrderByAggregateInput
    _avg?: pacientesAvgOrderByAggregateInput
    _max?: pacientesMaxOrderByAggregateInput
    _min?: pacientesMinOrderByAggregateInput
    _sum?: pacientesSumOrderByAggregateInput
  }

  export type pacientesScalarWhereWithAggregatesInput = {
    AND?: pacientesScalarWhereWithAggregatesInput | pacientesScalarWhereWithAggregatesInput[]
    OR?: pacientesScalarWhereWithAggregatesInput[]
    NOT?: pacientesScalarWhereWithAggregatesInput | pacientesScalarWhereWithAggregatesInput[]
    paciente_id?: IntWithAggregatesFilter<"pacientes"> | number
    paciente_nome?: StringWithAggregatesFilter<"pacientes"> | string
    paciente_genero?: StringWithAggregatesFilter<"pacientes"> | string
    paciente_nascimento?: StringWithAggregatesFilter<"pacientes"> | string
    paciente_email?: StringNullableWithAggregatesFilter<"pacientes"> | string | null
    paciente_telefone?: StringWithAggregatesFilter<"pacientes"> | string
  }

  export type pagamentosWhereInput = {
    AND?: pagamentosWhereInput | pagamentosWhereInput[]
    OR?: pagamentosWhereInput[]
    NOT?: pagamentosWhereInput | pagamentosWhereInput[]
    pagamento_id?: IntFilter<"pagamentos"> | number
    pagamento_valor?: IntFilter<"pagamentos"> | number
    pagamento_data?: StringFilter<"pagamentos"> | string
    pagamento_status?: StringFilter<"pagamentos"> | string
    pagamento_metodo?: StringFilter<"pagamentos"> | string
    consulta_id?: IntFilter<"pagamentos"> | number
    consultas?: XOR<ConsultasRelationFilter, consultasWhereInput>
  }

  export type pagamentosOrderByWithRelationInput = {
    pagamento_id?: SortOrder
    pagamento_valor?: SortOrder
    pagamento_data?: SortOrder
    pagamento_status?: SortOrder
    pagamento_metodo?: SortOrder
    consulta_id?: SortOrder
    consultas?: consultasOrderByWithRelationInput
  }

  export type pagamentosWhereUniqueInput = Prisma.AtLeast<{
    pagamento_id?: number
    AND?: pagamentosWhereInput | pagamentosWhereInput[]
    OR?: pagamentosWhereInput[]
    NOT?: pagamentosWhereInput | pagamentosWhereInput[]
    pagamento_valor?: IntFilter<"pagamentos"> | number
    pagamento_data?: StringFilter<"pagamentos"> | string
    pagamento_status?: StringFilter<"pagamentos"> | string
    pagamento_metodo?: StringFilter<"pagamentos"> | string
    consulta_id?: IntFilter<"pagamentos"> | number
    consultas?: XOR<ConsultasRelationFilter, consultasWhereInput>
  }, "pagamento_id" | "pagamento_id">

  export type pagamentosOrderByWithAggregationInput = {
    pagamento_id?: SortOrder
    pagamento_valor?: SortOrder
    pagamento_data?: SortOrder
    pagamento_status?: SortOrder
    pagamento_metodo?: SortOrder
    consulta_id?: SortOrder
    _count?: pagamentosCountOrderByAggregateInput
    _avg?: pagamentosAvgOrderByAggregateInput
    _max?: pagamentosMaxOrderByAggregateInput
    _min?: pagamentosMinOrderByAggregateInput
    _sum?: pagamentosSumOrderByAggregateInput
  }

  export type pagamentosScalarWhereWithAggregatesInput = {
    AND?: pagamentosScalarWhereWithAggregatesInput | pagamentosScalarWhereWithAggregatesInput[]
    OR?: pagamentosScalarWhereWithAggregatesInput[]
    NOT?: pagamentosScalarWhereWithAggregatesInput | pagamentosScalarWhereWithAggregatesInput[]
    pagamento_id?: IntWithAggregatesFilter<"pagamentos"> | number
    pagamento_valor?: IntWithAggregatesFilter<"pagamentos"> | number
    pagamento_data?: StringWithAggregatesFilter<"pagamentos"> | string
    pagamento_status?: StringWithAggregatesFilter<"pagamentos"> | string
    pagamento_metodo?: StringWithAggregatesFilter<"pagamentos"> | string
    consulta_id?: IntWithAggregatesFilter<"pagamentos"> | number
  }

  export type planosWhereInput = {
    AND?: planosWhereInput | planosWhereInput[]
    OR?: planosWhereInput[]
    NOT?: planosWhereInput | planosWhereInput[]
    plano_id?: IntFilter<"planos"> | number
    plano_nome?: StringFilter<"planos"> | string
    operadora_id?: IntFilter<"planos"> | number
    consultas?: ConsultasListRelationFilter
    operadoras?: XOR<OperadorasRelationFilter, operadorasWhereInput>
  }

  export type planosOrderByWithRelationInput = {
    plano_id?: SortOrder
    plano_nome?: SortOrder
    operadora_id?: SortOrder
    consultas?: consultasOrderByRelationAggregateInput
    operadoras?: operadorasOrderByWithRelationInput
  }

  export type planosWhereUniqueInput = Prisma.AtLeast<{
    plano_id?: number
    AND?: planosWhereInput | planosWhereInput[]
    OR?: planosWhereInput[]
    NOT?: planosWhereInput | planosWhereInput[]
    plano_nome?: StringFilter<"planos"> | string
    operadora_id?: IntFilter<"planos"> | number
    consultas?: ConsultasListRelationFilter
    operadoras?: XOR<OperadorasRelationFilter, operadorasWhereInput>
  }, "plano_id" | "plano_id">

  export type planosOrderByWithAggregationInput = {
    plano_id?: SortOrder
    plano_nome?: SortOrder
    operadora_id?: SortOrder
    _count?: planosCountOrderByAggregateInput
    _avg?: planosAvgOrderByAggregateInput
    _max?: planosMaxOrderByAggregateInput
    _min?: planosMinOrderByAggregateInput
    _sum?: planosSumOrderByAggregateInput
  }

  export type planosScalarWhereWithAggregatesInput = {
    AND?: planosScalarWhereWithAggregatesInput | planosScalarWhereWithAggregatesInput[]
    OR?: planosScalarWhereWithAggregatesInput[]
    NOT?: planosScalarWhereWithAggregatesInput | planosScalarWhereWithAggregatesInput[]
    plano_id?: IntWithAggregatesFilter<"planos"> | number
    plano_nome?: StringWithAggregatesFilter<"planos"> | string
    operadora_id?: IntWithAggregatesFilter<"planos"> | number
  }

  export type statusWhereInput = {
    AND?: statusWhereInput | statusWhereInput[]
    OR?: statusWhereInput[]
    NOT?: statusWhereInput | statusWhereInput[]
    status_id?: IntFilter<"status"> | number
    status_nome?: StringFilter<"status"> | string
    consultas?: ConsultasListRelationFilter
  }

  export type statusOrderByWithRelationInput = {
    status_id?: SortOrder
    status_nome?: SortOrder
    consultas?: consultasOrderByRelationAggregateInput
  }

  export type statusWhereUniqueInput = Prisma.AtLeast<{
    status_id?: number
    AND?: statusWhereInput | statusWhereInput[]
    OR?: statusWhereInput[]
    NOT?: statusWhereInput | statusWhereInput[]
    status_nome?: StringFilter<"status"> | string
    consultas?: ConsultasListRelationFilter
  }, "status_id" | "status_id">

  export type statusOrderByWithAggregationInput = {
    status_id?: SortOrder
    status_nome?: SortOrder
    _count?: statusCountOrderByAggregateInput
    _avg?: statusAvgOrderByAggregateInput
    _max?: statusMaxOrderByAggregateInput
    _min?: statusMinOrderByAggregateInput
    _sum?: statusSumOrderByAggregateInput
  }

  export type statusScalarWhereWithAggregatesInput = {
    AND?: statusScalarWhereWithAggregatesInput | statusScalarWhereWithAggregatesInput[]
    OR?: statusScalarWhereWithAggregatesInput[]
    NOT?: statusScalarWhereWithAggregatesInput | statusScalarWhereWithAggregatesInput[]
    status_id?: IntWithAggregatesFilter<"status"> | number
    status_nome?: StringWithAggregatesFilter<"status"> | string
  }

  export type consultasCreateInput = {
    consulta_data: string
    status: statusCreateNestedOneWithoutConsultasInput
    medicos: medicosCreateNestedOneWithoutConsultasInput
    pacientes: pacientesCreateNestedOneWithoutConsultasInput
    planos: planosCreateNestedOneWithoutConsultasInput
    pagamentos?: pagamentosCreateNestedManyWithoutConsultasInput
  }

  export type consultasUncheckedCreateInput = {
    consulta_id?: number
    consulta_data: string
    status_id: number
    medico_id: number
    paciente_id: number
    plano_id: number
    pagamentos?: pagamentosUncheckedCreateNestedManyWithoutConsultasInput
  }

  export type consultasUpdateInput = {
    consulta_data?: StringFieldUpdateOperationsInput | string
    status?: statusUpdateOneRequiredWithoutConsultasNestedInput
    medicos?: medicosUpdateOneRequiredWithoutConsultasNestedInput
    pacientes?: pacientesUpdateOneRequiredWithoutConsultasNestedInput
    planos?: planosUpdateOneRequiredWithoutConsultasNestedInput
    pagamentos?: pagamentosUpdateManyWithoutConsultasNestedInput
  }

  export type consultasUncheckedUpdateInput = {
    consulta_id?: IntFieldUpdateOperationsInput | number
    consulta_data?: StringFieldUpdateOperationsInput | string
    status_id?: IntFieldUpdateOperationsInput | number
    medico_id?: IntFieldUpdateOperationsInput | number
    paciente_id?: IntFieldUpdateOperationsInput | number
    plano_id?: IntFieldUpdateOperationsInput | number
    pagamentos?: pagamentosUncheckedUpdateManyWithoutConsultasNestedInput
  }

  export type consultasCreateManyInput = {
    consulta_id?: number
    consulta_data: string
    status_id: number
    medico_id: number
    paciente_id: number
    plano_id: number
  }

  export type consultasUpdateManyMutationInput = {
    consulta_data?: StringFieldUpdateOperationsInput | string
  }

  export type consultasUncheckedUpdateManyInput = {
    consulta_id?: IntFieldUpdateOperationsInput | number
    consulta_data?: StringFieldUpdateOperationsInput | string
    status_id?: IntFieldUpdateOperationsInput | number
    medico_id?: IntFieldUpdateOperationsInput | number
    paciente_id?: IntFieldUpdateOperationsInput | number
    plano_id?: IntFieldUpdateOperationsInput | number
  }

  export type especialidadesCreateInput = {
    especialidade_nome: string
    medicos?: medicosCreateNestedManyWithoutEspecialidadesInput
  }

  export type especialidadesUncheckedCreateInput = {
    especialidade_id?: number
    especialidade_nome: string
    medicos?: medicosUncheckedCreateNestedManyWithoutEspecialidadesInput
  }

  export type especialidadesUpdateInput = {
    especialidade_nome?: StringFieldUpdateOperationsInput | string
    medicos?: medicosUpdateManyWithoutEspecialidadesNestedInput
  }

  export type especialidadesUncheckedUpdateInput = {
    especialidade_id?: IntFieldUpdateOperationsInput | number
    especialidade_nome?: StringFieldUpdateOperationsInput | string
    medicos?: medicosUncheckedUpdateManyWithoutEspecialidadesNestedInput
  }

  export type especialidadesCreateManyInput = {
    especialidade_id?: number
    especialidade_nome: string
  }

  export type especialidadesUpdateManyMutationInput = {
    especialidade_nome?: StringFieldUpdateOperationsInput | string
  }

  export type especialidadesUncheckedUpdateManyInput = {
    especialidade_id?: IntFieldUpdateOperationsInput | number
    especialidade_nome?: StringFieldUpdateOperationsInput | string
  }

  export type examesCreateInput = {
    exame_nome: string
    pacientes: pacientesCreateNestedOneWithoutExamesInput
  }

  export type examesUncheckedCreateInput = {
    exame_id?: number
    exame_nome: string
    paciente_id: number
  }

  export type examesUpdateInput = {
    exame_nome?: StringFieldUpdateOperationsInput | string
    pacientes?: pacientesUpdateOneRequiredWithoutExamesNestedInput
  }

  export type examesUncheckedUpdateInput = {
    exame_id?: IntFieldUpdateOperationsInput | number
    exame_nome?: StringFieldUpdateOperationsInput | string
    paciente_id?: IntFieldUpdateOperationsInput | number
  }

  export type examesCreateManyInput = {
    exame_id?: number
    exame_nome: string
    paciente_id: number
  }

  export type examesUpdateManyMutationInput = {
    exame_nome?: StringFieldUpdateOperationsInput | string
  }

  export type examesUncheckedUpdateManyInput = {
    exame_id?: IntFieldUpdateOperationsInput | number
    exame_nome?: StringFieldUpdateOperationsInput | string
    paciente_id?: IntFieldUpdateOperationsInput | number
  }

  export type medicosCreateInput = {
    medico_nome: string
    medico_crm: string
    medico_telefone: string
    medico_email: string
    consultas?: consultasCreateNestedManyWithoutMedicosInput
    especialidades: especialidadesCreateNestedOneWithoutMedicosInput
  }

  export type medicosUncheckedCreateInput = {
    medico_id?: number
    medico_nome: string
    medico_crm: string
    medico_telefone: string
    medico_email: string
    especialidade_id: number
    consultas?: consultasUncheckedCreateNestedManyWithoutMedicosInput
  }

  export type medicosUpdateInput = {
    medico_nome?: StringFieldUpdateOperationsInput | string
    medico_crm?: StringFieldUpdateOperationsInput | string
    medico_telefone?: StringFieldUpdateOperationsInput | string
    medico_email?: StringFieldUpdateOperationsInput | string
    consultas?: consultasUpdateManyWithoutMedicosNestedInput
    especialidades?: especialidadesUpdateOneRequiredWithoutMedicosNestedInput
  }

  export type medicosUncheckedUpdateInput = {
    medico_id?: IntFieldUpdateOperationsInput | number
    medico_nome?: StringFieldUpdateOperationsInput | string
    medico_crm?: StringFieldUpdateOperationsInput | string
    medico_telefone?: StringFieldUpdateOperationsInput | string
    medico_email?: StringFieldUpdateOperationsInput | string
    especialidade_id?: IntFieldUpdateOperationsInput | number
    consultas?: consultasUncheckedUpdateManyWithoutMedicosNestedInput
  }

  export type medicosCreateManyInput = {
    medico_id?: number
    medico_nome: string
    medico_crm: string
    medico_telefone: string
    medico_email: string
    especialidade_id: number
  }

  export type medicosUpdateManyMutationInput = {
    medico_nome?: StringFieldUpdateOperationsInput | string
    medico_crm?: StringFieldUpdateOperationsInput | string
    medico_telefone?: StringFieldUpdateOperationsInput | string
    medico_email?: StringFieldUpdateOperationsInput | string
  }

  export type medicosUncheckedUpdateManyInput = {
    medico_id?: IntFieldUpdateOperationsInput | number
    medico_nome?: StringFieldUpdateOperationsInput | string
    medico_crm?: StringFieldUpdateOperationsInput | string
    medico_telefone?: StringFieldUpdateOperationsInput | string
    medico_email?: StringFieldUpdateOperationsInput | string
    especialidade_id?: IntFieldUpdateOperationsInput | number
  }

  export type operadorasCreateInput = {
    operadora_nome: string
    operadora_cobertura: string
    operadora_preco: number
    planos?: planosCreateNestedManyWithoutOperadorasInput
  }

  export type operadorasUncheckedCreateInput = {
    operadora_id?: number
    operadora_nome: string
    operadora_cobertura: string
    operadora_preco: number
    planos?: planosUncheckedCreateNestedManyWithoutOperadorasInput
  }

  export type operadorasUpdateInput = {
    operadora_nome?: StringFieldUpdateOperationsInput | string
    operadora_cobertura?: StringFieldUpdateOperationsInput | string
    operadora_preco?: FloatFieldUpdateOperationsInput | number
    planos?: planosUpdateManyWithoutOperadorasNestedInput
  }

  export type operadorasUncheckedUpdateInput = {
    operadora_id?: IntFieldUpdateOperationsInput | number
    operadora_nome?: StringFieldUpdateOperationsInput | string
    operadora_cobertura?: StringFieldUpdateOperationsInput | string
    operadora_preco?: FloatFieldUpdateOperationsInput | number
    planos?: planosUncheckedUpdateManyWithoutOperadorasNestedInput
  }

  export type operadorasCreateManyInput = {
    operadora_id?: number
    operadora_nome: string
    operadora_cobertura: string
    operadora_preco: number
  }

  export type operadorasUpdateManyMutationInput = {
    operadora_nome?: StringFieldUpdateOperationsInput | string
    operadora_cobertura?: StringFieldUpdateOperationsInput | string
    operadora_preco?: FloatFieldUpdateOperationsInput | number
  }

  export type operadorasUncheckedUpdateManyInput = {
    operadora_id?: IntFieldUpdateOperationsInput | number
    operadora_nome?: StringFieldUpdateOperationsInput | string
    operadora_cobertura?: StringFieldUpdateOperationsInput | string
    operadora_preco?: FloatFieldUpdateOperationsInput | number
  }

  export type pacientesCreateInput = {
    paciente_nome: string
    paciente_genero: string
    paciente_nascimento: string
    paciente_email?: string | null
    paciente_telefone: string
    consultas?: consultasCreateNestedManyWithoutPacientesInput
    exames?: examesCreateNestedManyWithoutPacientesInput
  }

  export type pacientesUncheckedCreateInput = {
    paciente_id?: number
    paciente_nome: string
    paciente_genero: string
    paciente_nascimento: string
    paciente_email?: string | null
    paciente_telefone: string
    consultas?: consultasUncheckedCreateNestedManyWithoutPacientesInput
    exames?: examesUncheckedCreateNestedManyWithoutPacientesInput
  }

  export type pacientesUpdateInput = {
    paciente_nome?: StringFieldUpdateOperationsInput | string
    paciente_genero?: StringFieldUpdateOperationsInput | string
    paciente_nascimento?: StringFieldUpdateOperationsInput | string
    paciente_email?: NullableStringFieldUpdateOperationsInput | string | null
    paciente_telefone?: StringFieldUpdateOperationsInput | string
    consultas?: consultasUpdateManyWithoutPacientesNestedInput
    exames?: examesUpdateManyWithoutPacientesNestedInput
  }

  export type pacientesUncheckedUpdateInput = {
    paciente_id?: IntFieldUpdateOperationsInput | number
    paciente_nome?: StringFieldUpdateOperationsInput | string
    paciente_genero?: StringFieldUpdateOperationsInput | string
    paciente_nascimento?: StringFieldUpdateOperationsInput | string
    paciente_email?: NullableStringFieldUpdateOperationsInput | string | null
    paciente_telefone?: StringFieldUpdateOperationsInput | string
    consultas?: consultasUncheckedUpdateManyWithoutPacientesNestedInput
    exames?: examesUncheckedUpdateManyWithoutPacientesNestedInput
  }

  export type pacientesCreateManyInput = {
    paciente_id?: number
    paciente_nome: string
    paciente_genero: string
    paciente_nascimento: string
    paciente_email?: string | null
    paciente_telefone: string
  }

  export type pacientesUpdateManyMutationInput = {
    paciente_nome?: StringFieldUpdateOperationsInput | string
    paciente_genero?: StringFieldUpdateOperationsInput | string
    paciente_nascimento?: StringFieldUpdateOperationsInput | string
    paciente_email?: NullableStringFieldUpdateOperationsInput | string | null
    paciente_telefone?: StringFieldUpdateOperationsInput | string
  }

  export type pacientesUncheckedUpdateManyInput = {
    paciente_id?: IntFieldUpdateOperationsInput | number
    paciente_nome?: StringFieldUpdateOperationsInput | string
    paciente_genero?: StringFieldUpdateOperationsInput | string
    paciente_nascimento?: StringFieldUpdateOperationsInput | string
    paciente_email?: NullableStringFieldUpdateOperationsInput | string | null
    paciente_telefone?: StringFieldUpdateOperationsInput | string
  }

  export type pagamentosCreateInput = {
    pagamento_valor: number
    pagamento_data: string
    pagamento_status: string
    pagamento_metodo: string
    consultas: consultasCreateNestedOneWithoutPagamentosInput
  }

  export type pagamentosUncheckedCreateInput = {
    pagamento_id?: number
    pagamento_valor: number
    pagamento_data: string
    pagamento_status: string
    pagamento_metodo: string
    consulta_id: number
  }

  export type pagamentosUpdateInput = {
    pagamento_valor?: IntFieldUpdateOperationsInput | number
    pagamento_data?: StringFieldUpdateOperationsInput | string
    pagamento_status?: StringFieldUpdateOperationsInput | string
    pagamento_metodo?: StringFieldUpdateOperationsInput | string
    consultas?: consultasUpdateOneRequiredWithoutPagamentosNestedInput
  }

  export type pagamentosUncheckedUpdateInput = {
    pagamento_id?: IntFieldUpdateOperationsInput | number
    pagamento_valor?: IntFieldUpdateOperationsInput | number
    pagamento_data?: StringFieldUpdateOperationsInput | string
    pagamento_status?: StringFieldUpdateOperationsInput | string
    pagamento_metodo?: StringFieldUpdateOperationsInput | string
    consulta_id?: IntFieldUpdateOperationsInput | number
  }

  export type pagamentosCreateManyInput = {
    pagamento_id?: number
    pagamento_valor: number
    pagamento_data: string
    pagamento_status: string
    pagamento_metodo: string
    consulta_id: number
  }

  export type pagamentosUpdateManyMutationInput = {
    pagamento_valor?: IntFieldUpdateOperationsInput | number
    pagamento_data?: StringFieldUpdateOperationsInput | string
    pagamento_status?: StringFieldUpdateOperationsInput | string
    pagamento_metodo?: StringFieldUpdateOperationsInput | string
  }

  export type pagamentosUncheckedUpdateManyInput = {
    pagamento_id?: IntFieldUpdateOperationsInput | number
    pagamento_valor?: IntFieldUpdateOperationsInput | number
    pagamento_data?: StringFieldUpdateOperationsInput | string
    pagamento_status?: StringFieldUpdateOperationsInput | string
    pagamento_metodo?: StringFieldUpdateOperationsInput | string
    consulta_id?: IntFieldUpdateOperationsInput | number
  }

  export type planosCreateInput = {
    plano_nome: string
    consultas?: consultasCreateNestedManyWithoutPlanosInput
    operadoras: operadorasCreateNestedOneWithoutPlanosInput
  }

  export type planosUncheckedCreateInput = {
    plano_id?: number
    plano_nome: string
    operadora_id: number
    consultas?: consultasUncheckedCreateNestedManyWithoutPlanosInput
  }

  export type planosUpdateInput = {
    plano_nome?: StringFieldUpdateOperationsInput | string
    consultas?: consultasUpdateManyWithoutPlanosNestedInput
    operadoras?: operadorasUpdateOneRequiredWithoutPlanosNestedInput
  }

  export type planosUncheckedUpdateInput = {
    plano_id?: IntFieldUpdateOperationsInput | number
    plano_nome?: StringFieldUpdateOperationsInput | string
    operadora_id?: IntFieldUpdateOperationsInput | number
    consultas?: consultasUncheckedUpdateManyWithoutPlanosNestedInput
  }

  export type planosCreateManyInput = {
    plano_id?: number
    plano_nome: string
    operadora_id: number
  }

  export type planosUpdateManyMutationInput = {
    plano_nome?: StringFieldUpdateOperationsInput | string
  }

  export type planosUncheckedUpdateManyInput = {
    plano_id?: IntFieldUpdateOperationsInput | number
    plano_nome?: StringFieldUpdateOperationsInput | string
    operadora_id?: IntFieldUpdateOperationsInput | number
  }

  export type statusCreateInput = {
    status_nome: string
    consultas?: consultasCreateNestedManyWithoutStatusInput
  }

  export type statusUncheckedCreateInput = {
    status_id?: number
    status_nome: string
    consultas?: consultasUncheckedCreateNestedManyWithoutStatusInput
  }

  export type statusUpdateInput = {
    status_nome?: StringFieldUpdateOperationsInput | string
    consultas?: consultasUpdateManyWithoutStatusNestedInput
  }

  export type statusUncheckedUpdateInput = {
    status_id?: IntFieldUpdateOperationsInput | number
    status_nome?: StringFieldUpdateOperationsInput | string
    consultas?: consultasUncheckedUpdateManyWithoutStatusNestedInput
  }

  export type statusCreateManyInput = {
    status_id?: number
    status_nome: string
  }

  export type statusUpdateManyMutationInput = {
    status_nome?: StringFieldUpdateOperationsInput | string
  }

  export type statusUncheckedUpdateManyInput = {
    status_id?: IntFieldUpdateOperationsInput | number
    status_nome?: StringFieldUpdateOperationsInput | string
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

  export type StatusRelationFilter = {
    is?: statusWhereInput
    isNot?: statusWhereInput
  }

  export type MedicosRelationFilter = {
    is?: medicosWhereInput
    isNot?: medicosWhereInput
  }

  export type PacientesRelationFilter = {
    is?: pacientesWhereInput
    isNot?: pacientesWhereInput
  }

  export type PlanosRelationFilter = {
    is?: planosWhereInput
    isNot?: planosWhereInput
  }

  export type PagamentosListRelationFilter = {
    every?: pagamentosWhereInput
    some?: pagamentosWhereInput
    none?: pagamentosWhereInput
  }

  export type pagamentosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type consultasCountOrderByAggregateInput = {
    consulta_id?: SortOrder
    consulta_data?: SortOrder
    status_id?: SortOrder
    medico_id?: SortOrder
    paciente_id?: SortOrder
    plano_id?: SortOrder
  }

  export type consultasAvgOrderByAggregateInput = {
    consulta_id?: SortOrder
    status_id?: SortOrder
    medico_id?: SortOrder
    paciente_id?: SortOrder
    plano_id?: SortOrder
  }

  export type consultasMaxOrderByAggregateInput = {
    consulta_id?: SortOrder
    consulta_data?: SortOrder
    status_id?: SortOrder
    medico_id?: SortOrder
    paciente_id?: SortOrder
    plano_id?: SortOrder
  }

  export type consultasMinOrderByAggregateInput = {
    consulta_id?: SortOrder
    consulta_data?: SortOrder
    status_id?: SortOrder
    medico_id?: SortOrder
    paciente_id?: SortOrder
    plano_id?: SortOrder
  }

  export type consultasSumOrderByAggregateInput = {
    consulta_id?: SortOrder
    status_id?: SortOrder
    medico_id?: SortOrder
    paciente_id?: SortOrder
    plano_id?: SortOrder
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

  export type MedicosListRelationFilter = {
    every?: medicosWhereInput
    some?: medicosWhereInput
    none?: medicosWhereInput
  }

  export type medicosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type especialidadesCountOrderByAggregateInput = {
    especialidade_id?: SortOrder
    especialidade_nome?: SortOrder
  }

  export type especialidadesAvgOrderByAggregateInput = {
    especialidade_id?: SortOrder
  }

  export type especialidadesMaxOrderByAggregateInput = {
    especialidade_id?: SortOrder
    especialidade_nome?: SortOrder
  }

  export type especialidadesMinOrderByAggregateInput = {
    especialidade_id?: SortOrder
    especialidade_nome?: SortOrder
  }

  export type especialidadesSumOrderByAggregateInput = {
    especialidade_id?: SortOrder
  }

  export type examesCountOrderByAggregateInput = {
    exame_id?: SortOrder
    exame_nome?: SortOrder
    paciente_id?: SortOrder
  }

  export type examesAvgOrderByAggregateInput = {
    exame_id?: SortOrder
    paciente_id?: SortOrder
  }

  export type examesMaxOrderByAggregateInput = {
    exame_id?: SortOrder
    exame_nome?: SortOrder
    paciente_id?: SortOrder
  }

  export type examesMinOrderByAggregateInput = {
    exame_id?: SortOrder
    exame_nome?: SortOrder
    paciente_id?: SortOrder
  }

  export type examesSumOrderByAggregateInput = {
    exame_id?: SortOrder
    paciente_id?: SortOrder
  }

  export type ConsultasListRelationFilter = {
    every?: consultasWhereInput
    some?: consultasWhereInput
    none?: consultasWhereInput
  }

  export type EspecialidadesRelationFilter = {
    is?: especialidadesWhereInput
    isNot?: especialidadesWhereInput
  }

  export type consultasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type medicosCountOrderByAggregateInput = {
    medico_id?: SortOrder
    medico_nome?: SortOrder
    medico_crm?: SortOrder
    medico_telefone?: SortOrder
    medico_email?: SortOrder
    especialidade_id?: SortOrder
  }

  export type medicosAvgOrderByAggregateInput = {
    medico_id?: SortOrder
    especialidade_id?: SortOrder
  }

  export type medicosMaxOrderByAggregateInput = {
    medico_id?: SortOrder
    medico_nome?: SortOrder
    medico_crm?: SortOrder
    medico_telefone?: SortOrder
    medico_email?: SortOrder
    especialidade_id?: SortOrder
  }

  export type medicosMinOrderByAggregateInput = {
    medico_id?: SortOrder
    medico_nome?: SortOrder
    medico_crm?: SortOrder
    medico_telefone?: SortOrder
    medico_email?: SortOrder
    especialidade_id?: SortOrder
  }

  export type medicosSumOrderByAggregateInput = {
    medico_id?: SortOrder
    especialidade_id?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type PlanosListRelationFilter = {
    every?: planosWhereInput
    some?: planosWhereInput
    none?: planosWhereInput
  }

  export type planosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type operadorasCountOrderByAggregateInput = {
    operadora_id?: SortOrder
    operadora_nome?: SortOrder
    operadora_cobertura?: SortOrder
    operadora_preco?: SortOrder
  }

  export type operadorasAvgOrderByAggregateInput = {
    operadora_id?: SortOrder
    operadora_preco?: SortOrder
  }

  export type operadorasMaxOrderByAggregateInput = {
    operadora_id?: SortOrder
    operadora_nome?: SortOrder
    operadora_cobertura?: SortOrder
    operadora_preco?: SortOrder
  }

  export type operadorasMinOrderByAggregateInput = {
    operadora_id?: SortOrder
    operadora_nome?: SortOrder
    operadora_cobertura?: SortOrder
    operadora_preco?: SortOrder
  }

  export type operadorasSumOrderByAggregateInput = {
    operadora_id?: SortOrder
    operadora_preco?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type ExamesListRelationFilter = {
    every?: examesWhereInput
    some?: examesWhereInput
    none?: examesWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type examesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type pacientesCountOrderByAggregateInput = {
    paciente_id?: SortOrder
    paciente_nome?: SortOrder
    paciente_genero?: SortOrder
    paciente_nascimento?: SortOrder
    paciente_email?: SortOrder
    paciente_telefone?: SortOrder
  }

  export type pacientesAvgOrderByAggregateInput = {
    paciente_id?: SortOrder
  }

  export type pacientesMaxOrderByAggregateInput = {
    paciente_id?: SortOrder
    paciente_nome?: SortOrder
    paciente_genero?: SortOrder
    paciente_nascimento?: SortOrder
    paciente_email?: SortOrder
    paciente_telefone?: SortOrder
  }

  export type pacientesMinOrderByAggregateInput = {
    paciente_id?: SortOrder
    paciente_nome?: SortOrder
    paciente_genero?: SortOrder
    paciente_nascimento?: SortOrder
    paciente_email?: SortOrder
    paciente_telefone?: SortOrder
  }

  export type pacientesSumOrderByAggregateInput = {
    paciente_id?: SortOrder
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

  export type ConsultasRelationFilter = {
    is?: consultasWhereInput
    isNot?: consultasWhereInput
  }

  export type pagamentosCountOrderByAggregateInput = {
    pagamento_id?: SortOrder
    pagamento_valor?: SortOrder
    pagamento_data?: SortOrder
    pagamento_status?: SortOrder
    pagamento_metodo?: SortOrder
    consulta_id?: SortOrder
  }

  export type pagamentosAvgOrderByAggregateInput = {
    pagamento_id?: SortOrder
    pagamento_valor?: SortOrder
    consulta_id?: SortOrder
  }

  export type pagamentosMaxOrderByAggregateInput = {
    pagamento_id?: SortOrder
    pagamento_valor?: SortOrder
    pagamento_data?: SortOrder
    pagamento_status?: SortOrder
    pagamento_metodo?: SortOrder
    consulta_id?: SortOrder
  }

  export type pagamentosMinOrderByAggregateInput = {
    pagamento_id?: SortOrder
    pagamento_valor?: SortOrder
    pagamento_data?: SortOrder
    pagamento_status?: SortOrder
    pagamento_metodo?: SortOrder
    consulta_id?: SortOrder
  }

  export type pagamentosSumOrderByAggregateInput = {
    pagamento_id?: SortOrder
    pagamento_valor?: SortOrder
    consulta_id?: SortOrder
  }

  export type OperadorasRelationFilter = {
    is?: operadorasWhereInput
    isNot?: operadorasWhereInput
  }

  export type planosCountOrderByAggregateInput = {
    plano_id?: SortOrder
    plano_nome?: SortOrder
    operadora_id?: SortOrder
  }

  export type planosAvgOrderByAggregateInput = {
    plano_id?: SortOrder
    operadora_id?: SortOrder
  }

  export type planosMaxOrderByAggregateInput = {
    plano_id?: SortOrder
    plano_nome?: SortOrder
    operadora_id?: SortOrder
  }

  export type planosMinOrderByAggregateInput = {
    plano_id?: SortOrder
    plano_nome?: SortOrder
    operadora_id?: SortOrder
  }

  export type planosSumOrderByAggregateInput = {
    plano_id?: SortOrder
    operadora_id?: SortOrder
  }

  export type statusCountOrderByAggregateInput = {
    status_id?: SortOrder
    status_nome?: SortOrder
  }

  export type statusAvgOrderByAggregateInput = {
    status_id?: SortOrder
  }

  export type statusMaxOrderByAggregateInput = {
    status_id?: SortOrder
    status_nome?: SortOrder
  }

  export type statusMinOrderByAggregateInput = {
    status_id?: SortOrder
    status_nome?: SortOrder
  }

  export type statusSumOrderByAggregateInput = {
    status_id?: SortOrder
  }

  export type statusCreateNestedOneWithoutConsultasInput = {
    create?: XOR<statusCreateWithoutConsultasInput, statusUncheckedCreateWithoutConsultasInput>
    connectOrCreate?: statusCreateOrConnectWithoutConsultasInput
    connect?: statusWhereUniqueInput
  }

  export type medicosCreateNestedOneWithoutConsultasInput = {
    create?: XOR<medicosCreateWithoutConsultasInput, medicosUncheckedCreateWithoutConsultasInput>
    connectOrCreate?: medicosCreateOrConnectWithoutConsultasInput
    connect?: medicosWhereUniqueInput
  }

  export type pacientesCreateNestedOneWithoutConsultasInput = {
    create?: XOR<pacientesCreateWithoutConsultasInput, pacientesUncheckedCreateWithoutConsultasInput>
    connectOrCreate?: pacientesCreateOrConnectWithoutConsultasInput
    connect?: pacientesWhereUniqueInput
  }

  export type planosCreateNestedOneWithoutConsultasInput = {
    create?: XOR<planosCreateWithoutConsultasInput, planosUncheckedCreateWithoutConsultasInput>
    connectOrCreate?: planosCreateOrConnectWithoutConsultasInput
    connect?: planosWhereUniqueInput
  }

  export type pagamentosCreateNestedManyWithoutConsultasInput = {
    create?: XOR<pagamentosCreateWithoutConsultasInput, pagamentosUncheckedCreateWithoutConsultasInput> | pagamentosCreateWithoutConsultasInput[] | pagamentosUncheckedCreateWithoutConsultasInput[]
    connectOrCreate?: pagamentosCreateOrConnectWithoutConsultasInput | pagamentosCreateOrConnectWithoutConsultasInput[]
    createMany?: pagamentosCreateManyConsultasInputEnvelope
    connect?: pagamentosWhereUniqueInput | pagamentosWhereUniqueInput[]
  }

  export type pagamentosUncheckedCreateNestedManyWithoutConsultasInput = {
    create?: XOR<pagamentosCreateWithoutConsultasInput, pagamentosUncheckedCreateWithoutConsultasInput> | pagamentosCreateWithoutConsultasInput[] | pagamentosUncheckedCreateWithoutConsultasInput[]
    connectOrCreate?: pagamentosCreateOrConnectWithoutConsultasInput | pagamentosCreateOrConnectWithoutConsultasInput[]
    createMany?: pagamentosCreateManyConsultasInputEnvelope
    connect?: pagamentosWhereUniqueInput | pagamentosWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type statusUpdateOneRequiredWithoutConsultasNestedInput = {
    create?: XOR<statusCreateWithoutConsultasInput, statusUncheckedCreateWithoutConsultasInput>
    connectOrCreate?: statusCreateOrConnectWithoutConsultasInput
    upsert?: statusUpsertWithoutConsultasInput
    connect?: statusWhereUniqueInput
    update?: XOR<XOR<statusUpdateToOneWithWhereWithoutConsultasInput, statusUpdateWithoutConsultasInput>, statusUncheckedUpdateWithoutConsultasInput>
  }

  export type medicosUpdateOneRequiredWithoutConsultasNestedInput = {
    create?: XOR<medicosCreateWithoutConsultasInput, medicosUncheckedCreateWithoutConsultasInput>
    connectOrCreate?: medicosCreateOrConnectWithoutConsultasInput
    upsert?: medicosUpsertWithoutConsultasInput
    connect?: medicosWhereUniqueInput
    update?: XOR<XOR<medicosUpdateToOneWithWhereWithoutConsultasInput, medicosUpdateWithoutConsultasInput>, medicosUncheckedUpdateWithoutConsultasInput>
  }

  export type pacientesUpdateOneRequiredWithoutConsultasNestedInput = {
    create?: XOR<pacientesCreateWithoutConsultasInput, pacientesUncheckedCreateWithoutConsultasInput>
    connectOrCreate?: pacientesCreateOrConnectWithoutConsultasInput
    upsert?: pacientesUpsertWithoutConsultasInput
    connect?: pacientesWhereUniqueInput
    update?: XOR<XOR<pacientesUpdateToOneWithWhereWithoutConsultasInput, pacientesUpdateWithoutConsultasInput>, pacientesUncheckedUpdateWithoutConsultasInput>
  }

  export type planosUpdateOneRequiredWithoutConsultasNestedInput = {
    create?: XOR<planosCreateWithoutConsultasInput, planosUncheckedCreateWithoutConsultasInput>
    connectOrCreate?: planosCreateOrConnectWithoutConsultasInput
    upsert?: planosUpsertWithoutConsultasInput
    connect?: planosWhereUniqueInput
    update?: XOR<XOR<planosUpdateToOneWithWhereWithoutConsultasInput, planosUpdateWithoutConsultasInput>, planosUncheckedUpdateWithoutConsultasInput>
  }

  export type pagamentosUpdateManyWithoutConsultasNestedInput = {
    create?: XOR<pagamentosCreateWithoutConsultasInput, pagamentosUncheckedCreateWithoutConsultasInput> | pagamentosCreateWithoutConsultasInput[] | pagamentosUncheckedCreateWithoutConsultasInput[]
    connectOrCreate?: pagamentosCreateOrConnectWithoutConsultasInput | pagamentosCreateOrConnectWithoutConsultasInput[]
    upsert?: pagamentosUpsertWithWhereUniqueWithoutConsultasInput | pagamentosUpsertWithWhereUniqueWithoutConsultasInput[]
    createMany?: pagamentosCreateManyConsultasInputEnvelope
    set?: pagamentosWhereUniqueInput | pagamentosWhereUniqueInput[]
    disconnect?: pagamentosWhereUniqueInput | pagamentosWhereUniqueInput[]
    delete?: pagamentosWhereUniqueInput | pagamentosWhereUniqueInput[]
    connect?: pagamentosWhereUniqueInput | pagamentosWhereUniqueInput[]
    update?: pagamentosUpdateWithWhereUniqueWithoutConsultasInput | pagamentosUpdateWithWhereUniqueWithoutConsultasInput[]
    updateMany?: pagamentosUpdateManyWithWhereWithoutConsultasInput | pagamentosUpdateManyWithWhereWithoutConsultasInput[]
    deleteMany?: pagamentosScalarWhereInput | pagamentosScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type pagamentosUncheckedUpdateManyWithoutConsultasNestedInput = {
    create?: XOR<pagamentosCreateWithoutConsultasInput, pagamentosUncheckedCreateWithoutConsultasInput> | pagamentosCreateWithoutConsultasInput[] | pagamentosUncheckedCreateWithoutConsultasInput[]
    connectOrCreate?: pagamentosCreateOrConnectWithoutConsultasInput | pagamentosCreateOrConnectWithoutConsultasInput[]
    upsert?: pagamentosUpsertWithWhereUniqueWithoutConsultasInput | pagamentosUpsertWithWhereUniqueWithoutConsultasInput[]
    createMany?: pagamentosCreateManyConsultasInputEnvelope
    set?: pagamentosWhereUniqueInput | pagamentosWhereUniqueInput[]
    disconnect?: pagamentosWhereUniqueInput | pagamentosWhereUniqueInput[]
    delete?: pagamentosWhereUniqueInput | pagamentosWhereUniqueInput[]
    connect?: pagamentosWhereUniqueInput | pagamentosWhereUniqueInput[]
    update?: pagamentosUpdateWithWhereUniqueWithoutConsultasInput | pagamentosUpdateWithWhereUniqueWithoutConsultasInput[]
    updateMany?: pagamentosUpdateManyWithWhereWithoutConsultasInput | pagamentosUpdateManyWithWhereWithoutConsultasInput[]
    deleteMany?: pagamentosScalarWhereInput | pagamentosScalarWhereInput[]
  }

  export type medicosCreateNestedManyWithoutEspecialidadesInput = {
    create?: XOR<medicosCreateWithoutEspecialidadesInput, medicosUncheckedCreateWithoutEspecialidadesInput> | medicosCreateWithoutEspecialidadesInput[] | medicosUncheckedCreateWithoutEspecialidadesInput[]
    connectOrCreate?: medicosCreateOrConnectWithoutEspecialidadesInput | medicosCreateOrConnectWithoutEspecialidadesInput[]
    createMany?: medicosCreateManyEspecialidadesInputEnvelope
    connect?: medicosWhereUniqueInput | medicosWhereUniqueInput[]
  }

  export type medicosUncheckedCreateNestedManyWithoutEspecialidadesInput = {
    create?: XOR<medicosCreateWithoutEspecialidadesInput, medicosUncheckedCreateWithoutEspecialidadesInput> | medicosCreateWithoutEspecialidadesInput[] | medicosUncheckedCreateWithoutEspecialidadesInput[]
    connectOrCreate?: medicosCreateOrConnectWithoutEspecialidadesInput | medicosCreateOrConnectWithoutEspecialidadesInput[]
    createMany?: medicosCreateManyEspecialidadesInputEnvelope
    connect?: medicosWhereUniqueInput | medicosWhereUniqueInput[]
  }

  export type medicosUpdateManyWithoutEspecialidadesNestedInput = {
    create?: XOR<medicosCreateWithoutEspecialidadesInput, medicosUncheckedCreateWithoutEspecialidadesInput> | medicosCreateWithoutEspecialidadesInput[] | medicosUncheckedCreateWithoutEspecialidadesInput[]
    connectOrCreate?: medicosCreateOrConnectWithoutEspecialidadesInput | medicosCreateOrConnectWithoutEspecialidadesInput[]
    upsert?: medicosUpsertWithWhereUniqueWithoutEspecialidadesInput | medicosUpsertWithWhereUniqueWithoutEspecialidadesInput[]
    createMany?: medicosCreateManyEspecialidadesInputEnvelope
    set?: medicosWhereUniqueInput | medicosWhereUniqueInput[]
    disconnect?: medicosWhereUniqueInput | medicosWhereUniqueInput[]
    delete?: medicosWhereUniqueInput | medicosWhereUniqueInput[]
    connect?: medicosWhereUniqueInput | medicosWhereUniqueInput[]
    update?: medicosUpdateWithWhereUniqueWithoutEspecialidadesInput | medicosUpdateWithWhereUniqueWithoutEspecialidadesInput[]
    updateMany?: medicosUpdateManyWithWhereWithoutEspecialidadesInput | medicosUpdateManyWithWhereWithoutEspecialidadesInput[]
    deleteMany?: medicosScalarWhereInput | medicosScalarWhereInput[]
  }

  export type medicosUncheckedUpdateManyWithoutEspecialidadesNestedInput = {
    create?: XOR<medicosCreateWithoutEspecialidadesInput, medicosUncheckedCreateWithoutEspecialidadesInput> | medicosCreateWithoutEspecialidadesInput[] | medicosUncheckedCreateWithoutEspecialidadesInput[]
    connectOrCreate?: medicosCreateOrConnectWithoutEspecialidadesInput | medicosCreateOrConnectWithoutEspecialidadesInput[]
    upsert?: medicosUpsertWithWhereUniqueWithoutEspecialidadesInput | medicosUpsertWithWhereUniqueWithoutEspecialidadesInput[]
    createMany?: medicosCreateManyEspecialidadesInputEnvelope
    set?: medicosWhereUniqueInput | medicosWhereUniqueInput[]
    disconnect?: medicosWhereUniqueInput | medicosWhereUniqueInput[]
    delete?: medicosWhereUniqueInput | medicosWhereUniqueInput[]
    connect?: medicosWhereUniqueInput | medicosWhereUniqueInput[]
    update?: medicosUpdateWithWhereUniqueWithoutEspecialidadesInput | medicosUpdateWithWhereUniqueWithoutEspecialidadesInput[]
    updateMany?: medicosUpdateManyWithWhereWithoutEspecialidadesInput | medicosUpdateManyWithWhereWithoutEspecialidadesInput[]
    deleteMany?: medicosScalarWhereInput | medicosScalarWhereInput[]
  }

  export type pacientesCreateNestedOneWithoutExamesInput = {
    create?: XOR<pacientesCreateWithoutExamesInput, pacientesUncheckedCreateWithoutExamesInput>
    connectOrCreate?: pacientesCreateOrConnectWithoutExamesInput
    connect?: pacientesWhereUniqueInput
  }

  export type pacientesUpdateOneRequiredWithoutExamesNestedInput = {
    create?: XOR<pacientesCreateWithoutExamesInput, pacientesUncheckedCreateWithoutExamesInput>
    connectOrCreate?: pacientesCreateOrConnectWithoutExamesInput
    upsert?: pacientesUpsertWithoutExamesInput
    connect?: pacientesWhereUniqueInput
    update?: XOR<XOR<pacientesUpdateToOneWithWhereWithoutExamesInput, pacientesUpdateWithoutExamesInput>, pacientesUncheckedUpdateWithoutExamesInput>
  }

  export type consultasCreateNestedManyWithoutMedicosInput = {
    create?: XOR<consultasCreateWithoutMedicosInput, consultasUncheckedCreateWithoutMedicosInput> | consultasCreateWithoutMedicosInput[] | consultasUncheckedCreateWithoutMedicosInput[]
    connectOrCreate?: consultasCreateOrConnectWithoutMedicosInput | consultasCreateOrConnectWithoutMedicosInput[]
    createMany?: consultasCreateManyMedicosInputEnvelope
    connect?: consultasWhereUniqueInput | consultasWhereUniqueInput[]
  }

  export type especialidadesCreateNestedOneWithoutMedicosInput = {
    create?: XOR<especialidadesCreateWithoutMedicosInput, especialidadesUncheckedCreateWithoutMedicosInput>
    connectOrCreate?: especialidadesCreateOrConnectWithoutMedicosInput
    connect?: especialidadesWhereUniqueInput
  }

  export type consultasUncheckedCreateNestedManyWithoutMedicosInput = {
    create?: XOR<consultasCreateWithoutMedicosInput, consultasUncheckedCreateWithoutMedicosInput> | consultasCreateWithoutMedicosInput[] | consultasUncheckedCreateWithoutMedicosInput[]
    connectOrCreate?: consultasCreateOrConnectWithoutMedicosInput | consultasCreateOrConnectWithoutMedicosInput[]
    createMany?: consultasCreateManyMedicosInputEnvelope
    connect?: consultasWhereUniqueInput | consultasWhereUniqueInput[]
  }

  export type consultasUpdateManyWithoutMedicosNestedInput = {
    create?: XOR<consultasCreateWithoutMedicosInput, consultasUncheckedCreateWithoutMedicosInput> | consultasCreateWithoutMedicosInput[] | consultasUncheckedCreateWithoutMedicosInput[]
    connectOrCreate?: consultasCreateOrConnectWithoutMedicosInput | consultasCreateOrConnectWithoutMedicosInput[]
    upsert?: consultasUpsertWithWhereUniqueWithoutMedicosInput | consultasUpsertWithWhereUniqueWithoutMedicosInput[]
    createMany?: consultasCreateManyMedicosInputEnvelope
    set?: consultasWhereUniqueInput | consultasWhereUniqueInput[]
    disconnect?: consultasWhereUniqueInput | consultasWhereUniqueInput[]
    delete?: consultasWhereUniqueInput | consultasWhereUniqueInput[]
    connect?: consultasWhereUniqueInput | consultasWhereUniqueInput[]
    update?: consultasUpdateWithWhereUniqueWithoutMedicosInput | consultasUpdateWithWhereUniqueWithoutMedicosInput[]
    updateMany?: consultasUpdateManyWithWhereWithoutMedicosInput | consultasUpdateManyWithWhereWithoutMedicosInput[]
    deleteMany?: consultasScalarWhereInput | consultasScalarWhereInput[]
  }

  export type especialidadesUpdateOneRequiredWithoutMedicosNestedInput = {
    create?: XOR<especialidadesCreateWithoutMedicosInput, especialidadesUncheckedCreateWithoutMedicosInput>
    connectOrCreate?: especialidadesCreateOrConnectWithoutMedicosInput
    upsert?: especialidadesUpsertWithoutMedicosInput
    connect?: especialidadesWhereUniqueInput
    update?: XOR<XOR<especialidadesUpdateToOneWithWhereWithoutMedicosInput, especialidadesUpdateWithoutMedicosInput>, especialidadesUncheckedUpdateWithoutMedicosInput>
  }

  export type consultasUncheckedUpdateManyWithoutMedicosNestedInput = {
    create?: XOR<consultasCreateWithoutMedicosInput, consultasUncheckedCreateWithoutMedicosInput> | consultasCreateWithoutMedicosInput[] | consultasUncheckedCreateWithoutMedicosInput[]
    connectOrCreate?: consultasCreateOrConnectWithoutMedicosInput | consultasCreateOrConnectWithoutMedicosInput[]
    upsert?: consultasUpsertWithWhereUniqueWithoutMedicosInput | consultasUpsertWithWhereUniqueWithoutMedicosInput[]
    createMany?: consultasCreateManyMedicosInputEnvelope
    set?: consultasWhereUniqueInput | consultasWhereUniqueInput[]
    disconnect?: consultasWhereUniqueInput | consultasWhereUniqueInput[]
    delete?: consultasWhereUniqueInput | consultasWhereUniqueInput[]
    connect?: consultasWhereUniqueInput | consultasWhereUniqueInput[]
    update?: consultasUpdateWithWhereUniqueWithoutMedicosInput | consultasUpdateWithWhereUniqueWithoutMedicosInput[]
    updateMany?: consultasUpdateManyWithWhereWithoutMedicosInput | consultasUpdateManyWithWhereWithoutMedicosInput[]
    deleteMany?: consultasScalarWhereInput | consultasScalarWhereInput[]
  }

  export type planosCreateNestedManyWithoutOperadorasInput = {
    create?: XOR<planosCreateWithoutOperadorasInput, planosUncheckedCreateWithoutOperadorasInput> | planosCreateWithoutOperadorasInput[] | planosUncheckedCreateWithoutOperadorasInput[]
    connectOrCreate?: planosCreateOrConnectWithoutOperadorasInput | planosCreateOrConnectWithoutOperadorasInput[]
    createMany?: planosCreateManyOperadorasInputEnvelope
    connect?: planosWhereUniqueInput | planosWhereUniqueInput[]
  }

  export type planosUncheckedCreateNestedManyWithoutOperadorasInput = {
    create?: XOR<planosCreateWithoutOperadorasInput, planosUncheckedCreateWithoutOperadorasInput> | planosCreateWithoutOperadorasInput[] | planosUncheckedCreateWithoutOperadorasInput[]
    connectOrCreate?: planosCreateOrConnectWithoutOperadorasInput | planosCreateOrConnectWithoutOperadorasInput[]
    createMany?: planosCreateManyOperadorasInputEnvelope
    connect?: planosWhereUniqueInput | planosWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type planosUpdateManyWithoutOperadorasNestedInput = {
    create?: XOR<planosCreateWithoutOperadorasInput, planosUncheckedCreateWithoutOperadorasInput> | planosCreateWithoutOperadorasInput[] | planosUncheckedCreateWithoutOperadorasInput[]
    connectOrCreate?: planosCreateOrConnectWithoutOperadorasInput | planosCreateOrConnectWithoutOperadorasInput[]
    upsert?: planosUpsertWithWhereUniqueWithoutOperadorasInput | planosUpsertWithWhereUniqueWithoutOperadorasInput[]
    createMany?: planosCreateManyOperadorasInputEnvelope
    set?: planosWhereUniqueInput | planosWhereUniqueInput[]
    disconnect?: planosWhereUniqueInput | planosWhereUniqueInput[]
    delete?: planosWhereUniqueInput | planosWhereUniqueInput[]
    connect?: planosWhereUniqueInput | planosWhereUniqueInput[]
    update?: planosUpdateWithWhereUniqueWithoutOperadorasInput | planosUpdateWithWhereUniqueWithoutOperadorasInput[]
    updateMany?: planosUpdateManyWithWhereWithoutOperadorasInput | planosUpdateManyWithWhereWithoutOperadorasInput[]
    deleteMany?: planosScalarWhereInput | planosScalarWhereInput[]
  }

  export type planosUncheckedUpdateManyWithoutOperadorasNestedInput = {
    create?: XOR<planosCreateWithoutOperadorasInput, planosUncheckedCreateWithoutOperadorasInput> | planosCreateWithoutOperadorasInput[] | planosUncheckedCreateWithoutOperadorasInput[]
    connectOrCreate?: planosCreateOrConnectWithoutOperadorasInput | planosCreateOrConnectWithoutOperadorasInput[]
    upsert?: planosUpsertWithWhereUniqueWithoutOperadorasInput | planosUpsertWithWhereUniqueWithoutOperadorasInput[]
    createMany?: planosCreateManyOperadorasInputEnvelope
    set?: planosWhereUniqueInput | planosWhereUniqueInput[]
    disconnect?: planosWhereUniqueInput | planosWhereUniqueInput[]
    delete?: planosWhereUniqueInput | planosWhereUniqueInput[]
    connect?: planosWhereUniqueInput | planosWhereUniqueInput[]
    update?: planosUpdateWithWhereUniqueWithoutOperadorasInput | planosUpdateWithWhereUniqueWithoutOperadorasInput[]
    updateMany?: planosUpdateManyWithWhereWithoutOperadorasInput | planosUpdateManyWithWhereWithoutOperadorasInput[]
    deleteMany?: planosScalarWhereInput | planosScalarWhereInput[]
  }

  export type consultasCreateNestedManyWithoutPacientesInput = {
    create?: XOR<consultasCreateWithoutPacientesInput, consultasUncheckedCreateWithoutPacientesInput> | consultasCreateWithoutPacientesInput[] | consultasUncheckedCreateWithoutPacientesInput[]
    connectOrCreate?: consultasCreateOrConnectWithoutPacientesInput | consultasCreateOrConnectWithoutPacientesInput[]
    createMany?: consultasCreateManyPacientesInputEnvelope
    connect?: consultasWhereUniqueInput | consultasWhereUniqueInput[]
  }

  export type examesCreateNestedManyWithoutPacientesInput = {
    create?: XOR<examesCreateWithoutPacientesInput, examesUncheckedCreateWithoutPacientesInput> | examesCreateWithoutPacientesInput[] | examesUncheckedCreateWithoutPacientesInput[]
    connectOrCreate?: examesCreateOrConnectWithoutPacientesInput | examesCreateOrConnectWithoutPacientesInput[]
    createMany?: examesCreateManyPacientesInputEnvelope
    connect?: examesWhereUniqueInput | examesWhereUniqueInput[]
  }

  export type consultasUncheckedCreateNestedManyWithoutPacientesInput = {
    create?: XOR<consultasCreateWithoutPacientesInput, consultasUncheckedCreateWithoutPacientesInput> | consultasCreateWithoutPacientesInput[] | consultasUncheckedCreateWithoutPacientesInput[]
    connectOrCreate?: consultasCreateOrConnectWithoutPacientesInput | consultasCreateOrConnectWithoutPacientesInput[]
    createMany?: consultasCreateManyPacientesInputEnvelope
    connect?: consultasWhereUniqueInput | consultasWhereUniqueInput[]
  }

  export type examesUncheckedCreateNestedManyWithoutPacientesInput = {
    create?: XOR<examesCreateWithoutPacientesInput, examesUncheckedCreateWithoutPacientesInput> | examesCreateWithoutPacientesInput[] | examesUncheckedCreateWithoutPacientesInput[]
    connectOrCreate?: examesCreateOrConnectWithoutPacientesInput | examesCreateOrConnectWithoutPacientesInput[]
    createMany?: examesCreateManyPacientesInputEnvelope
    connect?: examesWhereUniqueInput | examesWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type consultasUpdateManyWithoutPacientesNestedInput = {
    create?: XOR<consultasCreateWithoutPacientesInput, consultasUncheckedCreateWithoutPacientesInput> | consultasCreateWithoutPacientesInput[] | consultasUncheckedCreateWithoutPacientesInput[]
    connectOrCreate?: consultasCreateOrConnectWithoutPacientesInput | consultasCreateOrConnectWithoutPacientesInput[]
    upsert?: consultasUpsertWithWhereUniqueWithoutPacientesInput | consultasUpsertWithWhereUniqueWithoutPacientesInput[]
    createMany?: consultasCreateManyPacientesInputEnvelope
    set?: consultasWhereUniqueInput | consultasWhereUniqueInput[]
    disconnect?: consultasWhereUniqueInput | consultasWhereUniqueInput[]
    delete?: consultasWhereUniqueInput | consultasWhereUniqueInput[]
    connect?: consultasWhereUniqueInput | consultasWhereUniqueInput[]
    update?: consultasUpdateWithWhereUniqueWithoutPacientesInput | consultasUpdateWithWhereUniqueWithoutPacientesInput[]
    updateMany?: consultasUpdateManyWithWhereWithoutPacientesInput | consultasUpdateManyWithWhereWithoutPacientesInput[]
    deleteMany?: consultasScalarWhereInput | consultasScalarWhereInput[]
  }

  export type examesUpdateManyWithoutPacientesNestedInput = {
    create?: XOR<examesCreateWithoutPacientesInput, examesUncheckedCreateWithoutPacientesInput> | examesCreateWithoutPacientesInput[] | examesUncheckedCreateWithoutPacientesInput[]
    connectOrCreate?: examesCreateOrConnectWithoutPacientesInput | examesCreateOrConnectWithoutPacientesInput[]
    upsert?: examesUpsertWithWhereUniqueWithoutPacientesInput | examesUpsertWithWhereUniqueWithoutPacientesInput[]
    createMany?: examesCreateManyPacientesInputEnvelope
    set?: examesWhereUniqueInput | examesWhereUniqueInput[]
    disconnect?: examesWhereUniqueInput | examesWhereUniqueInput[]
    delete?: examesWhereUniqueInput | examesWhereUniqueInput[]
    connect?: examesWhereUniqueInput | examesWhereUniqueInput[]
    update?: examesUpdateWithWhereUniqueWithoutPacientesInput | examesUpdateWithWhereUniqueWithoutPacientesInput[]
    updateMany?: examesUpdateManyWithWhereWithoutPacientesInput | examesUpdateManyWithWhereWithoutPacientesInput[]
    deleteMany?: examesScalarWhereInput | examesScalarWhereInput[]
  }

  export type consultasUncheckedUpdateManyWithoutPacientesNestedInput = {
    create?: XOR<consultasCreateWithoutPacientesInput, consultasUncheckedCreateWithoutPacientesInput> | consultasCreateWithoutPacientesInput[] | consultasUncheckedCreateWithoutPacientesInput[]
    connectOrCreate?: consultasCreateOrConnectWithoutPacientesInput | consultasCreateOrConnectWithoutPacientesInput[]
    upsert?: consultasUpsertWithWhereUniqueWithoutPacientesInput | consultasUpsertWithWhereUniqueWithoutPacientesInput[]
    createMany?: consultasCreateManyPacientesInputEnvelope
    set?: consultasWhereUniqueInput | consultasWhereUniqueInput[]
    disconnect?: consultasWhereUniqueInput | consultasWhereUniqueInput[]
    delete?: consultasWhereUniqueInput | consultasWhereUniqueInput[]
    connect?: consultasWhereUniqueInput | consultasWhereUniqueInput[]
    update?: consultasUpdateWithWhereUniqueWithoutPacientesInput | consultasUpdateWithWhereUniqueWithoutPacientesInput[]
    updateMany?: consultasUpdateManyWithWhereWithoutPacientesInput | consultasUpdateManyWithWhereWithoutPacientesInput[]
    deleteMany?: consultasScalarWhereInput | consultasScalarWhereInput[]
  }

  export type examesUncheckedUpdateManyWithoutPacientesNestedInput = {
    create?: XOR<examesCreateWithoutPacientesInput, examesUncheckedCreateWithoutPacientesInput> | examesCreateWithoutPacientesInput[] | examesUncheckedCreateWithoutPacientesInput[]
    connectOrCreate?: examesCreateOrConnectWithoutPacientesInput | examesCreateOrConnectWithoutPacientesInput[]
    upsert?: examesUpsertWithWhereUniqueWithoutPacientesInput | examesUpsertWithWhereUniqueWithoutPacientesInput[]
    createMany?: examesCreateManyPacientesInputEnvelope
    set?: examesWhereUniqueInput | examesWhereUniqueInput[]
    disconnect?: examesWhereUniqueInput | examesWhereUniqueInput[]
    delete?: examesWhereUniqueInput | examesWhereUniqueInput[]
    connect?: examesWhereUniqueInput | examesWhereUniqueInput[]
    update?: examesUpdateWithWhereUniqueWithoutPacientesInput | examesUpdateWithWhereUniqueWithoutPacientesInput[]
    updateMany?: examesUpdateManyWithWhereWithoutPacientesInput | examesUpdateManyWithWhereWithoutPacientesInput[]
    deleteMany?: examesScalarWhereInput | examesScalarWhereInput[]
  }

  export type consultasCreateNestedOneWithoutPagamentosInput = {
    create?: XOR<consultasCreateWithoutPagamentosInput, consultasUncheckedCreateWithoutPagamentosInput>
    connectOrCreate?: consultasCreateOrConnectWithoutPagamentosInput
    connect?: consultasWhereUniqueInput
  }

  export type consultasUpdateOneRequiredWithoutPagamentosNestedInput = {
    create?: XOR<consultasCreateWithoutPagamentosInput, consultasUncheckedCreateWithoutPagamentosInput>
    connectOrCreate?: consultasCreateOrConnectWithoutPagamentosInput
    upsert?: consultasUpsertWithoutPagamentosInput
    connect?: consultasWhereUniqueInput
    update?: XOR<XOR<consultasUpdateToOneWithWhereWithoutPagamentosInput, consultasUpdateWithoutPagamentosInput>, consultasUncheckedUpdateWithoutPagamentosInput>
  }

  export type consultasCreateNestedManyWithoutPlanosInput = {
    create?: XOR<consultasCreateWithoutPlanosInput, consultasUncheckedCreateWithoutPlanosInput> | consultasCreateWithoutPlanosInput[] | consultasUncheckedCreateWithoutPlanosInput[]
    connectOrCreate?: consultasCreateOrConnectWithoutPlanosInput | consultasCreateOrConnectWithoutPlanosInput[]
    createMany?: consultasCreateManyPlanosInputEnvelope
    connect?: consultasWhereUniqueInput | consultasWhereUniqueInput[]
  }

  export type operadorasCreateNestedOneWithoutPlanosInput = {
    create?: XOR<operadorasCreateWithoutPlanosInput, operadorasUncheckedCreateWithoutPlanosInput>
    connectOrCreate?: operadorasCreateOrConnectWithoutPlanosInput
    connect?: operadorasWhereUniqueInput
  }

  export type consultasUncheckedCreateNestedManyWithoutPlanosInput = {
    create?: XOR<consultasCreateWithoutPlanosInput, consultasUncheckedCreateWithoutPlanosInput> | consultasCreateWithoutPlanosInput[] | consultasUncheckedCreateWithoutPlanosInput[]
    connectOrCreate?: consultasCreateOrConnectWithoutPlanosInput | consultasCreateOrConnectWithoutPlanosInput[]
    createMany?: consultasCreateManyPlanosInputEnvelope
    connect?: consultasWhereUniqueInput | consultasWhereUniqueInput[]
  }

  export type consultasUpdateManyWithoutPlanosNestedInput = {
    create?: XOR<consultasCreateWithoutPlanosInput, consultasUncheckedCreateWithoutPlanosInput> | consultasCreateWithoutPlanosInput[] | consultasUncheckedCreateWithoutPlanosInput[]
    connectOrCreate?: consultasCreateOrConnectWithoutPlanosInput | consultasCreateOrConnectWithoutPlanosInput[]
    upsert?: consultasUpsertWithWhereUniqueWithoutPlanosInput | consultasUpsertWithWhereUniqueWithoutPlanosInput[]
    createMany?: consultasCreateManyPlanosInputEnvelope
    set?: consultasWhereUniqueInput | consultasWhereUniqueInput[]
    disconnect?: consultasWhereUniqueInput | consultasWhereUniqueInput[]
    delete?: consultasWhereUniqueInput | consultasWhereUniqueInput[]
    connect?: consultasWhereUniqueInput | consultasWhereUniqueInput[]
    update?: consultasUpdateWithWhereUniqueWithoutPlanosInput | consultasUpdateWithWhereUniqueWithoutPlanosInput[]
    updateMany?: consultasUpdateManyWithWhereWithoutPlanosInput | consultasUpdateManyWithWhereWithoutPlanosInput[]
    deleteMany?: consultasScalarWhereInput | consultasScalarWhereInput[]
  }

  export type operadorasUpdateOneRequiredWithoutPlanosNestedInput = {
    create?: XOR<operadorasCreateWithoutPlanosInput, operadorasUncheckedCreateWithoutPlanosInput>
    connectOrCreate?: operadorasCreateOrConnectWithoutPlanosInput
    upsert?: operadorasUpsertWithoutPlanosInput
    connect?: operadorasWhereUniqueInput
    update?: XOR<XOR<operadorasUpdateToOneWithWhereWithoutPlanosInput, operadorasUpdateWithoutPlanosInput>, operadorasUncheckedUpdateWithoutPlanosInput>
  }

  export type consultasUncheckedUpdateManyWithoutPlanosNestedInput = {
    create?: XOR<consultasCreateWithoutPlanosInput, consultasUncheckedCreateWithoutPlanosInput> | consultasCreateWithoutPlanosInput[] | consultasUncheckedCreateWithoutPlanosInput[]
    connectOrCreate?: consultasCreateOrConnectWithoutPlanosInput | consultasCreateOrConnectWithoutPlanosInput[]
    upsert?: consultasUpsertWithWhereUniqueWithoutPlanosInput | consultasUpsertWithWhereUniqueWithoutPlanosInput[]
    createMany?: consultasCreateManyPlanosInputEnvelope
    set?: consultasWhereUniqueInput | consultasWhereUniqueInput[]
    disconnect?: consultasWhereUniqueInput | consultasWhereUniqueInput[]
    delete?: consultasWhereUniqueInput | consultasWhereUniqueInput[]
    connect?: consultasWhereUniqueInput | consultasWhereUniqueInput[]
    update?: consultasUpdateWithWhereUniqueWithoutPlanosInput | consultasUpdateWithWhereUniqueWithoutPlanosInput[]
    updateMany?: consultasUpdateManyWithWhereWithoutPlanosInput | consultasUpdateManyWithWhereWithoutPlanosInput[]
    deleteMany?: consultasScalarWhereInput | consultasScalarWhereInput[]
  }

  export type consultasCreateNestedManyWithoutStatusInput = {
    create?: XOR<consultasCreateWithoutStatusInput, consultasUncheckedCreateWithoutStatusInput> | consultasCreateWithoutStatusInput[] | consultasUncheckedCreateWithoutStatusInput[]
    connectOrCreate?: consultasCreateOrConnectWithoutStatusInput | consultasCreateOrConnectWithoutStatusInput[]
    createMany?: consultasCreateManyStatusInputEnvelope
    connect?: consultasWhereUniqueInput | consultasWhereUniqueInput[]
  }

  export type consultasUncheckedCreateNestedManyWithoutStatusInput = {
    create?: XOR<consultasCreateWithoutStatusInput, consultasUncheckedCreateWithoutStatusInput> | consultasCreateWithoutStatusInput[] | consultasUncheckedCreateWithoutStatusInput[]
    connectOrCreate?: consultasCreateOrConnectWithoutStatusInput | consultasCreateOrConnectWithoutStatusInput[]
    createMany?: consultasCreateManyStatusInputEnvelope
    connect?: consultasWhereUniqueInput | consultasWhereUniqueInput[]
  }

  export type consultasUpdateManyWithoutStatusNestedInput = {
    create?: XOR<consultasCreateWithoutStatusInput, consultasUncheckedCreateWithoutStatusInput> | consultasCreateWithoutStatusInput[] | consultasUncheckedCreateWithoutStatusInput[]
    connectOrCreate?: consultasCreateOrConnectWithoutStatusInput | consultasCreateOrConnectWithoutStatusInput[]
    upsert?: consultasUpsertWithWhereUniqueWithoutStatusInput | consultasUpsertWithWhereUniqueWithoutStatusInput[]
    createMany?: consultasCreateManyStatusInputEnvelope
    set?: consultasWhereUniqueInput | consultasWhereUniqueInput[]
    disconnect?: consultasWhereUniqueInput | consultasWhereUniqueInput[]
    delete?: consultasWhereUniqueInput | consultasWhereUniqueInput[]
    connect?: consultasWhereUniqueInput | consultasWhereUniqueInput[]
    update?: consultasUpdateWithWhereUniqueWithoutStatusInput | consultasUpdateWithWhereUniqueWithoutStatusInput[]
    updateMany?: consultasUpdateManyWithWhereWithoutStatusInput | consultasUpdateManyWithWhereWithoutStatusInput[]
    deleteMany?: consultasScalarWhereInput | consultasScalarWhereInput[]
  }

  export type consultasUncheckedUpdateManyWithoutStatusNestedInput = {
    create?: XOR<consultasCreateWithoutStatusInput, consultasUncheckedCreateWithoutStatusInput> | consultasCreateWithoutStatusInput[] | consultasUncheckedCreateWithoutStatusInput[]
    connectOrCreate?: consultasCreateOrConnectWithoutStatusInput | consultasCreateOrConnectWithoutStatusInput[]
    upsert?: consultasUpsertWithWhereUniqueWithoutStatusInput | consultasUpsertWithWhereUniqueWithoutStatusInput[]
    createMany?: consultasCreateManyStatusInputEnvelope
    set?: consultasWhereUniqueInput | consultasWhereUniqueInput[]
    disconnect?: consultasWhereUniqueInput | consultasWhereUniqueInput[]
    delete?: consultasWhereUniqueInput | consultasWhereUniqueInput[]
    connect?: consultasWhereUniqueInput | consultasWhereUniqueInput[]
    update?: consultasUpdateWithWhereUniqueWithoutStatusInput | consultasUpdateWithWhereUniqueWithoutStatusInput[]
    updateMany?: consultasUpdateManyWithWhereWithoutStatusInput | consultasUpdateManyWithWhereWithoutStatusInput[]
    deleteMany?: consultasScalarWhereInput | consultasScalarWhereInput[]
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type statusCreateWithoutConsultasInput = {
    status_nome: string
  }

  export type statusUncheckedCreateWithoutConsultasInput = {
    status_id?: number
    status_nome: string
  }

  export type statusCreateOrConnectWithoutConsultasInput = {
    where: statusWhereUniqueInput
    create: XOR<statusCreateWithoutConsultasInput, statusUncheckedCreateWithoutConsultasInput>
  }

  export type medicosCreateWithoutConsultasInput = {
    medico_nome: string
    medico_crm: string
    medico_telefone: string
    medico_email: string
    especialidades: especialidadesCreateNestedOneWithoutMedicosInput
  }

  export type medicosUncheckedCreateWithoutConsultasInput = {
    medico_id?: number
    medico_nome: string
    medico_crm: string
    medico_telefone: string
    medico_email: string
    especialidade_id: number
  }

  export type medicosCreateOrConnectWithoutConsultasInput = {
    where: medicosWhereUniqueInput
    create: XOR<medicosCreateWithoutConsultasInput, medicosUncheckedCreateWithoutConsultasInput>
  }

  export type pacientesCreateWithoutConsultasInput = {
    paciente_nome: string
    paciente_genero: string
    paciente_nascimento: string
    paciente_email?: string | null
    paciente_telefone: string
    exames?: examesCreateNestedManyWithoutPacientesInput
  }

  export type pacientesUncheckedCreateWithoutConsultasInput = {
    paciente_id?: number
    paciente_nome: string
    paciente_genero: string
    paciente_nascimento: string
    paciente_email?: string | null
    paciente_telefone: string
    exames?: examesUncheckedCreateNestedManyWithoutPacientesInput
  }

  export type pacientesCreateOrConnectWithoutConsultasInput = {
    where: pacientesWhereUniqueInput
    create: XOR<pacientesCreateWithoutConsultasInput, pacientesUncheckedCreateWithoutConsultasInput>
  }

  export type planosCreateWithoutConsultasInput = {
    plano_nome: string
    operadoras: operadorasCreateNestedOneWithoutPlanosInput
  }

  export type planosUncheckedCreateWithoutConsultasInput = {
    plano_id?: number
    plano_nome: string
    operadora_id: number
  }

  export type planosCreateOrConnectWithoutConsultasInput = {
    where: planosWhereUniqueInput
    create: XOR<planosCreateWithoutConsultasInput, planosUncheckedCreateWithoutConsultasInput>
  }

  export type pagamentosCreateWithoutConsultasInput = {
    pagamento_valor: number
    pagamento_data: string
    pagamento_status: string
    pagamento_metodo: string
  }

  export type pagamentosUncheckedCreateWithoutConsultasInput = {
    pagamento_id?: number
    pagamento_valor: number
    pagamento_data: string
    pagamento_status: string
    pagamento_metodo: string
  }

  export type pagamentosCreateOrConnectWithoutConsultasInput = {
    where: pagamentosWhereUniqueInput
    create: XOR<pagamentosCreateWithoutConsultasInput, pagamentosUncheckedCreateWithoutConsultasInput>
  }

  export type pagamentosCreateManyConsultasInputEnvelope = {
    data: pagamentosCreateManyConsultasInput | pagamentosCreateManyConsultasInput[]
    skipDuplicates?: boolean
  }

  export type statusUpsertWithoutConsultasInput = {
    update: XOR<statusUpdateWithoutConsultasInput, statusUncheckedUpdateWithoutConsultasInput>
    create: XOR<statusCreateWithoutConsultasInput, statusUncheckedCreateWithoutConsultasInput>
    where?: statusWhereInput
  }

  export type statusUpdateToOneWithWhereWithoutConsultasInput = {
    where?: statusWhereInput
    data: XOR<statusUpdateWithoutConsultasInput, statusUncheckedUpdateWithoutConsultasInput>
  }

  export type statusUpdateWithoutConsultasInput = {
    status_nome?: StringFieldUpdateOperationsInput | string
  }

  export type statusUncheckedUpdateWithoutConsultasInput = {
    status_id?: IntFieldUpdateOperationsInput | number
    status_nome?: StringFieldUpdateOperationsInput | string
  }

  export type medicosUpsertWithoutConsultasInput = {
    update: XOR<medicosUpdateWithoutConsultasInput, medicosUncheckedUpdateWithoutConsultasInput>
    create: XOR<medicosCreateWithoutConsultasInput, medicosUncheckedCreateWithoutConsultasInput>
    where?: medicosWhereInput
  }

  export type medicosUpdateToOneWithWhereWithoutConsultasInput = {
    where?: medicosWhereInput
    data: XOR<medicosUpdateWithoutConsultasInput, medicosUncheckedUpdateWithoutConsultasInput>
  }

  export type medicosUpdateWithoutConsultasInput = {
    medico_nome?: StringFieldUpdateOperationsInput | string
    medico_crm?: StringFieldUpdateOperationsInput | string
    medico_telefone?: StringFieldUpdateOperationsInput | string
    medico_email?: StringFieldUpdateOperationsInput | string
    especialidades?: especialidadesUpdateOneRequiredWithoutMedicosNestedInput
  }

  export type medicosUncheckedUpdateWithoutConsultasInput = {
    medico_id?: IntFieldUpdateOperationsInput | number
    medico_nome?: StringFieldUpdateOperationsInput | string
    medico_crm?: StringFieldUpdateOperationsInput | string
    medico_telefone?: StringFieldUpdateOperationsInput | string
    medico_email?: StringFieldUpdateOperationsInput | string
    especialidade_id?: IntFieldUpdateOperationsInput | number
  }

  export type pacientesUpsertWithoutConsultasInput = {
    update: XOR<pacientesUpdateWithoutConsultasInput, pacientesUncheckedUpdateWithoutConsultasInput>
    create: XOR<pacientesCreateWithoutConsultasInput, pacientesUncheckedCreateWithoutConsultasInput>
    where?: pacientesWhereInput
  }

  export type pacientesUpdateToOneWithWhereWithoutConsultasInput = {
    where?: pacientesWhereInput
    data: XOR<pacientesUpdateWithoutConsultasInput, pacientesUncheckedUpdateWithoutConsultasInput>
  }

  export type pacientesUpdateWithoutConsultasInput = {
    paciente_nome?: StringFieldUpdateOperationsInput | string
    paciente_genero?: StringFieldUpdateOperationsInput | string
    paciente_nascimento?: StringFieldUpdateOperationsInput | string
    paciente_email?: NullableStringFieldUpdateOperationsInput | string | null
    paciente_telefone?: StringFieldUpdateOperationsInput | string
    exames?: examesUpdateManyWithoutPacientesNestedInput
  }

  export type pacientesUncheckedUpdateWithoutConsultasInput = {
    paciente_id?: IntFieldUpdateOperationsInput | number
    paciente_nome?: StringFieldUpdateOperationsInput | string
    paciente_genero?: StringFieldUpdateOperationsInput | string
    paciente_nascimento?: StringFieldUpdateOperationsInput | string
    paciente_email?: NullableStringFieldUpdateOperationsInput | string | null
    paciente_telefone?: StringFieldUpdateOperationsInput | string
    exames?: examesUncheckedUpdateManyWithoutPacientesNestedInput
  }

  export type planosUpsertWithoutConsultasInput = {
    update: XOR<planosUpdateWithoutConsultasInput, planosUncheckedUpdateWithoutConsultasInput>
    create: XOR<planosCreateWithoutConsultasInput, planosUncheckedCreateWithoutConsultasInput>
    where?: planosWhereInput
  }

  export type planosUpdateToOneWithWhereWithoutConsultasInput = {
    where?: planosWhereInput
    data: XOR<planosUpdateWithoutConsultasInput, planosUncheckedUpdateWithoutConsultasInput>
  }

  export type planosUpdateWithoutConsultasInput = {
    plano_nome?: StringFieldUpdateOperationsInput | string
    operadoras?: operadorasUpdateOneRequiredWithoutPlanosNestedInput
  }

  export type planosUncheckedUpdateWithoutConsultasInput = {
    plano_id?: IntFieldUpdateOperationsInput | number
    plano_nome?: StringFieldUpdateOperationsInput | string
    operadora_id?: IntFieldUpdateOperationsInput | number
  }

  export type pagamentosUpsertWithWhereUniqueWithoutConsultasInput = {
    where: pagamentosWhereUniqueInput
    update: XOR<pagamentosUpdateWithoutConsultasInput, pagamentosUncheckedUpdateWithoutConsultasInput>
    create: XOR<pagamentosCreateWithoutConsultasInput, pagamentosUncheckedCreateWithoutConsultasInput>
  }

  export type pagamentosUpdateWithWhereUniqueWithoutConsultasInput = {
    where: pagamentosWhereUniqueInput
    data: XOR<pagamentosUpdateWithoutConsultasInput, pagamentosUncheckedUpdateWithoutConsultasInput>
  }

  export type pagamentosUpdateManyWithWhereWithoutConsultasInput = {
    where: pagamentosScalarWhereInput
    data: XOR<pagamentosUpdateManyMutationInput, pagamentosUncheckedUpdateManyWithoutConsultasInput>
  }

  export type pagamentosScalarWhereInput = {
    AND?: pagamentosScalarWhereInput | pagamentosScalarWhereInput[]
    OR?: pagamentosScalarWhereInput[]
    NOT?: pagamentosScalarWhereInput | pagamentosScalarWhereInput[]
    pagamento_id?: IntFilter<"pagamentos"> | number
    pagamento_valor?: IntFilter<"pagamentos"> | number
    pagamento_data?: StringFilter<"pagamentos"> | string
    pagamento_status?: StringFilter<"pagamentos"> | string
    pagamento_metodo?: StringFilter<"pagamentos"> | string
    consulta_id?: IntFilter<"pagamentos"> | number
  }

  export type medicosCreateWithoutEspecialidadesInput = {
    medico_nome: string
    medico_crm: string
    medico_telefone: string
    medico_email: string
    consultas?: consultasCreateNestedManyWithoutMedicosInput
  }

  export type medicosUncheckedCreateWithoutEspecialidadesInput = {
    medico_id?: number
    medico_nome: string
    medico_crm: string
    medico_telefone: string
    medico_email: string
    consultas?: consultasUncheckedCreateNestedManyWithoutMedicosInput
  }

  export type medicosCreateOrConnectWithoutEspecialidadesInput = {
    where: medicosWhereUniqueInput
    create: XOR<medicosCreateWithoutEspecialidadesInput, medicosUncheckedCreateWithoutEspecialidadesInput>
  }

  export type medicosCreateManyEspecialidadesInputEnvelope = {
    data: medicosCreateManyEspecialidadesInput | medicosCreateManyEspecialidadesInput[]
    skipDuplicates?: boolean
  }

  export type medicosUpsertWithWhereUniqueWithoutEspecialidadesInput = {
    where: medicosWhereUniqueInput
    update: XOR<medicosUpdateWithoutEspecialidadesInput, medicosUncheckedUpdateWithoutEspecialidadesInput>
    create: XOR<medicosCreateWithoutEspecialidadesInput, medicosUncheckedCreateWithoutEspecialidadesInput>
  }

  export type medicosUpdateWithWhereUniqueWithoutEspecialidadesInput = {
    where: medicosWhereUniqueInput
    data: XOR<medicosUpdateWithoutEspecialidadesInput, medicosUncheckedUpdateWithoutEspecialidadesInput>
  }

  export type medicosUpdateManyWithWhereWithoutEspecialidadesInput = {
    where: medicosScalarWhereInput
    data: XOR<medicosUpdateManyMutationInput, medicosUncheckedUpdateManyWithoutEspecialidadesInput>
  }

  export type medicosScalarWhereInput = {
    AND?: medicosScalarWhereInput | medicosScalarWhereInput[]
    OR?: medicosScalarWhereInput[]
    NOT?: medicosScalarWhereInput | medicosScalarWhereInput[]
    medico_id?: IntFilter<"medicos"> | number
    medico_nome?: StringFilter<"medicos"> | string
    medico_crm?: StringFilter<"medicos"> | string
    medico_telefone?: StringFilter<"medicos"> | string
    medico_email?: StringFilter<"medicos"> | string
    especialidade_id?: IntFilter<"medicos"> | number
  }

  export type pacientesCreateWithoutExamesInput = {
    paciente_nome: string
    paciente_genero: string
    paciente_nascimento: string
    paciente_email?: string | null
    paciente_telefone: string
    consultas?: consultasCreateNestedManyWithoutPacientesInput
  }

  export type pacientesUncheckedCreateWithoutExamesInput = {
    paciente_id?: number
    paciente_nome: string
    paciente_genero: string
    paciente_nascimento: string
    paciente_email?: string | null
    paciente_telefone: string
    consultas?: consultasUncheckedCreateNestedManyWithoutPacientesInput
  }

  export type pacientesCreateOrConnectWithoutExamesInput = {
    where: pacientesWhereUniqueInput
    create: XOR<pacientesCreateWithoutExamesInput, pacientesUncheckedCreateWithoutExamesInput>
  }

  export type pacientesUpsertWithoutExamesInput = {
    update: XOR<pacientesUpdateWithoutExamesInput, pacientesUncheckedUpdateWithoutExamesInput>
    create: XOR<pacientesCreateWithoutExamesInput, pacientesUncheckedCreateWithoutExamesInput>
    where?: pacientesWhereInput
  }

  export type pacientesUpdateToOneWithWhereWithoutExamesInput = {
    where?: pacientesWhereInput
    data: XOR<pacientesUpdateWithoutExamesInput, pacientesUncheckedUpdateWithoutExamesInput>
  }

  export type pacientesUpdateWithoutExamesInput = {
    paciente_nome?: StringFieldUpdateOperationsInput | string
    paciente_genero?: StringFieldUpdateOperationsInput | string
    paciente_nascimento?: StringFieldUpdateOperationsInput | string
    paciente_email?: NullableStringFieldUpdateOperationsInput | string | null
    paciente_telefone?: StringFieldUpdateOperationsInput | string
    consultas?: consultasUpdateManyWithoutPacientesNestedInput
  }

  export type pacientesUncheckedUpdateWithoutExamesInput = {
    paciente_id?: IntFieldUpdateOperationsInput | number
    paciente_nome?: StringFieldUpdateOperationsInput | string
    paciente_genero?: StringFieldUpdateOperationsInput | string
    paciente_nascimento?: StringFieldUpdateOperationsInput | string
    paciente_email?: NullableStringFieldUpdateOperationsInput | string | null
    paciente_telefone?: StringFieldUpdateOperationsInput | string
    consultas?: consultasUncheckedUpdateManyWithoutPacientesNestedInput
  }

  export type consultasCreateWithoutMedicosInput = {
    consulta_data: string
    status: statusCreateNestedOneWithoutConsultasInput
    pacientes: pacientesCreateNestedOneWithoutConsultasInput
    planos: planosCreateNestedOneWithoutConsultasInput
    pagamentos?: pagamentosCreateNestedManyWithoutConsultasInput
  }

  export type consultasUncheckedCreateWithoutMedicosInput = {
    consulta_id?: number
    consulta_data: string
    status_id: number
    paciente_id: number
    plano_id: number
    pagamentos?: pagamentosUncheckedCreateNestedManyWithoutConsultasInput
  }

  export type consultasCreateOrConnectWithoutMedicosInput = {
    where: consultasWhereUniqueInput
    create: XOR<consultasCreateWithoutMedicosInput, consultasUncheckedCreateWithoutMedicosInput>
  }

  export type consultasCreateManyMedicosInputEnvelope = {
    data: consultasCreateManyMedicosInput | consultasCreateManyMedicosInput[]
    skipDuplicates?: boolean
  }

  export type especialidadesCreateWithoutMedicosInput = {
    especialidade_nome: string
  }

  export type especialidadesUncheckedCreateWithoutMedicosInput = {
    especialidade_id?: number
    especialidade_nome: string
  }

  export type especialidadesCreateOrConnectWithoutMedicosInput = {
    where: especialidadesWhereUniqueInput
    create: XOR<especialidadesCreateWithoutMedicosInput, especialidadesUncheckedCreateWithoutMedicosInput>
  }

  export type consultasUpsertWithWhereUniqueWithoutMedicosInput = {
    where: consultasWhereUniqueInput
    update: XOR<consultasUpdateWithoutMedicosInput, consultasUncheckedUpdateWithoutMedicosInput>
    create: XOR<consultasCreateWithoutMedicosInput, consultasUncheckedCreateWithoutMedicosInput>
  }

  export type consultasUpdateWithWhereUniqueWithoutMedicosInput = {
    where: consultasWhereUniqueInput
    data: XOR<consultasUpdateWithoutMedicosInput, consultasUncheckedUpdateWithoutMedicosInput>
  }

  export type consultasUpdateManyWithWhereWithoutMedicosInput = {
    where: consultasScalarWhereInput
    data: XOR<consultasUpdateManyMutationInput, consultasUncheckedUpdateManyWithoutMedicosInput>
  }

  export type consultasScalarWhereInput = {
    AND?: consultasScalarWhereInput | consultasScalarWhereInput[]
    OR?: consultasScalarWhereInput[]
    NOT?: consultasScalarWhereInput | consultasScalarWhereInput[]
    consulta_id?: IntFilter<"consultas"> | number
    consulta_data?: StringFilter<"consultas"> | string
    status_id?: IntFilter<"consultas"> | number
    medico_id?: IntFilter<"consultas"> | number
    paciente_id?: IntFilter<"consultas"> | number
    plano_id?: IntFilter<"consultas"> | number
  }

  export type especialidadesUpsertWithoutMedicosInput = {
    update: XOR<especialidadesUpdateWithoutMedicosInput, especialidadesUncheckedUpdateWithoutMedicosInput>
    create: XOR<especialidadesCreateWithoutMedicosInput, especialidadesUncheckedCreateWithoutMedicosInput>
    where?: especialidadesWhereInput
  }

  export type especialidadesUpdateToOneWithWhereWithoutMedicosInput = {
    where?: especialidadesWhereInput
    data: XOR<especialidadesUpdateWithoutMedicosInput, especialidadesUncheckedUpdateWithoutMedicosInput>
  }

  export type especialidadesUpdateWithoutMedicosInput = {
    especialidade_nome?: StringFieldUpdateOperationsInput | string
  }

  export type especialidadesUncheckedUpdateWithoutMedicosInput = {
    especialidade_id?: IntFieldUpdateOperationsInput | number
    especialidade_nome?: StringFieldUpdateOperationsInput | string
  }

  export type planosCreateWithoutOperadorasInput = {
    plano_nome: string
    consultas?: consultasCreateNestedManyWithoutPlanosInput
  }

  export type planosUncheckedCreateWithoutOperadorasInput = {
    plano_id?: number
    plano_nome: string
    consultas?: consultasUncheckedCreateNestedManyWithoutPlanosInput
  }

  export type planosCreateOrConnectWithoutOperadorasInput = {
    where: planosWhereUniqueInput
    create: XOR<planosCreateWithoutOperadorasInput, planosUncheckedCreateWithoutOperadorasInput>
  }

  export type planosCreateManyOperadorasInputEnvelope = {
    data: planosCreateManyOperadorasInput | planosCreateManyOperadorasInput[]
    skipDuplicates?: boolean
  }

  export type planosUpsertWithWhereUniqueWithoutOperadorasInput = {
    where: planosWhereUniqueInput
    update: XOR<planosUpdateWithoutOperadorasInput, planosUncheckedUpdateWithoutOperadorasInput>
    create: XOR<planosCreateWithoutOperadorasInput, planosUncheckedCreateWithoutOperadorasInput>
  }

  export type planosUpdateWithWhereUniqueWithoutOperadorasInput = {
    where: planosWhereUniqueInput
    data: XOR<planosUpdateWithoutOperadorasInput, planosUncheckedUpdateWithoutOperadorasInput>
  }

  export type planosUpdateManyWithWhereWithoutOperadorasInput = {
    where: planosScalarWhereInput
    data: XOR<planosUpdateManyMutationInput, planosUncheckedUpdateManyWithoutOperadorasInput>
  }

  export type planosScalarWhereInput = {
    AND?: planosScalarWhereInput | planosScalarWhereInput[]
    OR?: planosScalarWhereInput[]
    NOT?: planosScalarWhereInput | planosScalarWhereInput[]
    plano_id?: IntFilter<"planos"> | number
    plano_nome?: StringFilter<"planos"> | string
    operadora_id?: IntFilter<"planos"> | number
  }

  export type consultasCreateWithoutPacientesInput = {
    consulta_data: string
    status: statusCreateNestedOneWithoutConsultasInput
    medicos: medicosCreateNestedOneWithoutConsultasInput
    planos: planosCreateNestedOneWithoutConsultasInput
    pagamentos?: pagamentosCreateNestedManyWithoutConsultasInput
  }

  export type consultasUncheckedCreateWithoutPacientesInput = {
    consulta_id?: number
    consulta_data: string
    status_id: number
    medico_id: number
    plano_id: number
    pagamentos?: pagamentosUncheckedCreateNestedManyWithoutConsultasInput
  }

  export type consultasCreateOrConnectWithoutPacientesInput = {
    where: consultasWhereUniqueInput
    create: XOR<consultasCreateWithoutPacientesInput, consultasUncheckedCreateWithoutPacientesInput>
  }

  export type consultasCreateManyPacientesInputEnvelope = {
    data: consultasCreateManyPacientesInput | consultasCreateManyPacientesInput[]
    skipDuplicates?: boolean
  }

  export type examesCreateWithoutPacientesInput = {
    exame_nome: string
  }

  export type examesUncheckedCreateWithoutPacientesInput = {
    exame_id?: number
    exame_nome: string
  }

  export type examesCreateOrConnectWithoutPacientesInput = {
    where: examesWhereUniqueInput
    create: XOR<examesCreateWithoutPacientesInput, examesUncheckedCreateWithoutPacientesInput>
  }

  export type examesCreateManyPacientesInputEnvelope = {
    data: examesCreateManyPacientesInput | examesCreateManyPacientesInput[]
    skipDuplicates?: boolean
  }

  export type consultasUpsertWithWhereUniqueWithoutPacientesInput = {
    where: consultasWhereUniqueInput
    update: XOR<consultasUpdateWithoutPacientesInput, consultasUncheckedUpdateWithoutPacientesInput>
    create: XOR<consultasCreateWithoutPacientesInput, consultasUncheckedCreateWithoutPacientesInput>
  }

  export type consultasUpdateWithWhereUniqueWithoutPacientesInput = {
    where: consultasWhereUniqueInput
    data: XOR<consultasUpdateWithoutPacientesInput, consultasUncheckedUpdateWithoutPacientesInput>
  }

  export type consultasUpdateManyWithWhereWithoutPacientesInput = {
    where: consultasScalarWhereInput
    data: XOR<consultasUpdateManyMutationInput, consultasUncheckedUpdateManyWithoutPacientesInput>
  }

  export type examesUpsertWithWhereUniqueWithoutPacientesInput = {
    where: examesWhereUniqueInput
    update: XOR<examesUpdateWithoutPacientesInput, examesUncheckedUpdateWithoutPacientesInput>
    create: XOR<examesCreateWithoutPacientesInput, examesUncheckedCreateWithoutPacientesInput>
  }

  export type examesUpdateWithWhereUniqueWithoutPacientesInput = {
    where: examesWhereUniqueInput
    data: XOR<examesUpdateWithoutPacientesInput, examesUncheckedUpdateWithoutPacientesInput>
  }

  export type examesUpdateManyWithWhereWithoutPacientesInput = {
    where: examesScalarWhereInput
    data: XOR<examesUpdateManyMutationInput, examesUncheckedUpdateManyWithoutPacientesInput>
  }

  export type examesScalarWhereInput = {
    AND?: examesScalarWhereInput | examesScalarWhereInput[]
    OR?: examesScalarWhereInput[]
    NOT?: examesScalarWhereInput | examesScalarWhereInput[]
    exame_id?: IntFilter<"exames"> | number
    exame_nome?: StringFilter<"exames"> | string
    paciente_id?: IntFilter<"exames"> | number
  }

  export type consultasCreateWithoutPagamentosInput = {
    consulta_data: string
    status: statusCreateNestedOneWithoutConsultasInput
    medicos: medicosCreateNestedOneWithoutConsultasInput
    pacientes: pacientesCreateNestedOneWithoutConsultasInput
    planos: planosCreateNestedOneWithoutConsultasInput
  }

  export type consultasUncheckedCreateWithoutPagamentosInput = {
    consulta_id?: number
    consulta_data: string
    status_id: number
    medico_id: number
    paciente_id: number
    plano_id: number
  }

  export type consultasCreateOrConnectWithoutPagamentosInput = {
    where: consultasWhereUniqueInput
    create: XOR<consultasCreateWithoutPagamentosInput, consultasUncheckedCreateWithoutPagamentosInput>
  }

  export type consultasUpsertWithoutPagamentosInput = {
    update: XOR<consultasUpdateWithoutPagamentosInput, consultasUncheckedUpdateWithoutPagamentosInput>
    create: XOR<consultasCreateWithoutPagamentosInput, consultasUncheckedCreateWithoutPagamentosInput>
    where?: consultasWhereInput
  }

  export type consultasUpdateToOneWithWhereWithoutPagamentosInput = {
    where?: consultasWhereInput
    data: XOR<consultasUpdateWithoutPagamentosInput, consultasUncheckedUpdateWithoutPagamentosInput>
  }

  export type consultasUpdateWithoutPagamentosInput = {
    consulta_data?: StringFieldUpdateOperationsInput | string
    status?: statusUpdateOneRequiredWithoutConsultasNestedInput
    medicos?: medicosUpdateOneRequiredWithoutConsultasNestedInput
    pacientes?: pacientesUpdateOneRequiredWithoutConsultasNestedInput
    planos?: planosUpdateOneRequiredWithoutConsultasNestedInput
  }

  export type consultasUncheckedUpdateWithoutPagamentosInput = {
    consulta_id?: IntFieldUpdateOperationsInput | number
    consulta_data?: StringFieldUpdateOperationsInput | string
    status_id?: IntFieldUpdateOperationsInput | number
    medico_id?: IntFieldUpdateOperationsInput | number
    paciente_id?: IntFieldUpdateOperationsInput | number
    plano_id?: IntFieldUpdateOperationsInput | number
  }

  export type consultasCreateWithoutPlanosInput = {
    consulta_data: string
    status: statusCreateNestedOneWithoutConsultasInput
    medicos: medicosCreateNestedOneWithoutConsultasInput
    pacientes: pacientesCreateNestedOneWithoutConsultasInput
    pagamentos?: pagamentosCreateNestedManyWithoutConsultasInput
  }

  export type consultasUncheckedCreateWithoutPlanosInput = {
    consulta_id?: number
    consulta_data: string
    status_id: number
    medico_id: number
    paciente_id: number
    pagamentos?: pagamentosUncheckedCreateNestedManyWithoutConsultasInput
  }

  export type consultasCreateOrConnectWithoutPlanosInput = {
    where: consultasWhereUniqueInput
    create: XOR<consultasCreateWithoutPlanosInput, consultasUncheckedCreateWithoutPlanosInput>
  }

  export type consultasCreateManyPlanosInputEnvelope = {
    data: consultasCreateManyPlanosInput | consultasCreateManyPlanosInput[]
    skipDuplicates?: boolean
  }

  export type operadorasCreateWithoutPlanosInput = {
    operadora_nome: string
    operadora_cobertura: string
    operadora_preco: number
  }

  export type operadorasUncheckedCreateWithoutPlanosInput = {
    operadora_id?: number
    operadora_nome: string
    operadora_cobertura: string
    operadora_preco: number
  }

  export type operadorasCreateOrConnectWithoutPlanosInput = {
    where: operadorasWhereUniqueInput
    create: XOR<operadorasCreateWithoutPlanosInput, operadorasUncheckedCreateWithoutPlanosInput>
  }

  export type consultasUpsertWithWhereUniqueWithoutPlanosInput = {
    where: consultasWhereUniqueInput
    update: XOR<consultasUpdateWithoutPlanosInput, consultasUncheckedUpdateWithoutPlanosInput>
    create: XOR<consultasCreateWithoutPlanosInput, consultasUncheckedCreateWithoutPlanosInput>
  }

  export type consultasUpdateWithWhereUniqueWithoutPlanosInput = {
    where: consultasWhereUniqueInput
    data: XOR<consultasUpdateWithoutPlanosInput, consultasUncheckedUpdateWithoutPlanosInput>
  }

  export type consultasUpdateManyWithWhereWithoutPlanosInput = {
    where: consultasScalarWhereInput
    data: XOR<consultasUpdateManyMutationInput, consultasUncheckedUpdateManyWithoutPlanosInput>
  }

  export type operadorasUpsertWithoutPlanosInput = {
    update: XOR<operadorasUpdateWithoutPlanosInput, operadorasUncheckedUpdateWithoutPlanosInput>
    create: XOR<operadorasCreateWithoutPlanosInput, operadorasUncheckedCreateWithoutPlanosInput>
    where?: operadorasWhereInput
  }

  export type operadorasUpdateToOneWithWhereWithoutPlanosInput = {
    where?: operadorasWhereInput
    data: XOR<operadorasUpdateWithoutPlanosInput, operadorasUncheckedUpdateWithoutPlanosInput>
  }

  export type operadorasUpdateWithoutPlanosInput = {
    operadora_nome?: StringFieldUpdateOperationsInput | string
    operadora_cobertura?: StringFieldUpdateOperationsInput | string
    operadora_preco?: FloatFieldUpdateOperationsInput | number
  }

  export type operadorasUncheckedUpdateWithoutPlanosInput = {
    operadora_id?: IntFieldUpdateOperationsInput | number
    operadora_nome?: StringFieldUpdateOperationsInput | string
    operadora_cobertura?: StringFieldUpdateOperationsInput | string
    operadora_preco?: FloatFieldUpdateOperationsInput | number
  }

  export type consultasCreateWithoutStatusInput = {
    consulta_data: string
    medicos: medicosCreateNestedOneWithoutConsultasInput
    pacientes: pacientesCreateNestedOneWithoutConsultasInput
    planos: planosCreateNestedOneWithoutConsultasInput
    pagamentos?: pagamentosCreateNestedManyWithoutConsultasInput
  }

  export type consultasUncheckedCreateWithoutStatusInput = {
    consulta_id?: number
    consulta_data: string
    medico_id: number
    paciente_id: number
    plano_id: number
    pagamentos?: pagamentosUncheckedCreateNestedManyWithoutConsultasInput
  }

  export type consultasCreateOrConnectWithoutStatusInput = {
    where: consultasWhereUniqueInput
    create: XOR<consultasCreateWithoutStatusInput, consultasUncheckedCreateWithoutStatusInput>
  }

  export type consultasCreateManyStatusInputEnvelope = {
    data: consultasCreateManyStatusInput | consultasCreateManyStatusInput[]
    skipDuplicates?: boolean
  }

  export type consultasUpsertWithWhereUniqueWithoutStatusInput = {
    where: consultasWhereUniqueInput
    update: XOR<consultasUpdateWithoutStatusInput, consultasUncheckedUpdateWithoutStatusInput>
    create: XOR<consultasCreateWithoutStatusInput, consultasUncheckedCreateWithoutStatusInput>
  }

  export type consultasUpdateWithWhereUniqueWithoutStatusInput = {
    where: consultasWhereUniqueInput
    data: XOR<consultasUpdateWithoutStatusInput, consultasUncheckedUpdateWithoutStatusInput>
  }

  export type consultasUpdateManyWithWhereWithoutStatusInput = {
    where: consultasScalarWhereInput
    data: XOR<consultasUpdateManyMutationInput, consultasUncheckedUpdateManyWithoutStatusInput>
  }

  export type pagamentosCreateManyConsultasInput = {
    pagamento_id?: number
    pagamento_valor: number
    pagamento_data: string
    pagamento_status: string
    pagamento_metodo: string
  }

  export type pagamentosUpdateWithoutConsultasInput = {
    pagamento_valor?: IntFieldUpdateOperationsInput | number
    pagamento_data?: StringFieldUpdateOperationsInput | string
    pagamento_status?: StringFieldUpdateOperationsInput | string
    pagamento_metodo?: StringFieldUpdateOperationsInput | string
  }

  export type pagamentosUncheckedUpdateWithoutConsultasInput = {
    pagamento_id?: IntFieldUpdateOperationsInput | number
    pagamento_valor?: IntFieldUpdateOperationsInput | number
    pagamento_data?: StringFieldUpdateOperationsInput | string
    pagamento_status?: StringFieldUpdateOperationsInput | string
    pagamento_metodo?: StringFieldUpdateOperationsInput | string
  }

  export type pagamentosUncheckedUpdateManyWithoutConsultasInput = {
    pagamento_id?: IntFieldUpdateOperationsInput | number
    pagamento_valor?: IntFieldUpdateOperationsInput | number
    pagamento_data?: StringFieldUpdateOperationsInput | string
    pagamento_status?: StringFieldUpdateOperationsInput | string
    pagamento_metodo?: StringFieldUpdateOperationsInput | string
  }

  export type medicosCreateManyEspecialidadesInput = {
    medico_id?: number
    medico_nome: string
    medico_crm: string
    medico_telefone: string
    medico_email: string
  }

  export type medicosUpdateWithoutEspecialidadesInput = {
    medico_nome?: StringFieldUpdateOperationsInput | string
    medico_crm?: StringFieldUpdateOperationsInput | string
    medico_telefone?: StringFieldUpdateOperationsInput | string
    medico_email?: StringFieldUpdateOperationsInput | string
    consultas?: consultasUpdateManyWithoutMedicosNestedInput
  }

  export type medicosUncheckedUpdateWithoutEspecialidadesInput = {
    medico_id?: IntFieldUpdateOperationsInput | number
    medico_nome?: StringFieldUpdateOperationsInput | string
    medico_crm?: StringFieldUpdateOperationsInput | string
    medico_telefone?: StringFieldUpdateOperationsInput | string
    medico_email?: StringFieldUpdateOperationsInput | string
    consultas?: consultasUncheckedUpdateManyWithoutMedicosNestedInput
  }

  export type medicosUncheckedUpdateManyWithoutEspecialidadesInput = {
    medico_id?: IntFieldUpdateOperationsInput | number
    medico_nome?: StringFieldUpdateOperationsInput | string
    medico_crm?: StringFieldUpdateOperationsInput | string
    medico_telefone?: StringFieldUpdateOperationsInput | string
    medico_email?: StringFieldUpdateOperationsInput | string
  }

  export type consultasCreateManyMedicosInput = {
    consulta_id?: number
    consulta_data: string
    status_id: number
    paciente_id: number
    plano_id: number
  }

  export type consultasUpdateWithoutMedicosInput = {
    consulta_data?: StringFieldUpdateOperationsInput | string
    status?: statusUpdateOneRequiredWithoutConsultasNestedInput
    pacientes?: pacientesUpdateOneRequiredWithoutConsultasNestedInput
    planos?: planosUpdateOneRequiredWithoutConsultasNestedInput
    pagamentos?: pagamentosUpdateManyWithoutConsultasNestedInput
  }

  export type consultasUncheckedUpdateWithoutMedicosInput = {
    consulta_id?: IntFieldUpdateOperationsInput | number
    consulta_data?: StringFieldUpdateOperationsInput | string
    status_id?: IntFieldUpdateOperationsInput | number
    paciente_id?: IntFieldUpdateOperationsInput | number
    plano_id?: IntFieldUpdateOperationsInput | number
    pagamentos?: pagamentosUncheckedUpdateManyWithoutConsultasNestedInput
  }

  export type consultasUncheckedUpdateManyWithoutMedicosInput = {
    consulta_id?: IntFieldUpdateOperationsInput | number
    consulta_data?: StringFieldUpdateOperationsInput | string
    status_id?: IntFieldUpdateOperationsInput | number
    paciente_id?: IntFieldUpdateOperationsInput | number
    plano_id?: IntFieldUpdateOperationsInput | number
  }

  export type planosCreateManyOperadorasInput = {
    plano_id?: number
    plano_nome: string
  }

  export type planosUpdateWithoutOperadorasInput = {
    plano_nome?: StringFieldUpdateOperationsInput | string
    consultas?: consultasUpdateManyWithoutPlanosNestedInput
  }

  export type planosUncheckedUpdateWithoutOperadorasInput = {
    plano_id?: IntFieldUpdateOperationsInput | number
    plano_nome?: StringFieldUpdateOperationsInput | string
    consultas?: consultasUncheckedUpdateManyWithoutPlanosNestedInput
  }

  export type planosUncheckedUpdateManyWithoutOperadorasInput = {
    plano_id?: IntFieldUpdateOperationsInput | number
    plano_nome?: StringFieldUpdateOperationsInput | string
  }

  export type consultasCreateManyPacientesInput = {
    consulta_id?: number
    consulta_data: string
    status_id: number
    medico_id: number
    plano_id: number
  }

  export type examesCreateManyPacientesInput = {
    exame_id?: number
    exame_nome: string
  }

  export type consultasUpdateWithoutPacientesInput = {
    consulta_data?: StringFieldUpdateOperationsInput | string
    status?: statusUpdateOneRequiredWithoutConsultasNestedInput
    medicos?: medicosUpdateOneRequiredWithoutConsultasNestedInput
    planos?: planosUpdateOneRequiredWithoutConsultasNestedInput
    pagamentos?: pagamentosUpdateManyWithoutConsultasNestedInput
  }

  export type consultasUncheckedUpdateWithoutPacientesInput = {
    consulta_id?: IntFieldUpdateOperationsInput | number
    consulta_data?: StringFieldUpdateOperationsInput | string
    status_id?: IntFieldUpdateOperationsInput | number
    medico_id?: IntFieldUpdateOperationsInput | number
    plano_id?: IntFieldUpdateOperationsInput | number
    pagamentos?: pagamentosUncheckedUpdateManyWithoutConsultasNestedInput
  }

  export type consultasUncheckedUpdateManyWithoutPacientesInput = {
    consulta_id?: IntFieldUpdateOperationsInput | number
    consulta_data?: StringFieldUpdateOperationsInput | string
    status_id?: IntFieldUpdateOperationsInput | number
    medico_id?: IntFieldUpdateOperationsInput | number
    plano_id?: IntFieldUpdateOperationsInput | number
  }

  export type examesUpdateWithoutPacientesInput = {
    exame_nome?: StringFieldUpdateOperationsInput | string
  }

  export type examesUncheckedUpdateWithoutPacientesInput = {
    exame_id?: IntFieldUpdateOperationsInput | number
    exame_nome?: StringFieldUpdateOperationsInput | string
  }

  export type examesUncheckedUpdateManyWithoutPacientesInput = {
    exame_id?: IntFieldUpdateOperationsInput | number
    exame_nome?: StringFieldUpdateOperationsInput | string
  }

  export type consultasCreateManyPlanosInput = {
    consulta_id?: number
    consulta_data: string
    status_id: number
    medico_id: number
    paciente_id: number
  }

  export type consultasUpdateWithoutPlanosInput = {
    consulta_data?: StringFieldUpdateOperationsInput | string
    status?: statusUpdateOneRequiredWithoutConsultasNestedInput
    medicos?: medicosUpdateOneRequiredWithoutConsultasNestedInput
    pacientes?: pacientesUpdateOneRequiredWithoutConsultasNestedInput
    pagamentos?: pagamentosUpdateManyWithoutConsultasNestedInput
  }

  export type consultasUncheckedUpdateWithoutPlanosInput = {
    consulta_id?: IntFieldUpdateOperationsInput | number
    consulta_data?: StringFieldUpdateOperationsInput | string
    status_id?: IntFieldUpdateOperationsInput | number
    medico_id?: IntFieldUpdateOperationsInput | number
    paciente_id?: IntFieldUpdateOperationsInput | number
    pagamentos?: pagamentosUncheckedUpdateManyWithoutConsultasNestedInput
  }

  export type consultasUncheckedUpdateManyWithoutPlanosInput = {
    consulta_id?: IntFieldUpdateOperationsInput | number
    consulta_data?: StringFieldUpdateOperationsInput | string
    status_id?: IntFieldUpdateOperationsInput | number
    medico_id?: IntFieldUpdateOperationsInput | number
    paciente_id?: IntFieldUpdateOperationsInput | number
  }

  export type consultasCreateManyStatusInput = {
    consulta_id?: number
    consulta_data: string
    medico_id: number
    paciente_id: number
    plano_id: number
  }

  export type consultasUpdateWithoutStatusInput = {
    consulta_data?: StringFieldUpdateOperationsInput | string
    medicos?: medicosUpdateOneRequiredWithoutConsultasNestedInput
    pacientes?: pacientesUpdateOneRequiredWithoutConsultasNestedInput
    planos?: planosUpdateOneRequiredWithoutConsultasNestedInput
    pagamentos?: pagamentosUpdateManyWithoutConsultasNestedInput
  }

  export type consultasUncheckedUpdateWithoutStatusInput = {
    consulta_id?: IntFieldUpdateOperationsInput | number
    consulta_data?: StringFieldUpdateOperationsInput | string
    medico_id?: IntFieldUpdateOperationsInput | number
    paciente_id?: IntFieldUpdateOperationsInput | number
    plano_id?: IntFieldUpdateOperationsInput | number
    pagamentos?: pagamentosUncheckedUpdateManyWithoutConsultasNestedInput
  }

  export type consultasUncheckedUpdateManyWithoutStatusInput = {
    consulta_id?: IntFieldUpdateOperationsInput | number
    consulta_data?: StringFieldUpdateOperationsInput | string
    medico_id?: IntFieldUpdateOperationsInput | number
    paciente_id?: IntFieldUpdateOperationsInput | number
    plano_id?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ConsultasCountOutputTypeDefaultArgs instead
     */
    export type ConsultasCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ConsultasCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EspecialidadesCountOutputTypeDefaultArgs instead
     */
    export type EspecialidadesCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EspecialidadesCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MedicosCountOutputTypeDefaultArgs instead
     */
    export type MedicosCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MedicosCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OperadorasCountOutputTypeDefaultArgs instead
     */
    export type OperadorasCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OperadorasCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PacientesCountOutputTypeDefaultArgs instead
     */
    export type PacientesCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PacientesCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PlanosCountOutputTypeDefaultArgs instead
     */
    export type PlanosCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PlanosCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StatusCountOutputTypeDefaultArgs instead
     */
    export type StatusCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StatusCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use consultasDefaultArgs instead
     */
    export type consultasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = consultasDefaultArgs<ExtArgs>
    /**
     * @deprecated Use especialidadesDefaultArgs instead
     */
    export type especialidadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = especialidadesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use examesDefaultArgs instead
     */
    export type examesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = examesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use medicosDefaultArgs instead
     */
    export type medicosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = medicosDefaultArgs<ExtArgs>
    /**
     * @deprecated Use operadorasDefaultArgs instead
     */
    export type operadorasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = operadorasDefaultArgs<ExtArgs>
    /**
     * @deprecated Use pacientesDefaultArgs instead
     */
    export type pacientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = pacientesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use pagamentosDefaultArgs instead
     */
    export type pagamentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = pagamentosDefaultArgs<ExtArgs>
    /**
     * @deprecated Use planosDefaultArgs instead
     */
    export type planosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = planosDefaultArgs<ExtArgs>
    /**
     * @deprecated Use statusDefaultArgs instead
     */
    export type statusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = statusDefaultArgs<ExtArgs>

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