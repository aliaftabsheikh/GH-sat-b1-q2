"use client"

import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";


async function uploadImageToSanity(imageUrl: any) {
  try {
    // Fetch image data from the URL
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    const buffer = Buffer.from(response.data);

    // Upload the image to Sanity
    const asset = await client.assets.upload('image', buffer, {
      filename: imageUrl.split('/').pop(),
    });

    return asset._id; // Return the uploaded image asset ID
  } catch (error) {
    console.error('❌ Failed to upload image:', error);
    throw error;
  }
}

export default function Home() {

  const [status, setStatus] = useState('');
  const [products, setProducts] = useState([]);


   const importProducts = async () => {
    setStatus('Importing products...');
    try {
      // Fetch product data from the external API
      const response = await axios.get('https://fakestoreapi.com/products');
      const productsData = response.data;
  
      // Map over products and process them concurrently
      const productPromises = productsData.map(async (product: any) => {
        let imageRef = '';
  
        // Upload image only if it exists
        if (product.image) {
          imageRef = await uploadImageToSanity(product.image);
        }
  
        // Check if the product already exists
        const existingProduct = await client.fetch(
          { id: `product-${product.id}` }
        );
  
        if (!existingProduct) {
          // Create the product object for Sanity
          const sanityProduct = {
            _id: `product-${product.id}`,
            _type: 'product',
            name: product.title,
            price: product.price,
            description: product.description,
            tags: product.category ? [product.category] : [],
            rating: product.rating?.rate || 0,
            ratingCount: product.rating?.count || 0,
            image: {
              _type: 'image',
              asset: {
                _type: 'reference',
                _ref: imageRef,
              },
            },
          };
  
          // Add the product to Sanity
          await client.create(sanityProduct);
          console.log(`✅ Imported product: ${sanityProduct.name}`);
          return sanityProduct;
        } else {
          console.log(`⚠️ Skipped product: ${product.title} (already exists)`);
          return null; // Skip this product
        }
      });
  
      // Resolve all promises concurrently
      const importedProducts = await Promise.all(productPromises);
  
      // Filter out null values (products that were skipped)
      const filteredProducts = importedProducts.filter((product) => product !== null);
  
      // Update state with the imported products
      setProducts(filteredProducts);
      setStatus('✅ Products imported successfully!');
    } catch (error) {
      console.error('❌ Error importing products:', error);
      setStatus('❌ Failed to import products. Check the console for details.');
    }
  };
  

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Sanity Product Importer</h1>
      <button
        onClick={importProducts}
        style={{
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Import Products
      </button>
      <p style={{ marginTop: '10px' }}>{status}</p>
      <h2>Imported Products</h2>
      {products.length > 0 ? (
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #ccc', padding: '10px' }}>Name</th>
              <th style={{ border: '1px solid #ccc', padding: '10px' }}>Price</th>
              <th style={{ border: '1px solid #ccc', padding: '10px' }}>Description</th>
              <th style={{ border: '1px solid #ccc', padding: '10px' }}>Rating</th>
              <th style={{ border: '1px solid #ccc', padding: '10px' }}>Image</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product:any) => (
              <tr key={product._id}>
                <td style={{ border: '1px solid #ccc', padding: '10px' }}>{product.name}</td>
                <td style={{ border: '1px solid #ccc', padding: '10px' }}>${product.price}</td>
                <td style={{ border: '1px solid #ccc', padding: '10px' }}>{product.description}</td>
                <td style={{ border: '1px solid #ccc', padding: '10px' }}>{product.rating}</td>
                <td style={{ border: '1px solid #ccc', padding: '10px' }}>
                  {product.image && product.image.asset && (
                    <Image
                      src={urlFor(product.image).url()}
                      alt={product.name}
                      width={100}
                      height={100}
                    />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No products imported yet.</p>
      )}
    </div>

  );
}
