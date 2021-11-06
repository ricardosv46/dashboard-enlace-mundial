import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string with format `Y-m-d`, e.g. `2011-05-23`. */
  Date: any;
  /** A datetime string with format `Y-m-d H:i:s`, e.g. `2018-05-23 13:43:32`. */
  DateTime: any;
  /** A datetime and timezone string in ISO 8601 format `Y-m-dTH:i:sO`, e.g. `2020-04-20T13:53:12+02:00`. */
  DateTimeTz: any;
  /** Can be used as an argument to upload files using https://github.com/jaydenseric/graphql-multipart-request-spec */
  Upload: any;
};

export type Blog = {
  __typename?: 'Blog';
  CategoriaBlog?: Maybe<CategoriaBlog>;
  blogId?: Maybe<Scalars['Int']>;
  categoriaBlogId?: Maybe<Scalars['String']>;
  descripcionCortaBlog?: Maybe<Scalars['String']>;
  descripcionLargaBlog?: Maybe<Scalars['String']>;
  destacadoBlog?: Maybe<Scalars['String']>;
  estadoBlog?: Maybe<Scalars['String']>;
  galeriaBlog?: Maybe<Array<Maybe<Imagenes>>>;
  imagenPrincipalBlog?: Maybe<Imagenes>;
  imagenSecundariaBlog?: Maybe<Imagenes>;
  keywordsBlog?: Maybe<Scalars['String']>;
  slugCategoriaBlog?: Maybe<Scalars['String']>;
  tituloBlog?: Maybe<Scalars['String']>;
};

export type BlogInput = {
  blogId?: Maybe<Scalars['Int']>;
  descripcionCortaBlog?: Maybe<Scalars['String']>;
  descripcionLargaBlog?: Maybe<Scalars['String']>;
  destacadoBlog?: Maybe<Scalars['String']>;
  estadoBlog?: Maybe<Scalars['String']>;
  galeriaBlog?: Maybe<Array<Maybe<Scalars['Int']>>>;
  imagenPrincipalBlog?: Maybe<Scalars['Int']>;
  imagenSecundariaBlog?: Maybe<Scalars['Int']>;
  keywordsBlog?: Maybe<Scalars['String']>;
  slugCategoriaBlog?: Maybe<Scalars['String']>;
  tituloBlog?: Maybe<Scalars['String']>;
};

export type CambiarContrasenaInput = {
  passwordAntiguo?: Maybe<Scalars['String']>;
  passwordNuevo?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['ID']>;
};

export type Categoria = {
  __typename?: 'Categoria';
  categoriaId?: Maybe<Scalars['Int']>;
  descripcion?: Maybe<Scalars['String']>;
  estadoCategoria?: Maybe<Scalars['String']>;
  imagenPrincipalCategoria?: Maybe<Imagenes>;
  imagenSecundariaCategoria?: Maybe<Imagenes>;
  keywordsCategoria?: Maybe<Scalars['String']>;
  slugCategoria?: Maybe<Scalars['String']>;
  tituloCategoria?: Maybe<Scalars['String']>;
};

export type CategoriaBlog = {
  __typename?: 'CategoriaBlog';
  categoriaBlogId?: Maybe<Scalars['Int']>;
  descripcionCategoriaBlog?: Maybe<Scalars['String']>;
  estadoCategoriaBlog?: Maybe<Scalars['String']>;
  imagenPrincipalCategoriaBlog?: Maybe<Imagenes>;
  imagenSecundariaCategoriaBlog?: Maybe<Imagenes>;
  keywordsCategoriaBlog?: Maybe<Scalars['String']>;
  slugCategoriaBlog?: Maybe<Scalars['String']>;
  tituloCategoriaBlog?: Maybe<Scalars['String']>;
};

export type CategoriaBlogInput = {
  categoriaBlogId?: Maybe<Scalars['Int']>;
  descripcionCategoriaBlog?: Maybe<Scalars['String']>;
  estadoCategoriaBlog?: Maybe<Scalars['String']>;
  imagenPrincipalCategoriaBlog?: Maybe<Scalars['Int']>;
  imagenSecundariaCategoriaBlog?: Maybe<Scalars['Int']>;
  keywordsCategoriaBlog?: Maybe<Scalars['String']>;
  slugCategoriaBlog?: Maybe<Scalars['String']>;
  tituloCategoriaBlog?: Maybe<Scalars['String']>;
};

