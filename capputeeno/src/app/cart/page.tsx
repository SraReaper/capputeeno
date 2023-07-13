'use client';

import { BackBtn } from '@/Components/back-button';
import { CartItem } from '@/Components/cart/cart-item';
import {
  CartList,
  CartListContainer,
  CartResultContainer,
  Container,
  ShopBtn,
  TotalItem,
} from '@/Components/component-cart-container';
import { DefaultPageLayout } from '@/Components/default-page-layout';
import { Divider } from '@/Components/divider';
import { useLocalStorage } from '@/Hooks/useLocalStorage';
import { ProductInCart } from '@/Types/product';
import { formatPrice } from '@/Utils/format-price';

export default function CartPage() {
  const { value, updateLocalStorage } = useLocalStorage<ProductInCart[]>(
    'cart-items',
    [],
  );

  const calculateTotal = (value: ProductInCart[]) => {
    return value.reduce(
      (sum, item) => (sum += item.price_in_cents * item.quantity),
      0,
    );
  };

  const cartTotal = formatPrice(calculateTotal(value));
  const DeliveryFee = 4000;
  const cartTotalWithDelivery = formatPrice(
    calculateTotal(value) + DeliveryFee,
  );

  const handleUpdateQuantity = (id: string, quantity: number) => {
    const newValue = value.map((item) => {
      if (item.id !== id) return item;
      return { ...item, quantity: quantity };
    });
    updateLocalStorage(newValue);
  };

  const handleDeleteItem = (id: string) => {
    const newValue = value.filter((item) => {
      if (item.id !== id) return item;
    });
    updateLocalStorage(newValue);
  };

  return (
    <DefaultPageLayout>
      <Container>
        <CartListContainer>
          <BackBtn navigate="/" />
          <h3>Seu carrinho</h3>
          <p>
            Total {value.length} produtos
            <span>{cartTotal}</span>
          </p>
          <CartList>
            {value.map((item) => (
              <CartItem
                product={item}
                key={item.id}
                handleDelete={handleDeleteItem}
                handleUpdateQuantity={handleUpdateQuantity}
              />
            ))}
          </CartList>
        </CartListContainer>
        <CartResultContainer>
          <h3>Resumo do Pedido</h3>
          <TotalItem isBold={false}>
            <p>Subtotal de produtos</p>
            <p>{cartTotal}</p>
          </TotalItem>
          <TotalItem isBold={false}>
            <p>Entrega</p>
            <p>{formatPrice(DeliveryFee)}</p>
          </TotalItem>
          <Divider />
          <TotalItem isBold={true}>
            <p>Total</p>
            <p>{cartTotalWithDelivery}</p>
          </TotalItem>
          <ShopBtn>FINALIZAR A COMPRA</ShopBtn>
        </CartResultContainer>
      </Container>
    </DefaultPageLayout>
  );
}
