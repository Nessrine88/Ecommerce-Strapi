import type { Schema, Struct } from '@strapi/strapi';

export interface PricesPrices extends Struct.ComponentSchema {
  collectionName: 'components_prices_prices';
  info: {
    displayName: 'prices';
  };
  attributes: {
    price: Schema.Attribute.Float;
  };
}

export interface QuantityQuantity extends Struct.ComponentSchema {
  collectionName: 'components_quantity_quantities';
  info: {
    displayName: 'quantity';
  };
  attributes: {
    quantity: Schema.Attribute.Enumeration<
      ['Q-50-ml', 'Q-100-ml', 'Q-200-ml', 'Q-250-ml', 'Q-500-ml', 'Q-1000-ml']
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'prices.prices': PricesPrices;
      'quantity.quantity': QuantityQuantity;
    }
  }
}