export type CategoriaInput = {
  categoriaId?: Maybe<Scalars['Int']>;
  descripcion?: Maybe<Scalars['String']>;
  estadoCategoria?: Maybe<Scalars['String']>;
  imagenPrincipalCategoria?: Maybe<Scalars['Int']>;
  imagenSecundariaCategoria?: Maybe<Scalars['Int']>;
  keywordsCategoria?: Maybe<Scalars['String']>;
  slugCategoria?: Maybe<Scalars['String']>;
  tituloCategoria?: Maybe<Scalars['String']>;
};

export type Crucero = {
  __typename?: 'Crucero';
  Categoria?: Maybe<Categoria>;
  actividadesCrucero?: Maybe<Scalars['String']>;
  categoriaId?: Maybe<Scalars['String']>;
  ciudadCrucero?: Maybe<Scalars['String']>;
  cruceroId?: Maybe<Scalars['Int']>;
  descripcionCortaCrucero?: Maybe<Scalars['String']>;
  descripcionLargaCrucero?: Maybe<Scalars['String']>;
  destacadoCrucero?: Maybe<Scalars['String']>;
  estadoCrucero?: Maybe<Scalars['String']>;
  galeriaCrucero?: Maybe<Array<Maybe<Imagenes>>>;
  imagenPrincipalCrucero?: Maybe<Imagenes>;
  imagenSecundariaCrucero?: Maybe<Imagenes>;
  incluyeCrucero?: Maybe<Scalars['String']>;
  itinerarioCrucero?: Maybe<Scalars['String']>;
  keywordsCrucero?: Maybe<Scalars['String']>;
  noIncluyeCrucero?: Maybe<Scalars['String']>;
  notasCrucero?: Maybe<Scalars['String']>;
  politicasCrucero?: Maybe<Scalars['String']>;
  puntoPartidaCrucero?: Maybe<Scalars['String']>;
  regionCrucero?: Maybe<Scalars['String']>;
  slugCategoria?: Maybe<Scalars['String']>;
  slugCrucero?: Maybe<Scalars['String']>;
  tituloCrucero?: Maybe<Scalars['String']>;
  videoPresentacionCrucero?: Maybe<Scalars['String']>;
};

export type CruceroInput = {
  actividadesCrucero?: Maybe<Scalars['String']>;
  ciudadCrucero?: Maybe<Scalars['String']>;
  cruceroId?: Maybe<Scalars['Int']>;
  descripcionCortaCrucero?: Maybe<Scalars['String']>;
  descripcionLargaCrucero?: Maybe<Scalars['String']>;
  destacadoCrucero?: Maybe<Scalars['String']>;
  estadoCrucero?: Maybe<Scalars['String']>;
  galeriaCrucero?: Maybe<Array<Maybe<Scalars['Int']>>>;
  imagenPrincipalCrucero?: Maybe<Scalars['Int']>;
  imagenSecundariaCrucero?: Maybe<Scalars['Int']>;
  incluyeCrucero?: Maybe<Scalars['String']>;
  itinerarioCrucero?: Maybe<Scalars['String']>;
  keywordsCrucero?: Maybe<Scalars['String']>;
  noIncluyeCrucero?: Maybe<Scalars['String']>;
  notasCrucero?: Maybe<Scalars['String']>;
  politicasCrucero?: Maybe<Scalars['String']>;
  puntoPartidaCrucero?: Maybe<Scalars['String']>;
  regionCrucero?: Maybe<Scalars['String']>;
  slugCategoria?: Maybe<Scalars['String']>;
  slugCrucero?: Maybe<Scalars['String']>;
  tituloCrucero?: Maybe<Scalars['String']>;
  videoPresentacionCrucero?: Maybe<Scalars['String']>;
};

export type GetAllBlog = {
  __typename?: 'GetAllBlog';
  data?: Maybe<Array<Blog>>;
  nroTotalItems?: Maybe<Scalars['Int']>;
};

export type GetAllCrucero = {
  __typename?: 'GetAllCrucero';
  data?: Maybe<Array<Crucero>>;
  nroTotalItems?: Maybe<Scalars['Int']>;
};

