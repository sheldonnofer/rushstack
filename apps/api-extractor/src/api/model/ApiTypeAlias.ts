// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.

import { ApiItemKind } from '../items/ApiItem';
import { ApiDeclarationMixin, IApiDeclarationMixinOptions } from '../mixins/ApiDeclarationMixin';
import { ApiDocumentedItem, IApiDocumentedItemOptions } from '../items/ApiDocumentedItem';
import { ApiReleaseTagMixin, IApiReleaseTagMixinOptions } from '../mixins/ApiReleaseTagMixin';

/**
 * Constructor options for {@link ApiTypeAlias}.
 * @public
 */
export interface IApiTypeAliasOptions extends
  IApiDeclarationMixinOptions,
  IApiReleaseTagMixinOptions,
  IApiDocumentedItemOptions {
}

/**
 * Represents a TypeScript type alias declaration.
 *
 * @remarks
 *
 * This is part of the {@link ApiModel} hierarchy of classes, which are serializable representations of
 * API declarations.
 *
 * `ApiTypeAlias` represents a definition such as one of these examples:
 *
 * ```ts
 * // A union type:
 * export type Shape = Square | Triangle | Circle;
 *
 * // A generic type alias:
 * export type BoxedValue<T> = { value: T };
 *
 * export type BoxedArray<T> = { array: T[] };
 *
 * // A conditional type alias:
 * export type Boxed<T> = T extends any[] ? BoxedArray<T[number]> : BoxedValue<T>;
 *
 * ```
 *
 * @public
 */
export class ApiTypeAlias extends ApiDeclarationMixin(ApiReleaseTagMixin(ApiDocumentedItem)) {
  public static getCanonicalReference(name: string): string {
    return name;
  }

  public constructor(options: IApiTypeAliasOptions) {
    super(options);
  }

  /** @override */
  public get kind(): ApiItemKind {
    return ApiItemKind.TypeAlias;
  }

  /** @override */
  public get canonicalReference(): string {
    return ApiTypeAlias.getCanonicalReference(this.name);
  }
}
