import { Component } from '../component';
import { Product } from '../product/product';
import html from './favorites.tpl.html';
import { favoritesService } from '../../services/favorites.service';
import { ProductData } from 'types';


class Favorites extends Component {
    products!: ProductData[];

    async render() {
        this.products = await favoritesService.get();

        this.products.forEach((product) => {
            const productComp = new Product(product, { isHorizontal: false });
            productComp.render();
            productComp.attach(this.view.favorites);
        });
    }
}

export const favoritesComp = new Favorites(html);