export type GetAllLunaMiel = {
  __typename?: 'GetAllLunaMiel';
  data?: Maybe<Array<LunaMiel>>;
  nroTotalItems?: Maybe<Scalars['Int']>;
};

export type GetAllSuscripciones = {
  __typename?: 'GetAllSuscripciones';
  data?: Maybe<Array<Suscripcion>>;
  nroTotalItems?: Maybe<Scalars['Int']>;
};

export type GetAllTour = {
  __typename?: 'GetAllTour';
  data?: Maybe<Array<Tour>>;
  nroTotalItems?: Maybe<Scalars['Int']>;
};

export type GetAllUsers = {
  __typename?: 'GetAllUsers';
  data?: Maybe<Array<User>>;
  nroTotalItems?: Maybe<Scalars['Int']>;
};

export type Imagenes = {
  __typename?: 'Imagenes';
  descripcion?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  url?: Maybe<Scalars['String']>;
};

export type ImagenesInput = {
  descripcion?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  url?: Maybe<Scalars['String']>;
};

export type LunaMiel = {
  __typename?: 'LunaMiel';
  Categoria?: Maybe<Categoria>;
  actividadesLuna?: Maybe<Scalars['String']>;
  categoriaId?: Maybe<Scalars['String']>;
  ciudadLuna?: Maybe<Scalars['String']>;
  descripcionCortaLuna?: Maybe<Scalars['String']>;
  descripcionLargaLuna?: Maybe<Scalars['String']>;
  destacadoLuna?: Maybe<Scalars['String']>;
  estadoLuna?: Maybe<Scalars['String']>;
  galeriaLuna?: Maybe<Array<Maybe<Imagenes>>>;
  imagenPrincipalLuna?: Maybe<Imagenes>;
  imagenSecundariaLuna?: Maybe<Imagenes>;
  incluyeLuna?: Maybe<Scalars['String']>;
  itinerarioLuna?: Maybe<Scalars['String']>;
  keywordsLuna?: Maybe<Scalars['String']>;
  lunaMielId?: Maybe<Scalars['Int']>;
  noIncluyeLuna?: Maybe<Scalars['String']>;
  notasLuna?: Maybe<Scalars['String']>;
  politicasLuna?: Maybe<Scalars['String']>;
  puntoPartidaLuna?: Maybe<Scalars['String']>;
  regionLuna?: Maybe<Scalars['String']>;
  slugCategoria?: Maybe<Scalars['String']>;
  slugLuna?: Maybe<Scalars['String']>;
  tituloLuna?: Maybe<Scalars['String']>;
  videoPresentacionLuna?: Maybe<Scalars['String']>;
};

