// [1,2,3,4,5,...,7]

export const generatePaginationNumbers = (currentPage: number, totalPages: number) => {
  // Si el numero total de paginas es 7 o menos, vamos a mostrar todas las paginas sin puntos suspensivos
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // Si la pagina actual esta entre la sprimeras 3 paginas, mostras las primeras 3, puntos suspensivos y las ultimas 2
  if (currentPage <= 3) {
    return [1, 2, 3, "...", totalPages - 1, totalPages];
  }

  // Si la pagina actual esta entre las ultimas 3 , mostrar las priemra 2, ... y luego las ultmas 3
  if (currentPage >= totalPages - 2) {
    return [1, 2, "...", totalPages - 2, totalPages - 1, totalPages];
  }

  // Si la pagina actual está en otrolugar medio, mostras la primera pagina, ..., la paginaa actual y vecinos
  return [
    1,
    "...",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    "...",
    totalPages,
  ];
};
