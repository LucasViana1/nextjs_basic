import { useRouter } from 'next/router'

export default function Product() {
  const router = useRouter();

  return (
    <div>
      <h1>Product</h1>
      <h4>{router.query.slug}</h4>
    </div>
  )
}