export type LunaMielInput = {
  actividadesLuna?: Maybe<Scalars['String']>;
  ciudadLuna?: Maybe<Scalars['String']>;
  descripcionCortaLuna?: Maybe<Scalars['String']>;
  descripcionLargaLuna?: Maybe<Scalars['String']>;
  destacadoLuna?: Maybe<Scalars['String']>;
  estadoLuna?: Maybe<Scalars['String']>;
  galeriaLuna?: Maybe<Array<Maybe<Scalars['Int']>>>;
  imagenPrincipalLuna?: Maybe<Scalars['Int']>;
  imagenSecundariaLuna?: Maybe<Scalars['Int']>;
  incluyeLuna?: Maybe<Scalars['String']>;
  itinerarioLuna?: Maybe<Scalars['String']>;
  keywordsLuna?: Maybe<Scalars['String']>;
  lunaMielId?: Maybe<Scalars['Int']>;
  noIncluyeLuna?: Maybe<Scalars['String']>;
  notasLuna?: Maybe<Scalars['String']>;
  politicasLuna?: Maybe<Scalars['String']>;
  puntoPartidaLuna?: Maybe<Scalars['String']>;
  regionLuna?: Maybe<Scalars['String']>;
  slugCategoria?: Maybe<Scalars['String']>;
  slugLuna?: Maybe<Scalars['String']>;
  tituloLuna?: Maybe<Scalars['String']>;
  videoPresentacionLuna?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  CambiarContrasenaUsuario?: Maybe<User>;
  CrearSuscripcion?: Maybe<Suscripcion>;
  CrearUsuario?: Maybe<User>;
  CreateBlog?: Maybe<Blog>;
  CreateCategoria?: Maybe<Categoria>;
  CreateCategoriaBlog?: Maybe<CategoriaBlog>;
  CreateCrucero?: Maybe<Crucero>;
  CreateImage?: Maybe<Imagenes>;
  CreateLunaMiel?: Maybe<LunaMiel>;
  CreateTour?: Maybe<Tour>;
  DeleteBlog?: Maybe<Scalars['String']>;
  DeleteCategoria?: Maybe<Scalars['String']>;
  DeleteCategoriaBlog?: Maybe<Scalars['String']>;
  DeleteCrucero?: Maybe<Scalars['String']>;
  DeleteImage?: Maybe<Scalars['String']>;
  DeleteLunaMiel?: Maybe<Scalars['String']>;
  DeleteSuscripcion?: Maybe<Scalars['String']>;
  DeleteTour?: Maybe<Scalars['String']>;
  DeleteUsuario?: Maybe<Scalars['String']>;
  RecuperarContraUsuario?: Maybe<Scalars['String']>;
  UpdateBlog?: Maybe<Blog>;
  UpdateCategoria?: Maybe<Categoria>;
  UpdateCategoriaBlog?: Maybe<CategoriaBlog>;
  UpdateCrucero?: Maybe<Crucero>;
  UpdateImage?: Maybe<Imagenes>;
  UpdateLunaMiel?: Maybe<LunaMiel>;
  UpdateTour?: Maybe<Tour>;
  UpdateUsuario?: Maybe<User>;
  login?: Maybe<User>;
};


export type MutationCambiarContrasenaUsuarioArgs = {
  input: CambiarContrasenaInput;
};


export type MutationCrearSuscripcionArgs = {
  input: SuscripcionInput;
};


export type MutationCrearUsuarioArgs = {
  input: UserInput;
};


export type MutationCreateBlogArgs = {
  input?: Maybe<BlogInput>;
};


export type MutationCreateCategoriaArgs = {
  input?: Maybe<CategoriaInput>;
};


export type MutationCreateCategoriaBlogArgs = {
  input?: Maybe<CategoriaBlogInput>;
};


export type MutationCreateCruceroArgs = {
  input?: Maybe<CruceroInput>;
};


export type MutationCreateImageArgs = {
  imagen: Scalars['Upload'];
  input?: Maybe<ImagenesInput>;
};


export type MutationCreateLunaMielArgs = {
  input?: Maybe<LunaMielInput>;
};


export type MutationCreateTourArgs = {
  input?: Maybe<TourInput>;
};


export type MutationDeleteBlogArgs = {
  input?: Maybe<BlogInput>;
};


export type MutationDeleteCategoriaArgs = {
  input?: Maybe<CategoriaInput>;
};


export type MutationDeleteCategoriaBlogArgs = {
  input?: Maybe<CategoriaBlogInput>;
};


export type MutationDeleteCruceroArgs = {
  input?: Maybe<CruceroInput>;
};


export type MutationDeleteImageArgs = {
  input: ImagenesInput;
};


export type MutationDeleteLunaMielArgs = {
  input?: Maybe<LunaMielInput>;
};


export type MutationDeleteSuscripcionArgs = {
  input: SuscripcionInput;
};


export type MutationDeleteTourArgs = {
  input?: Maybe<TourInput>;
};


export type MutationDeleteUsuarioArgs = {
  input?: Maybe<UserInput>;
};


export type MutationRecuperarContraUsuarioArgs = {
  input: UserInput;
};


export type MutationUpdateBlogArgs = {
  input?: Maybe<BlogInput>;
};


export type MutationUpdateCategoriaArgs = {
  input?: Maybe<CategoriaInput>;
};


export type MutationUpdateCategoriaBlogArgs = {
  input?: Maybe<CategoriaBlogInput>;
};


export type MutationUpdateCruceroArgs = {
  input?: Maybe<CruceroInput>;
};


export type MutationUpdateImageArgs = {
  input?: Maybe<ImagenesInput>;
};


export type MutationUpdateLunaMielArgs = {
  input?: Maybe<LunaMielInput>;
};


