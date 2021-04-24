import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const products = [
      { id: 1, name: 'Cheques Especiais', price: 24.99 },
      { id: 2, name: 'Empréstimos Pessoal', price: 45.60 },
      { id: 3, name: 'Seguros de Residência', price: 18.99 },
      { id: 4, name: 'Cartão de crédito', price: 11.99 },
      { id: 5, name: 'Financiamento', price: 26.99 },
      { id: 6, name: 'Capitalização', price: 100.15 }
    ];
    return { products };
  }

  genId(products: Product[]): number {
    return products.length > 0 ? Math.max(...products.map(product => product.id)) + 1 : 11;
  }
}