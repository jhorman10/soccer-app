export interface Team {
  content: Content[];
  pageable: Pageable;
  totalPages: number;
  totalElements: number;
  last: boolean;
  first: boolean;
  numberOfElements: number;
  sort: Sort;
  size: number;
  number: number;
  empty: boolean;
}

export interface Content {
  id: number;
  nombre: string;
  estadio: string;
  sitioWeb: null | string;
  nacionalidad: string;
  fundacion: string;
  entrenador: string;
  capacidad: number;
  valor: number | null;
}

export interface Pageable {
  sort: Sort;
  pageSize: number;
  pageNumber: number;
  offset: number;
  paged: boolean;
  unpaged: boolean;
}

export interface Sort {
  sorted: boolean;
  unsorted: boolean;
  empty: boolean;
}