export type MutationUpdateTourArgs = {
  input?: Maybe<TourInput>;
};


export type MutationUpdateUsuarioArgs = {
  input?: Maybe<UserInput>;
};


export type MutationLoginArgs = {
  input: LoginInput;
};

/** Allows ordering a list of records. */
export type OrderByClause = {
  /** The column that is used for ordering. */
  field: Scalars['String'];
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Pagination information about the corresponding list of items. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** Count of nodes in current request. */
  count?: Maybe<Scalars['Int']>;
  /** Current page of request. */
  currentPage?: Maybe<Scalars['Int']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Last page in connection. */
  lastPage?: Maybe<Scalars['Int']>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
  /** Total number of node in connection. */
  total?: Maybe<Scalars['Int']>;
};

/** Pagination information about the corresponding list of items. */
export type PaginatorInfo = {
  __typename?: 'PaginatorInfo';
  /** Total count of available items in the page. */
  count: Scalars['Int'];
  /** Current pagination page. */
  currentPage: Scalars['Int'];
  /** Index of first item in the current page. */
  firstItem?: Maybe<Scalars['Int']>;
  /** If collection has more pages. */
  hasMorePages: Scalars['Boolean'];
  /** Index of last item in the current page. */
  lastItem?: Maybe<Scalars['Int']>;
  /** Last page number of the collection. */
  lastPage: Scalars['Int'];
  /** Number of items per page in the collection. */
  perPage: Scalars['Int'];
  /** Total items available in the collection. */
  total: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  GetAllBlog?: Maybe<GetAllBlog>;
  GetAllBlogCategoria?: Maybe<GetAllBlog>;
  GetAllCategoriaBlog?: Maybe<Array<Maybe<CategoriaBlog>>>;
  GetAllCrucero?: Maybe<GetAllCrucero>;
  GetAllLunaMiel?: Maybe<GetAllLunaMiel>;
  GetAllSuscripciones?: Maybe<GetAllSuscripciones>;
  GetAllTour?: Maybe<GetAllTour>;
  GetAllUsers?: Maybe<GetAllUsers>;
  GetCategoria?: Maybe<Array<Maybe<Categoria>>>;
  GetCategoriaCrucero?: Maybe<GetAllCrucero>;
  GetCategoriaLunaMiel?: Maybe<GetAllLunaMiel>;
  GetCategoriaTour?: Maybe<GetAllTour>;
  GetImagenes?: Maybe<Array<Imagenes>>;
  GetSlugCategoria?: Maybe<Categoria>;
  GetSlugCategoriaBlog?: Maybe<CategoriaBlog>;
  GetSlugCrucero?: Maybe<Crucero>;
  GetSlugLunaMiel?: Maybe<LunaMiel>;
  GetSlugTour?: Maybe<Tour>;
};


export type QueryGetAllBlogArgs = {
  estadoBlog?: Maybe<Scalars['String']>;
  numberPaginate?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
};


export type QueryGetAllBlogCategoriaArgs = {
  estadoBlog?: Maybe<Scalars['String']>;
  numberPaginate?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  slugCategoriaBlog?: Maybe<Scalars['String']>;
};


export type QueryGetAllCategoriaBlogArgs = {
  estadoCategoriaBlog?: Maybe<Scalars['String']>;
};


export type QueryGetAllCruceroArgs = {
  estadoCrucero?: Maybe<Scalars['String']>;
  numberPaginate?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
};


export type QueryGetAllLunaMielArgs = {
  estadoLuna?: Maybe<Scalars['String']>;
  numberPaginate?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
};


export type QueryGetAllSuscripcionesArgs = {
  numberPaginate?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
};


export type QueryGetAllTourArgs = {
  estadoTour?: Maybe<Scalars['String']>;
  numberPaginate?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
};


export type QueryGetAllUsersArgs = {
  estado?: Maybe<Scalars['String']>;
  numberPaginate?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  tipoUsuario?: Maybe<Scalars['String']>;
};


export type QueryGetCategoriaArgs = {
  estadoCategoria?: Maybe<Scalars['String']>;
};


