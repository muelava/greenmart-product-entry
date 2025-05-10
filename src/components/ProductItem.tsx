import { useState } from "react";
import CategoryItem from "./CategoryItem";
import type { Category, Product } from "../types";
import { Add, Trash } from "iconsax-reactjs";
import { TertiaryButton } from "./Button";

interface Props {
    index: number;
    product: Product;
    onRemove: () => void;
    onUpdate: (data: Partial<Product>) => void;
}

const MAX_CATEGORIES = 3;

const ProductItem = ({ index, product, onRemove, onUpdate }: Props) => {
    const [categories, setCategories] = useState<Category[]>([]);

    const addCategory = () => {
        if (categories.length < MAX_CATEGORIES) {
            setCategories([
                ...categories,
                { id: Date.now(), name: "", image: null },
            ]);
        }
    };

    const removeCategory = (id: number) => {
        setCategories(categories.filter((c) => c.id !== id));
    };

    const updateCategory = (id: number, data: Partial<Category>) => {
        setCategories(
            categories.map((c) => (c.id === id ? { ...c, ...data } : c))
        );
    };

    return (
        <div className="border rounded-xl border-slate-100 shadow p-2.5 mb-2.5">
            <div className="flex py-2 gap-3 items-center">
                <span className="text-xs font-semibold flex justify-center items-center rounded-full bg-emerald-100 size-5 text-emerald-500">{index + 1}</span>
                <input
                    type="text"
                    placeholder="Nama Produk"
                    className="border-b border-slate-200 focus:border-emerald-500 outline-0 flex-auto text-base placeholder:text-sm py-2 transition-all duration-300"
                    value={product.name}
                    onChange={(e) => onUpdate({ name: e.target.value })}
                    autoFocus
                />
                <button className="bg-rose-150 ms-auto cursor-pointer bg-rose-50 hover:bg-rose-100 p-1.5 rounded-lg transition-all duration-300" onClick={onRemove} title={"Hapus produk " + product.name}>
                    <Trash className="text-rose-500" size={18} />
                </button>
            </div>

            <div>
                <div className="px-5">
                    <textarea placeholder="Deskripsi produk" className="h-auto border-b border-slate-200 outline-0 field-sizing-content w-full text-sm p-2 mb-3" onChange={(e) => onUpdate({ description: e.target.value })} value={product.description} />
                </div>
                {categories.map((category) => (
                    <CategoryItem
                        key={category.id}
                        category={category}
                        onRemove={() => removeCategory(category.id)}
                        onUpdate={(data) => updateCategory(category.id, data)}
                    />
                ))}
                {categories.length < MAX_CATEGORIES ? (
                    <TertiaryButton onClick={addCategory}> <Add size={16} /> Tambah Kategori</TertiaryButton>
                ) : (
                    <p className="text-xs text-amber-500 my-1">Anda Sudah Mencapai Maksimum Input</p>
                )}
            </div>
        </div>
    );
};

export default ProductItem;
