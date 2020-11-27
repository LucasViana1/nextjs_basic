import { useState } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic'

const CartModal = dynamic(
  () => import('@/components/CartModal'),
  { loading: () => <p>Carregando...</p> }
)

export default function Product() {
  const router = useRouter();
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  const handleAddToCart = () => {
    setIsCartModalOpen(true);
  }

  return (
    <div>
      <h1>Product</h1>
      <h4>{router.query.slug}</h4>
      <br />

      <button onClick={handleAddToCart}>Adicionar ao carrinho</button>

      {isCartModalOpen && <CartModal />}
    </div>
  )
}