export type QueryGetCategoriaCruceroArgs = {
  estadoCrucero?: Maybe<Scalars['String']>;
  numberPaginate?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  slugCategoria?: Maybe<Scalars['String']>;
};


export type QueryGetCategoriaLunaMielArgs = {
  estadoLuna?: Maybe<Scalars['String']>;
  numberPaginate?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  slugCategoria?: Maybe<Scalars['String']>;
};


export type QueryGetCategoriaTourArgs = {
  estadoTour?: Maybe<Scalars['String']>;
  numberPaginate?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  slugCategoria?: Maybe<Scalars['String']>;
};


export type QueryGetSlugCategoriaArgs = {
  slugCategoria?: Maybe<Scalars['String']>;
};


export type QueryGetSlugCategoriaBlogArgs = {
  slugCategoriaBlog?: Maybe<Scalars['String']>;
};


export type QueryGetSlugCruceroArgs = {
  slugCrucero?: Maybe<Scalars['String']>;
};


export type QueryGetSlugLunaMielArgs = {
  slugLuna?: Maybe<Scalars['String']>;
};


export type QueryGetSlugTourArgs = {
  slugTour?: Maybe<Scalars['String']>;
};

/** The available directions for ordering a list of records. */
export enum SortOrder {
  /** Sort records in ascending order. */
  Asc = 'ASC',
  /** Sort records in descending order. */
  Desc = 'DESC'
}

export type Tour = {
  __typename?: 'Tour';
  Categoria?: Maybe<Categoria>;
  actividadesTour?: Maybe<Scalars['String']>;
  categoriaId?: Maybe<Scalars['String']>;
  ciudadTour?: Maybe<Scalars['String']>;
  descripcionCortaTour?: Maybe<Scalars['String']>;
  descripcionLargaTour?: Maybe<Scalars['String']>;
  destacadoTour?: Maybe<Scalars['String']>;
  estadoTour?: Maybe<Scalars['String']>;
  galeriaTour?: Maybe<Array<Maybe<Imagenes>>>;
  imagenPrincipalTour?: Maybe<Imagenes>;
  imagenSecundariaTour?: Maybe<Imagenes>;
  incluyeTour?: Maybe<Scalars['String']>;
  itinerarioTour?: Maybe<Scalars['String']>;
  noIncluyeTour?: Maybe<Scalars['String']>;
  notasTour?: Maybe<Scalars['String']>;
  politicasTour?: Maybe<Scalars['String']>;
  puntoPartidaTour?: Maybe<Scalars['String']>;
  regionTour?: Maybe<Scalars['String']>;
  slugCategoria?: Maybe<Scalars['String']>;
  slugTour?: Maybe<Scalars['String']>;
  tituloTour?: Maybe<Scalars['String']>;
  touId?: Maybe<Scalars['Int']>;
  videoPresentacionTour?: Maybe<Scalars['String']>;
};

export type TourInput = {
  actividadesTour?: Maybe<Scalars['String']>;
  ciudadTour?: Maybe<Scalars['String']>;
  descripcionCortaTour?: Maybe<Scalars['String']>;
  descripcionLargaTour?: Maybe<Scalars['String']>;
  destacadoTour?: Maybe<Scalars['String']>;
  estadoTour?: Maybe<Scalars['String']>;
  galeriaTour?: Maybe<Array<Maybe<Scalars['Int']>>>;
  imagenPrincipalTour?: Maybe<Scalars['Int']>;
  imagenSecundariaTour?: Maybe<Scalars['Int']>;
  incluyeTour?: Maybe<Scalars['String']>;
  itinerarioTour?: Maybe<Scalars['String']>;
  noIncluyeTour?: Maybe<Scalars['String']>;
  notasTour?: Maybe<Scalars['String']>;
  politicasTour?: Maybe<Scalars['String']>;
  puntoPartidaTour?: Maybe<Scalars['String']>;
  regionTour?: Maybe<Scalars['String']>;
  slugCategoria?: Maybe<Scalars['String']>;
  slugTour?: Maybe<Scalars['String']>;
  tituloTour?: Maybe<Scalars['String']>;
  touId?: Maybe<Scalars['Int']>;
  videoPresentacionTour?: Maybe<Scalars['String']>;
};

