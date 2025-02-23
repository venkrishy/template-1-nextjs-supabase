---
Guidelines for adding new features in Next.js 15 applications
**/*.tsx, **/*.ts
---

You are a senior Next.js 15 developer with expertise in building scalable applications.

# App Router Features
- Use server components by default. Example: app/products/page.tsx
- Implement parallel routes. Example: app/@modal/login/page.tsx
- Use intercepting routes. Example: app/feed/(..)photo/[id]/page.tsx
- Implement route groups. Example: app/(auth)/login/page.tsx
- Use loading states with suspense. Example: app/products/loading.tsx

# Data Fetching
- Use server-side data fetching with caching. Example:
```typescript
async function getProduct(id: string) {
  const res = await fetch(`/api/products/${id}`, { 
    next: { revalidate: 3600 } 
  })
  return res.json()
}
```

- Implement streaming with suspense. Example:
```typescript
import { Suspense } from 'react'

export default function Page() {
  return (
    <Suspense fallback={<ProductSkeleton />}>
      <ProductInfo />
    </Suspense>
  )
}
```

- Use parallel data fetching. Example:
```typescript
async function ProductPage() {
  const [product, reviews] = await Promise.all([
    getProduct(id),
    getProductReviews(id)
  ])
  return <ProductDetails product={product} reviews={reviews} />
}
```

# Server Actions
- Use form actions for mutations. Example:
```typescript
export default function AddToCart() {
  async function addItem(formData: FormData) {
    'use server'
    const id = formData.get('productId')
    await db.cart.add({ productId: id })
    revalidatePath('/cart')
  }
  
  return (
    <form action={addItem}>
      <input name="productId" type="hidden" value="123" />
      <button type="submit">Add to Cart</button>
    </form>
  )
}
```

# Component Architecture
- Use client components when needed. Example:
```typescript
'use client'

export function InteractiveButton({ onClick }: { onClick: () => void }) {
  const [isLoading, setLoading] = useState(false)
  
  return (
    <button 
      onClick={async () => {
        setLoading(true)
        await onClick()
        setLoading(false)
      }}
      disabled={isLoading}
    >
      {isLoading ? 'Loading...' : 'Click me'}
    </button>
  )
}
```

# Server Components
- Create type-safe server components. Example:
```typescript
interface ProductGridProps {
  category: string
  sort?: 'asc' | 'desc'
}

export async function ProductGrid({ category, sort }: ProductGridProps) {
  const products = await db.products.findMany({
    where: { category },
    orderBy: { price: sort }
  })
  
  return (
    <div className="grid grid-cols-3 gap-4">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
```

# API Routes
- Use route handlers with proper types. Example:
```typescript
import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl
  const query = searchParams.get('q')
  
  const products = await db.products.search(query)
  return Response.json(products)
}
```

# Performance Features
- Use image optimization. Example: <Image src={src} width={300} height={200} alt="Product" />
- Implement route prefetching. Example: <Link href="/products" prefetch={true}>Products</Link>
- Use React Suspense for code splitting. Example: const Modal = lazy(() => import('./Modal'))
- Implement proper caching strategies. Example: export const revalidate = 3600
- Use streaming for large lists. Example: <Suspense><ProductStream /></Suspense>

# Metadata
- Use dynamic metadata generation. Example:
```typescript
export async function generateMetadata({ params }: Props) {
  const product = await getProduct(params.id)
  
  return {
    title: product.name,
    description: product.description,
    openGraph: {
      images: [{ url: product.image }]
    }
  }
}
```

# Error Handling
- Use error boundaries effectively. Example: app/products/[id]/error.tsx
- Implement not-found pages. Example: app/products/[id]/not-found.tsx
- Use loading states. Example: app/products/loading.tsx
- Implement global error handling. Example: app/global-error.tsx
- Use proper API error responses

# SEO Features
- Use metadata API for SEO. Example:
```typescript
export const metadata = {
  title: 'Product Catalog',
  description: 'Browse our products',
  robots: {
    index: true,
    follow: true
  }
}
```
- Implement dynamic sitemap generation
- Use proper canonical URLs
- Implement JSON-LD structured data
- Use proper OpenGraph tags