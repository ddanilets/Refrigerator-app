export function checkProductForExistance(products, product) {
  return products.filter(el => el.id === product.id).length === 1;
}