/** Specify if you want to include or exclude trashed results from a query. */
export enum Trashed {
  /** Only return trashed results. */
  Only = 'ONLY',
  /** Return both trashed and non-trashed results. */
  With = 'WITH',
  /** Only return non-trashed results. */
  Without = 'WITHOUT'
}

export type User = {
  __typename?: 'User';
  apellidos?: Maybe<Scalars['String']>;
  apiToken?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  estado?: Maybe<Scalars['Int']>;
  nombre?: Maybe<Scalars['String']>;
  tipoUsuario?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['ID']>;
};

export type UserInput = {
  apellidos?: Maybe<Scalars['String']>;
  apiToken?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  estado?: Maybe<Scalars['Int']>;
  nombre?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  tipoUsuario?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['ID']>;
};

export type LoginInput = {
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type Suscripcion = {
  __typename?: 'suscripcion';
  email?: Maybe<Scalars['String']>;
  suscripcionId?: Maybe<Scalars['Int']>;
};

export type SuscripcionInput = {
  email?: Maybe<Scalars['String']>;
  suscripcionId?: Maybe<Scalars['Int']>;
};

export type GetCategoriaQueryVariables = Exact<{
  estadoCategoria?: Maybe<Scalars['String']>;
}>;


export type GetCategoriaQuery = { __typename?: 'Query', GetCategoria?: Array<{ __typename?: 'Categoria', categoriaId?: number | null | undefined, slugCategoria?: string | null | undefined, tituloCategoria?: string | null | undefined, descripcion?: string | null | undefined, estadoCategoria?: string | null | undefined, keywordsCategoria?: string | null | undefined, imagenPrincipalCategoria?: { __typename?: 'Imagenes', id?: string | null | undefined, descripcion?: string | null | undefined, url?: string | null | undefined } | null | undefined, imagenSecundariaCategoria?: { __typename?: 'Imagenes', id?: string | null | undefined, descripcion?: string | null | undefined, url?: string | null | undefined } | null | undefined } | null | undefined> | null | undefined };

export type GetAllCategoriaBlogQueryVariables = Exact<{
  estadoCategoriaBlog?: Maybe<Scalars['String']>;
}>;


export type GetAllCategoriaBlogQuery = { __typename?: 'Query', GetAllCategoriaBlog?: Array<{ __typename?: 'CategoriaBlog', categoriaBlogId?: number | null | undefined, slugCategoriaBlog?: string | null | undefined, tituloCategoriaBlog?: string | null | undefined, estadoCategoriaBlog?: string | null | undefined, descripcionCategoriaBlog?: string | null | undefined, keywordsCategoriaBlog?: string | null | undefined, imagenPrincipalCategoriaBlog?: { __typename?: 'Imagenes', id?: string | null | undefined, descripcion?: string | null | undefined, url?: string | null | undefined } | null | undefined, imagenSecundariaCategoriaBlog?: { __typename?: 'Imagenes', id?: string | null | undefined, descripcion?: string | null | undefined, url?: string | null | undefined } | null | undefined } | null | undefined> | null | undefined };

export type GetAllUsersQueryVariables = Exact<{
  page?: Maybe<Scalars['Int']>;
  numberPaginate?: Maybe<Scalars['Int']>;
  tipoUsuario?: Maybe<Scalars['String']>;
  estado?: Maybe<Scalars['String']>;
}>;


export type GetAllUsersQuery = { __typename?: 'Query', GetAllUsers?: { __typename?: 'GetAllUsers', nroTotalItems?: number | null | undefined, data?: Array<{ __typename?: 'User', userId?: string | null | undefined, nombre?: string | null | undefined, apellidos?: string | null | undefined, email?: string | null | undefined, estado?: number | null | undefined, apiToken?: string | null | undefined }> | null | undefined } | null | undefined };


export const GetCategoriaDocument = gql`
    query GetCategoria($estadoCategoria: String) {
  GetCategoria(estadoCategoria: $estadoCategoria) {
    categoriaId
    slugCategoria
    tituloCategoria
    descripcion
    estadoCategoria
    keywordsCategoria
    imagenPrincipalCategoria {
      id
      descripcion
      url
    }
    imagenSecundariaCategoria {
      id
      descripcion
      url
    }
  }
}
    `;

/**
 * __useGetCategoriaQuery__
 *
 * To run a query within a React component, call `useGetCategoriaQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategoriaQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategoriaQuery({
 *   variables: {
 *      estadoCategoria: // value for 'estadoCategoria'
 *   },
 * });
 */
export function useGetCategoriaQuery(baseOptions?: Apollo.QueryHookOptions<GetCategoriaQuery, GetCategoriaQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCategoriaQuery, GetCategoriaQueryVariables>(GetCategoriaDocument, options);
      }
export function useGetCategoriaLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCategoriaQuery, GetCategoriaQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCategoriaQuery, GetCategoriaQueryVariables>(GetCategoriaDocument, options);
        }
