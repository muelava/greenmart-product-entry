import { useState } from "react";
import type { Category } from "../types";
import { CloseCircle, Image, Trash } from "iconsax-reactjs";
import toast from "react-hot-toast";

interface Props {
    category: Category;
    onRemove: () => void;
    onUpdate: (data: Partial<Category>) => void;
}

const CategoryItem = ({ category, onRemove, onUpdate }: Props) => {
    const [showConfirm, setShowConfirm] = useState(false);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (
            file &&
            ["image/png", "image/jpeg", "image/jpg"].includes(file.type)
        ) {
            onUpdate({ image: URL.createObjectURL(file) });
        } else {
            alert("File harus JPG, JPEG, atau PNG.");
        }
    };

    return (
        <>
            <div className="px-5 mb-2 flex gap-3 w-full items-center border-b pb-2 border-slate-200">
                {category.image && (
                    <div>
                        <img src={category.image} alt="preview" className="size-14 border border-transparent rounded object-cover" />
                        <button className="w-full flex justify-center cursor-pointer rounded-full mt-0.5 py-0.5  hover:bg-rose-50 transition-all duration-300" onClick={() => setShowConfirm(true)} title="Hapus gambar"><Trash className="text-rose-500" size={14} /></button>
                    </div>
                )}

                {!category.image && (
                    <div>
                        <input type="file" id={`product-${category.id}`} accept=".jpg,.jpeg,.png" className="text-xs hidden" onChange={handleFileChange} />
                        <label className="size-14 cursor-pointer hover:text-emerald-700 text-emerald-500 flex justify-center items-center border border-dashed border-emerald-300 rounded" htmlFor={`product-${category.id}`}> <Image variant="Bulk" className="text-emerald-300" /> </label>
                    </div>
                )}

                <div className="flex-auto">
                    <input
                        type="text"
                        placeholder="Kategori"
                        className="border-b border-slate-200 w-full max-w-xs focus:border-emerald-500 outline-0 text-xs py-1.5 transition-all duration-300"
                        value={category.name}
                        onChange={(e) => onUpdate({ name: e.target.value })}
                    />
                </div>

                <div>
                    <button className="bg-rose-150 cursor-pointer p-1.5 rounded-lg hover:bg-rose-50 transition-all duration-300" onClick={onRemove} title="Hapus kategori">
                        <CloseCircle className="text-rose-500" size={18} />
                    </button>
                </div>
            </div>

            {/* Modal Confirm */}
            {showConfirm && (
                <div className="fixed bg-neutral-700/40 left-0 right-0 bottom-0 top-0 z-10 flex items-center p-3">
                    <div className="bg-white w-md mx-auto p-3 rounded-xl">
                        <p>Apakah Anda Yakin untuk Menghapus Gambar?</p>
                        <div className="flex gap-3 mt-10">
                            <button onClick={() => setShowConfirm(false)} className="bg-slate-50 hover:bg-slate-100 transition-all duration-300 cursor-pointer py-2 px-4 rounded-lg text-sm text-slate-500 hover:text-600">
                                Batalkan
                            </button>
                            <button
                                onClick={() => {
                                    onUpdate({ image: null });
                                    setShowConfirm(false);
                                    toast.success("Gambar berhasil dihapus.")
                                }}
                                className="bg-rose-50 hover:bg-rose-100 transition-all duration-300 cursor-pointer py-2 px-4 rounded-lg text-sm text-rose-400 hover:text-500"
                            >
                                Hapus
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default CategoryItem;
