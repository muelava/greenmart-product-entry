import { useState } from "react";
import ProductItem from "./ProductItem";
import type { Product } from "../types";
import { Add, EmojiSad } from "iconsax-reactjs";
import { PrimaryButton } from "./Button";

const MAX_PRODUCTS = 5;

const ProductList = () => {
    const [products, setProducts] = useState<Product[]>([]);

    const addProduct = () => {
        if (products.length < MAX_PRODUCTS) {
            setProducts([
                ...products,
                { id: Date.now(), name: "", description: "", categories: [] },
            ]);
        }
    };

    const removeProduct = (id: number) => {
        setProducts(products.filter((p) => p.id !== id));
    };

    const updateProduct = (id: number, data: Partial<Product>) => {
        setProducts(
            products.map((p) => (p.id === id ? { ...p, ...data } : p))
        );
    };

    return (
        <>
            <div className="max-w-xl mx-auto p-4 min-h-screen py-24">
                <h2 className="font-semibold mb-10 text-xl text-neutral-700">Daftar Produk</h2>

                {products.map((product, index) => (
                    <ProductItem
                        key={product.id}
                        index={index}
                        product={product}
                        onRemove={() => removeProduct(product.id)}
                        onUpdate={(data) => updateProduct(product.id, data)}
                    />
                ))}

                {!products.length && (
                    <div className="py-5 flex justify-center flex-col items-center">
                        <EmojiSad variant="Bulk" className="text-emerald-500/40" size={100} />
                        <p className="text-center font-semibold mb-3 text-neutral-600">Tidak ada produk</p>
                        <p className="text-center font-light mb-3 text-neutral-400 max-w-xs text-sm">Tambahkan produk dengan menekan tombol "Tambah Produk"</p>
                        <PrimaryButton onClick={addProduct} className="text-sm">Tambah Produk</PrimaryButton>
                    </div>
                )}
            </div>

            <div className="fixed w-full bottom-0 bg-white">
                <div className="w-full max-w-lg mx-auto p-4">
                    {products.length < MAX_PRODUCTS ? (
                        <PrimaryButton className="w-full" onClick={addProduct}><Add size={20} />Tambah Produk</PrimaryButton>
                    ) : (
                        <p className="text-amber-500 my-1 text-center">Anda Sudah Mencapai Maksimum Input</p>
                    )}
                </div>
            </div>
        </>
    );
};

export default ProductList;