export type GetCategoriaQueryHookResult = ReturnType<typeof useGetCategoriaQuery>;
export type GetCategoriaLazyQueryHookResult = ReturnType<typeof useGetCategoriaLazyQuery>;
export type GetCategoriaQueryResult = Apollo.QueryResult<GetCategoriaQuery, GetCategoriaQueryVariables>;
export const GetAllCategoriaBlogDocument = gql`
    query GetAllCategoriaBlog($estadoCategoriaBlog: String) {
  GetAllCategoriaBlog(estadoCategoriaBlog: $estadoCategoriaBlog) {
    categoriaBlogId
    slugCategoriaBlog
    tituloCategoriaBlog
    estadoCategoriaBlog
    descripcionCategoriaBlog
    keywordsCategoriaBlog
    imagenPrincipalCategoriaBlog {
      id
      descripcion
      url
    }
    imagenSecundariaCategoriaBlog {
      id
      descripcion
      url
    }
  }
}
    `;

/**
 * __useGetAllCategoriaBlogQuery__
 *
 * To run a query within a React component, call `useGetAllCategoriaBlogQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllCategoriaBlogQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllCategoriaBlogQuery({
 *   variables: {
 *      estadoCategoriaBlog: // value for 'estadoCategoriaBlog'
 *   },
 * });
 */
export function useGetAllCategoriaBlogQuery(baseOptions?: Apollo.QueryHookOptions<GetAllCategoriaBlogQuery, GetAllCategoriaBlogQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllCategoriaBlogQuery, GetAllCategoriaBlogQueryVariables>(GetAllCategoriaBlogDocument, options);
      }
export function useGetAllCategoriaBlogLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllCategoriaBlogQuery, GetAllCategoriaBlogQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllCategoriaBlogQuery, GetAllCategoriaBlogQueryVariables>(GetAllCategoriaBlogDocument, options);
        }
export type GetAllCategoriaBlogQueryHookResult = ReturnType<typeof useGetAllCategoriaBlogQuery>;
export type GetAllCategoriaBlogLazyQueryHookResult = ReturnType<typeof useGetAllCategoriaBlogLazyQuery>;
export type GetAllCategoriaBlogQueryResult = Apollo.QueryResult<GetAllCategoriaBlogQuery, GetAllCategoriaBlogQueryVariables>;
export const GetAllUsersDocument = gql`
    query GetAllUsers($page: Int, $numberPaginate: Int, $tipoUsuario: String, $estado: String) {
  GetAllUsers(
    page: $page
    numberPaginate: $numberPaginate
    tipoUsuario: $tipoUsuario
    estado: $estado
  ) {
    nroTotalItems
    data {
      userId
      nombre
      apellidos
      email
      estado
      apiToken
    }
  }
}
    `;

/**
 * __useGetAllUsersQuery__
 *
 * To run a query within a React component, call `useGetAllUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllUsersQuery({
 *   variables: {
 *      page: // value for 'page'
 *      numberPaginate: // value for 'numberPaginate'
 *      tipoUsuario: // value for 'tipoUsuario'
 *      estado: // value for 'estado'
 *   },
 * });
 */
export function useGetAllUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, options);
      }
export function useGetAllUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, options);
        }
export type GetAllUsersQueryHookResult = ReturnType<typeof useGetAllUsersQuery>;
export type GetAllUsersLazyQueryHookResult = ReturnType<typeof useGetAllUsersLazyQuery>;
export type GetAllUsersQueryResult = Apollo.QueryResult<GetAllUsersQuery, GetAllUsersQueryVariables>;