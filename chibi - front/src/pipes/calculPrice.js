export const calculPrice = (htPrice, taxe) => {
    const amountTaxe = htPrice * taxe / 100;
    const ttcPrice = htPrice + amountTaxe;
    return ttcPrice
  }